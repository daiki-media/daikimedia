import Link from "next/link";
import FallbackImage from "@/components/shared/FallbackImage";
import { getCMSImageUrl } from "@/utils/imageUtils";
import { decodeHtmlEntities } from "@/utils/textUtils";
import styles from "./RelatedBlogs.module.css";

/**
 * Related blogs grid — max 3 cards (same category or author).
 * Image on top, category badge, 2-line clamped title, author name.
 * Cards lift on hover.
 */
export default function RelatedBlogs({ blogs }) {
  if (!blogs || blogs.length === 0) return null;

  const items = blogs.slice(0, 3);

  return (
    <section className={styles.section} aria-labelledby="related-heading">
      <div className={styles.head}>
        <h2 id="related-heading" className={styles.heading}>
          Related Articles
        </h2>
        <p className={styles.subheading}>More stories you might enjoy</p>
      </div>

      <div className={styles.grid}>
        {items.map((blog) => {
          const imageUrl = getCMSImageUrl(blog.featuredImage);
          const imageAlt =
            (blog.featuredImageAlt && blog.featuredImageAlt.trim()) ||
            decodeHtmlEntities(blog.title) ||
            "Related article";

          return (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className={styles.card}
            >
              <div className={styles.thumb}>
                <FallbackImage
                  src={imageUrl}
                  alt={imageAlt}
                  className={styles.thumbImg}
                  width={400}
                  height={200}
                  loading="lazy"
                />
              </div>

              <div className={styles.body}>
                {blog.category && (
                  <span className={styles.badge}>{blog.category}</span>
                )}
                <h3 className={styles.cardTitle}>
                  {decodeHtmlEntities(blog.title) || "Untitled"}
                </h3>
                <span className={styles.author}>
                  {blog.author || "Daiki Media"}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
