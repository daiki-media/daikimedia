"use client";

import Link from "next/link";
import { useEffect } from "react";
import FadeUpAnimation from "@/components/animations/FadeUpAnimation";
import Footer from "@/components/footer/Footer";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <>
      <main className="mb-150 pt-[200px]">
        <FadeUpAnimation className="container relative">
          <div className="mx-auto max-w-[700px] text-center">
            <h1 className="from-0to-primary/0 bg-gradient-to-b from-primary to-90% bg-clip-text text-[140px] font-bold leading-[1] text-transparent dark:text-transparent">
              500
            </h1>
            <p className="section-tagline -mt-16">Application Error</p>
            <h2 className="mb-9 text-[64px] font-bold leading-[1.22] ">
              Ooops! <br />
              Something Went Wrong
            </h2>
            <p className="mb-8 text-xl">
              We're experiencing some technical difficulties. <br />
              Our team has been notified and is working to fix this issue.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/" className="btn">
                Go Back Home
              </Link>
              <button onClick={reset} className="btn btn-outline">
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === "development" && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 overflow-auto rounded bg-gray-100 p-4 text-xs">
                  {error.message}
                  {error.stack}
                </pre>
              </details>
            )}
          </div>
        </FadeUpAnimation>
      </main>
      <Footer />
    </>
  );
}
