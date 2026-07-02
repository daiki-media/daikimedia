"use client";

import dynamic from "next/dynamic";

const IntegrationAnimation = dynamic(() => import("./IntegrationAnimationImpl"));

export default IntegrationAnimation;
