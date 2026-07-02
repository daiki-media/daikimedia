import Script from "next/script";

const MarketingAgencySchema = ({ schemas }) => {
  return (
    <>
      {schemas.webPage && (
        <Script
          id="webpage-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.webPage),
          }}
        />
      )}
      {schemas.faqPage && (
        <Script
          id="faqpage-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.faqPage),
          }}
        />
      )}
      {schemas.service && (
        <Script
          id="service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.service),
          }}
        />
      )}
      {schemas.breadcrumbList && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.breadcrumbList),
          }}
        />
      )}
    </>
  );
};

export default MarketingAgencySchema;

