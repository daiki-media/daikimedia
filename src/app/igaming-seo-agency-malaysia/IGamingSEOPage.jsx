"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Search,
  FileText,
  Link2,
  Settings,
  Globe,
  BarChart2,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Scale,
  Languages,
  Network,
  Trophy,
  TrendingUp,
  Users,
  ShieldCheck,
  Tag,
} from "lucide-react";

// ─── animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

// ─── data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Search,
    title: "iGaming Keyword Research",
    subtitle: "Player Intent First",
    body: "We map keywords by intent stage. Awareness searches like \"how to play baccarat online Malaysia.\" Comparison searches like \"best live casino Malaysia.\" Ready-to-play searches like \"casino top up Touch n Go.\" Each stage needs different content and different optimisation. We also surface the Bahasa Malaysia keyword variants your competitors are ignoring.",
    image: "/images/igaming-seo-agency-malaysia/Service IconiGaming Keyword Research.webp",
    imageAlt: "iGaming keyword research service",
  },
  {
    icon: FileText,
    title: "Casino Content Strategy",
    subtitle: "Convert, Not Just Rank",
    body: "We plan and write content that reflects how Malaysian players actually think about gambling. The games they prefer: baccarat, slots, 4D, sports betting on EPL and Harimau Malaya matches. The payment methods they trust: DuitNow, Touch n Go, GrabPay, FPX. Every piece is written to rank and convert, not just fill a content calendar.",
    image: "/images/igaming-seo-agency-malaysia/Casino Content Strategy.webp",
    imageAlt: "Casino content strategy",
  },
  {
    icon: Link2,
    title: "Compliance-Safe Link Building",
    subtitle: "Authority Without Risk",
    body: "We build links through legitimate outreach. iGaming publications. Regional digital marketing sites. Finance and tech blogs. Relevant Malaysian media. Every link we secure improves your authority without putting your domain at risk. We also manage your existing link profile, identifying and disavowing toxic links dragging down your rankings.",
    image: "/images/igaming-seo-agency-malaysia/Compliance-Safe Link Building.webp",
    imageAlt: "Compliance-safe link building",
  },
  {
    icon: Settings,
    title: "Technical SEO for iGaming",
    subtitle: "Platform-Grade Precision",
    body: "Casino sites are technically complex. Multiple game category pages, thousands of slot titles, live dealer sections, payment pages, language switchers. We audit and fix site speed, crawl depth, canonical tags on duplicate game pages, hreflang for English and Bahasa Malaysia versions, structured data for rich results, and Core Web Vitals.",
    image: "/images/igaming-seo-agency-malaysia/Technical SEO.webp",
    imageAlt: "Technical SEO for iGaming platforms",
  },
  {
    icon: Globe,
    title: "Multilingual SEO",
    subtitle: "English & Bahasa Malaysia",
    body: "Hreflang tag implementation. Separate keyword research for Bahasa Malaysia. Translation written for search, not just converted from English. Localised landing pages that feel native to each audience. A Bahasa Malaysia page that sounds like a word-for-word translation will not rank or convert.",
    image: "/images/igaming-seo-agency-malaysia/Multilingual SEO.webp",
    imageAlt: "Multilingual SEO English Bahasa Malaysia",
  },
  {
    icon: BarChart2,
    title: "Affiliate & Competitor Gap Analysis",
    subtitle: "Steal the Rankings",
    body: "We analyse exactly which keywords affiliates rank for that you do not, which pages are pulling their traffic, and what their content structure looks like. Then we build a plan to take those positions, either by creating better content on your own domain or by strategically partnering with affiliate sites in your favour.",
    image: "/images/igaming-seo-agency-malaysia/Affiliate and Competitor Gap Analysis.webp",
    imageAlt: "Affiliate and competitor gap analysis",
  },
];

const RESULTS = [
  { metric: "Organic traffic growth", result: "+214% in 8 months" },
  { metric: "Keywords ranked on page one", result: "3 to 47 in 6 months" },
  { metric: "High-intent casino terms", result: "Top 3 for 12 keywords" },
  { metric: "Time to first movement", result: "6 to 8 weeks" },
];

const STEPS = [
  {
    num: "01",
    title: "iGaming SEO Audit",
    body: "We look at your current keyword positions, technical health, content gaps, backlink profile, and how your site compares to the top-ranking competitors in the Malaysian market. You get a clear picture of what is holding you back and what to fix first.",
  },
  {
    num: "02",
    title: "Strategy and Roadmap",
    body: "Which keywords to target first. Which pages need to be created. Which technical issues are critical versus optional. What the link building timeline looks like. No vague plans. A specific document with milestones you can track.",
  },
  {
    num: "03",
    title: "Execution",
    body: "We execute across all three pillars simultaneously: technical fixes, content creation, and link acquisition. You get monthly reporting that shows exactly what moved, what did not, and why. We adjust the strategy based on real ranking data, not assumptions.",
  },
  {
    num: "04",
    title: "Compounding Growth",
    body: "iGaming SEO is not a one-time project. Rankings compound over time. Pages that take six months to reach page one can hold that position for years. We manage the ongoing content and link programme that keeps your domain growing month on month.",
  },
];

