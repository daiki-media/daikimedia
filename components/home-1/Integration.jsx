import Link from "next/link";
import IntegrationAnimation from "./IntegrationAnimation";

const Integration = () => {
  return (
    <section className="bg-white py-8 md:py-100  dark:bg-dark-300 max-md:pb-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="section-tagline">Best-in-Class SEO</p>

          <h2 className="mb-8">Unlock Productivity with 20+ SEO Solutions</h2>
          <p className="mb-10">
            Unlock seamless efficiency with Daiki Media’s best-in-class SEO
            solutions, tailored to elevate your digital strategy and streamline
            operations effortlessly
          </p>

          <Link
            href="https://api.whatsapp.com/send?phone=601114850067"
            className="btn dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white"
          >
            Start Your Journey
          </Link>
        </div>
        <IntegrationAnimation />
      </div>
    </section>
  );
};

export default Integration;
