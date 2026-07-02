"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import FallbackImage from "@/components/shared/FallbackImage";

/* animated counter */
function AnimatedNumber({ target }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(String(target).replace(/[^0-9.]/g, ""));
    if (isNaN(numeric)) {
      setDisplay(target);
      return;
    }
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(ease * numeric));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {typeof display === "number" ? display.toLocaleString() : display}
    </span>
  );
}

/* eyebrow label */
function Eyebrow({ children }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2.5 mb-3"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-8 h-0.5 bg-red-500 rounded-full" />
      <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
        {children}
      </span>
    </motion.div>
  );
}

/* fade-up animation wrapper */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* main component */
export default function CaseStudyContent({ caseStudy }) {
  const firstImg = caseStudy.thumbnail && caseStudy.thumbnail !== "" ? caseStudy.thumbnail : "/images/blog/blog-fallback-img.webp";
  const secondImg = caseStudy.featuredImage || "/images/blog/blog-fallback-img.webp";
  const thirdImg = caseStudy.featuredImage2 || "/images/blog/blog-fallback-img.webp";

  return (
    <article className="w-full py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* ── HERO SECTION ── */}
        <FadeUp className="mb-20 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>{caseStudy.niche}</Eyebrow>
              <h1 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                {caseStudy.h1 || caseStudy.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl">
                {caseStudy.excerpt}
              </p>
              {caseStudy.period && (
                <div className="inline-block px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-300">
                  {caseStudy.period}
                </div>
              )}
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
                <FallbackImage
                  src={firstImg}
                  alt={caseStudy.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </FadeUp>

        {/* ── AT A GLANCE TABLE ── */}
        {caseStudy.atAGlance && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>At a glance</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.atAGlance.title}
            </h2>
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="hidden md:grid grid-cols-3 bg-gray-900 dark:bg-gray-950 text-white text-xs font-bold uppercase tracking-wider">
                <div className="px-6 py-4 col-span-1">{caseStudy.atAGlance.columns[0]}</div>
                <div className="px-6 py-4 col-span-1 border-l border-gray-700">{caseStudy.atAGlance.columns[1]}</div>
                <div className="px-6 py-4 col-span-1 border-l border-gray-700">{caseStudy.atAGlance.columns[2]}</div>
              </div>

              {caseStudy.atAGlance.rows.map((row, i) => (
                <motion.div
                  key={i}
                  className="grid md:grid-cols-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <div className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                    {row.metric}
                  </div>
                  <div className="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm md:text-base border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
                    {row.before}
                  </div>
                  <div className="px-6 py-4 text-red-600 dark:text-red-400 font-bold text-sm md:text-base border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
                    {row.after}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        )}

        {/* ── BACKGROUND ── */}
        {caseStudy.background && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Background</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.background.title}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 md:p-10 shadow-sm hover:shadow-md transition">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {caseStudy.background.content}
              </p>
            </div>
          </FadeUp>
        )}

        {/* ── INITIAL SITUATION ── */}
        {caseStudy.initialSituation && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Starting point</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.initialSituation.title}
            </h2>
            {caseStudy.initialSituation.content && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {caseStudy.initialSituation.content}
              </p>
            )}
            {caseStudy.initialSituation.points && (
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.initialSituation.points.map((pt, i) => (
                  <FadeUp key={i} delay={i * 0.07}>
                    <div className="flex gap-4 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{pt}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            )}
          </FadeUp>
        )}

        {/* ── AUDIT FINDINGS ── */}
        {caseStudy.auditFindings && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Audit findings</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.auditFindings.title}
            </h2>
            {caseStudy.auditFindings.content && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {caseStudy.auditFindings.content}
              </p>
            )}
            {caseStudy.auditFindings.points && (
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.auditFindings.points.map((pt, i) => (
                  <FadeUp key={i} delay={i * 0.07}>
                    <div className="flex gap-4 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/10 transition">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{pt}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            )}
          </FadeUp>
        )}

        {/* ── CONTEXT SECTION ── */}
        {caseStudy.contextSection && (
          <FadeUp className="mb-20 lg:mb-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Eyebrow>Context</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
                  {caseStudy.contextSection.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.contextSection.content}
                </p>
              </motion.div>
              {secondImg && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
                >
                  <FallbackImage
                    src={secondImg}
                    alt="Context illustration"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              )}
            </div>
          </FadeUp>
        )}

        {/* ── STRATEGY ── */}
        {caseStudy.strategy && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Strategy</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.strategy.title}
            </h2>
            {caseStudy.strategy.content && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                {caseStudy.strategy.content}
              </p>
            )}
            {caseStudy.strategy.pillars && (
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.strategy.pillars.map((pillar, i) => (
                  <FadeUp key={i} delay={i * 0.1}>
                    <div className="border-l-3 border-l-red-500 bg-white dark:bg-gray-800 rounded-r-xl border border-l-0 border-gray-200 dark:border-gray-700 p-7 hover:shadow-lg transition">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/40 flex items-center justify-center">
                          <span className="text-red-700 dark:text-red-300 font-bold text-sm">{i + 1}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      {pillar.points && (
                        <ul className="space-y-2.5">
                          {pillar.points.map((p, j) => (
                            <li key={j} className="flex gap-3">
                              <span className="text-red-500 flex-shrink-0 mt-1">
                                <svg className="w-5 h-5 text-red-500" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M2 2L5 5L2 8M5 2L8 5L5 8" />
                                </svg>
                              </span>
                              <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                {p}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </FadeUp>
                ))}
              </div>
            )}
          </FadeUp>
        )}

        {/* ── EXECUTION ── */}
        {caseStudy.execution && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Execution</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.execution.title}
            </h2>
            {caseStudy.execution.content && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {caseStudy.execution.content}
              </p>
            )}
            {caseStudy.execution.points && (
              <div className="space-y-4">
                {caseStudy.execution.points.map((pt, i) => (
                  <FadeUp key={i} delay={i * 0.06}>
                    <div className="flex gap-4 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/10 transition">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{pt}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            )}
          </FadeUp>
        )}

        {/* ── TIMELINE ── */}
        {caseStudy.timeline && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Timeline</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.timeline.title}
            </h2>
            {caseStudy.timeline.content && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                {caseStudy.timeline.content}
              </p>
            )}
            {caseStudy.timeline.months && (
              <div className="relative pl-8 md:pl-12">
                {/* timeline line */}
                <div className="absolute left-0 top-3 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-500/20 rounded-full" />

                <div className="space-y-6">
                  {caseStudy.timeline.months.map((m, i) => (
                    <FadeUp key={i} delay={i * 0.08}>
                      <div className="relative">
                        {/* dot */}
                        <div className="absolute -left-6 md:-left-8 top-2 w-4 h-4 rounded-full bg-red-500 border-3 border-white dark:border-gray-900 shadow-md" />

                        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition">
                          <div className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">
                            {m.month}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            {m.focus}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                            {m.actions}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            )}
          </FadeUp>
        )}

        {/* ── TOP PERFORMING PAGE ── */}
        {caseStudy.topPerformingPage && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Top performing page</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.topPerformingPage.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
              {thirdImg && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="hidden md:block h-96"
                >
                  <FallbackImage
                    src={thirdImg}
                    alt="Top page"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
              <div className="bg-white dark:bg-gray-800 p-8 md:p-10 flex flex-col justify-center gap-6">
                <div>
                  <span className="inline-block px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-300 mb-4">
                    {caseStudy.topPerformingPage.pageName}
                  </span>
                </div>
                {caseStudy.topPerformingPage.metrics && (
                  <div className="space-y-4">
                    {caseStudy.topPerformingPage.metrics.map((m, i) => (
                      <motion.div
                        key={i}
                        className="flex items-baseline gap-3 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-2xl md:text-3xl font-black text-red-600 dark:text-red-400 flex-shrink-0">
                          {m.value}
                        </span>
                        <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                          {m.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
                {caseStudy.topPerformingPage.summary && (
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed pt-4">
                    {caseStudy.topPerformingPage.summary}
                  </p>
                )}
              </div>
            </div>
          </FadeUp>
        )}

        {/* ── RESULTS ── */}
        {caseStudy.results && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Results</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.results.title}
            </h2>
            {caseStudy.results.content && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                {caseStudy.results.content}
              </p>
            )}

            {caseStudy.results.metrics && (
              <>
                {caseStudy.results.metrics[0]?.previous ? (
                  /* comparison table */
                  <div className="overflow-x-auto mb-8 rounded-xl border border-gray-200 dark:border-gray-700">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-900 dark:bg-gray-950 text-white">
                          <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-l border-gray-700">Previous</th>
                          <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-l border-gray-700">Current</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800">
                        {caseStudy.results.metrics.map((m, i) => (
                          <tr key={i} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-sm md:text-base">{m.label}</td>
                            <td className="px-6 py-4 text-gray-600 dark:text-gray-400 text-sm md:text-base border-l border-gray-200 dark:border-gray-700">{m.previous}</td>
                            <td className="px-6 py-4 text-red-600 dark:text-red-400 font-bold text-sm md:text-base border-l border-gray-200 dark:border-gray-700">{m.current}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  /* metric cards */
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {caseStudy.results.metrics.map((m, i) => (
                      <FadeUp key={i} delay={i * 0.08}>
                        <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 p-8 bg-white dark:bg-gray-800 hover:shadow-lg transition before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-red-500 before:to-amber-500">
                          <div className="text-4xl md:text-5xl font-black text-red-600 dark:text-red-400 mb-2">
                            <AnimatedNumber target={m.value} />
                          </div>
                          <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                            {m.label}
                          </div>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                )}
              </>
            )}

            {caseStudy.results.summary && (
              <div className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg p-6 md:p-8">
                <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-relaxed">
                  {caseStudy.results.summary}
                </p>
              </div>
            )}
          </FadeUp>
        )}

        {/* ── BUSINESS IMPACT ── */}
        {caseStudy.businessImpact && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Business impact</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.businessImpact.title}
            </h2>
            {caseStudy.businessImpact.content && (
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {caseStudy.businessImpact.content}
              </p>
            )}
            {caseStudy.businessImpact.points && (
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.businessImpact.points.map((pt, i) => (
                  <FadeUp key={i} delay={i * 0.07}>
                    <div className="flex gap-4 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/10 transition">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{pt}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            )}
          </FadeUp>
        )}

        {/* ── INSIGHTS ── */}
        {caseStudy.insights && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>Key insights</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.insights.title}
            </h2>
            {caseStudy.insights.points && (
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.insights.points.map((pt, i) => (
                  <FadeUp key={i} delay={i * 0.07}>
                    <div className="flex gap-4 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4M12 8h.01" />
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{pt}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            )}
          </FadeUp>
        )}

        {/* ── ONGOING WORK ── */}
        {caseStudy.ongoingWork && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>{caseStudy.slug}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.ongoingWork.title}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 md:p-10 shadow-sm">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {caseStudy.ongoingWork.content}
              </p>
            </div>
          </FadeUp>
        )}

        {/* ── FAQ ── */}
        {caseStudy.faq && (
          <FadeUp className="mb-20 lg:mb-32">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">
              {caseStudy.faq.title}
            </h2>
            <div className="space-y-0 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {caseStudy.faq.items.map((item, i) => (
                <FadeUp
                  key={i}
                  delay={i * 0.06}
                  className={`px-6 md:px-8 py-6 md:py-7 bg-white dark:bg-gray-800 ${
                    i < caseStudy.faq.items.length - 1
                      ? "border-b border-gray-200 dark:border-gray-700"
                      : ""
                  }`}
                >
                  <p className="font-bold text-gray-900 dark:text-white mb-3 text-base md:text-lg">
                    {item.question}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        )}

        {/* ── CTA ── */}
        {caseStudy.cta && (
          <FadeUp>
            {thirdImg ? (
              /* image with overlay */
              <div className="relative rounded-2xl overflow-hidden h-96 md:h-[500px]">
                <FallbackImage
                  src={thirdImg}
                  alt="Call to action"
                  width={1200}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/75 to-gray-900/40 flex flex-col items-center justify-center text-center px-6">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-widest text-white mb-4">
                    Ready to grow?
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                    {caseStudy.cta.title}
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">
                    {caseStudy.cta.content}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-500 hover:bg-red-600 text-gray-900 font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    Book a strategy session
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ) : (
              /* dark bg with pattern */
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 dark:bg-gray-950 p-12 md:p-16 text-center">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C6A2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-widest text-white mb-4">
                    Let's work together
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                    {caseStudy.cta.title}
                  </h2>
                  <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                    {caseStudy.cta.content}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-500 hover:bg-red-600 text-gray-900 font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    Contact our team
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </FadeUp>
        )}

      </div>
    </article>
  );
}