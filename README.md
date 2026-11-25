# Cautio Bharat Fleet Safety Intel & Accident Hotzone Radar

An interactive geospatial telemetry and accident analysis dashboard developed for commercial vehicle fleet monitoring. Aggregates incident reports, dashcam telemetry, and highway logistics accident hotzones across India.

## Features

- Interactive Geospatial Mapping: Renders high-density incident coordinates with severity clustering across critical Indian logistics corridors (Bangalore Belt, Mumbai-Pune Expressway, Delhi-NCR, Hyderabad Hub).
- Multi-Source Synchronization: Serverless telemetry data proxy synchronizing with backend field reports and Google Sheets tracking systems.
- Filtering Matrix: Real-time filtering by severity tier, fleet partner, resolution status, and date intervals.
- Visual Analytics: Charts detailing root causes, vehicle types, and high-frequency collision corridors.

## Local Development

Serve the static frontend with any local HTTP server. Live synchronization requires the Vercel serverless function in `api/sync.js` and a `SHEET_ID` environment variable configured in Vercel. `SHEET_GID` is optional and defaults to `0`.

Do not put production sheet identifiers in source files or commit them. For local API development, use `vercel dev` after configuring the environment variables locally.

```bash
npx serve .
# For the API route and live sync, use the Vercel CLI:
vercel dev
```
