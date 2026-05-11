import { NextResponse } from "next/server";
import { getCurrentWeatherByStation } from "@/lib/arso/parseCurrentWeather";
export async function GET(_:Request,{params}:{params:Promise<{station:string}>}){const {station}=await params;return NextResponse.json(await getCurrentWeatherByStation(station));}
