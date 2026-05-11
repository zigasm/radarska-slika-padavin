import { NextResponse } from "next/server";
import { placeToStation } from "@/lib/arso/placeToStation";
import { getCurrentWeatherByStation } from "@/lib/arso/parseCurrentWeather";
import { getForecast } from "@/lib/arso/parseForecast";
export async function GET(_:Request,{params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=placeToStation[slug];if(!p)return NextResponse.json({error:"Kraj ni podprt."},{status:404});return NextResponse.json({place:p,current:await getCurrentWeatherByStation(p.nearestStationSlug),forecast:await getForecast()});}
