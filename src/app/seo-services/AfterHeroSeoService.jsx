import Image from "next/image";
import Link from "next/link";
const featuredLogos = [
  {
    name: "Yahoo Finance",
    src: "/images/seoService/Yahoo_Finance_logo_2021.webp",
    link: "https://finance.yahoo.com/news/seo-agency-malaysia-recognized-driving-190600165.html",
    width: 160,
    invert: true,
  },
  {
    name: "Business Insider",
    src: "/images/seoService/Business_Insider-logo.webp",
    link: "https://markets.businessinsider.com/news/stocks/seo-agency-launches-ai-powered-seo-solutions-to-drive-digital-growth-in-malaysia-1035218484",
    width: 180,
    invert: true,
  },
  {
    name: "AP",
    src: "/images/seoService/AP-Logo-1536x1142.png",
    link: "https://apnews.com/press-release/getnews/malaysian-businesses-turn-to-seo-agency-malaysia-for-proven-high-impact-seo-results-c958da794b6a5bda821a8b1ff2430d0a",
    width: 90,
    invert: true,
  },
  {
    name: "The Globe and Mail",
    src: "/images/seoService/images.png",
    link: "https://www.theglobeandmail.com/investing/markets/markets-news/GetNews/34966400/seo-agency-malaysia-launches-ai-driven-aeo-services-to-boost-malaysian-businesses/",
    width: 220,
    invert: false,
  },
  {
    name: "Barchart",
    src: "/images/seoService/bc-logo.webp",
    link: "https://www.barchart.com/story/news/34966393/the-rising-star-of-seo-in-malaysia-seo-agency-malaysia-taking-the-spotlight",
    width: 160,
    invert: true,
  },
];

export default function AfterHeroSeoService() {
  return (
    <>
    <section className="bg-gradient-to-r from-[#5b6ed6] to-[#4b5bbf] py-10">
      
      <div className="container mx-auto px-4 text-center">
        
        <h4 className="mb-8 text-lg font-semibold text-white">
          Featured On :
        </h4>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {featuredLogos.map((logo, index) => (
            <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="group flex items-center justify-center opacity-90 transition hover:opacity-100"
            >
                <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={80}
                className={`h-auto object-contain transition duration-300 ${
                    logo.invert
                        ? "brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                        : "invert brightness-50 group-hover:invert-0 group-hover:brightness-100"

                }`}
                />

            </a>
          ))}
        </div>

      </div>
    </section>

    <section className="bg-gray-100 py-[100px] lg:py-[150px] px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            
            {/* LEFT IMAGE */}
            <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[3px_5px_5px_3px_rgba(0,0,0,0.15)]">
                <Image
                src="/images/seoService/seo-team.png"
                alt="Daikimedia SEO Malaysia"
                  width={800}
                  height={800}
                className="w-full h-full object-cover border-[10px] border-white rounded-2xl"
                />
            </div>

            {/* Top badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-sm font-semibold shadow">
                <span className="text-orange-500">SEO</span>Agency x{" "}
                <span className="font-bold">Rankpage</span>
            </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
            {/* SMALL RED H3 */}
            <h3 className="text-sm font-bold text-red-500 uppercase tracking-wide mb-3">
                About Daikimedia
            </h3>

            {/* MAIN HEADING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                SEO Company in Malaysia Aligned with How Search Works Today
            </h2>

            {/* BLUE LINE */}
            <p className="text-lg text-blue-600 font-medium mb-6">
                With Daikimedia, your SEO strategy is built to improve Google rankings,
                organic visibility, and search performance across Malaysia.
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-700 mb-5 leading-relaxed">
                Daikimedia is an SEO agency in Malaysia built by a team of search
                specialists, SEO strategists, and content experts who understand how
                visibility is earned today. Based on years of hands-on experience,
                we’ve adapted our approach as search has evolved beyond traditional
                rankings.
            </p>

            <p className="text-gray-700 mb-5 leading-relaxed">
                We now focus on helping businesses appear across Google, AI-driven
                search, and answer-based platforms where real decisions are made.
                Our work blends <span className="font-semibold">SEO</span>,{" "}
                <span className="font-semibold">AEO</span>, and{" "}
                <span className="font-semibold">GEO</span> into a structured strategy
                that improves how your brand is found, understood, and trusted.
            </p>

            {/* SERVICES LIST */}
            <div className="space-y-3 mb-8">
                <p className="font-semibold text-gray-900">
                SEO Services Malaysia We Handle End to End
                </p>

                <ul className="space-y-2 text-gray-700">
                <li>• From fixing technical SEO issues to building content that supports rankings</li>
                <li>• From ranking on Google to getting cited in ChatGPT, Gemini, and AI overviews</li>
                <li>• From increasing domain authority to reducing spam signals and stabilising traffic</li>
                </ul>
            </div>

              <Link href="/about/">About Us</Link>
            </div>
        </div>
    </section>
    </>
  );
}
