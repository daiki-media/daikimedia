import Footer from "@/components/footer/Footer";
import SeoCompany from "@/components/lear/seo-company/seoCompany";

export const metadata = {
  title: "Top SEO Optimization Companies to Grow Your Business | Daiki Media",
  description:
    "Learn what an SEO company does, how it boosts website visibility, drives organic traffic, and supports business growth with proven strategies online.",
  keywords: "seo optimization companies",
  alternates: {
    canonical: "https://www.daikimedia.com/what-is-seo-company",
  },
};

const SeoCompanyPage = () => {
  return (
    <>
      <main>
        <section>
          <SeoCompany />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SeoCompanyPage;
