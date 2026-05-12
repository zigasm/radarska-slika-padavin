# Vreme Slovenija (Next.js)

## ARSO endpointi v uporabi
- Radar zadnja slika: `https://meteo.arso.gov.si/uploads/probase/www/observ/radar/si0-rm.gif`
- Radar animacija: `https://meteo.arso.gov.si/uploads/probase/www/observ/radar/si0-rm-anim.gif`
- Nacionalna napoved (HTML): `ARSO_FORECAST_NATIONAL_URL` (privzeto `https://meteo.arso.gov.si/met/sl/weather/bulletin/`)
- Regijske napovedi (HTML): `ARSO_FORECAST_REGIONAL_URL` (privzeto `https://meteo.arso.gov.si/met/sl/weather/bulletin/region/`)
- Opazovanja (XML/RSS): `ARSO_OBSERVATIONS_URL` (privzeto `https://meteo.arso.gov.si/uploads/probase/www/observ/surface/text/sl/observation_latest.xml`)
- Opozorila (ATOM/CAP): `ARSO_WARNINGS_ATOM_URL` (privzeto `https://meteo.arso.gov.si/uploads/probase/www/warning/text/sl/atom.xml`)

## Okoljske spremenljivke
- `NEXT_PUBLIC_SITE_URL`
- `ARSO_FORECAST_NATIONAL_URL`
- `ARSO_FORECAST_REGIONAL_URL`
- `ARSO_OBSERVATIONS_URL`
- `ARSO_WARNINGS_ATOM_URL`

## Vercel Cron
- `/api/cron/fetch-radar` vsakih 5 min
- `/api/cron/fetch-observations` vsakih 10–15 min
- `/api/cron/fetch-warnings` vsakih 10 min
- `/api/cron/fetch-forecasts` vsakih 60 min

## Testi
```bash
npm run test
```
