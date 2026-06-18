import { notFound } from "next/navigation";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import caseStudiesData from "@/data/caseStudiesData.json";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";

export async function generateStaticParams() {
  const { caseStudies } = caseStudiesData;
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { caseStudies } = caseStudiesData;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Daiki Media",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: caseStudy.metaTitle || caseStudy.title,
    description: caseStudy.metaDescription || caseStudy.excerpt,
    alternates: {
      canonical: `https://www.daikimedia.com/case-studies/${slug}`,
    },
    openGraph: {
      title: caseStudy.metaTitle || caseStudy.title,
      description: caseStudy.metaDescription || caseStudy.excerpt,
      images: [
        {
          url: caseStudy.featuredImage || caseStudy.thumbnail,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.metaTitle || caseStudy.title,
      description: caseStudy.metaDescription || caseStudy.excerpt,
      images: [caseStudy.featuredImage || caseStudy.thumbnail],
    },
  };
}

export default async function CaseStudyDetail({ params }) {
  const { slug } = await params;
  const { caseStudies } = caseStudiesData;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        {/* <PageHero subtitle={caseStudy.subtitle} title={caseStudy.h1 || caseStudy.title} /> */}
        
        <CaseStudyContent caseStudy={caseStudy} />

        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
