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
  ShieldCheck,
  ShoppingCart,
  CircleCheck,
  CheckCircle2,
  Search,
  Tag,
  Link2,
  MapPin,
  Zap,
  TrendingUp,
  Gauge,
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
const SEO_VS_ECOMMERCE_TABLE = {
  rows: [
    {
      goal: "Generate enquiries or leads",
      ecommerceGoal: "Increase product sales and online revenue",
    },
    {
      goal: "Home page and service pages",
      ecommerceGoal: "Product pages, category pages, brand pages",
    },
    {
      goal: "Service-based keywords",
      ecommerceGoal: "Product, category, brand, and buying-intent keywords",
    },
    {
      goal: "Usually 10 to 50 pages",
      ecommerceGoal: "Often hundreds or thousands of pages",
    },
    {
      goal: "Blogs and service content",
      ecommerceGoal: "Product descriptions, category pages, buying guides",
    },
    {
      goal: "Basic page linking",
      ecommerceGoal: "Product-to-category and related product linking",
    },
  ],
  columns: ["goal", "ecommerceGoal"],
};

// ─── static data ─────────────────────────────────────────────────────────────
const CHALLENGES = [
  "Strong competition from local and international ecommerce brands",
  "Thousands of similar products competing for the same keywords",
  "Low organic traffic and heavy dependence on paid advertising",
  "Poor product descriptions copied from manufacturers",
  "Slow website speed affecting user experience and rankings",
  "Weak internal linking between product and category pages",
  "Limited visibility for high-value keywords on Google",
  "Low conversion rates despite receiving website visitors",
];

const WHY_IMPORTANT = [
  "Increase Google rankings for product and category pages",
  "Drive targeted organic traffic from Singapore customers",
  "Reduce long-term dependence on paid advertising",
  "Improve website speed and mobile user experience",
  "Increase product visibility for high-intent keywords",
  "Build trust through helpful content and customer-friendly pages",
  "Generate consistent sales throughout the year",
  "Stay competitive in Singapore's fast-growing ecommerce market",
];

const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Complete SEO Audit",
    body: "We analyse your current ecommerce structure, product page setup, and technical health — including mobile speed, current rankings, and competitor gaps.",
  },
  {
    icon: Tag,
    title: "Keyword Research",
    body: "We focus on keywords that bring customers ready to buy — not just random traffic — and structure product information so Google understands what you sell.",
  },
  {
    icon: Gauge,
    title: "Fix Technical Problems",
    body: "We fix page speed so your shop loads in under 3 seconds on mobile, and ensure your site works perfectly across phones and tablets.",
  },
  {
    icon: Link2,
    title: "Build Backlinks",
    body: "We reach out to Singapore shopping blogs, review sites, and lifestyle publications, and create content other sites naturally want to link to.",
  },
  {
    icon: Zap,
    title: "Scale Content Efficiently",
    body: "AI tools help create optimised product descriptions faster — every single one reviewed and improved by our human experts before it goes live.",
  },
  {
    icon: MapPin,
    title: "Optimise for Local Search",
    body: "We build citations, encourage location-specific reviews, and create landing pages for multi-store brands to capture high-intent local customers.",
  },
];

const PRODUCT_OPTIMISATION_TABLE = {
  rows: [
    {
      aspect: "Product Titles",
      whatWeDo: "Clear, keyword-rich, benefit-focused",
      impact: "Improved click-through rate from Google",
    },
    {
      aspect: "Product Descriptions",
      whatWeDo: "200 to 300 words, SEO-optimised, conversion-focused",
      impact: "Increased conversion rate",
    },
    {
      aspect: "Product Images",
      whatWeDo: "Optimised file names, alt text, fast loading",
      impact: "Additional traffic from Google Image search",
    },
    {
      aspect: "Product Schema Markup",
      whatWeDo: "Price, availability, ratings, reviews",
      impact: "Increased ranking and richer search results",
    },
    {
      aspect: "Related Products",
      whatWeDo: "Internal linking to boost session duration",
      impact: "Increased average order value",
    },
  ],
  columns: ["aspect", "whatWeDo", "impact"],
};

