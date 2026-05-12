import { ARSO_URLS } from "@/lib/arso/constants";

const regions = [
  { key: "SLOVENIA_MIDDLE", name: "Slovenija - osrednja" },
  { key: "SLOVENIA_NORTH-EAST", name: "Slovenija - severovzhod" },
  { key: "SLOVENIA_NORTH-WEST", name: "Slovenija - severozahod" },
  { key: "SLOVENIA_SOUTH-EAST", name: "Slovenija - jugovzhod" },
  { key: "SLOVENIA_SOUTH-WEST", name: "Slovenija - jugozahod" },
];

async function checkBundleAvailable(url: string) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch(url, { signal: controller.signal, next: { revalidate: 600 } });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(t);
  }
}

function RegionCard({ name, href }: { name: string; href: string }) {
  return (
    <article className="rounded bg-white p-4 shadow">
      <h3 className="font-semibold">{name}</h3>
      <a href={href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block rounded bg-sky-700 px-3 py-1 text-sm text-white">
        Preveri opozorila na ARSO
      </a>
    </article>
  );
}

export default async function Page() {
  const todayOk = await checkBundleAvailable("https://meteo.arso.gov.si/uploads/probase/www/warning/text/sl/bundle/warning_all_si-region_d1.html");
  const tomorrowOk = await checkBundleAvailable("https://meteo.arso.gov.si/uploads/probase/www/warning/text/sl/bundle/warning_all_si-region_d2.html");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Vremenska opozorila</h1>
      <p>Preverite aktualna vremenska opozorila za Slovenijo po regijah.</p>

      {!todayOk && !tomorrowOk ? (
        <div className="rounded border border-amber-300 bg-amber-50 p-3 text-amber-900">
          Vremenska opozorila trenutno niso na voljo. Preverite uradno stran ARSO / meteo.si.
        </div>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Danes</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {regions.map((r) => (
            <RegionCard key={r.key} name={r.name} href={`https://meteo.arso.gov.si/uploads/probase/www/warning/text/sl/bundle/warning_all_${r.key}_d1.html`} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Jutri</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {regions.map((r) => (
            <RegionCard key={`${r.key}-d2`} name={r.name} href={`https://meteo.arso.gov.si/uploads/probase/www/warning/text/sl/bundle/warning_all_${r.key}_d2.html`} />
          ))}
        </div>
      </section>

      <p className="text-sm">Za uradna in najnovejša opozorila vedno preverite ARSO / meteo.si.</p>
      <p className="text-xs">Vir podatkov: <a href="https://meteo.arso.gov.si/" className="underline">ARSO / meteo.si</a></p>
    </div>
  );
}
