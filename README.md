# Vreme Slovenija (Next.js)

Mobilno usmerjena vremenska spletna stran z uporabo javnih podatkov ARSO / meteo.si.

## Viri podatkov
- ARSO/meteo.si radar GIF (v1)
- Pripravljeni moduli za opozorila, napovedi in opazovanja (placeholder)
- Vir podatkov: ARSO / meteo.si

## Okoljske spremenljivke
- `NEXT_PUBLIC_SITE_URL` - javni URL strani
- `ARSO_RADAR_GIF_URL` - URL ARSO radar GIF (posodobite po potrebi)

## Shramba
Aplikacija uporablja abstrakcijo v `lib/arso/storage.ts`.
- Privzeto: lokalni filesystem (`public/cache/radar`)
- Priporočeno za produkcijo: zamenjava z Vercel Blob implementacijo

## Vercel Cron (predlog)
- `/api/cron/fetch-radar` vsakih 5 minut
- `/api/cron/fetch-observations` vsakih 10–15 minut
- `/api/cron/fetch-warnings` vsakih 10 minut
- `/api/cron/fetch-forecasts` vsakih 60 minut

## Oglasi
Uporabite komponento `AdSlot` kot placeholder.
Kasneje zamenjajte vsebino komponente z AdSense/oglasno kodo.

## Zagon
```bash
npm install
npm run dev
npm run build
```
