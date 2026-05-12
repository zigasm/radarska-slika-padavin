"use client";

import { useEffect, useState } from "react";

type RadarApi = { imageUrl: string; updatedAt: string; stale?: boolean; error?: string };

export default function RadarAnimation() {
  const [data, setData] = useState<RadarApi | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch("/api/radar/latest", { cache: "no-store" })
      .then((r) => r.json())
      .then((d: RadarApi) => {
        if (alive) setData(d);
      })
      .catch(() => {
        if (alive) setData({ imageUrl: "", updatedAt: "", error: "Napaka pri nalaganju animacije." });
      });
    return () => {
      alive = false;
    };
  }, []);

  if (!data || data.error) return <p>Animacija radarja trenutno ni na voljo.</p>;

  return (
    <section className="rounded-xl bg-white p-4 shadow">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Animacija padavin</h2>
        <button onClick={() => setPlaying((p) => !p)} className="rounded bg-sky-700 px-3 py-1 text-sm text-white">
          {playing ? "Pavza" : "Predvajaj"}
        </button>
      </div>
      <div className="relative overflow-hidden rounded">
        {playing ? (
          <img src={data.imageUrl} alt="Animirana radarska slika padavin" className="h-auto w-full" />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-slate-200 text-slate-700">Animacija je ustavljena.</div>
        )}
      </div>
      <p className="mt-2 text-sm">Zadnja posodobitev: {data.updatedAt || "ni podatka"}</p>
      {data.stale ? <p className="text-xs text-amber-700">Podatki lahko zamujajo.</p> : null}
      <p className="text-xs text-slate-600">Vir podatkov: ARSO / meteo.si</p>
    </section>
  );
}
