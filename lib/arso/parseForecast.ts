import { ARSO_URLS } from "./constants";
import { fetchArso } from "./fetchArso";

export type ForecastData={title:string;issuedAt:string|null;validFrom:string|null;validTo:string|null;forecastText:string;source:"ARSO / meteo.si"};
const pick=(xml:string,t:string)=>{const m=xml.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)<\\/${t}>`,"i"));return m?.[1]?.replace(/<[^>]+>/g,"").trim()||null};
export async function getForecast():Promise<ForecastData>{
try{const xml=await fetchArso(ARSO_URLS.forecastSloveniaXml,1800);return {title:pick(xml,"title")||"Vremenska napoved",issuedAt:pick(xml,"issuetime"),validFrom:pick(xml,"validfrom"),validTo:pick(xml,"validto"),forecastText:pick(xml,"body")||pick(xml,"description")||"Ni podatka",source:"ARSO / meteo.si"};}
catch{return {title:"Vremenska napoved",issuedAt:null,validFrom:null,validTo:null,forecastText:"Napoved trenutno ni na voljo.",source:"ARSO / meteo.si"};}
}