const WHO = [
  {
    icon: Trophy,
    title: "Online Casino Operators",
    body: "Malaysian-facing platforms and offshore casinos targeting Malaysian players. We understand the dual-language requirement and the compliance constraints that come with this market.",
  },
  {
    icon: TrendingUp,
    title: "Sports Betting Platforms",
    body: "EPL, Malaysian Super League, international football. Sports betting search volume in Malaysia is significant and largely untapped through organic SEO. We map the keyword landscape and build the content to own it.",
  },
  {
    icon: Users,
    title: "iGaming Affiliates",
    body: "Review sites and comparison platforms competing for casino and betting keywords. We help affiliates build topical authority, scale content, and earn the links that move them from page two to page one.",
  },
  {
    icon: Tag,
    title: "White-Label Casino Brands",
    body: "New operators entering the Malaysian market on a white-label licence. We build the SEO foundation from day one so you are not starting from scratch six months in.",
  },
];

const FAQS = [
  {
    q: "Is iGaming SEO legal in Malaysia?",
    a: "Yes. SEO itself is completely legal. It is the act of optimising a website for search engines. The legal complexity in Malaysia applies to operating a gambling business, not to marketing or SEO services. We work within Google's content guidelines and the Malaysian regulatory context to ensure your SEO strategy does not create compliance exposure.",
  },
  {
    q: "How long does iGaming SEO take to show results?",
    a: "Honest answer: it depends on your starting point. Sites with no existing authority, technical issues, and no content typically see initial ranking movements within 6 to 8 weeks and meaningful traffic growth within 4 to 6 months. Established sites with a clean technical foundation move faster. We set realistic milestones during the audit phase so you know what to expect at each stage.",
  },
  {
    q: "What makes casino SEO different from regular SEO?",
    a: "Three things. First, the competition is extreme. You are competing against casino operators with large budgets and affiliate sites that have been building authority for years. Second, content compliance is critical. What you can say about gambling products is restricted, and getting it wrong can attract regulatory or algorithmic penalties. Third, the keyword landscape is unique and requires deep niche knowledge.",
  },
  {
    q: "Do you work with offshore casino operators?",
    a: "Yes. Most online casino platforms targeting Malaysian players operate as offshore entities. We understand the legal structure and the SEO implications, including how to build a presence in Malaysia without making claims that conflict with local regulations.",
  },
  {
    q: "Can you write casino content in Bahasa Malaysia?",
    a: "Yes. We produce SEO-optimised content in both English and Bahasa Malaysia. Our Bahasa Malaysia content is written natively, not translated from English, and is researched against BM keyword data specific to Malaysian player search behaviour.",
  },
  {
    q: "What results can we realistically expect in 6 months?",
    a: "For a new site or a site starting from a low base, a realistic 6-month outcome includes 10 to 20 target keywords on page one, measurable organic traffic growth (typically 80 to 150% from baseline), a cleaner technical profile, and a backlink profile that is growing month on month. For established sites with existing authority, progress is faster.",
  },
  {
    q: "How do you handle Google algorithm updates for casino sites?",
    a: "iGaming sites get hit harder than most by core updates, particularly the Helpful Content Updates that target thin, AI-generated, or affiliate-stuffed content. Our strategy is built around content that demonstrates genuine expertise: accurate game information, transparent operator comparisons, and player-first writing.",
  },
  {
    q: "What does iGaming SEO cost?",
    a: "Our iGaming SEO engagements typically start from RM 4,500 per month for smaller operators and scale based on scope of work. Number of game verticals, content volume, link building intensity, and whether multilingual SEO is included all affect the final number. The audit is always free and includes a specific cost estimate based on your actual situation.",
  },
];

