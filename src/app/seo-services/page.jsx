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
import Link from "next/link";
import ServiceSchema from "@/components/schema/ServicesSchema";
import StaticBreadcrumbSchema from "@/components/schema/StaticBreadcrumbSchema";

export const metadata = {
  title: "Professional SEO Services in Malaysia Drive Organic Growth Today",
  description: "Scale your business with professional SEO services in Malaysia. Our data-driven strategies drive high-intent organic traffic, improve rankings, and maximize revenue.",
  alternates: { canonical: "https://www.daikimedia.com/seo-services" },
};

const serviceSchemaData = {
  metaTitle: metadata.title,
  metaDescription: metadata.description,
  slug: "seo-services",
};

const relatedServices = [
  { title: "Local SEO Services", href: "/local-seo-services" },
  { title: "Enterprise SEO Services", href: "/enterprise-seo-services" },
  { title: "SEO Audit Services", href: "/seo-audits-services" },
  { title: "Ecommerce SEO Services", href: "/ecommerce-seo-strategies" },
  { title: "Generative Engine Optimization", href: "/generative-engine-optimization" },
  { title: "iGaming SEO Services", href: "/localized-seo-for-igaming" },
];

const resultCaseStudies = [
  {
    title: "Pistil.io SEO Case Study: From 76 to 6,900+ Monthly Organic Visitors in Less Than 7 Months",
    href: "/case-studies/healthcare-seo-pistil",
  },
  {
    title: "SEO Results for Premium Aesthetic and Weight Loss Clinic",
    href: "/case-studies/aesthetic-clinic-seo",
  },
  {
    title: "SEO Performance for an iGaming and Online Lottery Platform",
    href: "/case-studies/igaming-lottery-seo",
  },
];

export default function SEOServicesPage() {
  return (
    <>
      <ServiceSchema data={serviceSchemaData} />
      <StaticBreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.daikimedia.com" },
          { name: "SEO Services", url: "https://www.daikimedia.com/seo-services" },
        ]}
      />
      <HeroSeoService />
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10 text-center">
            Explore Our SEO Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-[#1A1A1A]">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10 text-center">
            Results
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {resultCaseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                className="block bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-[#1A1A1A]">{study.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Clients
          title={"Why Leading Brands Trust DaikiMedia"}
          description={"Trusted by thousands of companies across 50+ countries."}
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