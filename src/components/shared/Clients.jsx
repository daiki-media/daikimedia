import ClientList from "@/data/clientData";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import clientBorder from "@/public/images/clients/client-border.svg";

const Clients = ({
  sectionTitle = true,
  sectionDetails = true,
  border = true,
  className = "pb-[145px] max-lg:py-20 bg-white dark:bg-dark-300 mt-6",
  title = "Best Companies Trust Daiki Media",
  description = "Trusted by thousands of companies across 50+ countries",
}) => {
  const { ClientData } = ClientList;
  return (
    <section className={cn("client", className)}>
      <div className="container overflow-hidden max-lg:!px-0">
        <div className="mx-auto max-w-[550px] text-center max-lg:px-2.5">
          {sectionTitle && (
            <h2 className="mb-10">{title}</h2>
          )}
          {sectionDetails && (
            <p className="text-light mb-15">
              {description}
            </p>
          )}
        </div>
        <div className="relative py-8 before:absolute before:-right-0.5 before:top-1/2 before:z-10 before:h-[40px] before:w-[120px] before:-translate-y-1/2  before:bg-gradient-to-l before:from-white before:from-[37.5%] after:absolute after:-left-0.5 after:top-1/2 after:z-10 after:h-[40px] after:w-[120px] after:-translate-y-1/2  after:bg-gradient-to-r after:from-white  after:from-[37.5%] dark:before:from-dark-gradient dark:after:from-dark-gradient">
          {border && (
            <div className="absolute left-0 top-1/2 h-full w-full -translate-y-1/2 ">
              <Image
                src={clientBorder}
                alt="border"
                className="inline-block h-full object-cover object-center dark:hidden"
              />
            </div>
          )}

          <Marquee pauseOnHover className="!flex" gradient={false}>
            {ClientData.map((clients) => (
              <Link
                key={clients.id}
                href={clients.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="marquee-content-list w-[180px] h-[60px] flex items-center justify-center relative px-4"
              >
                <Image
                  src={clients.imageLight}
                  alt={`${clients.id} logo`}
                  className="dark:hidden object-contain"
                  fill
                  sizes="160px"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
                <Image
                  src={clients.imageDark}
                  alt={`${clients.id} logo`}
                  className="hidden dark:block object-contain"
                  fill
                  sizes="160px"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </Link>
            ))}
          </Marquee>
        </div>
        {sectionTitle && (
          <div className="mt-15 flex items-center o justify-center ">
            <Link
              href="/contact"
              className=" dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white btn"
            >
              Start your Journey
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
