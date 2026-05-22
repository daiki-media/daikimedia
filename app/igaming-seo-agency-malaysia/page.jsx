import Footer from "../../components/footer/Footer";
import IGamingSEOPage from "./IGamingSEOPage";
export const metadata = {
  title: "iGaming SEO Agency Malaysia | Casino and Betting SEO | Daiki Media",
  description:"Daiki Media is a specialist iGaming SEO agency in Malaysia.We grow casino and betting brands through compliant organic SEO with no ad spend required.Book a free audit today.",
  keywords: "iGaming SEO agency Malaysia",
  alternates: {
    canonical: "https://www.daikimedia.com/igaming-seo-agency-malaysia",
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