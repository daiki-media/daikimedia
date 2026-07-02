import { Instagram, Twitter, Facebook, Linkedin , } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export const FooterData = {
  logo: "/images/logo.png",
  logoDark: "/images/logo-light.svg",
  footerText:
    "Boost your online presence with Daiki Media's expert digital marketing, SEO, and web development solutions. Contact us today to grow your brand and reach new customers effectively.",
  copyright: `${new Date().getFullYear()} Daiki Media. All Rights Reserved`,
  email: "lukesh@daikimedia.com",
  phone: "+601114850067",
  expolre: [
    {
      id: 1,
      name: "SEO Services",
      link: "/seo-services",
    },
    {
      id: 2,
      name: "Enterprise SEO",
      link: "/enterprise-seo-services",
    },
    {
      id: 3,
      name: "Digital Marketing",
      link: "/digital-marketing-services",
    },
    {
      id: 4,
      name: "Local SEO",
      link: "/local-seo-services",
    },
    {
      id: 5,
      name: "Google Local Ads",
      link: "/google-local-services-ads",
    },
    {
      id: 6,
      name: "SEO Audits",
      link: "/seo-audits-services",
    },
  ],
  resources: [
    {
      id: 1,
      name: "PPC Management Services",
      link: "/ppc-management",
    },
    {
      id: 2,
      name: "Enterprise PPC Management Services",
      link: "/enterprise-ppc-management",
    },
    {
      id: 3,
      name: "Social Media Advertising",
      link: "/social-media-advertising",
    },
    {
      id: 4,
      name: "Enterprise Social Media Advertising",
      link: "/enterprise-social-media-advertising",
    },
    {
      id: 5,
      name: "Programmatic Advertising Solutions",
      link: "/programmatic-advertising-solutions",
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: "https://www.facebook.com/daikimedia.malaysia",
       ariaLabel: "Visit our Facebook page",
    },
    {
      id: 2,
      name: <Twitter />,
      link: "https://x.com/daikimedia",
       ariaLabel: "Follow us on X (Twitter)", 
    },
    {
      id: 3,
      name: <Linkedin />,
      link: "https://www.linkedin.com/company/daikimedia/",
      ariaLabel: "Connect with us on LinkedIn",
    },
    {
      id: 4,
      name: <Instagram />,
      link: "https://www.instagram.com/daikimedia/",
      ariaLabel: "Follow us on Instagram",
    },
    {
      id: 5,
      name: <FaTelegramPlane />, 
      link: "https://t.me/daikimedia",
       ariaLabel: "Join our Telegram channel",
    }
     
  ],
};
