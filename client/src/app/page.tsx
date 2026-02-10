"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  ParallaxImage,
  RevealSection,
  HorizontalGallery,
  TextReveal,
  ScrollProgress,
} from "@/components/landing";
import { BOOK_IMAGES, HERO_IMAGES, STATS } from "@/lib/constants";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      <ScrollProgress />

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 mix-blend-difference">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-light tracking-[0.2em] uppercase"
          >
            BookDb
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-8"
          >
            <Link
              href="/books"
              className="text-xs tracking-[0.15em] uppercase hover:opacity-60 transition-opacity"
            >
              Library
            </Link>
            <Link
              href="/signup"
              className="text-xs tracking-[0.15em] uppercase hover:opacity-60 transition-opacity"
            >
              Enter
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: mounted ? heroOpacity : 1, scale: mounted ? heroScale : 1 }}
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Background image grid */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-20">
          {BOOK_IMAGES.slice(0, 3).map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover grayscale scale-110"
                sizes="33vw"
                priority
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-8"
          >
            A social sanctuary for readers
          </motion.p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Stories
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="block text-neutral-500"
            >
              Shared
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-5 border border-neutral-100 text-xs tracking-[0.2em] uppercase overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-neutral-950 transition-colors duration-300">
                  Begin Your Journey
                </span>
                <motion.div
                  className="absolute inset-0 bg-neutral-100"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-16 bg-linear-to-b from-neutral-100 to-transparent"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Horizontal Book Gallery */}
      <section className="py-24 bg-neutral-900">
        <RevealSection className="max-w-7xl mx-auto px-8 mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
            Curated Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-extralight">
            <TextReveal text="Discover through" />
            <br />
            <TextReveal text="those you trust" />
          </h2>
        </RevealSection>
        <HorizontalGallery />
      </section>

      {/* Split Image Section - Track */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="relative h-[60vh] md:h-auto overflow-hidden">
          <ParallaxImage src={HERO_IMAGES.split1} className="absolute inset-0" speed={-0.3} />
          <div className="absolute inset-0 bg-neutral-950/40" />
        </div>
        <div className="flex items-center px-8 md:px-16 py-24 bg-neutral-950">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">Track</p>
            <h3 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
              Build your reading history into a living archive
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-8">
              Every page turned becomes part of your story. Track progress, set goals, and watch
              your literary journey unfold.
            </p>
            <Link
              href="/books"
              className="text-xs tracking-[0.2em] uppercase border-b border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
            >
              Explore Library
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Reverse Split Section - Share */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="flex items-center px-8 md:px-16 py-24 bg-neutral-900 order-2 md:order-1">
          <RevealSection>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">Share</p>
            <h3 className="text-3xl md:text-4xl font-extralight mb-6 leading-tight">
              Transform thoughts into conversations
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-8">
              Share quotes that moved you. Post reflections that matter. Connect with minds that
              resonate.
            </p>
            <Link
              href="/feed"
              className="text-xs tracking-[0.2em] uppercase border-b border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
            >
              View Feed
            </Link>
          </RevealSection>
        </div>
        <div className="relative h-[60vh] md:h-auto overflow-hidden order-1 md:order-2">
          <ParallaxImage src={HERO_IMAGES.split2} className="absolute inset-0" speed={0.3} />
          <div className="absolute inset-0 bg-neutral-950/40" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-8">
          <RevealSection className="grid grid-cols-3 gap-8 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <div className="text-5xl md:text-7xl font-extralight mb-2">{stat.value}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-neutral-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </RevealSection>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-neutral-900">
        <RevealSection className="max-w-4xl mx-auto px-8 text-center">
          <blockquote className="text-2xl md:text-4xl font-extralight leading-relaxed text-neutral-300">
            &ldquo;A reader lives a thousand lives before he dies. The man who never reads lives
            only one.&rdquo;
          </blockquote>
          <p className="mt-8 text-xs tracking-[0.2em] uppercase text-neutral-500">
            — George R.R. Martin
          </p>
        </RevealSection>
      </section>

      {/* Final CTA Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGES.cta}
            alt="Books"
            fill
            className="object-cover grayscale opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
        </div>

        <RevealSection className="relative z-10 text-center px-8">
          <h2 className="text-5xl md:text-7xl font-extralight mb-8">
            <TextReveal text="Ready to begin?" />
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-neutral-100 text-neutral-950 text-xs tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors"
              >
                Create Account
              </motion.button>
            </Link>
          </motion.div>
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-xl font-light tracking-[0.2em] uppercase">BookDb</div>
            <div className="flex items-center gap-8">
              <Link
                href="/books"
                className="text-xs tracking-[0.15em] uppercase text-neutral-500 hover:text-neutral-100 transition-colors"
              >
                Library
              </Link>
              <Link
                href="/feed"
                className="text-xs tracking-[0.15em] uppercase text-neutral-500 hover:text-neutral-100 transition-colors"
              >
                Feed
              </Link>
              <Link
                href="/profile"
                className="text-xs tracking-[0.15em] uppercase text-neutral-500 hover:text-neutral-100 transition-colors"
              >
                Profile
              </Link>
            </div>
            <div className="text-xs text-neutral-600">© 2026 BookDb</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

