import { ARSO_URLS } from "./constants";
import { fetchArso } from "./fetchArso";
import { STATIONS } from "./stations";

export type CurrentWeather = {stationName:string;stationSlug:string;observedAt:string|null;temperatureC:number|null;humidityPct:number|null;windDirection:string|null;windSpeedKmh:number|null;windGustKmh:number|null;pressureHpa:number|null;precipitationMm:number|null;solarRadiationWm2:number|null;snowCm:number|null;weatherDescription:string|null;source:"ARSO / meteo.si"};
const pick=(xml:string,t:string)=>{const m=xml.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)<\\/${t}>`,"i"));return m?.[1]?.replace(/<[^>]+>/g,"").trim()||null};
const num=(v:string|null)=>v?Number(v.replace(",",".")):null;
export async function getCurrentWeatherByStation(stationSlug:string):Promise<CurrentWeather>{
  const st=STATIONS.find(s=>s.slug===stationSlug) || STATIONS[0];
  try{const xml=await fetchArso(`${ARSO_URLS.stationXmlBase}${st.xmlCode}_latest.xml`,600);return {stationName:st.name,stationSlug:st.slug,observedAt:pick(xml,"valid")||pick(xml,"pubDate"),temperatureC:num(pick(xml,"t")),humidityPct:num(pick(xml,"rh")),windDirection:pick(xml,"ddff_val"),windSpeedKmh:num(pick(xml,"ff_val")),windGustKmh:num(pick(xml,"ffmax_val")),pressureHpa:num(pick(xml,"p")),precipitationMm:num(pick(xml,"rr_val")),solarRadiationWm2:num(pick(xml,"gSunRad")),snowCm:num(pick(xml,"snow")),weatherDescription:pick(xml,"nn_icon-wwsyn_icon"),source:"ARSO / meteo.si"};}
  catch{return {stationName:st.name,stationSlug:st.slug,observedAt:null,temperatureC:null,humidityPct:null,windDirection:null,windSpeedKmh:null,windGustKmh:null,pressureHpa:null,precipitationMm:null,solarRadiationWm2:null,snowCm:null,weatherDescription:null,source:"ARSO / meteo.si"};}
}
export async function getCurrentWeatherAll(){return Promise.all(STATIONS.map(s=>getCurrentWeatherByStation(s.slug)));}
