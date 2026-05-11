import Link from "next/link";
import type { Metadata } from "next";
import RadarCard from "@/components/RadarCard";
import AdSlot from "@/components/AdSlot";
import { getNationalForecast } from "@/lib/arso/forecasts";
import { getWarnings } from "@/lib/arso/warnings";

export const metadata: Metadata = { title: "Vreme Slovenija – radarska slika padavin in vremenska napoved", description: "Vreme Slovenija, radar padavin, opozorila in napoved.", alternates: { canonical: "/" } };

export default async function Home() { const forecast=await getNationalForecast(); const warnings=await getWarnings(); return <div className="space-y-6"><h1 className="text-3xl font-bold">Vreme Slovenija – radarska slika padavin in vremenska napoved</h1><RadarCard /><AdSlot id="homepage-mid" /><section><h2 className="text-xl font-semibold">Napoved</h2><p>{forecast.blocks[0]?.summary||"Ni podatkov."}</p><p className="text-xs">Vir podatkov: ARSO / meteo.si • {forecast.fetchedAt}</p></section><section><h2 className="text-xl font-semibold">Opozorila</h2><p>{warnings.items[0]?.event||"Ni aktivnih opozoril."}</p><p className="text-xs">Vir podatkov: ARSO / meteo.si • {warnings.fetchedAt}</p></section><section><h2 className="text-xl font-semibold">Hitre povezave</h2><div className="flex gap-3"><Link href="/radarska-slika-padavin">Radar</Link><Link href="/vremenska-napoved">Napoved</Link></div></section></div>; }
