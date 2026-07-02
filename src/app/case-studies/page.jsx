import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import caseStudiesData from "@/data/caseStudiesData.json";

export const metadata = {
  title: "Case Studies | Daiki Media SEO Agency",
  description:
    "Explore our successful SEO case studies. See how we've helped businesses grow their organic traffic, improve rankings, and generate more leads through strategic SEO campaigns.",
  alternates: {
    canonical: "https://www.daikimedia.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  const { caseStudies } = caseStudiesData;

  return (
    <>
      <main>
        <PageHero
          subtitle="OUR CASE STUDIES"
          title="Real Results from Real SEO Campaigns"
          paragraph="Discover how we've helped businesses across different industries achieve remarkable growth through strategic SEO implementation and data-driven optimization."
        />
        <section className="relative py-20 max-md:py-20">
          <div className="absolute left-1/2 top-20 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative">
            {caseStudies && caseStudies.length > 0 ? (
              <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
                {caseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-gray-600">No case studies available at the moment.</p>
              </div>
            )}
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}

