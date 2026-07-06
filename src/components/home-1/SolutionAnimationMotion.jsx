"use client";
import {
  fadeFromLeftAnimation,
  fadeFromRightAnimation,
} from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import solutionImage1Dark from "@/public/images/solution/solution-shape1.jpg";
import solutionImage1 from "@/public/images/solution/solution-shape1.jpg";
import solutionImage2Dark from "@/public/images/solution/solution-shape2.jpg";
import solutionImage2 from "@/public/images/solution/solution-shape2.jpg";

const SolutionAnimation = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const controlAnimation1 = useWhileInView(ref1);
  const controlAnimation2 = useWhileInView(ref2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <motion.div
        ref={ref1}
        initial={false}
        animate={controlAnimation1}
        variants={fadeFromLeftAnimation}
        className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden"
      >
        <Image
          src={solutionImage1}
          alt="solution image"
          fill
          className="object-cover dark:hidden"
        />
        <Image
          src={solutionImage1Dark}
          alt="solution image"
          fill
          className="hidden object-cover dark:inline-block"
        />
      </motion.div>

      <motion.div
        ref={ref2}
        initial={false}
        animate={controlAnimation2}
        variants={fadeFromRightAnimation}
        className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden"
      >
        <Image
          src={solutionImage2}
          alt="solution image"
          fill
          className="object-cover dark:hidden"
        />
        <Image
          src={solutionImage2Dark}
          alt="solution image"
          fill
          className="hidden object-cover dark:inline-block"
        />
      </motion.div>
    </div>
  );
};

export default SolutionAnimation;
