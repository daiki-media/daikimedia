"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { DataTable } from "@/components/service-single/dataTable";
import {
  Search,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  Settings,
  Globe,
  Link2,
  MapPin,
  TrendingUp,
  CircleCheck,
  Smartphone,
  Users,
  FileText,
  Zap,
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

// ─── DataTable data ───────────────────────────────────────────────────────────
const RANKING_FACTORS_TABLE = {
  rows: [
    {
      factor: "Relevance",
      meaning: "Is your content about what people searched for?",
      impactOnRanking:
        'If someone searches "SEO Singapore" your site must be about SEO for Singapore',
    },
    {
      factor: "Authority",
      meaning: "Do other trusted websites link to yours?",
      impactOnRanking: 'Backlinks tell Google "this website is trustworthy"',
    },
    {
      factor: "User Experience",
      meaning: "Does your site load fast? Is it mobile-friendly?",
      impactOnRanking:
        "75% of Singapore users browse on mobile — slow sites get ranked lower",
    },
    {
      factor: "Content Quality",
      meaning: "Is your content helpful and original?",
      impactOnRanking: "Copied or thin content gets buried by Google",
    },
    {
      factor: "Technical Health",
      meaning: "Is your website code clean and organised?",
      impactOnRanking:
        "Technical issues prevent Google from crawling your site properly",
    },
  ],
};

const SEO_PROCESS_TABLE = {
  rows: [
    {
      ourFocus: "Keyword Research",
      whatWeDo: "Find the exact keywords Singaporeans search for your business",
      howItBenefits: "Target the right audience with the right intent",
    },
    {
      ourFocus: "On-Page SEO",
      whatWeDo: "Optimise your website content, titles, and structure",
      howItBenefits: "Google understands what your site is about",
    },
    {
      ourFocus: "Technical SEO",
      whatWeDo: "Fix backend issues slowing your site or preventing ranking",
      howItBenefits: "Fast sites rank higher — especially on mobile",
    },
    {
      ourFocus: "Local SEO",
      whatWeDo: "Optimise Google My Business, local citations, reviews",
      howItBenefits: "Essential for any Singapore business",
    },
    {
      ourFocus: "Link Building",
      whatWeDo: "Secure quality backlinks from Singapore sources",
      howItBenefits: "Builds authority Google respects",
    },
    {
      ourFocus: "Competitor Analysis",
      whatWeDo: "Understand what competitors rank for and why",
      howItBenefits: "Know exactly what to beat",
    },
  ],
};

// ─── static data ─────────────────────────────────────────────────────────────
const WHY_GENERIC_FAILS = [
  {
    icon: Globe,
    title: "They Do Not Understand Singapore's Market",
    body: "Generic agencies apply strategies that worked in Malaysia or Australia and hope they work here too. Singapore users search differently, prefer different content, and have different buying behaviour. One-size-fits-all SEO does not work.",
  },
  {
    icon: Search,
    title: "They Miss Local Keywords",
    body: 'A generic agency might optimise for "digital marketing services" when Singaporeans actually search for "digital marketing agency Singapore" or "best SEO company SG". Missing local intent keywords means missing customers.',
  },
  {
    icon: MapPin,
    title: "They Ignore Google My Business",
    body: "Local businesses in Singapore rank through Google My Business, but generic agencies often skip this or do it poorly. Your GMB profile is as important as your website for local rankings.",
  },
  {
    icon: TrendingUp,
    title: "They Cannot Compete with Singapore Specialists",
    body: "When you work with a generic agency, your SEO is competing against specialists who live and breathe the Singapore market. You are at a disadvantage from day one.",
  },
];

const CASE_STUDIES = [
  {
    client: "Nexus Clinic",
    industry: "Aesthetic Clinic — Kuala Lumpur",
    challenge:
      "Nexus Clinic aimed to improve its online presence for treatments like skin rejuvenation, acne solutions, and anti-aging procedures. Despite offering advanced treatments, their online visibility was limited and they struggled to rank against established aesthetic clinics.",
    approach:
      "Content-driven SEO strategy supported by AI Optimisation (AIO) for platforms like ChatGPT and Google AI, combined with strengthened Local SEO to improve visibility across KL and nearby high-intent search areas.",
    stats: [
      { num: "4.6x", label: "Organic Traffic Growth" },
      { num: "35+", label: "Keywords on Page 1" },
      { num: "168%", label: "Increase in Patient Enquiries" },
    ],
  },
  {
    client: "Doctor On Call",
    industry: "Online Pharmacy & Telehealth — Malaysia",
    challenge:
      "Doctor On Call is a growing online pharmacy and telehealth platform offering consultations, medicines, and healthcare services. Despite strong demand, their online visibility was limited and they struggled to rank for competitive pharmacy and healthcare queries.",
    approach:
      "Content-driven SEO strategy with AIO (AI Optimisation) to align with modern search behaviour, strengthened Local SEO strategies, and optimisation to appear in both Google search and AI-driven platforms like ChatGPT and Google.",
    stats: [
      { num: "4.3x", label: "Organic Traffic Growth" },
      { num: "45+", label: "Keywords on Page 1" },
      { num: "172%", label: "Increase in Online Orders" },
    ],
  },
];

const PRICING = [
  {
    name: "Lite SEO",
    price: "640 SGD",
    altPrice: "RM 2,000 / month",
    tagline: "Best for businesses starting to improve rankings and search presence",
    features: [
      "Target Keywords: Up to 15",
      "Technical SEO Audit and fixes",
      "On-page optimisation (up to 8 pages)",
      "Local SEO and Google Business Profile setup",
      "Basic keyword strategy and tracking",
      "Foundational content recommendations",
      "Weekly performance reports",
    ],
    highlight: false,
  },
  {
    name: "Growth SEO",
    price: "1,600 SGD",
    altPrice: "RM 5,000 / month",
    tagline: "Built for businesses ready to compete and grow consistently",
    features: [
      "Target Keywords: Up to 35",
      "Full on-page SEO and content optimisation",
      "Technical SEO improvements and site structure",
      "Content briefs and SEO blog strategy (4 per month)",
      "Link building campaigns for authority growth",
      "Local SEO and conversion-focused improvements",
      "AI SEO integration (AEO + GEO strategies)",
      "Optimisation for AI search platforms (ChatGPT, Gemini, Google AI)",
      "Weekly performance reports",
      "Dedicated account manager",
    ],
    highlight: true,
  },
  {
    name: "Advanced SEO",
    price: "2,200 SGD",
    altPrice: "RM 7,000 / month",
    tagline: "For businesses aiming for strong market positioning and long-term growth",
    features: [
      "Target Keywords: 60+",
      "Advanced technical SEO and site architecture optimisation",
      "Full content strategy and ongoing blog production",
      "High-authority backlink acquisition",
      "Internal linking and topical authority building",
      "Advanced AEO and GEO implementation",
      "AI search optimisation across multiple platforms",
      "Schema markup and structured data implementation",
      "Conversion-focused SEO improvements",
      "Competitor and keyword gap analysis",
      "Weekly performance reports + strategy calls",
      "Dedicated SEO strategist",
    ],
    highlight: false,
  },
];

const FAQS = [
  {
    q: "What does an SEO agency in Singapore do?",
    a: "An SEO agency in Singapore helps improve your website's rankings on Google, increase organic traffic from Singaporean searches, and attract real customers who are actively looking for what you offer. In Singapore's competitive market, a good agency also handles local optimisation, multilingual SEO, and compliance with Singapore's advertising regulations.",
  },
  {
    q: "How long does SEO take to show results in Singapore?",
    a: "Most SEO campaigns in Singapore start showing improvements within 60 to 90 days for lower-competition keywords. Highly competitive keywords like \"online casino Singapore\" or \"best dentist Singapore\" typically take 3 to 6 months. The timeline depends on your industry, current rankings, and how much competition you face.",
  },
  {
    q: "Is SEO better than paid ads for long-term growth in Singapore?",
    a: "SEO and paid ads work differently. SEO provides long-term, consistent traffic that keeps coming even when you stop paying — making it cheaper over time. Paid ads start immediately but stop the moment your budget runs out. The best approach for Singapore businesses is combining both — paid ads for immediate visibility, SEO for long-term sustainable growth.",
  },
  {
    q: "Can SEO help my business appear in AI search results in Singapore?",
    a: "Yes. With proper content structure and optimisation, your website can appear in AI-driven search platforms like ChatGPT, Google AI, and Gemini — not just traditional Google search. This is becoming increasingly important in Singapore's competitive market.",
  },
  {
    q: "Do I need ongoing SEO or is one-time SEO enough?",
    a: "SEO works best as an ongoing strategy. Google's algorithm changes regularly, competitors keep improving their SEO, and new keywords emerge constantly. One-time SEO gets you started, but ongoing SEO keeps you ranking, adapts to changes, and protects your position against competitors.",
  },
];

const STATS = [
  { num: "88%", label: "Singaporeans use the internet (IMDA 2024)" },
  { num: "75%", label: "SG searches happen on mobile (Google Trends 2024)" },
  { num: "10+", label: "Years of Digital Marketing Experience" },
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
export default function SGSEOServicesPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li><Link href="/seo-services" className="hover:text-red-500 transition-colors">SEO Services</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-red-500 font-medium">Best SEO Service Agency Singapore</li>
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
                  Singapore SEO Specialists
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl"
              >
                Best SEO Service Agency{" "}
                <span className="text-red-500 italic">Singapore</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                Singapore's digital market is moving fast. Every day, thousands of Singaporeans search Google for products and services they need. If your business is not showing up in these results, you are losing customers to competitors who are already ranking.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media builds SEO strategies specifically for Singapore businesses — whether you run an ecommerce store, a service business, a healthcare clinic, or a digital product. We understand the Singapore market, the Singapore audience, and exactly what it takes to rank in a competitive local market.
              </motion.p>

              <motion.div variants={fadeUp} custom={4} className="mb-8 flex flex-wrap gap-3">
                {["Ecommerce", "Service Businesses", "Healthcare Clinics", "Digital Products"].map((t) => (
                  <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                    {t}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={5} className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                >
                  Get Free SEO Audit
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/our-seo-results"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-600 transition-colors hover:text-red-500"
                >
                  See Our Results <ArrowRight size={15} />
                </Link>
              </motion.div>

              {/* stats */}
              <motion.div
                variants={fadeUp}
                custom={6}
                className="mt-10 grid grid-cols-3 gap-3 border-t border-gray-100 pt-8"
              >
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                    <p className="text-xl font-extrabold text-gray-900">{s.num}</p>
                    <p className="mt-1 text-[11px] leading-snug text-gray-500">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200/80">
              <Image
                src="/images/igaming-seo-agency-malaysia/igaming-seo-agency-malaysia-hero.webp"
                alt="Best SEO Service Agency Singapore — Daiki Media"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Internet Usage</p>
              <p className="text-2xl font-extrabold text-red-500">88%</p>
              <p className="text-xs text-gray-500">Singaporeans online (IMDA 2024)</p>
            </div>

            <div className="absolute -right-4 top-6 hidden sm:flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <ShieldCheck size={16} className="text-green-500" />
              <p className="text-xs font-semibold text-gray-700">Singapore Market Specialists</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SEO OVERVIEW ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>SEO Overview</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What Is SEO and Why Does Your Singapore Business Need It?
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                SEO stands for Search Engine Optimisation — the process of making your website more visible on Google so real customers can find you when they search.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <motion.div variants={fadeUp} custom={1} className="space-y-5">
                <p className="text-[15px] leading-relaxed text-gray-600">
                  SEO stands for Search Engine Optimisation. In simple words, it means making your website more visible on Google so that when people search for products or services you offer, your website shows up in the results.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Think of Google as a massive library with billions of websites. When someone searches for something, Google automatically picks the most relevant websites and shows them first. SEO is the process of telling Google your site is relevant — so it appears higher in the results.
                </p>

                {/* why SG needs it */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-bold text-gray-900">Why Every Business in Singapore Needs SEO</h3>
                  <ul className="space-y-3">
                    {[
                      "When a Singaporean wants something, the first thing they do is search Google",
                      "Over 75% of Google searches in Singapore happen on mobile phones (Google Trends, Singapore, 2024)",
                      "Around 88% of Singaporeans use the internet — one of the highest rates in the world (IMDA Singapore, 2024)",
                      "SEO brings long-term customers and revenue without ongoing ad spend",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-gray-600">
                        <CircleCheck size={15} className="mt-0.5 flex-shrink-0 text-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* right – service icons */}
              <motion.div variants={fadeUp} custom={2}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Search, title: "Keyword Research", body: "Find what Singaporeans actually search for in your category" },
                    { icon: Settings, title: "Technical SEO", body: "Fix issues preventing Google from crawling and ranking your site" },
                    { icon: FileText, title: "Content Strategy", body: "Create content that ranks and converts Singapore visitors" },
                    { icon: Link2, title: "Link Building", body: "Build authority through quality Singapore-relevant backlinks" },
                    { icon: MapPin, title: "Local SEO", body: "Dominate Google Maps and local search results in Singapore" },
                    { icon: Zap, title: "AI SEO (AEO/GEO)", body: "Appear on ChatGPT, Gemini, and Google AI answers" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                          <Icon size={17} />
                        </div>
                        <h4 className="mb-1 text-sm font-bold text-gray-900">{item.title}</h4>
                        <p className="text-[12px] leading-relaxed text-gray-500">{item.body}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ── RANKING FACTORS ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Ranking Factors</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How Google Decides Which Websites to Show
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                After every search, Google reviews websites through 100+ factors and ranks them. Here are the most important factors every Singapore business must understand.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable data={RANKING_FACTORS_TABLE} />
      </section>

      {/* ── WHY GENERIC SEO FAILS ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Why Generic Fails</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Generic SEO Fails in Singapore
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Most SEO agencies prefer traditional methods to rank for Singapore-specific content, but fail because of a lack of understanding of the market and its regulations.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {WHY_GENERIC_FAILS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i}
                    className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                      <p className="text-[14px] leading-relaxed text-gray-500">{item.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA nudge */}
            <motion.div variants={fadeUp} custom={4} className="mt-10 rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-gray-900">Ready to boost your Singapore business?</p>
                  <p className="mt-1 text-[14px] text-gray-500">Work with a team that actually understands the Singapore market, its audience, and its search behaviour.</p>
                </div>
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-red-600"
                >
                  Get Free Audit <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SEO PROCESS TABLE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Daiki Media's Singapore SEO Process
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                We go beyond basic SEO services. Daiki Media is an SEO agency focused on helping businesses improve rankings, reach the right audience, and grow through search, AI platforms, and answer-based results. Here are our focused areas for providing best results.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={SEO_PROCESS_TABLE}
          ctaButton="Explore Our Best Digital Marketing Agency"
          ctaLink="/contact"
        />
      </section>

      {/* ── CASE STUDIES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Success Stories</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Multiple Business Success Stories Through Expert SEO
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Real results from real businesses who trusted Daiki Media to grow their organic presence.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
              {CASE_STUDIES.map((cs, i) => (
                <motion.div
                  key={cs.client}
                  variants={fadeUp}
                  custom={i}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  {/* top accent */}
                  <div className="h-1.5 bg-gradient-to-r from-red-500 to-red-300" />
                  <div className="p-5 sm:p-8">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-500">{cs.industry}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{cs.client}</h3>

                    <div className="mb-4">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">Challenge</p>
                      <p className="text-[14px] leading-relaxed text-gray-500">{cs.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">Approach</p>
                      <p className="text-[14px] leading-relaxed text-gray-500">{cs.approach}</p>
                    </div>

                    {/* stats */}
                    <div className="flex flex-wrap gap-4 border-t border-gray-50 pt-6">
                      {cs.stats.map((s) => (
                        <div key={s.label} className="flex-1 min-w-[80px] text-center rounded-xl bg-red-50 py-4 px-3">
                          <p className="text-xl font-extrabold text-red-500">{s.num}</p>
                          <p className="mt-1 text-[11px] text-gray-500">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={2} className="mt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-red-500 transition-colors hover:text-red-600"
              >
                View all case studies <ArrowRight size={15} />
              </Link>
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
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Singapore SEO Pricing Plans
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Transparent, results-focused pricing built for Singapore businesses at every stage of growth.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PRICING.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  custom={i}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "border-red-200 bg-white shadow-red-100/50 ring-2 ring-red-500 shadow-lg"
                      : "border-gray-100 bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-red-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="mb-1 text-lg font-bold text-gray-900">{plan.name}</h3>
                  <p className="mb-1 text-2xl font-extrabold text-red-500">{plan.price}<span className="text-sm font-normal text-gray-400"> /month</span></p>
                  <p className="mb-1 text-[12px] text-gray-400">{plan.altPrice}</p>
                  <p className="mb-6 text-[13px] leading-relaxed text-gray-500">{plan.tagline}</p>

                  <ul className="mb-8 flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-gray-600">
                        <CircleCheck size={14} className="mt-0.5 flex-shrink-0 text-red-500" />
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

            <motion.p variants={fadeUp} custom={3} className="mt-8 text-[14px] text-gray-400">
              Not sure which plan fits? <Link href="/contact" className="font-medium text-red-500 hover:underline">Negotiate with us</Link> — we build custom plans for unique requirements.
            </motion.p>
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
                Singapore SEO Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="rounded-2xl border border-gray-100 bg-white px-4 sm:px-8 shadow-sm">
              {FAQS.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
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
              alt="Singapore SEO Agency CTA background"
              fill
              className="object-cover object-right"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/85 via-45% to-transparent" />
          </div>
          <div className="relative z-10 p-6 sm:p-12 lg:p-16">
            <div className="max-w-2xl p-4 sm:p-8">
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Rank Higher in Singapore?
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media helps Singapore businesses cut through the noise on Google. We understand the local market, the search behaviour, and exactly what it takes to move your site from invisible to in front of the right customers.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                Start with a free SEO audit. We cover your current rankings, technical issues, content gaps, and a clear picture of what is achievable in your market. No commitment required.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-500 transition-colors hover:text-red-500"
                >
                  Book Free Consultation <ArrowRight size={15} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  "Trusted by businesses across Singapore and Southeast Asia",
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
