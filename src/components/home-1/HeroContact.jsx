"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export const HeroContactForm = () => {
  const [formData, setFormData] = useState({
    need: "I need more revenue for my business",
    email: "",
    budget: "",
  });

  const needs = [
    "I need more revenue for my business",
    "I need more traffic to my website",
    "I need more customers",
    "I need more leads",
    "I need more sales",
    "I need help with brand awareness",
    "All of the above",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_ei97658";
    const templateID = "template_vmm2hwi";
    const userID = "A7u3t1t9TNX-4LxrF";

    try {
      const emailParams = {
        from_email: formData.email,
        message: `${formData.need} and my budget is ${formData.budget}`,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          email: "",
          budget: "",
        });
      }
    } catch (error) {
      console.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="relative w-full container mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl md:rounded-full shadow-lg z-55">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-col md:flex-row gap-4"
        id="hero-contact-form"
      >
        <div className="w-full md:flex-1 relative">
          <select
            value={formData.need}
            onChange={(e) => setFormData({ ...formData, need: e.target.value })}
            className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 pr-10 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary appearance-none"
            aria-label="Select your business need"
          >
            {needs.map((need) => (
              <option key={need} value={need}>
                {need}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            ▼
          </div>
        </div>

        <div className="w-full md:flex-1">
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
            aria-label="Enter your email address"
            required
          />
        </div>

        <div className="w-full md:flex-1">
          <input
            type="number"
            placeholder="Monthly budget (USD)"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
            min="0"
            step="100"
            aria-label="Enter your monthly budget in USD"
            required
          />
        </div>
        <button type="submit" className="btn text-white w-full md:w-auto">
          GET A FREE QUOTE
        </button>
      </form>
    </div>
  );
};
