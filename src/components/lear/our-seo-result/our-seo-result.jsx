"use client";
import React from "react";
import {
  PlayCircle,
  CheckCircle,
  TrendingUp,
  Layout,
  Users,
  ArrowRight,
  Check,
  X,
  Star,
} from "lucide-react";



export const metadata = {
  title: "SEO Results | Daiki Media",
  description:
    "Discover how Daiki Media helps achieve outstanding SEO results. Learn about strategies, tools, and insights that enhance your website's search engine performance.",
  keywords:
    "SEO results, Daiki Media, search engine optimization, SEO tools, website ranking, SEO strategies, improve SEO performance",
};


export default function SeoResult() {
  const comparisonData = [
    {
      daikiMedia: "Tailored digital marketing strategies backed by data.",
      competitors: "Generalized, one-size-fits-all approaches.",
    },
    {
      daikiMedia: "Advanced tools like MarketingCloudDX for precise tracking",
      competitors: "Limited tracking capabilities with third-party tools.",
    },
    {
      daikiMedia: "Dedicated experts for each service area.",
      competitors: "Lack of specialized expertise in niche industries.",
    },
    {
      daikiMedia: "Proven results with award-winning campaigns.",
      competitors: "Inconsistent results with minimal recognition.",
    },
    {
      daikiMedia: "Transparent communication and customized solutions.",
      competitors: "Vague communication and standardized plans.",
    },
  ];
  const testimonials = [
    {
      company: "HydroWorx",
      quote:
        "Daiki Media helped us achieve incredible growth with a seamless marketing strategy. From SEO to social media, they've been an indispensable partner.",
      rating: 5,
      author: "Robert Frost",
      role: "Marketing Director",
      // logo: "/placeholder.svg?height=30&width=120"
    },
    {
      company: "Refresh LED",
      quote:
        "If you're serious about growing your business, Daiki Media is the partner you need. Their team is phenomenal!",
      rating: 5,
      author: "Guy Hawkins",
      role: "CEO",
      // logo: "/placeholder.svg?height=30&width=120"
    },
    {
      company: "Soundproof Cow",
      quote:
        "We achieved results beyond our expectations. Daiki Media truly understands what it takes to succeed online.",
      rating: 5,
      author: "Cody Fisher",
      role: "Operations Manager",
      // logo: "/placeholder.svg?height=30&width=120"
    },
  ];
  const caseStudies = [
    {
      featured: true,
      company: "HydroWorx",
      challenge:
        "HydroWorx needed a comprehensive digital marketing strategy to increase organic traffic and lead generation.",
      solution: [
        "Ongoing monthly SEO strategy.",
        "Custom website redesign for enhanced usability.",
        "Comprehensive social media strategy to drive engagement.",
      ],
      results: [
        "131% increase in organic contact form submissions.",
        "236% increase in organic sessions.",
      ],
      cta: "Read Full Case Study",
      icon: Layout,
    },
    {
      company: "Refresh LED",
      challenge:
        "Refresh LED wanted to improve online visibility and generate qualified leads.",
      solution: [
        "SEO optimization and PPC campaign management.",
        "Integration of MarketingCloudDX for performance tracking.",
      ],
      results: ["Significant growth in online presence and conversions."],
      cta: "Watch the Video",
      video: true,
      icon: TrendingUp,
    },
  ];

  return (
    <>

      <section className="py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-base font-semibold mb-4">
            Elevate Your Business with Daiki Media&apos;s Proven Digital
            Solutions
          </h1>
          <h2 className="text-5xl font-bold mb-6 max-w-4xl mx-auto leading-snug">
            Driving Traffic, Leads, and Revenue with Tailored Strategies and
            Award-Winning Expertise
          </h2>
          <p className="text-base  mb-8 max-w-4xl mx-auto">
            Partner with Daiki Media and let us handle the complexities of
            digital marketing. With our proven track record of success,
            we&apos;ll help you achieve higher website traffic, increased leads,
            and exponential revenue growth.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=601114850067"
            className="btn btn-xl mt-10"
          >
            Let&apos;s Grow Your Business – Get Started Today!
          </a>
        </div>
      </section>

      {/* Comparison Section */}
      <section className=" px-4 ">
        <div className="flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-xl border border-black container mx-auto">
            <div className="p-8">
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Daiki Media vs. Competitors
              </h2>
              <div className="grid grid-cols-2 gap-4 font-bold text-gray-600 border-b-2 border-gray-200 pb-4">
                <div className="text-center">Daiki Media</div>
                <div className="text-center">Other Companies</div>
              </div>
              <div className="space-y-6">
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 items-center py-4 border-b border-gray-200 last:border-b-0"
                  >
                    {/* Daiki Media Column */}
                    <div className="flex items-center justify-center bg-green-50 rounded-full py-2 px-4">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-green-700">{row.daikiMedia}</span>
                    </div>

                    {/* Competitors Column */}
                    <div className="flex items-center justify-center bg-red-50 rounded-full py-2 px-4">
                      <X className="w-5 h-5 text-red-500 mr-2" />
                      <span className="text-red-700">{row.competitors}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mini CTA Section */}
      <section className="py-32   mx-auto">
        <div className="rounded-3xl p-5 text-center">
          <p className="text-base dark:text-white  mb-6">
            Ready to take your business to the next level? With Daiki
            Media&apos;s specialized solutions and proven success, achieving
            your goals has never been easier.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=601114850067"
            className="btn btn-xl mt-10"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="">
        <div className="container dark:text-black  mx-auto">
          <h2 className="text-4xl dark:text-white font-bold text-center mb-10 ">
            Case Studies
          </h2>

          <div className="space-y-28">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-white overflow-hidden  transform  ${study.featured ? "hover:-translate-y-0" : ""}`}
              >
                <div className=" relative">
                  {study.featured && (
                    <div className="absolute top-0 right-0 dark:bg-white dark:text-black text-xs font-bold px-4 py-2 rounded-bl-2xl border-l border-b-2 border-gray-200">
                      {/* Featured Case Study */}
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                    {/* <div className="bg-gray-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 transition-transform transform ">
                      <study.icon className="w-8 h-8 " />
                    </div> */}
                    <h3 className="text-3xl dark:text-black  font-bold mb-8">{study.company}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-0 border-x border-dashed border-gray-300">
                    {/* Column 1 - Challenge */}
                    <div className="px-6 py-4 border-r border-dashed border-gray-300">
                      <h4 className="text-xl font-semibold mb-4 dark:text-black flex items-center">
                        <Users className="w-6 h-6 mr-2 dark:text-black" /> Challenge:
                      </h4>
                      <p className="dark:text-black">{study.challenge}</p>
                    </div>

                    {/* Column 2 - Solution */}
                    <div className="px-6 py-4 border-r border-dashed border-gray-300">
                      <h4 className="text-xl font-semibold dark:text-black mb-4 flex items-center">
                        <CheckCircle className="w-6 h-6 mr-2 dark:text-black" /> Solution:
                      </h4>
                      <ul className="space-y-2">
                        {study.solution.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="w-4 h-4 mr-2 dark:text-black mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3 - Results */}
                    <div className="px-6 py-4">
                      <h4 className="text-xl dark:text-black font-semibold mb-4 flex items-center">
                        <TrendingUp className="w-6 h-6 mr-2 dark:text-black" /> Results:
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-black" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-20 text-center">
                    <button className="inline-flex items-center justify-center btn btn-xl">
                      {study.video ? (
                        <>
                          <PlayCircle className="w-6 h-6 mr-2  dark:text-black" />
                          {study.cta}
                        </>
                      ) : (
                        <>
                          {study.cta}
                          <ArrowRight className="w-6 h-6 ml-2  dark:text-black" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* testimonials Section */}

      < section className=" py-32" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-black  dark:text-black rounded-2xl p-6 shadow-lg transition-transform transform  flex flex-col justify-between"
                style={{ minHeight: "380px" }}
              >
                <p className="dark:text-black italic mb-4 flex-grow">{`"${testimonial.quote}"`}</p>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  {/* Placeholder for Image */}
                  {/* <div className="w-14 h-14 bg-gray-200 border border-gray-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs  dark:text-black">56X56</span>
                  </div> */}
                  <div>
                    <h3 className="font-semibold  dark:text-black">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm  dark:text-black">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}
