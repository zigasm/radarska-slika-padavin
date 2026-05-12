import { Observation } from "./types";
import { textBetween } from "./xml";

const OBS_URL = process.env.ARSO_OBSERVATIONS_URL || "https://meteo.arso.gov.si/uploads/probase/www/observ/surface/text/sl/observation_latest.xml";

export function parseObservationsXml(xml: string): Observation[] {
  const cities = textBetween(xml, "title");
  const desc = textBetween(xml, "description");
  return cities.map((city, i) => ({ city, condition: desc[i] || "", source: "ARSO / meteo.si", fetchedAt: new Date().toISOString() })).slice(0, 50);
}

export async function getObservations(): Promise<Observation[]> {
  try {
    const res = await fetch(OBS_URL, { cache: "no-store" });
    return parseObservationsXml(await res.text());
  } catch {
    return [{ city: "Ljubljana", condition: "Podatki trenutno niso dostopni.", source: "ARSO / meteo.si", fetchedAt: new Date().toISOString(), fallback: true }];
  }
}
