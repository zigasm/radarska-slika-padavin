import { NationalForecast, RegionalForecast } from "./types";
import { strip, textBetween } from "./xml";

const NATIONAL_URL = process.env.ARSO_FORECAST_NATIONAL_URL || "https://meteo.arso.gov.si/met/sl/weather/bulletin/";
const REGIONAL_URL = process.env.ARSO_FORECAST_REGIONAL_URL || "https://meteo.arso.gov.si/met/sl/weather/bulletin/region/";

export function parseForecastHtml(html: string) {
  const titles = textBetween(html, "h2");
  const ps = textBetween(html, "p");
  return titles.slice(0, 5).map((t, i) => ({ title: t, summary: ps[i] || "" })).filter((b) => b.title || b.summary);
}

export async function getNationalForecast(): Promise<NationalForecast> {
  try {
    const res = await fetch(NATIONAL_URL, { cache: "no-store" });
    const html = await res.text();
    return { source: "ARSO / meteo.si", fetchedAt: new Date().toISOString(), blocks: parseForecastHtml(html) };
  } catch {
    return { source: "ARSO / meteo.si", fetchedAt: new Date().toISOString(), fallback: true, blocks: [{ title: "Napoved začasno ni na voljo", summary: "Podatki trenutno niso dostopni." }] };
  }
}

export async function getRegionalForecast(region: string): Promise<RegionalForecast> {
  try {
    const res = await fetch(`${REGIONAL_URL}${encodeURIComponent(region)}`, { cache: "no-store" });
    const html = await res.text();
    return { source: "ARSO / meteo.si", fetchedAt: new Date().toISOString(), region, blocks: parseForecastHtml(html) };
  } catch {
    return { source: "ARSO / meteo.si", fetchedAt: new Date().toISOString(), fallback: true, region, blocks: [{ title: `Regijska napoved (${region}) ni na voljo`, summary: "Poskusite kasneje." }] };
  }
}
