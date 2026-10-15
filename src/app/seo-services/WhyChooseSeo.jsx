import React from 'react';
import { Search, Globe, BarChart3, FileText } from 'lucide-react';
import Image from 'next/image';

const WhyChooseSeo = () => {
  const features = [
    {
      title: "AI-Integrated SEO Strategies",
      desc: "SEO combined with AIO, GEO and AEO, so your business targets ranking on Google and eligibility for citation in ChatGPT, Gemini and other answer engines.",
      icon: <Search className="w-8 h-8 text-[#FF4D3D]" />,
    },
    {
      title: "Local Insight, Global Thinking",
      desc: "Strategy that accounts for how Malaysians search in English, Malay and Chinese, aligned with global search trends.",
      icon: <Globe className="w-8 h-8 text-[#FF4D3D]" />,
    },
    {
      title: "Results-Driven Approach",
      desc: "Every strategy is built on keyword research, user intent and real data to improve traffic, leads and search performance.",
      icon: <BarChart3 className="w-8 h-8 text-[#FF4D3D]" />,
    },
    {
      title: "Transparent Reporting",
      desc: "Clear reports with real keyword rankings, delivered on a predictable schedule, so you always know what is working and what isn't.",
      icon: <FileText className="w-8 h-8 text-[#FF4D3D]" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#F5F7FB]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* LEFT COLUMN: Header and Image */}
        <div className="lg:w-2/5 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-10">
            Why Businesses Choose Daiki Media
          </h2>

          {/* Decorative Image Card */}
          <div className="w-full h-auto group">
            <div className="overflow-hidden rounded-[40px] border-[12px] border-white shadow-xl">
              <Image
                src="/images/seoService/why-partner-seo-agency.webp"
                alt="Why Partner With Us"
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Feature Grid */}
        <div className="lg:w-3/5 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[30px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-2">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A]">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSeo;