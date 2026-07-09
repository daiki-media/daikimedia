import { notFound } from "next/navigation";
import Footer from "@/components/footer/Footer";
import ServiceContent from "@/components/service/ServiceContent";
import MembersCounter from "@/components/shared/MembersCounter";
import NewsLetter from "@/components/shared/NewsLetter";
import Pricing from "@/components/shared/Pricing";
import ServiceList from "@/data/singleServiceData";
import ServiceSchema from "@/components/schema/ServicesSchema";
import StaticBreadcrumbSchema from "@/components/schema/StaticBreadcrumbSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import ItemListSchema from "@/components/schema/ItemListSchema";

const LOCAL_BUSINESS_SLUGS = ["local-seo-services"];
const ECOMMERCE_PLATFORMS = ["Shopify", "WooCommerce", "Custom Ecommerce Platforms"];

export async function generateMetadata({ params }) {
  if (!params) return {};
  const { slug } = await params;

  const { SingleServiceData } = ServiceList;
  const data = SingleServiceData.find((post) => post.slug === slug);

  if (!data) {
    return {
      title: "404 || Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const meta = {
    title: data.metaTitle || "Default Title",
    description: data.metaDescription || "Default Description",
  };

  meta.alternates = {
    canonical: data.canonicalUrl || `https://www.daikimedia.com/${data.slug}`,
  };

  if (data.keyword) {
    meta.keywords = data.keyword;
  }

  return meta;
}

export async function generateStaticParams() {
  const { SingleServiceData } = ServiceList;
  return SingleServiceData.map((item) => ({
    slug: item.slug,
  }));
}

const ServiceDetails = async ({ params }) => {
  const { SingleServiceData } = ServiceList;
  const { slug } = await params;
  const data = SingleServiceData.find((post) => post.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <ServiceSchema data={data} />
      {LOCAL_BUSINESS_SLUGS.includes(data.slug) && (
        <LocalBusinessSchema url={`https://www.daikimedia.com/${data.slug}`} />
      )}
      {data.slug === "ecommerce-seo-strategies" && (
        <ItemListSchema name="Supported Ecommerce Platforms" items={ECOMMERCE_PLATFORMS} />
      )}
      {data?.breadcrumbCategory && (
        <StaticBreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.daikimedia.com" },
            {
              name: data.breadcrumbCategory,
              url: `https://www.daikimedia.com${data.breadcrumbCategoryUrl || "/seo-services"}`,
            },
            {
              name: data.heroSection?.title || data.metaTitle,
              url: `https://www.daikimedia.com/${data.slug}`,
            },
          ]}
        />
      )}

      <main>
        <ServiceContent data={data} />
        <MembersCounter
          title={data?.membersCounterSection?.title}
          metrics={data?.membersCounterSection?.metrics}
        />
        {!data?.pricingSection?.hide && (
          <Pricing
            className={"pt-150 max-md:pt-20"}
            heading={data?.pricingSection?.heading}
            pricingData={data?.pricingSection?.pricingData}
          />
        )}
        <NewsLetter 
          heading={data?.newsletterSection?.heading}
          description={data?.newsletterSection?.description}
        />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetails;
