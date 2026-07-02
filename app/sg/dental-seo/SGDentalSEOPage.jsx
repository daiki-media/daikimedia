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
  MapPin,
  Star,
  AlertTriangle,
  CircleCheck,
  ClipboardList,
  BarChart2,
  Settings,
  FileText,
  TrendingUp,
  Users,
  Zap,
  BadgeCheck,
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
const AGENCY_COMPARISON_TABLE = {
  rows: [
    {
      otherSEOAgencies: "Same SEO strategy for every business",
      daikimedia: "Custom SEO strategy designed specifically for dental clinics",
    },
    {
      otherSEOAgencies: "Focus mainly on rankings",
      daikimedia: "Focus on rankings, patient enquiries, and business growth",
    },
    {
      otherSEOAgencies: "Limited local SEO",
      daikimedia: "Complete Local SEO with Google Business Profile optimisation",
    },
    {
      otherSEOAgencies: "Few technical improvements",
      daikimedia: "Complete technical SEO, speed optimisation, schema, and user experience",
    },
    {
      otherSEOAgencies: "One-time optimisation",
      daikimedia: "Continuous improvements based on performance and Google updates",
    },
  ],
};

const DENTAL_SEO_FACTORS_TABLE = {
  rows: [
    {
      factor: "Local Keyword Research",
      impactOnResults: "Targets searches for specific keywords used by Singapore locals looking for dental treatments nearby",
    },
    {
      factor: "Google Business Profile Optimisation",
      impactOnResults: "Helps your clinic appear higher in Google Maps and local search results, bringing more nearby patients",
    },
    {
      factor: "Patient-Focused Content",
      impactOnResults: "Answers common patient questions, builds trust, and keeps visitors on your website longer",
    },
    {
      factor: "Technical SEO",
      impactOnResults: "Improves website speed, mobile performance, crawlability, and indexing for better rankings",
    },
    {
      factor: "EEAT Optimisation",
      impactOnResults: "Strengthens trust by highlighting dentist expertise, experience, reviews, and reliable information",
    },
  ],
};

const DAIKI_APPROACH_TABLE = {
  rows: [
    {
      focus: "Industry Experience",
      daikimediaApproach: "10+ years of digital marketing experience",
    },
    {
      focus: "SEO Strategy",
      daikimediaApproach: "Customised for every dental clinic — no templates",
    },
    {
      focus: "Local SEO",
      daikimediaApproach: "Google Business Profile and Singapore local search optimisation",
    },
    {
      focus: "Technical SEO",
      daikimediaApproach: "Complete website audit, speed optimisation, and technical improvements",
    },
    {
      focus: "AI SEO",
      daikimediaApproach: "Optimisation for AI-powered search platforms alongside Google SEO",
    },
    {
      focus: "Support",
      daikimediaApproach: "Dedicated SEO specialists and ongoing optimisation",
    },
  ],
};

// ─── static data ─────────────────────────────────────────────────────────────
const DENTAL_SEO_BENEFITS = [
  "Improve your rankings for high-intent dental keywords",
  "Attract more local patients looking for nearby dental clinics",
  "Increase appointment bookings through organic Google searches",
  "Build trust with helpful, patient-friendly content",
  "Improve your Google Business Profile visibility and Google Maps rankings",
  "Stay ahead of competing dental clinics in Singapore",
  "Generate long-term traffic without relying only on paid ads",
];

const AGENCY_MISTAKES = [
  {
    text: "Use the same SEO strategy for every industry instead of dental-specific strategies",
  },
  {
    text: "Target broad keywords with high competition while ignoring local keywords patients actually search",
  },
  {
    text: "Don't optimise Google Business Profile — one of the biggest sources of local patient enquiries",
  },
  {
    text: "Publish short or AI-generated content that doesn't answer patients' real questions",
  },
  {
    text: "Ignore Google's EEAT guidelines for healthcare websites",
  },
  {
    text: "Focus only on rankings instead of appointment enquiries and patient conversions",
  },
  {
    text: "Rarely optimise treatment pages for implants, Invisalign, braces, or teeth whitening",
  },
  {
    text: "Build low-quality backlinks that can actually harm rankings",
  },
  {
    text: "Provide generic monthly reports without explaining how SEO is helping the clinic grow",
  },
];

