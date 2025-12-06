"use client";
import { useState } from "react";

export default function Home() {
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState<any>(null);

  async function submitSentence() {
    const res = await fetch("http://localhost:8000/api/validate-sentence", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        word_id: 1,
        sentence: sentence
      })
    });

    const data = await res.json();
    setResult(data);
  }

  return (
    <div>
      <textarea
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        placeholder="Type sentence"
      />

      <button onClick={submitSentence}>Submit</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
