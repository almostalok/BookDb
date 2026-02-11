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
    <div className="rounded-xl border border-rose-500/20 bg-linear-to-r from-rose-900/10 to-violet-900/10 p-4 hover:border-rose-400/40 transition-all">
      <p className="text-sm font-medium text-neutral-200">
        <span className="text-amber-400">{user}</span>{" "}
        <span className="text-neutral-500">{action}</span>{" "}
        <span className="italic text-violet-300">{book}</span>
      </p>
      <p className="mt-2 text-sm text-neutral-400">{content}</p>
    </div>
  );
}
