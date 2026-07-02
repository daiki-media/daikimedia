import styles from './BlogContent.module.css';
import {
  cleanBlogContent,
  enhanceBlogContent,
  markFaqQuestions,
} from '@/utils/contentCleaner';

export default function BlogContent({ content }) {
  // 1. Strip Quill artifacts / decode entities (existing behaviour, preserved)
  const cleaned = cleanBlogContent(content);
  // 2. Resolve image src to absolute, add alt + lazy-loading
  const withImages = enhanceBlogContent(cleaned);
  // 3. Flag question paragraphs so they render as FAQ accents
  const finalHtml = markFaqQuestions(withImages);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: finalHtml }}
      />
    </div>
  );
}
