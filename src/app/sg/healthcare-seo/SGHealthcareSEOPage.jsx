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
  FileText,
  MapPin,
  Users,
  Star,
  AlertTriangle,
  CircleCheck,
  BadgeCheck,
  ClipboardList,
  Building2,
  HeartPulse,
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
const COMPARISON_TABLE = {
  rows: [
    {
      factor: "Regulations",
      regularSEO: "Minimal rules",
      healthcareSEO: "MOH, SMC, strict compliance required",
    },
    {
      factor: "Content Accuracy",
      regularSEO: "Good",
      healthcareSEO: "Must be medically accurate",
    },
    {
      factor: "Doctor Credentials",
      regularSEO: "Not needed",
      healthcareSEO: "Essential for ranking",
    },
    {
      factor: "Customer Reviews",
      regularSEO: "Optional",
      healthcareSEO: "Critical for trust signals",
    },
    {
      factor: "Local Trust",
      regularSEO: "Moderate",
      healthcareSEO: "Doctor's description required for authenticity",
    },
  ],
};

const WEBSITE_FACTORS_TABLE = {
  rows: [
    {
      factors: "Clinic Registration Number",
      whatWeDo: "Display MOH registration number clearly on your website",
      impact: "Proves you are a legitimate, registered clinic",
    },
    {
      factors: "Doctor Credentials",
      whatWeDo: "List doctor qualifications — MBBS, MD, specialist status",
      impact: "Proves doctors are qualified and trustworthy",
    },
    {
      factors: "Clear Contact Information",
      whatWeDo: "Phone, address, and opening hours visible on every page",
      impact: "Patients need to reach you easily — Google rewards this",
    },
    {
      factors: "Accurate Medical Information",
      whatWeDo: "No false claims about treatments or outcomes",
      impact: "Protects patient health and prevents Google penalties",
    },
    {
      factors: "Updated Information",
      whatWeDo: "Keep clinic info, doctor profiles, and hours current",
      impact: "Shows clinic is active and legitimate to Google",
    },
  ],
};

const AGENCY_COMPARISON_TABLE = {
  rows: [
    {
      focus: "Healthcare Specialisation",
      otherAgencies: "Treats healthcare like any other business",
      daikimedia: "100% healthcare-focused strategies",
    },
    {
      focus: "MOH / SMC Compliance",
      otherAgencies: "Often ignores healthcare regulations",
      daikimedia: "Compliance-first approach on every project",
    },
    {
      focus: "Singapore Market Knowledge",
      otherAgencies: "May not know local patient search behaviour",
      daikimedia: "Deep Singapore expertise built over 10+ years",
    },
    {
      focus: "Reporting Clarity",
      otherAgencies: "Difficult-to-understand vanity metrics",
      daikimedia: "Business-focused reports — enquiries, bookings, ROI",
    },
    {
      focus: "Experience Level",
      otherAgencies: "Variable, often generic agency approach",
      daikimedia: "10+ years in healthcare SEO",
    },
  ],
};

// ─── static data ─────────────────────────────────────────────────────────────
const REGULATORS = [
  {
    icon: Building2,
    name: "Ministry of Health (MOH)",
    rules: [
      "Healthcare websites must display the clinic's registration number",
      "Doctor credentials must be clearly shown",
      "Medical claims must be accurate and not exaggerated",
      "Patient testimonials and reviews must be genuine",
      "Contact information and location must be clearly visible",
      "Privacy policy must comply with Singapore's PDPA",
    ],
  },
  {
    icon: BadgeCheck,
    name: "Singapore Medical Council (SMC)",
    rules: [
      "Doctors cannot make false or misleading claims about qualifications",
      "Doctors cannot guarantee specific treatment outcomes",
      "Marketing must not be sensational or fear-mongering",
      "Doctor credentials must be accurate and verifiable",
      "Patient privacy must be protected at all times",
    ],
  },
  {
    icon: HeartPulse,
    name: "Health Promotion Board (HPB)",
    rules: [
      "Claims about nutrition or supplements must be evidence-based",
      "Health recommendations must follow Singapore's official guidelines",
      "Marketing cannot mislead patients about health benefits",
    ],
  },
];

