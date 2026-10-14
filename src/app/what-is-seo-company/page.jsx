import Footer from "@/components/footer/Footer";
import SeoCompany from "@/components/lear/seo-company/seoCompany";

export const metadata = {
  title: "What is an SEO Company & How to Choose the Right Partner",
  description:
    "Learn what an SEO company does and how to choose the right optimization partner to scale your organic traffic, improve rankings, and grow revenue.",
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
