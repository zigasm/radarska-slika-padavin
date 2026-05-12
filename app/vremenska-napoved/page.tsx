import RadarCard from "@/components/RadarCard";
import { getForecast } from "@/lib/arso/parseForecast";
import { PLACES } from "@/lib/arso/places";
import Link from "next/link";
export default async function Page(){const fc=await getForecast();return <div className="space-y-4"><h1 className="text-3xl font-bold">Vremenska napoved za Slovenijo</h1><section className="rounded bg-white p-3 shadow"><p>{fc.forecastText}</p><p className="text-xs">Vir podatkov: <a href="https://meteo.arso.gov.si/" className="underline">ARSO / meteo.si</a></p></section><RadarCard/><h2 className="font-semibold">Priljubljeni kraji</h2><div className="flex flex-wrap gap-2">{PLACES.slice(0,12).map(p=><Link key={p} href={`/vreme/${p}`}>{p}</Link>)}</div></div>}
