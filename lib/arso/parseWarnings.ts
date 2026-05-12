import { ARSO_URLS } from "./constants";
import { fetchArso } from "./fetchArso";
export type Warning={title:string;summary:string;source:"ARSO / meteo.si"};
export async function getWarningsData():Promise<Warning[]>{
  try{const x=await fetchArso(ARSO_URLS.warningsAtom,600);const entries=[...x.matchAll(/<entry>[\s\S]*?<title[^>]*>([\s\S]*?)<\/title>[\s\S]*?<summary[^>]*>([\s\S]*?)<\/summary>[\s\S]*?<\/entry>/gi)];return entries.map(e=>({title:e[1].replace(/<[^>]+>/g,'').trim(),summary:e[2].replace(/<[^>]+>/g,'').trim(),source:"ARSO / meteo.si"}));}
  catch{return []}
}
