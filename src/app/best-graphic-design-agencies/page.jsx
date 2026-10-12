import seoFirmsData from "@/data/graphicDesignAgenciesData";
import DynamicCompanyListing from "@/components/top-agencies/seo-firms-section";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Best Graphic Design Agencies in Malaysia | Daiki Media",
  description:
    "A curated list of the best graphic design agencies in Malaysia, with each agency's profile, services and clients, compiled by Daiki Media.",
  alternates: {
    canonical: "https://www.daikimedia.com/best-graphic-design-agencies",
  },
};

const SeoPage = () => {
  return (
    <>
      <DynamicCompanyListing
        data={seoFirmsData}
        title="Best Graphic Design Agencies in Malaysia"
        subtitle="Driving Traffic, Leads, and Revenue with Tailored Strategies and Award–Winning Expertise"
        description="When it comes to SEO agencies, options are plenty. Below, you'll discover a curated list of the top SEO firms in Malaysia, from Kuala Lumpur to Penang to Johor Bahru. Explore each company's profile below — and keep reading to find out what makes them stand out among the best in the industry."
        dataKey="graphicDesign"
        showClients={true}
      />
      <Footer />
    </>
  );
};
export default SeoPage;
