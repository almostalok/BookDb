"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 1]);

  return (
    <>
      {/* Background track */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-neutral-900/80 backdrop-blur-sm z-50" />
      
      {/* Main progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-linear-to-r from-cyan-400 via-violet-500 to-amber-400 origin-left z-50"
      />
      
      {/* Glow effect */}
      <motion.div
        style={{ scaleX, opacity: glowOpacity }}
        className="fixed top-0 left-0 right-0 h-2 bg-linear-to-r from-cyan-400 via-fuchsia-500 to-amber-400 origin-left z-50 blur-md"
      />
      
      {/* Animated shimmer overlay */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 origin-left z-50 overflow-hidden"
      >
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
        />
      </motion.div>
      
      {/* Progress indicator dot */}
      <motion.div
        style={{ left: useTransform(scaleX, v => `calc(${v * 100}% - 6px)`) }}
        className="fixed top-0 w-3 h-3 -translate-y-0.5 rounded-full bg-white shadow-lg shadow-violet-500/50 z-50"
      />
    </>
  );
}
