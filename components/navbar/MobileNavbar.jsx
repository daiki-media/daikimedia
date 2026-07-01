"use client";
import NavbarItem from "@/data/navbar";
import { cn } from "@/utils/cn";
import AngleDownIcon from "@/components/icons/AngleDownIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const MobileNavbar = () => {
  const { menuData } = NavbarItem;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menuId) => {
    setOpenDropdown(openDropdown === menuId ? null : menuId);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button relative h-10 w-10 rounded-full bg-white outline-none dark:bg-dark-200 lg:hidden"
        aria-label="Open menu"
        title="Open menu" 
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <path
            d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
            fill=""
            className="fill-paragraph dark:fill-white"
          />
          <path
            d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
            fill=""
            className="fill-paragraph dark:fill-white"
          />
          <path
            d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
            fill=""
            className="fill-paragraph dark:fill-white"
          />
        </svg>
      </button>

      {/* Mobile Menu Panel - Full Screen */}
      <div
        className={`mobile-menu-panel fixed top-0 left-0 z-[1000] w-full h-screen bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out lg:hidden ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-20">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="DAIKI MEDIA"
              width={160}
              height={130}
              className="h-8 w-auto"
              />
            <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
              DAIKI MEDIA
            </span>
          </div>
          <button
            className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
            aria-label="close menu"
            title="close menu"
            onClick={closeMobileMenu}
          >
            <CloseIcon className="text-gray-600 dark:text-gray-300 text-lg" />
          </button>
        </div>

        {/* Menu Content - Scrollable */}
        <div className="h-[calc(100vh-5rem)] overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <nav className="p-6">
            <ul className="space-y-1">
              {menuData.menuContent.map((menuItem) => (
                <li key={menuItem.id}>
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className="block px-4 py-4 text-base font-medium text-gray-900 dark:text-white rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                      onClick={closeMobileMenu}
                    >
                      {menuItem.title}
                    </Link>
                  ) : menuItem.megaMenu ? (
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <button
                        onClick={() => toggleDropdown(menuItem.id)}
                        className="w-full flex items-center justify-between px-4 py-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {menuItem.title}
                        <AngleDownIcon
                          className={cn(
                            "text-gray-500 dark:text-gray-400 transition-transform duration-200",
                            openDropdown === menuItem.id ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {openDropdown === menuItem.id && (
                        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                          <div className="p-4 space-y-6 max-h-96 overflow-y-auto">
                            {["3.1", "3.2", "3.3", "3.4"].map((category) => (
                              <div key={category}>
                                {menuItem.submenu
                                  .filter(
                                    (item) =>
                                      String(item.id).startsWith(category) &&
                                      item.header
                                  )
                                  .map((headerItem) => (
                                    <div key={headerItem.id} className="mb-6">
                                      <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                                        {headerItem.header}
                                      </h3>
                                      <ul className="space-y-2">
                                        {menuItem.submenu
                                          .filter(
                                            (item) =>
                                              String(item.id).startsWith(
                                                category
                                              ) && !item.header
                                          )
                                          .map((submenuItem) => (
                                            <li key={submenuItem.id}>
                                              <Link
                                                href={submenuItem.path}
                                                className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-md hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                                                onClick={closeMobileMenu}
                                              >
                                                {submenuItem.title}
                                              </Link>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  ))}
                              </div>
                            ))}

                            {/* CTA Button */}
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                              <Link
                                href="/request-demo"
                                className="block w-full px-4 py-3 text-center text-white bg-black hover:bg-gray-800 rounded-lg font-medium transition-colors"
                                onClick={closeMobileMenu}
                              >
                                Get Started
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <button
                        onClick={() => toggleDropdown(menuItem.id)}
                        className="w-full flex items-center justify-between px-4 py-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {menuItem.title}
                        <AngleDownIcon
                          className={cn(
                            "text-gray-500 dark:text-gray-400 transition-transform duration-200",
                            openDropdown === menuItem.id ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {openDropdown === menuItem.id && (
                        <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                          <div className="p-4">
                            <ul className="space-y-2">
                              {menuItem.submenu.map((submenuItem) => (
                                <li key={submenuItem.id}>
                                  <Link
                                    href={submenuItem.path}
                                    className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 rounded-md hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    onClick={closeMobileMenu}
                                  >
                                    {submenuItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  5K+ TRUSTED BUSINESSES
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Grow Your Revenue
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
