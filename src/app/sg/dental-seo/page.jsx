import Footer from "../../../components/footer/Footer";
import SGDentalSEOPage from "./SGDentalSEOPage";

export const metadata = {
  title: "Best Dental SEO Agency Singapore: Proven Marketing Strategies | Daiki Media",
  description:
    "Daiki Media helps Singapore dental clinics rank higher on Google and attract more local patients. Custom Dental SEO strategies including Local SEO, Technical SEO, Google Business Profile optimisation, and patient-focused content. Free audit available.",
  keywords:
    "dental SEO Singapore, dental clinic SEO Singapore, SEO for dentists Singapore, dentist marketing Singapore, dental marketing agency Singapore, local SEO dental clinic Singapore, Google ranking dental clinic Singapore",
  alternates: {
    canonical: "https://www.daikimedia.com/sg/dental-seo",
  },
  openGraph: {
    title: "Best Dental SEO Agency Singapore: Proven Marketing Strategies | Daiki Media",
    description:
      "Custom Dental SEO for Singapore clinics — Local SEO, Technical SEO, Google Business Profile, and patient-focused content. Attract more patients from Google. Free audit available.",
    url: "https://www.daikimedia.com/sg/dental-seo",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SGDentalSEOPage />
      <Footer />
    </>
  );
}
