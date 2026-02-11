import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-violet-900/30 bg-neutral-950/80 backdrop-blur-md">
      <Link href="/" className="text-xl font-bold text-gradient">
        BookDB
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/feed" className="text-neutral-300 hover:text-rose-400 transition-colors">Feed</Link>
        <Link href="/books" className="text-neutral-300 hover:text-emerald-400 transition-colors">Books</Link>
        <Link href="/share" className="text-neutral-300 hover:text-amber-400 transition-colors">Share</Link>
        <Link href="/profile" className="text-neutral-300 hover:text-violet-400 transition-colors">Profile</Link>
      </div>
    </nav>
  );
}
