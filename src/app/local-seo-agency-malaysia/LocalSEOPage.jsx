"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Search,
  FileText,
  Link2,
  Star,
  Building2,
  Stethoscope,
  Scale,
  UtensilsCrossed,
  Wrench,
  Home,
  ShoppingBag,
  TrendingUp,
  Smartphone,
  Globe,
  MessageSquare,
  ShieldCheck,
  ClipboardList,
  Zap,
  BarChart2,
} from "lucide-react";
import FAQSchema from "@/components/schema/FAQSchema";
import StaticBreadcrumbSchema from "@/components/schema/StaticBreadcrumbSchema";

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

const SERVICES = [
  {
    icon: Building2,
    title: "Google Business Profile Optimisation",
    subtitle: "Your Most Important Local Asset",
    body: "Most Malaysian businesses have a GBP that is 40 to 60% complete. Wrong category. Missing services. No photos. No posting activity. Unanswered reviews. We do a full GBP build-out — primary category selection, service listings written with local search terms, a consistent photo strategy, a posting schedule, and full review and Q&A management so your listing converts the traffic it gets.",
    image: "/images/local-seo-agency-malaysia/Google Business Profile Optimisation.webp",
    imageAlt: "Google Business Profile optimisation Malaysia",
  },
  {
    icon: Search,
    title: "Local Keyword Research",
    subtitle: "Hyperlocal, Not Generic",
    body: "Generic keyword tools are not built for Malaysian local search. They miss the hyperlocal combinations that drive real business: \"plumber Subang Jaya,\" \"dental clinic Cheras walk in,\" \"renovation contractor Ampang affordable.\" We map every relevant keyword combination for your business, your service area, and the specific intent behind each search — including Bahasa Malaysia equivalents your competitors are not targeting.",
    image: "/images/local-seo-agency-malaysia/Local Keyword Research.webp",
    imageAlt: "Local keyword research Malaysia",
  },
  {
    icon: FileText,
    title: "Location Pages That Actually Rank",
    subtitle: "One Page Per Area, Done Properly",
    body: "If you serve multiple areas, you need a proper location page for each one. Not a copy-paste page with just the city name swapped out. A real page with genuine content about that area, the specific services you offer there, how to contact you in that location, and local trust signals that make Google treat it as a legitimate, separate entity.",
    image: "/images/local-seo-agency-malaysia/Location Pages.webp",
    imageAlt: "Location pages SEO Malaysia",
  },
  {
    icon: ClipboardList,
    title: "Citation Building and Cleanup",
    subtitle: "Clean NAP Data Everywhere",
    body: "A citation is any mention of your business name, address, and phone number on another website. Inconsistent citations are one of the most common and most damaging local SEO problems we see — different phone numbers, old addresses, name spelled differently across listings. We audit your entire citation profile, fix the inconsistencies, and build new citations on relevant Malaysian directories and platforms.",
    image: "/images/local-seo-agency-malaysia/Citation Building.webp",
    imageAlt: "Citation building and cleanup Malaysia",
  },
  {
    icon: Link2,
    title: "Local Link Building",
    subtitle: "Community-Relevant Authority",
    body: "Links from locally relevant websites are a strong signal to Google that your business is genuinely part of the local community. A link from a Penang business association, a mention in a KL lifestyle publication, a feature in a Selangor SME directory. These carry far more local ranking weight than a generic backlink from an overseas site.",
    image: "/images/local-seo-agency-malaysia/Local Link Building.webp",
    imageAlt: "Local link building Malaysia",
  },
  {
    icon: Star,
    title: "Review Strategy and Management",
    subtitle: "Volume, Recency, Response",
    body: "Reviews directly affect your local rankings. Volume matters. Recency matters. The ratio of positive to negative matters. And how you respond to reviews, including the negative ones, matters too. We build a review acquisition strategy that is completely above board — a system for asking satisfied customers at the right moment, with a direct link or QR code, and responding to every review in a way that builds trust.",
    image: "/images/local-seo-agency-malaysia/Review Strategy.webp",
    imageAlt: "Review strategy and management Malaysia",
  },
];

const INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Clinics and Healthcare",
    body: "Healthcare is one of the most competitive local SEO niches in Malaysia, falling under Google's YMYL category. We have worked with aesthetic clinics, dental practices, GP clinics, and specialist centres. We understand what Google requires to rank a healthcare business and build the E-E-A-T signals that make it happen.",
  },
  {
    icon: Scale,
    title: "Law Firms",
    body: "Legal services in Malaysia are high-value and highly competitive locally. Searchers looking for \"divorce lawyer Kuala Lumpur\" or \"employment lawyer Selangor\" are at the bottom of the funnel and ready to act. We help law firms rank for the practice area and location combinations that bring in the right clients.",
  },
  {
    icon: UtensilsCrossed,
    title: "F&B and Restaurants",
    body: "Restaurant SEO in Malaysia means owning the Map Pack for relevant \"near me\" and \"best cuisine in area\" searches. We work on GBP, local keyword content, review volume, and the Waze and FoodPanda visibility that matters specifically to this industry.",
  },
  {
    icon: Wrench,
    title: "Home Services",
    body: "Renovation contractors, plumbers, electricians, air-conditioning services, cleaning companies. Home services businesses in Malaysia live and die by local search. We map the hyperlocal keyword combinations that bring in job enquiries from the specific areas you cover.",
  },
  {
    icon: Home,
    title: "Real Estate",
    body: "Property agents and agencies compete for location-specific keywords across every part of Malaysia. We build local content strategies and GBP setups that surface your listings in the searches buyers and renters are already running.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    body: "Brick-and-mortar retail in Malaysia benefits enormously from Map Pack visibility and \"near me\" searches. Whether you operate a single outlet or a multi-location chain, we build the local presence that drives foot traffic.",
  },
];

const RESULTS = [
  { type: "Aesthetic clinic, Kuala Lumpur", result: "Entered Map Pack top 3 for 8 target keywords", timeline: "5 months", href: "/case-studies/aesthetic-clinic-seo" },
  { type: "Corporate gifting company", result: "180% growth in organic enquiry leads", timeline: "7 months", href: "/case-studies/corporate-gifting-seo" },
  { type: "Home services contractor", result: "From no GBP to 40+ monthly calls via Google", timeline: "4 months", href: null },
  { type: "Multi-location F&B brand", result: "Map Pack visibility across 3 cities simultaneously", timeline: "6 months", href: null },
];

const CITIES = [
  {
    name: "Kuala Lumpur",
    body: "The most competitive local search market in Malaysia. We focus on neighbourhood-level targeting alongside city-wide coverage, because \"dental clinic Bangsar\" and \"dental clinic KLCC\" are different searches with different competition levels.",
  },
  {
    name: "Petaling Jaya",
    body: "PJ has its own dense, active local search environment. Businesses in Damansara, SS2, Ara Damansara, and surrounding areas benefit from hyperlocal page strategies that capture searches specific to those neighbourhoods.",
  },
  {
    name: "Shah Alam & Subang Jaya",
    body: "Strong manufacturing, services, and retail presence with a growing local search audience. We build coverage that captures both the residential and commercial customer bases in these areas.",
  },
  {
    name: "Penang",
    body: "Penang's tourism, F&B, and services economy creates a unique local SEO landscape. We work with Penang businesses on both English and Bahasa Malaysia keyword coverage, with attention to the tourism-adjacent searches that drive significant traffic in George Town and Batu Ferringhi.",
  },
  {
    name: "Johor Bahru",
    body: "JB is one of Malaysia's fastest-growing urban markets. Cross-border search behaviour from Singapore adds an extra dimension to JB local SEO that requires specific handling.",
  },
  {
    name: "Klang Valley (Broader)",
    body: "Ampang, Cheras, Puchong, Kepong, Setapak, Wangsa Maju, and other Klang Valley areas all have their own search patterns. We build location strategies that cover the full Klang Valley footprint for businesses operating across multiple areas.",
  },
];

