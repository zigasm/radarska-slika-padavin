export type SourceMeta = { source: string; fetchedAt: string; updatedAt?: string; fallback?: boolean };

export type ForecastBlock = { title: string; summary: string; period?: string };
export type NationalForecast = SourceMeta & { blocks: ForecastBlock[] };
export type RegionalForecast = SourceMeta & { region: string; blocks: ForecastBlock[] };

export type Observation = SourceMeta & { city: string; tempC?: number; humidity?: number; wind?: string; condition?: string };

export type WarningItem = { region: string; severity: string; event: string; description: string; onset?: string; expires?: string };
export type WarningsFeed = SourceMeta & { items: WarningItem[] };

export type RadarData = { imageUrl: string; updatedAt: string; stale?: boolean };
