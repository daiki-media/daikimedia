import Footer from "../../../components/footer/Footer";
import SGHealthcareSEOPage from "./SGHealthcareSEOPage";

export const metadata = {
  title: "Best Healthcare SEO Singapore: Medical Marketing Service | Daiki Media",
  description:
  "Grow your medical practice with Healthcare SEO Singapore. Daiki Media helps clinics, hospitals, and healthcare brands improve Google rankings and attract more patients.",
  keywords:
    "healthcare SEO Singapore, medical SEO Singapore, clinic SEO Singapore, hospital SEO Singapore, doctor SEO Singapore, MOH compliant SEO, medical marketing Singapore, healthcare digital marketing Singapore",
  alternates: {
    canonical: "https://www.daikimedia.com/healthcare-seo-singapore",
  },
  openGraph: {
    title: "Best Healthcare SEO Singapore: Medical Marketing Service | Daiki Media",
    description:
      "MOH & SMC compliant healthcare SEO for Singapore clinics and hospitals. Attract real patients from Google. 10+ years of medical marketing experience. Free audit available.",
    url: "https://www.daikimedia.com/healthcare-seo-singapore",
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
