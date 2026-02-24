export default function BooksPage() {
  const books = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    hue: 30 + (i * 7) % 30,
  }));

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]/50 mb-3">Your Private Archive</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#FDFBF7] tracking-tight">
          The Collection
        </h1>
        <p className="text-[#FDFBF7]/30 mt-3 text-lg font-light">Browse and manage your curated library.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {["All", "Reading", "Completed", "Wishlist"].map((filter) => (
          <button
            key={filter}
            className={`px-5 py-2 rounded-full text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
              filter === "All"
                ? "bg-[#C9A96E]/15 text-[#C9A96E] border border-[#C9A96E]/20"
                : "bg-transparent text-[#FDFBF7]/30 border border-[#FDFBF7]/8 hover:border-[#C9A96E]/15 hover:text-[#FDFBF7]/60"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {books.map((book) => (
          <div
            key={book.id}
            className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
          >
            {/* Cover gradient */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: `linear-gradient(160deg, hsl(${book.hue}, 25%, 18%), #0A0A0A)`,
              }}
            />
            {/* Gold spine */}
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-[#C9A96E]/30 via-[#C9A96E]/10 to-[#C9A96E]/30" />
            {/* Hover border */}
            <div className="absolute inset-0 rounded-xl border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/15 transition-colors duration-500" />
            {/* Gold shimmer on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#C9A96E]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Decorative content */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="h-3 w-2/3 rounded bg-[#FDFBF7]/8 mb-2" />
              <div className="h-2 w-1/2 rounded bg-[#FDFBF7]/5" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
