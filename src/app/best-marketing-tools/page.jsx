import Footer from "@/components/footer/Footer";
import DigitalMarketingTools from "@/components/lear/best-digital-marketing-tools/bestMarketingTools";

export const metadata = {
  title: "Digital Marketing Tools | Daiki Media",
  description:
    "Explore a wide range of digital marketing tools offered by Daiki Media. Enhance your marketing strategies with top-tier tools for SEO, analytics, and more.",
  keywords: "best seo company",
  alternates: {
    canonical: "https://www.daikimedia.com/best-marketing-tools",
  },
};

const DigitalMarketingToolsPage = () => {
  return (
    <>
      <main>
        <section>
          <DigitalMarketingTools />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DigitalMarketingToolsPage;
