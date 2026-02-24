export default function SharePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]/50 mb-3">Express Yourself</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#FDFBF7] tracking-tight">
          Share a Thought
        </h1>
        <p className="text-[#FDFBF7]/30 mt-3 text-lg font-light">
          A passage, a reflection, a recommendation.
        </p>
      </div>

      {/* Share Form */}
      <div className="max-w-xl">
        <div className="card-luxury !rounded-3xl p-8 relative overflow-hidden">
          {/* Corner glow */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#C9A96E]/[0.03] rounded-full blur-[40px]" />

          <textarea
            className="w-full h-36 bg-[#0A0A0A]/60 border border-[#C9A96E]/10 rounded-2xl p-5 text-[#FDFBF7]/80 placeholder-[#FDFBF7]/15 focus:border-[#C9A96E]/25 focus:outline-none transition-colors duration-300 resize-none font-light text-[0.95rem] leading-relaxed"
            placeholder="What are you reading? Share a thought or a favourite passage..."
          />

          {/* Actions */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full bg-[#FDFBF7]/[0.03] border border-[#C9A96E]/8 flex items-center justify-center text-[#C9A96E]/40 hover:text-[#C9A96E]/70 hover:border-[#C9A96E]/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </button>
              <button className="w-9 h-9 rounded-full bg-[#FDFBF7]/[0.03] border border-[#C9A96E]/8 flex items-center justify-center text-[#C9A96E]/40 hover:text-[#C9A96E]/70 hover:border-[#C9A96E]/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </button>
            </div>
            <button className="btn-gold !py-2.5 !px-7 !text-[11px]">
              Share
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
