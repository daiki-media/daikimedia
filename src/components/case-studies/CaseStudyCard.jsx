"use client";
import Link from "next/link";

const CaseStudyCard = ({ caseStudy }) => {
  const imageUrl =
    caseStudy.thumbnail && caseStudy.thumbnail !== ""
      ? caseStudy.thumbnail
      : "/images/blog/blog-fallback-img.webp";

  return (
    <article className="rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200">
      <Link href={`/case-studies/${caseStudy.slug}`} className="block">
        <div className="rounded-2xl border border-dashed border-gray-100 p-6 ease-in-out max-md:px-4 dark:border-borderColor-dark">
          <div className="space-y-4">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src={imageUrl}
                alt={caseStudy.title || "Case Study"}
                className="aspect-video h-[200px] w-full rounded-lg object-cover object-center shadow-md transition-all duration-300 ease-in-out"
                width={350}
                height={200}
              />
            </div>
            <div className="space-y-4">
              <div className="mb-2">
                <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary dark:bg-primary-900 dark:text-primary-200">
                  {caseStudy.niche || "Case Study"}
                </span>
              </div>
              <div className="block text-2xl font-semibold text-gray-800 dark:text-white transition-all duration-300 ease-in-out">
                {caseStudy.title}
              </div>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                {caseStudy.excerpt || caseStudy.metaDescription}
              </p>
            </div>
            <div className="mt-6">
              <span className="inline-block font-semibold text-sm text-primary hover:underline">
                View Case Study →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CaseStudyCard;

