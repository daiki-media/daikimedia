import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SolutionAnimation from "@/components/home-1/SolutionAnimation";
import Link from "next/link";

export const InfoStatsSection = ({ data }) => {
  return (
    <section className="relative overflow-hidden bg-white  dark:bg-dark-300 ">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="max-md:order-2">
            <div className="relative pt-150 lg:py-150">
              <div className="relative mx-auto aspect-video">
                <SolutionAnimation />
              </div>
            </div>
          </div>
          <div className="max-md:order-1 lg:-mt-15">
            <p className="section-tagline">Strong Solutions</p>
            <h2 className="mb-8 max-lg:mb-4">{data.title}</h2>
            <p className="mb-11 max-lg:mb-6">{data.description}</p>
            <ul className="mb-14 flex max-lg:mb-6 max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10">
              {data.notableStats.map((item, index) => {
                <li map={index} className="relative flex items-center gap-x-2 ">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-paragraph dark:text-primary"
                  />
                  <span className="font-jakarta_sans font-medium dark:text-white">
                    {item}
                  </span>
                </li>;
              })}
            </ul>
            <Link href={data.link} className="btn">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