const STEPS = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Local SEO Audit",
    body: "We audit your GBP, your website's local signals, your citation profile, your review situation, and how you currently compare to the top-ranking competitors in your area. You get a clear, specific report — not a generic checklist.",
  },
  {
    num: "02",
    icon: Search,
    title: "Strategy",
    body: "We prioritise what to fix first, what to build next, and what the realistic timeline looks like. For most businesses, the first 60 days focus heavily on GBP and technical fixes because those move fastest. Content and links come in months two and three onward.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Execution",
    body: "We handle the GBP optimisation, citation work, location page creation, and link outreach simultaneously. Monthly reporting covers ranking movement, GBP insight data (calls, direction requests, website visits), and what we are working on next.",
  },
  {
    num: "04",
    icon: BarChart2,
    title: "Growth",
    body: "Local SEO compounds. A business that ranks in the Map Pack for ten keywords in month six will rank for thirty in month twelve if the programme continues. We keep building while your competitors stay static.",
  },
];

const WHY_POINTS = [
  {
    icon: Smartphone,
    title: "Mobile-First Search Behaviour",
    body: "Malaysia is one of Southeast Asia's most mobile-first markets. Internet penetration sits at over 92%, and the vast majority of local searches happen on smartphones. Over 75% of people who conduct a local search visit a business within 24 hours — making local SEO the highest-intent channel available.",
  },
  {
    icon: Globe,
    title: "Bilingual Search Reality",
    body: "Malaysian consumers search in English, Bahasa Malaysia, and sometimes Mandarin. A search for \"kedai makan sedap KL\" behaves very differently from \"best restaurant Kuala Lumpur,\" even though both are looking for the same thing. Local SEO in Malaysia means covering both, not picking one.",
  },
  {
    icon: MapPin,
    title: "Platform Behaviour Specific to Malaysia",
    body: "Waze is widely used for navigation. Grab and FoodPanda surface local businesses inside their apps. Review behaviour is strong on Google, Facebook, and local directories. Your local presence needs to work across all of these touchpoints, not just inside Google.",
  },
  {
    icon: MessageSquare,
    title: "Maps Pack Dominates Click Volume",
    body: "Google Maps results, the local pack, and Google Business Profile listings capture most of that click volume before a user even reaches the organic results below. If you are not in the Map Pack, you are invisible to the majority of ready-to-buy local searchers.",
  },
];

