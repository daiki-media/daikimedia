import Footer from "../../../components/footer/Footer";
import SGPPCAgencyPage from "./SGPPCAgencyPage";

export const metadata = {
  title: "PPC Agency Singapore: Drive Targeted Traffic & Increase Conversions",
  description:
  "Drive more qualified leads with a Singapore PPC agency. Get expert Google Ads, Meta Ads, LinkedIn Ads and PPC management focused on smarter spending and stronger ROI.",
  keywords:
    "PPC agency Singapore, Google Ads Singapore, Meta Ads Singapore, pay per click Singapore, Facebook Ads Singapore, PPC management Singapore, digital advertising agency Singapore, Google Ads management Singapore",
  alternates: {
    canonical: "https://www.daikimedia.com/ppc-agency-singapore",
  },
  openGraph: {
    title: "PPC Agency Singapore: Drive Targeted Traffic & Increase Conversions",
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
