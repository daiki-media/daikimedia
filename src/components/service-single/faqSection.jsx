"use client";
import { useState } from "react";
import FaqItem from "@/components/shared/FaqItem";
import FaqBackground from "@/components/shared/FaqBackground";
import FAQSchema from "@/components/schema/FAQSchema";
export const FaqSection = ({ data, heading }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const defaultHeading = (
    <>
      Frequently Asked <br />
      Question
    </>
  );
  
  // Format heading with line break if it's "Frequently Asked Question"
  const formattedHeading = heading === "Frequently Asked Question" ? (
    <>
      Frequently Asked <br />
      Question
    </>
  ) : heading || defaultHeading;
  
  return (
    <>
      <FAQSchema faqs={data} />
      <section className="relative pb-150  max-md:overflow-hidden">
        <div className="container relative">
          <FaqBackground />
          <div className="mx-auto max-w-[830px]">
            <div className="text-center">
              <p className="section-tagline mb-3">Faq's</p>
              <h2 className="mb-12">
                {formattedHeading}
              </h2>
            </div>
            <div className="[&>*:not(:last-child)]:mb-5">
              {data.map((faq) => (
                <FaqItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeIndex === faq.id}
                  onClick={() => handleItemClick(faq.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
