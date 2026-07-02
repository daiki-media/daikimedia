"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  ShoppingBag,
  Mail,
  ChevronRight,
  Check,
} from "lucide-react";

const services = [
  {
    title: "Social Media Marketing",
    icon: Instagram,
    description:
      "Social media is a powerful tool to connect with your audience. Daiki Media crafts strategies tailored to your brand's voice across platforms like Instagram, LinkedIn, Facebook, and TikTok to boost engagement, build loyalty, and drive leads.",
    benefits: [
      "Platform-specific strategies to maximize reach and engagement",
      "Data-driven campaigns that deliver measurable results",
      "Influencer partnerships for greater brand visibility",
    ],
  },
  {
    title: "E-Commerce Solutions",
    icon: ShoppingBag,
    description:
      "Daiki Media’s e-commerce solutions enhance user experience, functionality, and sales. From responsive designs to SEO optimization, we create an exceptional shopping experience on platforms like Shopify, WooCommerce, and Magento.",
    benefits: [
      "Conversion-optimized product page designs",
      "Responsive websites for easy navigation",
      "SEO for improved search visibility and buyer attraction",
    ],
  },
  {
    title: "Email Marketing",
    icon: Mail,
    description:
      "Email marketing is key for relationship building. Daiki Media designs personalized email campaigns that engage, nurture, and convert leads with tailored sequences, analytics, and insights to refine your strategy.",
    benefits: [
      "Custom-tailored email sequences to increase conversions",
      "Engaging content that builds loyalty",
      "Detailed analytics for ongoing strategy improvement",
    ],
  },
];

export default function ComprehensiveServicesShowcase() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="py-16 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center pb-8  text-4xl font-bold text-gray-800">
          Enhance Your Brand with Daiki Media
        </h2>
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`btn rounded-full font-semibold transition-colors
        px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base
        ${activeService === index
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-100 hover:bg-gray-300"
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div className="space-y-6  ">
            <div className="flex items-center pt-[40px] space-x-4">
              <h3 className="text-3xl font-bold">
                {services[activeService].title}
              </h3>
            </div>
            <p className="text-lg  text-gray-600">
              {services[activeService].description}
            </p>
            <div>
              <h4 className="mb-2 pb-15 pt-[80px] text-xl font-semibold">
                {activeService === 0
                  ? "Why Choose Daiki Media for Social Media Marketing?"
                  : activeService === 1
                    ? "E-commerce Services Tailored to Your Goals"
                    : "Benefits of Daiki Media's Email Marketing Services"}
              </h4>
              <ul className="space-y-2">
                {services[activeService].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start dark:text-white">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6 pb-15 pt-[100px]">
            <div className="bg-white rounded-3xl  p-6">
              <h4 className="mb-4 text-xl dark:text-black font-semibold text-gray-800">
                Our Expertise
              </h4>
              <div className="flex flex-wrap gap-4">
                {activeService === 0 ? (
                  <>
                    <div className="flex items-center rounded-full bg-white text-black px-4 py-2 text-sm">
                      <Instagram className="mr-2 h-5 w-5 text-gray-700" />{" "}
                      Instagram
                    </div>
                    <div className="flex items-center rounded-full bg-white text-black px-4 py-2 text-sm">
                      <Linkedin className="mr-2 h-5 w-5 text-gray-700" />{" "}
                      LinkedIn
                    </div>
                    <div className="flex items-center rounded-full bg-white px-4 py-2 text-sm">
                      <Facebook className="mr-2 h-5 w-5 text-gray-700" />{" "}
                      Facebook
                    </div>
                    <div className="flex items-center rounded-full bg-white px-4 py-2 text-sm">
                      <Twitter className="mr-2 h-5 w-5 text-gray-700" /> TikTok
                    </div>
                  </>
                ) : activeService === 1 ? (
                  <>
                    <div className="rounded-full bg-white px-4 py-2 text-sm">
                      Shopify
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-sm">
                      WooCommerce
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-sm">
                      Magento
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-full bg-white px-4 py-2 text-sm">
                      Welcome Series
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-sm">
                      Re-engagement Campaigns
                    </div>
                    <div className="rounded-full bg-white px-4 py-2 text-sm">
                      Product Launches
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="rounded-3xl bg-pink-50 p-6">
              <h4 className="mb-4 text-xl dark:text-black font-semibold">
                Ready to Elevate Your Brand?
              </h4>
              <p className="mb- dark:text-black">
                Let Daiki Media craft a tailored strategy to boost your{" "}
                {services[activeService].title.toLowerCase()} performance.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=601114850067"
                className="btn flex items-center rounded-full w-fit bg-white px-6  dark:text-black py-3 transition-colors hover:bg-black hover:text-white mt-4"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
