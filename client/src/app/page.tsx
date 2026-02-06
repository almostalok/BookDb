"use client";

import { useEffect, useState } from "react";
import { fetchRecord } from "@/lib/api";

interface RecordData {
  message: string;
  author: string;
  book: string;
}

export default function Home() {
  // State to store backend data
  const [data, setData] = useState<RecordData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Call backend when page loads
  useEffect(() => {
    fetchRecord()
      .then((response) => {
        setData(response);
      })
      .catch(() => {
        setError("Backend not reachable");
      });
  }, []);

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">{data.message}</h1>
        <div className="text-lg">
          <p><strong>Author:</strong> {data.author}</p>
          <p><strong>Book:</strong> {data.book}</p>
        </div>
        <pre className="bg-gray-100 p-4 rounded text-left text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </main>
  );
}
