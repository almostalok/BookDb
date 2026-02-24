export function FeedCard({
  user,
  action,
  book,
  content,
}: {
  user: string;
  action: string;
  book: string;
  content: string;
}) {
  return (
    <div className="card-luxury !rounded-2xl p-6 group">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A96E]/20 to-[#A68B4B]/20 border border-[#C9A96E]/10 flex-shrink-0" />
        
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[#FDFBF7]/70 leading-relaxed">
            <span className="text-[#C9A96E] font-medium">{user}</span>{" "}
            <span className="text-[#FDFBF7]/30">{action}</span>{" "}
            <span className="font-[family-name:var(--font-playfair)] italic text-[#FDFBF7]/55">{book}</span>
          </p>
          <p className="mt-2 text-sm text-[#FDFBF7]/25 leading-relaxed font-light">{content}</p>
        </div>
      </div>
    </div>
  );
}
