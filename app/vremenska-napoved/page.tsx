import { getNationalForecast } from "@/lib/arso/forecasts";
import AdSlot from "@/components/AdSlot";

export default async function Page(){
  const data=await getNationalForecast();
  return <div className="space-y-4"><h1 className="text-3xl font-bold">Vremenska napoved za Slovenijo</h1>{data.blocks.map((b,i)=><section key={i} className="rounded bg-white p-3 shadow"><h2 className="font-semibold">{b.title}</h2><p>{b.summary}</p></section>)}<AdSlot id="forecast-mid"/><p className="text-xs">Vir podatkov: ARSO / meteo.si • Posodobljeno: {data.fetchedAt}</p></div>
}
