// components/schema/FAQSchema.js
import PropTypes from 'prop-types';

const FAQSchema = ({ faqs }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.daikimedia.com/#faq",
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
    faqs: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired
        })
    ).isRequired
};

export default FAQSchema;