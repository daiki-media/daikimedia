"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer/Footer"));

export default function FooterClient() {
  return <Footer />;
}
