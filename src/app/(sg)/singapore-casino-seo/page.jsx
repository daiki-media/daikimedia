import Footer from "../../../components/footer/Footer";
import SGCasinoSEOPage from "./SGCasinoSEOPage";

export const metadata = {
  title: "Singapore Casino SEO Agency: Grow Rankings, Traffic & Players",
  description:
  "Looking for a Singapore Casino SEO agency? Strengthen rankings and attract more qualified traffic with technical SEO, content strategy and trusted link building.",
  keywords:
    "Singapore casino SEO, casino SEO agency Singapore, casino SEO Singapore, online casino SEO Singapore, gambling SEO Singapore, Remote Gambling Act SEO, Singapore iGaming SEO agency",
  alternates: {
    canonical: "https://www.daikimedia.com/singapore-casino-seo",
  },
  openGraph: {
    title: "Singapore Casino SEO Agency: Grow Rankings, Traffic & Players",
    description:
      "Compliance-first Casino SEO for Singapore operators, sportsbooks, and affiliate sites — built around the Remote Gambling Act and Singapore's multilingual audience. Get started today.",
    url: "https://www.daikimedia.com/singapore-casino-seo",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SGCasinoSEOPage />
      <Footer />
    </>
  );
}
