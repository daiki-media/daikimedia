import ScrollFadeIn from "@/components/animations/ScrollFadeIn";
import MarketsWeServeCarousel from "./MarketsWeServeCarousel";

const markets = [
  {
    id: 1,
    heading: "Build stronger online visibility",
    text: "Increase your brand's presence across search engines and social platforms to reach more potential customers.",
  },
  {
    id: 2,
    heading: "Attract more qualified traffic",
    text: "Drive visitors who are genuinely interested in your products or services, improving conversion potential.",
  },
  {
    id: 3,
    heading: "Improve website performance",
    text: "Enhance speed, user experience, and technical SEO to keep visitors engaged and reduce bounce rates.",
  },
  {
    id: 4,
    heading: "Strengthen brand messaging",
    text: "Develop clear, consistent communication that resonates with your target audience and builds trust.",
  },
  {
    id: 5,
    heading: "Generate better leads and enquiries",
    text: "Create optimized funnels that turn casual visitors into qualified leads and paying customers.",
  },
  {
    id: 6,
    heading: "Create a more consistent digital presence",
    text: "Maintain brand coherence across all channels for a professional and trustworthy online image.",
  },
  {
    id: 7,
    heading: "Support long-term business growth",
    text: "Implement sustainable marketing strategies that scale with your business and deliver lasting results.",
  },
];

const MarketsWeServe = () => {
  return (
    <section className="relative bg-gray-50 py-16 dark:bg-dark-200 sm:overflow-hidden">
      <div className="container">
        <div className="mb-12">
          <div className="flex flex-col max-lg:text-center lg:flex gap-4 max-w-4xl mx-auto">
            {/* What We Help You Achieve - Subtitle */}
            <p className="text-center text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wide">
              What We Help You Achieve
            </p>
            {/* Main Title */}
            <h2 className="text-center">
              Digital Growth That Feels More Structured and More Effective
            </h2>
            {/* Description lines */}
            <p className="text-center text-gray-600 dark:text-gray-400">
              We work with brands that want their digital marketing to do more than just look active.
            </p>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Our focus is on helping businesses:
            </p>
          </div>
        </div>

        {/* Desktop Grid View - Showing all 7 items */}
        <div className="relative z-10">
          <ScrollFadeIn className="hidden lg:grid lg:grid-cols-3 gap-8">
            {markets.map((market) => (
              <div
                key={market.id}
                className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
              >
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark">
                  <h3 className="mb-4 text-xl font-semibold">{market.heading}</h3>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    {market.text}
                  </p>
                </div>
              </div>
            ))}
          </ScrollFadeIn>

          {/* Mobile/Tablet Swiper View */}
          <MarketsWeServeCarousel markets={markets} />
        </div>

        {/* Closing Statement */}
        <ScrollFadeIn className="mt-16 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              We are not here to add more noise to your marketing.
            </p>
            <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold">
              We are here to make it work better.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default MarketsWeServe;
