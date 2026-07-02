import ServiceList from "@/data/serviceData";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/animations/ScrollFadeIn";

const ServiceBoxes = () => {
  const { ServiceData } = ServiceList;

  const filteredServiceData = ServiceData
    ? ServiceData.filter((item) => item.id >= 1 && item.id <= 6)
    : [];

  const uniqueServiceData = filteredServiceData.reduce((acc, item) => {
    if (!acc.some((existingItem) => existingItem.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return (
    <ScrollFadeIn className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {uniqueServiceData.map((items) => (
        <div
          className="relative scale-100 rounded-medium bg-white p-2.5 shadow-nav transition-transform duration-500 hover:scale-105 hover:transition-transform hover:duration-500 dark:bg-dark-200"
          key={items.id}
        >
          <div className="h-full rounded border border-dashed border-gray-100 dark:text-white p-10 dark:border-borderColor-dark max-lg:p-5">
            <Image
              src={items.iconLight}
              alt="service logo"
              className="mb-6 inline-block dark:hidden"
              width={40}
              height={40}
            />
            <Image
              src={items.iconDark}
              alt="service logo"
              className="mb-6 hidden dark:inline-block"
              width={40}
              height={40}
            />
            <Link href={`/${items.slug}`} className="block">
              <h3 className="mb-2.5">{items.title}</h3>
            </Link>
            <p className="mb-6">{items.excerpt}</p>
            <Link
              href={`/${items.slug}`}
              className="btn-outline btn-sm dark:bg-white dark:text-black hover:dark:bg-black hover:dark:text-white"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </ScrollFadeIn>
  );
};

export default ServiceBoxes;
