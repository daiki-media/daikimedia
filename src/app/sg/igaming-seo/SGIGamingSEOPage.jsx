"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DataTable } from "@/components/service-single/dataTable";
import { useState } from "react";
import {
  Search,
  FileText,
  Settings,
  Globe,
  BarChart2,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Trophy,
  TrendingUp,
  Users,
  Tag,
  Languages,
  Smartphone,
  Scale,
  Network,
  CircleCheck,
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

const COMPARISON_ROWS = {
  "rows": [
    {
      "factor": "Keyword Competition",
      "traditionalSEO": "Moderate to high",
      "singaporeIGamingSEO": "Extremely high"
    },
    {
      "factor": "Regulatory Laws",
      "traditionalSEO": "Minimal compliance requirements",
      "singaporeIGamingSEO": "Maximum compliance, varies by jurisdiction"
    },
    {
      "factor": "Linking",
      "traditionalSEO": "All backlinks allowed",
      "singaporeIGamingSEO": "Only high-authority links can be used"
    },
    {
      "factor": "Schema Markup",
      "traditionalSEO": "Optional, at discretion",
      "singaporeIGamingSEO": "Required, drives qualified user targeting"
    },
    {
      "factor": "Localisation",
      "traditionalSEO": "Optional",
      "singaporeIGamingSEO": "Essential for targeting regional markets"
    },
    {
      "factor": "Content Restrictions",
      "traditionalSEO": "Minimal restrictions",
      "singaporeIGamingSEO": "Strict advertising and gambling disclaimers required"
    }
  ],
}
const TECHNIQUES ={
  "rows": [
    {
      "factor": "Keyword Competition",
      "traditionalSEO": "Moderate to high",
      "singaporeIGamingSEO": "Extremely high"
    },
    {
      "factor": "Regulatory Laws",
      "traditionalSEO": "Minimal compliance requirements",
      "singaporeIGamingSEO": "Maximum compliance, varies by jurisdiction"
    },
    {
      "factor": "Linking",
      "traditionalSEO": "All backlinks allowed",
      "singaporeIGamingSEO": "Only high-authority links can be used"
    },
    {
      "factor": "Schema Markup",
      "traditionalSEO": "Optional, at discretion",
      "singaporeIGamingSEO": "Required, drives qualified user targeting"
    },
    {
      "factor": "Localisation",
      "traditionalSEO": "Optional",
      "singaporeIGamingSEO": "Essential for targeting regional markets"
    },
    {
      "factor": "Content Restrictions",
      "traditionalSEO": "Minimal restrictions",
      "singaporeIGamingSEO": "Strict advertising and gambling disclaimers required"
    }
  ],
}
const TOOLS = [
  {
    tool: "Semrush",
    purpose: "Keyword research, ranking tracking, site audit, and competitor gap analysis across all iGaming verticals",
  },
  {
    tool: "Screaming Frog",
    purpose: "Crawl your iGaming website to detect technical SEO issues, duplicate content, and internal linking gaps",
  },
  {
    tool: "Ahrefs",
    purpose: "Backlink analysis, domain authority benchmarking, and off-page SEO competitor profiling",
  },
  {
    tool: "Google Search Console",
    purpose: "Organic search performance, index coverage, and ranking data for every target market",
  },
  {
    tool: "Google My Business",
    purpose: "Local iGaming visibility management and local SEO performance tracking",
  },
  {
    tool: "Surfer SEO",
    purpose: "On-page SEO scoring, content quality optimisation, and keyword density analysis for iGaming content",
  },
  {
    tool: "Schema Pro / JSON-LD",
    purpose: "Schema markup implementation for casino game pages, bet odds, and review content",
  },
];

const SERVICES = [
  {
    icon: Search,
    title: "Online Casino SEO",
    subtitle: "Top-10 Rankings + Organic Traffic Growth",
    timeline: "60–120 Days",
    best: "Casino Operators & New Entrants",
    body: "Full-funnel keyword targeting, on-page optimisation, technical SEO, schema markup, and link acquisition — all built around Singapore's competitive casino search landscape and Remote Gambling Act compliance.",
  },
  {
    icon: TrendingUp,
    title: "Sports Betting SEO",
    subtitle: "Keyword Ranking + Bet Conversion Uplift",
    timeline: "90–150 Days",
    best: "Sportsbooks & Bet Operators",
    body: "Multi-market, multi-language campaigns covering English, Mandarin, and Malay. We target high-intent sports betting searches around football, horse racing, and major sporting events Singaporean players follow.",
  },
  {
    icon: Tag,
    title: "iGaming Affiliate SEO",
    subtitle: "Visibility Growth + Affiliate Conversion",
    timeline: "60–90 Days",
    best: "Affiliate Sites & Networks",
    body: "Topical authority building, commercial content strategy, and link acquisition from Singapore and regional iGaming publications. We help affiliates move from page two to page one on high-value casino and bet keywords.",
  },
  {
    icon: Globe,
    title: "Localised iGaming SEO",
    subtitle: "Local Rankings + Regional Traffic",
    timeline: "30–90 Days",
    best: "Multi-market Operators",
    body: "Hreflang implementation, Mandarin and Malay keyword research, localised landing pages, and Google Business Profile optimisation. Every target language gets its own focused strategy — not a word-for-word translation.",
  },
  {
    icon: BarChart2,
    title: "iGaming SEO Audit",
    subtitle: "Technical Audit Report + SEO Roadmap",
    timeline: "5–14 Days",
    best: "Sites Losing Rankings",
    body: "A full technical and content audit covering keyword positions, backlink health, Core Web Vitals, schema implementation, and a prioritised action plan. You get a clear picture of what is holding you back before any work begins.",
  },
  {
    icon: FileText,
    title: "Casino Content Strategy",
    subtitle: "Convert, Not Just Rank",
    timeline: "Ongoing",
    best: "All iGaming Verticals",
    body: "Content written for how Singaporean players actually search — game guides, operator comparisons, bonus pages, responsible gambling resources. Every piece is mapped to a keyword intent stage and written for both Google and the reader.",
  },
];

const WHY_POINTS = [
  {
    icon: Scale,
    title: "Singapore Remote Gambling Act",
    body: "The Remote Gambling Act 2014 makes most forms of online gambling illegal for Singapore residents unless operated by an exempt operator. Casino SEO in Singapore must be written carefully — every content decision carries compliance implications.",
  },
  {
    icon: Languages,
    title: "Multilingual Search Reality",
    body: "Singapore has four official languages: English, Mandarin, Malay, and Tamil. A strategy that only targets English misses a significant share of iGaming search volume. We research and target keyword sets across all three primary search languages.",
  },
  {
    icon: Network,
    title: "The Affiliate Ecosystem",
    body: "Review sites and comparison portals hold most top positions for Singapore iGaming keywords. Understanding how to compete with, and strategically leverage, that affiliate layer is core to what we do in this market.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Search Behaviour",
    body: "Singaporeans have one of the highest smartphone penetration rates in Asia. Most iGaming searches happen on mobile. Your site needs to load fast, feel local, and rank for the exact terms Singaporean players actually type.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "iGaming SEO Audit",
    body: "We review your current keyword positions, technical health, content gaps, backlink profile, and how your site compares to the top-ranking competitors in the Singapore market. You get a clear picture of what is holding you back and what to fix first.",
  },
  {
    num: "02",
    title: "Strategy and Roadmap",
    body: "Which keywords to target first. Which pages need to be created. Which technical issues are critical. What the link building timeline looks like. A specific document with milestones you can track — not vague plans.",
  },
  {
    num: "03",
    title: "Execution",
    body: "We execute across all three pillars simultaneously: technical fixes, content creation, and link acquisition. Monthly reporting shows exactly what moved, what did not, and why. Strategy adjusts based on real ranking data.",
  },
  {
    num: "04",
    title: "Compounding Growth",
    body: "Rankings compound over time. Pages that take six months to reach page one can hold that position for years. We manage the ongoing content and link programme that keeps your domain growing month on month.",
  },
];

const WHO = [
  {
    icon: Trophy,
    title: "Online Casino Operators",
    body: "Singapore-facing platforms and offshore casinos targeting Singaporean players. We understand the compliance constraints, multilingual requirements, and search behaviour that define this market.",
  },
  {
    icon: TrendingUp,
    title: "Sports Betting Platforms",
    body: "Football, horse racing, and international sports. Sports betting search volume in Singapore is significant and largely untapped through organic SEO. We map the keyword landscape and build the content to own it.",
  },
  {
    icon: Users,
    title: "iGaming Affiliates",
    body: "Review sites and comparison platforms competing for casino and betting keywords. We help affiliates build topical authority, scale content, and earn the links that move them from page two to page one.",
  },
  {
    icon: Tag,
    title: "White-Label Casino Brands",
    body: "New operators entering the Singapore market on a white-label licence. We build the SEO foundation from day one so you are not starting from scratch six months after launch.",
  },
];

const RESULTS = [
  { metric: "Organic traffic growth", result: "+214% in 8 months" },
  { metric: "Keywords ranked on page one", result: "3 to 47 in 6 months" },
  { metric: "High-intent casino terms", result: "Top 3 for 12 keywords" },
  { metric: "Time to first ranking movement", result: "6 to 8 weeks" },
];

const COMPARISON_FEATURES = [
  {
    feature: "iGaming Specialization",
    daiki: "Singapore-dedicated iGaming SEO team with industry experience",
    others: "General SEO agencies with no iGaming focus",
  },
  {
    feature: "Compliance Integration",
    daiki: "SEO built around Singapore Remote Gambling Act requirements",
    others: "SEO treated separately from compliance",
  },
  {
    feature: "Localised SEO",
    daiki: "Multi-language hreflang and local optimisation",
    others: "Single-market or generic international SEO",
  },
  {
    feature: "Link Building",
    daiki: "High-authority Singaporean iGaming and sports backlinks",
    others: "Generic directory links with low domain authority",
  },
  {
    feature: "Schema Markup",
    daiki: "Advanced schema for casino and bet content",
    others: "Basic schema or none at all",
  },
];

const PRICING = [
  {
    name: "Basic Plan",
    price: "SGD 1,111/month",
    tagline: "Ideal for startups or small businesses looking to establish an online presence.",
    features: [
      "Website with up to 5 pages",
      "Basic SEO setup (meta tags, keywords, sitemap)",
      "Responsive design (desktop & mobile-friendly)",
      "Email and chat support",
    ],
    highlight: false,
  },
  {
    name: "Standard Plan",
    price: "SGD 1,588/month",
    tagline: "Perfect for growing businesses looking to attract more customers.",
    features: [
      "Website with up to 10 pages",
      "Advanced SEO optimisation (on-page and technical SEO)",
      "Speed and performance optimisation",
      "Integration with third-party tools (Google Analytics, CRM)",
      "Monthly performance reports",
    ],
    highlight: true,
  },
  {
    name: "Premium Plan",
    price: "Custom Pricing",
    tagline: "Tailored for businesses that want a full-service digital transformation.",
    features: [
      "Custom website design and development (unlimited pages)",
      "Full-stack SEO (on-page, off-page, local SEO, and content strategy)",
      "E-commerce integration (if needed)",
      "Enterprise accounts and dedicated account manager",
    ],
    highlight: false,
  },
];

const FAQS = [
  {
    q: "What is iGaming SEO and how is it different from standard SEO?",
    a: "iGaming SEO is search engine optimisation built specifically for online casino, sports betting, and affiliate sites. It differs from standard SEO because competition is significantly higher, advertising rules are stricter, and Singapore has its own compliance requirements under the Remote Gambling Act 2014. Generic SEO strategies built for other markets will not work for Singapore operators.",
  },
  {
    q: "How long does it take to see ranking improvements from iGaming SEO?",
    a: "In the Singapore market, most operators begin to see measurable movement in search results within 60 to 90 days for lower-competition keywords. Primary casino and bet keyword rankings typically require 6 to 12 months of sustained SEO effort. Timelines depend on your current domain authority, keyword competition, and the depth of technical issues on your site.",
  },
  {
    q: "Is localised SEO necessary for Singapore iGaming operators?",
    a: "Yes. Singapore has four official languages and distinct search behaviour patterns. Without hreflang implementation, local keyword research for English, Mandarin, and Malay, and compliance with Singapore regulations, iGaming operators will consistently underperform competitors who have invested in market-specific SEO optimisation.",
  },
  {
    q: "What role does schema markup play in iGaming SEO?",
    a: "Schema markup is a critical technical SEO component for iGaming sites. Implementing the correct structured data types allows casino game pages, review content, and sports betting guides to appear as rich results in search results pages. Review schema, FAQ schema, and LocalBusiness schema are among the most impactful implementations for Singapore iGaming operators.",
  },
  {
    q: "How do you build backlinks for iGaming sites given the restrictions?",
    a: "Link building for iGaming sites requires a specialist approach because many mainstream publishers restrict casino and betting content. Daiki Media builds backlinks through relationships with sports media, iGaming news publications, responsible gambling organisations, and high-authority affiliate networks. Every link building campaign is vetted for compliance with Singapore advertising rules.",
  },
  {
    q: "What is the most important ranking factor for iGaming websites?",
    a: "Domain authority built through high-quality backlinks is consistently the most decisive ranking factor in the competitive iGaming industry. Combined with technical SEO infrastructure quality, content relevance, and mobile optimisation, a strong backlink profile enables operators and affiliates to compete for the highest-value casino, bet, and sports betting keywords.",
  },
  {
    q: "How does Singapore's Remote Gambling Act affect iGaming SEO?",
    a: "The Remote Gambling Act affects both content strategy and keyword selection. Operators must include appropriate responsible gambling messaging, and certain keywords must be paired with responsible gambling resources. Properly implemented, responsible gambling content is a trust signal that supports rather than undermines your SEO performance.",
  },
  {
    q: "Can you create iGaming content in Mandarin and Malay?",
    a: "Yes. We produce SEO-optimised content in English, Mandarin, and Malay. Our multilingual content is researched against keyword data specific to each language group's search behaviour in Singapore — not translated word-for-word from English, which consistently underperforms on both rankings and conversions.",
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
export default function SGIGamingSEOPage() {
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
            <li className="text-red-500 font-medium">Singapore iGaming SEO</li>
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
                  Specialist Singapore iGaming SEO
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl"
              >
                Singapore iGaming SEO{" "}
                <span className="text-red-500 italic">Proven Strategies</span>{" "}
                for Casino, Betting & Affiliate Sites
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                Singapore is one of the most competitive iGaming markets in Southeast Asia. Casino operators, sports betting platforms, and affiliate sites are all struggling to rank for the same keywords.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media builds data-driven iGaming SEO strategies specifically for Singapore — tailored to casino operators, sportsbooks, and affiliate networks who want to rank for high-intent search terms, attract quality organic traffic, and grow revenue without risking compliance issues.
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="mb-8 text-[15px] leading-relaxed text-gray-500">
                An iGaming SEO strategy built for a Malaysian casino will not work for a Singapore operator. The Remote Gambling Act, multilingual search behaviour, and strict advertising regulations make Singapore a market where generic strategies fail completely.
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
                className="mt-10 grid grid-cols-3 gap-3 border-t border-gray-100 pt-8"
              >
                {[
                  { num: "10+", label: "Years Digital Marketing Experience" },
                  { num: "500+", label: "iGaming Projects Delivered" },
                  { num: "100%", label: "Client Satisfaction Rate" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                    <p className="text-xl font-extrabold text-gray-900">{s.num}</p>
                    <p className="mt-1 text-[11px] leading-snug text-gray-500">{s.label}</p>
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
                alt="Singapore iGaming SEO Agency — Daiki Media"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Organic Growth</p>
              <p className="text-2xl font-extrabold text-red-500">+214%</p>
              <p className="text-xs text-gray-500">Campaign ROI in 8 months</p>
            </div>

            {/* floating badge */}
            <div className="absolute -right-4 top-6 flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <ShieldCheck size={16} className="text-green-500" />
              <p className="text-xs font-semibold text-gray-700">RGA Compliance-Safe SEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRADITIONAL VS IGAMING SEO ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <SectionLabel>Why It Is Different</SectionLabel>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Traditional SEO vs Singapore iGaming SEO
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
              Many factors — content restrictions, high keyword competition, localisation, and strict regulatory requirements — make Singapore iGaming SEO far more complex than standard SEO. Here is how they differ.
            </p>
          </motion.div>
            <DataTable  data={COMPARISON_ROWS}/>
        </div>
      </section>

      {/* ── WHY SINGAPORE ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
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
                Why Singapore iGaming SEO Requires<br className="hidden sm:block" />
                a Different Approach
              </h2>
              <p className="mb-14 max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Singapore is not a generic market. Search behaviour, language preferences, and strict advertising regulations make generic SEO strategies completely ineffective here.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* image */}
              <motion.div variants={fadeUp} custom={1} className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
                  <Image
                    src="/images/igaming-seo-agency-malaysia/Why Malaysia Market Section.webp"
                    alt="Why Singapore iGaming SEO requires a specialist approach"
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

      {/* ── LOCALISED ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
          <SectionLabel>Localisation</SectionLabel>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Singapore Localised iGaming SEO Techniques
          </h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
            Singapore has four official languages: English, Mandarin, Malay, and Tamil. Local searches are among the highest-converting traffic sources for casino operators and affiliates. Here is how we capture them.
          </p>
        </motion.div>
          <DataTable  data={TECHNIQUES}/>
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
                Our Singapore iGaming SEO Services
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Every engagement is built around your platform, your verticals, and your target audience in the Singapore market — not a generic package.
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
                    <div className="p-7">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                        <Icon size={20} />
                      </div>
                      <h3 className="mb-1 font-bold text-gray-900">{svc.title}</h3>
                      <p className="mb-2 text-xs font-semibold text-red-500">{svc.subtitle}</p>
                      <p className="mb-4 text-[14px] leading-relaxed text-gray-500">{svc.body}</p>
                      <div className="flex flex-wrap gap-3 border-t border-gray-50 pt-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-500">
                          <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {svc.timeline}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-[11px] font-medium text-red-500">
                          {svc.best}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TOOLS ───────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Toolset</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What Tools Daiki Media Uses for iGaming SEO Performance
              </h2>
              <p className="mb-12 max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Our Singapore iGaming SEO services are powered by a Google-preferred tool stack that covers every aspect of performance. Data without specialist interpretation produces strategies that miss the vitals of the iGaming market.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400 w-1/4">Tool</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOOLS.map((row, i) => (
                      <tr key={row.tool} className={i !== TOOLS.length - 1 ? "border-b border-gray-50" : ""}>
                        <td className="px-6 py-4 font-semibold text-gray-800">{row.tool}</td>
                        <td className="px-6 py-4 text-gray-500">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* CTA nudge */}
            <motion.div variants={fadeUp} custom={2} className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-gray-900">Ready to level up your iGaming SEO performance?</p>
                  <p className="mt-1 text-[14px] text-gray-500">We combine advanced tooling with deep sector knowledge to improve your rankings at an advanced level.</p>
                </div>
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-red-600"
                >
                  Contact Us <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CHALLENGES ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Common Challenges</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Singapore iGaming SEO Challenges — and How We Solve Them
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                These are the most common iGaming SEO challenges businesses encounter across casino, bet, affiliate, and operator engagements — and how Daiki Media resolves them.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  q: "Our casino site has strong content but poor ranking results.",
                  a: "Good content is important but it is only one part of the picture. In the competitive Singapore iGaming market, poor rankings are almost always caused by weak backlink authority, technical SEO issues running in the background, or missing schema markup that Google needs to understand your pages. Daiki Media looks at all three areas together and fixes them in one structured plan — not one at a time.",
                },
                {
                  q: "We operate in multiple markets but our visibility is weak outside our home market.",
                  a: "This is a localisation problem. If your site is not set up with the correct hreflang tags, local keywords for each market, and a properly optimised Google Business Profile, Google will not show your pages to users in other regions. Daiki Media builds Singapore-specific SEO frameworks for iGaming operators who need to rank locally and beyond — making sure every target market gets its own focused strategy.",
                },
                {
                  q: "Our affiliate site is losing ranking to newer competitors with higher domain authority.",
                  a: "Newer competitors with higher domain authority did not get there overnight — they invested in consistent, quality link building over time. Daiki Media builds a targeted backlink strategy focused on high-authority Singapore and regional iGaming publications. Combined with a content refresh and improved internal linking, this steadily rebuilds the ranking ground you have lost and protects it going forward.",
                },
                {
                  q: "We cannot see clear data on whether our SEO strategy is working.",
                  a: "If you cannot see clear data, you cannot make good decisions. Daiki Media provides monthly reports that track rankings, traffic, and conversions together — not just one number in isolation. Every metric is tied to a real business outcome so you always know exactly what your SEO investment is delivering and where to focus next.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.q}
                  variants={fadeUp}
                  custom={i}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50">
                    <span className="text-sm font-bold text-red-500">0{i + 1}</span>
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{item.q}</h3>
                  <p className="text-[14px] leading-relaxed text-gray-500">{item.a}</p>
                </motion.div>
              ))}
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
              <motion.div variants={fadeUp} custom={1} className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
                  <Image
                    src="/images/igaming-seo-agency-malaysia/Results Section Graphic.webp"
                    alt="Singapore iGaming SEO results — traffic and ranking data"
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
                Every engagement starts with understanding your platform and the Singapore market — not with a generic proposal.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  custom={i}
                  className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  {i < STEPS.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm">
                        <ArrowRight size={12} className="text-red-400" />
                      </div>
                    </div>
                  )}
                  <p className="mb-4 text-5xl font-extrabold leading-none text-gray-100">{step.num}</p>
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

      {/* ── WHY DAIKI MEDIA ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Businesses Select Daiki Media for Singapore iGaming SEO
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                With deep expertise in the Singaporean iGaming sector, a dedicated SEO team, and a proven track record across casino operators, sportsbooks, and affiliate sites, Daiki Media is the trusted partner for iGaming SEO success in Singapore.
              </p>
            </motion.div>

            {/* Trust pillars */}
            <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Search, title: "Specialized iGaming SEO", body: "Tailored strategies for casino, sports betting, and affiliate sites" },
                { icon: Globe, title: "Localized SEO", body: "Multi-language optimisation with hreflang and local keyword targeting" },
                { icon: ShieldCheck, title: "Compliance First", body: "SEO strategies built around Singapore's Remote Gambling Act requirements" },
                { icon: Settings, title: "Technical Excellence", body: "Schema markup, Core Web Vitals, and mobile optimisation as standard" },
              ].map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <motion.div
                    key={pt.title}
                    variants={fadeUp}
                    custom={i}
                    className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <h3 className="mb-1 font-semibold text-gray-900">{pt.title}</h3>
                    <p className="text-[13px] leading-relaxed text-gray-500">{pt.body}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Feature comparison table */}
            <motion.div variants={fadeUp} custom={4}>
              <h3 className="mb-6 text-xl font-bold text-gray-900">Daiki Media vs Other Agencies</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400 w-1/3">Feature</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-red-500 w-1/3">Daiki Media</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400 w-1/3">Other Companies</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON_FEATURES.map((row, i) => (
                        <tr key={row.feature} className={i !== COMPARISON_FEATURES.length - 1 ? "border-b border-gray-50" : ""}>
                          <td className="px-6 py-4 font-semibold text-gray-800">{row.feature}</td>
                          <td className="px-6 py-4 text-gray-700">
                            <span className="flex items-start gap-2">
                              <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0 text-green-500" />
                              {row.daiki}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-400">{row.others}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Numbers */}
            <motion.div variants={fadeUp} custom={5} className="mt-12 grid grid-cols-3 gap-6">
              {[
                { num: "10+", label: "Years of Digital Marketing Experience" },
                { num: "500+", label: "iGaming & Casino Marketing Projects" },
                { num: "100%", label: "Client Satisfaction Rate" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                  <p className="text-3xl font-extrabold text-red-500">{s.num}</p>
                  <p className="mt-1 text-[13px] text-gray-500">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12 text-center">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Pricing Plans
              </h2>
              <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-gray-500">
                Transparent pricing built for Singapore iGaming operators at every stage of growth.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3">
              {PRICING.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  custom={i}
                  className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "border-red-200 bg-white shadow-red-100/50 ring-2 ring-red-500"
                      : "border-gray-100 bg-white hover:shadow-md"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-red-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{plan.name}</h3>
                  <p className="mb-2 text-2xl font-extrabold text-red-500">{plan.price}</p>
                  <p className="mb-6 text-[13px] leading-relaxed text-gray-500">{plan.tagline}</p>
                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-gray-600">
                        <CircleCheck size={15} className="mt-0.5 flex-shrink-0 text-red-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://api.whatsapp.com/send?phone=601114850067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-[14px] font-semibold transition-all hover:shadow-md ${
                      plan.highlight
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "border border-gray-200 bg-white text-gray-700 hover:border-red-200 hover:text-red-500"
                    }`}
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
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
                Singapore iGaming SEO FAQs
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
              alt="Singapore iGaming SEO CTA background"
              fill
              className="object-cover object-right"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/85 via-45% to-transparent" />
          </div>
          <div className="relative z-10 p-10 sm:p-16">
            <div className="max-w-2xl p-8">
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Let's Talk About Your Singapore iGaming Organic Growth
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                If you are relying entirely on paid ads and affiliate deals to acquire players, you are at the mercy of platform policy changes and CPA negotiations. SEO is the channel that changes that equation.
              </p>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media has hands-on experience with iGaming SEO in the Singapore market. We know how the affiliate ecosystem works, how Google treats gambling content under Singapore's regulatory framework, how local players search across English, Mandarin, and Malay, and what it actually takes to move a casino site up the rankings.
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
                  Book Free Consultation
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
                  "Trusted by iGaming operators across Singapore and Southeast Asia",
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
      </section>

    </main>
  );
}
