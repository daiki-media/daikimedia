"use client";
import React, { useState } from "react";

import { Star } from "lucide-react";


export const metadata = {
  title: "Best SEO Practices | Daiki Media",
  description:
    "Master the best SEO practices with Daiki Media. Optimize your website for search engines and boost your online visibility with expert strategies and tools. SEO optimization companies, Daiki Media provides expert services to improve your website’s rankings and drive organic traffic, ensuring long-term growth and success.",
  keywords:
    "Best SEO, Daiki Media, SEO optimization, search engine optimization, SEO tools, SEO strategies, website ranking, online visibility",
};


const processSteps = [
  {
    title: "Experience",
    description:
      "With 10+ years of expertise, we’ve helped businesses in various industries outperform competitors.",
  },
  {
    title: "Custom Solutions",
    description:
      "Our strategies are tailored to meet your specific goals, not a one-size-fits-all approach.",
  },
  {
    title: " Affordable Pricing",
    description:
      "Get premium SEO services without breaking the bank. We offer transparent pricing with no hidden fees.",
  },
  {
    title: " 24/7 Support",
    description:
      "Our team is always available to answer your questions and provide real-time updates.",
  },
  {
    title: "Reporting & Feedback",
    description:
      "Receive detailed reports on your campaign performance. We’ll provide insights, feedback, and strategic recommendations to keep you on track for sustained growth.",
  },
];
const testimonials = [
  {
    company: "Testimonial 1:",
    quote:
      "Daiki Media’s SEO strategies skyrocketed our traffic. We’re now ranking #1 for our top keywords!",
    rating: 5,
    author: "Sarah L.",
    role: "SaaS Founder",
  },
  {
    company: "Testimonial 2:",
    quote:
      "Their team’s transparency and expertise are unmatched. Highly recommend Daiki Media for SEO.",
    rating: 5,
    author: "John K",
    role: " Real Estate Professional",
  },
  {
    company: "Testimonial 3:",
    quote:
      "Within 3 months, we saw a dramatic improvement in search rankings. Daiki Media delivers!",
    rating: 5,
    author: "Priya M.",
    role: "Health & Wellness Coach",
  },
];
const cards = [
  {
    title: "Retail Business",
    description: "Results.",
    point: "300% increase in organic traffic in 6 months",
    points: "50+ keywords ranked on the first page",
    pointss: "$200k+ revenue growth",
  },
  {
    title: "Tech Startup",
    description: "Results.",
    point: "Achieved 1st position for competitive keywords",
    points: "5x improvement in domain authority",
    pointss: "40% increase in lead generation",
  },
  {
    title: "Local Restaurant Chain",
    description: "Results.",
    point: "75% boost in local search visibility",
    points: "2,000+ new monthly website visitors",
    pointss: "Increased bookings by 120%",
  },
];
const qualities = [
  "Proven Results: Demonstrated success in ranking clients on the first page.",
  "Tailored Strategies: Personalized plans based on your business goals and audience.",
  "Transparent Communication: Regular updates and actionable reports.",
  "Comprehensive Services: Covering technical SEO, content creation, and link building.",
  "Expert Team: Certified professionals who stay ahead of algorithm updates.",
];

const services = [
  {
    title: "Keyword Research & Strategy",
    description: "Discover the terms that drive real traffic.",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize content, meta descriptions, and headers for better rankings.",
  },
  {
    title: "Off-Page SEO",
    description: "Build authority with high-quality backlinks.",
  },
  {
    title: "Technical SEO",
    description: "Ensure your website is fast, secure, and mobile-friendly.",
  },
  {
    title: "Local SEO",
    description: "Dominate local searches and attract nearby customers.",
  },
  {
    title: "E-commerce SEO",
    description: "Increase visibility for your products on search engines.",
  },
];
const myths = [
  {
    myth: "All SEO companies are the same.",
    truth: "Not true! Only experienced companies deliver consistent results.",
  },
  {
    myth: "SEO guarantees overnight success.",
    truth:
      "SEO is a long-term game, but the right company accelerates your progress.",
  },
  {
    myth: "You don't need SEO if you have paid ads.",
    truth:
      "Organic traffic is more sustainable and cost-effective in the long run.",
  },
  {
    myth: "SEO is too expensive for small businesses.",
    truth:
      "At Daiki Media, we offer affordable solutions for businesses of all sizes.",
  },
];

