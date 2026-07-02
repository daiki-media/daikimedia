import Footer from "@/components/footer/Footer";
import MarketingAgencyContent from "@/components/marketing-agency/MarketingAgencyContent";
import MarketingAgencySchema from "@/components/marketing-agency/MarketingAgencySchema";
import marketingAgencyData from "@/data/marketing-agency.json";
import CallToAction from "@/components/shared/CallToAction";
import Counter from "@/components/shared/Counter";
import NewsLetter from "@/components/shared/NewsLetter";

export const metadata = {
  title: marketingAgencyData.singapore.meta.title,
  description: marketingAgencyData.singapore.meta.description,
  keywords: marketingAgencyData.singapore.meta.keywords,
  alternates: {
    canonical: marketingAgencyData.singapore.meta.canonical,
  },
};

const SingaporeMarketingAgency = () => {
  const data = marketingAgencyData.singapore;

  return (
    <>
    {/* here we will crete the marketing agency schema */}
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

export default SingaporeMarketingAgency;
