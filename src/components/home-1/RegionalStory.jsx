import ScrollFadeIn from "@/components/animations/ScrollFadeIn";

const RegionalStory = () => {
  return (
    <section className="relative bg-white py-16 dark:bg-dark-300">
      <div className="container">
        <ScrollFadeIn className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            A Digital Growth Partner for Brands That Want More Than Just Marketing Services
          </h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
           Some agencies focus on isolated tasks.
          </p>
          <div className="mb-8 space-y-4 text-gray-700 dark:text-gray-300">
              <ul className="space-y-4 mb-12">
                {[
                    "A campaign here.",
                   " A website there.",
                   " A few SEO updates.",
                   " A monthly report.",
                ].map((item, index) => (
                  <li key={index} className="flex flex-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-paragraph dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

            <p>But when everything is handled separately, growth often feels scattered too.</p>
            <p>At DaikiMedia, we take a more connected approach. We help businesses build a stronger digital presence by making sure strategy, visibility, messaging, and performance are working together.</p>
            <p>That means we do not just look at traffic. We look at how your brand is showing up online, how people are finding you, how they experience your website, and what is helping or stopping them from taking action.</p>
            <p>Our goal is simple: to help your business grow through digital work that is clearer, stronger, and built with purpose.</p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default RegionalStory;
