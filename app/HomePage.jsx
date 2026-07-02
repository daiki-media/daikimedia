import Image from "next/image";
import Hero from "@/components/home-1/Hero";
import RegionalStory from "@/components/home-1/RegionalStory";
import LazyClients from "@/components/lazy/LazyClients";
import Services from "@/components/shared/Services";
import MarketsWeServe from "@/components/home-1/MarketsWeServe";
import WhoWeHelp from "@/components/home-1/WhoWeHelp";
import WhyChooseUs from "@/components/home-1/WhyChooseUs";
import LazyCounter from "@/components/lazy/LazyCounter";
import Vision from "@/components/home-1/Vision";
import Solution from "@/components/home-1/Solution";
import Integration from "@/components/home-1/Integration";
import WhatClientsValue from "@/components/home-1/WhatClientsValue";
import ContentCards from "@/components/customSections/customContentCards";
import ComprehensiveServicesShowcase from "@/components/customSections/comprehensiveServicesShowcase";
import LazyFaq from "@/components/lazy/LazyFaq";
import Cta from "@/components/home-1/Cta";
import FinancialBlog from "@/components/shared/FinancialBlog";
import FooterClient from "@/components/home-1/FooterClient";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />

        <div className="py-16 flex flex-wrap items-center justify-center gap-8 px-4 max-lg:flex-col">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-3xl font-bold">Google and Meta Partner</h2>
            <p className="text-gray-600">
              We are proud partners with industry leaders like{" "}
              <a
                href="https://www.designrush.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.designrush.com
              </a>
              <br />
              Delivering cutting-edge solutions for your business.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src="/images/partners.jpeg"
              alt="Google and Meta Partner"
              width={800}
              height={600}
            />
          </div>
        </div>

        <RegionalStory />
        <LazyClients
          title="Trusted By Brands Ready to Grow Smarter"
          description={
            <>
              We work with brands that want more than random marketing activity.<br />
              They want structure.<br />
              They want consistency.<br />
              They want better outcomes from the work they are already investing in.
            </>
          }
        />
        <Services />
        <MarketsWeServe />
        <WhoWeHelp />
        <WhyChooseUs />
        <LazyCounter />
        <Vision />
        <Solution />
        <Integration />
        <WhatClientsValue />
        <ContentCards />
        <ComprehensiveServicesShowcase />
        <LazyFaq />
        <Cta />
        <FinancialBlog />
      </main>
      <FooterClient />
    </>
  );
}
