import Image from "next/image";

const HeroContent = () => {
  return (
    <section className="relative z-10 grid grid-cols-12 items-center max-lg:gap-y-10">
      <div className="col-span-12 md:col-span-6">
        <p className="mb-8 font-medium uppercase max-lg:mb-4">
          5k+ Trusted Businesses
        </p>
        <h1 className="mb-4 max-md:mb-8 lg:text-6xl">
          Growth Marketing {" "}
          <span className="block rounded-[88px] mr-4 my-2  border-2 border-paragraph bg-transparent px-5 pb-2.5 pt-1 font-playfair italic leading-none dark:border-[#F0F3EA]">
            That Actually Moves
          </span>{" "}
           Your Business Forward
        </h1>
        <p className="mb-4 max-w-[590px] max-md:mb-8">
          At DaikiMedia, we help brands grow with sharper strategy, stronger visibility, and digital marketing that feels connected from start to finish.
          A lot of businesses invest in websites, ads, content, and SEO, but still struggle to see real momentum. The issue usually is not effort. It is the lack of direction behind it.
          That is where we come in.
          We bring together strategy, search, content, performance marketing, and web experience to help businesses grow in a way that feels clear, focused, and commercially useful.
          Whether you are trying to generate more leads, improve your online presence, or create a stronger digital foundation for the next stage of growth, DaikiMedia helps you move with more clarity and less guesswork.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=601114850067"
          target="_blank"
          rel="noopener noreferrer"
          className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4 mx-2"
        >
          Book a Free Consultation
        </a>
      </div>

      <div className="col-span-12 md:col-span-6 hidden md:flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/testimg-mobile.avif"
            alt="Illustration representing SEO and digital marketing growth"
            width={600}
            height={800}
            loading="eager"
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