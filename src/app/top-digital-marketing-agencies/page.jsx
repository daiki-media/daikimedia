import digitalMarketingData from "@/data/digitalMarketingData";
import DynamicCompanyListing from "@/components/top-agencies/seo-firms-section";
import Footer from "@/components/footer/Footer";

const DigitalMarketingPage = () => {
  return (
    <>
      <DynamicCompanyListing
        data={digitalMarketingData}
        title="Best Digital Marketing Agencies in Malaysia"
        subtitle="Comprehensive Digital Solutions for Modern Businesses"
        description="Discover top-rated digital marketing agencies in Malaysia. These experts specialize in comprehensive digital strategies, from SEO and PPC to social media marketing and content creation."
        dataKey="marketing"
        showClients={true}
        whatsappNumber="601114850067"
        whatsappText="Free Marketing Consultation"
      />
      <Footer />
    </>
  );
};
export default DigitalMarketingPage;
