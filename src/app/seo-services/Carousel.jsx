"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "SEO Services Malaysia",
    desc: "Core search strategies that build and protect rankings.",
    icon: "/images/seoService/search-engine-optimization.png",
  },
  {
    title: "AI Optimization (AIO)",
    desc: "Structuring content to be eligible for Google AI Overviews and answer sections.",
    icon: "/images/seoService/artificial-intelligence.webp",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    desc: "Formatting and citing content so it can be referenced in AI-generated results.",
    href: "/generative-engine-optimization",
    icon: "/images/seoService/seo-location.png",
  },
  {
    title: "Answer Engine Optimization (AEO)",
    desc: "Targeting featured snippets, voice search and direct answers.",
    icon: "/images/seoService/web-apps.png",
  },
  {
    title: "Local SEO Malaysia",
    desc: "Ranking in local searches and on Google Business Profile.",
    href: "/local-seo-services",
    icon: "/images/seoService/seo-location.png",
  },
  {
    title: "Link Building Services",
    desc: "Backlinks from relevant, vetted sources to build domain authority.",
    icon: "/images/seoService/link.png",
  },
  {
    title: "SEO Website Development",
    desc: "SEO-optimised websites with fast loading and smooth UX.",
    icon: "/images/seoService/web-apps.png",
  },
];

export default function Carousel() {
  return (
    <section 
      className="relative w-full bg-white py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/images/seoService/aesthetic-abstract-shapes.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
          AI-Integrated SEO Strategies for Google and AI Search
        </h2>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
          Our SEO strategies are shaped for Malaysia's competitive market and for AI-driven search results, built for steady organic growth that holds up through algorithm updates.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-32 h-32 mb-6 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-50 group-hover:shadow-lg transition-shadow duration-300">
                  <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
                </div>

                <h3 className="text-[20px] font-bold text-[#003366] mb-3">
                  {item.href ? (
                    <Link href={item.href} className="hover:underline">{item.title}</Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-gray-500 text-sm leading-[1.6] max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-gray-800 z-10 hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </div>
        <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-2xl text-gray-800 z-10 hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>

        <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
      </div>

      {/* Global Style Overrides for Swiper Dots */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #111827;
          width: 10px;
          height: 10px;
        }
      `}</style>
    </section>
  );
}