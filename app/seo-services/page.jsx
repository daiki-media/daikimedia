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
import ShareClientMarquee from "@/components/home-4/ShareClientMarquee";

export default function SEOServicesPage() {
  return (
    <>
      <HeroSeoService />
      <ShareClientMarquee sectionTitle={true} border={true} spacing={'py-0 bg-transparent'} />
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