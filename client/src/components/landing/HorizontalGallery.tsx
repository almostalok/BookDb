"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BOOK_IMAGES } from "@/lib/constants";

const BOOK_ACCENTS = [
  { gradient: "linear-gradient(135deg, #C9A96E, #8B6914)", color: "#C9A96E" },
  { gradient: "linear-gradient(135deg, #A68B4B, #6B5A3A)", color: "#A68B4B" },
  { gradient: "linear-gradient(135deg, #E0CFA9, #C9A96E)", color: "#E0CFA9" },
  { gradient: "linear-gradient(135deg, #8B7355, #5C4A32)", color: "#8B7355" },
  { gradient: "linear-gradient(135deg, #D4B896, #A08060)", color: "#D4B896" },
  { gradient: "linear-gradient(135deg, #B8976A, #7A6340)", color: "#B8976A" },
];

export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);

  const allBooks = [...BOOK_IMAGES, ...BOOK_IMAGES];

  return (
    <div ref={containerRef} className="overflow-hidden py-20 relative">
      {/* Subtle gold ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A96E]/[0.02] via-[#C9A96E]/[0.04] to-[#C9A96E]/[0.02] blur-[60px]" />

      {/* Decorative center line */}
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/15 to-transparent" />

      <motion.div
        style={{ x }}
        className="flex gap-8 pl-8"
      >
        {allBooks.map((src, i) => {
          const accent = BOOK_ACCENTS[i % BOOK_ACCENTS.length];
          const isHovered = hoveredIndex === i;

          return (
            <motion.div
              key={i}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -16 }}
              className="relative w-52 h-80 shrink-0 group"
            >
              {/* Glow behind card */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-25"
                style={{ background: accent.gradient }}
              />

              {/* Card */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111111] border border-[#C9A96E]/8 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                style={{
                  borderColor: isHovered ? `${accent.color}30` : undefined,
                  boxShadow: isHovered ? `0 25px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px ${accent.color}20` : undefined,
                }}
              >
                {/* Image */}
                <Image
                  src={src}
                  alt={`Book ${i + 1}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="208px"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-80" />

                {/* Gold tint on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: accent.gradient }}
                />

                {/* Top gold accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: accent.gradient }}
                />

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: accent.color }}
                    />
                    <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#FDFBF7]/50">
                      Book {(i % BOOK_IMAGES.length) + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button
                      className="text-[11px] px-4 py-1.5 rounded-full text-[#0A0A0A] font-semibold tracking-wider uppercase hover:scale-105 transition-transform"
                      style={{ background: accent.gradient }}
                    >
                      View
                    </button>
                    <button className="text-[11px] px-4 py-1.5 rounded-full bg-[#FDFBF7]/5 text-[#FDFBF7]/60 border border-[#C9A96E]/10 hover:bg-[#FDFBF7]/10 transition-colors tracking-wider uppercase">
                      Save
                    </button>
                  </div>
                </div>

                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C9A96E]/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {BOOK_ACCENTS.map((accent, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-1.5 h-1.5 rounded-full opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
            style={{ background: accent.color }}
          />
        ))}
      </div>
    </div>
  );
}
