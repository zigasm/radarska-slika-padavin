import { NextResponse } from "next/server";
import { getNationalForecast } from "@/lib/arso/forecasts";
export async function GET(){return NextResponse.json(await getNationalForecast());}
