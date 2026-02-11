export default function FeedPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-neutral-950 via-rose-950/20 to-neutral-950 p-10">
      <h1 className="text-3xl font-light text-gradient tracking-wide">Feed</h1>
      <p className="text-neutral-400 mt-2">Reading activity will appear here.</p>
      
      {/* Placeholder feed items */}
      <div className="flex flex-col gap-4 mt-8 max-w-2xl">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="p-6 rounded-xl bg-linear-to-r from-rose-900/20 to-violet-900/20 border border-rose-500/20 hover:border-rose-400/40 transition-all"
          >
            <div className="h-4 w-3/4 rounded bg-neutral-700/50 mb-3" />
            <div className="h-3 w-full rounded bg-neutral-800/50 mb-2" />
            <div className="h-3 w-5/6 rounded bg-neutral-800/50" />
          </div>
        ))}
      </div>
    </main>
  );
}
