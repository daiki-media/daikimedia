"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Minus,
  Plus,
  KeyRound,
  FileCode,
  Cpu,
  Link2,
  Users,
  Eye,
  DollarSign,
  Zap,
  Brain,
} from "lucide-react";
import FAQSchema from "@/components/schema/FAQSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import ArticleSchema from "@/components/schema/ArticleSchema";

const benefits = [
  {
    title: "Boosted Visibility",
    description: "Get your website on the first page of search results.",
    icon: Eye,
  },
  {
    title: "Increased Traffic",
    description:
      "Attract more visitors who are actively searching for your offerings.",
    icon: Users,
  },
  {
    title: "Higher ROI",
    description: "Drive organic traffic that converts without costly ad spend.",
    icon: DollarSign,
  },
  {
    title: "Better User Experience",
    description: "Enjoy faster load times and mobile-friendly designs.",
    icon: Zap,
  },
  {
    title: "Expert Guidance",
    description:
      "Leverage the knowledge of professionals who stay ahead of SEO trends.",
    icon: Brain,
  },
];

const faqs = [
  {
    question: "What is the average cost of hiring an SEO company?",
    answer:
      "The cost varies based on services, but quality SEO typically ranges from $750 to $5000 per month.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While some improvements can be seen in 3-6 months, consistent SEO delivers long-term results over time.",
  },
  {
    question: "Can I do SEO myself?",
    answer:
      "Yes, but professional SEO companies have the tools, expertise, and time to deliver faster and more impactful results.",
  },
  {
    question: "Why should I choose Daiki Media?",
    answer:
      "We offer personalized strategies, transparent reporting, and a proven track record of helping businesses grow organically.",
  },
];

const paaQuestions = [
  {
    question:
      "How does Search Engine Optimization (SEO) improve a website's visibility?",
    answer:
      "SEO, short for Search Engine Optimization, refers to the strategic process of improving a website's visibility on platforms like Google. It works by optimizing various elements on your website — such as content, meta tags, internal linking, and page speed — to make it easier for search engines to understand and rank your pages. By aligning your site with search engine algorithms and user intent, SEO helps you attract more qualified traffic, boost brand credibility, and ultimately drive better conversions without relying on paid ads.",
  },
  {
    question: "What are the main types of SEO strategies?",
    answer:
      "The four main categories of SEO are: 1) On-Page SEO – This focuses on optimizing the content and structure within your website, like meta tags, keywords, headers, and internal linking. 2) Off-Page SEO – It involves building authority through backlinks, brand mentions, and sharing content across other platforms. 3) Technical SEO – This ensures your site meets search engine requirements by improving speed, mobile-friendliness, security (HTTPS), and crawlability. 4) Local SEO– Aimed at improving visibility for location-based searches, using tools like Google Business Profile, local citations, and reviews. Each type plays a vital role in helping your website rank higher and connect better with the right audience.",
  },
  {
    question: "How can I start learning SEO for free?",
    answer:
      "Yes, you can absolutely learn and master SEO for free if you're consistent and curious. There are tons of high-quality resources available online — including blogs, YouTube tutorials, free SEO tools, and forums — that cover everything from basics to advanced strategies. By applying what you learn through hands-on practice on your own website or a demo project, you can build real SEO skills without spending a single rupee. The key is dedication, staying updated with Google algorithm changes, and practicing regularly.",
  },
  {
    question: "Can you share some real-life examples of SEO in action?",
    answer:
      "Sure! Here are some real examples of how SEO works in practice: 1) Optimizing a blog post by using the right keywords, adding internal links, writing a compelling meta title and description — so it appears on Google when users search for related topics. 2) Improving page speed and mobile responsiveness to reduce bounce rate and increase rankings on mobile search results. 3) Building backlinks by guest posting on relevant websites or getting listed in niche directories — helping your domain gain authority in Google's eyes. 4) Creating a Google Business Profile for a local service (like a salon or a clinic) so it shows up in nearby searches like 'best salon near me.' 5) Fixing broken links and duplicate content to ensure search engines crawl your site smoothly and rank it better. Each of these actions directly helps a site become more visible, user-friendly, and search engine ready.",
  },
  {
    question: "Which three core pillars form the foundation of SEO?",
    answer:
      "The three core pillars of SEO are: 1) Technical SEO – This sets the foundation by ensuring your website is crawlable, secure (HTTPS), mobile-friendly, and loads fast. It helps search engines properly access and index your site. 2) On-Page SEO – This focuses on everything visible on your website — like keyword-optimized content, title tags, headers, images, and internal links. It ensures your pages are relevant and valuable to both users and search engines. 3) Off-Page SEO – This builds your site's authority through external signals like backlinks, social shares, and brand mentions. It shows search engines that others trust your content. Together, these three areas work in harmony to boost visibility, increase traffic, and improve overall rankings in search results.",
  },
  {
    question: "What is the most effective tool for SEO?",
    answer:
      "To implement strong SEO strategies, marketers and website owners rely on powerful tools that offer deep insights and automation. Here are some of the most trusted ones: 1) Google Search Console – Free tool by Google to monitor website performance, indexing status, and fix technical issues. 2) Ahrefs– Great for backlink analysis, keyword research, and competitor tracking. 3) Yoast SEO (for WordPress) – Helps optimize on-page content with real-time suggestions. 4) Screaming Frog– A desktop crawler that scans your site for broken links, duplicate content, and technical errors. 5) Ubersuggest – Beginner-friendly tool for keyword research, traffic insights, and SEO audits. 6) Google Analytics – Tracks user behavior, traffic sources, and engagement to help refine SEO strategies. Using a mix of these tools helps you stay ahead in SEO by combining data, optimization, and strategy.",
  },
  {
    question: "Do I need an expert, or can I do SEO on my own?",
    answer:
      "Yes, you can do SEO on your own, but it requires dedication, learning, and consistent effort. Many businesses successfully manage their SEO in-house by using free resources, tools, and guides available online. However, SEO is complex and constantly evolving, so it can be time-consuming to stay updated with algorithm changes and best practices. Professional SEO companies like Daiki Media have the expertise, tools, and experience to deliver faster results while you focus on running your business. The choice depends on your available time, budget, and how quickly you want to see results.",
  },
  {
    question: "Does Google use SEO for its own platforms?",
    answer:
      "While Google doesn't 'do SEO' for its own search engine in the traditional sense, it absolutely promotes SEO best practices for website owners. Google provides clear guidelines through its Search Essentials (formerly Webmaster Guidelines), encouraging sites to be fast, mobile-friendly, secure (HTTPS), and valuable to users. Additionally, Google offers tools like Search Console, PageSpeed Insights, and Mobile-Friendly Test to help webmasters improve their SEO. So, while Google doesn't optimize its own platform for rankings (since it runs the search engine itself), it actively educates and supports the global SEO community in building better, search-friendly websites.",
  },
  {
    question: "What exactly is a backlink and why does it matter?",
    answer:
      "Backlinks are links from other websites that point to your site — like digital votes of trust. When a reputable website links to your content, it signals to search engines that your page is valuable, credible, and worth ranking higher. Here's how they work: 1) Authority Boost – The more high-quality backlinks you earn, the more search engines trust your domain. 2) Referral Traffic – Backlinks also drive visitors from other websites directly to yours, increasing exposure. 3) Indexing Support – Search engines discover new pages faster when they are linked from other indexed sites. 4) Relevance Signals– If a backlink comes from a site in a similar niche, it helps Google understand your content's context better. But not all backlinks are equal — links from spammy or irrelevant sources can harm SEO. So quality matters more than quantity.",
  },
];

