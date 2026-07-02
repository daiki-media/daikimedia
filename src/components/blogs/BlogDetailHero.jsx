import Link from "next/link";
import FallbackImage from "@/components/shared/FallbackImage";
import styles from "./BlogDetailHero.module.css";

/**
 * Split two-column blog detail hero.
 *  Left  : category badge, date, H1, description, author + read time
 *  Right : featured image (object-fit cover, zoom on hover)
 *  Mobile (<900px): stacks vertically with the image on top.
 */
export default function BlogDetailHero({
  title,
  category,
  formattedDate,
  dateISO,
  description,
  author = "Daiki Media",
  authorHref = "/author/lukesh-pillai",
  readTime,
  imageUrl,
  imageAlt,
}) {
  const authorInitial = (author || "D").trim().charAt(0).toUpperCase();

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* LEFT — text column */}
        <div className={styles.left}>
          <div className={styles.meta}>
            {category && <span className={styles.badge}>{category}</span>}
            {formattedDate && (
              <time className={styles.date} dateTime={dateISO}>
                {formattedDate}
              </time>
            )}
          </div>

          <h1 className={styles.title}>{title}</h1>

          {description && <p className={styles.description}>{description}</p>}

          <div className={styles.authorRow}>
            <Link
              href={authorHref}
              className={styles.author}
              aria-label={`View all posts by ${author}`}
            >
              <span className={styles.avatar} aria-hidden="true">
                {authorInitial}
              </span>
              <span className={styles.authorName}>{author}</span>
            </Link>

            {readTime ? (
              <span className={styles.readTime}>
                <span className={styles.dot} aria-hidden="true" />
                {readTime} min read
              </span>
            ) : null}
          </div>
        </div>

        {/* RIGHT — featured image */}
        <div className={styles.right}>
          <div className={styles.imageWrap}>
            <FallbackImage
              src={imageUrl}
              alt={imageAlt}
              className={styles.image}
              width={960}
              height={760}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
