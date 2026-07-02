"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { DataTable } from "@/components/service-single/dataTable";
import { useState } from "react";
import {
  Search,
  FileText,
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
  Languages,
  Smartphone,
  Scale,
  Network,
  CircleCheck,
  Sparkles,
  Coins,
  Dice5,
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
  rows: [
    {
      factor: "Keyword Competition",
      traditionalApproach: "Moderate to high",
      singaporeCasinoSeo: "Extremely high",
    },
    {
      factor: "Regulatory Laws",
      traditionalApproach: "Minimal compliance requirements",
      singaporeCasinoSeo: "Maximum compliance, varies by jurisdiction",
    },
    {
      factor: "Linking",
      traditionalApproach: "All backlinks allowed",
      singaporeCasinoSeo: "Only high-authority links can be used",
    },
    {
      factor: "Schema Markup",
      traditionalApproach: "Optional, at discretion",
      singaporeCasinoSeo: "Required, drives qualified user targeting",
    },
    {
      factor: "Localisation",
      traditionalApproach: "Optional",
      singaporeCasinoSeo: "Essential for targeting the regional market",
    },
    {
      factor: "Content Restrictions",
      traditionalApproach: "Minimal restrictions",
      singaporeCasinoSeo: "Strict advertising and gambling disclaimers required",
    },
  ],
};

const WHY_FAIL = [
  {
    icon: Scale,
    title: "They Don't Understand the Remote Gambling Act",
    body: "Common agencies write content without knowing what is legally allowed to be said to Singapore residents. They struggle to comply with advertising regulations and Google's quality guidelines, putting your rankings and your licence at risk.",
  },
  {
    icon: Network,
    title: "They Use the Same Backlink Strategy for Every Client",
    body: "Many publishers refuse to link to gambling content. Generic agencies that rely on standard outreach and directory links simply cannot build the high-authority backlinks casino sites actually need to rank.",
  },
  {
    icon: Languages,
    title: "They Ignore Singapore's Multilingual Audience",
    body: "A casino SEO strategy that only targets English keywords misses a significant portion of Singapore's Mandarin and Malay speaking audience — leaving real traffic and revenue on the table.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Compliance & Visibility Audit",
    body: "Before we start optimisation, we conduct a full audit of your site against Singapore's Remote Gambling Act and current search visibility. We analyse technical issues, compliance risks, and the exact gap between your rankings and your competitors.",
  },
  {
    num: "02",
    title: "Multilingual Keyword Research",
    body: "We research high-intent keywords across English, Mandarin, and Malay search behaviour — focusing on terms Singaporean audiences actually search before placing a bet, not just common global casino terms.",
  },
  {
    num: "03",
    title: "Compliant Content Build",
    body: "We build content that ranks for commercial keywords while staying within Singapore's advertising rules, with properly structured responsible gambling messaging that builds trust signals.",
  },
  {
    num: "04",
    title: "Specialist Link Building",
    body: "We create backlinks from Singapore sports media, regional iGaming publications, and authority sites willing to link to casino content — something most generic agencies simply cannot access.",
  },
];

const FUTURE_POINTS = [
  {
    icon: Smartphone,
    title: "Mobile-First Play",
    body: "In Singapore, most users play on their phone, not a desktop. Operators that have not fully optimised their site for mobile will keep declining, simply because Google ranks mobile experience first and players expect a smooth mobile site by default.",
  },
  {
    icon: Sparkles,
    title: "Smart Personalisation & Live Dealer Growth",
    body: "Platforms now suggest games, bets, and bonuses based on what each player actually likes. At the same time, live dealer technology keeps getting better, letting players enjoy blackjack, roulette, and baccarat through high-quality video, right from their phone.",
  },
  {
    icon: Globe,
    title: "Regional Expansion",
    body: "While Singapore itself stays tightly regulated, nearby markets across Southeast Asia are opening up. Platforms that build a smart, compliant SEO foundation now will be in a much stronger position to expand into these markets as they grow.",
  },
  {
    icon: Coins,
    title: "Crypto Payment Growth",
    body: "More platforms are starting to accept Bitcoin, Ethereum, and other cryptocurrencies, giving players an extra payment option beyond traditional banking. As this trend grows, even tightly regulated markets like Singapore may see clearer rules on how crypto fits into legal iGaming products.",
  },
  {
    icon: TrendingUp,
    title: "A Long-Term Digital Strategy",
    body: "To stay ahead in Singapore's casino market, operators need more than just rankings today. That means combining strong organic SEO, smart paid campaigns, affiliate partnerships, and content built for Singapore's multilingual audience, all working together as the market keeps evolving.",
  },
];

