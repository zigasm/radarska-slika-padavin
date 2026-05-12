import { NextResponse } from "next/server";
import { fetchAndCacheRadar, getLatestRadar } from "@/lib/arso/radar";

export async function GET() {
  try {
    const data = (await getLatestRadar()) || (await fetchAndCacheRadar());
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 503 });
  }
}
