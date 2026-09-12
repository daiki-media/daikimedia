// utils/faqExtractor.js
//
// Pulls the FAQ block out of CMS (Word / Quill / WordPress-pasted) blog HTML so
// the article page can emit FAQPage structured data that matches exactly what
// the reader sees on the page.
//
// The CMS never stores FAQs as structured fields - they are plain paragraphs at
// the end of a post, under a "FAQs" line, and four shapes occur in practice:
//
//   1. <p><b>1. Question?</b></p><p>Answer.</p>          (question own block)
//   2. <p><b>1. Question?</b> Answer.</p>                (question + answer inline)
//   3. <p><strong>Question?</strong>Answer.</p>          (inline, unnumbered)
//   4. <p><b>1. Question with no question mark</b></p><p>Answer.</p>
//
// Questions also appear as real headings (<h2>/<h3>) in newer posts.

const NAMED_ENTITIES = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&ndash;": "–",
  "&mdash;": "—",
  "&hellip;": "…",
};

/** Tags whose text content forms one readable block. */
const BLOCK_RE = /<(h[1-6]|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi;

/** A leading <b>/<strong> element (possibly the whole block). */
const LEADING_BOLD_RE = /^\s*<(b|strong)\b[^>]*>([\s\S]*?)<\/\1>/i;

/** "FAQs", "FAQ:", "Frequently Asked Questions About Funnel Design" ... */
const FAQ_HEADING_RE =
  /^(?:faq'?s?|frequently asked questions?|common questions?|people also ask)\b[^.?!]{0,60}$/i;

/** Leading list marker on a question: "1.", "1)", "Q1.", "Q:", "Q1 -". */
const QUESTION_PREFIX_RE = /^(?:q\s*[.:)-]?\s*)?(?:\d{1,2}\s*[.):–—-]\s*)/i;

/** Does the text open with a list marker ("1.", "Q2)", ...)? */
const NUMBERED_RE = /^(?:q\s*)?\d{1,2}\s*[.):–—-]\s+\S/i;

/**
 * Questions that are really calls to action or section labels ("Ready to grow
 * your traffic?", "Conclusion: which gateway wins?"). They end with a question
 * mark but are not FAQ entries, so they must never reach the schema.
 */
