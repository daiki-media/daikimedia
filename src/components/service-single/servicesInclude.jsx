"use client";

export const ServiceInclude = ({ data, sectionTag = "Core Service", sectionTitle = "What Our Services Include" }) => {
  return (
    <section className="relative pt-15">
      <div className="absolute left-0 right-0 top-150 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1800px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[575px] text-center">
          <p className="section-tagline">{sectionTag}</p>
          <h2>{sectionTitle}</h2>
        </div>

        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <div className="relative flex  flex-col [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-0.5 [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:overflow-hidden [&>*:not(:last-child)]:after:content-[url('/images/payment/seperator.png')] dark:[&>*:not(:last-child)]:after:content-[url('/images/payment/seperator-dark.png')] max-md:[&>*:not(:last-child)]:after:hidden">
            <div className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden ">
              {data.map((items) => (
                <div
                  className=" group  relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')] lg:px-12 lg:after:right-0 lg:after:top-1/2  lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')]"
                  key={items.id}
                >
                  <h3 className="relative mb-2.5 after:absolute after:-left-[49px] after:h-full after:w-0.5 after:bg-primary after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
                    {items.title}
                  </h3>
                  <p className="mb-6">{items.description}</p>
                  {items.services && items.services.length > 0 && (
                    <div className="mb-6">
                      <h4 className="mb-3 font-semibold">
                        {items.servicesLabel || "We create:"}
                      </h4>
                      <ul className="space-y-2">
                        {items.services.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              className="mr-3 mt-1 shrink-0"
                            >
                              <path
                                d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                                stroke=""
                                className="stroke-paragraph dark:stroke-primary"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-paragraph-light">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {items.benefit && (
                    <p className="text-paragraph-light border-t border-dashed border-gray-100 dark:border-borderColor-dark pt-4">
                      {items.benefit}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
