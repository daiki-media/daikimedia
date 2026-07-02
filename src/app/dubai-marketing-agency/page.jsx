import Footer from "@/components/footer/Footer";
import MarketingAgencyContent from "@/components/marketing-agency/MarketingAgencyContent";
import MarketingAgencySchema from "@/components/marketing-agency/MarketingAgencySchema";
import marketingAgencyData from "@/data/marketing-agency.json";
import CallToAction from "@/components/shared/CallToAction";
import Counter from "@/components/shared/Counter";
import NewsLetter from "@/components/shared/NewsLetter";

export const metadata = {
  title: marketingAgencyData.dubai.meta.title,
  description: marketingAgencyData.dubai.meta.description,
  keywords: marketingAgencyData.dubai.meta.keywords,
  alternates: {
    canonical: marketingAgencyData.dubai.meta.canonical,
  },
};

const DubaiMarketingAgency = () => {
  const data = marketingAgencyData.dubai;

  return (
    <>
      <MarketingAgencySchema schemas={data.schema} />
      <main>
        <MarketingAgencyContent data={data} />
        <Counter />
        <CallToAction title={data.cta?.title || "Start Your Digital Transformation Journey Today!"} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default DubaiMarketingAgency;
