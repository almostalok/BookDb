export default function FeedPage() {
  const activities = [
    { user: "Victoria Ashford", action: "finished reading", book: "The Secret History", time: "2h ago" },
    { user: "Sebastian Grey", action: "added to collection", book: "Brideshead Revisited", time: "5h ago" },
    { user: "Isabelle Fontaine", action: "shared a passage from", book: "In Search of Lost Time", time: "8h ago" },
    { user: "Alexander Worth", action: "began reading", book: "The Great Gatsby", time: "12h ago" },
    { user: "Catherine de Lisle", action: "reviewed", book: "Notes from Underground", time: "1d ago" },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]/50 mb-3">The Reading Room</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#FDFBF7] tracking-tight">
          Society Feed
        </h1>
        <p className="text-[#FDFBF7]/30 mt-3 text-lg font-light">Literary dispatches from the inner circle.</p>
      </div>

      {/* Feed items */}
      <div className="flex flex-col gap-4 max-w-2xl">
        {activities.map((item, i) => (
          <div
            key={i}
            className="card-luxury !rounded-2xl p-7 group"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A96E]/20 to-[#A68B4B]/20 border border-[#C9A96E]/10 flex-shrink-0" />
              
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#FDFBF7]/70 leading-relaxed">
                  <span className="text-[#C9A96E] font-medium">{item.user}</span>{" "}
                  <span className="text-[#FDFBF7]/35">{item.action}</span>{" "}
                  <span className="font-[family-name:var(--font-playfair)] italic text-[#FDFBF7]/60">{item.book}</span>
                </p>
                <p className="text-[11px] text-[#FDFBF7]/20 mt-2 tracking-wider uppercase">{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
