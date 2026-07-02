import Footer from "@/components/footer/Footer";
import PageHero from "@/components/shared/PageHero";
// import MembersCounter from "@/components/shared/MembersCounter";
import NewsLetter from "@/components/shared/NewsLetter";
import CallToAction from "@/components/shared/CallToAction";
import GoogleCoreUpdateContent from "@/components/google-core-update/GoogleCoreUpdateContent";

export const metadata = {
  title: "Google December 2025 Core Update Explained for Malaysian Websites | DaikiMedia",
  description:
    "Google released the December 2025 Core Update. Learn what changed, which Malaysian websites were affected, and how to respond without panic or risky SEO fixes.",
  keywords:
    "Google Core Update December 2025, SEO update, Google algorithm update, Malaysian SEO, website rankings, E-E-A-T, content quality, DaikiMedia",
  alternates: {
    canonical: "https://www.daikimedia.com/google-december-2025-core-update",
  },
  openGraph: {
    title: "Google December 2025 Core Update Explained for Malaysian Websites | DaikiMedia",
    description:
      "Google released the December 2025 Core Update. Learn what changed, which Malaysian websites were affected, and how to respond without panic or risky SEO fixes.",
    type: "article",
    url: "https://www.daikimedia.com/google-december-2025-core-update",
  },
};

const GoogleCoreUpdatePage = () => {
  return (
    <>
      <main>
        <PageHero
          subtitle="Google Core Update Guide"
          title="Preparing Your Website for Google's December 2025 Core Update"
          paragraph="Google's December 2025 Core Update is not a penalty and it is not a warning. It is a recalibration of how Google evaluates usefulness, trust, and relevance across the entire web."
        />
        <GoogleCoreUpdateContent />
        <CallToAction title="Ready to Build a Website That Survives Core Updates?" />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default GoogleCoreUpdatePage;

