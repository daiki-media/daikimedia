import PageHero from "@/components/shared/PageHero";
import { CallToAction } from "@/components/service-single/callToAction";
import { CardsSection } from "@/components/service-single/cardsSection";
import { InfoStatsSection } from "@/components/service-single/infoStatsSection";
import { ServiceInclude } from "@/components/service-single/servicesInclude";
import { Comparison } from "@/components/service-single/comparison";
import { AdditionalInfo } from "@/components/service-single/additionalInfo";
import { ServiceProcess } from "@/components/service-single/serviceProcess";
import { FaqSection } from "@/components/service-single/faqSection";
import Clients from "@/components/shared/Clients";
import Services from "@/components/shared/Services";
import { DataTable } from "@/components/service-single/dataTable";
import { CommonChallengesSection } from "@/components/service-single/commonChallengesSection";

const ServiceContent = ({ data = {} }) => {
  return (
    <>
      <section>
        <PageHero
          subtitle={data?.subTitle || "Default Subtitle"}
          title={data?.heroSection?.title || "Default Title"}
          paragraph={data?.heroSection?.description || "Default Description"}
          link={data?.heroSection?.link || "#"}
        />

        {/* NEW: sections */}
          {data?.whatIsIGamingSection && (
            <section className="py-16 px-4 max-w-5xl mx-auto">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">{data.whatIsIGamingSection.title}</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-center">
                    {data.whatIsIGamingSection.content}
                  </p>
                </div>
                {data.whatIsIGamingSection.ctaButton && data.whatIsIGamingSection.ctaLink && (
                  <div className="text-center mt-10">
                    <a href={data.whatIsIGamingSection.ctaLink} className="btn">
                      {data.whatIsIGamingSection.ctaButton}
                    </a>
                  </div>
                )}
              </div>
            </section>
          )}

          {data?.tableOne && (
            <DataTable data={data.tableOne} />
          )}

          {data?.GrowthSection && (
            <section className="py-16 px-4 max-w-5xl mx-auto">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">{data.GrowthSection.title}</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-center">
                    {data.GrowthSection.content}
                  </p>
                </div>
                {data.GrowthSection.ctaButton && data.GrowthSection.ctaLink && (
                  <div className="text-center mt-10">
                    <a href={data.GrowthSection.ctaLink} className="btn">
                      {data.GrowthSection.ctaButton}
                    </a>
                  </div>
                )}
              </div>
            </section>
          )}

          {data?.tableTwo && (
            <DataTable data={data.tableTwo} />
          )}

          {data?.tableThree && (
            <DataTable data={data.tableThree} />
          )}
          {data?.commonChallengesSection && (
            <CommonChallengesSection data={data.commonChallengesSection} />
          )}
          {data?.tableFour && (
            <DataTable data={data.tableFour} />
          )}

          {data?.tableFive && (
            <DataTable data={data.tableFive} />
          )}

          {data?.extraDataDescription && (
            <section className="py-16 px-4 max-w-5xl mx-auto">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">{data.extraDataDescription.title}</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-center">
                    {data.extraDataDescription.content}
                  </p>
                </div>
                {data.extraDataDescription.ctaButton && data.extraDataDescription.ctaLink && (
                  <div className="text-center mt-10">
                    <a href={data.extraDataDescription.ctaLink} className="btn">
                      {data.extraDataDescription.ctaButton}
                    </a>
                  </div>
                )}
              </div>
            </section>
          )}

          {data?.daikiMediaHelpSection && (
            <section className="py-16 px-4 bg-red-50 dark:bg-red-800/30 rounded-xl max-w-5xl mx-auto">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">{data.daikiMediaHelpSection.title}</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-center">
                    {data.daikiMediaHelpSection.content}
                  </p>
                </div>
                {data.daikiMediaHelpSection.ctaButton && data.daikiMediaHelpSection.ctaLink && (
                  <div className="text-center mt-10">
                    <a href={data.daikiMediaHelpSection.ctaLink} className="btn">
                      {data.daikiMediaHelpSection.ctaButton}
                    </a>
                  </div>
                )}
              </div>
            </section>
          )}
        {/* NEW: sections end */}
        {data?.servicesInclude && <ServiceInclude data={data.servicesInclude} sectionTitle={data?.servicesIncludeTitle || `What Our ${data?.title || "Services"} Include`} />}
        {data?.infoStatsSection && <InfoStatsSection data={data.infoStatsSection} />}

        <Clients 
          title={data?.clientsSection?.title}
          description={data?.clientsSection?.description}
        />

        {data?.servicesSection && (
          <Services 
            title={data.servicesSection.title}
            description={data.servicesSection.description}
          />
        )}
        {data?.cardsSection && <CardsSection data={data.cardsSection} />}
        {data?.ctaSection && <CallToAction data={data.ctaSection} />}
        {data?.comparison && (
          <Comparison 
            data={{
              ...data.comparison,
              title: data.comparison.title === "How DaikiMedia SEO Compares to Other Agencies" 
                ? `How DaikiMedia ${data?.title || "Services"} Compares to Other Agencies`
                : data.comparison.title
            }}
            serviceTitle={data?.title}
          />
        )}
        {data?.serviceProcess && <ServiceProcess data={data.serviceProcess} title={data?.serviceProcessTitle} />}
        {data?.additionalInfo && <AdditionalInfo data={data.additionalInfo} />}
        {data?.faqSection && <FaqSection data={data.faqSection} heading={data?.faqSectionHeading} />}

        {/* NEW: Explore Services Section */}
        {data?.exploreServicesSection && (
          <section className="py-16 px-4 mb-[100px] max-w-5xl mx-auto">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">{data.exploreServicesSection.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-center">
                {data.exploreServicesSection.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.exploreServicesSection.services?.map((service, idx) => (
                  <a key={idx} href={service.link} className="btn">
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {data?.conclusionSection && (
          <section>
            <div className="mb-[100px] text-center max-w-5xl mx-auto">
              <p className="mb-4 font-medium uppercase">TOP INTEGRATION</p>
              <h2 className="mb-10 max-lg:mb-10">
                {data.conclusionSection?.title || "Default Conclusion Title"}
              </h2>
              <p className="mx-auto mb-12 max-w-[590px] max-lg:mb-10">
                {data.conclusionSection?.description || "Default Conclusion Description"}
              </p>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default ServiceContent;