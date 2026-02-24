"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.9]);

  return (
    <>
      {/* Background track */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#111111]/80 backdrop-blur-sm z-50" />

      {/* Main progress bar — gold gradient */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        data-bar
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#A68B4B] via-[#C9A96E] to-[#E0CFA9]" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        style={{ scaleX, opacity: glowOpacity }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A68B4B] via-[#C9A96E] to-[#E0CFA9] origin-left z-50 blur-sm"
      />
    </>
  );
}
