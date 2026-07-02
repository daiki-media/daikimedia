import Footer from "@/components/footer/Footer";
import SeoResult from "@/components/lear/our-seo-result/our-seo-result";

export const metadata = {
  title: "Our SEO Result | Daiki Media",
  description:
    "Discover the impressive SEO results achieved by Daiki Media. Learn how our tailored SEO strategies have driven success for businesses across various industries.",
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
