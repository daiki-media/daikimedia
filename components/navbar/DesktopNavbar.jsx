"use client";
import NavbarItem from "@/data/navbar";
import { cn } from "@/utils/cn";
import AngleDownIcon from "@/components/icons/AngleDownIcon";
import Link from "next/link";

const DesktopNavbar = () => {
  const { menuData } = NavbarItem;

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="nav-list mx-auto hidden rounded-large  p-2.5 dark:bg-dark-200 lg:flex [&>*:not(:last-child)]:me-1">
        {menuData.menuContent.map((menuItem) => (
          <li
            className={`${menuItem.megaMenu ? "group" : !menuItem.path ? "group relative" : ""}`}
            key={menuItem.id}
          >
            {menuItem.path ? (
              <Link
                href={menuItem.path}
                className={cn(
                  "flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium capitalize leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5"
                )}
              >
                {menuItem.title}
              </Link>
            ) : menuItem.megaMenu ? (
              <>
                <Link
                  href="#"
                  className={cn(
                    "hover:border-borderColour dark:hover:border-borderColour/10 group flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:bg-white hover:duration-500 dark:text-white dark:hover:bg-dark-200 lg:px-4 xl:px-5",
                    menuItem.title === "page" ? "active" : ""
                  )}
                >
                  {menuItem.title}
                  <AngleDownIcon className="ml-1 mt-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white" />
                </Link>
                <div className="absolute left-0 top-12 z-10 w-full origin-top scale-y-0 rounded-medium h-[500px] bg-white p-2.5 text-gray-900 opacity-0 shadow-lg duration-500 group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 dark:text-white">
                  <div className="grid grid-cols-4 gap-6 px-4">
                    {["3.1", "3.2", "3.3", "3.4"].map((category) => (
                      <div key={category} className="h-64 ">
                        {menuItem.submenu
                          .filter(
                            (item) =>
                              String(item.id).startsWith(category) &&
                              item.header
                          )
                          .map((headerItem) => (
                            <div key={headerItem.id}>
                              <h5 className="font-bold mb-2 text-black dark:text-white">
                                {headerItem.header}
                              </h5>
                              <ul>
                                {menuItem.submenu
                                  .filter(
                                    (item) =>
                                      String(item.id).startsWith(category) &&
                                      !item.header
                                  )
                                  .map((submenuItem) => (
                                    <li
                                      className="relative text-sm py-2 capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                                      key={submenuItem.id}
                                    >
                                      <Link
                                        href={submenuItem.path}
                                        className="flex"
                                      >
                                        <span className="text-gray-800 dark:text-white">
                                          {submenuItem.title}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="#"
                  className={cn(
                    "flex items-center  rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium capitalize leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5",
                    menuItem.title === "home" ? "active" : ""
                  )}
                >
                  {menuItem.title}
                  <AngleDownIcon className="ml-1 mt-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white" />
                </Link>
                <ul className="absolute left-0 top-12 z-10 min-w-[250px] origin-top scale-y-0 rounded-medium bg-white p-5 opacity-0 duration-500 group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark">
                  {menuItem.submenu.map((submenuItem) => (
                    <li
                      className="relative  overflow-hidden pb-2.5 text-base capitalize text-paragraph duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0  before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                      key={submenuItem.id}
                    >
                      <Link href={submenuItem.path} className="flex">
                        {submenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <div className="ml-auto flex items-center [&>*:not(:last-child)]:me-2.5">
        <li className="max-lg:hidden list-none">
          <Link
            href="https://api.whatsapp.com/send?phone=601114850067"
            className="btn btn-navbar btn-sm"
          >
            Free Website Audit
          </Link>
        </li>
      </div>
    </>
  );
};

export default DesktopNavbar;
