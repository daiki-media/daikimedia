import Footer from "@/components/footer/Footer";
import WhatIsDigitalMarketing from "../../components/lear/digital-marketing/whatIsDigitalMarketing";

export const metadata = {
  title: "Digital Marketing | Daiki Media",
  description:
    "Explore the world of digital marketing with Daiki Media. Learn about strategies, tools, and techniques to elevate your brand's presence online.",
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
