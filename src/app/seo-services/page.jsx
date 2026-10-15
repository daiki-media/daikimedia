import HeroSeoService from "./HeroSeoService";
import AfterHeroSeoService from "./AfterHeroSeoService";
import Carousel from "./Carousel";
import PricingSeoService from "./PricingSeoService";
import WhyChooseSeo from "./WhyChooseSeo";
import WhatClientSay from "./WhatClientSay";
import SuccessStory from "./SuccessStory";
import ContactForm from "./ContactForm";
import FaqSeoService from "./FaqSeoService";
import DeliverablesSeoService from "./DeliverablesSeoService";
import ProcessSeoService from "./ProcessSeoService";
import GetStartedSeoService from "./GetStartedSeoService";
import ClosingSeoService from "./ClosingSeoService";
import Footer from "@/components/footer/Footer";
import Clients from "@/components/shared/Clients";
import Link from "next/link";
import ServiceSchema from "@/components/schema/ServicesSchema";
import StaticBreadcrumbSchema from "@/components/schema/StaticBreadcrumbSchema";

export const metadata = {
  title: "Advanced SEO Services Malaysia for Google ChatGPT and AI Search",
  description: "Dominate Google and AI search engines like ChatGPT with specialized SEO services in Malaysia. Drive high-intent traffic and grow your revenue today.",
  alternates: { canonical: "https://www.daikimedia.com/seo-services" },
};

const serviceSchemaData = {
  metaTitle: metadata.title,
  metaDescription: metadata.description,
  slug: "seo-services",
};

const relatedServices = [
  { title: "Local SEO Services", href: "/local-seo-services", desc: "rank in nearby searches and on Google Maps" },
  { title: "Enterprise SEO Services", href: "/enterprise-seo-services", desc: "SEO for large, multi-page and multi-market websites" },
  { title: "SEO Audit Services", href: "/seo-audits-services", desc: "find the technical and content issues holding your site back" },
  { title: "Ecommerce SEO Services", href: "/ecommerce-seo-strategies", desc: "drive product and category traffic that converts" },
  { title: "Generative Engine Optimization", href: "/generative-engine-optimization", desc: "get cited in AI-generated answers" },
  { title: "iGaming SEO Services", href: "/localized-seo-for-igaming", desc: "localized SEO for regulated, competitive markets" },
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
      <DeliverablesSeoService />
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
                <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
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
      <ProcessSeoService />
      <Carousel />
      <PricingSeoService />
      <WhyChooseSeo />
      <WhatClientSay />
      <SuccessStory />
      <section className="w-full bg-white py-16 px-6">
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
      <ContactForm />
      <GetStartedSeoService />
      <FaqSeoService />
      <ClosingSeoService />
      <Footer />
    </>

  );
}