"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSeoService() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1ea] pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div
        className="absolute top-0 right-0 h-full w-full z-0"
        style={{
          backgroundImage: "url('/images/seoService/hero-img.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top right",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="max-w-xl text-center lg:text-left">
            
            <h1 className="mb-6 leading-snug text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl mt-20">
              SEO Services Malaysia for Google and AI Search
            </h1>

            <p className="mb-4 text-base text-gray-600 sm:text-lg">
              Daiki Media provides SEO services to Malaysian businesses that want to rank higher on Google, grow organic traffic, and get found in AI-driven search including ChatGPT, Gemini and Google AI Overviews. We combine established SEO practice with Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), built around one principle: measurable deliverables, not vague promises.
            </p>

            <p className="mb-8 text-base text-gray-600 sm:text-lg">
              This page sets out exactly what you get when you work with us: the deliverables, the process month by month, one verified case study with real numbers, how our pricing works, and how to get started.
            </p>
            
            <Link
              href="https://api.whatsapp.com/send?phone=601114850067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-gray-400 px-6 py-3 text-sm font-medium text-gray-800 transition-all hover:bg-gray-900 hover:text-white sm:px-8 sm:py-3.5 sm:text-base"
            >
              Get My Free SEO Audit
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
              <Image
                src="/images/seoService/hero-img.png"
                alt="SEO Expert"
                width={600}
                height={500}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
