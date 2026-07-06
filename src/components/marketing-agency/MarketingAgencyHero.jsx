"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeFromLeftAnimation } from "@/data/animation";
import Image from "next/image";
import FadeUpAnimation from "../animations/FadeUpAnimation";

// Default images (fallback)
import defaultHeroImage from "@/public/images/hero/testimg.avif";
import defaultHeroImageMobile from "@/public/images/hero/testimg-mobile.avif";

// Hook for mobile detection
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < breakpoint);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isMobile;
};

const MarketingAgencyHero = ({ subtitle, title, paragraph, ctaText, ctaDescription, heroImage, heroImageMobile }) => {
  const isMobile = useIsMobile();
  // Use provided images or fallback to defaults
  const selectedImage = isMobile 
    ? (heroImageMobile || defaultHeroImageMobile)
    : (heroImage || defaultHeroImage);
  const imageWidth = isMobile ? 375 : 600;
  const imageHeight = isMobile ? 500 : 800;

  return (
    <section className="hero relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50/30 pb-20 pt-32 dark:from-dark-300 dark:via-dark-300 dark:to-dark-300/90 max-lg:pb-12 max-lg:pt-150">
      {/* Background Gradient Effects */}
      <div className="absolute left-1/2 top-0 h-[400px] w-full max-w-[900px] -translate-x-1/2 rounded-full bg-pink-50/40 blur-[145px] max-lg:hidden"></div>
      <div className="absolute -top-10 right-0 h-[300px] w-[300px] rounded-full bg-pink-50/30 blur-[100px] max-md:hidden"></div>
      <div className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-pink-50/35 blur-[80px] max-md:hidden"></div>
      
      {/* Mobile gradient background - pink overlay */}
      <div className="absolute -bottom-150 left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-pink-50/20 bg-contain bg-center bg-no-repeat p-[350px] md:hidden"></div>

      <div className="container relative z-10">
        <FadeUpAnimation className="grid grid-cols-12 items-center gap-8 max-lg:gap-y-10">
          {/* Text Content */}
          <div className="col-span-12 lg:col-span-6">
            {subtitle && (
              <motion.p
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary dark:text-primary"
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h1
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 text-4xl font-bold leading-tight text-heading dark:text-white max-lg:text-3xl max-md:text-2xl"
                dangerouslySetInnerHTML={{ __html: title }}
              ></motion.h1>
            )}
            {paragraph && (
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 space-y-4"
              >
                {paragraph.split('\n\n').map((para, index) => (
                  <p key={index} className="text-lg leading-relaxed text-paragraph-light max-md:text-base">
                    {para}
                  </p>
                ))}
              </motion.div>
            )}
            {(ctaText || ctaDescription) && (
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-md:p-4"
              >
                {ctaText && (
                  <p className="mb-2 text-lg font-semibold text-heading dark:text-white max-md:text-base">
                    {ctaText}
                  </p>
                )}
                {ctaDescription && (
                  <p className="text-paragraph-light max-md:text-sm">
                    {ctaDescription}
                  </p>
                )}
              </motion.div>
            )}
          </div>

          {/* Image Content */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <motion.div
              variants={fadeFromLeftAnimation}
              initial={false}
              animate="animate"
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full max-lg:max-w-md"
            >
              {isMobile !== null && (
                <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-50/40 to-pink-50/20 blur-2xl"></div>
                  <Image
                    src={selectedImage}
                    alt="Digital Marketing Agency"
                    width={imageWidth}
                    height={imageHeight}
                    priority
                    loading="eager"
                    placeholder="empty"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="relative rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  );
};

export default MarketingAgencyHero;

