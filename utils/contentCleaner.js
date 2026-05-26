// utils/contentCleaner.js
export function cleanBlogContent(html) {
  if (!html) return "";

  // First, decode HTML entities
  let cleaned = html
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Remove Quill cursor artifacts
  cleaned = cleaned.replace(/<[^>]*class="ql-cursor"[^>]*>.*?<\/[^>]*>/g, "");
  cleaned = cleaned.replace(/<[^>]*ql-cursor[^>]*>\s*\uFEFF?\s*<\/[^>]*>/g, "");

  // Remove the specific cursor-in-bold pattern
  cleaned = cleaned.replace(
    /<p><strong[^>]*><span[^>]*class="ql-cursor"[^>]*>\uFEFF?<\/span><\/strong><\/p>/g,
    ""
  );

  // Remove empty paragraphs with <br>
  cleaned = cleaned.replace(/<p>(\s|&nbsp;)*<br\s*\/?>(\s|&nbsp;)*<\/p>/gi, "");

  // Remove empty paragraphs with only whitespace or &nbsp;
  cleaned = cleaned.replace(/<p>(\s|&nbsp;)*<\/p>/gi, "");

  // Remove paragraphs with only empty spans or strong tags
  cleaned = cleaned.replace(
    /<p>\s*<(?:strong|span|em|b)[^>]*>\s*<\/\1>\s*<\/p>/g,
    ""
  );

  // Remove multiple consecutive empty lines
  cleaned = cleaned.replace(/(<br\s*\/?>\s*){2,}/gi, "<br>");

  // Remove zero-width spaces and other invisible characters
  cleaned = cleaned.replace(/[\u200B-\u200D\uFEFF]/g, "");

  // Normalize spacing around headings
  cleaned = cleaned.replace(/<\/h[1-6]>\s*<br\s*\/?>\s*<h[1-6]>/g, "</h$1><h$2>");

  // Remove leading/trailing whitespace
  cleaned = cleaned.trim();

  return cleaned;
}

const CMS_BASE_URL = "https://cms.daikimedia.com";

/**
 * Resolve a (possibly relative) Quill image src to an absolute CMS URL.
 *   ../../../blogs/content-images/x.jpg -> https://cms.daikimedia.com/blogs/content-images/x.jpg
 *   /blogs/content-images/x.jpg         -> https://cms.daikimedia.com/blogs/content-images/x.jpg
 * Already-absolute (http/https) and data: URIs are left untouched.
 */
function resolveImageSrc(src, baseUrl = CMS_BASE_URL) {
  if (!src) return src;
  const trimmed = src.trim();
  if (/^(https?:)?\/\//i.test(trimmed) || /^data:/i.test(trimmed)) {
    return trimmed;
  }
  const path = trimmed
    .replace(/^(\.\.\/)+/g, "") // strip ../../../ sequences
    .replace(/^\.\//, "") // strip leading ./
    .replace(/^\/+/, ""); // strip leading slashes
  return `${baseUrl}/${path}`;
}

/**
 * Build readable alt text from an image filename:
 *   /blogs/content-images/seo_audit-guide.jpg -> "seo audit guide"
 */
function filenameToAlt(src) {
  if (!src) return "Article illustration";
  const clean = src.split("?")[0].split("#")[0];
  const file = clean.substring(clean.lastIndexOf("/") + 1);
  const name = file.replace(/\.[^.]+$/, "");
  let text = name;
  try {
    text = decodeURIComponent(name);
  } catch (e) {
    text = name;
  }
  text = text.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  return text || "Article illustration";
}

/**
 * Normalise every <img> inside Quill content before rendering:
 *  a) relative src -> absolute CMS URL
 *  b) add alt (filename-derived) when missing/empty
 *  c) loading="lazy" on all but the first image (first stays eager for LCP)
 * Polish styling (radius / shadow / margins) is handled in CSS.
 */
export function enhanceBlogContent(html, baseUrl = CMS_BASE_URL) {
  if (!html) return "";
  let imgIndex = 0;

  return html.replace(/<img\b[^>]*>/gi, (imgTag) => {
    let tag = imgTag;

    // a) absolute src
    let resolvedSrc = "";
    tag = tag.replace(/\bsrc\s*=\s*(["'])(.*?)\1/i, (_m, quote, src) => {
      resolvedSrc = resolveImageSrc(src, baseUrl);
      return `src=${quote}${resolvedSrc}${quote}`;
    });

    // b) ensure a meaningful alt attribute
    const altMatch = tag.match(/\balt\s*=\s*(["'])(.*?)\1/i);
    const hasAlt = altMatch && altMatch[2].trim().length > 0;
    if (!hasAlt) {
      const altText = filenameToAlt(resolvedSrc);
      if (altMatch) {
        tag = tag.replace(/\balt\s*=\s*(["']).*?\1/i, `alt="${altText}"`);
      } else {
        tag = tag.replace(/<img\b/i, `<img alt="${altText}"`);
      }
    }

    // c) lazy-load everything except the first image
    if (!/\bloading\s*=/.test(tag)) {
      const loading = imgIndex === 0 ? "eager" : "lazy";
      tag = tag.replace(/<img\b/i, `<img loading="${loading}"`);
    }

    // d) graceful fallback when the CMS file is missing (broken icon -> the
    //    project's standard placeholder). Some content images in older posts
    //    reference paths that were never uploaded to the public filesystem.
    if (!/\bonerror\s*=/.test(tag)) {
      tag = tag.replace(
        /<img\b/i,
        `<img onerror="this.onerror=null;this.src='/images/blog/blog-fallback-img.webp';this.classList.add('content-img-fallback');"`
      );
    }

    imgIndex += 1;
    return tag;
  });
}

/**
 * Flag paragraphs that read as a question (text ends with "?") so they can be
 * styled as FAQ questions. Works for both <p>Question?</p> and
 * <p><strong>Question?</strong></p>.
 */
export function markFaqQuestions(html) {
  if (!html) return "";
  return html.replace(
    /<p(\s[^>]*)?>([\s\S]*?)<\/p>/gi,
    (full, attrs = "", inner) => {
      const text = inner
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .trim();
      if (!text.endsWith("?")) return full;
      if (/data-faq-question/i.test(attrs || "")) return full;
      return `<p${attrs || ""} data-faq-question="true">${inner}</p>`;
    }
  );
}
