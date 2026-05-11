import Link from "next/link";
const cities=["ljubljana","maribor","celje","koper","novo-mesto","murska-sobota","kranj","velenje","ptuj","nova-gorica","portoroz","kredarica"];
export function generateStaticParams(){return cities.map((city)=>({city}));}
export default async function Page({params}:{params:Promise<{city:string}>}){const {city}=await params;return <div className="space-y-3"><h1 className="text-3xl font-bold">Vreme {city} – trenutne razmere in vremenska napoved</h1><p>Trenutne razmere in napoved bodo prikazane tukaj.</p><p>Vir podatkov: ARSO / meteo.si</p><h2 className="text-xl font-semibold">Bližnja mesta</h2><div className="flex flex-wrap gap-2">{cities.filter((c)=>c!==city).slice(0,5).map(c=><Link key={c} href={`/vreme/${c}`}>{c}</Link>)}</div></div>}
