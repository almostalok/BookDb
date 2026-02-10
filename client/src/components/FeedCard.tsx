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
    <div className="rounded-xl border p-4">
      <p className="text-sm font-medium">
        {user} <span className="text-gray-500">{action}</span>{" "}
        <span className="italic">{book}</span>
      </p>
      <p className="mt-2 text-sm text-gray-700">{content}</p>
    </div>
  );
}