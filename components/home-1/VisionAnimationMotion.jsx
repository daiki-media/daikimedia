"use client";
import useWhileInView from "@/hooks/useWhileInView";
import visionImage2Light from "@/public/images/vision/vision-image-1.jpg";
import visionImage3Light from "@/public/images/vision/vision-image-2.jpg";
import visionImage2Dark from "@/public/images/vision/vision-image-1.jpg";
import visionImage3Dark from "@/public/images/vision/vision-image-2.jpg";
import { motion } from "framer-motion";
import {
  fadeFromLeftAnimation,
  fadeFromRightAnimation,
} from "@/data/animation";
import Image from "next/image";
import { useRef } from "react";

const VisionAnimation = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const controlAnimation1 = useWhileInView(ref1);
  const controlAnimation2 = useWhileInView(ref2);

  return (
    <div className="grid h-full w-full grid-cols-2 gap-8">
      <motion.div
        ref={ref1}
        variants={fadeFromRightAnimation}
        initial="initial"
        animate={controlAnimation1}
        className="h-[400px] md:h-[500px] flex items-stretch"
      >
        <Image
          src={visionImage2Light}
          alt="vision image shape"
          className="h-full w-full object-cover dark:hidden"
        />
        <Image
          src={visionImage2Dark}
          alt="vision image shape"
          className="hidden h-full w-full object-cover dark:inline-block"
        />
      </motion.div>
  
      <motion.div
        ref={ref2}
        variants={fadeFromLeftAnimation}
        initial="initial"
        animate={controlAnimation2}
        className="w-full h-full max-w-[700px] flex items-stretch"
      >
        <Image
          src={visionImage3Light}
          alt="vision image shape"
          className="h-full w-full object-cover dark:hidden"
        />
        <Image
          src={visionImage3Dark}
          alt="vision image shape"
          className="hidden h-full w-full object-cover dark:inline-block"
        />
      </motion.div>
    </div>
  );
  
};

export default VisionAnimation;