const FAQS = [
  {
    q: "How long does local SEO take to show results in Malaysia?",
    a: "For GBP optimisation, you can see movement in Google Maps within 4 to 8 weeks. For broader local keyword rankings on the website, meaningful improvement typically takes 3 to 6 months. Competitive industries like healthcare and legal take longer. We set specific expectations during the audit so you know what to expect at each stage, not just a vague \"6 to 12 months\" answer.",
  },
  {
    q: "What is Google Business Profile and do I need it?",
    a: "Google Business Profile (previously called Google My Business) is the free listing that controls how your business appears in Google Maps and the local pack. If you have a physical location or serve customers in a specific area, you absolutely need it. It is the single most impactful thing any Malaysian local business can do for their search visibility.",
  },
  {
    q: "Can I rank in multiple cities at the same time?",
    a: "Yes, but it requires a proper multi-location strategy. You cannot rank in Kuala Lumpur, Penang, and Johor Bahru using a single page. You need separate location pages with real, unique content for each area, and ideally separate GBP listings for each physical location. We handle all of this as part of our local SEO service.",
  },
  {
    q: "What is the difference between local SEO and regular SEO?",
    a: "Regular SEO targets national or global keyword rankings. Local SEO specifically targets location-based searches — the ones where Google shows a map, a local pack of three businesses, and location-specific results. The tactics are different: local SEO leans heavily on GBP, citations, reviews, and location pages, while regular SEO leans more on domain authority, backlinks, and content depth. Most Malaysian businesses need both working together.",
  },
  {
    q: "Do you handle Bahasa Malaysia listings and content?",
    a: "Yes. We create and optimise content in both English and Bahasa Malaysia. For GBP specifically, we ensure your services and description cover BM search terms where relevant. For websites, we handle BM keyword research separately from English, because the terms, the competition, and the search intent are different.",
  },
  {
    q: "What happens to my rankings if I stop local SEO?",
    a: "Rankings rarely disappear overnight. If you have built a strong local presence, you will hold your positions for a period of time after stopping. But competitors who keep working on their SEO will eventually overtake you, and GBP listings that go inactive do lose ground over time. Local SEO is maintenance as much as it is growth.",
  },
  {
    q: "Is local SEO worth it for a small business?",
    a: "Yes, and often more so than for large businesses. A small business with one location and a tight geographic focus can dominate a local market with a fraction of the budget a national brand spends on broad SEO. The search volume for \"plumber Kelana Jaya\" or \"florist Puchong\" is not huge, but the conversion rate is extremely high because the person searching is ready to act.",
  },
  {
    q: "How do I know if my GBP is properly optimised?",
    a: "The signs of a poorly optimised GBP include: primary category that does not match your main service, missing services list, no posts in the last 30 days, fewer than 10 photos, unanswered reviews, no Q&A content, and inconsistent NAP compared to your website. If you want a full assessment, the free audit we run covers all of this and gives you a specific action list.",
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
        <h3 className="text-[15px] font-semibold text-gray-900">{q}</h3>
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
export default function LocalSEOPage() {
  return (
    <main className="bg-white text-gray-900">
      <FAQSchema faqs={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
      <StaticBreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.daikimedia.com" },
          { name: "SEO Services", url: "https://www.daikimedia.com/seo-services" },
          { name: "Local SEO Services Malaysia", url: "https://www.daikimedia.com/local-seo-agency-malaysia" },
        ]}
      />

      {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li><Link href="/seo-services" className="hover:text-red-500 transition-colors">SEO Services</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-red-500 font-medium">Local SEO Services Malaysia</li>
          </ol>
        </div>
      </div>

      {/* ── INTERNAL LINK: full local SEO services page ─────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <p className="text-sm text-gray-500">
          Explore our full{" "}
          <Link href="/local-seo-services" className="font-semibold text-red-500 hover:text-red-600 transition-colors">
            Local SEO Services
          </Link>
        </p>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* left */}
          <div>
            <motion.div initial={false} animate="show" variants={stagger}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-600">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  Local SEO Services Malaysia
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl"
              >
                Local SEO Services{" "}
                <span className="text-red-500 italic">Malaysia</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                Someone in Bangsar just searched &ldquo;aircon service near me.&rdquo; Someone in Petaling Jaya typed &ldquo;best clinic Subang.&rdquo; Someone in Johor Bahru looked up &ldquo;renovation contractor JB.&rdquo; Those people are ready to spend money. The question is whether they find your business or your competitor&apos;s.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media helps Malaysian businesses show up in Google Maps, the local pack, and location-based searches across Kuala Lumpur, Selangor, Penang, Johor Bahru, and beyond.
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="mb-8 text-[15px] leading-relaxed text-gray-500">
                We do not just improve your rankings. We connect your business to customers who are already searching for exactly what you offer, in the city where you operate, at the moment they are ready to act.
              </motion.p>

              <motion.div variants={fadeUp} custom={5} className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=601114850067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                >
                  Get Your Free Local SEO Audit
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-600 transition-colors hover:text-red-500"
                >
                  View Case Studies <ArrowRight size={15} />
                </Link>
              </motion.div>

              {/* stats */}
              <motion.div
                variants={fadeUp}
                custom={6}
                className="mt-10 flex flex-wrap gap-8 border-t border-gray-100 pt-8"
              >
                {[
                  { num: "+180%", label: "Organic enquiry growth" },
                  { num: "Top 3", label: "Map Pack for 8 keywords" },
                  { num: "4–8 wks", label: "First GBP movement" },
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
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200/80">
              <Image
                src="/images/local-seo-agency-malaysia/Hero Image.webp"
                alt="Local SEO Services Malaysia — Daiki Media"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            {/* floating stat card */}
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Map Pack Result</p>
              <p className="text-2xl font-extrabold text-red-500">Top 3</p>
              <p className="text-xs text-gray-500">8 keywords in 5 months</p>
            </div>

            {/* floating badge top-right */}
            <div className="absolute -right-4 top-6 flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <MapPin size={16} className="text-red-500" />
              <p className="text-xs font-semibold text-gray-700">KL · PJ · Penang · JB</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY LOCAL SEARCH IN MALAYSIA ────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Why It Matters</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Local Search in Malaysia<br className="hidden sm:block" />
                Is Different
              </h2>
              <p className="mb-14 max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Malaysia is one of Southeast Asia&apos;s most mobile-first markets. Internet penetration sits at over 92%, and the vast majority of local searches happen on smartphones. That changes the stakes dramatically.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* image */}
              <motion.div variants={fadeUp} custom={1} className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
                  <Image
                    src="/images/local-seo-agency-malaysia/Why Malaysia Local Search Section.webp"
                    alt="Why local search in Malaysia is different"
                    width={600}
                    height={440}
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
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What Local SEO Services in Malaysia Actually Include
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Most businesses think local SEO is just setting up a Google Business Profile and hoping for the best. Done properly, local SEO is a system covering six connected areas.
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
                    {/* service image */}
                    <div className="relative h-56 w-full overflow-hidden bg-gray-50/60">
                      <Image
                        src={svc.image}
                        alt={svc.imageAlt}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* card body */}
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

      {/* ── INDUSTRIES ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Industries We Serve</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Built for the Industries That Depend on Local Search
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Local SEO is not a one-size-fits-all service. The keyword landscape, the competition level, and the conversion factors are completely different depending on what you do.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* industries image */}
              <motion.div variants={fadeUp} custom={1} className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
                  <Image
                    src="/images/local-seo-agency-malaysia/Industries Section Image.webp"
                    alt="Industries we serve with local SEO in Malaysia"
                    width={600}
                    height={480}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                </div>
              </motion.div>

              {/* industry list */}
              <div className="space-y-5">
                {INDUSTRIES.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      custom={i + 1}
                      className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-bold text-gray-900">{item.title}</h3>
                        <p className="text-[14px] leading-relaxed text-gray-500">{item.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Proof</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Results We Have Delivered
              </h2>
              <p className="mb-14 max-w-xl text-[15px] leading-relaxed text-gray-500">
                Local SEO results compound over time. Here is what that has looked like for businesses we have worked with.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              {/* results image */}
              <motion.div variants={fadeUp} custom={1} className="relative">
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
                  <Image
                    src="/images/local-seo-agency-malaysia/_Results Section Graphic.webp"
                    alt="Local SEO results — traffic and ranking data"
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
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Business Type</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Result</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RESULTS.map((r, i) => (
                        <tr key={r.type} className={i !== RESULTS.length - 1 ? "border-b border-gray-50" : ""}>
                          <td className="px-6 py-4 font-medium text-gray-700">
                            {r.href ? (
                              <Link href={r.href} className="text-red-500 hover:text-red-600 hover:underline underline-offset-2">
                                {r.type}
                              </Link>
                            ) : r.type}
                          </td>
                          <td className="px-6 py-4 font-bold text-red-500">{r.result}</td>
                          <td className="px-6 py-4 text-gray-400">{r.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Link
                  href="/case-studies"
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-red-500 transition-colors hover:text-red-600"
                >
                  See all case studies <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CITIES ──────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Cities We Cover</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Active Local SEO Across Malaysia
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-gray-500">
                We work with businesses across Malaysia. Our local SEO work is currently active in the following cities and areas.
              </p>
            </motion.div>

            {/* cities map graphic */}
            <motion.div variants={fadeUp} custom={0} className="relative mb-10 overflow-hidden rounded-2xl shadow-xl shadow-gray-200/70">
              <Image
                src="/images/local-seo-agency-malaysia/Cities Map Graphic.webp"
                alt="Local SEO coverage across Malaysia — KL, Penang, Johor Bahru and beyond"
                width={1200}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CITIES.map((city, i) => (
                <motion.div
                  key={city.name}
                  variants={fadeUp}
                  custom={i}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                    <MapPin size={18} />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{city.name}</h3>
                  <p className="text-[14px] leading-relaxed text-gray-500">{city.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
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
                Every engagement starts with understanding your business, your location, and your competition — not with a generic proposal.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
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
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500">
                      <Icon size={18} />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900">{step.title}</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{step.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING CONTEXT ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What Local SEO Costs in Malaysia
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Local SEO in Malaysia typically ranges from RM 1,500 to RM 5,000 per month for most SMEs. Here is what affects the price.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  icon: TrendingUp,
                  title: "Competition Level",
                  body: "Ranking for \"dental clinic Subang Jaya\" costs more than ranking for \"HR consultant Seremban,\" because the competition is completely different. We price based on what it actually takes to move you up in your specific market.",
                },
                {
                  icon: MapPin,
                  title: "Number of Locations",
                  body: "A single-location business has different needs from a company trying to dominate in five cities. Multi-location local SEO requires more location pages, more GBP profiles, and more citation work.",
                },
                {
                  icon: Zap,
                  title: "Starting Point",
                  body: "If your GBP is already well-optimised and your citations are clean, we can focus budget on content and links. If everything needs building from scratch, the early months require more foundational work.",
                },
                {
                  icon: ShieldCheck,
                  title: "Industry Type",
                  body: "Healthcare, legal, and financial services require more content depth and stronger E-E-A-T signals because of how Google treats those sectors. We factor this into the scope from the start.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i}
                    className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1.5 font-bold text-gray-900">{item.title}</h3>
                      <p className="text-[14px] leading-relaxed text-gray-500">{item.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-7"
            >
              <p className="text-[15px] leading-relaxed text-gray-700">
                Our local SEO engagements start from{" "}
                <span className="font-bold text-red-500">RM 1,800 per month</span>.
                The audit is always free and always includes a specific recommendation on budget based on your situation, not a generic package.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
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
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/local-seo-agency-malaysia/Local Closing CTA Background.webp"
                alt="local seo agency malaysia cta background"
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
                  Start With a Free Local SEO Audit
                </h2>
                <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                  Most Malaysian businesses are leaving Google Maps traffic on the table. Not because local SEO is complicated. Because nobody has taken the time to do it properly.
                </p>
                <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                  Daiki Media does the work that makes a real difference. The full GBP build-out. The citation cleanup. The location pages written for actual search intent. The review strategy that generates a steady flow of genuine feedback. And the local links that build the prominence Google rewards.
                </p>
                <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                  The audit is free. No commitment. We look at your current local presence, show you exactly what is holding you back, and give you a clear plan for fixing it.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="https://api.whatsapp.com/send?phone=601114850067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md active:scale-[0.98]"
                  >
                    Book Your Free Local SEO Audit
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/our-seo-results"
                    className="inline-flex items-center gap-1.5 text-[15px] font-medium text-gray-500 transition-colors hover:text-red-500"
                  >
                    View Our Results <ArrowRight size={15} />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-6">
                  {[
                    "Serving KL, PJ, Shah Alam, Penang, Johor Bahru and across Malaysia",
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