import styles from './BlogContent.module.css';
import {
  cleanBlogContent,
  enhanceBlogContent,
  markFaqQuestions,
  wrapTables,
} from '@/utils/contentCleaner';

export default function BlogContent({ content }) {
  // 1. Strip Quill artifacts / decode entities (existing behaviour, preserved)
  const cleaned = cleanBlogContent(content);
  // 2. Resolve image src to absolute, add alt + lazy-loading
  const withImages = enhanceBlogContent(cleaned);
  // 3. Flag question paragraphs so they render as FAQ accents
  const withFaq = markFaqQuestions(withImages);
  // 4. Wrap tables so wide ones scroll inside their own container on mobile
  const finalHtml = wrapTables(withFaq);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: finalHtml }}
      />
    </div>
  );
}
