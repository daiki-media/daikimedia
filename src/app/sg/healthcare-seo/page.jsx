import Footer from "../../../components/footer/Footer";
import SGHealthcareSEOPage from "./SGHealthcareSEOPage";

export const metadata = {
  title: "Best Healthcare SEO Singapore: Medical Marketing Service | Daiki Media",
  description:
    "Daiki Media specialises in healthcare SEO for Singapore clinics, hospitals, and medical practices. MOH & SMC compliant strategies that attract real patients from Google. 10+ years experience. Book a free audit.",
  keywords:
    "healthcare SEO Singapore, medical SEO Singapore, clinic SEO Singapore, hospital SEO Singapore, doctor SEO Singapore, MOH compliant SEO, medical marketing Singapore, healthcare digital marketing Singapore",
  alternates: {
    canonical: "https://www.daikimedia.com/sg/healthcare-seo",
  },
  openGraph: {
    title: "Best Healthcare SEO Singapore: Medical Marketing Service | Daiki Media",
    description:
      "MOH & SMC compliant healthcare SEO for Singapore clinics and hospitals. Attract real patients from Google. 10+ years of medical marketing experience. Free audit available.",
    url: "https://www.daikimedia.com/sg/healthcare-seo",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SGHealthcareSEOPage />
      <Footer />
    </>
  );
}
