"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Simple SVG Icons
const Icons = {
  Book: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  Share: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
  )
};

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-20 pb-32 overflow-x-hidden">
      <Hero3D />
      <BentoGrid />
      <BookShowcase />
      <BookShowcase/>
    </div>
  );
}

function Hero3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of element
    const mouseXParam = (e.clientX - rect.left) / width - 0.5;
    const mouseYParam = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(mouseXParam);
    mouseY.set(mouseYParam);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-12 perspective-2000">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 translate-x-1/4 -translate-y-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] mix-blend-screen" />
      </div>

      {/* 3D Book Container */}
      <div 
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-4"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
           animate={{ opacity: 1, scale: 1, rotateX: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
           className="relative group cursor-pointer mb-16"
        >
          {/* The Book Itself */}
          <div className="relative w-[300px] h-[460px] md:w-[380px] md:h-[580px] bg-[#1a1a1a] rounded-r-2xl rounded-l-md shadow-2xl transform-style-3d transition-transform duration-500">
            
            {/* Front Cover */}
            <div className="absolute inset-0 bg-neutral-900 rounded-r-xl rounded-l-sm border border-white/10 overflow-hidden backface-hidden">
              {/* Cover Art */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[url('/book-texture.png')] bg-cover opacity-80 mix-blend-overlay">
                 <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center">
                    <Icons.Book />
                 </div>
                 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white drop-shadow-2xl mb-2">BookDb</h1>
                 <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />
                 <p className="text-lg text-white/60 font-medium tracking-wide">The Archive of Tomorrow</p>
              </div>
              
              {/* Glossy sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Book Pages (Side) */}
            <div className="absolute top-1 bottom-1 right-0 w-[40px] bg-[#f0f0f0] transform translate-x-[20px] translate-z-[-20px] rotate-y-90 rounded-sm bg-[repeating-linear-gradient(90deg,#fff,#fff_1px,#eee_2px)] opacity-90 shadow-inner" style={{ transform: "rotateY(90deg) translateZ(-19px) translateX(9px)", width: "38px", height: "98%" }}></div>

            {/* Book Back Cover (just in case they rotate too far, dark) */}
            <div className="absolute inset-0 bg-neutral-800 rounded-r-xl transform translate-z-[-40px] border border-white/5" style={{ transform: "translateZ(-40px)" }}></div>
            
             {/* Glow behind book */}
            <div className="absolute inset-0 bg-blue-500/30 blur-[60px] -z-10 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center max-w-2xl px-4 relative z-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Your Library, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Reimagined.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-neutral-400 mb-10 text-balance leading-relaxed"
          >
            Experience a new dimension of reading. Track your progress, discover hidden gems, and curate a collection that reflects who you are.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/books" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">Start Exploring <Icons.Sparkles /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/feed" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm">
              View Community
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section className="px-4 max-w-7xl mx-auto w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
        {/* Large Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 group relative overflow-hidden rounded-[32px] bg-neutral-900/40 border border-white/10 p-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="h-full w-full rounded-[28px] overflow-hidden relative bg-neutral-900/40 backdrop-blur-xl p-10 flex flex-col justify-end">
            <div className="absolute top-0 right-0 p-10 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
               <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-[60px]" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <Icons.Book />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Smart Classification</h3>
              <p className="text-neutral-400 text-lg max-w-md">Automatically organize your library by genre, author, and reading status with zero effort.</p>
            </div>
          </div>
        </motion.div>

        {/* Tall Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:row-span-1 group relative overflow-hidden rounded-[32px] bg-neutral-900/40 border border-white/10 p-1"
        >
          <div className="h-full w-full rounded-[28px] overflow-hidden relative bg-neutral-900/40 backdrop-blur-xl p-8 flex flex-col justify-between">
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[40px] group-hover:bg-purple-500/30 transition-colors" />
             
             <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <Icons.Share />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Social Feed</h3>
                <p className="text-neutral-400">See what your friends are reading and share your thoughts in real-time.</p>
              </div>
          </div>
        </motion.div>

        {/* Wide Card Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 group relative overflow-hidden rounded-[32px] bg-neutral-900/40 border border-white/10 p-1"
        >
          <div className="h-full w-full rounded-[28px] overflow-hidden relative bg-neutral-900/40 backdrop-blur-xl p-10 flex items-center justify-between">
             <div className="relative z-10 max-w-xl">
               <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                  <Icons.User />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Reading Analytics</h3>
                <p className="text-neutral-400 text-lg">Detailed insights into your reading habits. Track pages per day, streaks, and yearly goals.</p>
             </div>
             
             {/* Abstract chart graphic */}
             <div className="hidden md:flex gap-4 items-end h-32 pr-10 opacity-50">
               {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                 <div key={i} className="w-8 bg-white/10 rounded-t-lg" style={{ height: `${h}%` }} />
               ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BookShowcase() {
   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start end", "end start"]
   });
   
   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
   
   const books = [
     { color: "from-red-500", title: "Dune" },
     { color: "from-blue-500", title: "Foundation" },
     { color: "from-green-500", title: "Neuromancer" },
     { color: "from-yellow-500", title: "Snow Crash" },
     { color: "from-purple-500", title: "Hyperion" },
     { color: "from-pink-500", title: "Ubik" },
     { color: "from-indigo-500", title: "1984" },
   ];

   return (
     <section ref={containerRef} className="py-24 overflow-hidden w-full">
       <div className="mb-12 px-4 md:px-12 max-w-7xl mx-auto flex items-end justify-between">
         <h2 className="text-3xl md:text-4xl font-bold text-white">Trending Now</h2>
         <Link href="/books" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
            View all <span className="text-lg">→</span>
         </Link>
       </div>
       
       <div className="relative w-full">
         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
         
         <motion.div style={{ x }} className="flex gap-8 px-12 w-max">
           {[...books, ...books].map((book, i) => (
             <div 
               key={i} 
               className="group relative flex-shrink-0 w-48 h-72 rounded-lg bg-neutral-800 border border-white/10 shadow-2xl cursor-pointer hover:-translate-y-4 hover:rotate-2 transition-all duration-300"
             >
               {/* Spine */}
               <div className="absolute top-0 bottom-0 left-0 w-3 bg-white/20 z-20 rounded-l-lg" />
               
               {/* Cover Gradient */}
               <div className={`absolute inset-0 bg-gradient-to-br ${book.color} to-black opacity-30 group-hover:opacity-40 transition-opacity rounded-lg`} />
               
               {/* Title */}
               <div className="absolute bottom-4 left-4 right-4 z-20">
                 <p className="font-bold text-lg text-white leading-tight drop-shadow-md">{book.title}</p>
                 <p className="text-xs text-white/60 mt-1">Sci-Fi Classic</p>
               </div>
               
               {/* Shine */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg pointer-events-none" />
             </div>
           ))}
         </motion.div>
       </div>
     </section>
   );
}

