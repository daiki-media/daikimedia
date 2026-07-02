"use client";

import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import { useRef } from "react";

const ScrollFadeIn = ({ children, className }) => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
