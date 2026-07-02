import Image from "next/image";
import Hero from "@/components/home-1/Hero";
import BelowFoldClient from "@/components/home-1/BelowFoldClient";
import FooterClient from "@/components/home-1/FooterClient";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />

        <div className="py-16 flex flex-wrap items-center justify-center gap-8 px-4 max-lg:flex-col">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-3xl font-bold">Google and Meta Partner</h2>
            <p className="text-gray-600">
              We are proud partners with industry leaders like{" "}
              <a
                href="https://www.designrush.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.designrush.com
              </a>
              <br />
              Delivering cutting-edge solutions for your business.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src="/images/partners.jpeg"
              alt="Google and Meta Partner"
              width={800}
              height={600}
            />
          </div>
        </div>

        <BelowFoldClient />
      </main>
      <FooterClient />
    </>
  );
}
