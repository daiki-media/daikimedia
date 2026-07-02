import Footer from "@/components/footer/Footer";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import MembersCounter from "@/components/shared/MembersCounter";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import Pricing from "@/components/shared/Pricing";
import Services from "@/components/shared/Services";

export default function ServicePage() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <PageHero
          subtitle="OUR SERVICES"
          title="Why Businesses Choose Daiki Media"
          paragraph="Partner with a digital agency that combines creative innovation with technical expertise to drive your business forward."
        />
        <Services sectionDetails={false} />
        <MembersCounter />
        <Pricing className={"pt-150 max-md:pt-20"} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
