import Footer from "../../../components/footer/Footer";
import SGSEOServicesPage from "./SGSEOServicesPage";

export const metadata = {
  title: "Best SEO Service Agency Singapore | Rank Higher on Google | Daiki Media",
  description:
  "Daiki Media is a leading SEO Agency Singapore helping businesses improve Google rankings, increase organic traffic, and generate more qualified leads with expert SEO.",
  keywords:
    "SEO agency Singapore, best SEO service Singapore, Singapore SEO company, local SEO Singapore, Google ranking Singapore, SEO services Singapore, search engine optimisation Singapore",
  alternates: {
    canonical: "https://www.daikimedia.com/seo-services-singapore",
  },
  openGraph: {
    title: "Best SEO Service Agency Singapore | Daiki Media",
    description:
      "Singapore-specialist SEO strategies for ecommerce, service businesses, healthcare, and digital products. Rank higher, attract quality traffic, grow revenue. Free audit available.",
    url: "https://www.daikimedia.com/seo-services-singapore",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SGSEOServicesPage />
      <Footer />
    </>
  );
}
