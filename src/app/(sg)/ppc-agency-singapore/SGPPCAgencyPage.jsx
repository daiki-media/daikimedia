"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { DataTable } from "@/components/service-single/dataTable";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Search,
  Target,
  BarChart2,
  Settings,
  FileText,
  TrendingUp,
  Users,
  Zap,
  AlertTriangle,
  CircleCheck,
  BadgeCheck,
  DollarSign,
  MousePointerClick,
  Globe,
  Megaphone,
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
const PPC_FACTORS_TABLE = {
  rows: [
    {
      ppcFactor: "Keyword Research",
      impactOnBusiness: "Targets customers who are actively searching for your products or services.",
    },
    {
      ppcFactor: "Audience Targeting",
      impactOnBusiness: "Reaches the right people based on location, interests, language, and behaviour.",
    },
    {
      ppcFactor: "Campaign Structure",
      impactOnBusiness: "Keeps campaigns organised for better performance and easier optimisation.",
    },
    {
      ppcFactor: "Ad Copy Optimisation",
      impactOnBusiness: "Improves click-through rates with clear and engaging advertisements.",
    },
    {
      ppcFactor: "Budget Optimisation",
      impactOnBusiness: "Reduces unnecessary spending and improves return on investment.",
    },
    {
      ppcFactor: "Performance Reporting",
      impactOnBusiness: "Provides transparent reports showing clicks, conversions, costs, and ROI.",
    },
  ],
};

const PLATFORM_COMPARISON_TABLE = {
  rows: [
    {
      aspect: "Best For",
      googleAds: "High-intent leads and sales",
      metaAds: "Brand awareness and audience engagement",
    },
    {
      aspect: "Audience",
      googleAds: "People actively searching on Google",
      metaAds: "People browsing Facebook and Instagram",
    },
    {
      aspect: "Customer Intent",
      googleAds: "High",
      metaAds: "Medium",
    },
    {
      aspect: "Speed of Results",
      googleAds: "Immediate",
      metaAds: "Immediate",
    },
    {
      aspect: "Targeting",
      googleAds: "Keywords, location, device, demographics",
      metaAds: "Interests, behaviour, age, location, custom audiences",
    },
  ],
};

// ─── static data ─────────────────────────────────────────────────────────────
const WHY_SG_NEEDS_PPC = [
  "Appear at the top of Google search results for high-intent keywords.",
  "Target customers by location, age, interests, language, and device.",
  "Control your daily and monthly advertising budget.",
  "Track every click, lead, and conversion with detailed reports.",
  "Increase enquiries, sales, and appointment bookings.",
  "Promote your business across Google, Facebook, Instagram, LinkedIn, and YouTube.",
  "Adjust campaigns quickly based on performance and market trends.",
  "Stay competitive in Singapore's fast-moving digital market.",
];

const AGENCY_FAILURES = [
  "They use the same campaign strategy for every business without understanding the industry.",
  "They ignore Singapore's competitive local market and audience behaviour.",
  "They do not optimise Google Ads Quality Score, resulting in higher cost per click.",
  "They rarely test different headlines, descriptions, and landing pages.",
  "They fail to monitor campaigns regularly, allowing poor-performing ads to waste the budget.",
  "They send traffic to slow or poorly designed landing pages that do not convert visitors into customers.",
  "They ignore conversion tracking, making it difficult to measure real business results.",
  "They do not understand advertising policies for regulated industries such as healthcare, finance, and iGaming.",
];

const PPC_PROCESS = [
  {
    step: "01",
    icon: Search,
    title: "Business & Competitor Analysis",
    desc: "We understand your business goals, analyse competitors in Singapore, and identify opportunities to outperform them.",
  },
  {
    step: "02",
    icon: Target,
    title: "Keyword Research",
    desc: "We find high-intent keywords that potential customers are actively searching for instead of targeting broad or low-converting terms.",
  },
  {
    step: "03",
    icon: Users,
    title: "Audience Targeting",
    desc: "We target the right audience based on location, age, interests, language, device, and online behaviour to improve conversions.",
  },
  {
    step: "04",
    icon: Settings,
    title: "Campaign Setup",
    desc: "We build well-structured campaigns across Google Ads, Meta Ads, LinkedIn Ads, or YouTube Ads based on your objectives.",
  },
  {
    step: "05",
    icon: FileText,
    title: "Ad Copy Creation",
    desc: "Our team writes clear, engaging, and conversion-focused advertisements with strong headlines and compelling calls-to-action.",
  },
  {
    step: "06",
    icon: Globe,
    title: "Landing Page Optimisation",
    desc: "We recommend improvements to landing pages so visitors are more likely to become customers after clicking your ad.",
  },
  {
    step: "07",
    icon: DollarSign,
    title: "Budget Management",
    desc: "We carefully manage your advertising budget to reduce wasted spending and maximise ROI.",
  },
  {
    step: "08",
    icon: BarChart2,
    title: "Conversion Tracking",
    desc: "We track enquiries, purchases, phone calls, bookings, and other important actions to measure campaign success accurately.",
  },
  {
    step: "09",
    icon: TrendingUp,
    title: "Continuous Optimisation",
    desc: "PPC campaigns are monitored regularly. We improve keywords, bidding strategies, audience targeting, and ad creatives based on real performance data.",
  },
];