const process = [
  { title: "Audit", description: "Assess your current SEO performance." },
  {
    title: "Research",
    description: "Identify opportunities and high-value keywords.",
  },
  { title: "Plan", description: "Create a strategy tailored to your goals." },
  {
    title: "Execute",
    description: "Optimize your website, create content, and build backlinks.",
  },
  { title: "Measure", description: "Track progress with detailed analytics." },
  {
    title: "Adjust",
    description: "Refine strategies based on real-time data.",
  },
];

export default function BestSeo() {
  const [activeTab, setActiveTab] = useState("Consultation");

  return (
    <div className="mt-32">
      {/* Hero Banner Section */}
      <section className=" py-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center rounded-3xl mb-12">
            <h1>What is an SEO Company and Why Your Business Needs One</h1>
            <h2 className="text-4xl dark:text-white font-extrabold mb-4 relative inline-block">
              Who Is the Best SEO Company? Discover Why It&lsquo;s Daiki Media!
              <span className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="text-xl dark:text-white max-w-3xl mx-auto">
              Empowering businesses to dominate search rankings, drive organic
              traffic, and achieve measurable results.
            </p>
          </div>

          <div className="rounded-3xl p-8 bg-white sm:p-12 shadow-xl mb-12 relative overflow-hidden border-2 border-black hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40  rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32  rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10">
              <p className="text-lg dark:text-black leading-relaxed mb-8">
                Choosing the best SEO company is critical for your
                business&lsquo;s online success. At Daiki Media, we pride
                ourselves on delivering cutting-edge SEO strategies tailored to
                your unique goals. Our results speak for themselves—clients
                consistently see increased traffic, higher rankings, and greater
                ROI.
              </p>
            </div>
            <div className="text-center mb-12">
              <p className="text-xl dark:text-black max-w-3xl mx-auto">
                Experience the difference with Daiki Media. Let&lsquo;s grow
                your business together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="py-16">
        <div className="text-black flex items-center justify-center p-6">
          <div className="max-w-5xl w-full p-8">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
              Key Qualities of a Top SEO Company
            </h2>
            <p className="text-lg mb-12 text-center text-gray-600">
              Not all SEO companies are created equal. A top-tier SEO agency
              excels in the following areas:
            </p>

            <div className="border-2 bg-white border-black p-8 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <ul className="space-y-4 text-lg text-gray-800">
                {qualities.map((quality, index) => (
                  <li
                    key={index}
                    className="hover:text-red-500 transition-colors duration-200"
                  >
                    {quality}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12  p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-xl italic text-center text-black">
                At Daiki Media, we check all these boxes and go beyond to
                deliver unparalleled value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd section */}
      <section className="py-16">
        <div className="container flex items-center justify-center p-6">
          <div className="max-w-6xl w-full rounded-3xl bg-white shadow-xl p-12 border-4 border-black">
            <h2 className="text-4xl font-extrabold mb-8 text-center dark:text-gray-800">
              Why Choose Daiki Media for Your SEO Needs?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl border-2 border-black shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 dark:text-gray-800">
                  Decades of Experience
                </h2>
                <p className="dark:text-gray-700">
                  Our team has over 10 years of combined experience in SEO.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-3xl border-2 border-black shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 dark:text-gray-800">
                  Data-Driven Strategies
                </h2>
                <p className="dark:text-gray-700">
                  Every decision we make is backed by thorough research and
                  analytics.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-3xl border-2 border-black shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 dark:text-gray-800">
                  Client-Centered Approach
                </h2>
                <p className="dark:text-gray-700">
                  We view your success as our success.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 rounded-3xl border-2 border-black shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 dark:text-gray-800">
                  Full-Spectrum SEO Services
                </h2>
                <p className="dark:text-gray-700">
                  From technical audits to content optimization, we do it all.
                </p>
              </div>

              {/* Card 5 (Spanning two columns on medium and larger screens) */}
              <div className="p-8 rounded-3xl border-2 border-black shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4 dark:text-gray-800">
                  Proven Track Record
                </h2>
                <p className="dark:text-gray-700">
                  Hundreds of businesses have reached their SEO goals with Daiki
                  Media.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mt-12 text-center">
              <p className="text-xl font-medium italic dark:text-gray-800">
                &quot;With Daiki Media, your success isn&apos;t just a goal;
                it&apos;s our mission.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4th Section */}
      <section className="py-16">
        <div className="container flex items-center justify-center p-4">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl font-extrabold mb-8 text-center">
              Services That Set Us Apart from the Rest
            </h2>

            <p className="text-xl mb-12 text-center">
              Here&lsquo;s what we offer that makes us stand out:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border-t-4 border-black pt-4 group hover:border-t-8 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-2 group-hover:translate-y-[-4px] transition-transform duration-300 text-red-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 group-hover:translate-y-[-2px] transition-transform duration-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold mb-8 relative inline-block">
                At Daiki Media, we tailor every service to your specific needs
                to maximize ROI.
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </p>
              <div>
                <button className="px-8 py-3 border-2 border-black text-black text-lg font-bold bg-white rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                  Get Started with Daiki Media
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section */}
      <section>
        <div className=" py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              See How We&apos;ve Transformed Businesses Like Yours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl dark:text-black font-bold mb-4">{card.title}</h3>
                  <p className="dark:text-gray-600 mb-6">{card.description}</p>
                  <ul className="space-y-2 text-gray-800">
                    <li className="font-medium">{card.point}</li>
                    <li className="font-medium">{card.points}</li>
                    <li className="font-medium">{card.pointss}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6th section */}
      <section className="py-10">
        <div className="w-full  mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center pb-[20px]">
            What Sets Daiki Media Apart?
          </h2>
          <div className="w-full text-center">
            <div className="flex flex-wrap  justify-center gap-2 mb-8">
              {processSteps.map((step) => (
                <button
                  key={step.title}
                  onClick={() => setActiveTab(step.title)}
                  className={`px-4 py-2 bg-black text-sm md:text-base rounded-full transition-colors duration-300 ${activeTab === step.title
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {step.title}
                </button>
              ))}
            </div>
            <div className="mt-8">
              {processSteps.map(
                (step) =>
                  activeTab === step.title && (
                    <div
                      key={step.title}
                      className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 ease-in-out"
                    >
                      <h3 className="text-2xl font-bold mb-4"> {step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  )
              )}
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                {processSteps.map((step) => (
                  <div
                    key={step.title}
                    className={`  ${activeTab === step.title ? "bg-black" : "bg-gray-300"
                      }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7th Section */}
      <section className="py-10">
        <div className="p-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Busting Myths About SEO Agencies
            </h2>
            <div className="space-y-6">
              {myths.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-black text-xl font-bold mr-3">
                        X
                      </div>
                      <h2 className="text-lg font-semibold dark:text-gray-800">
                        {item.myth}
                      </h2>
                    </div>
                    <div className="pl-6">
                      <p className="dark:text-gray-600 text-sm">{item.truth}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 8th Section */}
      <section className="py-10">
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl dark:text-black font-extrabold text-center mb-12">
              How Daiki Media Delivers Results
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-black transform skew-y-3 group-hover:skew-y-0 transition-transform duration-300 ease-in-out"></div>
                  <div className="relative bg-white border-2 border-gray-400 p-6 transform group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                    <span className="text-5xl font-bold text-black opacity-20 absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl dark:text-black font-bold mb-2">{step.title}</h3>
                    <p className="dark:text-black">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold mb-8 relative inline-block">
                At Daiki Media, we tailor every service to your specific needs
                to maximize ROI.
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </p>
              <div>
                <button className="px-8 py-3 border-2 dark:text-black border-black text-lg font-bold rounded-full hover:bg-black dark:hover:text-white transition-colors duration-300">
                  Get Started with Daiki Media
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 dark:text-white">
            See How We&apos;ve Transformed Businesses Like Yours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white border-2 border-black rounded-3xl shadow-xl p-6 text-center transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
              >
                <h3 className="text-2xl font-semibold dark:text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="dark:text-gray-600 mb-6">{card.description}</p>
                <ul className="space-y-2 dark:text-gray-800">
                  <li className="font-medium">{card.point}</li>
                  <li className="font-medium">{card.points}</li>
                  <li className="font-medium">{card.pointss}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6th section */}
      <section className="py-10">
        <div className="w-full  mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center pb-[20px]">
            What Sets Daiki Media Apart?
          </h2>
          <div className="w-full text-center">
            <div className="flex flex-wrap  justify-center gap-2 mb-8">
              {processSteps.map((step) => (
                <button
                  key={step.title}
                  onClick={() => setActiveTab(step.title)}
                  className={`px-4 py-2 bg-black text-sm md:text-base rounded-full transition-colors duration-300 ${activeTab === step.title
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {step.title}
                </button>
              ))}
            </div>
            <div className="mt-8">
              {processSteps.map(
                (step) =>
                  activeTab === step.title && (
                    <div
                      key={step.title}
                      className="bg-white dark:text-black rounded-3xl shadow-lg p-6 transition-all duration-300 ease-in-out"
                    >
                      <h3 className="text-2xl font-bold mb-4"> {step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  )
              )}
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                {processSteps.map((step) => (
                  <div
                    key={step.title}
                    className={`  ${activeTab === step.title ? "bg-black" : "bg-gray-300"
                      }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7th Section */}
      <section className=" py-16">
        <div className="px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-12 dark:text-white">
              Busting Myths About SEO Agencies
            </h2>

            <div className="space-y-8">
              {myths.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-black rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-start p-6 bg-gray-50">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center dark:text-black text-2xl font-semibold mr-6">
                      X
                    </div>
                    <h2 className="text-xl font-semibold dark:text-gray-800">
                      {item.myth}
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="dark:text-gray-700 text-sm leading-relaxed">
                      {item.truth}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8th Section */}
      <section className="py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="conatainer mx-auto">
            <h2 className="text-4xl dark:text-black font-extrabold text-center mb-12">
              How Daiki Media Delivers Results
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-black transform skew-y-3 group-hover:skew-y-0 transition-transform duration-300 ease-in-out"></div>
                  <div className="relative bg-white border-2 border-black p-6 transform group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                    <span className="text-5xl font-bold text-black opacity-20 absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/4">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl dark:text-black font-bold mb-2">{step.title}</h3>
                    <p className="dark:text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <blockquote className="text-2xl dark:text-black   font-semibold italic max-w-3xl mx-auto relative">
                <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-6xl opacity-20">
                  &quot;
                </span>
                <span className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 text-6xl opacity-20">
                  &quot;
                </span>
                Our process is proven, repeatable, and designed to deliver
                consistent results.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials Section */}
      <section className="py-16">
        <div className="conatainer mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 dark:text-white">
            What Our Clients Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border-2 border-black shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                {/* Testimonial Quote */}
                <p className="dark:text-gray-600 italic mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Star Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                    <span className="text-xs text-gray-600">56X56</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm dark:text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10th Section */}
      <section className="mb-[150px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl dark:text-white font-bold mb-4">
            &quot;Choose the Best—Choose Daiki Media&quot;
          </h2>
          <p className="text-xl mb-8">
            Your business deserves the best SEO company to help it thrive. At
            Daiki Media, we don&apos;t just promise results—we deliver them.
            Join the hundreds of businesses that trust us to boost their online
            presence and drive sustainable growth.
          </p>
          <p className="text-black text-lg font-semibold leading-relaxed">
            Contact us today for a free consultation and SEO audit. Let&apos;s
            take your business to the top of the search results!
          </p>
        </div>
      </section>
    </div>
  );
}
