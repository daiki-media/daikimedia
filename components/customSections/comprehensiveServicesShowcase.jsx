"use client";

import dynamic from "next/dynamic";

const ComprehensiveServicesShowcase = dynamic(() =>
  import("./comprehensiveServicesShowcaseImpl")
);

export default ComprehensiveServicesShowcase;
