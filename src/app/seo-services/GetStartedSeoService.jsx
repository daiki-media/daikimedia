import Link from "next/link";

const steps = [
  {
    title: "Request your free audit",
    desc: "via WhatsApp or the contact form - we review your site and current rankings",
  },
  {
    title: "Strategy call",
    desc: "- we walk through the findings, discuss realistic timelines for your market and competition level, and recommend a plan",
  },
  {
    title: "Written scope of work",
    desc: "- you receive a clear breakdown of deliverables before committing to anything",
  },
  {
    title: "Onboarding",
    desc: "- technical fixes and foundational work begin in month one",
  },
  {
    title: "Monthly reporting",
    desc: "- you receive regular updates showing what was done and what changed, with a strategy call at key milestones",
  },
];

export default function GetStartedSeoService() {
  return (
    <section className="w-full bg-[#F5F7FB] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10 text-center">
          How to Get Started
        </h2>

        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)]"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-[#003366] text-white font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-gray-700 leading-relaxed pt-2">
                <strong className="text-[#1A1A1A]">{step.title}</strong> {step.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#003366] text-white px-10 py-4 rounded-full hover:bg-[#002244] transition-all duration-300 font-bold shadow-md hover:shadow-lg"
          >
            Start Your Journey
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
