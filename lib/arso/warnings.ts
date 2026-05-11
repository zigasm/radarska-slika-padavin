import { WarningItem, WarningsFeed } from "./types";
import { textBetween } from "./xml";

const WARNINGS_URL = process.env.ARSO_WARNINGS_ATOM_URL || "https://meteo.arso.gov.si/uploads/probase/www/warning/text/sl/atom.xml";

export function parseWarningsAtom(xml: string): WarningItem[] {
  const titles = textBetween(xml, "title");
  const summaries = textBetween(xml, "summary");
  return titles.slice(1).map((t, i) => ({ region: "Slovenija", severity: /rde|oran/i.test(t) ? "visoka" : "zmerna", event: t, description: summaries[i] || "" }));
}

export async function getWarnings(): Promise<WarningsFeed> {
  try {
    const res = await fetch(WARNINGS_URL, { cache: "no-store" });
    const xml = await res.text();
    return { source: "ARSO / meteo.si", fetchedAt: new Date().toISOString(), items: parseWarningsAtom(xml) };
  } catch {
    return { source: "ARSO / meteo.si", fetchedAt: new Date().toISOString(), fallback: true, items: [] };
  }
}
