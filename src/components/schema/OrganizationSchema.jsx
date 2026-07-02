const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.daikimedia.com/#organization",
    "name": "Daiki Media",
    "url": "https://www.daikimedia.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.daikimedia.com/logo-dark-version.png",
      "width": 200,
      "height": 60
    },
    "description": "Daiki Media is a virtual marketing agency providing SEO, digital marketing, PPC, social media marketing and web solutions for clients in Malaysia, Singapore and the UAE.",
    "telephone": "601114850067",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Malaysia"
      },
      {
        "@type": "Country",
        "name": "Singapore"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "601114850067",
      "contactType": "customer service",
      "availableLanguage": ["en"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan Ara, SD 7/3d, Bandar Sri Damansara",
      "addressLocality": "Kuala Lumpur",
      "postalCode": "52200",
      "addressCountry": "MY"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "17"
    },
    "sameAs": [
      "https://www.facebook.com/daikimedia",
      "https://www.twitter.com/daikimedia",
      "https://www.linkedin.com/company/daikimedia"
    ]
  };

  return (

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />

  );
};

export default OrganizationSchema;