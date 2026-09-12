// components/schema/FAQSchema.js
import PropTypes from 'prop-types';

const FAQSchema = ({ faqs, pageUrl }) => {
    // Each page needs its own @id, otherwise every FAQPage node across the site
    // collides on one identifier. pageUrl is the canonical URL of the page the
    // FAQs are rendered on.
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": pageUrl ? `${pageUrl}#faq` : "https://www.daikimedia.com/#faq",
        ...(pageUrl ? { url: pageUrl } : {}),
        "mainEntity": faqs.map(({ question, answer }) => ({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer
            }
        }))
    };
    // console.log("schema", schema)

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

FAQSchema.propTypes = {
    pageUrl: PropTypes.string,
    faqs: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired
        })
    ).isRequired
};

export default FAQSchema;