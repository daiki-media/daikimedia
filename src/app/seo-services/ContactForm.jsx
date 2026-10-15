import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

const ContactForm = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center py-20 px-6 overflow-hidden">

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/seoService/trusted-malaysia-brand.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-[#0A192F]/90 to-[#0A192F]/70" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            Find Out Where You Rank <br />
            on Google and AI Engines
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Get a free SEO and AI audit report that includes:
          </p>

          <ul className="space-y-4">
            {[
              "Google search rankings for your current target keywords",
              "AI visibility score (ChatGPT, Perplexity and more)",
              "Technical SEO health check",
              "Answer Engine (AEO) readiness assessment"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white font-medium">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-300 mt-8 max-w-md">
            This is a real, personalised report based on your website not a generic template.
          </p>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-[30px] p-10 w-full max-w-[500px] shadow-2xl transform transition-all duration-300 hover:scale-105">
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#F0F0F0] border-none rounded-full px-6 py-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#003366] outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="url"
                  placeholder="Your Website URL"
                  className="w-full bg-[#F0F0F0] border-none rounded-full px-6 py-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#003366] outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#F0F0F0] border-none rounded-full px-6 py-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-[#003366] outline-none transition-all"
                />
              </div>

              <div className="pt-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#003366] text-white font-bold py-4 px-10 rounded-full hover:bg-[#002244] transition-all duration-300 shadow-lg text-lg hover:scale-105 hover:shadow-xl"
                >
                  Run Free Audit
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Subtle Star Element */}
      <div className="absolute bottom-10 right-10 opacity-30 z-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default ContactForm;