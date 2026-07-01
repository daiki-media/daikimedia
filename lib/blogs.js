import { cache } from "react";

export const BLOGS_LIST_URL = "https://cms.daikimedia.com/api/blogs";
export const BLOGS_SLUG_URL = (slug) =>
  `https://cms.daikimedia.com/api/blogs/${encodeURIComponent(slug)}`;

const REQUEST_HEADERS = {
  Accept: "application/json",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
};

async function fetchJsonWithRetry(url, attempts = 3) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const res = await fetch(url, {
        headers: REQUEST_HEADERS,
        // Pages using this data set `revalidate = false` for build-time-only
        // SSG. Tag-only caching (no time-based revalidate) keeps that true —
        // content only refreshes on the next build or an on-demand
        // revalidateTag("blogs") call, never on a background timer.
        cache: "force-cache",
        next: { tags: ["blogs"] },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      const reason = err?.cause?.code || err?.name || err?.message || err;
      console.error(
        `[blogs] fetch attempt ${attempt}/${attempts} failed for ${url}:`,
        reason
      );
      if (attempt === attempts) throw err;
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }
  return null;
}

export const getAllBlogs = cache(async () => {
  try {
    const data = await fetchJsonWithRetry(BLOGS_LIST_URL);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("[blogs] returning empty list:", err?.message || err);
    return [];
  }
});

export const getBlogBySlug = cache(async (slug) => {
  if (!slug) return null;
  try {
    const data = await fetchJsonWithRetry(BLOGS_SLUG_URL(slug));
    // Some Laravel APIs wrap in { data: {...} } — tolerate either shape.
    return data?.data || data || null;
  } catch (err) {
    console.error(`[blogs] no blog for slug "${slug}":`, err?.message || err);
    return null;
  }
});

export function getRelatedBlogs(blogs, current, limit = 3) {
  if (!current || !Array.isArray(blogs)) return [];
  return blogs
    .filter(
      (blog) =>
        blog.slug !== current.slug &&
        (blog.category === current.category || blog.author === current.author)
    )
    .slice(0, limit);
}

const stripHtml = (html) =>
  (html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export function toBlogSummary(blog) {
  if (!blog) return null;
  const excerpt =
    (blog.meta_description && blog.meta_description.trim()) ||
    stripHtml(blog.content).slice(0, 200);
  return {
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    excerpt,
    featuredImage: blog.featuredImage,
    featuredImageAlt: blog.featuredImageAlt,
    category: blog.category,
    author: blog.author,
    created_at: blog.created_at,
  };
}
