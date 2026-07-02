import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  ShieldCheck,
  MousePointerClick,
  MapPin,
  Search,
  Key,
  FileText,
  Flag,
  Link as LinkIcon,
  Rocket,
  Trophy,
  ChevronRight,
  Settings,
  Star,
  Users,
  Clock,
  Globe,
  Lightbulb,
  CircleCheck,
  ArrowRight
} from "lucide-react";

import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "iGaming SEO Agency in the USA | DaikiMedia",
  description: "DaikiMedia helps iGaming brands grow with smart, compliance-aware SEO for regulated US markets. Get a strategy built for casino, sportsbook, and affiliate search visibility.",
  keywords: "iGaming SEO agency, igaming seo services, online gambling seo agency, regulated gambling seo, online casino seo services, sports betting seo agency",
  alternates: {
    canonical: "/en-us/igaming-seo-agency/",
  },
};

export default function Page() {
  return (
    <>
    <main className="bg-white dark:bg-dark-300">
      <section className="relative overflow-hidden bg-rose-50 py-20 text-white">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 hidden h-[520px] w-[1612px] -translate-x-1/2 lg:block lg:bg-[url('/images/hero-line-1.svg')] lg:bg-no-repeat dark:lg:bg-[url('/images/hero-line-1-dark.svg')]"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 hidden h-[444px] w-full lg:block lg:bg-[url('/images/hero-line-2.svg')] lg:bg-no-repeat dark:lg:bg-[url('/images/hero-line-2-dark.svg')]"
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 hidden h-[520px] w-[375px] -translate-x-1/2 max-lg:block max-lg:bg-[url('/images/hero-line-3.svg')] max-lg:bg-no-repeat dark:max-lg:bg-[url('/images/hero-line-3-dark.svg')]"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 hidden h-[444px] w-full max-lg:block max-lg:bg-[url('/images/hero-line-4.svg')] max-lg:bg-no-repeat dark:max-lg:bg-[url('/images/hero-line-4-dark.svg')]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 via-white to-amber-50/30 dark:from-rose-500/5 dark:via-dark-300 dark:to-amber-500/5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-rose-200/20 dark:bg-rose-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 dark:bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16">
            {/* Left Content - Improved typography */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Trophy className="w-4 h-4" />
                <span>Trusted by 50+ iGaming Brands</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
                iGaming SEO{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600 dark:from-rose-400 dark:to-amber-400 py-2">
                  Agency
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-4 leading-relaxed">
                We help casino, sportsbook, and affiliate brands dominate search in regulated US markets with compliance-first SEO strategies.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-4">
                The iGaming space is exciting, competitive, and fast-moving. It is also one of the hardest industries to grow in through search.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
                You are not only competing with other operators. You are also up against affiliates, review websites, comparison pages, media publishers, and huge brands with serious budgets. On top of that, every market has its own rules, search behavior, and local competition.
              </p>

              {/* CTA Buttons - Brand-aligned */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/contact"
                  className="group bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center gap-2 shadow-lg shadow-rose-600/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get Your Free SEO Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="group bg-white dark:bg-dark-200 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
                >
                  View Case Studies
                </Link>
              </div>

              {/* <div className="flex items-center gap-8">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-amber-600 border-2 border-white dark:border-dark-300"></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">50+</span> iGaming clients
                </div>
              </div> */}
            </div>

            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-600 to-amber-600 rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
                <div className="relative bg-white dark:bg-dark-200 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="/images/igaming-seo-agency/iGaming SEO Agency USA.png"
                    alt="iGaming SEO Agency USA"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Refined with brand colors */}
      <div className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-200 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" /> Google Partner</span>
            <span className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" /> Meta Business Partner</span>
            <span className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" /> 5K+ Trusted Businesses</span>
            <span className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" /> DesignRush Agency</span>
          </div>
        </div>
      </div>

      {/* Stats Section - Redesigned with brand styling inspired by Bird Marketing */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "iGaming Clients", icon: Users },
              { number: "8", label: "Regulated States", icon: Flag },
              { number: "12", label: "Years Experience", icon: Clock },
              { number: "3.6M", label: "Monthly Impressions", icon: Globe },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-50 dark:bg-rose-500/10 rounded-2xl mb-4 group-hover:bg-rose-100 dark:group-hover:bg-rose-500/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-rose-600 dark:text-rose-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why iGaming Needs a Specialist - Enhanced with better structure like Bird Marketing */}
      <section className="py-20 bg-gray-50 dark:bg-dark-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Why iGaming SEO Needs a Specialist</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              A normal SEO agency can rank a local service website or an online shop. iGaming is different.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              This industry is more competitive. More sensitive. More technical. And much less forgiving.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Search results for casino and gambling-related terms are packed with strong domains, aggressive publishers, and affiliate sites that have been building authority for years. Paid ads are expensive. Organic rankings are hard won. And users are often comparing multiple brands before they trust anyone.
            </p>
            <div className="text-left bg-white dark:bg-dark-300 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-3">That means your SEO strategy needs to do more than bring traffic:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CircleCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" /> It needs to build trust
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CircleCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" /> It needs to match intent
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CircleCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" /> It needs to work market by market
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <CircleCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" /> It needs to support your commercial goals, not just vanity rankings
                </li>
              </ul>
            </div>
          </div>

          {/* Cards redesigned with brand colors and hover effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: BarChart3,
                title: "Crowded SERPs",
                description: "Compete with affiliates and review giants. We build authority that cuts through.",
                color: "from-rose-500 to-amber-600"
              },
              {
                icon: ShieldCheck,
                title: "Trust & Compliance",
                description: "Pages must build confidence and follow state rules. Our content feels human, not robotic.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: Lightbulb,
                title: "Complex Intent",
                description: "From 'best bonus' to 'is this safe?' — we map content to real user journeys.",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: MapPin,
                title: "State Nuance",
                description: "New Jersey is not Michigan. We tailor for each regulated market's search behavior.",
                color: "from-amber-500 to-orange-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white dark:bg-dark-300 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes iGaming SEO So Competitive - New Section with brand styling */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">What Makes iGaming SEO So Competitive?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">There are a few reasons why online gaming SEO is harder than many other industries.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "1",
                title: "Search results are crowded",
                description: "For almost every valuable keyword, you are competing with operators, affiliates, directories, review websites, and editorial publishers. Everyone wants the same traffic."
              },
              {
                number: "2",
                title: "Trust matters a lot",
                description: "People do not sign up to a casino or sportsbook without feeling confident. Your content, site structure, and brand messaging all affect how trustworthy you look."
              },
              {
                number: "3",
                title: "Search intent changes fast",
                description: "Some users are looking for bonus offers. Some want game information. Some want reviews. Some are ready to register. Ranking means understanding that difference."
              },
              {
                number: "4",
                title: "Regulated markets need smarter targeting",
                description: "New Jersey is not the same as Michigan. Pennsylvania is not the same as West Virginia. State-specific behavior matters, and so does the search landscape."
              },
              {
                number: "5",
                title: "Technical SEO matters more",
                description: "A slow site, poor indexing, weak internal linking, or thin content architecture can quietly kill your growth, even if your brand is strong."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-dark-200 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-rose-200 dark:hover:border-rose-800 transition-all">
                <div className="w-12 h-12 bg-rose-100 dark:bg-rose-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-rose-600 dark:text-rose-400">{item.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              That is why working with a gambling SEO agency should feel strategic, not mechanical. You need a partner that sees the niche, the pressure, and the opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach - Enhanced with brand styling and better layout inspired by Bird Marketing */}
      <section className="py-20 bg-gray-50 dark:bg-dark-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">We Look at the Full Picture</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                At DaikiMedia, we treat iGaming SEO as a serious growth channel. We look at the full picture:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: BarChart3, text: "Market Competition" },
                  { icon: Search, text: "Search Demand" },
                  { icon: FileText, text: "Content Gaps" },
                  { icon: Settings, text: "Technical Blockers" },
                  { icon: ShieldCheck, text: "Trust Signals" },
                  { icon: MapPin, text: "State Opportunities" },
                  { icon: MousePointerClick, text: "Conversion Paths" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white dark:bg-dark-300 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                    <item.icon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                This is why brands looking for iGaming SEO services should not settle for a one-size-fits-all package. In this space, weak strategy gets buried fast.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-600 to-amber-600 rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-dark-300 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/igaming-seo-agency/Igaming Full Picture and SEO Experts in USA .png"
                  alt="iGaming Full Picture SEO"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What DaikiMedia Does - Enhanced with brand colors */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">What DaikiMedia Does as an iGaming SEO Agency</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              At DaikiMedia, we help iGaming brands grow with SEO strategies that are built around real business goals. We do not chase rankings just for screenshots. We focus on the kind of visibility that supports growth, authority, and qualified traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-500/5 dark:to-dark-300 rounded-2xl p-8 border border-rose-100 dark:border-rose-900/20">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our iGaming SEO services can include:</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Full SEO audits",
                  "Keyword strategy for casino brands",
                  "Site architecture planning",
                  "Content strategy & writing",
                  "Landing page optimization",
                  "State-targeted SEO planning",
                  "Internal linking strategy",
                  "Technical SEO improvements",
                  "Entity & trust signal development",
                  "SEO for new market expansion"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-10 rounded-2xl p-8">
              <p className="text-lg mb-4">Some brands come to us because they are not getting enough traffic.</p>
              <p className="text-lg mb-4">Others come because their traffic is growing, but not converting.</p>
              <p className="text-lg mb-4">And some come because they are entering a competitive regulated market and want to start the right way.</p>
              <p className="text-lg font-semibold">Each situation needs a different plan. That is why we build strategy around your brand, your market, and your commercial targets.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-medium border-b border-rose-200 dark:border-rose-800 hover:border-rose-600 dark:hover:border-rose-400 pb-0.5 transition-colors"
            >
              Need iGaming SEO services built around growth, not guesswork? Let DaikiMedia map your next move
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Metrics - Enhanced with brand gradient like Bird Marketing's awards section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">Results That Speak for Themselves</h2>
            <p className="text-xl text-gray-300">Real data from our Google Search Console and Analytics</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "15.2K", label: "Monthly Clicks", change: "+32%" },
              { value: "2.13M", label: "Impressions", change: "+28%" },
              { value: "12.3", label: "Avg Position", change: "+15%" },
              { value: "22.8K", label: "Conversions", change: "+41%" },
            ].map((metric, idx) => (
              <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold text-rose-400 mb-2">{metric.value}</div>
                <div className="text-gray-300 mb-2">{metric.label}</div>
                <div className="text-sm text-rose-400 bg-rose-400/10 inline-block px-3 py-1 rounded-full">
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Redesigned cards with brand colors inspired by Bird Marketing's service cards */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Complete iGaming SEO Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Everything you need to dominate search in regulated markets</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: "SEO Audits",
                description: "Comprehensive technical and content audits to identify opportunities.",
                items: ["Site architecture", "Indexation issues", "Competitor analysis"]
              },
              {
                icon: Key,
                title: "Keyword Strategy",
                description: "Target high-intent keywords that drive qualified traffic.",
                items: ["Intent mapping", "State targeting", "Long-tail opportunities"]
              },
              {
                icon: FileText,
                title: "Content Strategy",
                description: "Create content that ranks and converts while staying compliant.",
                items: ["Topic clusters", "Trust signals", "Local relevance"]
              },
              {
                icon: LinkIcon,
                title: "Link Building",
                description: "Build authority with quality backlinks from trusted sources.",
                items: ["Digital PR", "Industry partnerships", "Content outreach"]
              },
              {
                icon: Rocket,
                title: "Technical SEO",
                description: "Optimize site performance and search accessibility.",
                items: ["Core Web Vitals", "Mobile optimization", "Schema markup"]
              },
              {
                icon: Flag,
                title: "State SEO",
                description: "Tailored strategies for each regulated US market.",
                items: ["Local keywords", "Market research", "Compliance checks"]
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-gray-50 dark:bg-dark-200 rounded-2xl p-8 hover:bg-white dark:hover:bg-dark-300 hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 hover:border-rose-100 dark:hover:border-rose-900">
                <div className="w-14 h-14 bg-rose-100 dark:bg-rose-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-600 dark:group-hover:bg-rose-600 transition-colors">
                  <service.icon className="w-7 h-7 text-rose-600 dark:text-rose-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                      <CircleCheck className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO for Different Business Types - Enhanced with brand styling */}
      <section className="py-20 bg-gray-50 dark:bg-dark-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Tailored Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">SEO for Operators, Sportsbooks, Casino Brands, and Affiliates</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Not every iGaming business needs the same type of SEO. That is a big mistake many agencies make. They treat every project like it has the same goals and the same user journey. It does not.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "For casino operators",
                description: "You need strong landing pages, trust-driven content, state relevance, and content that can compete with affiliate-heavy search results."
              },
              {
                title: "For sportsbook brands",
                description: "You often need a mix of evergreen SEO, event-led content, and stronger search intent targeting around betting-related topics."
              },
              {
                title: "For affiliate websites",
                description: "You need authority, topical depth, comparison content, commercial trust, and stronger visibility across review and intent-based searches."
              },
              {
                title: "For gaming platforms entering new states",
                description: "You need location-aware strategy, cleaner architecture, and content that reflects the local search landscape rather than repeating the same message everywhere."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-dark-300 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              As casino SEO experts, we build strategies based on what your business actually needs, not what looks nice in a basic proposal.
            </p>
          </div>
        </div>
      </section>

      {/* State Coverage - Enhanced with brand colors and better visual */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Local Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">State-Based SEO Matters in the US iGaming Market</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              The US market is full of opportunity, but it is not one market. It is a collection of different competitive environments. That matters a lot for SEO.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              An iGaming brand targeting the United States should not rely only on broad national pages. In many cases, state-aware content can create stronger relevance, better long-tail reach, and more focused conversion pathways.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto mb-8">
            {[
              "New Jersey", "Pennsylvania", "Michigan", "Connecticut",
              "West Virginia", "Arizona", "Colorado", "Illinois",
              "Indiana", "Iowa", "Louisiana", "Maryland",
              "Massachusetts", "Nevada", "New York", "Ohio",
              "Oregon", "Rhode Island", "Tennessee", "Virginia"
            ].map((state, idx) => (
              <span key={idx} className="bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-800 px-5 py-3 rounded-full text-sm font-medium hover:border-rose-200 dark:hover:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all">
                {state}
              </span>
            ))}
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Each of these markets has its own level of competition, demand, maturity, and search behavior. That is why state pages should never be thin or copied. They should feel useful, relevant, and specific. Done right, they support both rankings and trust.
          </p>
        </div>
      </section>

      {/* Content That Ranks - Enhanced with brand styling */}
      <section className="py-20 bg-gray-50 dark:bg-dark-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Content That Ranks and Still Feels Human</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                A lot of websites in this industry have one big problem. They sound like they were written for search engines, not people. The page may mention the keyword ten times, but the user feels nothing. No clarity. No confidence. No connection.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                At DaikiMedia, we believe SEO content should still feel like real communication. It should be clear. Easy to follow. Professional. Confident. And interesting enough to keep the reader moving.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Natural keyword usage",
                  "Strong page flow",
                  "Easy wording",
                  "Real search intent",
                  "Commercial clarity",
                  "Helpful structure",
                  "Better CTA placement"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CircleCheck className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                This matters because your future client is not just scanning for services. They are also deciding whether your brand understands their space. You are not only ranking a page. You are shaping how your agency is remembered.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-600 to-amber-600 rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
              <Image
                src="/images/igaming-seo-agency/SEO Tips For Igaming .png"
                alt="SEO Tips For iGaming"
                width={600}
                height={600}
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Good iGaming SEO Looks Like - Enhanced */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Outcomes</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">What Good iGaming SEO Actually Looks Like</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">A strong iGaming SEO campaign is not just about traffic spikes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Better rankings for commercial terms",
              "Improved visibility for category pages",
              "Cleaner page targeting",
              "More relevant landing pages",
              "Stronger topical authority",
              "Better organic conversions over time",
              "Growth across high-intent searches",
              "Improved trust and brand perception"
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-dark-200 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-rose-200 dark:hover:border-rose-800 transition-all">
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-10">
            This is the kind of outcome serious brands look for. They do not just want visits. They want the right visits. That is where thoughtful SEO makes the difference.
          </p>
        </div>
      </section>

      {/* Why Brands Choose Us - Enhanced with brand styling inspired by Bird Marketing's team/awards sections */}
      <section className="py-20 bg-gray-50 dark:bg-dark-200">
          <div className="mb-12">
            <Image
              src="/images/igaming-seo-agency/Why Brands Chose Daikimedia.png"
              alt="Why Brands Choose DaikiMedia"
              width={600}
              height={600}
              className="w-full h-auto "
            />
          </div>
        <div className="container mx-auto px-4 max-w-7xl">
              <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Why Brands Choose DaikiMedia</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                There are many agencies that offer SEO. Fewer understand what makes iGaming SEO difficult. Even fewer know how to make it feel strategic, human, and commercially useful.
              </p>

            <div className="flex gap-20 mb-8">
              <div className="flex-1">
                <div className="bg-white dark:bg-dark-300 p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1. Clear strategy</h3>
                  <p className="text-gray-600 dark:text-gray-400">We do not throw random blog topics at your website and hope for the best. We map the structure, intent, and priorities properly.</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2. Branded thinking</h3>
                  <p className="text-gray-600 dark:text-gray-400">We care about how your pages sound, feel, and convert. SEO should support your brand, not flatten it.</p>
                </div>
                <div className="bg-white dark:bg-dark-300 p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">3. Execution with purpose</h3>
                  <p className="text-gray-600 dark:text-gray-400">From keyword targeting to page structure, everything should connect back to your business goals.</p>
                </div>
              </div>
              <div className="flex-1">
                {[
                  { icon: Star, title: "Proven iGaming Experts", desc: "12+ years of experience" },
                  { icon: Settings, title: "Custom Strategies", desc: "Tailored to your market" },
                  { icon: ShieldCheck, title: "White-Hat Practices", desc: "Sustainable approach" },
                  { icon: BarChart3, title: "Data-Driven Results", desc: "Measurable growth" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white dark:bg-dark-300 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-4">
                    <div className="w-10 h-10 bg-rose-100 dark:bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

          {/* Who We Work Best With - Enhanced with brand styling */}
          <div className="bg-white dark:bg-dark-300 rounded-3xl p-12 border border-gray-200 dark:border-gray-800">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Who We Work Best With</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our iGaming SEO services are best suited for brands that want long-term search growth and understand the value of building proper authority.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Casino operators",
                "Sports betting brands",
                "Poker platforms",
                "Gambling affiliates",
                "New market entrants",
                "White-label agency partners",
                "Gaming businesses needing organic growth"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-50 dark:bg-dark-200 p-3 rounded-lg">
                  <CircleCheck className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
              Whether your website already has traction or is still building its search presence, the right SEO foundation can save time, improve results, and reduce wasted effort later.
            </p>
          </div>
        </div>
      </section>

      {/* A Smarter Way to Grow - Enhanced with brand gradient */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-500/5 dark:to-dark-300 rounded-3xl p-12 border border-rose-100 dark:border-rose-900/20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">A Smarter Way to Grow Than Chasing Quick Wins</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Some agencies still sell SEO as if it is a fast trick. It is not. Especially in iGaming, real SEO growth comes from consistent quality, sharp targeting, and better structure over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Core service pages that convert",
                "Content clusters that support authority",
                "State pages with real value",
                "Stronger internal linking",
                "Better trust signals",
                "Smarter topical depth"
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-dark-300 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 hover:border-rose-200 dark:hover:border-rose-800 transition-all">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-10">
              This is how you create a website that does more than appear in search. It starts competing. And once it starts competing properly, it becomes much easier to scale into new services, new states, and new opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Process - Enhanced with brand colors and better visual */}
      <section className="py-20 bg-gray-50 dark:bg-dark-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">The DaikiMedia iGaming Growth Framework</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">We keep our process clear and practical. No buzzwords. No bloated reports. Just focused work that moves the site in the right direction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {[
              { step: "01", title: "Research", desc: "Market analysis & competitor research", full: "We study the search landscape around your niche, market, and competitors. This includes brand terms, non-brand terms, intent layers, and high-value commercial opportunities." },
              { step: "02", title: "Audit", desc: "Technical & content deep dive", full: "We look at indexation, crawl health, page structure, content depth, internal linking, speed, schema opportunities, and trust signals." },
              { step: "03", title: "Strategy", desc: "Custom roadmap development", full: "We help create or improve key landing pages, supporting pages, and topical clusters so your website is properly organized for growth." },
              { step: "04", title: "Execute", desc: "Implementation & optimization", full: "This includes better page targeting, stronger supporting content, clearer keyword mapping, and a smarter internal linking structure." },
              { step: "05", title: "Scale", desc: "Track, refine & expand", full: "SEO is not one fix. It is a system. We keep refining what matters, tracking performance, and expanding where the biggest opportunities are." },
            ].map((item, idx) => (
              <div key={idx} className="relative text-center group">
                {idx < 4 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-800">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-600 to-amber-600 w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )}
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto bg-white dark:bg-dark-300 border-2 border-rose-600 dark:border-rose-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-600 dark:group-hover:bg-rose-600 transition-colors">
                    <span className="text-2xl font-bold text-rose-600 dark:text-rose-400 group-hover:text-white transition-colors">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{item.desc}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-600 hidden group-hover:block transition-all">{item.full}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This process helps us work like a true online gaming SEO company, not just a vendor ticking boxes.
          </p>
        </div>
      </section>

      {/* Let's Build Your Strategy - Enhanced with brand colors */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm uppercase tracking-wider mb-3 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Let's Build Your iGaming SEO Strategy the Right Way</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            If your brand is serious about growing in search, the first step is having a plan that fits your niche and your market. That is what we do at DaikiMedia.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            We help iGaming brands build SEO strategies that are focused, branded, commercially aware, and designed for long-term growth in competitive search environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-700 text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center gap-2 shadow-lg shadow-rose-600/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Speak with DaikiMedia about iGaming SEO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center gap-2 shadow-lg shadow-gray-900/10 hover:shadow-xl hover:-translate-y-0.5"
            >
              Plan your casino SEO growth strategy
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with brand gradient */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate iGaming Search?</h2>
          <p className="text-xl text-rose-600 mb-10 max-w-2xl mx-auto">
            Get a free SEO audit and discover opportunities for your iGaming brand.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-rose-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get Your Free Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FAQ - Enhanced with brand styling and better layout */}
      <section className="py-20 bg-white dark:bg-dark-300">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "What is an iGaming SEO agency?",
                a: "An iGaming SEO agency helps online gaming, casino, sportsbook, poker, and gambling-related brands improve their organic visibility in search engines. This usually includes technical SEO, keyword strategy, content planning, and landing page optimization."
              },
              {
                q: "Why is iGaming SEO more difficult than normal SEO?",
                a: "It is more competitive, more trust-sensitive, and often more complex from a search intent point of view. Many keywords are commercially valuable, and the search results are crowded with strong competitors."
              },
              {
                q: "Can SEO help casino and gambling brands grow?",
                a: "Yes, when the strategy is built properly. SEO can improve visibility, strengthen brand discovery, support acquisition, and build long-term traffic across commercial and informational search terms."
              },
              {
                q: "Do you only work with casino brands?",
                a: "No. DaikiMedia can support a wider range of iGaming businesses, including sportsbooks, poker-related projects, gaming platforms, and affiliate websites."
              },
              {
                q: "Do regulated US markets need separate SEO pages?",
                a: "In many cases, yes. State-specific pages can help improve relevance and capture more focused search demand, especially in regulated markets where competition and user behavior vary."
              },
              {
                q: "How long does iGaming SEO take to show results?",
                a: "It depends on the market, competition, current site strength, and scope of work. In most cases, SEO is a medium to long-term growth channel, not an instant result."
              },
              {
                q: "What makes DaikiMedia different from a general SEO agency?",
                a: "We focus on strategy, branded messaging, and search structure that fits competitive industries. We aim to build SEO that feels commercially smart and human, not robotic or overstuffed."
              },
              {
                q: "Can DaikiMedia help with state-focused casino SEO pages?",
                a: "Yes. We can help build stronger content and structure for state-targeted pages such as New Jersey, Pennsylvania, Michigan, Connecticut, and West Virginia."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-dark-200 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-rose-200 dark:hover:border-rose-800 transition-all">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.q}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}