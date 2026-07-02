import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import VisionAnimation from "./VisionAnimation";

const Vision = () => {
  const improvements = [
    "Better search visibility",
    "Stronger website performance",
    "Clearer brand positioning",
    "More effective campaigns",
    "Improved user journey",
    "Better lead quality",
    "More confidence in digital direction",
  ];

  return (
    <section className="relative -mt-24 overflow-hidden bg-gray pb-150 pt-[300px] dark:-mt-24 dark:bg-dark max-md:-mt-60 max-md:pb-20 max-md:pt-[320px] dark:max-md:-mt-60">
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 hidden h-[942px] w-[454px] md:block md:bg-[url('/images/vision-line-1.svg')] md:bg-no-repeat dark:md:bg-[url('/images/vision-line-1-dark.svg')]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-[942px] w-[454px] md:block md:bg-[url('/images/vision-line-2.svg')] md:bg-no-repeat dark:md:bg-[url('/images/vision-line-2-dark.svg')]"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 hidden h-[1305px] w-[140px] max-md:block max-md:bg-[url('/images/vision-line-3.svg')] max-md:bg-no-repeat dark:max-md:bg-[url('/images/vision-line-3-dark.svg')]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-[1305px] w-[140px] max-md:block max-md:bg-[url('/images/vision-line-4.svg')] max-md:bg-no-repeat dark:max-md:bg-[url('/images/vision-line-4-dark.svg')]"
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 items-end gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div>
            {/* Subtitle */}
            <p className="section-tagline">Selected Work</p>
            
            {/* Main Title */}
            <h2 className="mb-6 max-lg:mb-4">
              Work That Reflects Strategy, Creativity, and Real Progress
            </h2>
            
            {/* Description paragraphs */}
            <p className="mb-4 max-lg:mb-3">
              Every business grows differently. That is why we do not force the same formula on every client.
            </p>
            <p className="mb-4 max-lg:mb-3">
              Our work is shaped by the brand, the market, the audience, and the growth challenge in front of us. 
              In some cases, the focus is visibility. In others, it is website experience, lead generation, 
              or stronger digital positioning.
            </p>
            <p className="mb-4 max-lg:mb-3">
              What stays consistent is our approach.
            </p>
            <p className="mb-6 max-lg:mb-5">
              We look for what is slowing growth, what needs to become clearer, and what will create the 
              biggest lift for the brand moving forward.
            </p>
            
            {/* Subheading for improvements list */}
            <p className="mb-4 font-semibold dark:text-white">
              What our work often helps improve:
            </p>
            
            {/* Improvements list - 2 column grid for better layout */}
            <ul className="mb-10 grid grid-cols-1 gap-3 md:grid-cols-2">
              {improvements.map((item, index) => (
                <li key={index} className="flex items-center gap-x-2">
                  <span className="shadow-icon item-center relative flex h-7 w-7 flex-shrink-0 justify-center rounded-full bg-white dark:bg-dark-200">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-paragraph dark:text-primary"
                    />
                  </span>
                  <span className="font-jakarta_sans font-medium dark:text-white text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/case-studies"
                className="btn dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white"
              >
                See Case Studies
              </Link>
              <Link
                href="#"
                className="btn dark:text-white border border-gray-300"
              >
                See Our Portfolio
              </Link>
            </div>
          </div>
          <div>
            <VisionAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;