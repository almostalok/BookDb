"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ src, className, speed = 0.5 }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <Image
        src={src}
        alt="Book"
        fill
        className="object-cover transition-all duration-700 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
}
