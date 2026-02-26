"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

/* --- ICONS --- */
const Icons = {
  Book: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  Share: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Diamond: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  Crown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M3 20h18"/></svg>
  ),
};

/* --- CONSTANTS --- */
const CURATED_BOOKS = [
  { title: "Dune", author: "Frank Herbert", color: "#8B6914" },
  { title: "Foundation", author: "Isaac Asimov", color: "#4A6741" },
  { title: "Neuromancer", author: "William Gibson", color: "#2D4A6F" },
  { title: "Snow Crash", author: "Neal Stephenson", color: "#6B3A3A" },
  { title: "Hyperion", author: "Dan Simmons", color: "#4A3A6B" },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", color: "#6B5A3A" },
  { title: "1984", author: "George Orwell", color: "#3A3A3A" },
];

const STATS = [
  { value: "10K+", label: "Curated Readers" },
  { value: "50K+", label: "Rare Editions" },
  { value: "100K+", label: "Quotes Shared" },
];

/* --- PAGE --- */
export default function LandingPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <CuratedCollection />
      <TestimonialSection />
      <TestimonialSection/>
      <CTASection />
    </div>
  );
}

/* --- HERO --- */
function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 25 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      className="relative min-h-[100vh] flex flex-col items-center justify-center -mt-28 pt-28 perspective-2000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C9A96E]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#C9A96E]/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-12 px-5 py-2 rounded-full border border-[#C9A96E]/15 bg-[#C9A96E]/[0.04]"
        >
          <Icons.Crown />
          <span className="text-xs tracking-[0.2em] uppercase text-[#C9A96E]/80">The Premier Reading Society</span>
        </motion.div>

        {/* 3D Book element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative group cursor-pointer mb-16"
        >
          <div className="relative w-[220px] h-[340px] md:w-[280px] md:h-[420px]">
            {/* Front cover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-r-xl rounded-l-sm border border-[#C9A96E]/15 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/10 via-transparent to-[#C9A96E]/5" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center mb-6 text-[#C9A96E]">
                  <Icons.Diamond />
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#FDFBF7] tracking-tight mb-2">BookDb</h2>
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent mb-3" />
                <p className="text-xs tracking-[0.2em] uppercase text-[#C9A96E]/50">Est. MMXXVI</p>
              </div>
              {/* Gold edge shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            {/* Spine/pages */}
            <div
              className="absolute top-1 bottom-1 right-0 bg-[#E8E4DD]/80 rounded-sm shadow-inner"
              style={{ transform: "rotateY(90deg) translateZ(-18px) translateX(8px)", width: "36px", height: "98%", backgroundImage: "repeating-linear-gradient(90deg, #E8E4DD, #E8E4DD 1px, #D8D4CD 2px)" }}
            />
            {/* Glow */}
            <div className="absolute inset-0 bg-[#C9A96E]/20 blur-[50px] -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-700 rounded-full" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FDFBF7] mb-8 leading-[0.95]"
        >
          Your Library,
          <br />
          <span className="text-gold-gradient italic">Elevated.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-[#FDFBF7]/40 mb-14 max-w-xl leading-relaxed font-light"
        >
          A refined sanctuary for discerning readers. Curate your personal collection,
          discover extraordinary titles, and connect with a community that values
          the art of literature.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 items-center"
        >
          <Link href="/books" className="btn-gold flex items-center gap-3">
            Enter the Collection <Icons.ArrowRight />
          </Link>
          <Link href="/feed" className="btn-ghost">
            Explore the Society
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* --- STATS BAR --- */
function StatsBar() {
  return (
    <section className="relative py-20 px-4">
      <div className="gold-line mb-20 max-w-5xl mx-auto" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="text-center flex-1"
          >
            <div className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#C9A96E] mb-2">{stat.value}</div>
            <div className="text-xs tracking-[0.2em] uppercase text-[#FDFBF7]/30">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="gold-line mt-20 max-w-5xl mx-auto" />
    </section>
  );
}

/* --- FEATURES --- */
function FeaturesSection() {
  const features = [
    {
      icon: <Icons.Book />,
      title: "Intelligent Curation",
      description: "Your collection, impeccably organized by genre, author, and personal taste \u2014 effortlessly.",
      span: "md:col-span-2",
    },
    {
      icon: <Icons.Share />,
      title: "Private Salons",
      description: "Share insights with an intimate circle of fellow bibliophiles.",
      span: "",
    },
    {
      icon: <Icons.User />,
      title: "Reading Analytics",
      description: "Elegant insights into your reading journey \u2014 streaks, milestones, and annual achievements.",
      span: "",
    },
    {
      icon: <Icons.Diamond />,
      title: "Rare Discoveries",
      description: "Algorithmically surfaced recommendations from rare and independent publishers worldwide.",
      span: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]/60 mb-4">Why BookDb</p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#FDFBF7] tracking-tight">
          Crafted for the <span className="italic text-[#C9A96E]">connoisseur</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className={`card-luxury p-10 group relative overflow-hidden ${f.span}`}
          >
            {/* Gold accent corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#C9A96E]/[0.03] rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="w-12 h-12 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center mb-8 text-[#C9A96E] border border-[#C9A96E]/10 group-hover:bg-[#C9A96E]/15 transition-colors duration-500">
              {f.icon}
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#FDFBF7] mb-3 tracking-tight">{f.title}</h3>
            <p className="text-[#FDFBF7]/35 leading-relaxed text-[0.95rem]">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* --- CURATED COLLECTION --- */
function CuratedCollection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={containerRef} className="py-28 overflow-hidden w-full">
      <div className="mb-16 px-4 md:px-12 max-w-6xl mx-auto flex items-end justify-between">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]/60 mb-3">Hand-picked</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl text-[#FDFBF7] tracking-tight">
            The Collection
          </h2>
        </div>
        <Link
          href="/books"
          className="text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors flex items-center gap-2 text-sm tracking-wider uppercase"
        >
          View all
        </Link>
      </div>

      <div className="relative w-full">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />

        <motion.div style={{ x }} className="flex gap-8 px-16 w-max">
          {[...CURATED_BOOKS, ...CURATED_BOOKS].map((book, i) => (
            <div
              key={i}
              className="group relative flex-shrink-0 w-52 h-[310px] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-3"
            >
              {/* Cover */}
              <div
                className="absolute inset-0 transition-all duration-700"
                style={{ background: `linear-gradient(160deg, ${book.color}, #0A0A0A)` }}
              />
              {/* Gold spine */}
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A96E]/40 via-[#C9A96E]/20 to-[#C9A96E]/40" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="font-[family-name:var(--font-playfair)] text-xl text-[#FDFBF7] leading-tight mb-1">{book.title}</p>
                <p className="text-xs text-[#FDFBF7]/40 tracking-wider">{book.author}</p>
              </div>
              {/* Hover gold shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C9A96E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Border */}
              <div className="absolute inset-0 rounded-xl border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/20 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* --- TESTIMONIAL --- */
function TestimonialSection() {
  return (
    <section className="py-28 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-10 flex justify-center">
          <div className="w-12 h-12 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/15 flex items-center justify-center">
            <span className="font-[family-name:var(--font-playfair)] text-2xl text-[#C9A96E]">{"\u201C"}</span>
          </div>
        </div>
        <blockquote className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#FDFBF7]/80 leading-relaxed italic mb-10">
          BookDb transformed how I engage with literature. The curation is impeccable,
          and the community is unlike anything I have experienced.
        </blockquote>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#A68B4B]" />
          <p className="text-sm text-[#FDFBF7]/60">Alexandra Beaumont</p>
          <p className="text-xs text-[#C9A96E]/40 tracking-[0.15em] uppercase">Founding Member</p>
        </div>
      </motion.div>
    </section>
  );
}

/* --- CTA --- */
function CTASection() {
  return (
    <section className="py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9A96E]/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]/50 mb-6 relative z-10">Begin your journey</p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-[#FDFBF7] tracking-tight mb-8 relative z-10">
          Join the <span className="italic text-[#C9A96E]">inner circle</span>
        </h2>
        <p className="text-[#FDFBF7]/35 text-lg mb-12 max-w-lg mx-auto relative z-10 font-light">
          An exclusive community awaits. Access curated collections, private reading salons, and personalized literary recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
          <Link href="/books" className="btn-gold flex items-center gap-3 justify-center">
            Request Access
          </Link>
          <Link href="/feed" className="btn-ghost">
            Learn More
          </Link>
        </div>

        {/* Bottom decorative line */}
        <div className="gold-line mt-28 max-w-xs mx-auto" />
      </motion.div>
    </section>
  );
}