const NOT_A_FAQ_RE =
  /^(?:ready to|need help|needs? a|want to|wanna|looking for|interested in|got (?:any )?questions|still have questions|any questions|let'?s|contact|conclusion\b|final thoughts|summary)\b/i;

const MIN_QUESTION_LENGTH = 8;
const MAX_QUESTION_LENGTH = 300;
const MIN_ANSWER_LENGTH = 15;
const MAX_ANSWER_LENGTH = 1200;
const MAX_FAQS = 12;

function decodeEntities(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_m, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_m, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(
      /&(?:nbsp|amp|lt|gt|quot|apos|rsquo|lsquo|ldquo|rdquo|ndash|mdash|hellip);/gi,
      (entity) => NAMED_ENTITIES[entity.toLowerCase()] ?? entity
    );
}

/** Readable plain text of a fragment of markup. */
function toPlainText(html) {
  return decodeEntities(
    String(html || "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]*>/g, "")
  )
    .replace(/\u00a0/g, " ")
    .replace(/[\u200b-\u200d\ufeff]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Flat list of { tag, html, text } blocks in document order. */
function toBlocks(html) {
  const blocks = [];
  let match;
  BLOCK_RE.lastIndex = 0;
  while ((match = BLOCK_RE.exec(html)) !== null) {
    const inner = match[2];
    const text = toPlainText(inner);
    if (text) blocks.push({ tag: match[1].toLowerCase(), html: inner, text });
  }
  return blocks;
}

const isHeading = (block) => /^h[1-6]$/.test(block.tag);

const stripQuestionPrefix = (text) => text.replace(QUESTION_PREFIX_RE, "").trim();

function isValidQuestion(text) {
  const question = stripQuestionPrefix(text);
  if (NOT_A_FAQ_RE.test(question)) return false;
  return (
    question.length >= MIN_QUESTION_LENGTH &&
    question.length <= MAX_QUESTION_LENGTH
  );
}

/**
 * Split a block that carries both the question and its answer, e.g.
 * `<b>1. Is PMax better?</b> Not necessarily...`.
 * Returns { question, answer } or null when the block is not that shape.
 */
function splitInlineQa(block) {
  const bold = block.html.match(LEADING_BOLD_RE);
  if (!bold) return null;

  const question = toPlainText(bold[2]);
  const answer = toPlainText(block.html.slice(bold[0].length));
  if (!question || !answer) return null;

  const looksLikeQuestion =
    question.endsWith("?") || NUMBERED_RE.test(question);
  if (!looksLikeQuestion) return null;
  if (!isValidQuestion(question)) return null;

  return { question: stripQuestionPrefix(question), answer };
}

/**
 * Index of the block right after the "FAQs" heading, or -1 when the post has no
 * FAQ section at all.
 */
function findFaqSectionStart(blocks) {
  for (let i = 0; i < blocks.length; i += 1) {
    const { text } = blocks[i];
    if (text.length <= 80 && FAQ_HEADING_RE.test(text)) return i + 1;
  }
  return -1;
}

/**
 * Extract question/answer pairs from CMS blog HTML.
 *
 * Inside an explicit FAQ section, question paragraphs and numbered bold lines
 * both count. Without such a section only numbered or heading questions are
 * taken, so a rhetorical question in body copy never becomes a fake FAQ entry -
 * the schema always mirrors content that is actually visible on the page.
 *
 * @param {string} html raw blog content from the CMS
 * @returns {{question: string, answer: string}[]} empty when the post has no FAQ
 */
export function extractFaqs(html) {
  if (!html || typeof html !== "string") return [];

  const blocks = toBlocks(html);
  if (!blocks.length) return [];

  const sectionStart = findFaqSectionStart(blocks);
  const inSection = sectionStart !== -1;

  const faqs = [];
  const seen = new Set();

  const push = (question, answer) => {
    const trimmedQuestion = question.trim();
    const trimmedAnswer = answer.replace(/\s+/g, " ").trim();
    if (!trimmedQuestion || trimmedAnswer.length < MIN_ANSWER_LENGTH) return;

    const key = trimmedQuestion.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);

    faqs.push({
      question: trimmedQuestion,
      answer:
        trimmedAnswer.length > MAX_ANSWER_LENGTH
          ? `${trimmedAnswer.slice(0, MAX_ANSWER_LENGTH).trimEnd()}…`
          : trimmedAnswer,
    });
  };

  /** Answer text from the blocks that follow a standalone question. */
  const collectAnswer = (startIndex, isQuestionBlock) => {
    const parts = [];
    for (let j = startIndex; j < blocks.length; j += 1) {
      const next = blocks[j];
      if (isQuestionBlock(next)) break;
      // A non-question heading opens a new section - the answer ended.
      if (isHeading(next)) break;
      parts.push(next.text);
      if (parts.join(" ").length >= MAX_ANSWER_LENGTH) break;
    }
    return parts.join(" ");
  };

  const isStandaloneQuestion = (block) => {
    if (block.text.endsWith("?")) return isValidQuestion(block.text);
    // Inside an FAQ section a numbered bold line is a question even when the
    // editor dropped the question mark.
    if (!inSection || !NUMBERED_RE.test(block.text)) return false;
    const bold = block.html.match(LEADING_BOLD_RE);
    if (!bold) return false;
    if (toPlainText(bold[2]) !== block.text) return false; // whole line is bold
    return isValidQuestion(block.text);
  };

  for (let i = inSection ? sectionStart : 0; i < blocks.length; i += 1) {
    const block = blocks[i];

    // Shape 2 & 3: question and answer share one paragraph.
    if (!isStandaloneQuestion(block)) {
      if (!inSection) continue;
      const inline = splitInlineQa(block);
      if (inline) push(inline.question, inline.answer);
      if (faqs.length >= MAX_FAQS) break;
      continue;
    }

    // Outside an explicit FAQ section only clearly-labelled Q&A counts.
    if (!inSection && !isHeading(block) && !NUMBERED_RE.test(block.text)) {
      continue;
    }

    // Shape 1 & 4: question block followed by its answer block(s).
    const inline = splitInlineQa(block);
    if (inline) {
      push(inline.question, inline.answer);
    } else {
      push(
        stripQuestionPrefix(block.text),
        collectAnswer(i + 1, isStandaloneQuestion)
      );
    }

    if (faqs.length >= MAX_FAQS) break;
  }

  // A lone Q&A pair is usually a false positive, not an FAQ section.
  return faqs.length >= 2 ? faqs : [];
}

export default extractFaqs;
