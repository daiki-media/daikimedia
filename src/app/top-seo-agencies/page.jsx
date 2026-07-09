import seoFirmsData from "@/data/seoFirmsData";
import DynamicCompanyListing from "@/components/top-agencies/seo-firms-section";
import Footer from "@/components/footer/Footer";
import StaticBreadcrumbSchema from "@/components/schema/StaticBreadcrumbSchema";

export const metadata = {
  title: "Best SEO Agencies in Malaysia | SEO Company Comparison | Daiki Media",
  description:
    "Compare leading SEO agencies in Malaysia by services, strengths, budget, and business fit. Use this guide to choose the right SEO partner for your growth goals.",
  alternates: {
    canonical: "https://www.daikimedia.com/top-seo-agencies",
  },
};

const SeoPage = () => {
  return (
    <>
      <StaticBreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.daikimedia.com" },
          { name: "Best SEO Agencies in Malaysia", url: "https://www.daikimedia.com/top-seo-agencies" },
        ]}
      />
      <DynamicCompanyListing
        data={seoFirmsData}
        title="Best SEO Agencies in Malaysia"
        subtitle="Driving Traffic, Leads, and Revenue with Tailored Strategies and Award–Winning Expertise"
        description="When it comes to SEO agencies, options are plenty. Below, you'll discover a curated list of the top SEO firms in Malaysia, from Kuala Lumpur to Penang to Johor Bahru. Explore each company's profile below — and keep reading to find out what makes them stand out among the best in the industry."
        dataKey="companies" // assuming your seoFirmsData has companies array
        showClients={true}
      />
      <Footer />
    </>
  );
};
export default SeoPage;
