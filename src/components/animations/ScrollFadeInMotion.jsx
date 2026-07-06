"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Content is server-rendered fully visible. The fade-up animation is only
// "armed" on the client for elements still below the viewport, so sections
// can never be stuck invisible when JS is slow, blocked, or fails.
const ScrollFadeIn = ({ children, className }) => {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight) {
      setArmed(true);
    }
  }, []);

  const hidden = armed && !inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={hidden ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
      transition={hidden ? { duration: 0 } : { duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
