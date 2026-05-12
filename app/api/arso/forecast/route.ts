import { NextResponse } from "next/server";
import { getForecast } from "@/lib/arso/parseForecast";
export async function GET(){return NextResponse.json(await getForecast());}
