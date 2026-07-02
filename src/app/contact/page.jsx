import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/footer/Footer";
import ContactForm from "@/components/shared/ContactForm";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Contact Daiki Media - Contact Daiki Media with Our Team",
  description:
    "Reach out to Daiki Media in KL for inquiries, support, or consultations. Our team is ready to help you with all your digital marketing needs.",
  keywords: "contact, Daiki Media contact, media inquiries, reach us",
};

const page = () => {
  return (
    <>
      <main>
        <PageHero
          subtitle="Contact Daiki Media"
          title="Let's Transform Your Digital Vision Into Reality"
          paragraph="Reach out to discuss how we can help drive your business growth through strategic digital solutions."
        />
        <ContactInfo />
        <ContactForm />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
};

export default page;
