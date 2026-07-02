"use client";

import dynamic from "next/dynamic";

const MarketsWeServeCarousel = dynamic(() => import("./MarketsWeServeCarouselImpl"));

export default MarketsWeServeCarousel;
