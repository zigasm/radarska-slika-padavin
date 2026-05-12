import { readLatestRadar, saveRadarGif } from "./storage";
import type { RadarData } from "./types";

const RADAR_GIF_URL = process.env.ARSO_RADAR_GIF_URL || "https://meteo.arso.gov.si/uploads/probase/www/observ/radar/si0-rm-anim.gif";

export async function fetchAndCacheRadar(): Promise<RadarData> {
  try {
    const res = await fetch(RADAR_GIF_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`Radar fetch failed: ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const name = `radar-${Date.now()}.gif`;
    const imageUrl = await saveRadarGif(buffer, name);
    return { imageUrl, updatedAt: new Date().toISOString() };
  } catch {
    const cached = await readLatestRadar();
    if (!cached) throw new Error("Radar unavailable and no cache");
    return { ...cached, stale: true };
  }
}

export async function getLatestRadar(): Promise<RadarData | null> {
  return readLatestRadar();
}

// placeholder for future SRD parser support
export function parseSrdRadarPlaceholder() {
  return null;
}
