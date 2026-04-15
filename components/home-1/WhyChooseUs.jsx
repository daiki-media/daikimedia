"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  const benefits = [
    {
      title: "We focus on clarity",
      description: "We help you understand what is working, what is not, and what needs to happen next."
    },
    {
      title: "We connect strategy with execution",
      description: "Good ideas only matter when they turn into meaningful action. We do both."
    },
    {
      title: "We look at the full picture",
      description: "We do not treat SEO, content, paid campaigns, and website performance like separate silos."
    },
    {
      title: "We build for long-term growth",
      description: "We are not chasing short-lived spikes. We help brands create a stronger digital foundation."
    },
    {
      title: "We care about commercial outcomes",
      description: "Traffic and visibility matter, but they matter more when they support leads, sales, and business growth."
    }
  ];

  return (
    <section className="relative bg-gray-50 py-12 md:py-16 dark:bg-dark-200">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}
          className="max-w-5xl mx-auto"
        >
          {/* Subtitle */}
          <p className="text-center text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wide text-sm mb-2">
            Why DaikiMedia
          </p>
          
          {/* Main Title */}
          <h2 className="mb-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Businesses Choose to Work With Us
          </h2>
          
          {/* Introductory Text */}
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base">
            There are plenty of agencies offering digital services.
            What makes DaikiMedia different is the way we think, the way we communicate, 
            and the way we connect digital work to real business direction.
          </p>

          {/* Benefits Grid - Mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:bg-dark-300"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-5 h-5 mt-1 text-primary-600 dark:text-primary-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-8 text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;