const WRONG_PRACTICES = [
  "Make health guarantees",
  "Use fake testimonials",
  "Exaggerate doctor credentials",
  "Copy medical information",
  "Hide contact information",
  "Ignore PDPA privacy rules",
  "Make unproven health claims",
];

const WHY_CHOOSE = [
  {
    icon: ClipboardList,
    title: "Deep Healthcare Understanding",
    body: "Our team understands healthcare's unique challenges. We know MOH, SMC, and PDPA requirements deeply and how patients search for doctors differently than customers search for products.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-First Approach",
    body: "We have watched Google's algorithm evolve and adapted our strategies as search changed. We have seen MOH guidelines update and built full compliance into every process we run.",
  },
  {
    icon: FileText,
    title: "Healthcare Link Building",
    body: "We have relationships with healthcare publications for link building — something generic agencies simply cannot replicate. These links build the domain authority clinics need to rank.",
  },
  {
    icon: Star,
    title: "Transparent ROI Reporting",
    body: "We provide weekly reports of performance — how many patient enquiries came from Google, how many appointments were booked, how many calls came from search results, and actual ROI from your SEO investment.",
  },
];

const FAQS = [
  {
    q: "What is healthcare SEO and how is it different from regular SEO?",
    a: "Healthcare SEO helps clinics and hospitals rank on Google so patients can find them. It is different because healthcare websites must follow strict MOH and SMC regulations, build patient trust signals, and focus on helping patients, not just getting rankings. Generic SEO ignores these healthcare-specific requirements.",
  },
  {
    q: "How long does healthcare SEO take to show results in Singapore?",
    a: "Most clinics see first results within 60 to 90 days for less competitive keywords. Competitive keywords like 'best dermatologist Singapore' typically take 3 to 6 months. Timeline depends on your current rankings, competition level, and how quickly Google trusts your clinic. Patience and consistency matter in healthcare SEO.",
  },
  {
    q: "Will healthcare SEO help my clinic get more patient enquiries?",
    a: "Yes, when done correctly. Healthcare SEO brings patients actively searching for your services on Google. These are high-intent patients ready to book appointments. Our Singapore clinics see 3 to 5x increase in patient enquiries after 6 months of proper healthcare SEO. Results depend on your industry, location, and competition level.",
  },
  {
    q: "Is healthcare SEO compliant with MOH and SMC regulations?",
    a: "Our healthcare SEO is completely MOH and SMC compliant. We audit your website for compliance issues before starting. We create content following all healthcare regulations. We never use tricks that violate MOH guidelines. Compliance protects your clinic from Google penalties and builds patient trust simultaneously.",
  },
  {
    q: "How much does healthcare SEO cost for a Singapore clinic?",
    a: "Healthcare SEO pricing depends on your clinic size and competition level. Small clinics starting out invest RM 2,000–3,000 monthly. Growing clinics typically invest RM 5,000–7,000 monthly. Enterprise packages are customised. Most clinics see ROI within 4–6 months when patient enquiries from Google exceed their SEO investment.",
  },
  {
    q: "Can my clinic rank quickly if competitors are already ranking?",
    a: "Yes, but it takes strategy. We identify gaps where you can outrank competitors faster. Long-tail keywords rank quicker than competitive main keywords. Strong content and local SEO optimisation help new clinics rank faster than expected. Starting healthcare SEO now means you rank before competitors expand further.",
  },
  {
    q: "What if my clinic is brand new with no online presence?",
    a: "New clinics actually have an advantage — no bad SEO to fix. We build healthcare SEO correctly from the start: doctor profiles, Google My Business optimisation, local citations, and patient education content. New clinics often see faster results than established clinics with existing SEO problems.",
  },
  {
    q: "Do you guarantee first page rankings for my clinic?",
    a: "We do not guarantee rankings because Google controls rankings, not us. However, we guarantee effort and transparency — full MOH compliance, monthly progress reports, and strategy adjustments at no extra cost if results are not moving forward. Most healthcare clinics see page 1 rankings within 6 months.",
  },
  {
    q: "Can Daiki Media help if my clinic has multiple locations in Singapore?",
    a: "Yes, we specialise in multi-location healthcare SEO. We optimise Google My Business for each clinic location, create location-specific content and local citations for each area, and target local keywords for each clinic separately. We have experience managing 5+ clinic locations simultaneously.",
  },
  {
    q: "How do I know if healthcare SEO is working for my clinic?",
    a: "We provide transparent monthly reports showing keyword rankings, organic traffic, patient enquiries from Google, and appointments booked. You see exactly which search terms bring patients and the ROI from your SEO investment. If results are not moving, we adjust strategy. We focus on business outcomes, not vanity metrics.",
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
export default function SGHealthcareSEOPage() {
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
            <li className="text-red-500 font-medium">Healthcare SEO Singapore</li>
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
                  Singapore Healthcare SEO Specialists
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl"
              >
                Best Healthcare SEO Singapore:{" "}
                <span className="text-red-500 italic">Medical Marketing Service</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                When Singaporeans feel sick or need medical help, the first thing they do is not go to a clinic — they search on Google. If your clinic does not show up in results, you automatically lose patients and revenue.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Healthcare SEO is different from general SEO. Google knows this. Healthcare websites are held to a much higher standard — Google checks if you follow Ministry of Health (MOH) guidelines, if you have real doctors, and if your website is trustworthy.
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="mb-8 text-[15px] leading-relaxed text-gray-500">
                Daiki Media specialises in healthcare SEO for Singapore clinics, hospitals, and medical practices. We have 10+ years of experience helping healthcare businesses get found on Google, attract real patients, and grow revenue.
              </motion.p>

              <motion.div variants={fadeUp} custom={5} className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                >
                  WhatsApp Us
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-600 transition-colors hover:text-red-500"
                >
                  Book Free Audit <ArrowRight size={15} />
                </Link>
              </motion.div>

              {/* stats */}
              <motion.div
                variants={fadeUp}
                custom={6}
                className="mt-10 grid grid-cols-3 gap-3 border-t border-gray-100 pt-8"
              >
                {[
                  { num: "75%+", label: "Patient enquiries from online search" },
                  { num: "91%", label: "Of clicks go to Google page 1 results" },
                  { num: "10+", label: "Years of healthcare SEO experience" },
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
                alt="Healthcare SEO Singapore — Daiki Media Medical Marketing"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Patient Enquiries</p>
              <p className="text-2xl font-extrabold text-red-500">75%+</p>
              <p className="text-xs text-gray-500">Now come from online search</p>
            </div>

            <div className="absolute -right-4 top-6 hidden sm:flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <ShieldCheck size={16} className="text-green-500" />
              <p className="text-xs font-semibold text-gray-700">MOH Compliance-First SEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY HEALTHCARE SEO IS CRITICAL ──────────────────────────────────── */}
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
                Why Healthcare SEO Is Critical for Singapore Clinics
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Over 75% of patient enquiries now come from online searches. Thousands of clinics and hospitals in Singapore are competing for the same patients. If your clinic shows up first, they book with you. If your competitor shows up first, they book with them.
              </p>
            </motion.div>

            {/* key facts */}
            <div className="mb-12 grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: Search,
                  stat: "91%",
                  label: "Of all clicks go to Google page 1",
                  body: "If your clinic is on page 2 or 3, you get almost no patient visits on your site.",
                },
                {
                  icon: Users,
                  stat: "75%+",
                  label: "Patient enquiries from online search",
                  body: "Every day, hundreds of Singaporeans search Google looking for doctors and clinics.",
                },
                {
                  icon: ShieldCheck,
                  stat: "MOH",
                  label: "Compliance is non-negotiable",
                  body: "If your website breaks MOH rules, Google will not rank it — even after you build a good website.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    custom={i}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500">
                      <Icon size={18} />
                    </div>
                    <p className="mb-1 text-2xl font-extrabold text-gray-900">{item.stat}</p>
                    <p className="mb-2 text-sm font-semibold text-gray-700">{item.label}</p>
                    <p className="text-[13px] leading-relaxed text-gray-500">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeUp} custom={3}>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Traditional SEO is not enough to win in this competition. You need healthcare-specific strategies. Google is extremely strict about which healthcare websites rank, because wrong medical information could directly affect people's health. Here is how healthcare SEO differs from regular SEO:
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Comparison table */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <SectionLabel>SEO Comparison</SectionLabel>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Regular SEO vs Healthcare SEO
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
              Daiki Media focuses on building patient trust, medical accuracy, and rankings — all according to Singapore and Google guidelines for healthcare searches.
            </p>
          </motion.div>
        </div>
        <DataTable data={COMPARISON_TABLE} />

        {/* CTA nudge */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-gray-900">Ready to get your clinic on Google page 1?</p>
                <p className="mt-1 text-[14px] text-gray-500">Daiki Media builds healthcare-specific SEO strategies for Singapore clinics, hospitals, and medical practices.</p>
              </div>
              <Link
                href="https://api.whatsapp.com/send?phone=601114850067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-red-600"
              >
                Get Started <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SINGAPORE HEALTHCARE REGULATIONS ────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Compliance</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Singapore Healthcare Regulations & Compliance
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Google follows strict government regulations for healthcare businesses in Singapore. If a business breaks these rules, its website gets penalised or completely removed from Google rankings. The three main healthcare regulators are:
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3">
              {REGULATORS.map((reg, i) => {
                const Icon = reg.icon;
                return (
                  <motion.div
                    key={reg.name}
                    variants={fadeUp}
                    custom={i}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-4 font-bold text-gray-900">{reg.name}</h3>
                    <ul className="space-y-2.5">
                      {reg.rules.map((rule) => (
                        <li key={rule} className="flex items-start gap-2 text-[13px] leading-relaxed text-gray-500">
                          <CircleCheck size={13} className="mt-0.5 flex-shrink-0 text-red-500" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeUp} custom={3} className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <p className="text-[15px] leading-relaxed text-gray-600">
                All these standards are required to be followed by healthcare business websites to rank and gain traffic on Google in Singapore. <strong>Daiki Media ensures that all guidelines and requirements are followed</strong> according to the Singapore government and Google — on every project, without exception.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HEALTHCARE SEO PROCESS ───────────────────────────────────────────── */}
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
                Daiki Media's Healthcare SEO Process for Singapore
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Daiki Media builds a customised healthcare SEO strategy specifically for your clinic, your doctors, your location, and your patient base in Singapore. Here is how we do it.
              </p>
            </motion.div>

            {/* Process steps */}
            <motion.div variants={fadeUp} custom={1} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  title: "Full Website Audit",
                  body: "Analyse your current website structure and design, check page load speed on mobile and desktop, review current rankings for important keywords, and check MOH compliance for regulatory issues.",
                },
                {
                  num: "02",
                  title: "Competitor Analysis",
                  body: "Analyse competitor websites — their content, structure, and backlinks. Identify gaps where you can outrank them and understand their strengths and weaknesses.",
                },
                {
                  num: "03",
                  title: "Patient Keyword Research",
                  body: "Research what patients actually search for in Singapore. Understand patient intent — are they looking for information or booking appointments? Identify high-value keywords.",
                },
                {
                  num: "04",
                  title: "Personalised Strategy",
                  body: "Build a customised strategy to improve your overall website authenticity and ranking — covering on-page SEO, content, technical fixes, local SEO, and link building.",
                },
              ].map((step, i) => (
                <div key={step.num} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="mb-3 text-4xl font-extrabold leading-none text-gray-100">{step.num}</p>
                  <h3 className="mb-2 font-bold text-gray-900">{step.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{step.body}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Website factors table */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Website Factors</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Factors We Focus On to Improve Website Authenticity and Ranking
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Every factor below directly impacts how Google evaluates your clinic's trustworthiness — and how patients perceive your credibility.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable data={WEBSITE_FACTORS_TABLE} />

        {/* What agencies do wrong */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>What to Avoid</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Mistakes Most SEO Agencies Make in Singapore Healthcare SEO
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Most SEO agencies try to rank through false claims and fake credentials. These methods result in website de-ranking or penalisation. At Daiki Media, we build every healthcare SEO strategy with 100% compliance.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {WRONG_PRACTICES.map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                  <AlertTriangle size={15} className="flex-shrink-0 text-red-400" />
                  <span className="text-[13px] font-medium text-red-700">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={2} className="mt-6">
              <Link
                href="/blog/local-seo-2026"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-red-500 transition-colors hover:text-red-600"
              >
                Read our blog on Local SEO in 2026: How to Rank Across Multiple Cities & Devices <ArrowRight size={14} />
              </Link>
            </motion.div>
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
                Why Choose Daiki Media for Healthcare SEO
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Most generic SEO agencies do not understand healthcare. They treat your clinic like a restaurant or retail store. This approach fails in healthcare every single time. Daiki Media is different — we specialise exclusively in healthcare SEO for Singapore clinics.
              </p>
            </motion.div>

            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              {WHY_CHOOSE.map((item, i) => {
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

            {/* what you get */}
            <motion.div variants={fadeUp} custom={4} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
              <h3 className="mb-5 font-bold text-gray-900">When you choose Daiki Media, you are choosing:</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "A healthcare SEO specialist who understands your unique challenges",
                  "A Singapore-based team who knows your local market",
                  "A compliance-first approach that protects your clinic from penalties",
                  "Transparent reporting showing real business results",
                  "A dedicated partner committed to your long-term success",
                  "10+ years of healthcare SEO experience working for you",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[14px] text-gray-600">
                    <CircleCheck size={15} className="mt-0.5 flex-shrink-0 text-red-500" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Agency comparison table */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 mb-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Daiki Media vs Others</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How We Compare to Other Agencies
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Your clinic deserves better than generic SEO. Your patients deserve to find you on Google. Let Daiki Media help you make that happen.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={AGENCY_COMPARISON_TABLE}
          ctaButton="Level Up Your Ranking"
          ctaLink="https://api.whatsapp.com/send?phone=601114850067"
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
                Healthcare SEO Is No Longer Optional for Singapore Clinics
              </h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <motion.div variants={fadeUp} custom={1} className="space-y-4">
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Every day, hundreds of patients search Google looking for doctors and clinics. If your clinic is not visible in these search results, you are losing patients to competitors who rank better.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  We have helped clinics rank higher, attract more patients, and grow revenue through Google search. Healthcare SEO requires expertise, compliance knowledge, and Singapore market understanding — this is not something generic SEO agencies can handle well.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  It requires a healthcare specialist who understands MOH regulations, patient trust signals, and how to build sustainable ranking growth. Daiki Media has spent over 10 years perfecting healthcare SEO. We know what works. We know what fails. We know how to protect your clinic from penalties while building strong rankings.
                </p>
                <div className="pt-2">
                  <Link
                    href="https://api.whatsapp.com/send?phone=601114850067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md"
                  >
                    Contact Daiki Media Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="grid grid-cols-2 gap-4">
                {[
                  { num: "3–5x", label: "Increase in patient enquiries after 6 months" },
                  { num: "60–90", label: "Days to first ranking improvements" },
                  { num: "4–6", label: "Months to positive SEO ROI" },
                  { num: "5+", label: "Clinic locations managed simultaneously" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm text-center">
                    <p className="text-2xl font-extrabold text-red-500">{s.num}</p>
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
                Healthcare SEO Singapore — Frequently Asked Questions
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Common questions from Singapore clinic owners about healthcare SEO, MOH compliance, and what to expect from working with Daiki Media.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-12">
              <div className="rounded-2xl border border-gray-100 bg-white px-4 sm:px-8 shadow-sm">
                {FAQS.slice(0, 5).map((faq, i) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
                ))}
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white px-4 sm:px-8 shadow-sm">
                {FAQS.slice(5).map((faq, i) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i + 5} />
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
              alt="Healthcare SEO Singapore CTA background"
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
                Ready to Get Your Clinic on Google Page 1?
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Contact Daiki Media today for a free healthcare SEO audit and let us show you exactly what is possible for your clinic. We cover your current rankings, technical issues, content gaps, MOH compliance status, and a realistic view of what is achievable.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                Your clinic deserves better than generic SEO. Your patients deserve to find you on Google. No commitment required.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                >
                  Call Us — Free Audit
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-500 transition-colors hover:text-red-500"
                >
                  Get Started <ArrowRight size={15} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  "MOH & SMC compliance-first approach",
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
