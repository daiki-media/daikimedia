import Image from 'next/image';
import Link from 'next/link';

const results = [
  { metric: "Organic traffic", outcome: "4.6x growth", color: "bg-[#FF4D3D]" },
  { metric: "Page 1 keyword rankings", outcome: "35+ keywords", color: "bg-[#002B5B]" },
  { metric: "Patient enquiries", outcome: "168% increase", color: "bg-[#3F51B5]" },
];

const SuccessStory = () => {
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
        <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
          Case Study: Nexus Clinic - Aesthetic & Skin Clinic, Kuala Lumpur
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* MAIN SUCCESS CARD */}
        <div className="bg-[#F5F7FB] rounded-[30px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12">

          {/* Left Content Area */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="text-[#4B5563] text-[15px] leading-relaxed mb-8">
              <p className="mb-4">
                <strong>The challenge:</strong> Nexus Clinic offered advanced treatments such as skin rejuvenation, acne solutions and anti-aging procedures, but had limited online visibility and struggled to rank against established aesthetic clinics in Malaysia.
              </p>
              <p>
                <strong>Our solution:</strong> Daiki Media built a content-driven SEO strategy supported by AI Optimization (AIO) for platforms like ChatGPT and Google AI. We also strengthened Local SEO to improve visibility across Kuala Lumpur and nearby high-intent areas.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
              <Link href="/our-seo-results" className="hover:text-[#FF4D3D] hover:underline">
                Our SEO Results:
              </Link>
            </h3>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {results.map((stat) => (
                <div key={stat.metric} className={`${stat.color} text-white p-6 rounded-2xl text-center flex flex-col justify-center transition-transform hover:scale-105 duration-300`}>
                  <span className="text-xs uppercase tracking-wider mb-1 opacity-90">{stat.metric}</span>
                  <span className="text-3xl font-bold">{stat.outcome}</span>
                </div>
              ))}
            </div>

            <p className="text-[#4B5563] text-[15px] leading-relaxed">
              This is one documented result from our client work. We&apos;re building out a fuller library of verified case studies across other industries, view{" "}
              <Link href="/case-studies" className="text-[#3F51B5] font-semibold hover:underline">
                current case studies here
              </Link>
              , and ask us directly for examples closer to your industry during your audit call.
            </p>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-1/3 flex items-center justify-center">
            <div className="w-full aspect-square bg-[#FFF] rounded-[30px] flex items-center justify-center p-12 shadow-lg transition-all duration-300 hover:scale-105">
              <Image
                src="/images/seoService/nexus-logo.webp"
                alt="Nexus Clinic"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
