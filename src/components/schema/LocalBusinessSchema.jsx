const LocalBusinessSchema = ({ url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    "name": "Daiki Media",
    "url": url,
    "image": "https://www.daikimedia.com/logo-dark-version.png",
    "telephone": "601114850067",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan Ara, SD 7/3d, Bandar Sri Damansara",
      "addressLocality": "Kuala Lumpur",
      "postalCode": "52200",
      "addressCountry": "MY",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Malaysia",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "17",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
