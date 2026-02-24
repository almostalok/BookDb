import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#0A0A0A] text-[#FDFBF7] antialiased overflow-x-hidden`}>
        {/* Subtle ambient gold glow */}
        <div className="fixed inset-0 luxury-gradient pointer-events-none" />
        {/* Top gold accent line */}
        <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent z-[60]" />
        <Navbar />
        <main className="relative z-10 min-h-screen pt-28 pb-16 px-6 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

