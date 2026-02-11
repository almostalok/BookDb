export default function BooksPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-neutral-950 via-emerald-950/20 to-neutral-950 p-10">
      <h1 className="text-3xl font-light text-gradient-warm tracking-wide">Books</h1>
      <p className="text-neutral-400 mt-2">Browse all books here.</p>
      
      {/* Placeholder cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="aspect-[2/3] rounded-lg bg-linear-to-br from-emerald-900/30 to-violet-900/30 border border-emerald-500/20 hover:border-emerald-400/50 transition-all hover:scale-105 cursor-pointer"
          />
        ))}
      </div>
    </main>
  );
}
