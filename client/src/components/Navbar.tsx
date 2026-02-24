"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Explore", href: "/feed" },
    { name: "Collection", href: "/books" },
    { name: "Share", href: "/share" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-[#111111]/80 backdrop-blur-2xl border border-[#C9A96E]/10 shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(201,169,110,0.06)]"
      >
        {/* Brand */}
        <Link
          href="/"
          className="px-5 py-2 mr-1 font-[family-name:var(--font-playfair)] text-lg tracking-wide text-[#C9A96E] hover:text-[#E0CFA9] transition-colors duration-300"
        >
          BookDb
        </Link>

        {/* Separator */}
        <div className="w-[1px] h-5 bg-[#C9A96E]/15 mr-1" />

        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-[#C9A96E]/10 rounded-full border border-[#C9A96E]/15"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  isActive
                    ? "text-[#C9A96E]"
                    : "text-[#FDFBF7]/40 hover:text-[#FDFBF7]/80"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}

