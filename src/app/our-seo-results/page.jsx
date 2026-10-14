import Footer from "@/components/footer/Footer";
import SeoResult from "@/components/lear/our-seo-result/our-seo-result";

export const metadata = {
  title: "Our SEO Results Proven Case Studies & Organic Growth Proof",
  description:
    "Explore our proven SEO case studies and organic growth proof. See how our data-driven strategies deliver higher rankings and measurable revenue for clients.",
  keywords:
    "SEO results, Daiki Media, SEO strategies, business growth, search engine optimization, digital marketing",
  alternates: {
    canonical: "https://www.daikimedia.com/our-seo-results",
  },
};

const OurSeoResult = () => {
  return (
    <>
      <main>
        <section>
          <SeoResult />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OurSeoResult;
