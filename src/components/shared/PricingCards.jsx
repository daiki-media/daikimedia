"use client";
import Pricing from "@/data/pricing";
import PricingBackground from "./PricingBackground";
import PricingCard from "./PricingCard";
import PricingCardV2 from "./PricingCardV2";
import { cn } from "@/utils/cn";

const PricingCards = ({ isAnnual, version, customPricingData = null }) => {
  const { PricingData } = Pricing;
  const dataToUse = customPricingData || PricingData;
  return (
    <div className="relative md:z-10">
      <PricingBackground />
      <div
        className={cn(
          "relative flex items-stretch gap-8 max-lg:flex-col max-md:z-10",
          version ? "pb-12" : ""
        )}
      >
        {version ? (
          <>
            {dataToUse.map((price) => (
              <div key={price.id} className="flex-1 flex flex-col">
                <PricingCardV2 price={price} isAnnual={isAnnual} />
              </div>
            ))}
          </>
        ) : (
          <>
            {dataToUse.map((price) => (
              <div key={price.id} className="flex-1 flex flex-col">
                <PricingCard price={price} isAnnual={isAnnual} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PricingCards;
