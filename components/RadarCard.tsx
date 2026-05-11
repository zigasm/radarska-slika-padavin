import { getLatestRadar } from "@/lib/arso/radar";

export default async function RadarCard() {
  const radar = await getLatestRadar();
  return (
    <section className="rounded-xl bg-white p-4 shadow">
      <h2 className="mb-2 text-xl font-semibold">Radarska slika padavin</h2>
      {radar ? <img src={radar.imageUrl} alt="Radar padavin Slovenija" className="h-auto w-full rounded" /> : <p>Radar trenutno ni na voljo.</p>}
      <p className="mt-2 text-sm">Zadnja posodobitev: {radar?.updatedAt ?? "ni podatka"}</p>
      <p className="text-xs text-slate-600">Vir podatkov: ARSO / meteo.si</p>
    </section>
  );
}
