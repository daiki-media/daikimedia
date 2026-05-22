import Footer from "../../components/footer/Footer";
import IGamingSEOPage from "./IGamingSEOPage";
export const metadata = {
  title: "local seo",
  description:"loca seo",
  keywords: "SEO",
  alternates: {
    canonical: "https://www.daikimedia.com/our-seo-results",
  },
};
export default function Page(){
    return(
        <>
          <IGamingSEOPage/>
          <Footer />
        </>
    )
}