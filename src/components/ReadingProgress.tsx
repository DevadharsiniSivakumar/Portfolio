"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ReadingProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-[0%] z-[100000]"
      style={{ scaleX }}
    />
  );
};