const PROCESS_FOCUS = [
  { icon: Search, text: "Research the keywords Singapore patients search before booking a dentist" },
  { icon: FileText, text: "Optimise treatment pages for different types of dental issues" },
  { icon: MapPin, text: "Improve Google Business Profile for Google Maps and local searches" },
  { icon: Users, text: "Create helpful, patient-friendly content that answers common dental questions" },
  { icon: Settings, text: "Improve website speed and mobile experience for smartphone users" },
  { icon: ClipboardList, text: "Fix technical SEO issues that stop Google from indexing your website" },
  { icon: TrendingUp, text: "Build quality backlinks from trusted healthcare and Singapore websites" },
  { icon: Zap, text: "Optimise page titles, meta descriptions, images, and schema markup" },
];

const WHY_TRUST_DAIKI = [
  "10+ years of digital marketing experience across healthcare and local businesses",
  "Singapore-focused SEO strategies built around local search behaviour and patient intent",
  "Complete SEO solutions including Technical SEO, Local SEO, Content SEO, Link Building, and AI Search Optimisation",
  "Customised SEO plans based on your clinic's services, competition, and growth goals",
  "Transparent monthly reports with rankings, traffic, and enquiry updates",
  "Dedicated SEO specialists who continuously optimise as Google algorithms change",
  "Long-term growth approach instead of short-term ranking tricks",
];

