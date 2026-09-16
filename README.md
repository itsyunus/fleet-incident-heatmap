# CAUTIO | AI Fleet Safety & Accident Hotzone Telemetry Radar

An industry-level, interactive geospatial safety intelligence system, accident hotzone radar, and video telematics command center built specifically for **[Cautio](https://www.cautio.com/)** — India's leading commercial vehicle AI dashcam ecosystem.

The platform connects live to Cautio's commercial fleet incident Google Sheet (`1DzW-6Q7hTNn2hSJbEHOkSrbalOmbDIftdjw4I_PhEdA`) and automatically synchronizes immediately on startup, page refresh, or on-demand whenever any new incident, camera fault, or collision report is logged by field technicians or command center operators.

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
  - Minimalist live sync status LED dot (expands on status change).
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
- **Instant Auto-Sync on Startup & Refresh**: Connects automatically to the live Google Sheet on initial visit and re-syncs seamlessly.
- **Direct Live Connection**: Uses Google Visualization API (`gviz/tq`) with JSONP fallback to query the Google Sheet directly from the client's browser.
- **Zero Rebuild Needed**: When a field operator or command center logs a new accident/issue into the Google Sheet, the live web page detects and incorporates new rows immediately.
- **Zero Initial Latency**: Ships with a pre-compiled snapshot of historical records (`data-snapshot.js`) so the dashboard and map render instantly (< 100ms), followed immediately by seamless live reconciliation.
- **Live Connection Status**: Minimalist green LED indicator that stays clean and expands with status updates.

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
├── index.html           # Main Cautio command center dashboard & UI
├── app.js               # Live sync engine, Leaflet heatmap, charts, & filters
├── data-snapshot.js     # Pre-baked dataset snapshot for instant load
├── india-boundary.js    # Official India geographic boundary overlay
├── cautio-logo.svg      # Official Cautio vector logo
└── README.md            # Documentation & GitHub deployment instructions
```

---

## How to Upload & Deploy to GitHub Pages (2 Minutes)

### Option A: Upload via GitHub Web Interface (Easiest — No Git Needed)

1. Go to [GitHub.com](https://github.com) and click **"New repository"**.
2. Name it `cautio-fleet-heatmap` and set it to **Public**.
3. Click **"uploading an existing file"**.
4. Drag and drop all files from this directory:
   - `index.html`
   - `app.js`
   - `data-snapshot.js`
   - `india-boundary.js`
   - `cautio-logo.svg`
   - `README.md`
5. Click **"Commit changes"**.
6. Go to **Settings** → **Pages** (in the left sidebar).
7. Under **Build and deployment** → **Branch**, choose `main` (or `master`) and folder `/ (root)`, then click **Save**.
8. Within ~60 seconds, your site is live at:
   `https://<your-username>.github.io/cautio-fleet-heatmap/`

### Option B: Deploy via Git CLI

```bash
cd C:\Users\monitoring\fleet-incident-heatmap
git init
git add .
git commit -m "feat: Cautio AI Dashcam Telemetry & Accident Hotzone Heatmap v3.0"
git branch -M main
git remote add origin https://github.com/<your-username>/cautio-fleet-heatmap.git
git push -u origin main
```
Then enable GitHub Pages from repository Settings → Pages.

---

## Live Data Integration

- **Google Sheet Stream ID**: `1DzW-6Q7hTNn2hSJbEHOkSrbalOmbDIftdjw4I_PhEdA`
- **Sheet Tab GID**: `0`
- **Cautio Official Ecosystem**: [https://www.cautio.com/](https://www.cautio.com/)
