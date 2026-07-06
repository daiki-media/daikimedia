"use client";
import { fadeUpAnimation } from "@/data/animation";
import TestimonialList from "@/data/testimonial";
import { motion } from "framer-motion";
import { RatingStars } from "../shared/Rating";

const TestimonialSingle = () => {
  const { TestimonialData } = TestimonialList;
  return (
    <section className=" relative pb-25">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative">
        <div className="relative z-10">
          <div className="absolute left-1/2 top-0 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className=" grid grid-cols-3 gap-11 max-lg:grid-cols-2 max-md:grid-cols-1 ">
            {TestimonialData.map((testimonial) => (
              <motion.div
                className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200"
                key={testimonial.id}
                initial={false}
                animate="animate"
                variants={fadeUpAnimation}
              >
                <div className="rounded border border-dashed border-gray-100 p-7 dark:border-borderColor-dark">
                  <blockquote className="mb-5 italic leading-[1.75] text-paragraph dark:text-white">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </blockquote>
                  <div className="mb-7">
                    <RatingStars
                      rating={testimonial.rating}
                      ratingColor={"text-paragraph dark:text-white"}
                      ratingEmptyColor={"text-[#A7A7B4] dark:text-[#646463]"}
                    />
                  </div>

                  <div className="flex items-center border-t border-dashed border-gray-100 pt-7 dark:border-borderColor-dark">
                    <div className="block">
                      <h3 className="text-base font-semibold">
                        {testimonial.author.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSingle;
