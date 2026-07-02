import {
  Check,
  Target,
} from "lucide-react";
import Link from "next/link";

// const services = [
//   {
//     title: "Social Media Marketing",
//     icon: Instagram,
//     description:
//       "Social media is a powerful tool to connect with your audience. Daiki Media crafts strategies tailored to your brand's voice across platforms like Instagram, LinkedIn, Facebook, and TikTok to boost engagement, build loyalty, and drive leads.",
//     benefits: [
//       "Platform-specific strategies to maximize reach and engagement",
//       "Data-driven campaigns that deliver measurable results",
//       "Influencer partnerships for greater brand visibility",
//     ],
//   },
//   {
//     title: "E-Commerce Solutions",
//     icon: ShoppingBag,
//     description:
//       "Daiki Media's e-commerce solutions enhance user experience, functionality, and sales. From responsive designs to SEO optimization, we create an exceptional shopping experience on platforms like Shopify, WooCommerce, and Magento.",
//     benefits: [
//       "Conversion-optimized product page designs",
//       "Responsive websites for easy navigation",
//       "SEO for improved search visibility and buyer attraction",
//     ],
//   },
//   {
//     title: "Email Marketing",
//     icon: Mail,
//     description:
//       "Email marketing is key for relationship building. Daiki Media designs personalized email campaigns that engage, nurture, and convert leads with tailored sequences, analytics, and insights to refine your strategy.",
//     benefits: [
//       "Custom-tailored email sequences to increase conversions",
//       "Engaging content that builds loyalty",
//       "Detailed analytics for ongoing strategy improvement",
//     ],
//   },
// ];

export default function ComprehensiveServicesShowcase() {

  const marketPerspectives = [
    "Some brands are focused on local visibility",
    "Some are expanding across multiple locations",
    "Some need a stronger position in more competitive markets",
  ];

  const growthFactors = [
    "The right people can find you",
    "Your message is clear when they arrive",
    "Your website builds trust",
    "Your content supports decision-making",
    "Your campaigns align with your goals",
    "Your brand feels consistent across touchpoints",
  ];

  return (
    <>
      {/* Market Perspective Section */}
      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-dark-200">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
              Our Market Perspective
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Digital Growth With a{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Better Understanding
              </span>{" "}
              of Different Markets
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              Not every business is competing in the same environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {marketPerspectives.map((perspective, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-dark-300 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {perspective}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              That is why we do not rely on generic digital plans.
              We shape the work around your business goals, your audience, and the market context you are operating in. 
              This helps us build digital strategies that feel more relevant, more practical, and more effective.
            </p>
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-5 border-l-4 border-primary-600 dark:border-primary-400 mt-6">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Whether you are building locally or growing across regions, we help you create a presence that feels stronger and more intentional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative overflow-hidden bg-white py-20 dark:bg-dark-300">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
              Why This Matters
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Because Random Marketing Activity{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Is Not the Same as Real Growth
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              A lot of businesses are already doing "something" online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✗</span>
                </div>
                <span className="text-gray-600 dark:text-gray-400">They post content</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✗</span>
                </div>
                <span className="text-gray-600 dark:text-gray-400">They run campaigns</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✗</span>
                </div>
                <span className="text-gray-600 dark:text-gray-400">They update pages</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✗</span>
                </div>
                <span className="text-gray-600 dark:text-gray-400">They invest in digital</span>
              </div>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
                But without strong direction, all that activity can still lead to weak outcomes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Real growth happens when the important parts of your digital presence work together:
              </p>
              <ul className="space-y-2">
                {growthFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{factor}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-primary-200 dark:border-primary-800">
                <p className="text-gray-800 dark:text-gray-200 font-bold">
                  That is what DaikiMedia helps businesses build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-dark-200">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Let's Build a{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Stronger Digital Presence
              </span>{" "}
              for Your Brand
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              If your digital marketing feels scattered, underperforming, or harder to scale than it should be, 
              we can help you create a clearer direction.
            </p>
            <div className="dark:bg-dark-300 rounded-xl p-6 mb-8">
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                At DaikiMedia, we focus on digital growth that feels connected, commercially aware, and built to last.
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p> No unnecessary complexity</p>
                <p> No inflated promises</p>
                <p> Just stronger thinking, better execution, and a more focused path forward</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://api.whatsapp.com/send?phone=601114850067"
                className="btn"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/contact"
                className="btn"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}