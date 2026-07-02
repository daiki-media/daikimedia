import ServiceBoxes from './ServiceBoxes'


export const metadata = {
  title: "Services | Daiki Media",
  description:
    "Discover the wide range of services offered by Daiki Media. From digital marketing to analytics and creative solutions, we help you grow your business.",
  keywords:
    "Daiki Media, services, digital marketing, analytics, creative solutions, business growth, marketing services, business solutions",
};

const Services = ({ 
  sectionDetails = true,
  title = "Why Businesses Choose Daiki Media",
  description = "Transform your digital presence with our comprehensive suite of services, trusted by industry leaders worldwide for delivering measurable results and sustainable growth."
}) => {
  // Split title by \n to handle line breaks
  const titleLines = title.split('\n');
  
  return (
    <section className="relative bg-white pb-150 dark:bg-dark-300 sm:overflow-hidden">
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/service-bg.webp')] bg-cover bg-center bg-no-repeat opacity-70 sm:hidden"></div>
      <div className="container">
        {sectionDetails && (
          <div className="mb-12">
            <p className="section-tagline max-lg:text-center">Our Services</p>
            <div className="block max-lg:text-center lg:flex">
              <h2 className=" max-lg:mb-5">
                {titleLines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="max-w-[520px] lg:ml-auto">
                {description}
              </p>
            </div>
          </div>
        )}
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2  -translate-y-1/2 max-sm:hidden">
            <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px] "></div>
            <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            <div className="lg-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
          </div>
          <ServiceBoxes />
        </div>
      </div>
    </section>
  )
}

export default Services
