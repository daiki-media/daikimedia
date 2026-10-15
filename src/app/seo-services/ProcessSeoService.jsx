const phases = [
  {
    period: "Month 1",
    title: "Audit and Foundation",
    desc: "We run a full technical SEO audit, review your existing content and backlink profile, and complete competitor and keyword gap analysis. Technical fixes identified as high-priority begin immediately. You receive a written strategy document outlining target keywords, content priorities and expected timelines.",
  },
  {
    period: "Months 2-3",
    title: "Implementation",
    desc: "On-page optimization is rolled out across priority pages. Content production begins according to the agreed brief schedule. Local SEO setup (Google Business Profile, citations) is completed where applicable. Early link building campaigns start. At this stage, movement in rankings is typically limited; this is normal and expected for a competitive market.",
  },
  {
    period: "Months 3-6",
    title: "Early Traction",
    desc: "This is when most clients start to see measurable movement: keyword rankings beginning to climb for lower-competition terms, early increases in organic impressions and clicks, and the first AEO/GEO content beginning to surface in relevant results. Reporting at this stage shifts from activity-based (\"what we did\") to outcome-based (\"what changed\").",
  },
  {
    period: "Months 6-12",
    title: "Compounding Growth",
    desc: "Rankings for more competitive keywords improve as domain authority builds. Content volume and internal linking depth compound. This is typically when clients see the traffic and lead growth that justifies the investment, and when strategy is refined based on what is actually working for your specific market.",
  },
];

export default function ProcessSeoService() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 text-center">
          Our Process: What Happens Month by Month
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-12">
          SEO results depend on sequencing fixing foundational issues before layering on content and authority building. Here is the realistic shape of a typical engagement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.period}
              className="bg-[#F5F7FB] p-8 rounded-[30px] border border-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-sm font-bold text-[#FF4D3D] uppercase tracking-wide">{phase.period}</span>
              <h3 className="text-xl font-bold text-[#1A1A1A] mt-2 mb-3">{phase.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{phase.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mt-10">
          We do not promise page-one rankings within weeks any agency that does is not describing how search engines actually work. Timelines vary by competition level, starting domain authority, and market.
        </p>
      </div>
    </section>
  );
}
