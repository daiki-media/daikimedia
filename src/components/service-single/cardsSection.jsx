"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";

export const CardsSection = ({ data }) => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  return (
    <section className="relative bg-white pb-150 dark:bg-dark-300 sm:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/service-bg.webp')] bg-cover bg-center bg-no-repeat opacity-70 sm:hidden"></div>
      <div className="container">
        <div className="mb-12">
          <p className="section-tagline max-lg:text-center">Our Services</p>
          <div className="block max-lg:text-center lg:flex">
            <h2 className=" max-lg:mb-5">
              Why Businesses Choose Daiki Media
            </h2>
            <p className="max-w-[520px] lg:ml-auto">
              Transform your digital presence with our comprehensive suite of
              services, trusted by industry leaders worldwide for delivering
              measurable results and sustainable growth.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
            <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="lg-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
          </div>
          <>
            <motion.div
              className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1"
              ref={ref}
              initial="initial"
              animate={controlAnimation}
              variants={fadeUpAnimation}
            >
              {data.map((item, index) => (
                <div
                  className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
                  key={item.id || index} 
                >
                  <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                    <h3 className="mb-2.5">{item.title}</h3>
                    <p className="mb-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </>
        </div>
      </div>
    </section>
  );
};
