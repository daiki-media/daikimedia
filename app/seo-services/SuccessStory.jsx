"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const successStories = [
  {
    id: 1,
    name: "Nexus Clinic",
    industry: "Aesthetic & Skin Clinic Industry",
    location: "Kuala Lumpur",
    problem: "Nexus Clinic, a growing aesthetic clinic in Kuala Lumpur, aimed to improve its presence for treatments like skin rejuvenation, acne solutions, and anti-aging procedures. Despite offering advanced treatments, their online visibility was limited, and they struggled to rank against established aesthetic clinics in Malaysia.",
    solution: "By working with Daikimedia SEO Agency Malaysia, Nexus Clinic implemented a content-driven SEO strategy supported by AI Optimization (AIO) for platforms like ChatGPT and Google AI. We also strengthened Local SEO to improve visibility across Kuala Lumpur and nearby high-intent search areas.",
    stats: [
      { value: "4.6x", label: "Organic Traffic Growth", color: "bg-[#FF4D3D]" },
      { value: "35+", label: "Keywords Ranked on Page 1", color: "bg-[#002B5B]" },
      { value: "168%", label: "Increase in Patient Enquiries", color: "bg-[#3F51B5]" }
    ],
    logoColor: "bg-[#FFF]",
    logoText: "NEXUS",
    logoSubtext: "Aesthetic & Skin Clinic",
    logo: "/images/seoService/nexus-logo.webp"
  },
  {
    id: 2,
    name: "Doctor On Call",
    industry: "Online Pharmacy & Healthcare Industry",
    location: "Malaysia",
    problem: "Doctor On Call is a growing online pharmacy and telehealth platform in Malaysia, offering consultations, medicines, and healthcare services. Despite strong demand, their online visibility was limited, and they struggled to rank for competitive pharmacy and healthcare search queries.",
    solution: "By working with Daikimedia SEO Agency Malaysia, Doctor On Call implemented a content-driven SEO strategy supported by AIO (AI Optimization) to align with modern search behaviour. We also strengthened Local SEO strategies to improve reach across Malaysia and helped them appear in both Google search and AI-driven platforms like ChatGPT and Google AI.",
    stats: [
      { value: "4.3x", label: "Organic Traffic Growth", color: "bg-[#FF4D3D]" },
      { value: "45+", label: "Keywords Ranked on Page 1", color: "bg-[#002B5B]" },
      { value: "172%", label: "Increase in Online Orders", color: "bg-[#3F51B5]" }
    ],
    logoColor: "bg-[#00A884]",
    logoText: "DOC",
    logoSubtext: "Online Pharmacy & Telehealth",
    logo: "/images/seoService/doctor-on-call-logo.webp"
  }
];

const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };

  const currentStory = successStories[currentIndex];

  return (
    <section className="relative w-full bg-[#FCF9F1] py-20 px-4 overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/seoService/shape-deco1.webp')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto mb-12 relative z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
            SEO Success Stories Across Malaysia
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative group z-10">
        
        {/* MAIN SUCCESS CARD */}
        <div className="bg-[#F5F7FB] rounded-[30px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 relative transition-all duration-500 ease-in-out">
          
          {/* Left Content Area */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="text-[#4B5563] text-[15px] leading-relaxed mb-8">
              <p className="mb-4">
                <strong>{currentStory.name}</strong>, {currentStory.problem}
              </p>
              <p>
                {currentStory.solution}
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {currentStory.stats.map((stat, idx) => (
                <div key={idx} className={`${stat.color} text-white p-6 rounded-2xl text-center flex flex-col justify-center transition-transform hover:scale-105 duration-300`}>
                  <span className="text-4xl font-bold">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider mt-1 opacity-90">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Footer Branding */}
            <div>
              <p className="text-[#FF4D3D] text-sm font-semibold mb-1">
                {currentStory.industry}
              </p>
              <h3 className="text-2xl font-bold text-[#1A1A1A]">{currentStory.name}</h3>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-1/3 flex items-center justify-center">
            <div className={`w-full aspect-square ${currentStory.logoColor} rounded-[30px] flex items-center justify-center p-12 shadow-lg transition-all duration-300 hover:scale-105`}>
              <Image
                src={currentStory.logo}
                alt={currentStory.name}
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 p-2 text-gray-800 hover:text-[#FF4D3D] transition-all duration-300 hover:scale-110 bg-white rounded-full shadow-md z-20"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 p-2 text-gray-800 hover:text-[#FF4D3D] transition-all duration-300 hover:scale-110 bg-white rounded-full shadow-md z-20"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-10 relative z-10">
        {successStories.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex 
                ? "w-3 h-3 bg-[#1A1A1A]" 
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SuccessStory;