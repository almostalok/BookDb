export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]/50 mb-3">Member Since MMXXVI</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#FDFBF7] tracking-tight">
          Your Profile
        </h1>
      </div>

      {/* Profile Card */}
      <div className="max-w-lg">
        <div className="card-luxury !rounded-3xl p-10 relative overflow-hidden">
          {/* Ambient gold corner */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C9A96E]/[0.04] rounded-full blur-[50px]" />

          {/* Avatar */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#A68B4B] mb-5 shadow-[0_0_30px_rgba(201,169,110,0.2)]" />
            <div className="h-6 w-40 rounded bg-[#FDFBF7]/8 mb-2" />
            <div className="h-4 w-56 rounded bg-[#FDFBF7]/5" />
          </div>

          {/* Divider */}
          <div className="gold-line mb-10" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="font-[family-name:var(--font-playfair)] text-3xl text-[#C9A96E] mb-1">42</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#FDFBF7]/25">Books</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-playfair)] text-3xl text-[#E0CFA9] mb-1">128</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#FDFBF7]/25">Posts</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-playfair)] text-3xl text-[#A68B4B] mb-1">89</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#FDFBF7]/25">Circle</div>
            </div>
          </div>

          {/* Membership badge */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#C9A96E]/15 bg-[#C9A96E]/[0.04]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M3 20h18"/></svg>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A96E]/70">Founding Member</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
