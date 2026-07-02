import PropTypes from "prop-types";

const ServiceSchema = ({ data }) => {
    if (!data) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.metaTitle || data.title || "Service",
        "description": data.metaDescription || "",
        "provider": {
            "@type": "Organization",
            "name": "Daiki Media",
            "url": "https://www.daikimedia.com"
        },
        "url": `https://www.daikimedia.com/${data.slug}`,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

ServiceSchema.propTypes = {
    data: PropTypes.object,
};

export default ServiceSchema;