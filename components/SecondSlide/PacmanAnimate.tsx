"use client";

import {motion} from 'framer-motion';


const PacmanAnimate = () => {
    const path = "M50 50 C 100 150, 200 150, 250 50";
  return (
    <motion.img
      src="/ufo1.png"
      alt="Animated Image"
      animate={{
        path: path,
        // rotate: 360,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

export default PacmanAnimate