import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Lite SEO",
    price: "2000",
    description: "For local SMEs starting to improve rankings and search presence",
    ribbonText: "LOCAL SMES",
    ribbonBg: "bg-[#3F51B5]",
    titleColor: "text-[#3F51B5]",
    buttonBg: "bg-[#3F51B5]",
    tickColor: "text-[#3F51B5]",
    features: [
      "Up to 15 target keywords",
      "Technical SEO audit and fixes",
      "On-page optimization (up to 8 pages)",
      "Local SEO and Google Business Profile setup",
      "Basic keyword strategy and tracking",
      "Foundational content recommendations",
      "Weekly performance reports",
    ],
  },
  {
    name: "Growth SEO",
    price: "5000",
    description: "For mid-sized businesses ready to compete and grow consistently",
    ribbonText: "MID-SIZED BUSINESSES",
    ribbonBg: "bg-[#FF4D3D]",
    titleColor: "text-[#FF4D3D]",
    buttonBg: "bg-[#FF4D3D]",
    tickColor: "text-[#FFB400]",
    features: [
      "Up to 35 target keywords",
      "Full on-page SEO and content optimization",
      "Technical SEO improvements and site structure",
      "Content briefs and SEO blog strategy (4 articles per month)",
      "Link building campaigns for authority growth",
      "Local SEO and conversion-focused improvements",
      "AI SEO integration (AEO + GEO), optimised for ChatGPT, Gemini and Google AI",
      "Weekly performance reports",
      "Dedicated account manager",
    ],
  },
  {
    name: "Advanced SEO",
    price: "7000",
    description: "For regional brands aiming for strong market positioning",
    ribbonText: "REGIONAL BRANDS",
    ribbonBg: "bg-[#3F51B5]",
    titleColor: "text-[#003366]",
    buttonBg: "bg-[#3F51B5]",
    tickColor: "text-[#3F51B5]",
    features: [
      "60+ target keywords",
      "Advanced technical SEO and site architecture optimization",
      "Full content strategy and ongoing blog production",
      "High-authority backlink acquisition",
      "Internal linking and topical authority building",
      "Advanced AEO and GEO implementation across multiple AI platforms",
      "Schema markup and structured data",
      "Conversion-focused SEO improvements",
      "Competitor and keyword gap analysis",
      "Weekly performance reports and strategy calls",
      "Dedicated SEO strategist",
    ],
  },
];

const PricingSeoService = () => {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-[#FDFBF4]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/seoService/deco3.webp')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-[#FDFBF4]/80 via-transparent to-[#FDFBF4]/80" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
          SEO Pricing Malaysia: How Our Plans Work
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Our pricing is structured around the scope, the number of keywords targeted, the volume
          of content produced, and the depth of technical and link-building work involved. Plans are
          month-to-month; there are no long-term lock-in contracts.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-white rounded-[30px] shadow-[0_10px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-full border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1"
          >
            {/* Corner Ribbon */}
            <div className={`absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none z-10`}>
              <div className={`absolute transform rotate-45 ${plan.ribbonBg} text-white text-[10px] font-bold py-1 px-10 right-[-35px] top-[20px] w-[170px] text-center shadow-sm`}>
                {plan.ribbonText}
              </div>
            </div>

            <div className="p-8 pt-12 flex-grow">
              <h3 className={`text-3xl font-bold mb-6 ${plan.titleColor}`}>
                {plan.name}
              </h3>

              <div className="flex items-baseline mb-4 text-[#1A1A1A]">
                <span className="text-2xl font-bold mr-1">RM</span>
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-gray-400 ml-2 text-lg">/ month</span>
              </div>

              <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium italic">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.tickColor}`} strokeWidth={3} />
                    <span className="text-[#1A1A1A] text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-0">
              <Link href="/contact" className={`block w-full py-4 rounded-full text-center text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg ${plan.buttonBg}`}>
                Choose Plan
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="relative z-10 mt-16 text-center">
        <p className="text-gray-700 text-lg">
          <strong>Need a custom scope?</strong> Running a large or multi-market site? See{" "}
          <Link href="/enterprise-seo-services" className="text-[#3F51B5] font-semibold hover:underline">
            Enterprise SEO Services
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-[#3F51B5] font-semibold hover:underline">
            talk to us about your requirements
          </Link>
        </p>
      </div>
    </section>
  );
};

export default PricingSeoService;