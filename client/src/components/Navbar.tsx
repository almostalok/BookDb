"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Explore", href: "/feed" },
    { name: "My Books", href: "/books" },
    { name: "Share", href: "/share" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav 
        initial={{ y: -20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="flex items-center gap-1 p-1.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
      >
        <Link 
          href="/" 
          className="px-4 py-2 mr-2 font-bold text-white/90 hover:text-white transition-colors"
        >
          BookDb
        </Link>
        
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="navbar-highlight"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? "text-white" : "text-white/60 hover:text-white/90"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}

