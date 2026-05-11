import { NextResponse } from "next/server";
import { getObservations } from "@/lib/arso/observations";
export async function GET(){return NextResponse.json(await getObservations());}
