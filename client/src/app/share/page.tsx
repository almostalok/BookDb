export default function SharePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-neutral-950 via-amber-950/20 to-neutral-950 p-10">
      <h1 className="text-3xl font-light text-gradient-warm tracking-wide">Share</h1>
      <p className="text-neutral-400 mt-2">
        Share what you're reading or a quote.
      </p>
      
      {/* Share form placeholder */}
      <div className="mt-8 max-w-xl">
        <div className="p-6 rounded-xl bg-linear-to-br from-amber-900/20 to-rose-900/20 border border-amber-500/20">
          <textarea 
            className="w-full h-32 bg-neutral-900/50 border border-amber-500/30 rounded-lg p-4 text-neutral-200 placeholder-neutral-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
            placeholder="What are you reading? Share a thought or quote..."
          />
          <button className="mt-4 px-8 py-3 bg-linear-to-r from-amber-500 to-rose-500 text-neutral-950 font-medium rounded-lg hover:from-amber-400 hover:to-rose-400 transition-all glow-amber">
            Share
          </button>
        </div>
      </div>
    </main>
  );
}
