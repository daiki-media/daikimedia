import Footer from "../../../components/footer/Footer";
import SGPPCAgencyPage from "./SGPPCAgencyPage";

export const metadata = {
  title: "Best PPC Agency Singapore: Trusted Marketing Services | Daiki Media",
  description:
  "Grow your business with Daiki Media, a trusted PPC Agency Singapore. Expert Google Ads, Meta Ads, LinkedIn Ads, and PPC management for higher ROI.",
  keywords:
    "PPC agency Singapore, Google Ads Singapore, Meta Ads Singapore, pay per click Singapore, Facebook Ads Singapore, PPC management Singapore, digital advertising agency Singapore, Google Ads management Singapore",
  alternates: {
    canonical: "https://www.daikimedia.com/ppc-agency-singapore",
  },
  openGraph: {
    title: "Best PPC Agency Singapore: Trusted Marketing Services | Daiki Media",
    description:
      "Custom PPC campaigns for Singapore businesses — Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads. Maximise ROI and generate quality leads. Free audit available.",
    url: "https://www.daikimedia.com/ppc-agency-singapore",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SGPPCAgencyPage />
      <Footer />
    </>
  );
}
