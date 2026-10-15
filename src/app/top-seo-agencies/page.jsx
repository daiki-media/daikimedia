import Link from "next/link";
import Footer from "@/components/footer/Footer";
import StaticBreadcrumbSchema from "@/components/schema/StaticBreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import { seoSpecialists, broaderAgencies } from "./agenciesData";

const pageUrl = "https://www.daikimedia.com/top-seo-agencies";

export const metadata = {
  title: "Best SEO Agencies in Malaysia 2026 Compared by Price",
  description:
    "Compare SEO agencies in Malaysia by cost, rating and team size. We explain how we compared them and disclose that Daiki Media is on the list.",
  alternates: {
    canonical: pageUrl,
  },
};

const dataPoints = [
  {
    label: "Rating",
    meaning: "The average score on the agency’s directory profile. Review counts weren’t available, so a 5.0 could rest on very few reviews.",
  },
  { label: "Min. project", meaning: "The smallest project size the agency says it accepts." },
  { label: "Hourly rate", meaning: "The hourly range the agency lists." },
  { label: "Team size", meaning: "Headcount band: 2-9, 10-49, 50-249 or 250-999." },
  {
    label: "Service mix",
    meaning: "The percentage split of the agency’s work. We use the SEO share to separate specialists from generalists.",
  },
];

const tableColumns = [
  { key: "rating", label: "Rating" },
  { key: "minProject", label: "Min. project" },
  { key: "hourlyRate", label: "Hourly rate" },
  { key: "team", label: "Team" },
  { key: "hq", label: "HQ" },
  { key: "serviceMix", label: "Service mix" },
  { key: "notes", label: "Notes" },
];

const faqData = [
  {
    question: "How much does SEO cost in Malaysia?",
    answer: "In the data on this page, minimum projects range from $1,000+ to $50,000+, and hourly rates from under $25 to $300. The final price depends on your site size, competition and how much content or technical work is needed.",
  },
  {
    question: "What does an SEO agency in Malaysia actually do?",
    answer: "Usually keyword research, technical fixes, on-page work, content and link building, plus reporting. If you want the basics explained, we’ve covered what an SEO company does and how to tell a good one from a bad one.",
    link: { text: "what an SEO company does and how to tell a good one from a bad one", href: "/what-is-seo-company" },
  },
  {
    question: "Is a bigger SEO agency better?",
    answer: "Not necessarily. Bigger teams cover more services, but smaller ones often give you more direct access. Fit and proof of results matter more than headcount.",
  },
  {
    question: "How long does SEO take to work?",
    answer: "Most campaigns need a few months before the movement is clear, and it depends on competition and the state of your site. Anyone promising instant rankings is a red flag.",
  },
  {
    question: "Why is Daiki Media listed on this page?",
    answer: "We’re an SEO agency and we’d rather be upfront about it than hide it. We’re measured on the same criteria as every other agency here, and we don’t rank anyone.",
  },
  {
    question: "How often is this page updated?",
    answer: "We review it regularly, and the last updated date is at the top.",
  },
];

const linkClass = "text-[#3F51B5] font-semibold hover:underline";

// Turns the optional link phrase inside an FAQ answer into an internal link.
function renderAnswer(item) {
  if (!item.link) return item.answer;
  const [before, after] = item.answer.split(item.link.text);
  return (
    <>
      {before}
      <Link href={item.link.href} className={linkClass}>
        {item.link.text}
      </Link>
      {after}
    </>
  );
}

function WebsiteLink({ agency }) {
  // Our own listing is an internal link; competitor sites open in a new tab and pass no link equity.
  if (agency.website.startsWith("/")) {
    return (
      <Link href={agency.website} className={linkClass}>
        Visit Website
      </Link>
    );
  }
  return (
    <a href={agency.website} target="_blank" rel="nofollow noopener noreferrer" className={linkClass}>
      Visit Website
    </a>
  );
}

