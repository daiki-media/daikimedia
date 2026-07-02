import Image from "next/image";

export const metadata = {
  title: "About Us | Daiki Media - Digital Marketing Experts in Malaysia",
  description:
    "Learn about Daiki Media, a trusted digital marketing agency in KL, Malaysia, empowering businesses with innovative and result-driven strategies.",
  keywords:
    "digital marketing, SEO, web development, UI/UX design, copywriting, app development, KL, Malaysia",
  og_title:
    "Digital Marketing Agency Kuala Lumpur | Search Engine Optimization and Digital Marketing | Seo Agencies | Daiki Media",
  og_description:
    "Learn about Daiki Media, a trusted digital marketing agency in KL, Malaysia, empowering businesses with innovative and result-driven strategies.",
  og_image: "https://www.daikimedia.com/images/logo.png",
  og_url: "https://www.daikimedia.com",
  og_type: "website",
  og_site_name: "Daiki Media",
  og_locale: "en_US",
};

const AboutDetails = () => {
  const AboutImages = [
    {
      id: 1,
      image: "/images/about/hello1.avif",
    },
    {
      id: 2,
      image: "/images/about/hello2.avif",
    },
    {
      id: 3,
      image: "/images/about/hello3.avif",
    },
  ];
  return (
    <section className="relative">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="mb-[160px] grid grid-cols-3 items-center gap-10  max-md:mb-25 max-md:grid-cols-1">
          {AboutImages.map((items) => (
            <div
              className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200"
              key={items.id}
            >
              <Image
                src={items.image}
                alt="about images"
                className="h-auto w-full rounded"
                width={383}
                height={494}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12">
          <div className="max-md:col-span-full md:col-span-6">
            <div className="max-w-[550px]">
              <p className="section-tagline">Our Impact</p>
              <h2>A Decade of Digital Innovation & Results</h2>
            </div>
          </div>
          <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6">
            <p>
              Daiki Media has over 10 years of experience in the digital
              marketing industry, delivering exceptional results. Our team of
              experts creates customized solutions to help businesses grow
              online and achieve their goals. We specialize in SEO, web
              development, and digital marketing strategies that ensure
              long-term success.
              <br />
              <br />
              Whether you need to enhance your online presence or drive
              measurable results, we’re here to transform your brand and help
              you succeed in the competitive digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
