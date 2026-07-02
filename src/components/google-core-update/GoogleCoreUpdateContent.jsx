'use client'
import { useState } from 'react'
import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import FallbackImage from '@/components/shared/FallbackImage'
import FaqItem from '@/components/shared/FaqItem'
import Link from 'next/link'

const GoogleCoreUpdateContent = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null)

  const handleFaqClick = (index) => {
    setActiveFaqIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const faqs = [
    {
      id: 1,
      
      question: "Is the December 2025 Core Update a penalty?",
      answer: "No. It is a ranking recalibration, not a punishment."
    },
    {
      id: 2,
      question: "Do I need to change my website if rankings dropped?",
      answer: "Only if genuine improvements are needed. Avoid reactive changes."
    },
    {
      id: 3,
      question: "How long does recovery take?",
      answer: "Weeks to months. Core updates reward sustained quality improvements."
    },
    {
      id: 4,
      question: "Should I delete low performing pages?",
      answer: "Only after careful evaluation. Blind deletions often cause more harm."
    },
    {
      id: 5,
      question: "Does E-E-A-T directly affect rankings?",
      answer: "It influences rankings through multiple trust and quality signals."
    },
    {
      id: 6,
      question: "Can technical SEO alone fix ranking drops?",
      answer: "No. Content quality and trust are the primary drivers."
    }
  ]

  return (
    <article className="relative pb-20 w-full">
      <div className="container relative">
        {/* Introduction Section */}
        <section className="relative mb-20 max-md:mb-12">
          <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          
          <FadeUpAnimation className="mb-12">
            <div className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 dark:border-borderColor-dark overflow-hidden">
                <FallbackImage
                  src="/images/google-december-2025-core-update/image123.jpg"
                  alt="Google December 2025 Core Update - SEO Strategy"
                  className="rounded w-full h-[400px] max-md:h-[300px] object-cover"
                  width={1200}
                  height={400}
                />
              </div>
            </div>
          </FadeUpAnimation>

          <FadeUpAnimation>
            <div className="rounded-2xl bg-primary-50 dark:bg-dark-200 p-6 md:p-8">
              <div className="text-center mb-6">
                <p className="section-tagline">Understanding the Update</p>
                <h2 className="max-w-2xl mx-auto">What the December 2025 Core Update Really Means</h2>
                </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
              </div>
                    <h3 className="text-lg font-semibold">What Changed</h3>
                  </div>
                  <p className="text-paragraph dark:text-paragraph-dark leading-relaxed">
                        Some websites saw rankings drop without obvious errors. Others gained visibility quietly, without dramatic changes. This happened because core updates do not reward tactics. They reward alignment with how Google now understands user expectations.
                      </p>
                    </div>

                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                  </div>
                    <h3 className="text-lg font-semibold">Our Approach</h3>
                  </div>
                  <p className="text-paragraph dark:text-paragraph-dark leading-relaxed">
                    At DaikiMedia, we work with businesses across Malaysia and APAC that want stability, not guesswork. This guide explains what the December 2025 Core Update really means, how it affects websites, and what actions actually matter if your goal is sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* What Is the December 2025 Google Core Update */}
        <section className="relative mb-20 max-md:mb-12">
          <FadeUpAnimation>
            <div className="rounded-2xl bg-primary-50 dark:bg-dark-200 p-6 md:p-8">
              <div className="text-center mb-6">
                <p className="section-tagline">Core Update Explained</p>
                <h2 className="max-w-2xl mx-auto">What Is the December 2025 Google Core Update</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Broad Update</h3>
                  </div>
                  <p className="text-paragraph dark:text-paragraph-dark leading-relaxed">
                        The December 2025 Core Update is a broad algorithm update that reassesses rankings across all industries and regions. It does not target a single technical issue like spam or speed.
                        </p>
                      </div>

                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Quality Focus</h3>
                  </div>
                  <p className="text-paragraph dark:text-paragraph-dark leading-relaxed">
                    Google evaluates whether websites genuinely deserve to be recommended today. This update is not about fixing loopholes. It is about quality.
                  </p>
                </div>

                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
              </div>
                    <h3 className="text-lg font-semibold">People First</h3>
                </div>
                  <p className="text-paragraph dark:text-paragraph-dark leading-relaxed">
                    Google has stated clearly that there is nothing special creators need to do if they are already producing helpful, people first content.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary font-semibold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  If your website helps users make better decisions, you are moving in the right direction.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Why Rankings Change Section */}
        <section className="relative mb-20 max-md:mb-12">
          <FadeUpAnimation>
            <div className="rounded-2xl bg-primary-50 dark:bg-dark-200 p-6 md:p-8">
              <div className="text-center mb-6">
                <p className="section-tagline">Ranking Changes</p>
                <h2 className="max-w-2xl mx-auto">Why Rankings Change Even When Nothing Is Broken</h2>
                <p className="mt-4 text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                        Many businesses panic after a core update because they assume rankings dropped due to a mistake.
                      </p>
                <p className="mt-4 text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                        In reality, core updates are comparative. Google is not judging your site against rules. It is judging your site against alternatives competing for the same intent.
                      </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Rankings Can Change Because</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Competitors improved clarity or depth
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Other sites better matched user intent
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Google refined how it interprets satisfaction
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      User expectations evolved
                    </li>
                        </ul>
                      </div>

                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Key Insight</h3>
                  </div>
                  <p className="text-paragraph dark:text-paragraph-dark leading-relaxed">
                        A ranking drop does not automatically mean your content is bad. It often means something else is now more helpful.
                      </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary font-semibold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                          This is where experienced guidance matters more than reactive fixes.
                        </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* What Google Is Reassessing Section */}
        <section className="relative mb-20 max-md:mb-12">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[575px] text-center">
              <p className="section-tagline">Google's Evaluation Criteria</p>
              <h2>What Google Is Reassessing in December 2025</h2>
            </div>
          </FadeUpAnimation>

          <div className="relative z-10 grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {/* Overall Site Quality */}
            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Overall Site Quality</h3>
                  <p className="mb-4">
                    Google increasingly evaluates quality at the site level, not just the page level.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Thin or outdated articles</li>
                    <li>Duplicate or overlapping pages</li>
                    <li>Low value archives</li>
                    <li>Content created for traffic</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>

            {/* Content Satisfaction */}
            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Content Satisfaction</h3>
                  <p className="mb-4">
                    Keyword usage is no longer enough. Pages that perform well typically:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Answer the main question clearly</li>
                    <li>Address follow up concerns</li>
                    <li>Help users compare options</li>
                    <li>Reduce the need to search again</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>

            {/* Trust and Credibility */}
            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Trust & Credibility</h3>
                  <p className="mb-4">
                    The December 2025 update reinforces E-E-A-T:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Experience</li>
                    <li>Expertise</li>
                    <li>Authoritativeness</li>
                    <li>Trustworthiness</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>
          </div>

          {/* E-E-A-T Table Section */}
          <FadeUpAnimation className="mt-12">
            <div className="mb-8 overflow-hidden rounded-medium">
              <FallbackImage
                src="/images/google-december-2025-core-update/image456.jpg"
                alt="E-E-A-T Framework: Experience, Expertise, Authoritativeness, Trustworthiness"
                className="rounded w-full h-[300px] object-cover"
                width={800}
                height={300}
              />
            </div>
            <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Component</th>
                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">Term</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-dark-200">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">E</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Experience</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">E</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Expertise</td>
                      </tr>
                      <tr className="bg-white dark:bg-dark-200">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">A</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Authoritativeness</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">T</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">Trustworthiness</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-6">
                  Google is placing more weight on whether content reflects real world experience and whether users can clearly see who is behind the information.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Technical Foundations Section */}
        <section className="relative mb-20 max-md:mb-12">
          <FadeUpAnimation className="mb-12">
            <div className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 dark:border-borderColor-dark overflow-hidden">
                <FallbackImage
                  src="/images/google-december-2025-core-update/image789.jpg"
                  alt="Technical SEO Foundations - Page Speed, Mobile Friendliness, Core Web Vitals"
                  className="rounded w-full h-[350px] object-cover"
                  width={1000}
                  height={350}
                />
              </div>
            </div>
          </FadeUpAnimation>

          <FadeUpAnimation>
            <div className="rounded-2xl bg-primary-50 dark:bg-dark-200 p-6 md:p-8">
              <div className="text-center mb-6">
                  <p className="section-tagline">Technical SEO</p>
                <h2 className="max-w-2xl mx-auto">Technical Foundations That Can Hold Back Good Content</h2>
                <p className="mt-4 text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                  Technical SEO does not replace content quality, but poor technical foundations can suppress even excellent content.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Sites Should Aim For Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Sites Should Aim For</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Fast loading of main content
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Stable layouts without sudden shifts
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Smooth interaction
                    </li>
                </ul>
                </div>

                {/* Common Mobile Issues Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Common Mobile Issues</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Text that is hard to read
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Buttons placed too close together
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Intrusive popups
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Broken mobile layouts
                    </li>
                </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary font-semibold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Mobile usability is now a requirement, not a bonus.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Content Quality Section */}
        <section className="relative mb-20 max-md:mb-12">
          <FadeUpAnimation>
            <div className="rounded-2xl bg-primary-50 dark:bg-dark-200 p-6 md:p-8">
              <div className="text-center mb-6">
                  <p className="section-tagline">Content Strategy</p>
                <h2 className="max-w-2xl mx-auto">Why Content Quality Is Now a Site Wide Signal</h2>
                <p className="mt-4 text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                  Google no longer evaluates content in isolation. Content should exist to help users, not to manipulate search engines.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Ask Honestly Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
            </div>
                    <h3 className="text-lg font-semibold">Ask Honestly</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Does this page solve a real problem?
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Would a user trust this advice?
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Does it add value beyond competitors?
                    </li>
                </ul>
                </div>

                {/* High Performing Pages Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                </div>
                    <h3 className="text-lg font-semibold">High Performing Pages Include</h3>
              </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Original insights
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Real examples
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Practical decision guidance
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Clear explanations of pros and cons
                    </li>
                </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary font-semibold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Simply rephrasing existing content is no longer enough.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Content Pruning Section */}
        <section className="relative mb-20 max-md:mb-12">
          <FadeUpAnimation>
            <div className="rounded-2xl bg-primary-50 dark:bg-dark-200 p-6 md:p-8">
              <div className="text-center mb-6">
                  <p className="section-tagline">Content Optimization</p>
                <h2 className="max-w-2xl mx-auto">Pruning Low Value Pages Without Damaging Rankings</h2>
                <p className="mt-4 text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                  Content pruning is not about deleting aggressively. It is about improving quality ratios.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Low Value Pages Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Low Value Pages Often Have</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      No traffic
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      No backlinks
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      No conversions
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      No unique value
                    </li>
                </ul>
                </div>

                {/* However Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">However</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Pages with backlinks should be redirected
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Niche pages should be enhanced
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Historical content may be archived
                    </li>
                </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary font-semibold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  At DaikiMedia, pruning is always strategic, never emotional.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Strengthening E-E-A-T Section */}
        <section className="relative mb-20 max-md:mb-12">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[575px] text-center">
              <p className="section-tagline">Building Trust</p>
              <h2>Strengthening E-E-A-T in 2025</h2>
            </div>
          </FadeUpAnimation>

          <div className="relative z-10 grid grid-cols-3 gap-8 max-md:grid-cols-1">
            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Clear Authorship</h3>
                  <p className="mb-4">
                    Every article should clearly show who wrote it, why they are qualified, and how they gained experience.
                  </p>
                  <p className="font-semibold">
                    Author bios and About pages are no longer optional.
                  </p>
                </div>
              </div>
            </FadeUpAnimation>

            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Real Experience</h3>
                  <p className="mb-4">
                    Experience matters more than theory. Strong signals include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>First hand observations</li>
                    <li>Photos from actual work</li>
                    <li>Descriptions of testing</li>
                    <li>Transparent limitations</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>

            <FadeUpAnimation>
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                <div className="h-full rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                  <h3 className="mb-2.5">Trust Signals</h3>
                  <p className="mb-4">
                    Trust is reinforced through:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Visible contact information</li>
                    <li>Privacy and terms pages</li>
                    <li>HTTPS security</li>
                    <li>Accurate claims</li>
                    <li>Responsible handling of reviews</li>
                  </ul>
                </div>
              </div>
            </FadeUpAnimation>
          </div>
        </section>

        {/* Structured Data Section */}
        <section className="relative mb-20 max-md:mb-12">
          <FadeUpAnimation>
            <div className="rounded-2xl bg-primary-50 dark:bg-dark-200 p-6 md:p-8">
              <div className="text-center mb-6">
                <p className="section-tagline">Search Visibility</p>
                <h2 className="max-w-2xl mx-auto">Structured Data and Search Visibility</h2>
                <p className="mt-4 text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                        Structured data does not directly increase rankings, but it improves visibility.
                      </p>
                      </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Schema Helps Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Schema Helps</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Search engines understand context
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Pages qualify for rich results
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Listings earn higher click through rates
                    </li>
                        </ul>
                      </div>

                {/* Warning Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Important Warning</h3>
                  </div>
                  <div className="rounded-medium bg-primary-50 dark:bg-primary-900/20 p-4 border border-primary-200 dark:border-primary-800">
                    <p className="font-semibold text-primary dark:text-primary leading-relaxed">
                          Schema must always reflect visible content. Misuse can cause penalties.
                        </p>
                      </div>
                  <p className="mt-4 text-paragraph dark:text-paragraph-dark">
                        As AI driven search features expand, structured content becomes even more important.
                      </p>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Recovery Time Section */}
        <section className="relative mb-20 max-md:mb-12">
          <FadeUpAnimation>
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="max-md:col-span-full md:col-span-6">
                <div className="max-w-[550px]">
                  <p className="section-tagline mb-3">Recovery Timeline</p>
                  <h2 className="mb-6">How Long Recovery Takes After a Core Update</h2>
                </div>
              </div>
              <div className="max-md:col-span-full md:col-span-6">
                <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
                  <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-6">
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-paragraph-light dark:text-[#A1A49D]">
                        Recovery is usually gradual.
                      </p>
                      <div>
                        <p className="font-semibold mb-3 text-gray-900 dark:text-white">Key realities:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-paragraph-light dark:text-[#A1A49D]">
                          <li>Major improvements often align with the next core update</li>
                          <li>Incremental gains may appear earlier</li>
                          <li>Google systems refresh continuously</li>
                        </ul>
                      </div>
                      <div className="rounded-medium bg-primary-50 dark:bg-primary-900/20 p-6 border border-primary-200 dark:border-primary-800">
                        <p className="font-semibold text-primary dark:text-primary text-lg leading-relaxed">
                          Waiting without action is riskier than improving deliberately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

       

        {/* DaikiMedia Partner Section */}
        <section className="relative mb-20 max-md:mb-12">
          <FadeUpAnimation>
            <div className="rounded-2xl bg-primary-50 dark:bg-dark-200 p-6 md:p-8">
              <div className="text-center mb-6">
                  <p className="section-tagline">Your Partner</p>
                <h2 className="max-w-2xl mx-auto">DaikiMedia as Your Core Update Partner</h2>
                <p className="mt-4 text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                  If your website dropped after the December 2025 Core Update, the real question is not: "How do I fix SEO?" It is: "How do I become the result Google wants to recommend?"
                </p>
                <p className="mt-4 text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                  At DaikiMedia, we do not chase algorithms. We help businesses build websites that remain relevant as algorithms evolve.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Strategic Partner Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Strategic Partner for Brands That Want</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Long term ranking stability
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Content built for decisions, not keywords
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      SEO aligned with conversion and trust
                    </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Protection against future core updates
                    </li>
                </ul>
                </div>

                {/* Core Update Impact Reviews Card */}
                <div className="bg-white dark:bg-dark-100 rounded-medium p-6 shadow-box border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary dark:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Core Update Impact Reviews</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      What actually changed
                  </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      Which pages matter
                  </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      What should be improved, kept, or removed
                  </li>
                    <li className="flex items-center gap-3 text-paragraph dark:text-paragraph-dark">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      What is safe to ignore
                  </li>
                </ul>
                </div>
              </div>

              <div className="mt-6 text-center space-y-4">
                <p className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary font-semibold">
                  No panic. No templates. No generic advice.
                </p>
                <p className="text-paragraph dark:text-paragraph-dark max-w-2xl mx-auto">
                  If you want to understand what Google is really evaluating on your website, DaikiMedia is your partner.
                </p>
              </div>
            </div>
          </FadeUpAnimation>
        </section>

        {/* Final Perspective */}
        <section className="relative pb-20 max-md:overflow-hidden max-md:pb-25 max-md:pt-25">
          <div className="container relative">
            <div className="absolute -bottom-[442px] left-1/2 -z-10 flex -translate-x-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <div className="absolute -bottom-[350px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
            <FadeUpAnimation>
              <div className="mx-auto text-center">
                <p className="section-tagline mb-3">Final Perspective</p>
                <h2 className="mx-auto mb-5 max-w-[800px] text-[48px] font-semibold max-lg:text-[32px]">
                  Build for People First, Let Google Follow
                </h2>
                <p className="mx-auto mb-12 max-w-[600px] max-lg:mt-6 text-lg leading-relaxed">
                  The December 2025 Core Update did not reward shortcuts. It rewarded clarity, experience, and trust.
                </p>
                <p className="mx-auto mb-12 max-w-[600px] text-lg leading-relaxed">
                  Websites that help users make better decisions will continue to win. Those that chase tricks will continue to reset.
                </p>
                <div className="mx-auto mb-12 max-w-[700px] rounded-medium bg-primary-50 dark:bg-primary-900/20 p-8 border border-primary-200 dark:border-primary-800">
                  <p className="text-xl font-semibold text-primary dark:text-primary leading-relaxed">
                    If your goal is sustainable growth, build for people first and let Google follow.
                  </p>
                </div>
                <Link href="/contact" className="btn">
                  Get Your Core Update Review
                </Link>
                <ul className="mx-auto mt-20 flex max-w-[815px] items-center justify-between max-lg:mt-5 max-lg:flex-col max-lg:gap-5">
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
                    <p>Free Core Update Impact Review</p>
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
                    <p>No Panic, No Templates</p>
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
                    <p>Sustainable Growth Strategy</p>
                  </li>
                </ul>
              </div>
            </FadeUpAnimation>
          </div>
        </section>
         {/* FAQ Section */}
         <section className="relative mb-20 max-md:mb-12">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full bg-primary-200/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>

          <FadeUpAnimation>
            <div className="mx-auto mb-12 max-w-[830px] text-center">
              <p className="section-tagline mb-3">Common Questions</p>
              <h2>Frequently Asked Questions</h2>
            </div>
          </FadeUpAnimation>

          <div className="relative z-10 mx-auto max-w-[830px]">
            <div className="[&>*:not(:last-child)]:mb-5">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeFaqIndex === faq.id}
                  onClick={() => handleFaqClick(faq.id)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

export default GoogleCoreUpdateContent
