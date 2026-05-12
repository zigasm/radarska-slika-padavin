import { NextResponse } from "next/server";
import { getWarningsData } from "@/lib/arso/parseWarnings";
export async function GET(){return NextResponse.json(await getWarningsData());}
