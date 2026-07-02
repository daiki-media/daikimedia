const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Daiki Media",
    "url": "https://www.daikimedia.com",
    "inLanguage": "en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.daikimedia.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default WebSiteSchema;

