export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-neutral-950 via-violet-950/20 to-neutral-950 p-10">
      <h1 className="text-3xl font-light text-gradient-cool tracking-wide">Profile</h1>
      <p className="text-neutral-400 mt-2">Your reading identity.</p>
      
      {/* Profile card placeholder */}
      <div className="mt-8 max-w-md">
        <div className="p-8 rounded-2xl bg-linear-to-br from-violet-900/30 to-indigo-900/30 border border-violet-500/20">
          <div className="w-24 h-24 rounded-full bg-linear-to-br from-amber-500 to-rose-500 mx-auto mb-4" />
          <div className="h-6 w-1/2 mx-auto rounded bg-neutral-700/50 mb-2" />
          <div className="h-4 w-3/4 mx-auto rounded bg-neutral-800/50" />
          
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <div className="text-2xl font-light text-amber-400">42</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide">Books</div>
            </div>
            <div>
              <div className="text-2xl font-light text-rose-400">128</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide">Posts</div>
            </div>
            <div>
              <div className="text-2xl font-light text-violet-400">89</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide">Friends</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
