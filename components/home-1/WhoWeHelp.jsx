import Link from "next/link";
import ScrollFadeIn from "@/components/animations/ScrollFadeIn";

const whatWeDoSections = [
  {
    id: 1,
    heading: "SEO",
    text: "We help your brand get found where people are already searching. From technical improvements to content direction, our SEO work is built to support long-term visibility and sustainable traffic growth.",
  },
  {
    id: 2,
    heading: "Content Strategy",
    text: "We create content with purpose. That means clearer messaging, stronger page structure, and content that helps users move from interest to action.",
  },
  {
    id: 3,
    heading: "Performance Marketing",
    text: "Paid campaigns work better when the strategy behind them is aligned. We help businesses run digital campaigns that are backed by stronger landing pages, better targeting, and clearer goals.",
  },
  {
    id: 4,
    heading: "Website Strategy",
    text: "Your website should do more than exist online. It should support trust, clarity, and conversions. We help improve the digital experience so the rest of your marketing performs better too.",
  },
  {
    id: 5,
    heading: "Creative Direction",
    text: "Strong brands feel consistent. We help shape the way your business looks and communicates across digital touchpoints, so the overall experience feels more professional and more convincing.",
  },
  {
    id: 6,
    heading: "Growth Strategy",
    text: "Sometimes the problem is not one channel. It is the lack of a bigger digital direction. We help brands connect the dots and focus on what matters most.",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="relative bg-white py-16 dark:bg-dark-300 sm:overflow-hidden">
      <div className="container">
        <div className="mb-12">
          <div className="flex flex-col max-lg:text-center lg:flex gap-4 max-w-5xl mx-auto">
            {/* What We Do - Subtitle */}
            <p className="text-center text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wide">
              What We Do
            </p>
            {/* Main Title */}
            <h2 className="text-center">
              The Core Areas We Bring Together
            </h2>
            {/* Description */}
            <p className="text-center text-gray-600 dark:text-gray-400">
              DaikiMedia combines the essential parts of digital growth under one roof, so your business is not dealing with disconnected strategies or mixed direction.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <ScrollFadeIn className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {whatWeDoSections.map((section) => (
              <div
                key={section.id}
                className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
              >
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-4 text-xl font-semibold">
                    {section.heading}
                  </h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {section.text}
                  </p>
                </div>
              </div>
            ))}
          </ScrollFadeIn>
        </div>
        {/* CTA Button */}
        <div className="mt-15 flex items-center justify-center">
          <Link
            href="#"
            className="dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white btn"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
