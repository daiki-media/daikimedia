"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import FAQSchema from '@/components/schema/FAQSchema';
import Link from 'next/link';

const faqData = [
  {
    question: "What does an SEO agency in Malaysia do?",
    answer: "An SEO agency in Malaysia improves your website's rankings on Google, increases organic traffic and attracts potential customers through search."
  },
  {
    question: "How long does SEO take to show results in Malaysia?",
    answer: "Most SEO campaigns start showing early movement within 3 to 6 months, with more substantial results typically building over 6 to 12 months. Timelines depend on competition level, your website's current condition, and the strategy in place. Be cautious of any agency promising fast top rankings; this is not how search algorithms work."
  },
  {
    question: "How much do SEO services cost in Malaysia?",
    answer: "Pricing depends on scope, number of keywords and competition. Our structured plans run from RM2,000 to RM7,000 per month, and we also build custom enterprise SEO packages for larger or multi-market sites. See the pricing section above for exactly what each tier includes."
  },
  {
    question: "Is SEO better than paid ads for long-term growth?",
    answer: "SEO builds long-term, compounding traffic that continues working after initial investment, while paid ads stop generating traffic the moment the budget ends. Many businesses see the best results combining both. See our PPC management services.",
    link: { text: "PPC management services", href: "/ppc-management" }
  },
  {
    question: "What is AEO in SEO?",
    answer: "Answer Engine Optimization (AEO) structures content to be eligible for featured snippets, voice search results and direct-answer boxes."
  },
  {
    question: "What is GEO in SEO?",
    answer: "Generative Engine Optimization (GEO) structures and formats content so it can be referenced and cited by AI systems such as ChatGPT, Gemini and Google AI Overviews."
  },
  {
    question: "Can SEO help my business appear in AI search results?",
    answer: "With the right content structure, clear sourcing and technical setup, your website becomes eligible for citation in AI-driven search platforms and answer-based results. This is not guaranteed for any specific query, but it meaningfully improves your chances."
  },
  {
    question: "Do you provide local SEO services in Malaysia?",
    answer: "Yes, Daikimedia provides Local SEO services. It helps your business appear in location-based searches and Google Business Profile results, so you attract nearby customers searching with local intent.",
    link: { text: "Local SEO services", href: "/local-seo-services" }
  },
  {
    question: "What is multilingual SEO?",
    answer: "Multilingual SEO optimises your website across several languages such as English, Malay and Chinese so you reach a wider audience and rank in different language-based search queries."
  },
  {
    question: "Do I need ongoing SEO or a one-time service?",
    answer: "SEO works best as an ongoing strategy, since rankings, competitors and search algorithms keep changing. If you're unsure where to start, a one-time SEO audit is a sensible first step to understand where you currently stand."
  }
];

// Renders the answer text, turning the optional link phrase into an internal link.
function renderAnswer(item) {
  if (!item.link) return item.answer;
  const [before, after] = item.answer.split(item.link.text);
  return (
    <>
      {before}
      <Link href={item.link.href} className="text-[#3F51B5] font-semibold hover:underline">
        {item.link.text}
      </Link>
      {after}
    </>
  );
}

export default function FaqSeoService() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FAQSchema faqs={faqData} pageUrl="https://www.daikimedia.com/seo-services" />
      <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">

        {/* LEFT CONTENT: TEXT & ACCORDION */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-[17px] font-semibold text-[#1a1a1a]">
                    {item.question}
                  </h3>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                    {renderAnswer(item)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: IMAGE WITH BORDER RADIUS */}
        <div className="w-full lg:w-2/5 sticky top-10">
          <div className="relative p-3 border-2 border-gray-100 rounded-[40px]">
            <img
              src="/images/seoService/daikemedia-team.png"
              alt="daikimedia team"
              className="w-full h-auto rounded-[30px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}