// One table for all screen sizes: md+ shows normal columns; below md each row
// reflows into a card with an inline label per cell, so nothing is rendered twice.
function AgencyTable({ agencies }) {
  const cellClass = "grid grid-cols-[110px_1fr] gap-3 px-5 py-1 md:table-cell md:px-3 md:py-3 align-top";
  const mobileLabel = (label) => (
    <span className="md:hidden font-semibold text-[#1A1A1A]">{label}</span>
  );
  return (
    <div className="md:overflow-x-auto md:rounded-2xl md:border md:border-gray-100 md:shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
      <table className="w-full text-left text-sm">
        <thead className="hidden md:table-header-group bg-[#003366] text-white">
          <tr>
            <th className="px-3 py-3 font-semibold">#</th>
            <th className="px-3 py-3 font-semibold">Agency</th>
            {tableColumns.map((col) => (
              <th key={col.key} className="px-3 py-3 font-semibold whitespace-nowrap">
                {col.label}
              </th>
            ))}
            <th className="px-3 py-3 font-semibold">Website</th>
          </tr>
        </thead>
        <tbody className="block space-y-4 md:table-row-group md:space-y-0">
          {agencies.map((agency, index) => (
            <tr
              key={agency.rank}
              className={`block pb-4 rounded-2xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] md:table-row md:pb-0 md:rounded-none md:border-0 md:shadow-none ${
                index % 2 === 0 ? "bg-white" : "bg-white md:bg-[#F5F7FB]"
              }`}
            >
              <td className="hidden md:table-cell px-3 py-3 align-top text-gray-500">{agency.rank}</td>
              <td className="block px-5 pt-5 pb-2 text-lg md:table-cell md:px-3 md:py-3 md:text-sm align-top font-bold text-[#003366] md:text-[#1A1A1A] md:min-w-[140px]">
                <span className="md:hidden text-gray-400 mr-2">{agency.rank}</span>
                {agency.name}
              </td>
              {tableColumns.map((col) => (
                <td
                  key={col.key}
                  className={`${cellClass} text-gray-600 ${
                    col.key === "serviceMix" || col.key === "notes" ? "md:min-w-[180px]" : "md:whitespace-nowrap"
                  }`}
                >
                  {mobileLabel(col.label)}
                  <span>{agency[col.key]}</span>
                </td>
              ))}
              <td className={`${cellClass} md:whitespace-nowrap`}>
                {mobileLabel("Website")}
                <span>
                  <WebsiteLink agency={agency} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SeoPage = () => {
  return (
    <>
      <StaticBreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.daikimedia.com" },
          { name: "Best SEO Agencies in Malaysia", url: pageUrl },
        ]}
      />
      <FAQSchema faqs={faqData} pageUrl={pageUrl} />

      <main className="pt-12 pb-20 px-4 sm:px-6">
        {/* Intro */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Best SEO Agencies in Malaysia 2026: Top SEO Companies in Kuala Lumpur, Penang and Johor Compared
          </h1>
          <p className="text-gray-500 italic mb-8">Last updated: 15 October 2026</p>
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Searching for the best SEO agency in Malaysia usually ends with a long list of names and no real way to tell them apart. This page puts 49 SEO companies in Malaysia side by side, using the same details for each: rating, minimum project size, hourly rate, team size and how much of their work is actually SEO.
            </p>
            <p>
              If you only want a team that does search optimisation and little else, start with the 23 SEO specialists in the first table. If you’d rather have SEO bundled with a new website, ads or branding, the second table is a better fit.
            </p>
            <p className="bg-[#F5F7FB] border-l-4 border-[#3F51B5] rounded-r-xl p-5">
              <strong>One thing to be upfront about:</strong> Daiki Media is an SEO agency, and we’re on this list. We’ve been measured on the same criteria as every other agency, nobody has been ranked, and no agency paid to be included.
            </p>
          </div>
        </section>

        {/* Methodology */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
            How We Compared the Best SEO Companies in Malaysia
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Where the data comes from.</strong> All agency details were taken from a public business directory in October 2026. Ratings, minimum project size, hourly rate, team size and service split are shown as each agency published them. We haven’t audited anyone’s work or independently verified their figures.
          </p>

          <div className="rounded-2xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden mb-6">
            <table className="w-full text-left">
              <thead className="hidden md:table-header-group bg-[#003366] text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold w-1/3">Data point</th>
                  <th className="px-6 py-4 font-semibold">What it means</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {dataPoints.map((row, index) => (
                  <tr
                    key={row.label}
                    className={`block md:table-row border-b border-gray-100 last:border-b-0 md:border-b-0 ${index % 2 === 0 ? "bg-white" : "bg-[#F5F7FB]"}`}
                  >
                    <td className="block md:table-cell px-5 pt-5 pb-1 md:px-6 md:py-4 font-semibold text-[#003366] md:text-[#1A1A1A] align-top">
                      {row.label}
                    </td>
                    <td className="block md:table-cell px-5 pb-5 md:px-6 md:py-4 text-gray-600 leading-relaxed">
                      {row.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>How the list is organised.</strong> Agencies are split into two groups by SEO share. The first group is agencies where SEO makes up 50% or more of their work. The second group is everyone else. Inside each group the order follows the source directory. It is not a ranking, and we’re not saying any of these agencies is the best for every business.
          </p>

          <p className="font-bold text-[#1A1A1A] mb-3">Limits worth knowing about</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>“No reviews” means there’s nothing to compare, not that the agency is weak.</li>
            <li>Price bands are a rough guide only. You’ll get a real number from a scoped quote.</li>
            <li>Profile descriptions are self-reported or directory-generated, so confirm anything important with the agency directly.</li>
            <li>
              If you’re listed here and something is wrong, email{" "}
              <a href="mailto:lukesh@daikimedia.com" className={linkClass}>
                lukesh@daikimedia.com
              </a>{" "}
              and we’ll review it promptly.
            </li>
          </ul>
        </section>

        {/* What the data shows */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
            SEO Agency Malaysia Comparison: What the Data Shows
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Putting 49 profiles next to each other turned up a few things you won’t see on a typical “top agencies” list.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Ratings barely separate agencies.</strong> Only 26 of the 49 have a rating, and 20 of those 26 sit at a perfect 5.0. The other 23 have no reviews at all, so a rating alone won’t help you choose.
            </li>
            <li>
              <strong>Most SEO specialists start cheap.</strong> Of the 23 SEO-focused agencies, 18 list a minimum project of $1,000+. Only a few ask for $5,000 or more.
            </li>
            <li>
              <strong>Small teams dominate.</strong> Nine of the 23 specialists are teams of 2 to 9 people. Only Denave sits in the 250-999 band.
            </li>
            <li>
              <strong>Pure SEO shops are rare.</strong> Just four agencies list 100% of their work as SEO: SEO.my, Sensorytics Solutions, TNT SEO and BizTransit.
            </li>
            <li>
              <strong>Pricing has a wide spread.</strong> The highest minimum project is $50,000+ (Nick Metrics Marketing Agency) and the highest hourly band is 200-300 (Pounce Agency). Six agencies list hourly rates under $25: Daiki Media, SEO.my, Sensorytics Solutions, MFMY SEO Service Malaysia, LOCUS-T and Arcadia Bytes.
            </li>
            <li>
              <strong>Many “SEO agencies” are really web or branding firms.</strong> Check the service mix before assuming an agency lives and breathes search.
            </li>
          </ul>
        </section>

        {/* Group 1 */}
        <section className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6 max-w-4xl mx-auto">
            Best SEO Specialists in Malaysia: SEO Companies Focused 50% or More on SEO Services
          </h2>
          <AgencyTable agencies={seoSpecialists} />
        </section>

        {/* Group 2 */}
        <section className="max-w-7xl mx-auto mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
              Top Digital Marketing and Web Design Agencies in Malaysia Offering SEO Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These agencies treat SEO as one part of a bigger offer. That can work well if you’re rebuilding a site and want the search side handled by the same people, though it’s worth asking who actually does the SEO work. If you’re comparing across services, we also keep lists of{" "}
              <Link href="/top-digital-marketing-agencies" className={linkClass}>
                digital marketing agencies in Malaysia
              </Link>{" "}
              and{" "}
              <Link href="/web-development-agencies" className={linkClass}>
                web development agencies in Malaysia
              </Link>
              .
            </p>
          </div>
          <AgencyTable agencies={broaderAgencies} />
        </section>

        {/* How to choose */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
            How to Choose the Best SEO Company in Malaysia for Your Business
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>Start with what you actually need.</strong> A business that wants to rank in one city has different needs from an online store with thousands of products. If customers find you by searching “near me”,{" "}
              <Link href="/local-seo-services" className={linkClass}>
                local SEO for businesses that serve a specific area
              </Link>{" "}
              is a different job from general SEO, so check the agency has done it before.
            </p>
            <p>
              <strong>Match the group to the goal.</strong> The SEO specialists fit when organic traffic is the main priority. The broader agencies make more sense when SEO is a side effect of a bigger project, like a new site or a rebrand.
            </p>
            <p>
              <strong>Be realistic about budget.</strong> Minimum projects on this page run from $1,000+ up to $50,000+, and hourly rates from under $25 to $300. A cheap quote isn’t automatically bad and an expensive one isn’t automatically good. What matters is what’s included and who does the work.
            </p>
            <p>
              <strong>Think about team size.</strong> Small teams of 2 to 9 usually mean you deal with the same person every time. Bigger teams cover more ground, but you may get passed between people.
            </p>
            <p>
              <strong>Ask for evidence, not promises.</strong> Any agency should be able to show named results with timeframes. For reference,{" "}
              <Link href="/our-seo-results" className={linkClass}>
                the SEO results we’ve documented for past clients
              </Link>{" "}
              show the kind of detail worth asking others for.
            </p>
            <p>
              <strong>Get an audit before you sign.</strong> The quickest way to see how an agency thinks is to ask what they’d find on your site. A decent{" "}
              <Link href="/seo-audits-services" className={linkClass}>
                website SEO audit
              </Link>{" "}
              should tell you what’s broken, what to fix first and why.
            </p>
          </div>

          <p className="font-bold text-[#1A1A1A] mt-8 mb-3">Watch for these red flags</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Guaranteed number one rankings</li>
            <li>No clear reporting</li>
            <li>Long lock-in contracts with no exit</li>
            <li>No named people on your account</li>
            <li>Vague answers about what the monthly fee covers</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
            SEO Agencies in Malaysia FAQ: Cost, Results and Choosing an SEO Provider
          </h2>
          <div className="space-y-6">
            {faqData.map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{renderAnswer(item)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mb-16 bg-[#003366] text-white rounded-[30px] p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Get a Free SEO Audit From a Malaysia SEO Agency
          </h2>
          <p className="text-gray-200 leading-relaxed">
            If you’re still deciding, send us your website and we’ll run a free audit so you can see where things stand before you talk to any agency. You can{" "}
            <a
              href="https://api.whatsapp.com/send?phone=601114850067"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline hover:text-gray-200"
            >
              message us on WhatsApp for the audit
            </a>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-white underline hover:text-gray-200">
              get in touch through the contact page
            </Link>
            .
          </p>
        </section>

        {/* Sources */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-6">
            Sources and Methodology Notes
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>
              Agency ratings, minimum project size, hourly rate, team size, location, service mix, founding years and profile descriptions come from a public business directory, accessed October 2026, as published by each agency.
            </li>
            <li>The statistics in the data section were calculated by Daiki Media from the 49 profiles above.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default SeoPage;
