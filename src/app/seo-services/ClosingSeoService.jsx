import Link from "next/link";

const linkGroups = [
  {
    label: "SEO Services",
    links: [
      { title: "Local SEO Services", href: "/local-seo-services" },
      { title: "Enterprise SEO", href: "/enterprise-seo-services" },
      { title: "Digital Marketing", href: "/digital-marketing-services" },
      { title: "SEO Audits", href: "/seo-audits-services" },
    ],
  },
  {
    label: "Digital Advertising",
    links: [
      { title: "PPC Management", href: "/ppc-management" },
      { title: "Enterprise PPC", href: "/enterprise-ppc-management" },
      { title: "Social Media Advertising", href: "/social-media-advertising" },
      { title: "Enterprise Social Media Advertising", href: "/enterprise-social-media-advertising" },
      { title: "Programmatic Advertising", href: "/programmatic-advertising-solutions" },
    ],
  },
];

export default function ClosingSeoService() {
  return (
    <section className="w-full bg-white pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-8">
          Boost your online presence with Daiki Media&apos;s SEO, digital marketing and web development services.{" "}
          <Link href="/contact" className="text-[#3F51B5] font-semibold hover:underline">
            Contact us today
          </Link>{" "}
          to discuss a plan built around your actual goals and market.
        </p>

        <div className="space-y-3 text-sm text-gray-600">
          {linkGroups.map((group) => (
            <p key={group.label}>
              <strong className="text-[#1A1A1A]">{group.label}:</strong>{" "}
              {group.links.map((link, index) => (
                <span key={link.href}>
                  {index > 0 && " | "}
                  <Link href={link.href} className="hover:text-[#3F51B5] hover:underline">
                    {link.title}
                  </Link>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