const FAQS = [
  {
    q: "What is Dental SEO?",
    a: "Dental SEO is the process of improving your dental clinic's website so it ranks higher on Google. It helps patients in Singapore find your clinic when searching for treatments like dental implants, braces, or teeth whitening.",
  },
  {
    q: "How long does Dental SEO take to show results?",
    a: "Most dental clinics start seeing improvements within 3 to 6 months. The exact timeline depends on your competition, website condition, and the keywords you want to rank for.",
  },
  {
    q: "Why is Local SEO important for dental clinics in Singapore?",
    a: "Most patients search for nearby dentists before booking an appointment. Local SEO improves your visibility in Google Maps and local search results, helping more people discover your clinic.",
  },
  {
    q: "Can Dental SEO increase patient bookings?",
    a: "Yes. Better Google rankings bring more relevant visitors to your website. When your site provides useful information and a good user experience, more visitors are likely to book appointments.",
  },
  {
    q: "Is Google Business Profile important for Dental SEO?",
    a: "Yes. A well-optimised Google Business Profile helps your clinic appear in local search results, shows important information like reviews and opening hours, and increases trust among potential patients.",
  },
  {
    q: "What keywords should a dental clinic target?",
    a: 'It depends on your services. Common Singapore searches include "dentist near me", "dental clinic Singapore", "Invisalign Singapore", "teeth whitening Singapore", and "dental implants Singapore".',
  },
  {
    q: "Why should I choose Daiki Media for Dental SEO?",
    a: "Daiki Media offers customised SEO strategies designed for Singapore businesses. We focus on Local SEO, technical optimisation, quality content, and long-term growth to help your clinic attract more patients.",
  },
  {
    q: "Do I need ongoing SEO for my dental clinic?",
    a: "Yes. SEO is an ongoing process because Google updates its algorithms regularly, and competitors continue improving their websites. Continuous optimisation helps maintain rankings and attract new patients consistently.",
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
export default function SGDentalSEOPage() {
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
            <li className="text-red-500 font-medium">Dental SEO Singapore</li>
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
                  Singapore Dental SEO Specialists
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl"
              >
                Best Dental SEO Agency Singapore:{" "}
                <span className="text-red-500 italic">Proven Marketing Strategies</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                Most people in Singapore search on Google before booking a dentist. They choose one of the first few clinics they see. If your dental clinic is not ranking on Google, you are losing patients and revenue every day.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Dental SEO is different from normal SEO. Patients want to trust the clinic before booking — they look for experienced dentists, genuine reviews, clear treatment information, and a professional website. Google also gives more importance to trustworthy healthcare websites.
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="mb-8 text-[15px] leading-relaxed text-gray-500">
                At Daiki Media, we help dental clinics in Singapore improve their Google rankings, attract more local patients, and build long-term online visibility with ethical, patient-focused SEO solutions.
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
                  { num: "3–6", label: "Months to first ranking improvements" },
                  { num: "100%", label: "Customised strategies — no templates" },
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
                alt="Dental SEO Agency Singapore — Daiki Media"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Results Timeline</p>
              <p className="text-2xl font-extrabold text-red-500">3–6 mo</p>
              <p className="text-xs text-gray-500">First ranking improvements</p>
            </div>

            <div className="absolute -right-4 top-6 hidden sm:flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <ShieldCheck size={16} className="text-green-500" />
              <p className="text-xs font-semibold text-gray-700">Ethical, Patient-Focused SEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY DENTAL SEO IS IMPORTANT ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Why It Matters</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Dental SEO Is Important for Singapore Clinics
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Dental clinics in Singapore are more competitive than other South Asian countries. If your clinic does not appear on the first page of Google, many potential patients will simply choose another clinic. Unlike paid ads that stop working once your budget runs out, SEO continues to generate organic traffic over the long term.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* benefits list */}
              <motion.div variants={fadeUp} custom={1}>
                <h3 className="mb-5 font-bold text-gray-900">Biggest benefits of Dental SEO for Singapore clinics:</h3>
                <ul className="space-y-3">
                  {DENTAL_SEO_BENEFITS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-gray-600">
                      <CircleCheck size={15} className="mt-0.5 flex-shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* about daiki */}
              <motion.div variants={fadeUp} custom={2} className="space-y-4">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 font-bold text-gray-900">More Than Just Rankings</h3>
                  <p className="text-[14px] leading-relaxed text-gray-500">
                    At Daiki Media, we do more than improve rankings. We create SEO strategies that help dental clinics grow steadily through technical SEO, local SEO, content optimisation, and Google Business Profile management.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 font-bold text-gray-900">Singapore Market Expertise</h3>
                  <p className="text-[14px] leading-relaxed text-gray-500">
                    Our team understands Singapore's competitive healthcare market and builds customised strategies based on your clinic's services, target patients, and business goals. We believe in clear communication, transparent reporting, and long-term growth instead of quick shortcuts.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="https://api.whatsapp.com/send?phone=601114850067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-red-600"
                  >
                    Get Started <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=601114850067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-[14px] font-semibold text-gray-700 transition-all hover:border-red-200 hover:text-red-500"
                  >
                    WhatsApp <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY TRADITIONAL AGENCIES FAIL ───────────────────────────────────── */}
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
                Why Traditional SEO Agencies Fail to Rank Dental Clinics
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Most clinic operators choose agencies that use the same strategy for every business — restaurant, clothing store, or dental clinic. But Google treats healthcare websites differently because they affect people's health and decisions. Here are the common mistakes traditional agencies make:
              </p>
            </motion.div>

            <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AGENCY_MISTAKES.map((item, i) => (
                <motion.div
                  key={item.text}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
                >
                  <AlertTriangle size={15} className="mt-0.5 flex-shrink-0 text-red-400" />
                  <p className="text-[13px] leading-relaxed text-red-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* extra context */}
            <motion.div variants={fadeUp} custom={9} className="mb-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-gray-600">
                Our team builds customised SEO strategies using local keyword research, technical SEO, content optimisation, Google Business Profile management, competitor analysis, and high-quality link building — all based on your clinic's services, target audience, and business goals. With over 10 years of experience, we continuously monitor performance and adapt to Google's latest algorithm changes.
              </p>
              <Link
                href="/sg/seo-services"
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-red-500 transition-colors hover:text-red-600"
              >
                Check Our Affordable Local SEO Services in Singapore <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Agency comparison table */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Agency Comparison</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Other Agencies vs Daiki Media — Singapore Dental SEO
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                A complete comparison of how Daiki Media approaches dental clinic SEO versus generic agencies.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={AGENCY_COMPARISON_TABLE}
          ctaButton="WhatsApp Us"
          ctaLink="https://api.whatsapp.com/send?phone=601114850067"
        />
      </section>

      {/* ── DENTAL SEO PROCESS ──────────────────────────────────────────────── */}
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
                Daiki Media's Dental SEO Process
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                We don't use the same SEO strategy for every clinic. We first understand your dental services, competitors, target patients, and current website performance — then build a customised strategy designed specifically for Singapore's dental market.
              </p>
            </motion.div>

            {/* process focus grid */}
            <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_FOCUS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    variants={fadeUp}
                    custom={i}
                    className="group flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={15} />
                    </div>
                    <p className="text-[13px] leading-relaxed text-gray-600">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Dental SEO factors table */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Key Focus Areas</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Dental SEO Focus Areas and Their Impact
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Every improvement we make is designed to increase your online visibility, build trust with potential patients, and encourage more appointment bookings.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={DENTAL_SEO_FACTORS_TABLE}
          ctaButton="Get Started"
          ctaLink="https://api.whatsapp.com/send?phone=601114850067"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm"
          >
            <p className="text-[15px] leading-relaxed text-gray-600">
              Our team stays updated with Google's latest algorithm changes, AI search trends, and Singapore's competitive digital market. Instead of relying on shortcuts or outdated methods, we focus on sustainable strategies that continue delivering results over time. By combining Local SEO, technical improvements, content marketing, and continuous optimisation, Daiki Media helps your dental clinic build a stronger online presence and attract more patients across Singapore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE DAIKI MEDIA ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
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
                Why Choose Daiki Media for Singapore Dental SEO
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Choosing the right SEO agency can make a big difference to your clinic's online growth. Many agencies promise fast rankings but follow the same strategy for every client. At Daiki Media, we believe every dental clinic is different — your services, patients, competitors, and goals are unique, so your SEO strategy should be too.
              </p>
            </motion.div>

            {/* trust points */}
            <motion.div variants={fadeUp} custom={1} className="mb-12">
              <h3 className="mb-5 font-bold text-gray-900">Why Dental Clinics Trust Daiki Media:</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {WHY_TRUST_DAIKI.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <BadgeCheck size={15} className="mt-0.5 flex-shrink-0 text-red-500" />
                    <p className="text-[13px] leading-relaxed text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={2} className="rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-gray-900">Ready to grow your dental clinic?</p>
                  <p className="mt-1 text-[14px] text-gray-500">
                    We combine local SEO, technical SEO, content marketing, AI search optimisation, and data-driven strategies to help your clinic attract more patients.
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

        {/* Daiki approach table */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Daiki Media Approach for 100% Client Satisfaction
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Our SEO plans are fully customised based on your clinic's size, competition, services, and monthly marketing budget — whether you need Local SEO, a complete SEO campaign, or an integrated digital marketing strategy.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={DAIKI_APPROACH_TABLE}
          ctaButton="Know About Best Digital Marketing Tools We Use"
          ctaLink="/best-marketing-tools"
        />
      </section>

      {/* ── CONCLUSION ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-24">
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
                Dental SEO Is One of the Most Effective Ways to Grow Your Singapore Clinic
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <motion.div variants={fadeUp} custom={1} className="space-y-4">
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Most people search on Google before choosing a dentist, so appearing in the top search results can make a big difference to your appointment bookings. A well-planned SEO strategy improves your website, increases local visibility, and builds trust with potential patients over time.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  At Daiki Media, we create customised Dental SEO strategies based on your clinic's services, target audience, and business goals. From Local SEO and Google Business Profile optimisation to technical SEO and patient-focused content, we help your clinic grow through ethical and long-term SEO practices.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  If you want to improve your online presence and attract more local patients in Singapore, our team is ready to help.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md"
                  >
                    Get Free Audit
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 gap-4">
                {[
                  { num: "10+", label: "Years of digital marketing experience" },
                  { num: "3–6 mo", label: "Typical time to first results" },
                  { num: "100%", label: "Custom strategy — no templates" },
                  { num: "Long-term", label: "Growth focus, not short-term tricks" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm text-center">
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
      <section className="py-16 sm:py-24">
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
                Dental SEO Singapore — Frequently Asked Questions
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Common questions from Singapore dental clinic owners about dental SEO, local rankings, and what to expect when working with Daiki Media.
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
      <section className="bg-gray-50 py-16 sm:py-24">
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
              alt="Dental SEO Singapore CTA background"
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
                Ready to Grow Your Dental Clinic?
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media helps Singapore dental clinics improve their Google rankings, attract more local patients, and build long-term online visibility. We combine Local SEO, technical SEO, content marketing, and AI search optimisation into one customised plan.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                Start with a free audit. We review your current rankings, website issues, content gaps, and show you exactly what is achievable. No commitment required.
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
                  "Ethical, patient-focused SEO strategies",
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
