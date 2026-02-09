import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        BookDB
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/feed">Feed</Link>
        <Link href="/books">Books</Link>
        <Link href="/share">Share</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
