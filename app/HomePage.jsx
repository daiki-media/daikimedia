"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Hero from "@/components/home-1/Hero";


// Lazy imports
const Footer = dynamic(() => import("@/components/footer/Footer"));
const Cta = dynamic(() => import("@/components/home-1/Cta"));
const Integration = dynamic(() => import("@/components/home-1/Integration"));
const Solution = dynamic(() => import("@/components/home-1/Solution"));
const Vision = dynamic(() => import("@/components/home-1/Vision"));
const RegionalStory = dynamic(() => import("@/components/home-1/RegionalStory"));
const MarketsWeServe = dynamic(() => import("@/components/home-1/MarketsWeServe"));
const WhoWeHelp = dynamic(() => import("@/components/home-1/WhoWeHelp"));
const WhyChooseUs = dynamic(() => import("@/components/home-1/WhyChooseUs"));
const WhatClientsValue  = dynamic(() => import("@/components/home-1/WhatClientsValue"));
const LazyFaq = dynamic(() => import("@/components/lazy/LazyFaq"));
const LazyCounter = dynamic(() => import("@/components/lazy/LazyCounter"));
const LazyClients = dynamic(() => import("@/components/lazy/LazyClients"));
const FinancialBlog = dynamic(
  () => import("@/components/shared/FinancialBlog")
);
const Services = dynamic(() => import("@/components/shared/Services"));
// const CustomSectionOne = dynamic(
//   () => import("@/components/customSections/customSectionOne")
// );
const ContentCards = dynamic(
  () => import("@/components/customSections/customContentCards")
);
const ComprehensiveServicesShowcase = dynamic(
  () => import("@/components/customSections/comprehensiveServicesShowcase")
);

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
        {/* <CustomSectionOne /> */}
        <WhatClientsValue />
        <ContentCards />
        <ComprehensiveServicesShowcase />
        <LazyFaq />
        <Cta />
        <FinancialBlog />
      </main>
      <Footer />
    </>
  );
}
