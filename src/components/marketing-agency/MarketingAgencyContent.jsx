"use client";
import { useState } from "react";
import {
  CheckCircle,
  TrendingUp,
  Phone,
  Search,
  Star,
  ArrowUp,
  Users,
  Target,
  Award,
  Heart,
} from "lucide-react";
import MarketingAgencyHero from "@/components/marketing-agency/MarketingAgencyHero";
import PaymentFeatures from "@/components/shared/PaymentFeatures";
import { ServiceProcess } from "@/components/service-single/serviceProcess";
import FaqItem from "@/components/shared/FaqItem";
import { ServiceInclude } from "@/components/service-single/servicesInclude";

// Icon mapping
const iconMap = {
  CheckCircle,
  TrendingUp,
  Phone,
  Search,
  Star,
  ArrowUp,
  Users,
  Target,
  Award,
  Heart,
};

const MarketingAgencyContent = ({ data }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <MarketingAgencyHero
        subtitle={data.hero.subtitle}
        title={data.hero.title}
        paragraph={data.hero.description}
        ctaText={data.hero.ctaText}
        ctaDescription={data.hero.ctaDescription}
        heroImage={data.hero.heroImage}
        heroImageMobile={data.hero.heroImageMobile}
      />

      {/* Why Choose Section */}
      {data.whyChoose && (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white py-20 dark:from-dark-300 dark:via-dark-300/90 dark:to-dark-300 max-md:py-12">
          {/* Background decoration */}
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px] max-md:hidden"></div>
          <div className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-primary/10 blur-[80px] max-md:hidden"></div>
          
          <div className="container relative z-10">
            <div className="mx-auto mb-12 max-w-[575px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-heading dark:text-white max-md:text-2xl">{data.whyChoose.title}</h2>
              <p className="text-lg text-paragraph-light mb-6 max-md:text-base">{data.whyChoose.description}</p>
            </div>
            <PaymentFeatures
              sectionTag=""
              sectionTitle=""
              features={data.whyChoose.features}
              className="bg-transparent pb-0 pt-0"
            />
            {data.whyChoose.closingNote && (
              <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center dark:bg-primary/10 max-md:p-4">
                <p className="text-paragraph-light max-w-3xl mx-auto text-lg max-md:text-base">{data.whyChoose.closingNote}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SEO Services Section */}
      {data.seoServices && (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/30 py-20 dark:from-dark-300 dark:to-dark-300/95 max-md:py-12">
          {/* Background decoration */}
          <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] max-md:hidden"></div>
          
          <div className="container relative z-10">
            <div className="mx-auto mb-12 max-w-[575px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-heading dark:text-white max-md:text-2xl">{data.seoServices.title}</h2>
              <p className="text-lg text-paragraph-light max-md:text-base">{data.seoServices.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {data.seoServices.services.map((service) => (
                <div
                  key={service.id}
                  className="group rounded-medium bg-white p-2.5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-dark-200"
                >
                  <div className="h-full rounded border border-dashed border-gray-100 p-8 transition-all duration-300 group-hover:border-primary/30 dark:border-borderColor-dark max-lg:p-5">
                    <h3 className="mb-3 text-xl font-semibold text-heading dark:text-white">{service.title}</h3>
                    <p className="text-paragraph-light leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Media Section */}
      {data.socialMedia && (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-white py-20 dark:from-dark-300/90 dark:via-dark-300 dark:to-dark-300 max-md:py-12">
          {/* Background decoration */}
          <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/8 blur-[100px] max-md:hidden"></div>
          
          <div className="container relative z-10">
            <div className="mx-auto mb-12 max-w-[575px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-heading dark:text-white max-md:text-2xl">{data.socialMedia.title}</h2>
              <p className="text-lg text-paragraph-light mb-6 max-md:text-base">{data.socialMedia.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {data.socialMedia.services.map((service, index) => (
                <div
                  key={index}
                  className="group rounded-medium bg-white p-2.5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-dark-200"
                >
                  <div className="h-full rounded border border-dashed border-gray-100 p-5 transition-all duration-300 group-hover:border-primary/30 dark:border-borderColor-dark">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 shrink-0 rounded-full bg-primary/10 p-1.5 dark:bg-primary/20">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="text-primary"
                        >
                          <path
                            d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-paragraph-light leading-relaxed">{service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {data.socialMedia.goal && (
              <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center dark:bg-primary/10 max-md:p-4">
                <p className="text-paragraph-light max-w-3xl mx-auto text-lg max-md:text-base">{data.socialMedia.goal}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Industries Section */}
      {data.industries && (
        <ServiceInclude
          sectionTag="Core Service"
          sectionTitle={data.industries.title}
          data={data.industries.industries.map((industry) => ({
            id: industry.id,
            title: industry.title,
            description: industry.description,
            services: industry.services || [],
            servicesLabel: industry.servicesLabel || "We create:",
            benefit: industry.benefit,
          }))}
        />
      )}

      {/* Process Section */}
      {data.process && (
        <ServiceProcess data={data.process.steps.map((step) => ({
          title: step.title,
          desc: step.desc
        }))} />
      )}

      {/* Case Studies Section */}
      {data.caseStudies && (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white py-20 dark:from-dark-300 dark:via-primary/10 dark:to-dark-300 max-md:py-12">
          {/* Background decoration */}
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] max-md:hidden"></div>
          
          <div className="container relative z-10">
            <div className="mx-auto mb-12 max-w-[575px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-heading dark:text-white max-md:text-2xl">{data.caseStudies.title}</h2>
              <p className="text-lg text-paragraph-light mb-6 max-md:text-base">{data.caseStudies.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {data.caseStudies.results.map((result, index) => {
                const resultText = typeof result === "string" ? result : result.text;
                const iconName = typeof result === "object" && result.icon ? result.icon : "CheckCircle";
                const IconComponent = iconMap[iconName] || CheckCircle;
                
                return (
                  <div
                    key={index}
                    className="group rounded-medium bg-white p-2.5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-dark-200"
                  >
                    <div className="h-full rounded border border-dashed border-gray-100 p-6 text-center transition-all duration-300 group-hover:border-primary/30 dark:border-borderColor-dark">
                      <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-3 dark:bg-primary/20">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-paragraph-light leading-relaxed">{resultText}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {data.caseStudies.note && (
              <div className="mt-10 rounded-lg bg-primary/5 p-6 text-center dark:bg-primary/10 max-md:p-4">
                <p className="text-paragraph-light max-w-3xl mx-auto text-lg max-md:text-base">{data.caseStudies.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {data.pricing && (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white py-20 dark:from-dark-300/90 dark:to-dark-300 max-md:py-12">
          {/* Background decoration */}
          <div className="absolute right-0 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-primary/8 blur-[90px] max-md:hidden"></div>
          
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-heading dark:text-white max-md:text-2xl">{data.pricing.title}</h2>
              <div className="whitespace-pre-line rounded-lg bg-white p-8 text-lg leading-relaxed text-paragraph-light shadow-lg dark:bg-dark-200 max-md:p-6 max-md:text-base">
                {data.pricing.description}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {data.faq && (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/30 pb-20 pt-20 dark:from-dark-300 dark:to-dark-300/95 max-md:overflow-hidden max-md:pb-12 max-md:pt-12">
          {/* Background decoration */}
          <div className="absolute left-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-primary/5 blur-[110px] max-md:hidden"></div>
          
          <div className="container relative z-10">
            <div className="mx-auto max-w-[830px]">
              <div className="text-center mb-12">
                <p className="section-tagline mb-3 text-primary font-semibold">FAQ's</p>
                <h2 className="mb-8 text-3xl font-bold text-heading dark:text-white max-md:text-2xl">{data.faq.title}</h2>
              </div>
              <div className="space-y-4">
                {data.faq.questions.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === faq.id}
                    onClick={() => toggleFaq(faq.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </>
  );
};

export default MarketingAgencyContent;