const WHY_POINTS = [
  {
    icon: Smartphone,
    title: "Mobile-First Search Behaviour",
    body: "Over 80% of Malaysians own a smartphone. Most online casino searches happen on mobile, during commutes, lunch breaks, or evenings. Your site needs to load fast, feel local, and rank for the exact terms Malaysian players type, not what a global keyword tool assumes they type.",
  },
  {
    icon: Scale,
    title: "The Regulatory Landscape",
    body: "Under the Common Gaming Houses Act 1953 and the Betting Act 1953, most forms of gambling are restricted. The only licensed land-based casino is Resorts World Genting. Offshore platforms exist in a grey area. Casino SEO in Malaysia has to be written carefully with compliance at every step.",
  },
  {
    icon: Languages,
    title: "Bilingual Search Reality",
    body: "A significant portion of Malaysian players search in Bahasa Malaysia. Phrases like \"kasino dalam talian\" or \"pertaruhan bola sepak\" pull in entirely different audiences than their English equivalents. Most agencies ignore this. We do not.",
  },
  {
    icon: Network,
    title: "The Affiliate Ecosystem",
    body: "Review sites and comparison portals hold most of the top positions for iGaming keywords in Malaysia. Understanding how to compete with, and sometimes leverage, that affiliate layer is core to what we do.",
  },
];

