import Footer from "../../../components/footer/Footer";
import SGHealthcareSEOPage from "./SGHealthcareSEOPage";

export const metadata = {
  title: "Healthcare SEO Singapore: Get More Patients & Grow Online Visibility",
  description:
  "Healthcare SEO Singapore can help your clinic reach more patients online. Improve search visibility, build trust and attract qualified enquiries with a tailored SEO strategy.",
  keywords:
    "healthcare SEO Singapore, medical SEO Singapore, clinic SEO Singapore, hospital SEO Singapore, doctor SEO Singapore, MOH compliant SEO, medical marketing Singapore, healthcare digital marketing Singapore",
  alternates: {
    canonical: "https://www.daikimedia.com/healthcare-seo-singapore",
  },
  openGraph: {
    title: "Healthcare SEO Singapore: Get More Patients & Grow Online Visibility",
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
