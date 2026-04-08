"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Hero from "@/components/home-1/Hero";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import { DataTable } from "@/components/service-single/dataTable"
import heroTableData from '@/data/heroTable';


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
const LazyFaq = dynamic(() => import("@/components/lazy/LazyFaq"));
const LazyCounter = dynamic(() => import("@/components/lazy/LazyCounter"));
const LazyClients = dynamic(() => import("@/components/lazy/LazyClients"));
const FinancialBlog = dynamic(
  () => import("@/components/shared/FinancialBlog")
);
const Services = dynamic(() => import("@/components/shared/Services"));
const CustomSectionOne = dynamic(
  () => import("@/components/customSections/customSectionOne")
);
const ContentCards = dynamic(
  () => import("@/components/customSections/customContentCards")
);
const ComprehensiveServicesShowcase = dynamic(
  () => import("@/components/customSections/comprehensiveServicesShowcase")
);

export default function HomePage() {
  return (
    <>
      <PrimaryNavbar />
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
        
        <DataTable data={heroTableData.tableOne} />

        <RegionalStory />
        <DataTable data={heroTableData.tableTwo} />
        <LazyClients 
          title="Best Companies Trust Daiki Media."
          description="Trusted by thousands of companies across 50+ countries"
        />
        <Services />
        <MarketsWeServe />
        <WhoWeHelp />
        <DataTable data={heroTableData.tableThree} />
        <DataTable data={heroTableData.tableFour} />
        <WhyChooseUs />
        <LazyCounter />
        <Vision />
        <Solution />
        <Integration />
        <CustomSectionOne />
        <ContentCards />
        <DataTable data={heroTableData.tableFive} />
        <DataTable data={heroTableData.tableSix} />
        <DataTable data={heroTableData.tableSeven} />
        <DataTable data={heroTableData.tableEight} />
        <ComprehensiveServicesShowcase />
        <LazyFaq />
        <Cta />
        <FinancialBlog />
      </main>
      <Footer />
    </>
  );
}
