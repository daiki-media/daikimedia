"use client";
import Image from "next/image";

const HeroContent = () => {
  return (
    <section className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
      <div className="col-span-12 md:col-span-6">
        <p className="mb-8 font-medium uppercase max-lg:mb-4">
          5k+ Trusted Businesses
        </p>
        <h1 className="mb-4 max-md:mb-8">
          SEO That Turns{" "}
          <span className="inline-block rounded-[88px] border-2 border-paragraph bg-transparent px-5 pb-2.5 pt-1 font-playfair italic leading-none dark:border-[#F0F3EA]">
             Rankings  Into
          </span>{" "}
           Revenue
        </h1>
        <p className="mb-4 max-w-[590px] max-md:mb-8">
          SEO starts long before a page goes live. Most businesses invest in websites, content, and ads, yet still fail to show up in search where their customers are actually looking. The problem is not effort. It is strategy. Without a data-backed approach to search engine optimization, even the best content stays invisible.

          At Daiki Media, SEO is the practice of aligning every element of your digital presence with how search engines discover, evaluate, and rank content. We help businesses improve their search result positions, grow organic traffic, and build lasting visibility that compounds over time. From technical SEO to content optimization, off-page SEO to local SEO, we handle every aspect of your SEO performance.

          SEO stands for search engine optimization, and it is one of the most cost-effective channels in any marketing strategy. We make it work harder for your business.

        </p>
        <a
          href="https://api.whatsapp.com/send?phone=601114850067"
          target="_blank"
          rel="noopener noreferrer"
          className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4"
        >
          Get Started
        </a>
      </div>

      <div className="col-span-12 md:col-span-6 hidden md:flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/testimg-mobile.avif"
            alt="Illustration representing SEO and digital marketing growth"
            width={600}
            height={800}
            priority
            fetchPriority="high"
            sizes="50vw"
            quality={75}
            className="rounded-2xl object-cover"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;