import { NextResponse } from "next/server";
import { getWarnings } from "@/lib/arso/warnings";
export async function GET(){return NextResponse.json(await getWarnings());}
