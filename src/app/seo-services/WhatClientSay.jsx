"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Star } from "lucide-react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Lim Wei Han",
    title: "Marketing Manager (E-commerce Business)",
    text: "Our website traffic has grown steadily since engaging Daiki Media. Their AI-driven SEO strategy helped us appear not only on Google but also in AI search results. A great partner for sustainable growth.",
  },
  {
    name: "Farah Azman",
    title: "Director (SME Services)",
    text: "The team is very transparent and responsive. They provided clear reporting and explained exactly how SEO and AIO would help our business. We've seen a noticeable increase in inquiries within just a few months.",
  },
  {
    name: "Tan Kok Leong",
    title: "Founder (Consulting Firm)",
    text: "We were struggling to rank against larger competitors. Daiki Media helped us build authority through strategic content and link building. Now we rank on Page 1 for several important keywords.",
  },
  {
    name: "Siti Mariam",
    title: "Operations Manager (Finance & Legal)",
    text: "What I appreciate most is their results-driven approach. They don't just talk about rankings—they focus on real business outcomes. Our leads from organic search have doubled since the campaign started.",
  },
  {
    name: "Arjun Nair",
    title: "Owner (Retail Business)",
    text: "Their knowledge of Local SEO in Malaysia is impressive. Our Google Business Profile is now optimised, and we're receiving more calls and walk-ins from nearby customers than ever before.",
  },
  {
    name: "Chong Mei Ling",
    title: "Digital Marketing Lead (Education Sector)",
    text: "Daiki Media is ahead of the curve when it comes to AI optimisation. Thanks to their expertise, our brand is now visible on platforms like ChatGPT and Gemini, which gives us a real edge.",
  },
];

export default function WhatClientSay() {
  return (
    <section className="relative w-full bg-[#FCF9F1] py-24 px-4 overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/seoService/shape-deco.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Styled Slash Marks */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#111] inline-flex items-center gap-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-[35px] p-10 h-full flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  {/* Gold Stars */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-[#333] text-[15px] leading-[1.8] mb-10 flex-grow">
                    {item.text}
                  </p>

                  {/* Author Branding */}
                  <div className="mt-auto">
                    <h4 className="font-extrabold text-[#111] text-lg">{item.name}</h4>
                    <p className="text-[#003366] text-sm font-semibold mt-1">
                      {item.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-gray-800 z-20 hover:scale-110 transition-transform bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-gray-800 z-20 hover:scale-110 transition-transform bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>

          {/* Pagination Dots */}
          <div className="custom-pagination flex justify-center gap-3 mt-8"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #D1D5DB;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #111827;
          width: 12px;
          height: 12px;
        }
        
        /* Hide default Swiper navigation */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      `}</style>
    </section>
  );
}