const GOOGLE_ADS_CHOOSE = [
  "Generate enquiries from people actively searching for your services.",
  "Increase appointment bookings or online sales.",
  "Promote local services across Singapore.",
  "Reach customers with high purchase intent.",
];

const META_ADS_CHOOSE = [
  "Build brand awareness quickly.",
  "Launch a new product or service.",
  "Reach new audiences based on interests and behaviour.",
  "Re-engage previous website visitors through remarketing.",
];

const WHY_TRUST_DAIKI = [
  "10+ years of digital marketing experience across multiple industries.",
  "Custom PPC strategies designed specifically for your business goals.",
  "Google Ads, Meta Ads, LinkedIn Ads, and YouTube Ads management under one team.",
  "Advanced audience targeting to reach the right customers in Singapore.",
  "Continuous campaign optimisation for better conversions and lower cost per lead.",
  "Transparent reporting with real performance metrics, not just click numbers.",
  "Dedicated PPC specialists who monitor campaigns and recommend improvements.",
  "Flexible pricing plans suitable for startups, SMEs, and enterprise businesses.",
  "Data-driven decisions using Google Analytics, conversion tracking, and campaign insights.",
];

const FAQS = [
  {
    q: "What is a PPC agency?",
    a: "A PPC agency manages paid advertising campaigns on platforms like Google Ads, Facebook, Instagram, LinkedIn, and YouTube. The goal is to help businesses attract more customers, increase sales, and maximise their advertising budget.",
  },
  {
    q: "How much does PPC advertising cost in Singapore?",
    a: "There is no fixed cost. Your budget depends on your industry, competition, keywords, and business goals. Many Singapore businesses start with a monthly budget and increase it as they see positive results.",
  },
  {
    q: "Is Google Ads better than Facebook Ads?",
    a: "It depends on your goals. Google Ads works best for people actively searching for your services, while Facebook and Instagram Ads are ideal for building brand awareness and reaching new audiences.",
  },
  {
    q: "How long does it take to see PPC results?",
    a: "Unlike SEO, PPC campaigns can start generating traffic almost immediately after they go live. However, campaigns usually perform better after a few weeks of testing and optimisation.",
  },
  {
    q: "Can PPC help local businesses in Singapore?",
    a: "Yes. PPC allows you to target customers based on specific locations in Singapore, making it ideal for clinics, restaurants, law firms, real estate agencies, retailers, and other local businesses.",
  },
  {
    q: "How do I know if my PPC campaign is successful?",
    a: "Success is measured through key metrics such as clicks, conversions, cost per lead, return on investment (ROI), and overall business growth. Regular reporting helps track campaign performance.",
  },
  {
    q: "Why should I choose Daiki Media for PPC management?",
    a: "Daiki Media creates customised PPC campaigns based on your business goals, target audience, and industry. We continuously optimise campaigns, provide transparent reports, and focus on generating quality leads and measurable business growth.",
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
export default function SGPPCAgencyPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li><Link href="/digital-marketing" className="hover:text-red-500 transition-colors">Digital Marketing</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-red-500 font-medium">PPC Agency Singapore</li>
          </ol>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* left */}
          <div>
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-600">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  Singapore PPC Management Specialists
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900"
              >
                Best PPC Agency Singapore:{" "}
                <span className="text-red-500 italic">Trusted Marketing Services</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                All companies in Singapore want higher levels of traffic and sales through their websites. However, making it to the customers on the internet has now become more challenging than ever before. This is where Pay-Per-Click (PPC) marketing comes into play.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                With PPC advertising, your business appears among the top search and social media results in no time. Unlike SEO, you get access to potential customers who are already looking for your product or service — without waiting weeks or months.
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="mb-8 text-[15px] leading-relaxed text-gray-500">
                At Daiki Media, we develop effective PPC marketing campaigns for Singaporean businesses only. Whether you run an e-commerce store, healthcare facility, real estate company, law firm, or local business, we help you advertise efficiently and effectively.
              </motion.p>

              <motion.div variants={fadeUp} custom={5} className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-600 transition-colors hover:text-red-500"
                >
                  WhatsApp Us <ArrowRight size={15} />
                </Link>
              </motion.div>

              {/* stats */}
              <motion.div
                variants={fadeUp}
                custom={6}
                className="mt-10 grid grid-cols-3 gap-3 border-t border-gray-100 pt-8"
              >
                {[
                  { num: "10+", label: "Years of digital marketing experience" },
                  { num: "Fast", label: "Results — no months of waiting" },
                  { num: "100%", label: "Custom strategies — no templates" },
                ].map((s) => (
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
                alt="PPC Agency Singapore — Daiki Media"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Results Speed</p>
              <p className="text-2xl font-extrabold text-red-500">Immediate</p>
              <p className="text-xs text-gray-500">Traffic starts after launch</p>
            </div>

            <div className="absolute -right-4 top-6 hidden sm:flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <ShieldCheck size={16} className="text-green-500" />
              <p className="text-xs font-semibold text-gray-700">Google & Meta Certified</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS PPC ─────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>What is PPC</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What is PPC and Why is it Important for Singapore Businesses?
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                PPC stands for Pay-Per-Click, a type of online advertising where you only pay when someone clicks on your ad. Instead of waiting months for your website to rank through SEO, PPC helps your business appear at the top of Google search results or on platforms like Facebook, Instagram, LinkedIn, and YouTube almost immediately.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <motion.div variants={fadeUp} custom={1} className="space-y-4">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-[14px] leading-relaxed text-gray-600">
                    Singapore has one of the highest internet and smartphone usage rates in the world. Most people search online before buying a product, booking a service, or visiting a business. Because competition is high across almost every industry, businesses need a smart advertising strategy to stand out.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-[14px] leading-relaxed text-gray-600">
                    A well-managed PPC campaign helps you reach the right audience at the right time without wasting your advertising budget. At Daiki Media, we build PPC campaigns that focus on real business growth — not just clicks. We research the right keywords, target the most relevant audience, write compelling ad copy, and continuously optimise campaigns to improve conversions and maximise your return on investment (ROI).
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2}>
                <h3 className="mb-5 font-bold text-gray-900">Why Singapore Businesses Need PPC:</h3>
                <ul className="space-y-3">
                  {WHY_SG_NEEDS_PPC.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-gray-600">
                      <CircleCheck size={15} className="mt-0.5 flex-shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY AGENCIES FAIL ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Common Failures</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Many PPC Agencies Fail to Deliver Results
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                The main reason why companies in Singapore opt for PPC marketing is to get quick leads and sales. But despite investing thousands of dollars, they fail to get any or just an unimpressive return on their investment. The truth is that most agencies use the same approach for every client — set up a few ads, pick general keywords, and fail to optimise the whole process.
              </p>
            </motion.div>

            <div className="mb-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-gray-600">
                Singapore's digital market is highly competitive. Businesses also need to follow advertising policies set by platforms like Google and Meta, along with local regulations for industries such as healthcare, finance, and gambling. Ads that make fake claims or do not follow advertising guidelines can be rejected or perform poorly. A good PPC agency understands these requirements and creates campaigns that are both compliant and effective.
              </p>
              <Link
                href="/blog/local-seo-2026"
                className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-red-500 transition-colors hover:text-red-600"
              >
                Read our blog on Local SEO in 2026: How to Rank Across Multiple Cities &amp; Devices <ArrowRight size={14} />
              </Link>
            </div>

            <motion.div variants={fadeUp} custom={1} className="mb-10">
              <h3 className="mb-5 font-bold text-gray-900">Common Reasons Why PPC Agencies Fail:</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {AGENCY_FAILURES.map((item, i) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                  >
                    <AlertTriangle size={15} className="mt-0.5 flex-shrink-0 text-red-400" />
                    <p className="text-[13px] leading-relaxed text-red-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={9} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <p className="mb-4 text-[15px] leading-relaxed text-gray-600">
                At Daiki Media, we believe successful PPC is more than running advertisements. We take time to understand your business, competitors, target audience, and marketing goals before launching any campaign. Our team manages every part of your PPC campaign — from keyword research and audience targeting to ad creation, budget management, landing page recommendations, and conversion tracking. We continuously analyse campaign performance and make improvements to reduce advertising costs while increasing quality leads.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-red-600"
              >
                Get Free Audit <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PPC MANAGEMENT PROCESS ──────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Daiki Media's PPC Management Process
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Running successful PPC campaigns is not just about creating ads and waiting for clicks. Every campaign needs careful planning, continuous monitoring, and regular optimisation to achieve the best return on investment. At Daiki Media, we follow a structured PPC process designed specifically for Singapore businesses.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 sm:p-7 shadow-sm">
              <p className="text-[14px] leading-relaxed text-gray-500">
                Before launching any campaign, we study your business, competitors, products, services, and customer behaviour. This helps us build ads that reach the right audience at the right time while making the best use of your advertising budget.
              </p>
              <Link
                href="/best-marketing-tools"
                className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-red-500 transition-colors hover:text-red-600"
              >
                Know about 50 of the Best Digital Marketing Tools We Use <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* PPC factors table */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Key Factors</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Important PPC Factors We Focus On
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Every element of your PPC campaign is managed with precision to maximise your return on investment and minimise wasted ad spend.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={PPC_FACTORS_TABLE}
          ctaButton="Level Up Your Business with Us"
          ctaLink="https://api.whatsapp.com/send?phone=601114850067"
        />

        {/* Process steps */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <SectionLabel>Step by Step</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Complete PPC Management Process
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                A proven 9-step process built for Singapore businesses — from research to continuous optimisation.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PPC_PROCESS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-3xl font-black text-gray-100 leading-none">{item.step}</span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                        <Icon size={16} />
                      </div>
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                    <p className="text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeUp} custom={10} className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-[15px] leading-relaxed text-gray-600">
                With 10+ years of digital marketing experience, we combine PPC expertise, audience insights, and data-driven optimisation to help Singapore businesses generate more qualified leads, increase conversions, and achieve sustainable business growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── GOOGLE ADS VS META ADS ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Platform Comparison</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Google Ads vs Meta Ads: Which One is Right for Your Business?
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                The most popular question that most companies pose is whether to use Google Ads or Meta Ads (Facebook and Instagram Ads). The answer depends on your company's objectives, target market, and products or services offered.
              </p>
            </motion.div>

            {/* Platform cards */}
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              {/* Google Ads */}
              <motion.div variants={fadeUp} custom={1} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <Search size={18} className="text-blue-500" />
                  </div>
                  <h3 className="font-bold text-gray-900">Google Ads</h3>
                </div>
                <p className="mb-5 text-[14px] leading-relaxed text-gray-500">
                  Google Ads are best used when people are looking for something. When someone searches for "SEO agency Singapore", the ad appears on top of the Google search engine. These are individuals with buying intention — making Google Ads perfect for generating enquiries and sales.
                </p>
                <p className="mb-4 text-[13px] font-semibold text-gray-700">Choose Google Ads if you want to:</p>
                <ul className="space-y-2">
                  {GOOGLE_ADS_CHOOSE.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                      <CircleCheck size={14} className="mt-0.5 flex-shrink-0 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Meta Ads */}
              <motion.div variants={fadeUp} custom={2} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                    <Megaphone size={18} className="text-purple-500" />
                  </div>
                  <h3 className="font-bold text-gray-900">Meta Ads</h3>
                </div>
                <p className="mb-5 text-[14px] leading-relaxed text-gray-500">
                  Meta Ads are different because rather than waiting for people to search, these ads showcase your business while they browse Facebook or Instagram. They are very effective at raising brand awareness, advertising new products, generating interest, and retargeting people who visited your website.
                </p>
                <p className="mb-4 text-[13px] font-semibold text-gray-700">Choose Meta Ads if you want to:</p>
                <ul className="space-y-2">
                  {META_ADS_CHOOSE.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                      <CircleCheck size={14} className="mt-0.5 flex-shrink-0 text-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} custom={3} className="mb-6 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-gray-600">
                Many companies operating successfully in Singapore use both platforms. Google Ads capture people who are ready to purchase while Meta Ads generate brand awareness and bring back potential clients who did not purchase before. At Daiki Media, we don't recommend one platform for every business. We first understand your goals, industry, competition, and target audience before deciding the right advertising strategy.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Platform comparison table */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Side by Side</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Google Ads vs Meta Ads — Full Comparison
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                A clear breakdown of how each platform differs so you can make an informed decision for your business.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={PLATFORM_COMPARISON_TABLE}
          ctaButton="Get Started"
          ctaLink="https://api.whatsapp.com/send?phone=601114850067"
        />
      </section>

      {/* ── WHY CHOOSE DAIKI MEDIA ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Daiki Media as Your PPC Agency in Singapore
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                With 10+ years of digital marketing experience, we help businesses across Singapore improve their online presence through Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, and AI-powered marketing strategies. Our campaigns are continuously monitored and optimised to improve performance while reducing unnecessary advertising costs.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="mb-10">
              <h3 className="mb-5 font-bold text-gray-900">Why Businesses Trust Us:</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {WHY_TRUST_DAIKI.map((item, i) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm"
                  >
                    <BadgeCheck size={15} className="mt-0.5 flex-shrink-0 text-red-500" />
                    <p className="text-[13px] leading-relaxed text-gray-600">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={2} className="mb-10 rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-[15px] leading-relaxed text-gray-600">
                At Daiki Media, we focus on creating PPC campaigns that deliver measurable business results. Every campaign is built around your goals, industry, competition, and target audience. Whether you want more enquiries, online sales, appointment bookings, or brand awareness, our team creates a customised strategy instead of using the same approach for every client.
              </p>
            </motion.div>

            {/* platforms served */}
            <motion.div variants={fadeUp} custom={3}>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Search, label: "Google Ads" },
                  { icon: Megaphone, label: "Meta Ads" },
                  { icon: Users, label: "LinkedIn Ads" },
                  { icon: MousePointerClick, label: "YouTube Ads" },
                  { icon: Zap, label: "AI-Powered Marketing" },
                ].map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.label} className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-gray-600 shadow-sm">
                      <Icon size={14} className="text-red-500" />
                      {p.label}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-gray-900">Best SEO and Digital Marketing Agency in Singapore</p>
                  <p className="mt-1 text-[14px] text-gray-500">
                    Ready to grow your business with proven PPC strategies designed for Singapore's competitive digital market?
                  </p>
                </div>
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-red-600"
                >
                  Level Up Your Business <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONCLUSION ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <SectionLabel>Conclusion</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                PPC Advertising — One of the Quickest Ways to Reach Customers in Singapore
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <motion.div variants={fadeUp} custom={1} className="space-y-4">
                <p className="text-[15px] leading-relaxed text-gray-600">
                  PPC advertising is one of the quickest ways of ensuring that your business gets to its intended customers in Singapore. Whether you want to acquire new leads, make more sales, or raise brand awareness, a properly managed PPC ad campaign can give you results without wasting your money.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  But this is only possible if you select the correct platform, target your audience properly, and make constant improvements to your campaigns. At Daiki Media, we design customised PPC strategies based on your company's specific aims, industry, and target market.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Our campaigns are done on Google Ads, Meta Ads, LinkedIn, and YouTube. Our aim is to produce high-quality traffic and increase ROI for our clients.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md"
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=601114850067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-500 transition-colors hover:text-red-500"
                  >
                    WhatsApp <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 gap-4">
                {[
                  { num: "10+", label: "Years of digital marketing experience" },
                  { num: "4", label: "Platforms: Google, Meta, LinkedIn, YouTube" },
                  { num: "100%", label: "Custom strategy for every business" },
                  { num: "ROI", label: "Focused on real business results" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm text-center">
                    <p className="text-xl font-extrabold text-red-500">{s.num}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-gray-500">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                PPC Agency Singapore — Frequently Asked Questions
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Common questions from Singapore businesses about PPC advertising, costs, platform choices, and what to expect from Daiki Media.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-12">
              <div className="rounded-2xl border border-gray-100 bg-white px-4 sm:px-8 shadow-sm">
                {FAQS.slice(0, 4).map((faq, i) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
                ))}
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white px-4 sm:px-8 shadow-sm">
                {FAQS.slice(4).map((faq, i) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i + 4} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
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
              alt="PPC Agency Singapore CTA background"
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
                Ready to Grow Your Business with PPC?
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media helps Singapore businesses generate more qualified leads, increase online sales, and maximise advertising ROI through customised PPC campaigns on Google Ads, Meta Ads, LinkedIn Ads, and YouTube Ads.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                Start with a free audit. We review your current ad accounts, keyword strategy, audience targeting, and landing pages — then show you exactly how to improve performance. No commitment required.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                >
                  Get Free Audit
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-500 transition-colors hover:text-red-500"
                >
                  WhatsApp Us <ArrowRight size={15} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  "Custom strategy — no one-size-fits-all templates",
                  "Free audit — no commitment required",
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