const TRUST_TOOLS = {
  rows: [
    {
      tool: "Deposit Limits",
      description: "Enables players to cap how much they can deposit and withdraw within a set period",
    },
    {
      tool: "Self-Exclusion",
      description: "Allows players to exclude themselves from all online gambling activities on a platform",
    },
    {
      tool: "Reality Checks",
      description: "Real-time session timer notifications to keep players aware of time spent gambling online",
    },
    {
      tool: "Cool-Off Periods",
      description: "Temporary account suspension to interrupt problem gambling behaviour patterns",
    },
    {
      tool: "Age Verification",
      description: "Mandatory identity checks to prevent underage access to casino and bet products",
    },
    {
      tool: "Random Number Generators",
      description: "Independently audited RNGs that guarantee fair outcomes across casino games and online slot products",
    },
  ],
};

const SERVICES = [
  {
    icon: Search,
    title: "PPC for Casino",
    body: "We offer high-quality paid advertising campaigns to help your brand stand out. Our casino PPC campaigns increase brand awareness and acquaint the audience with your services or products, helping you meet brand objectives and acquire qualified leads.",
    link: "/ppc-agency-singapore",
    linkLabel: "Know more about our Expert PPC Management Service",
  },
  {
    icon: Smartphone,
    title: "Casino App Marketing",
    body: "We help betting apps in Singapore get found, downloaded, and used by real players. Our team understands what makes someone actually install a betting app, not just see an ad and scroll past it.",
    link: "https://api.whatsapp.com/send?phone=601114850067",
    linkLabel: "Talk to Us About App Marketing",
    external: true,
  },
];

const WHO = [
  {
    icon: Trophy,
    title: "Casino Operators",
    body: "Singapore-facing platforms and offshore casinos targeting Singaporean players. We understand the compliance constraints, multilingual requirements, and search behaviour that define this market.",
  },
  {
    icon: TrendingUp,
    title: "Sportsbooks",
    body: "Sports betting platforms competing for high-intent Singaporean search traffic around football, horse racing, and major sporting events.",
  },
  {
    icon: Users,
    title: "Affiliate & Review Sites",
    body: "Casino and betting affiliate sites competing to earn trust and traffic in one of Southeast Asia's most saturated affiliate ecosystems.",
  },
];

