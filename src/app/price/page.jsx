import Footer from "@/components/footer/Footer";
import PriceChoose from "@/components/price/PriceChoose";

import Counter from "@/components/shared/Counter";
import Faq from "@/components/shared/Faq";
import NewsLetter from "@/components/shared/NewsLetter";
import Pricing from "@/components/shared/Pricing";

export const metadata = {
  title: "Pricing | Daiki Media",
  description:
    "Explore the pricing plans offered by Daiki Media for our digital marketing and SEO services. We offer competitive prices tailored to meet your business needs, ensuring maximum value and results.",
  keywords:
    "pricing, digital marketing pricing, SEO services pricing, Daiki Media pricing, affordable SEO, marketing services costs, value-driven SEO solutions",
  author: "Daiki Media Team",
};

const Price = () => {
  return (
    <>
      <main>
        <section className="relative overflow-hidden bg-white pt-[120px]  dark:bg-dark-300 max-lg:pt-150 max-md:mb-25">
          <Pricing showPricingText={true} largeTitle pricingDescription />
        </section>
        <Counter />
        <PriceChoose />
        <Faq />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default Price;