// ─── sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500">
      <span className="inline-block h-0.5 w-5 rounded bg-red-500" />
      {children}
    </p>
  );
}

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-semibold text-gray-900">{q}</span>
        <ChevronDown
          size={18}
          className={`mt-0.5 flex-shrink-0 text-red-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-[15px] leading-relaxed text-gray-600">{a}</p>
      </motion.div>
    </motion.div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────
export default function IGamingSEOPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li><Link href="/#seo-services" className="hover:text-red-500 transition-colors">SEO Services</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-red-500 font-medium">iGaming SEO Agency Malaysia</li>
          </ol>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* left */}
          <div>
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-600">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  Specialist iGaming SEO
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl"
              >
                iGaming SEO Agency{" "}
                <span className="text-red-500 italic">Malaysia</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                Most casino and betting brands in Malaysia are invisible on Google. Not because their product is bad. Because their SEO is built for the wrong market.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media is a dedicated iGaming SEO agency in Malaysia. We help casino operators, sports betting platforms, and iGaming affiliates rank for the keywords that actually bring players, not just traffic.
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="mb-8 text-[15px] leading-relaxed text-gray-500">
                Organic SEO is the only sustainable growth channel in iGaming. Paid ads get restricted, banned, or blocked overnight. Rankings compound. Book a free audit and let us show you exactly where your site is losing ground.
              </motion.p>

              <motion.div variants={fadeUp} custom={5} className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                >
                  Book a Free iGaming Audit
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/case-studies/igaming-lottery-seo"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-600 transition-colors hover:text-red-500"
                >
                  View Case Study <ArrowRight size={15} />
                </Link>
              </motion.div>

              {/* stats */}
              <motion.div
                variants={fadeUp}
                custom={6}
                className="mt-10 flex flex-wrap gap-8 border-t border-gray-100 pt-8"
              >
                {[
                  { num: "+214%", label: "Organic traffic growth" },
                  { num: "47+", label: "Page 1 keywords" },
                  { num: "6–8 wks", label: "First ranking movement" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-extrabold text-gray-900">{s.num}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* right – hero image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200/80">
              <Image
                src="/images/igaming-seo-agency-malaysia/igaming-seo-agency-malaysia-hero.webp"
                alt="iGaming SEO Agency Malaysia — Daiki Media"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              {/* subtle overlay gradient for depth */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Campaign ROI</p>
              <p className="text-2xl font-extrabold text-red-500">+214%</p>
              <p className="text-xs text-gray-500">Organic growth in 8 months</p>
            </div>

            {/* floating badge top-right */}
            <div className="absolute -right-4 top-6 flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <ShieldCheck size={16} className="text-green-500" />
              <p className="text-xs font-semibold text-gray-700">Compliance-Safe SEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY MALAYSIA ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Why It Matters</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why iGaming SEO in Malaysia<br className="hidden sm:block" />
                Requires a Different Approach
              </h2>
              <p className="mb-14 max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Malaysia is not a generic market. It has specific characteristics that change how iGaming SEO needs to be done here.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* image */}
              <motion.div variants={fadeUp} custom={1} className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
                  <Image
                    src="/images/igaming-seo-agency-malaysia/Why Malaysia Market Section.webp"
                    alt="Why iGaming SEO in Malaysia requires a specialist approach"
                    width={600}
                    height={500}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                </div>
              </motion.div>

              {/* points */}
              <div className="space-y-8">
                {WHY_POINTS.map((pt, i) => {
                  const Icon = pt.icon;
                  return (
                    <motion.div
                      key={pt.title}
                      variants={fadeUp}
                      custom={i + 1}
                      className="flex gap-5"
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="mb-1.5 font-semibold text-gray-900">{pt.title}</h3>
                        <p className="text-[15px] leading-relaxed text-gray-500">{pt.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                iGaming SEO Services That Actually Move the Needle
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                We do not offer SEO packages. We build a strategy around your platform, your game verticals, and your target player profile.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.title}
                    variants={fadeUp}
                    custom={i}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-0.5"
                  >
                    {/* Service image */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-50/60">
                      <Image
                        src={svc.image}
                        alt={svc.imageAlt}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Card body */}
                    <div className="p-7">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                        <Icon size={20} />
                      </div>
                      <h3 className="mb-1 font-bold text-gray-900">{svc.title}</h3>
                      {svc.subtitle && (
                        <p className="mb-2 text-xs font-semibold text-red-500">{svc.subtitle}</p>
                      )}
                      <p className="text-[14px] leading-relaxed text-gray-500">{svc.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Proof</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What Our iGaming Clients Have Achieved
              </h2>
              <p className="mb-14 max-w-xl text-[15px] leading-relaxed text-gray-500">
                We do not promise rankings. We build the systems that produce them.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* Results image */}
              <motion.div variants={fadeUp} custom={1} className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
                  <Image
                    src="/images/igaming-seo-agency-malaysia/Results Section Graphic.webp"
                    alt="iGaming SEO results — traffic and ranking data"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2}>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Metric</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RESULTS.map((r, i) => (
                        <tr key={r.metric} className={i !== RESULTS.length - 1 ? "border-b border-gray-50" : ""}>
                          <td className="px-6 py-5 font-medium text-gray-700">{r.metric}</td>
                          <td className="px-6 py-5 font-bold text-red-500">{r.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link
                  href="/case-studies/igaming-lottery-seo"
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-red-500 transition-colors hover:text-red-600"
                >
                  Read the full iGaming case study <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                From Audit to Rankings
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-gray-500">
                Every engagement starts with understanding your platform, not with a generic proposal.
              </p>
            </motion.div>

            {/* Process image banner */}
            <motion.div variants={fadeUp} custom={0} className="relative mb-10 overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
              <Image
                src="/images/igaming-seo-agency-malaysia/Process Section Graphic.webp"
                alt="iGaming SEO process — audit to rankings"
                width={1200}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  custom={i}
                  className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* connector line between cards (desktop only) */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm">
                        <ArrowRight size={12} className="text-red-400" />
                      </div>
                    </div>
                  )}
                  <p className="mb-4 text-5xl font-extrabold leading-none text-gray-100">
                    {step.num}
                  </p>
                  <h3 className="mb-2 font-bold text-gray-900">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-gray-500">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Who We Serve</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Built for iGaming Operators Who Depend on Organic Traffic
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-gray-500">
                If you are paying for every single player through paid ads and affiliate CPA deals, SEO is the channel that changes your unit economics.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {WHO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i}
                    className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-gray-500">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="grid gap-0 lg:grid-cols-2 lg:gap-x-16">
              <div className="rounded-2xl border border-gray-100 bg-white px-6 shadow-sm">
                {FAQS.slice(0, 4).map((faq, i) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-gray-100 bg-white px-6 shadow-sm lg:mt-0">
                {FAQS.slice(4).map((faq, i) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i + 4} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/igaming-seo-agency-malaysia/Closing CTA Background.webp"
                alt="igaming seo agency malaysai cta background"
                fill
                className="object-cover object-right"
                aria-hidden="true"
              />
              {/* white → transparent gradient keeps the copy readable on the left while revealing the art on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/85 via-45% to-transparent" />
            </div>
            <div className="relative z-10 p-10 sm:p-16">
              <div className="max-w-2xl p-8">
                <SectionLabel>Get Started</SectionLabel>
                <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Let's Talk About Your Casino's Organic Growth
                </h2>
                <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                  If you are relying entirely on paid ads and affiliate deals to acquire players, you are at the mercy of platform policy changes and CPA negotiations. SEO is the channel that changes that equation.
                </p>
                <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                  Daiki Media has hands-on experience with iGaming SEO in the Malaysian market. We know how the affiliate ecosystem works, how Google treats gambling content, how Malaysian players search, and what it actually takes to move a casino site up the rankings.
                </p>
                <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                  The audit is free. It covers your current ranking positions, technical issues, content gaps, and a realistic view of what is achievable. No commitment required.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="https://api.whatsapp.com/send?phone=601114850067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                  >
                    Book Your Free iGaming Audit
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/our-seo-results"
                    className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-500 transition-colors hover:text-red-500"
                  >
                    View iGaming Results <ArrowRight size={15} />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-6">
                  {[
                    "Trusted by iGaming operators across Malaysia and Southeast Asia",
                    "Free audit, no commitment required",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-[13px] text-gray-400">
                      <CheckCircle2 size={14} className="flex-shrink-0 text-red-400" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        {/* </div> */}
      </section>

    </main>
  );
}