const WHY_DAIKI = [
  { icon: ShieldCheck, title: "Compliance-First SEO", body: "Every strategy accounts for the Remote Gambling Act and Singapore's advertising restrictions from day one" },
  { icon: Network, title: "Real Affiliate Relationships", body: "We know how the affiliate ecosystem works and build the right partnerships to earn high-quality players" },
  { icon: BarChart2, title: "Data-Driven Approach", body: "We analyse your current marketing performance to find exactly what is holding growth back before we build a plan" },
  { icon: FileText, title: "Timing-Aware Content", body: "We understand how gambling news and regulatory shifts affect content timing in the Singapore market" },
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
    q: "How is online gambling regulated in Singapore?",
    a: "In Singapore, online gambling is regulated under the Remote Gambling Act, with Singapore Pools as the only licensed operator allowed to offer legal betting services to residents. Every casino SEO strategy we build accounts for this regulatory reality in both content and outreach.",
  },
  {
    q: "What is responsible gaming in the iGaming context?",
    a: "Responsible gaming means the player protection tools operators must offer — deposit limits, self-exclusion options, cool-off periods, reality checks, and age verification. Properly implemented, responsible gambling content is also a trust signal that supports rather than undermines your SEO performance.",
  },
  {
    q: "What are the growth opportunities in casino SEO for Singapore?",
    a: "Key opportunities include growing mobile gaming demand across Southeast Asia, multilingual SEO targeting English, Mandarin, and Malay audiences, and better local search visibility for compliant casino content.",
  },
  {
    q: "How can Daiki Media help my casino business grow in Singapore?",
    a: "We help casino operators, sportsbooks, and affiliate sites grow through Singapore-specific SEO, compliant content, technical optimisation, and high-authority local link building around Singapore's regulatory requirements.",
  },
  {
    q: "What technology powers casino platforms, and how does it affect SEO?",
    a: "Casino platforms run on game engines, random number generators for fair play, live dealer streaming, secure payment integrations, and built-in responsible gambling tools — all of which we account for when building schema markup and trust signals into your SEO strategy.",
  },
  {
    q: "What makes Daiki Media different from a generic SEO agency?",
    a: "Most agencies apply the same playbook to every client — that fails in Singapore's casino market. We build every strategy around the Remote Gambling Act, Singapore's multilingual audience, and the specialist link building approach this industry actually requires.",
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
export default function SGCasinoSEOPage() {
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
            <li className="text-red-500 font-medium">Singapore Casino SEO</li>
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
                  Specialist Singapore Casino SEO Agency
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900"
              >
                Best Singapore <span className="text-red-500 italic">Casino SEO</span>{" "}
                Agency
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                Ranking in Singapore's strictly regulated iGaming market is one of the biggest challenges casino operators struggle with. The market is small and highly competitive, which makes it hard to rank and gain traffic.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Casino SEO in Singapore is not the same as SEO in other Asian markets. It requires a deep understanding of Singapore's Remote Gambling Act, keyword targeting across English, Mandarin, and Malay audiences, responsible gambling compliance, and the specialist link building approach needed to operate in this strict market.
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="mb-8 text-[15px] leading-relaxed text-gray-500">
                Daiki Media is an SEO agency focused specifically on the Singapore casino and iGaming market. We work mostly with casino operators, sportsbooks, and affiliate sites, which means every strategy already accounts for Singapore's compliance requirements, multilingual audience, and the high-authority backlink restrictions unique to this industry.
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
                  href="/case-studies/igaming-lottery-seo"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-600 transition-colors hover:text-red-500"
                >
                  View Case Study <ArrowRight size={15} />
                </Link>
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
                alt="Singapore Casino SEO Agency — Daiki Media"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Projects Delivered</p>
              <p className="text-2xl font-extrabold text-red-500">500+</p>
              <p className="text-xs text-gray-500">iGaming & Casino Marketing Projects</p>
            </div>

            {/* floating badge */}
            <div className="absolute -right-4 top-6 flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <ShieldCheck size={16} className="text-green-500" />
              <p className="text-xs font-semibold text-gray-700">RGA Compliance-Safe SEO</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-3 gap-3 border-t border-gray-100 pt-8"
        >
          {[
            { num: "10+", label: "Years Digital Marketing Experience" },
            { num: "500+", label: "iGaming & Casino Marketing Projects" },
            { num: "100%", label: "Client Satisfaction Rate" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
              <p className="text-xl font-extrabold text-gray-900">{s.num}</p>
              <p className="mt-1 text-[11px] leading-snug text-gray-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── TRADITIONAL VS CASINO SEO ───────────────────────────────────────── */}
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
              Traditional SEO vs Casino SEO Singapore
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
              Keyword competition, regulatory laws, linking restrictions, schema markup, localisation, and content restrictions all make Singapore Casino SEO far more complex than standard SEO. Here is how they differ.
            </p>
          </motion.div>
          <DataTable data={COMPARISON_ROWS} />
        </div>
      </section>

      {/* ── WHY GENERIC AGENCIES FAIL ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Common Pitfalls</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Generic SEO Agencies Fail Casino Sites in Singapore
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Most SEO agencies work for clinics, restaurants, retail stores, and service businesses, not casino sites operating under Singapore's strict gambling regulations. Many casino operators choose agencies that apply traditional SEO and don't get the desired results, even after paying for months.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3">
              {WHY_FAIL.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <motion.div
                    key={pt.title}
                    variants={fadeUp}
                    custom={i}
                    className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900">{pt.title}</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{pt.body}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* stat callout */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col gap-4 rounded-2xl border border-red-100 bg-red-50 p-7 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-500 text-white">
                <Dice5 size={22} />
              </div>
              <p className="text-[15px] leading-relaxed text-gray-700">
                <span className="font-bold text-gray-900">Casinos are still the biggest part of the iGaming industry by far. </span>
                Online slots, table games, and live dealer experiences bring in the largest share of revenue across the entire iGaming market worldwide — which is exactly why generic, unspecialised SEO cannot compete here.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
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
                Daiki Media's Casino SEO Process for Singapore
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Our casino SEO team works closely with operators, affiliates, gaming portals, and platforms to help them get found online, attract more visitors, and turn that traffic into real players, while staying fully compliant with Singapore iGaming rules.
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

      {/* ── FUTURE OF THE MARKET ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Looking Ahead</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Future of the Casino & iGaming Market
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                To stay ahead in Singapore's casino market, operators need more than just rankings today. Here is where the market is heading, and how we build for it.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FUTURE_POINTS.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <motion.div
                    key={pt.title}
                    variants={fadeUp}
                    custom={i}
                    className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900">{pt.title}</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{pt.body}</p>
                  </motion.div>
                );
              })}
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
                Built for Casino Brands That Depend on Organic Traffic
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-gray-500">
                We work mostly with casino operators, sportsbooks, and affiliate sites across the Singapore iGaming market.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3">
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

      {/* ── TRUST & RESPONSIBLE GAMBLING TOOLS ──────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Trust Signals</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Platform Tools We Help You Showcase
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Every casino, betting, or affiliate business we work with gets a data-driven approach from day one. We optimise how each of these tools is presented on your platform to build an engaging, trustworthy user experience — and stronger organic trust signals.
              </p>
            </motion.div>
            <DataTable data={TRUST_TOOLS} />
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Casino SEO Services</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Level Up Your Business Performance
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Daiki Media offers a complete range of SEO solutions built specifically for casino and gambling businesses in Singapore. We understand the unique challenges this industry faces, from strict regulations to high competition, and we build our strategies around exactly that.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
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
                      <h3 className="mb-2 font-bold text-gray-900">{svc.title}</h3>
                      <p className="mb-4 text-[14px] leading-relaxed text-gray-500">{svc.body}</p>
                      <Link
                        href={svc.link}
                        target={svc.external ? "_blank" : undefined}
                        rel={svc.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-red-500 transition-colors hover:text-red-600"
                      >
                        {svc.linkLabel} <ArrowRight size={14} />
                      </Link>
                    </div>
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
                Why Choose Daiki Media
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Daiki Media offers digital marketing services built specifically for casino and betting businesses in Singapore. Our team has real, hands-on experience across the entire iGaming market, from operator strategy and content creation to SEO, paid ads, and localisation for different markets.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-500">
                We understand how gambling news affects content timing, how Singapore's gambling regulations shape what you can and cannot say in a campaign, and how to build the right affiliate relationships that bring in real, high-quality players over time.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_DAIKI.map((pt, i) => {
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

            {/* results visual */}
            <motion.div variants={fadeUp} custom={4} className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
                <Image
                  src="/images/igaming-seo-agency-malaysia/Results Section Graphic.webp"
                  alt="Singapore Casino SEO performance reporting — Daiki Media"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Level Up Your Business Performance</h3>
                <p className="mb-6 text-[15px] leading-relaxed text-gray-500">
                  Our team works closely with clients to gain business insights, uncover issues, and drive desired results. Every casino, betting, or affiliate business we work with gets a data-driven approach from day one — we start by analysing your current marketing performance, find exactly what is holding your growth back, and build a clear plan that fits both your business goals and Singapore's regulatory requirements.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { num: "10+", label: "Years of Digital Marketing Experience" },
                    { num: "500+", label: "iGaming & Casino Marketing Projects" },
                    { num: "100%", label: "Client Satisfaction Rate" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center">
                      <p className="text-2xl font-extrabold text-red-500">{s.num}</p>
                      <p className="mt-1 text-[11px] leading-snug text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
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
                Transparent pricing built for Singapore casino and iGaming operators at every stage of growth.
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
                Singapore Casino SEO FAQs
              </h2>
            </motion.div>

            <div className="grid gap-0 lg:grid-cols-2 lg:gap-x-16">
              <div className="rounded-2xl border border-gray-100 bg-white px-6 shadow-sm">
                {FAQS.slice(0, 3).map((faq, i) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-gray-100 bg-white px-6 shadow-sm lg:mt-0">
                {FAQS.slice(3).map((faq, i) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i + 3} />
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
              alt="Singapore Casino SEO CTA background"
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
                Let's Talk About Your Singapore Casino SEO Growth
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                If you are relying entirely on paid ads and affiliate deals to acquire players, you are at the mercy of platform policy changes and CPA negotiations. SEO is the channel that changes that equation.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                Daiki Media has hands-on experience with casino SEO in the Singapore market. We know how the affiliate ecosystem works, how Google treats gambling content under Singapore's regulatory framework, how local players search across English, Mandarin, and Malay, and what it actually takes to move a casino site up the rankings.
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
                  href="/our-seo-results"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-500 transition-colors hover:text-red-500"
                >
                  View SEO Results <ArrowRight size={15} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  "Trusted by casino operators across Singapore and Southeast Asia",
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
