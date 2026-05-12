"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function PlaceSearch({ places }: { places: string[] }) {
  const [q, setQ] = useState("");
  const router = useRouter();
  const list = useMemo(() => places.filter((p) => p.includes(q.toLowerCase())).slice(0, 8), [q, places]);
  return <div className="rounded bg-white p-3 shadow"><input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Poišči kraj" className="w-full rounded border p-2"/>{q?<div className="mt-2 grid gap-1">{list.map(p=><button key={p} onClick={()=>router.push(`/vreme/${p}`)} className="text-left text-sky-700">{p}</button>)}</div>:null}</div>;
}
