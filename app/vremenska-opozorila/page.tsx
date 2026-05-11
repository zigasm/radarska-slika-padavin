import { getWarnings } from "@/lib/arso/warnings";

export default async function Page(){const w=await getWarnings();return <div className="space-y-4"><h1 className="text-3xl font-bold">Vremenska opozorila za Slovenijo</h1>{w.items.length? w.items.map((x,i)=><article key={i} className="rounded bg-white p-3 shadow"><h2 className="font-semibold">{x.event}</h2><p>{x.description}</p><p className="text-sm">Stopnja: {x.severity}</p></article>):<p>Trenutno ni aktivnih opozoril ali vir ni dosegljiv.</p>}<p className="text-xs">Vir podatkov: ARSO / meteo.si • Posodobljeno: {w.fetchedAt}</p></div>}
