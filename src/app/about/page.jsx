import AboutCoreValue from "@/components/about/AboutCoreValue";
import AboutDetails from "@/components/about/AboutDetails";
import Footer from "@/components/footer/Footer";
import CallToAction from "@/components/shared/CallToAction";
import Counter from "@/components/shared/Counter";
import PageHero from "@/components/shared/PageHero";
import PaymentFeatures from "@/components/shared/PaymentFeatures";
import TeamMembers from "@/components/shared/TeamMembers";
import AboutFeature from "@/data/aboutFeaturesData";
import TestimonialV2 from "@/components/shared/TestimonialV2";

export const metadata = {
  title: "About | Daiki Media",
  description:
    "Daiki Media provides expert SEO, web development, and digital marketing services, helping brands grow online with strategic, innovative, and results-driven solutions",
  keywords: "about, Daiki Media, our mission, media company, team",
};
const About = () => {
  const { AboutFeaturesData } = AboutFeature;
  return (
    <>
      <main>
        <PageHero
          subtitle="About Daiki Media"
          title="Crafting Digital Excellence with Daiki Media's Innovation"
          paragraph="Working with Daiki Media has been a game-changer for our business. From designing a visually stunning, user-friendly website to establishing a powerful digital presence across multiple channels, they have delivered exceptional results at every step. Their team brought our vision to life, combining creativity with advanced marketing strategies tailored to our needs. With Daiki Media, we not only reached a wider audience but also saw an impressive increase in engagement and revenue. Their dedication and expertise exceeded our expectations, making them an invaluable partner in our digital growth journey."
        />
        <AboutDetails />
        <PaymentFeatures
          features={AboutFeaturesData}
          sectionTag={"Our Core Values"}
          sectionTitle={"Our Business Is Steered By Our Core Values"}
          className={
            "relative bg-white py-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25"
          }
        />
        <AboutCoreValue />
        <TestimonialV2 />
        <Counter />
        <TeamMembers />
        <CallToAction title="Start Your Digital Transformation Journey Today!" />
      </main>
      <Footer />
    </>
  );
};

export default About;
