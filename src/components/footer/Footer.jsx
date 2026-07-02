import { FooterData } from "@/data/footer";
import footerSeperator from "@/public/images/footer-seperator.svg";
import footerSeperatorDark from "@/public/images/footer-seperator-dark.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 dark:bg-dark-300">
      <div className="container">
        <div className="mb-20 grid grid-cols-12 max-lg:gap-y-10 max-lg:text-center gap-4">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/logo.png"
              alt="logo dark version"
              className="mb-10"
              width={160}
              height={130}
            />
            <p className="max-w-[350px] max-lg:mx-auto">
              {FooterData.footerText}
            </p>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <p className="mb-8 text-lg font-medium">SEO Services</p>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.expolre.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <p className="mb-8 text-lg font-medium">Digital Advertising</p>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.resources.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <p className="mb-8 text-lg font-medium">Contact Daiki Media</p>
            <p className="mb-3">
              <Link
                href={`mailto:${FooterData.email}`}
                className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
              >
                {FooterData.email}
              </Link>
            </p>

            <p className="mb-3">
              <Link
                href={`tel:${FooterData.phone.split(" ").join("")}`}
                className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
              >
                {FooterData.phone}
              </Link>
            </p>
            <ul className="social-link flex items-center gap-4 max-lg:justify-center">
              {FooterData.socialLinks.map((items) => (
                <li key={items.id}>
                  <Link href={items.link} 
                    className="transition-all"
                    aria-label={items.ariaLabel}
                    target="_blank">
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-black">
              Jalan Ara, SD 7/3d, Bandar Sri Damansara, 52200 Kuala Lumpur
            </div>

          </div>
        </div>

        <div className="seperator">
          <Image
            src={footerSeperator}
            alt="footer-seperator"
            className="w-full object-cover dark:hidden max-md:h-[1px]"
            loading="lazy"
          />
          <Image
            src={footerSeperatorDark}
            alt="footer-seperator"
            className="hidden w-full object-cover dark:block max-md:h-[1px]"
            loading="lazy"
          />
        </div>

        <div className="py-10 max-lg:text-center">
          <div className="flex max-lg:flex-col lg:items-center">
            <p className="max-lg:mb-10">{FooterData.copyright}</p>
            <ul className="flex items-center gap-15 max-lg:justify-center  lg:ml-auto">
              <li>
                <Link
                  href="/privacy"
                  className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
