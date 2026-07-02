import Head from "next/head";
import { notFound } from "next/navigation";
import Footer from "@/components/footer/Footer";
import ServiceContent from "@/components/service/ServiceContent";
import MembersCounter from "@/components/shared/MembersCounter";
import NewsLetter from "@/components/shared/NewsLetter";
import Pricing from "@/components/shared/Pricing";
import ServiceList from "@/data/singleServiceData";
import ServiceSchema from "@/components/schema/ServicesSchema";

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
      <Head>
        <ServiceSchema data={data} />
      </Head>

      <main>
        <ServiceContent data={data} />
        <MembersCounter 
          title={data?.membersCounterSection?.title}
          metrics={data?.membersCounterSection?.metrics}
        />
        <Pricing 
          className={"pt-150 max-md:pt-20"}
          heading={data?.pricingSection?.heading}
          pricingData={data?.pricingSection?.pricingData}
        />
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
