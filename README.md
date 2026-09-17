# CAUTIO | AI Fleet Safety & Accident Hotzone Telemetry Radar

An industry-level, interactive geospatial safety intelligence system, accident hotzone radar, and video telematics command center built specifically for **[Cautio](https://www.cautio.com/)** — India's leading commercial vehicle AI dashcam ecosystem.

The platform connects live to Cautio's internal fleet incident Google Sheet database and automatically synchronizes immediately on startup, page refresh, or on-demand whenever any new incident, camera fault, or collision report is logged by field technicians or command center operators.

---

## Cautio Brand Theme & Color Palette

The entire interface has been crafted with Cautio's official brand palette:

| Hex Code | Color Name | Role in Platform |
| :--- | :--- | :--- |
| **`#2A7C13`** | **Cautio Forest Green** | Primary brand green, active navigation pill backgrounds, primary CTAs, high-priority scorecards |
| **`#76C457`** | **Cautio Vivid Leaf** | High-visibility telemetry accents, live pulse indicator, radar glows, resolved ticket badges |
| **`#FFF8CF`** | **Cautio Lemon Cream** | High-contrast typography, KPI numerical statistics, modal section headers, button text |
| **`#FBE6C2`** | **Cautio Sand Apricot** | Card borders, secondary telemetry chips, corridor badges, warning accents |

---

## Apple Liquid Glass UI & Map-First Architecture

Designed in accordance with modern **visionOS / iOS 18 liquid glassmorphism** aesthetics:

- **100% Edge-to-Edge Pure Map Centerpiece**: Upon landing, only the full India heatmap canvas is visible with zero visual clutter.
- **Top Command Bar Dynamic Island**: Prioritized, minimalist, glassmorphic capsule floating cleanly over the map.
  - Quick access to Today's Entries with real-time counter badge.
  - Strategic Freight Corridor switcher dropdown directly integrated on the top bar.
  - Minimalist live sync status indicator icon (Wi-Fi connected / animated spin during sync).
- **Closed-by-Default Intelligence Drawers**: Filters, Analytics, and Incident Logbooks are cleanly collapsed into floating glass dynamic island pills.
- **Translucent Specular Glass Surfaces**: Multi-layer backdrop blur (`28px`), frosted green tinting (`rgba(12, 28, 12, 0.68)`), specular cream rim lighting (`#FFF8CF`), and subtle green refraction shadows (`#76C457`).
- **Spring-Loaded Slide Drawers**:
  - **Telemetry Filters Drawer**: Slides smoothly in from the left over the map.
  - **Insights & Risk Scorecards Drawer**: Slides smoothly in from the right.
  - **Incident Logbook Drawer**: Slides smoothly up from the bottom.
  - **Dismiss Anytime**: One tap on the frosted map backdrop or pressing `Escape` seamlessly returns to the clean map view.

---

### 1. Industry-Grade Geospatial Heatmap & Telemetry Engine
- **Dynamic Heat Density Layer**: Configurable Gaussian blur, kernel radius, opacity, and intensity weighting via live UI sliders.
- **Risk-Weighted Heatmap Dynamics**: Severe accidents, vehicular collisions, and crashes receive **5x weighting**, highlighting true danger zones and high-risk transport corridors over routine inquiries.
- **Top-Bar Strategic Logistics Corridors**:
  - Smooth camera kinematics and instant filtering for 9 major Indian freight corridors:
    - **Bangalore Logistics Belt** (Electronic City, Whitefield, Peenya, Hosur, Kolar)
    - **Mumbai-Pune Expressway Belt** (JNPT Port, Thane, Navi Mumbai, Bhiwandi, Pune Auto Belt)
    - **Delhi-NCR Logistics Gateway** (Gurugram, Noida, Faridabad, Binola NH-48 Corridor)
    - **Chennai-Krishnagiri Auto Belt** (Sriperumbudur, Oragadam, Krishnagiri Industrial Area)
    - **Hyderabad Cyber & Transport Corridor** (Outer Ring Road, Shamshabad, Medchal)
    - **Kolkata & Eastern Freight Hub** (Howrah, Dankuni, Kolkata Port, NH-19)
    - **Punjab-Haryana GT Road Corridor** (Amritsar, Ludhiana, Chandigarh, Ambala, Bathinda)
    - **Gujarat Industrial Expressway** (Ahmedabad, Vadodara, Gandhinagar, Surat, Rajkot)
    - **Central India Logistics Grid** (MIHAN Nagpur, Raipur, Bhilai, Bilaspur)
- **Interactive Multi-Level Marker Clustering**:
  - Clustered vehicle badges dynamically expand upon zoom into individual vehicle incident pins.
  - Clean, color-coded status pins without unprofessional emojis.
- **Critical Accident Spotlight Mode**: Instantly filter and spotlight direct collisions and high-impact accidents across India.
- **Clean Basemap Switching**: Esri High-Definition Streets and Esri High-Resolution Satellite.
- **Strict Indian Land-Locking & Zero-Offshore Safety Engine**: Real-time coastal boundary clamping (`clampToIndianLand`) ensures 100% of fleet vehicles and heatmap density strictly reside on dry Indian land, highways, and industrial belts, preventing jitter or offshore coordinates from ever placing incidents into the Bay of Bengal, Arabian Sea, Gulf of Khambhat, or Indian Ocean.
- **Minimal Cautio Micro-Bubble**: Discrete, compact brand attribution in the bottom-right corner.

### 2. Live Google Sheets Auto-Updating Engine
- **Instant Auto-Sync on Startup & Refresh**: Connects automatically to the live Google Sheet on initial visit and re-syncs seamlessly every 5 minutes.
- **Configurable Cadence**: Auto-sync interval set to 5 minutes by default (`300,000 ms`), with options for 1 min, 5 min, 10 min, 15 min, or manual sync in the Filter drawer.
- **Direct Live Connection**: Uses Google Visualization API (`gviz/tq`) with JSONP fallback to query the Google Sheet directly from the client's browser.
- **Zero Rebuild Needed**: When a field operator or command center logs a new accident/issue into the Google Sheet, the live web page incorporates new rows seamlessly.
- **Zero Initial Latency**: Ships with a pre-compiled snapshot of historical records (`data-snapshot.js`) so the dashboard and map render instantly (< 100ms), followed immediately by seamless live reconciliation.
- **Live Connection Status**: Minimalist Wi-Fi connection indicator with animated sync feedback.

### 3. Executive KPI Telemetry & Scorecards
- **Total Incidents Logged**: Dynamic counter tracking events with filter-responsive counts.
- **Accidents & Collisions**: High-priority alert tracker isolating vehicular crashes, pedestrian impacts, and FIR/police incidents.
- **Active Hotzones Monitored**: 9 strategic geographic logistics corridors under active surveillance.
- **Vehicles Impacted**: Unique commercial registration numbers logged.
- **Fleet Resolution Rate**: SLA efficiency ratio.
- **Commercial Fleets Monitored**: Over 430 commercial operator accounts (Zingbus, Shoffr, Redbus, Cityflo, Trev, Euro, Infants, 3EV, Boom Cabs, Lotus, Juspay, etc.).

### 4. Risk Analytics & Correlation Charts (Chart.js)
- **Top Hotzones by Incident Load**: Horizontal bar chart comparing regional hotzone volume with critical accident ratio overlay.
- **Incident Classification & Sub-Requests**: Doughnut chart breaking down customer video requests, device offline states, SD card corruption, AI video issues, camera damage, and antenna faults.
- **Monthly Incident Velocity Trajectory**: Area line chart showing temporal trends.
- **Top Commercial Fleets by Incident Volume**: Risk ranking of commercial fleet operators.
- **Resolution Efficiency & SLA Breakdown**: Real-time resolution ratios and corrective action distributions.

### 5. Cautio Forensic Incident Inspector Modal (Always On Top)
- **Guaranteed Stacking Order**: Fixed modal with `z-index: 999999` and an isolated backdrop so Leaflet map controls and popups never bleed through.
- **Structured Forensic Sections**:
  1. **Fleet & Device Profile**: Vehicle plate, Client operator, Location corridor, Assigned technician, Raised timestamp.
  2. **Issue Classification & Summary**: ADAS/DMS classifications and raw incident logs.
  3. **Forensic Field Remarks**: On-ground investigation notes, video telemetry analysis, and driver behavior records.
  4. **Corrective Action Taken**: Physical harness repairs, OTA firmware deployments, camera replacements.
- **Direct Row Link**: Direct deep-link to the exact row in Google Sheets.

---

## Repository Structure

```
fleet-incident-heatmap/
├── index.html           # Main Cautio command center dashboard & UI (No Sheet links)
├── app.js               # Dual-mode live sync engine (Serverless API + Encrypted dynamic stream)
├── data-snapshot.js     # Pre-baked dataset snapshot for instant offline load
├── india-boundary.js    # Official India geographic boundary overlay
├── cautio-logo.svg      # Official Cautio vector brand mark
├── vercel.json          # Vercel serverless edge configuration
├── .env.example         # Environment template for confidential credentials
├── api/
│   └── sync.js          # Vercel Serverless Function (Hides Google Sheet completely from browser)
└── README.md            # Documentation & deployment guide
```

---

## Deploying to Vercel (Recommended for Maximum Confidentiality)

Deploying to **[Vercel](https://vercel.com)** ensures that:
1. **Google Sheets is 100% hidden**: The browser never makes requests to `docs.google.com`. Browser DevTools Network tab only shows requests to `/api/sync` on your own domain.
2. **Zero Sheet IDs in public code**: The Google Sheet ID can be stored securely as a Vercel Environment Variable.
3. **No buttons or links in the UI**: There are no external buttons or hyperlinks that redirect visitors to the Google Sheet.

### Quick Deploy via Vercel CLI or Dashboard:

1. Push your repository to GitHub / GitLab / Bitbucket (or run `vercel` via CLI).
2. Import the project into your **Vercel Dashboard**.
3. Under **Project Settings → Environment Variables**, add:
   - `SHEET_ID` = `your_confidential_sheet_id`
   - `SHEET_GID` = `0` (or your tab GID)
4. Click **Deploy**.

---

## Deploying to GitHub Pages (Static Hosting Fallback)

If deploying statically to GitHub Pages:
- The website uses dynamic in-memory cipher decryption (`_resolveEncryptedStreamUrl`) to stream telemetrics without exposing plain-text URLs in any file.
- All direct links and redirect buttons to the Google Sheet have been removed from the user interface.

### Option A: Upload via GitHub Web Interface

1. Go to [GitHub.com](https://github.com) and click **"New repository"**.
2. Name it `cautio-fleet-heatmap` and set it to **Public** or **Private**.
3. Click **"uploading an existing file"** and select repository files.
4. Click **"Commit changes"**.
5. Go to **Settings** → **Pages** (in the left sidebar).
6. Under **Build and deployment** → **Branch**, choose `main` and folder `/ (root)`, then click **Save**.

### Option B: Deploy via Git CLI

```bash
cd C:\Users\monitoring\fleet-incident-heatmap
git add .
git commit -m "feat: confidential telemetry pipeline & Vercel serverless integration"
git push origin main
```

---

## Live Data Integration
- **Google Sheet Stream**: Secured Private Telemetry Feed (Configured via `app.js`)
- **Cautio Official Ecosystem**: [https://www.cautio.com/](https://www.cautio.com/)
