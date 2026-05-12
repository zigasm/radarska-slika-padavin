"use client";

import { useMemo, useState } from "react";

const RADAR_IMAGE_URL = "https://meteo.arso.gov.si/uploads/probase/www/observ/radar/si0-rm.gif";
const RADAR_ANIM_URL = "https://meteo.arso.gov.si/uploads/probase/www/observ/radar/si0-rm-anim.gif";

export default function RadarCard() {
  const [mode, setMode] = useState<"anim" | "latest">("anim");
  const [failed, setFailed] = useState(false);
  const cacheBustedUrl = useMemo(() => {
    const base = mode === "anim" ? RADAR_ANIM_URL : RADAR_IMAGE_URL;
    return `${base}?t=${Date.now()}`;
  }, [mode]);

  return (
    <section className="rounded-xl bg-white p-4 shadow">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Radarska slika padavin</h2>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setMode("latest");
              setFailed(false);
            }}
            className={`rounded px-3 py-1 text-sm ${mode === "latest" ? "bg-sky-700 text-white" : "bg-slate-200 text-slate-900"}`}
          >
            Zadnja slika
          </button>
          <button
            onClick={() => {
              setMode("anim");
              setFailed(false);
            }}
            className={`rounded px-3 py-1 text-sm ${mode === "anim" ? "bg-sky-700 text-white" : "bg-slate-200 text-slate-900"}`}
          >
            Animacija
          </button>
        </div>
      </div>

      {failed ? (
        <p>Radar trenutno ni na voljo.</p>
      ) : (
        <img
          src={cacheBustedUrl}
          alt={mode === "anim" ? "Radarska animacija padavin za Slovenijo - ARSO" : "Radarska slika padavin za Slovenijo - ARSO"}
          className="h-auto w-full rounded"
          onError={() => setFailed(true)}
        />
      )}

      <p className="mt-2 text-sm">Radarska slika se običajno osvežuje približno vsakih 5 minut.</p>
      <p className="text-xs text-slate-600">Vir podatkov: ARSO / meteo.si</p>
    </section>
  );
}
