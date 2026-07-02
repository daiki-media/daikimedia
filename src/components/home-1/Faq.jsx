import Questions from "./Questions";

const Faq = () => {
  return (
    <section className=" relative overflow-hidden bg-gray pb-[130px] pt-150 dark:bg-dark max-md:py-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 1xl:gap-x-24 ">
          <div>
            <p className="section-tagline">Faq&rsquo;s</p>
            <h2 className="mb-8">
              Frequently Asked Questions About Digital Agency Services
            </h2>
            <p>
              Get answers to common questions about our digital agency services,
              processes, and how we can help transform your business&apos;s
              digital presence.
            </p>
          </div>
          <Questions />
        </div>
      </div>
    </section>
  );
};

export default Faq;
