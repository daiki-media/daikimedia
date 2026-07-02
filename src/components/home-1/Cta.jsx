import Link from 'next/link'

const Cta = () => {
  return (
    <section className="relative overflow-hidden bg-gray pb-[145px] pt-[135px] dark:bg-dark max-md:py-20">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-[520px] w-[1612px] -translate-x-1/2 md:block md:bg-[url('/images/hero-line-1.svg')] md:bg-no-repeat dark:md:bg-[url('/images/hero-line-1-dark.svg')]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 hidden h-[444px] w-full md:block md:bg-[url('/images/hero-line-2.svg')] md:bg-no-repeat dark:md:bg-[url('/images/hero-line-2-dark.svg')]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-[520px] w-[375px] -translate-x-1/2 max-md:block max-md:bg-[url('/images/hero-line-3.svg')] max-md:bg-no-repeat dark:max-md:bg-[url('/images/hero-line-3-dark.svg')]"
      />
      <div className="container relative z-10">
        <div className="mx-auto text-center">
          <h2 className="mb-5 text-[48px] font-semibold max-lg:text-[32px]">
            Ready to Reach the Top <br />  of Search Engine Results?
          </h2>
          <p className="mx-auto mb-12 max-w-[700px] max-lg:mt-6">
            Every day your competitors are investing in SEO, capturing search result clicks, and building organic ranking authority that compounds over time. The businesses that dominate search engines tomorrow are investing in their SEO strategy today.

            Daiki Media combines deep technical SEO expertise with proven content optimization, off-page SEO outreach, and local SEO precision to help businesses at every stage grow faster through organic search. Whether you need to fix critical SEO issues, build a new SEO strategy from the ground up, or scale what is already working, we are ready to start.

            Use Daiki Media as your performance marketing partner and watch your visibility in search results translate into measurable revenue. From on-page SEO and technical SEO to international SEO and news SEO, every aspect of your digital marketing is covered.


          </p>
          <Link href="/contact" className="btn">
            Get Started Today
          </Link>
          {/* Minor change: Added a comment for Git to detect this file as modified */}
          <ul className="mx-auto mt-20 flex max-w-[815px] items-center justify-between max-lg:mt-5 max-md:flex-col max-md:gap-5">
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3">
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>No Hidden Fees or Charges</p>
            </li>
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3">
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>30-Day Risk-Free Trial</p>
            </li>
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3">
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>100% Money-Back Guarantee</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cta
