import HeroContent from "./HeroContent";
import { HeroContactForm } from "./HeroContact";

const Hero = () => {
  return (
    <section
      className="hero max-mb:pb-[70px] max-mb:pb-[70px] relative overflow-hidden bg-gray pb-[140px] pt-[50px] dark:bg-dark max-lg:pb-25"
      id="scene"
    >
      {/* Desktop-only decorative lines: background-image, only requested at lg+ (never downloaded on mobile) */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-[520px] w-[1612px] -translate-x-1/2 lg:block lg:bg-[url('/images/hero-line-1.svg')] lg:bg-no-repeat dark:lg:bg-[url('/images/hero-line-1-dark.svg')]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 hidden h-[444px] w-full lg:block lg:bg-[url('/images/hero-line-2.svg')] lg:bg-no-repeat dark:lg:bg-[url('/images/hero-line-2-dark.svg')]"
      />

      {/* Mobile/tablet decorative lines: plain <img>, not CSS background — a background-image here is large
          enough to win the LCP race against the hero text (verified via Lighthouse), so it must not be used
          for anything above the fold. */}
      <div className="absolute left-1/2 top-0 max-w-[1612px] -translate-x-1/2 lg:hidden">
        <img
          src="/images/hero-line-3.svg"
          alt=""
          aria-hidden="true"
          width={375}
          height={520}
          className="dark:hidden"
        />
        <img
          src="/images/hero-line-3-dark.svg"
          alt=""
          aria-hidden="true"
          width={375}
          height={520}
          className="hidden dark:block"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <img
          src="/images/hero-line-4.svg"
          alt=""
          aria-hidden="true"
          width={375}
          height={444}
          className="dark:hidden"
        />
        <img
          src="/images/hero-line-4-dark.svg"
          alt=""
          aria-hidden="true"
          width={375}
          height={444}
          className="hidden dark:block"
        />
      </div>
      <div className="container">
        <HeroContent />
      </div>
      <div>
        <HeroContactForm />
      </div>
    </section>
  );
};

export default Hero;
