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

      {/* Mobile/tablet decorative lines: background-image, only requested below lg (desktop never downloads them) */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-[520px] w-[375px] -translate-x-1/2 max-lg:block max-lg:bg-[url('/images/hero-line-3.svg')] max-lg:bg-no-repeat dark:max-lg:bg-[url('/images/hero-line-3-dark.svg')]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 hidden h-[444px] w-full max-lg:block max-lg:bg-[url('/images/hero-line-4.svg')] max-lg:bg-no-repeat dark:max-lg:bg-[url('/images/hero-line-4-dark.svg')]"
      />
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
