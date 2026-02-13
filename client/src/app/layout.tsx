import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-blue-500/30 overflow-x-hidden`}>
        <div className="fixed inset-0 files-gradient pointer-events-none" />
        <Navbar />
        <main className="relative z-10 min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

