"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import FAQSchema from '@/components/schema/FAQSchema';

const faqData = [
  {
    question: "What does an SEO agency in Malaysia do?",
    answer: "An SEO agency in Malaysia helps improve your website’s rankings on Google, increase organic traffic, and attract potential customers through search."
  },
  {
    question: "How long does SEO take to show results in Malaysia?",
    answer: "Most SEO campaigns start showing improvements within 3 to 6 months, depending on competition, website condition, and strategy."
  },
  {
    question: "How much do SEO services cost in Malaysia?",
    answer: "SEO pricing in Malaysia varies based on scope, keywords, and competition. Plans usually range from basic setups to advanced growth strategies."
  },
  {
    question: "Is SEO better than paid ads for long-term growth?",
    answer: "SEO provides long-term, consistent traffic, while paid ads stop when the budget ends. A strong strategy often combines both."
  },
  {
    question: "What is AEO in SEO?",
    answer: "AEO (Answer Engine Optimization) helps your content appear in featured snippets, voice search, and direct answers."
  },
  {
    question: "What is GEO in SEO?",
    answer: "GEO (Generative Engine Optimization) helps your website appear in AI-generated search results like ChatGPT, Gemini, and Google AI."
  },
  {
    question: "Can SEO help my business appear in AI search results?",
    answer: "Yes, with proper content structure and optimization, your website can be featured in AI-driven search platforms and answer-based results."
  },
  {
    question: "Do you provide local SEO services in Malaysia?",
    answer: "Yes, local SEO helps your business appear in location-based searches and Google Business Profile results to attract nearby customers."
  },
  {
    question: "What is multilingual SEO?",
    answer: "Multilingual SEO is the process of optimizing your website in multiple languages, such as English, Malay, and Chinese, so you can reach a wider audience and rank in different language-based search results."
  },
  {
    question: "Do I need ongoing SEO or a one-time service?",
    answer: "SEO works best as an ongoing strategy, as search rankings, competitors, and algorithms keep changing over time."
  }
];

export default function FaqSeoService() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FAQSchema faqs={faqData} />
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
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                    {item.answer}
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