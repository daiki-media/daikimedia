import Footer from "@/components/footer/Footer";
import BestSeo from "@/components/lear/best-seo-company/bestSeo";

export const metadata = {
  title: "Find the Best SEO Company with Tailored Growth Plans | Daiki Media",
  description:
    "Choose the best SEO company for tailored strategies that boost search visibility, increase organic traffic, and grow your online presence with Daiki Media.",
  keywords: "best seo company",
  author: "Daiki Media Team",
  alternates: {
    canonical: "https://www.daikimedia.com/who-is-best-seo-company",
  },
};

const BestSeoCompany = () => {
  return (
    <>
      <main>
        <section>
          <BestSeo />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BestSeoCompany;
