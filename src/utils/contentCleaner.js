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

/**
 * Table polish for CMS (Quill/TinyMCE) content. Two very different shapes come
 * out of the editor and they need opposite treatment:
 *
 *  1. Real data tables (2+ columns) - wrapped in a scroll container (desktop
 *     safety net for very wide tables), the first row promoted to header cells
 *     when the table has no <th>, and every body cell tagged with the header
 *     text of its column via data-label. That label is what lets the table
 *     re-flow into one card per row on mobile with no horizontal scrolling.
 *  2. Single-column tables - the editor's "highlight box": one cell holding a
 *     heading, the next holding a list. These get flagged as layout boxes so
 *     they render as a callout card, never with a header band.
 *
 * Idempotent: tables already processed are left untouched.
 */
export function wrapTables(html) {
  if (!html) return "";

  return html.replace(/<table\b[\s\S]*?<\/table>/gi, (tableHtml, offset, full) => {
    // Skip if this table was already processed.
    const before = full.slice(Math.max(0, offset - 260), offset);
    if (/blog-table-scroll[^>]*>\s*$/i.test(before)) return tableHtml;
    if (/data-layout-box/i.test(tableHtml)) return tableHtml;

    const columnCount = countColumns(tableHtml);

    // 1-column tables are layout/highlight boxes, not data tables.
    if (columnCount < 2) {
      return tableHtml.replace(/<table\b/i, '<table data-layout-box="true"');
    }

    let table = tableHtml;

    // First row -> header row when the table has no header cells at all.
    if (!/<th[\s>]/i.test(table)) {
      table = table.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/i, (row) =>
        row
          .replace(/<tr\b([^>]*)>/i, '<tr$1 data-table-head="true">')
          .replace(/<td\b/gi, "<th")
          .replace(/<\/td>/gi, "</th>")
      );
    }

    table = addCellLabels(table);

    return (
      '<div class="blog-table-scroll" role="region" aria-label="Table" tabindex="0">' +
      table +
      "</div>"
    );
  });
}

/**
 * Column count of a CMS table: <colgroup> when present, otherwise the number of
 * cells in the first row.
 */
function countColumns(tableHtml) {
  const colgroup = tableHtml.match(/<colgroup[\s\S]*?<\/colgroup>/i);
  if (colgroup) {
    const cols = (colgroup[0].match(/<col\b/gi) || []).length;
    if (cols) return cols;
  }
  const firstRow = tableHtml.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/i);
  if (firstRow) {
    const cells = (firstRow[0].match(/<t[dh]\b/gi) || []).length;
    if (cells) return cells;
  }
  return 1;
}

/** Plain text of a cell, safe to place inside a double-quoted attribute. */
function cellLabel(cellHtml) {
  const text = cellHtml
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Copy each column's header text onto the body cells of that column as
 * data-label, so CSS can print it above the value in the mobile card layout.
 */
function addCellLabels(tableHtml) {
  const headerRow = (tableHtml.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi) || []).find((row) =>
    /<th[\s>]/i.test(row)
  );
  if (!headerRow) return tableHtml;

  const labels = (headerRow.match(/<th\b[^>]*>[\s\S]*?<\/th>/gi) || []).map(cellLabel);
  if (!labels.length) return tableHtml;

  return tableHtml.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi, (row) => {
    if (/<th[\s>]/i.test(row)) return row;
    let cellIndex = 0;
    return row.replace(/<td\b([^>]*)>/gi, (cellTag, attrs) => {
      const label = labels[cellIndex];
      cellIndex += 1;
      if (!label || /data-label\s*=/i.test(attrs)) return cellTag;
      return `<td${attrs} data-label="${label}">`;
    });
  });
}