// All FAQ data combined for schema
const allFAQs = [...faqs, ...paaQuestions];

const breadcrumbs = [
  { name: "Home", url: "https://www.daikimedia.com" },
  { name: "Learn", url: "https://www.daikimedia.com/learn" },
  {
    name: "What is SEO Company",
    url: "https://www.daikimedia.com/what-is-seo-company",
  },
];

export const metadata = {
  title:
    "SEO Optimization Companies | Expert SEO Services for Business | Daiki Media",
  canonicalUrl: "https://www.daikimedia.com/what-is-seo-company",
  description:
    "SEO optimization companies, Daiki Media provides expert services to improve your website's rankings and drive organic traffic, ensuring long-term growth and success.",
  keywords:
    "SEO company, Daiki Media, search engine optimization, SEO services, online visibility, SEO strategies, improve website ranking",
};

export default function SeoCompany() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FAQSchema faqs={allFAQs} />

      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      <ArticleSchema
        headline="What is an SEO Company and Why Your Business Needs One"
        description="Discover how Daiki Media can help your business rank higher, drive traffic, and grow revenue with expert SEO services."
        authorName="Daiki Media"
        authorUrl="https://www.daikimedia.com"
        publisherName="Daiki Media"
        publisherLogo="https://www.daikimedia.com/logo.png"
        datePublished="2024-01-01T00:00:00Z"
        dateModified="2024-12-01T00:00:00Z"
        mainEntityUrl="https://www.daikimedia.com/what-is-seo-company"
        imageUrl="https://www.daikimedia.com/seo-company-guide.jpg"
      />

      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="mt-32 ">
          <div className=" mx-auto text-center">
            <h1 className="text-base font-bold mb-4">
              What is an SEO Company and Why Your Business Needs One
            </h1>
            <h2 className="text-5xl font-bold mb-6 max-w-4xl mx-auto leading-snug">
              "Discover how Daiki Media can help your business rank higher,
              drive traffic, and grow revenue with expert SEO services."
            </h2>
            <p className="text-base mb-8 max-w-4xl mx-auto">
              In today's digital age, standing out online is more challenging
              than ever. An SEO company specializes in improving your website's
              visibility on search engines like Google, driving organic traffic,
              and ensuring your business gets noticed.
            </p>
            <p className="text-base mb-8 max-w-4xl mx-auto">
              At <strong>Daiki Media</strong>, we help businesses like yours
              unlock the potential of search engines to connect with your target
              audience. With proven strategies and cutting-edge tools, we
              transform websites into lead-generating machines.
            </p>
            <div className="py-8 px-6 text-center">
              <h2 className="text-4xl font-bold text-black mb-4 leading-relaxed">
                Ready to make your website the cornerstone of your success?
              </h2>
              <p className="text-black text-base mb-6">
                Contact Daiki Media today and take the first step towards higher
                rankings!
              </p>
              <Link href="/contact" className="btn btn-xl mt-10">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Understanding SEO Section */}
        <section className="mt-32 ">
          <div className="container mx-auto ">
            <div className="relative mb-8">
              <h2 className="text-4xl font-bold text-center mb-4">
                Understanding SEO: The Backbone of Online Success
              </h2>
            </div>

            <div className="mb-8">
              <p className="text-base leading-relaxed">
                Search Engine Optimization (SEO) is the process of optimizing
                your website to rank higher on search engines, like Google, for
                relevant searches. It involves various techniques, including:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4  mb-4">
              <div className="p-6  bg-white border-r border-l border-black border-dashed transition-all">
                <div className="flex items-center mb-4">
                  <KeyRound className="w-8 h-8 text-black mr-3" />
                  <h3 className="text-xl text-black font-semibold">
                    1. Keyword Research
                  </h3>
                </div>
                <p className="text-black">
                  Identifying what your potential customers are searching for.
                </p>
              </div>

              <div className="p-6  transition-all duration-300 ease-in-out transform ">
                <div className="flex items-center mb-4">
                  <FileCode className="w-8 h-8 text-black mr-3" />
                  <h3 className="text-xl text-black font-semibold">
                    2. On-Page SEO
                  </h3>
                </div>
                <p className="text-black">
                  Enhancing content, meta tags, and internal links for better
                  rankings.
                </p>
              </div>

              <div className="p-6 border-l border-r border-black border-dashed  bg-white transition-all duration-300 ease-in-out transform">
                <div className="flex items-center mb-4">
                  <Cpu className="w-8 h-8 text-black mr-3" />
                  <h3 className="text-xl text-black font-semibold">
                    3. Technical SEO
                  </h3>
                </div>
                <p className="text-black">
                  Ensuring your website is fast, secure, and mobile-friendly.
                </p>
              </div>

              <div className="p-6 border-r border-black border-dashed bg-white border-black transition-all duration-300 ease-in-out transform ">
                <div className="flex items-center mb-4">
                  <Link2 className="w-8 h-8 text-black mr-3" />
                  <h3 className="text-xl font-semibold text-black">
                    4. Off-Page SEO
                  </h3>
                </div>
                <p className="text-black">
                  Building high-quality backlinks to improve authority.
                </p>
              </div>
            </div>

            <div className=" mt-32">
              <h3 className="text-5xl text-center font-bold mb-10">
                Why is SEO important?
              </h3>
              <p className="text-base text-center mb-6">
                With billions of searches happening daily, SEO is the bridge
                between your website and the audience searching for your
                products or services.
              </p>
              <div className="flex items-center justify-center text-center  mx-auto px-4">
                <p className="text-xl font-semibold mr-4">Key Insight:</p>
                <p className="text-lg italic">
                  "93% of online experiences begin with a search engine. Are you
                  leveraging SEO to capture this traffic?"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32">
          <div className=" container mx-auto">
            <h2 className="text-4xl  font-bold mb-6 text-center text-black">
              Why Your Business Needs Daiki Media's SEO Expertise
            </h2>
            <p className=" mb-8 text-center">
              Investing in an SEO company comes with countless benefits. Here
              are some of the biggest advantages of partnering with Daiki Media:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-3xl border border-black shadow-md transition-all duration-300 ease-in-out transform "
                >
                  <div className="bg-black rounded-full p-3 mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-black text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 rounded-xl p-6 mb-8 border border-gray-300">
              <p className="text-lg font-semibold text-black">
                Did you know that businesses with strong SEO strategies can
                generate over 50% of their website traffic from organic
                searches?
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 xl:gap-x-24">
              {/* Sticky Left Section */}
              <div className="mb-12 sticky top-32 self-start">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
                  Frequently Asked Questions About SEO Services
                </h2>
                <p className="text-gray-600 text-lg">
                  Get answers to common questions about our SEO services,
                  processes, and how we can help transform your business's
                  online presence.
                </p>
              </div>

              {/* Right side: FAQs */}
              <div className="space-y-2">
                {allFAQs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                      aria-expanded={openIndex === index}
                    >
                      <span
                        className="font-medium text-lg text-gray-800"
                        itemProp="name"
                      >
                        {item.question}
                      </span>
                      <span className="ml-4 flex-shrink-0">
                        {openIndex === index ? (
                          <Minus className="h-5 w-5 text-black" />
                        ) : (
                          <Plus className="h-5 w-5 text-black" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? "max-h-96 pb-4" : "max-h-0"
                      }`}
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <p className="text-gray-600 text-lg" itemProp="text">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
