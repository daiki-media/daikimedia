"use client";

import dynamic from "next/dynamic";

const Cta = dynamic(() => import("@/components/home-1/Cta"));
const Integration = dynamic(() => import("@/components/home-1/Integration"));
const Solution = dynamic(() => import("@/components/home-1/Solution"));
const Vision = dynamic(() => import("@/components/home-1/Vision"));
const RegionalStory = dynamic(() => import("@/components/home-1/RegionalStory"));
const MarketsWeServe = dynamic(() => import("@/components/home-1/MarketsWeServe"));
const WhoWeHelp = dynamic(() => import("@/components/home-1/WhoWeHelp"));
const WhyChooseUs = dynamic(() => import("@/components/home-1/WhyChooseUs"));
const WhatClientsValue = dynamic(() => import("@/components/home-1/WhatClientsValue"));
const LazyFaq = dynamic(() => import("@/components/lazy/LazyFaq"));
const LazyCounter = dynamic(() => import("@/components/lazy/LazyCounter"));
const LazyClients = dynamic(() => import("@/components/lazy/LazyClients"));
const FinancialBlog = dynamic(
  () => import("@/components/shared/FinancialBlog")
);
const Services = dynamic(() => import("@/components/shared/Services"));
const ContentCards = dynamic(
  () => import("@/components/customSections/customContentCards")
);
const ComprehensiveServicesShowcase = dynamic(
  () => import("@/components/customSections/comprehensiveServicesShowcase")
);

export default function BelowFoldClient() {
  return (
    <>
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
    </>
  );
}
