import Link from "next/link";
import type { Metadata } from "next";
import RadarCard from "@/components/RadarCard";
import AdSlot from "@/components/AdSlot";
import PlaceSearch from "@/components/PlaceSearch";
import { getForecast } from "@/lib/arso/parseForecast";
import { getWarningsData } from "@/lib/arso/parseWarnings";
import { PLACES } from "@/lib/arso/places";
export const metadata: Metadata = { title: "Vreme Slovenija – radarska slika padavin in vremenska napoved", description: "Vreme Slovenija, radar padavin, opozorila in napoved.", alternates: { canonical: "/" } };
export default async function Home(){const fc=await getForecast();const warnings=await getWarningsData();return <div className="space-y-6"><h1 className="text-3xl font-bold">Vreme Slovenija – radarska slika padavin in vremenska napoved</h1><RadarCard/><PlaceSearch places={PLACES}/><section className="rounded bg-white p-3 shadow"><h2 className="font-semibold">Napoved za Slovenijo</h2><p>{fc.forecastText}</p><p className="text-xs">Vir podatkov: <a href="https://meteo.arso.gov.si/" className="underline">ARSO / meteo.si</a></p></section><section className="rounded bg-white p-3 shadow"><h2 className="font-semibold">Vremenska opozorila</h2><p>{warnings[0]?.title||"Opozorila trenutno niso na voljo."}</p><p className="text-xs">Vir podatkov: <a href="https://meteo.arso.gov.si/" className="underline">ARSO / meteo.si</a></p></section><AdSlot id="homepage-mid"/><div className="flex gap-3"><Link href="/radarska-slika-padavin">Radar</Link><Link href="/vremenska-napoved">Napoved</Link></div></div>}
