import { NextResponse } from "next/server";
import { getCurrentWeatherAll } from "@/lib/arso/parseCurrentWeather";
export async function GET(){return NextResponse.json(await getCurrentWeatherAll());}