const WHY_CHOOSE = [
  {
    icon: ShoppingCart,
    title: "Dedicated Ecommerce Team",
    body: "You do not get a random junior consultant or an overworked account manager juggling 20 clients. You get specialists who understand product pages, conversion funnels, and how to turn rankings into sales.",
  },
  {
    icon: Search,
    title: "Complete Ecommerce SEO Audit",
    body: "Before optimising, we audit your shop completely — current rankings, why competitors rank better, technical issues, and product page opportunities.",
  },
  {
    icon: Tag,
    title: "Customised Strategy for Your Shop",
    body: "We create a strategy specific to your products, target customers, competition, and revenue goals — faster results than generic ecommerce SEO.",
  },
  {
    icon: TrendingUp,
    title: "Marketplace Support",
    body: "Many Singapore shops sell on Lazada and Shopee but also want their own site. We help optimise your own shop and keep listings consistent across platforms.",
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

const SERVICES_OVERVIEW = [
  {
    type: "Technical SEO Audit",
    platforms: "Screaming Frog, GSC, Semrush",
    timeline: "5 to 10 days",
    results: "Crawl issues fixed, indexability improved",
    pricing: "One-Time or Retainer",
  },
  {
    type: "Ecommerce Keyword Strategy",
    platforms: "Semrush, Ahrefs, GSC",
    timeline: "2 to 4 weeks",
    results: "High-intent keyword map for all product pages",
    pricing: "Retainer",
  },
  {
    type: "On-Page and Product SEO",
    platforms: "Website CMS, Schema Markup",
    timeline: "4 to 8 weeks",
    results: "Improved search engine rankings per product",
    pricing: "Retainer",
  },
  {
    type: "AI-Driven SEO Optimisation",
    platforms: "AI SEO tools, GSC, Surfer SEO",
    timeline: "Ongoing",
    results: "Faster ranking gains via AI content signals",
    pricing: "Retainer",
  },
  {
    type: "Local SEO for Ecommerce",
    platforms: "Google Business Profile, Local Directories",
    timeline: "4 to 8 weeks",
    results: "Local visibility and in-store traffic uplift",
    pricing: "Retainer",
  },
  {
    type: "Enterprise SEO",
    platforms: "Full-site architecture, multi-category",
    timeline: "Ongoing",
    results: "Sustained organic traffic and visibility growth",
    pricing: "Retainer",
  },
];

const FAQS = [
  {
    q: "What is ecommerce SEO and how is it different from regular SEO?",
    a: "Ecommerce SEO helps online shops rank on Google so customers can find your products. It is different because ecommerce focuses on product pages, conversions, and sales instead of just traffic. We optimise product titles, descriptions, images, and reviews to both rank on Google and convince customers to buy. Regular SEO ignores these conversion factors.",
  },
  {
    q: "How long does ecommerce SEO take to show sales results in Singapore?",
    a: "Most shops see first rankings within 60 to 90 days for less competitive product keywords. Competitive keywords like \"buy laptop Singapore\" typically take 3 to 6 months. More importantly, you should see first sales from Google within 4 to 6 months if the strategy is correct. Timeline depends on product category, competition, and current domain strength.",
  },
  {
    q: "Will ecommerce SEO help my shop sell more products?",
    a: "Yes, when done correctly. Ecommerce SEO brings customers actively searching for your products on Google. Our Singapore shops see a 3 to 6x increase in sales from organic search after 6 to 12 months. Results depend on your product category, current rankings, and how many customers actually search for what you sell.",
  },
  {
    q: "How much does ecommerce SEO cost for a Singapore online shop?",
    a: "Ecommerce SEO pricing depends on your shop size and product complexity. Small shops starting out invest SGD 1,500 to 2,000 monthly. Growing shops typically invest SGD 1,600 to 2,500 monthly. Large shops with hundreds of products invest SGD 2,500 to 5,000 monthly. Most shops see positive ROI within 4 to 6 months when sales from Google exceed their monthly investment.",
  },
  {
    q: "Can my new shop rank quickly if I have no online presence?",
    a: "Yes, new shops actually have an advantage. You can build ecommerce SEO correctly from the start without fixing old mistakes. We optimise your product pages, site structure, and technical foundation properly from day one, and new shops often see faster initial results than established shops with existing SEO problems.",
  },
  {
    q: "What if my shop is on Lazada or Shopee? Can you still help?",
    a: "Yes, but there will be limits. We can optimise your listings on these marketplaces, but we cannot control the ranking criteria and algorithms of the marketplace itself. We would also suggest building up your own ecommerce website alongside your marketplace presence.",
  },
  {
    q: "How will I know whether my ecommerce SEO is effective?",
    a: "We provide clear and transparent monthly reports showing product keyword rankings, traffic to your shop from organic search, customers from Google, and actual sales revenue from search. You will know exactly which products are ranking and generating customers. If ecommerce SEO is not generating more sales, we will change the strategy.",
  },
  {
    q: "Do you guarantee my products will get ranked on the first page of Google?",
    a: "We cannot guarantee that because we do not control rankings — Google does. We can only guarantee the effort, transparency, and strategy we use, along with monthly reports on our progress. Most ecommerce shops get page 1 rankings within 6 months. If results are not progressing after 3 months, we will change our strategy at no additional cost.",
  },
];

const STATS = [
  { num: "30+", label: "Ecommerce Businesses Helped in Singapore" },
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
export default function SGEcommerceSEOPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li><Link href="/seo-services-singapore" className="hover:text-red-500 transition-colors">SEO Services</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-red-500 font-medium">Ecommerce SEO Singapore</li>
          </ol>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* left */}
          <div>
            <motion.div initial={false} animate="show" variants={stagger}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-600">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  Singapore Ecommerce SEO Specialists
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mb-6 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
              >
                Best Ecommerce SEO{" "}
                <span className="text-red-500 italic">Singapore</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="mb-4 text-lg leading-relaxed text-gray-600">
                With thousands of ecommerce stores in Singapore competing for the same customers, an appealing website is no longer enough. Without visibility on Google, chances are your customer buys from a competitor instead.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="mb-4 text-[15px] leading-relaxed text-gray-500">
                Daiki Media specialises in ecommerce SEO for Singapore shop owners and brands. We have helped 30+ businesses rank higher, attract more customers, and grow sales revenue through Google search — all while optimising for Singapore-specific needs like local payment methods, shipping logistics, and multilingual SEO.
              </motion.p>

              <motion.div variants={fadeUp} custom={4} className="mb-8 flex flex-wrap gap-3">
                {["Product Pages", "Category Pages", "Marketplace Support", "Technical SEO"].map((t) => (
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
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-200/80">
              <Image
                src="/images/igaming-seo-agency-malaysia/igaming-seo-agency-malaysia-hero.webp"
                alt="Best Ecommerce SEO Singapore — Daiki Media"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-200/70">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Businesses Helped</p>
              <p className="text-2xl font-extrabold text-red-500">30+</p>
              <p className="text-xs text-gray-500">Singapore ecommerce shops and brands</p>
            </div>

            <div className="absolute -right-4 top-6 hidden sm:flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-lg shadow-gray-200/60">
              <ShieldCheck size={16} className="text-green-500" />
              <p className="text-xs font-semibold text-gray-700">Ecommerce SEO Specialists</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS ECOMMERCE SEO ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <SectionLabel>Ecommerce SEO Overview</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What Is Ecommerce SEO and Why Is It Important in Singapore?
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Ecommerce SEO is the method by which you optimise your ecommerce website to rank higher on Google based on keywords related to your products — helping you generate more traffic organically and increase sales in the long run.
              </p>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <motion.div variants={fadeUp} custom={1} className="space-y-5">
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Singapore is one of the most advanced nations regarding internet and smartphone use in the world. Most consumers compare products, prices, and shipping methods before purchasing online — so where you rank matters more than ever.
                </p>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  Google ranks websites that provide helpful, original, and trustworthy content. Ecommerce websites with clear product information, fast loading speeds, secure checkout, and a mobile-friendly experience are more likely to rank higher and gain customer trust.
                </p>

                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-bold text-gray-900">Why Ecommerce SEO Is Important</h3>
                  <ul className="space-y-3">
                    {WHY_IMPORTANT.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-gray-600">
                        <CircleCheck size={15} className="mt-0.5 flex-shrink-0 text-red-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* right – challenges */}
              <motion.div variants={fadeUp} custom={2}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-bold text-gray-900">Common Challenges Ecommerce Businesses Face</h3>
                  <ul className="space-y-3">
                    {CHALLENGES.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[14px] text-gray-600">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.p variants={fadeUp} custom={3} className="mt-8 max-w-3xl text-[14px] leading-relaxed text-gray-500">
              At Daiki Media, we understand that every ecommerce business is different. We don&apos;t use the same SEO strategy for every online store. Our team analyses your products, competitors, target audience, and market opportunities before creating a customised SEO plan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── HOW ECOMMERCE SEO DIFFERS ───────────────────────────────────────── */}
      <section className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Regular SEO vs Ecommerce SEO</SectionLabel>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How Ecommerce SEO Differs From Regular SEO
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Both aim to boost Google rankings, but the approach is completely different. Service businesses want form fills and calls — ecommerce shops need visitors to discover products and buy them online.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable data={SEO_VS_ECOMMERCE_TABLE} />
      </section>

      {/* ── COMMON MISTAKES ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Common Mistakes</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Common Mistakes Many SEO Agencies Make
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Ecommerce SEO requires a completely different approach. Generic agencies often make these mistakes on online stores.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Optimising only the homepage while ignoring product and category pages",
                "Using duplicate product descriptions copied from suppliers",
                "Targeting broad keywords instead of high-intent buying keywords",
                "Ignoring product schema and structured data",
                "Poor internal linking between related products and categories",
                "Slow-loading product pages that increase bounce rates",
                "Not optimising product images with proper file names and alt text",
                "Failing to improve the mobile shopping experience",
                "Ignoring technical issues like broken links and crawl errors",
                "Tracking only traffic instead of actual sales and conversions",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-500">
                    {i + 1}
                  </span>
                  <p className="text-[14px] leading-relaxed text-gray-600">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} custom={4} className="mt-10 rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-gray-900">Ready to grow your Singapore online store?</p>
                  <p className="mt-1 text-[14px] text-gray-500">Work with a team that builds customised strategies for your products, competitors, and customers — not generic SEO.</p>
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

      {/* ── OUR PROCESS ──────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Daiki Media&apos;s Ecommerce SEO Process for Singapore
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Every ecommerce shop in Singapore is different, so we build a customised strategy for your shop, your products, your target customers, and your business goals.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS_STEPS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i}
                    className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      <span className="mr-2 text-red-500">STEP {i + 1}</span>
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT OPTIMISATION TABLE ───────────────────────────────────────── */}
      <section className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Product Page SEO</SectionLabel>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What We Optimise on Every Product Page
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                We optimise every product page for both Google and customers — writing descriptions that rank for keywords and convince customers to buy.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={PRODUCT_OPTIMISATION_TABLE}
          ctaButton="Level Up Your Business with Us"
          ctaLink="/contact"
        />
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <SectionLabel>Why Choose Daiki Media</SectionLabel>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Daiki Media for Ecommerce SEO
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Generic SEO companies view your online store like a service business or clinic and focus on traffic instead of sales. We do one thing — help ecommerce businesses rank better on Google and sell more.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
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
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
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
                Our Ecommerce SEO Pricing Plans
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                Transparent, results-focused pricing built for Singapore online stores at every stage of growth.
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

      {/* ── SERVICES OVERVIEW ────────────────────────────────────────────────── */}
      <section className="pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={false}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Services Overview</SectionLabel>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ecommerce SEO Services Overview
              </h2>
              <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
                A clear breakdown of what each service includes, the tools we use, and what results to expect.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <DataTable
          data={{
            rows: SERVICES_OVERVIEW,
            columns: ["type", "platforms", "timeline", "results", "pricing"],
          }}
        />
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
                Ecommerce SEO Frequently Asked Questions
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
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/igaming-seo-agency-malaysia/Closing CTA Background.webp"
              alt="Ecommerce SEO Singapore CTA background"
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
                Ready to Grow Your Singapore Online Store?
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed text-gray-500">
                SEO for ecommerce sites is no longer optional in Singapore. Thousands of shoppers use Google every day to find products like yours — failure to rank means losing business to competitors who already do.
              </p>
              <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
                We have been doing SEO for Singapore ecommerce sites for more than 10 years. Let us run a free audit for your ecommerce site and show you the potential it holds. No commitment required.
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
                  "Trusted by 30+ ecommerce businesses in Singapore",
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
