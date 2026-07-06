"use client";
import { useState } from "react";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const metadata = {
  title: "Contact Us | Daiki Media",
  description:
    "Contact Daiki Media with Daiki Media to discuss your marketing needs. Fill out the contact form and let our team help you grow your business with tailored solutions.",
  keywords:
    "Daiki Media, contact us, Contact Daiki Media, marketing services, business solutions, digital marketing, contact form, customer support",
};

const ContactForm = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  const [userInput, setUserInput] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_ei97658";
    const templateID = "template_d3ej92g";
    const userID = "A7u3t1t9TNX-4LxrF";

    try {
      const emailParams = {
        from_name: userInput.from_name,
        from_email: userInput.from_email,
        message: userInput.message,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        alert("Message sent successfully!");
        setUserInput({
          from_name: "",
          from_email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Failed to send message. Please try again later.");
    }
  };
  return (
    <section className="relative mb-150">
      <div className="absolute left-1/2  -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <motion.div
        className="container relative"
        ref={ref}
        initial={false}
        animate={controlAnimation}
        variants={fadeUpAnimation}
      >
        <div className="mx-auto mb-12 max-w-[475px] text-center">
          <p className="section-tagline">Contact</p>

          <h2>Let us know how we can assist you</h2>
        </div>
        <div className="relative z-10 mx-auto max-w-[850px]">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:max-w-full max-md:hidden">
            <div className="h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/25 blur-[145px]"></div>
            <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
          </div>
          <div className=" rounded-medium bg-white p-2.5 shadow-nav  dark:bg-dark-200">
            <div className="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5  ">
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                className="contact-form"
              >
                <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
                  <div className="max-md:col-span-full md:col-span-6">
                    <label
                      htmlFor="username"
                      className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={userInput.from_name}
                      onChange={handleChange}
                      id="username"
                      placeholder="Name"
                      required
                      className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                    />
                  </div>
                  <div className="max-md:col-span-full md:col-span-6">
                    <label
                      htmlFor="email"
                      className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      value={userInput.from_email}
                      onChange={handleChange}
                      id="email"
                      placeholder="Email"
                      required
                      className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="message"
                      className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={userInput.message}
                      onChange={handleChange}
                      rows="10"
                      required
                      className="block w-full resize-none rounded border border-borderColor bg-white px-5 py-2.5   text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                    ></textarea>
                  </div>
                  <div className="col-span-full mx-auto text-center">
                    <button className="btn">Contact Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
