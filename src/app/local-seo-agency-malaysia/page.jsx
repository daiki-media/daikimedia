import Footer from "../../components/footer/Footer";
import LocalSEOPage from "./LocalSEOPage";
export const metadata = {
  title: "Local SEO Agency Malaysia | Google Maps SEO Services | Daiki Media",
  description:
    "Get found on Google Maps and local search with Daiki Media local SEO agency Malaysia. We optimise Google Business Profile, citations, reviews, local pages, and map pack visibility.",
  keywords: "local SEO services Malaysia",
  alternates: {
    canonical: "https://www.daikimedia.com/local-seo-agency-malaysia",
  },
};
export default function Page(){
    return(
        <>
        <LocalSEOPage/>
        <Footer />
        </>
    )
}