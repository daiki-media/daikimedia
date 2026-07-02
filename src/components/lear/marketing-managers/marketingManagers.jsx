"use client";
import React from "react";

const challenges = [
  {
    title: "Keeping Up with Algorithm Updates",
    content:
      "Search engines like Google frequently update their algorithms, which can impact rankings. To stay ahead, subscribe to industry blogs, attend webinars, and continuously test your strategies. Partnering with a reliable SEO agency can also ensure you're always aligned with best practices.",
  },
  {
    title: "Balancing SEO with Other Marketing Priorities",
    content:
      "With so many responsibilities, it's easy to let SEO take a back seat. However, integrating SEO into your overall marketing plan ensures it gets the attention it deserves. For example, align your content calendar with SEO goals to streamline efforts.",
  },
  {
    title: "Measuring ROI",
    content:
      "Proving the value of SEO to stakeholders can be challenging since results often take time. Focus on key performance indicators (KPIs) such as organic traffic, keyword rankings, and conversion rates. Use tools to create visual reports that clearly demonstrate progress and impact.",
  },
];
export const metadata = {
  title: "Marketing Managers | Daiki Media",
  description:
    "Empower your marketing managers with Daiki Media. Explore tools, strategies, and insights designed to help managers lead successful marketing campaigns.",
  keywords:
    "Marketing managers, Daiki Media, marketing tools, leadership strategies, marketing campaigns, team management, successful marketing",
};

export default function MarketingManagers() {
  return (
    <div className="mt-32">
      {/* Hero Banner Section */}
      <section className=" text-white ">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 relative inline-block">
              Master SEO with Confidence: A Guide for Marketing Managers
              <span className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering businesses to dominate search rankings, drive organic
              traffic, and achieve measurable results.
            </p>
          </div>

          <div className=" rounded-3xl bg-white p-8 sm:p-12 shadow-xl mb-12 relative overflow-hidden border-2 border-black transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40  rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32  rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10">
              <p className="text-lg  dark:text-black leading-relaxed mb-8">
                Learn actionable strategies and best practices to boost your
                online presence, drive organic traffic, and achieve measurable
                results.
              </p>
            </div>
            <div className="text-center mb-12">
              <p className="text-xl dark:text-black max-w-3xl mx-auto">
                Empower your marketing efforts with our comprehensive SEO
                insights
              </p>
              <button className="bg-white text-black dark:text-black text-lg font-bold py-3 mt-6 px-6 rounded-full hover:bg-black hover:text-white dark:hover:text-white border-2 transition duration-300">
                Start learning now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <section className="py-16">
        <div className="text-black flex items-center justify-center p-6">
          <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-red-500 text-center mb-8">
                Why Marketing Managers Need to Prioritize SEO
              </h1>
              <p className="text-lg text-black mb-6">
                In today&apos;s digital age, search engine optimization (SEO) is
                no longer optional—it&apos;s essential. As a marketing manager,
                you&apos;re responsible for driving visibility and engagement,
                and SEO is a cornerstone of achieving those goals. By ensuring
                your website ranks high on search engine results pages (SERPs),
                you can consistently attract the right audience to your
                business.
              </p>
              <p className="text-lg text-black mb-6">
                SEO isn&apos;t just about keywords; it&apos;s about
                understanding your audience&apos;s intent. With the right SEO
                strategies, you can position your brand as the solution to your
                customers&apos; needs, building trust and authority in your
                industry. This can translate into higher click-through rates,
                better engagement, and ultimately, more conversions.
              </p>
              <p className="text-lg text-black mb-6">
                Another reason SEO is vital is its long-term impact. While paid
                advertising can bring immediate traffic, the benefits stop as
                soon as the budget runs out. SEO, on the other hand, offers
                sustainable growth. It ensures that your website continues to
                generate traffic and leads even months after optimization
                efforts.
              </p>
              <p className="text-lg text-black">
                Finally, an effective SEO strategy complements all other
                marketing channels. Whether it&apos;s content marketing, social
                media, or email campaigns, a well-optimized website enhances the
                performance of every marketing effort, creating a cohesive and
                impactful marketing ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd section */}
      <section className="py-20">
        <div className="min-h-screen p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl dark:text-white font-bold text-center mb-12">
              Mastering SEO Tactics to Stay Ahead of the Competition
            </h1>
            <p className="text-lg dark:text-white mb-6">
              To succeed in SEO, marketing managers need to focus on strategies
              that align with search engine algorithms and user behavior. Here
              are some of the most critical tactics:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-black transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold dark:text-red-500 mb-4">
                  1. Comprehensive Keyword Research
                </h3>
                <p className="dark:text-black">
                  Keyword research is the foundation of any successful SEO
                  campaign. Start by identifying terms your target audience is
                  searching for and evaluate their search volume, competition,
                  and relevance. Tools like Google Keyword Planner and SEMrush
                  can help you discover high-value keywords. When choosing
                  keywords, consider long-tail variations. These are specific
                  phrases that may have lower search volume but higher intent,
                  making them ideal for attracting qualified leads.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-black transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold dark:text-red-500 mb-4">
                  2. On-Page Optimization
                </h3>
                <p className="dark:text-black">
                  On-page SEO focuses on optimizing individual pages to rank
                  higher. Ensure your meta titles, meta descriptions, headers,
                  and content include target keywords naturally. Beyond
                  keywords, prioritize user experience by ensuring pages are
                  easy to navigate, mobile-friendly, and quick to load.
                  Don&apos;t forget about internal linking. By linking to
                  relevant content on your site, you guide visitors through your
                  content while signaling to search engines the structure and
                  hierarchy of your site.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-black transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold dark:text-red-500 mb-4">
                  3. Quality Content Creation
                </h3>
                <p className="dark:text-black">
                  Search engines reward websites that provide valuable and
                  engaging content. Create blog posts, guides, videos, and
                  infographics that address your audience&apos;s questions and
                  pain points. Remember, content is king—but only when it
                  delivers genuine value.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 border-2 border-black transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold dark:text-red-500 mb-4">
                  4. Technical SEO and Analytics
                </h3>
                <p className="dark:text-black">
                  From fixing broken links to improving site speed, technical
                  SEO ensures your website is optimized for search engines and
                  users alike. Regularly monitor analytics tools like Google
                  Analytics and Search Console to track performance and identify
                  areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4th  */}
      <section className="py-16">
        <div className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="max-w-4xl w-full text-black">
            <h1 className="text-4xl  font-extrabold mb-6 text-center relative">
              Navigating the Complexities of SEO with Confidence
            </h1>

            <p className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto">
              While SEO is a powerful tool, it&apos;s not without its
              challenges. Marketing managers often encounter roadblocks that can
              hinder progress. Here&apos;s how to tackle some common issues:
            </p>

            <div className="space-y-12">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="relative pl-8 group transform transition-all duration-300 ease-in-out hover:bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-2xl"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-black transform origin-bottom transition-all duration-300 ease-in-out group-hover:scale-y-110"></div>
                  <h2 className="text-2xl font-bold mb-4 text-black group-hover:text-red-500 group-hover:translate-x-2 transition-transform duration-300">
                    {index + 1}. {challenge.title}
                  </h2>
                  <p className="text-gray-800 group-hover:text-gray-600 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {challenge.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl font-semibold italic text-gray-700">
                By addressing these challenges head-on, you can ensure that SEO
                remains a driving force behind your marketing success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
