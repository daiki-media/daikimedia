import Footer from "../../../components/footer/Footer";
import SGPPCAgencyPage from "./SGPPCAgencyPage";

export const metadata = {
  title: "Best PPC Agency Singapore: Trusted Marketing Services | Daiki Media",
  description:
    "Daiki Media is Singapore's trusted PPC agency managing Google Ads, Meta Ads, LinkedIn Ads, and YouTube Ads. Custom campaigns that generate real leads, increase sales, and maximise ROI. 10+ years experience. Free audit available.",
  keywords:
    "PPC agency Singapore, Google Ads Singapore, Meta Ads Singapore, pay per click Singapore, Facebook Ads Singapore, PPC management Singapore, digital advertising agency Singapore, Google Ads management Singapore",
  alternates: {
    canonical: "https://www.daikimedia.com/sg/ppc-agency",
  },
  openGraph: {
    title: "Best PPC Agency Singapore: Trusted Marketing Services | Daiki Media",
    description:
      "Custom PPC campaigns for Singapore businesses — Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads. Maximise ROI and generate quality leads. Free audit available.",
    url: "https://www.daikimedia.com/sg/ppc-agency",
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
