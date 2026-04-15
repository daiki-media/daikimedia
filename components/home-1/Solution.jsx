import Link from "next/link";
import SolutionAnimation from "./SolutionAnimation";

const Solution = () => {
  const businessTypes = [
    "SMEs",
    "Service-Based Businesses",
    "Clinics and Specialist Brands",
    "Ecommerce Brands",
    "Multi-Market Brands",
  ];

  const workSteps = [
    {
      number: "1",
      title: "Understand the business",
      description: "Where your brand is now, what's slowing growth"
    },
    {
      number: "2",
      title: "Identify the priorities",
      description: "Focus on areas with clearest commercial value"
    },
    {
      number: "3",
      title: "Build and improve",
      description: "Strengthen what matters most"
    },
    {
      number: "4",
      title: "Refine and grow",
      description: "Build stronger momentum over time"
    },
  ];

  return (
    <>
      {/* Original Section */}
      <section className="relative overflow-hidden bg-white pb-150 pt-[160px] dark:bg-dark-300 max-lg:pb-150 max-lg:pt-20 lg:pb-15">
        <div className="container">
          <div className="grid grid-cols-2 items-start gap-12 max-md:grid-cols-1 1xl:gap-x-24">
            <div className="max-md:order-2">
              <div className="relative">
                <div className="relative mx-auto aspect-video">
                  <SolutionAnimation />
                </div>
              </div>
            </div>
            <div className="max-md:order-1 lg:-mt-15">
              {/* Who We Work With Section */}
              <div className="mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
                  Who We Work With
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Built for Ambitious Brands in <span className="text-primary-600 dark:text-primary-400">Growth Mode</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  We work best with businesses that are ready to strengthen how they show up online and how digital contributes to their growth.
                </p>
                
                <div className="mb-6">
                  <p className="text-gray-800 dark:text-gray-200 font-semibold mb-3">
                    That includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {businessTypes.map((type, index) => (
                      <div key={index} className="flex items-center gap-x-3 group">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-5 border-l-4 border-primary-600 dark:border-primary-400">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    If your business has outgrown disconnected marketing and needs a clearer path forward, we are built for that stage.
                  </p>
                </div>
              </div>

              <Link
                href="https://api.whatsapp.com/send?phone=601114850067"
                className="btn"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New How We Work Section - Full Width */}
      <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-dark-200">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
              How We Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              A Clearer Way to Build <span className="text-primary-600 dark:text-primary-400">Digital Growth</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We keep our process straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {workSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-dark-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 dark:bg-primary-400 text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white dark:bg-dark-300 rounded-xl p-6 border-l-4 border-primary-600 dark:border-primary-400 shadow-md">
              <p className="text-gray-700 dark:text-gray-300 font-medium italic text-lg">
                "This way, the work stays focused, practical, and easier to trust."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;