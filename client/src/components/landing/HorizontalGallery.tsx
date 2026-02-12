"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BOOK_IMAGES } from "@/lib/constants";

const BOOK_COLORS = [
  { gradient: "linear-gradient(135deg, #06b6d4, #2563eb)", color: "#06b6d4" },
  { gradient: "linear-gradient(135deg, #8b5cf6, #9333ea)", color: "#8b5cf6" },
  { gradient: "linear-gradient(135deg, #d946ef, #ec4899)", color: "#d946ef" },
  { gradient: "linear-gradient(135deg, #f59e0b, #ea580c)", color: "#f59e0b" },
  { gradient: "linear-gradient(135deg, #10b981, #14b8a6)", color: "#10b981" },
  { gradient: "linear-gradient(135deg, #f43f5e, #dc2626)", color: "#f43f5e" },
];

export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  const allBooks = [...BOOK_IMAGES, ...BOOK_IMAGES];

  return (
    <div ref={containerRef} className="overflow-hidden py-20 relative">
      {/* Background gradient blur */}
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 via-violet-500/10 to-fuchsia-500/5 blur-3xl" />
      
      {/* Horizontal scroll track decoration */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent" />
      
      <motion.div 
        style={{ x, rotateY }}
        className="flex gap-8 pl-8 perspective-1000"
      >
        {allBooks.map((src, i) => {
          const colorScheme = BOOK_COLORS[i % BOOK_COLORS.length];
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
              whileHover={{ scale: 1.08, y: -20, rotateX: 5 }}
              className="relative w-52 h-80 shrink-0 group"
            >
              {/* Glassmorphism glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl"
                style={{ background: colorScheme.gradient }}
              />
              
              {/* Card container */}
              <div 
                className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm bg-neutral-900/50 border border-white/10 transition-all duration-500 shadow-2xl"
                style={{ 
                  borderColor: isHovered ? `${colorScheme.color}50` : undefined,
                  boxShadow: isHovered ? `0 25px 50px -12px ${colorScheme.color}30` : undefined
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
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: colorScheme.gradient }}
                />
                
                {/* Top accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: colorScheme.gradient }}
                />
                
                {/* Bottom info panel */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                    className="flex items-center gap-2"
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ background: colorScheme.gradient }}
                    />
                    <span className="text-xs font-medium tracking-wide text-white/80">Book {(i % BOOK_IMAGES.length) + 1}</span>
                  </motion.div>
                  <div className="mt-2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button 
                      className="text-xs px-3 py-1.5 rounded-full text-white font-medium hover:scale-105 transition-transform"
                      style={{ background: colorScheme.gradient }}
                    >
                      View
                    </button>
                    <button className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/80 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      Save
                    </button>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div 
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"
                  style={{ background: colorScheme.gradient }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Horizontal scroll indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {BOOK_COLORS.map((color, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-2 h-2 rounded-full opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            style={{ background: color.gradient }}
          />
        ))}
      </div>
    </div>
  );
}
