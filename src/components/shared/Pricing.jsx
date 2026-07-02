"use client";
import { cn } from "@/utils/cn";
// import { useState } from "react";
import PricingCards from "./PricingCards";

const Pricing = ({
  className = "pt-150",
  showPricingText = true,
  largeTitle = false,
  pricingDescription = false,
  heading = "Pricing Plans",
  pricingData = null,
}) => {
  // const [isAnnual, setIsAnnual] = useState(false);
  return (
    <section
      className={cn(
        "relative -z-0 overflow-hidden bg-white pb-150 dark:bg-dark-300 max-md:mb-25",
        className
      )}
    >
      <div className="container">
        <div
          className={`${largeTitle ? "max-w-[900px]" : "max-w-[475px]"} mx-auto mb-12 text-center`}
        >
          <div className={cn(showPricingText ? "" : "hidden")}>
            <p className="section-tagline">Our Pricing</p>
            {largeTitle ? (
              <h1>{heading}</h1>
            ) : (
              <h2>{heading}</h2>
            )}
            {pricingDescription ? (
              <p className="mb-12 mt-10">
                Until recently, the prevailing view assumed lorem ipsum was born
                as a nonsense <br /> text. It&lsquo;s not Latin, though it looks
                like it
              </p>
            ) : (
              ""
            )}
          </div>
          {/* <div className="pricing mt-8">
            <label className="relative z-[110] inline-flex cursor-pointer items-center">
              <span className="mr-2.5 text-base font-semibold text-paragraph dark:text-white">
                Yearly
              </span>
              <input
                type="checkbox"
                id="priceCheck"
                className="peer sr-only"
                checked={isAnnual}
                onChange={(e) => setIsAnnual(e.target.checked)}
              />
              <div className="relative h-[34px] w-15 rounded-[20px] bg-paragraph transition-colors duration-300 ease-in-out">
                <div className="absolute left-1/2 top-1/2 h-[calc(100%-10px)] w-[calc(100%-10px)] -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-dashed border-white/40"></div>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                    isAnnual ? "left-[calc(100%-28px)]" : "left-[5px]"
                  }`}
                >
                  <div className="absolute -inset-1 rounded-full bg-white/30 blur-sm"></div>

                  <div className="relative h-6 w-6 rounded-full bg-white"></div>
                </div>
              </div>
              <span className="ml-2.5 text-base font-semibold text-paragraph dark:text-white">
                monthly
              </span>
            </label>
          </div> */}
        </div>
        {/* Pricing Cards */}
        <PricingCards isAnnual={true} version={false} customPricingData={pricingData} />
      </div>
    </section>
  );
};

export default Pricing;
