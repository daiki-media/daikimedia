import Footer from "@/components/footer/Footer";
import MarketingManagers from "@/components/lear/marketing-managers/marketingManagers";

export const metadata = {
  title: "SEO Guide | Daiki Media",
  description:
    "A comprehensive guide to SEO by Daiki Media. Learn the best practices, strategies, and techniques for improving your website's search engine rankings.",
  keywords:
    "SEO guide, search engine optimization, SEO techniques, SEO strategies, digital marketing, SEO best practices",
  alternates: {
    canonical: "https://www.daikimedia.com/seo-guide-for-managers",
  },
};

const SeoGuide = () => {
  return (
    <>
      <main>
        <section>
          <MarketingManagers />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeoGuide;
