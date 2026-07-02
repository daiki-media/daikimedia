import Footer from "../../components/footer/Footer";
import LocalSEOPage from "./LocalSEOPage";
export const metadata = {
  title: "Local SEO Services Malaysia | Get Found on Google Maps | Daiki Media",
  description:"Daiki Media helps Malaysian businesses rank on Google Maps and local search. More calls, more walk-ins, more customers. Get your free local SEO audit today",
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