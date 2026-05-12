import { NextResponse } from "next/server";
import { getRegionalForecast } from "@/lib/arso/forecasts";
export async function GET(_:Request,{params}:{params:Promise<{region:string}>}){const {region}=await params;return NextResponse.json(await getRegionalForecast(region));}
