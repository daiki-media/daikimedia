import Link from "next/link";

export const CommonChallengesSection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="relative py-16 px-4 mb-2 bg-white dark:bg-dark-300 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
        <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
        <div className="rounded-full bg-primary-200/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
        <div className="rounded-full bg-primary-200/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="section-tagline">Common Challenges</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-paragraph dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
              {data.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.challenges?.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-dark-200 rounded-xl border border-gray-100 dark:border-borderColor-dark shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:scale-[1.02]"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-red-600 dark:text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    {item.challenge}
                  </h3>
                </div>

                <div className="pl-11">
                  <div className="flex items-start gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-primary dark:text-primary-200 uppercase tracking-wider">
                      Daiki Media Solution
                    </span>
                  </div>
                  <p className="text-paragraph dark:text-gray-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data.ctaButton && data.ctaLink && (
          <div className="text-center">
            <Link
              href={data.ctaLink}
              className="btn"
            >
              {data.ctaButton}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};