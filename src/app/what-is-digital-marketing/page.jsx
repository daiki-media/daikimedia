import Footer from "@/components/footer/Footer";
import WhatIsDigitalMarketing from "../../components/lear/digital-marketing/whatIsDigitalMarketing";

export const metadata = {
  title: "What is Digital Marketing Complete Guide to Growing Online",
  description:
    "Understand digital marketing with our complete guide. Learn core strategies to grow your business online, generate quality leads, and scale your brand.",
  keywords: "seo optimization companies",
  alternates: {
    canonical: "https://www.daikimedia.com/what-is-digital-marketing",
  },
};

const DigitalMarketingPage = () => {
  return (
    <>
      <main>
        <section>
          <WhatIsDigitalMarketing />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DigitalMarketingPage;
