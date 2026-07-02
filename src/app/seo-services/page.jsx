import HeroSeoService from "./HeroSeoService";
import AfterHeroSeoService from "./AfterHeroSeoService";
import Carousel from "./Carousel";
import PricingSeoService from "./PricingSeoService";
import WhyChooseSeo from "./WhyChooseSeo";
import WhatClientSay from "./WhatClientSay";
import SuccessStory from "./SuccessStory";
import ContactForm from "./ContactForm";
import FaqSeoService from "./FaqSeoService";
import Footer from "@/components/footer/Footer";
import Clients from "@/components/shared/Clients";

export default function SEOServicesPage() {
  return (
    <>
      <HeroSeoService />
      <Clients 
          title={"Why Leading Brands Trust DaikiMedia"}
          description={"Trusted by thousands of companies across 50+ countriesupport."}
        />
      <AfterHeroSeoService />
      <Carousel />
      <PricingSeoService />
      <WhyChooseSeo />
      <WhatClientSay />
      <SuccessStory />
      <ContactForm />
      <FaqSeoService />
      <Footer />
    </>

  );
}