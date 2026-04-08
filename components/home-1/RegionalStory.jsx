"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const RegionalStory = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  const ctaButtons = [
    {
      id: 1,
      text: "Explore Malaysia services",
      link: "/",
    },
    {
      id: 2,
      text: "Explore Singapore services",
      link: "/singapore-marketing-agency",
    },
    {
      id: 3,
      text: "Explore Dubai services",
      link: "/dubai-marketing-agency",
    },
  ];

  return (
    <section className="relative bg-white py-16 dark:bg-dark-300">
      <div className="container">
        <motion.div
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}
          className="max-w-4xl mx-auto"
        >
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            SEO Ranking Factors and Search Intent Mapping Framework
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Most agencies optimize for keywords. We optimize for intent. Understanding why people search is as important as understanding what they search for. Search behavior has evolved dramatically, and major search engines like Google now prioritize pages that satisfy user intent, not just pages that repeat a keyword.
            Our SEO strategy begins with mapping every target keyword to its search intent: informational, navigational, commercial, or transactional. This determines the content format, depth, internal linking structure, and CTA placement for every page we optimize.
          </p>
          <div className="mb-8 space-y-4 text-gray-700 dark:text-gray-300">
            <h2>SEO ranking factors we optimize across every campaign:</h2>
            <p>Today we bring that same belief to Singapore and Dubai.</p>
              <ul className="space-y-4 mb-12">
                {[
                  "Keyword relevance and semantic depth of content",
                  "Page speed and Core Web Vitals scores (technical SEO)",
                  "Mobile usability and improve user experience signals",
                  "Backlink authority and anchor text diversity (off-page SEO)",
                  "Structured data and schema markup to help search engines understand content",
                  "Meta description quality and click-through optimization",
                  "Internal linking architecture to distribute ranking equity",
                  "Content freshness, search queries coverage, and topical authority"
                ].map((item, index) => (
                  <li key={index} className="flex flex-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-paragraph dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

            <p>
              We use tools such as SEMrush, tools such as Google Search Console, and Bing Webmaster Tools to audit existing pages, identify SEO issues, and track ranking movement across all target search terms. Our SEO software stack gives us a complete picture of where your website stands and what needs to change.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 max-sm:flex-col">
            {ctaButtons.map((button) => (
              <Link
                key={button.id}
                href={button.link}
                className="btn"
              >
                {button.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalStory;

