import Footer from "../../../components/footer/Footer";
import SGEcommerceSEOPage from "./SGEcommerceSEOPage";

export const metadata = {
  title: "Best Ecommerce SEO Singapore | Trusted Marketing Services | Daiki Media",
  description:
    "Boost your online store with Ecommerce SEO Singapore by Daiki Media. Improve Google rankings, increase organic traffic, and drive more sales with expert SEO.",
  keywords:
    "ecommerce SEO Singapore, ecommerce SEO agency Singapore, online store SEO Singapore, product page SEO, Singapore ecommerce marketing, ecommerce SEO services",
  alternates: {
    canonical: "https://www.daikimedia.com/ecommerce-seo-singapore",
  },
  openGraph: {
    title: "Best Ecommerce SEO Singapore | Daiki Media",
    description:
      "Ecommerce SEO strategies built for Singapore online stores — product page optimisation, technical SEO, and local search. 30+ businesses helped. Free audit available.",
    url: "https://www.daikimedia.com/ecommerce-seo-singapore",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SGEcommerceSEOPage />
      <Footer />
    </>
  );
}
