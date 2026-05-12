import { NextResponse } from "next/server";
import { fetchAndCacheRadar } from "@/lib/arso/radar";
export async function GET(){try{return NextResponse.json(await fetchAndCacheRadar());}catch(e){return NextResponse.json({error:(e as Error).message},{status:500});}}
