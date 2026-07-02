
import PropTypes from 'prop-types';

const ArticleSchema = ({
    headline,
    description,
    authorName,
    authorUrl,
    publisherName,
    publisherLogo,
    datePublished,
    dateModified,
    mainEntityUrl,
    imageUrl,
    imageWidth = 1200,
    imageHeight = 630
}) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "description": description,
        "author": {
            "@type": "Organization",
            "name": authorName,
            "url": authorUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": publisherName,
            "logo": {
                "@type": "ImageObject",
                "url": publisherLogo,
                "width": 200,
                "height": 60
            }
        },
        "datePublished": datePublished,
        "dateModified": dateModified,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": mainEntityUrl
        },
        "image": {
            "@type": "ImageObject",
            "url": imageUrl,
            "width": imageWidth,
            "height": imageHeight
        }
    };

    return (

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

    );
};

ArticleSchema.propTypes = {
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired,
    publisherName: PropTypes.string.isRequired,
    publisherLogo: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    dateModified: PropTypes.string.isRequired,
    mainEntityUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number
};

export default ArticleSchema;
