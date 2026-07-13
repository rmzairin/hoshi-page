"use client";

import { useState } from "react";

type Entry = {
  name: string;
  message: string;
};

export default function GuestbookClient() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setEntries([{ name, message }, ...entries]);
    setName("");
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="お名前"
        />
        <br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="メッセージをどうぞ♪"
        />
        <br />
        <button type="submit">書き込む ✎</button>
      </form>

      {entries.map((entry, i) => (
        <div key={i}>
          <strong>{entry.name}</strong>: {entry.message}
        </div>
      ))}
    </div>
  );
}