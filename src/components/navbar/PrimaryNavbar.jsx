"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SearchOption from "./SearchOption";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const PrimaryNavbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [sticky, setSticky] = useState(true);

  const handleStickyNavbar = () => {
    setSticky(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 z-50 w-full bg-transparent pt-8 transition-all duration-500 max-md:z-[500]",
          sticky ? "nav-sticky" : ""
        )}
      >
        <nav className="container dark:text-white relative flex items-center">
          <div className="nav-logo xl:min-w-[150px]">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={120}
                height={100}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavbar />

          {/* Mobile Navigation */}
          <MobileNavbar />
        </nav>
      </header>
      {showSearch &&
        createPortal(
          <SearchOption onClose={() => setShowSearch(false)} />,
          document.body
        )}

      <style jsx global>{`
        /* Fix for nav-sticky */
        .nav-sticky {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .dark .nav-sticky {
          background-color: #111827;
        }
      `}</style>
    </>
  );
};

export default PrimaryNavbar;
