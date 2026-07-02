import Footer from "@/components/footer/Footer";
import Clients from "@/components/shared/Clients";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import Pricing from "@/components/shared/Pricing";
import TestimonialSingle from "@/components/testimonial/TestimonialSingle";

export const metadata = {
  title: "Testimonials | Daiki Media",
  description:
    "Discover the success stories and feedback from our clients. Learn how Daiki Media's innovative media solutions have helped businesses and content creators thrive.",
  keywords:
    "Testimonials, Daiki Media, client feedback, reviews, success stories, media solutions, satisfied clients, content creators, business growth",
  author: "Daiki Media Team",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.daikimedia.com/testimonials",
    title: "Testimonials | Daiki Media",
    description:
      "Hear from our clients about how Daiki Media helped their business grow and succeed. Real reviews and success stories.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@daikimedia",
    title: "Testimonials | Daiki Media",
    description: "Read real success stories from our clients and partners.",
  },
};

const Testimonial = () => {
  return (
    <>
      <main>
        <PageHero
          title="What our customer’s say <br/> about our company"
          paragraph=""
        />
        <TestimonialSingle />
        <Clients
          sectionTitle={false}
          sectionDetails={false}
          className={"pb-0 pt-0"}
        />
        <Pricing className={"pt-150 max-md:pt-20"} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default Testimonial;
