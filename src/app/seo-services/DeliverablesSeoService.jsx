const deliverables = [
  {
    service: "Technical SEO Audit",
    receive: "A written audit document identifying crawl errors, site speed issues, indexing problems, broken links and structured data gaps, with a prioritised fix list",
  },
  {
    service: "On-Page Optimization",
    receive: "Title tags, meta descriptions, header structure and internal linking optimised across agreed pages, with a before/after summary",
  },
  {
    service: "Local SEO",
    receive: "Google Business Profile setup or optimisation, citation building, and location-page optimisation, with monthly local ranking tracking",
  },
  {
    service: "Content & Blog Strategy",
    receive: "Keyword-mapped content briefs and published articles (volume depends on plan), each targeting a specific search intent",
  },
  {
    service: "Link Building",
    receive: "Backlinks from vetted, relevant websites, with a monthly log of links acquired, including domain authority of each source",
  },
  {
    service: "AEO Implementation",
    receive: "Content restructured and marked up to target featured snippets, voice search results and direct-answer boxes",
  },
  {
    service: "GEO Implementation",
    receive: "Content structured for citation by AI systems (ChatGPT, Gemini, Google AI Overviews), including schema markup and source-citation formatting",
  },
  {
    service: "Reporting",
    receive: "Weekly ranking updates and a monthly performance report covering traffic, keyword position changes, and conversions where tracking is set up",
  },
];

export default function DeliverablesSeoService() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
          What You Actually Get: SEO Services and Deliverables
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-10">
          Rather than describing SEO in abstract terms, here is what each service includes as a concrete deliverable.
        </p>

        {/* Below md each row stacks into a card (service on top, deliverable below); md+ shows a two-column table */}
        <div className="rounded-2xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden">
          <table className="w-full text-left">
            <thead className="hidden md:table-header-group bg-[#003366] text-white">
              <tr>
                <th className="px-6 py-4 font-semibold w-1/3">Service</th>
                <th className="px-6 py-4 font-semibold">What You Receive</th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {deliverables.map((row, index) => (
                <tr
                  key={row.service}
                  className={`block md:table-row border-b border-gray-100 last:border-b-0 md:border-b-0 ${index % 2 === 0 ? "bg-white" : "bg-[#F5F7FB]"}`}
                >
                  <td className="block md:table-cell px-5 pt-5 pb-1 md:px-6 md:py-4 font-semibold text-[#003366] md:text-[#1A1A1A] align-top">
                    {row.service}
                  </td>
                  <td className="block md:table-cell px-5 pb-5 md:px-6 md:py-4 text-gray-600 leading-relaxed">
                    {row.receive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 text-center mt-8">
          Every plan includes a written scope of work before work begins, so you know exactly what is being delivered and by when.
        </p>
      </div>
    </section>
  );
}
