"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BOOK_IMAGES } from "@/lib/constants";

export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={containerRef} className="overflow-hidden py-16">
      <motion.div style={{ x }} className="flex gap-6">
        {[...BOOK_IMAGES, ...BOOK_IMAGES].map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.4 }}
            className="relative w-48 h-72 shrink-0 rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src={src}
              alt={`Book ${i + 1}`}
              fill
              className="object-cover transition-all duration-500 hover:scale-110"
              sizes="200px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-violet-950/70 via-transparent to-amber-500/20" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
