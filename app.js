/**
 * Bharat Fleet Safety Intel - Heatmap & Incident Command Engine (v3.0 Pro)
 * Real-time synchronization with Cautio Fleet Incident Telemetry Engine
 * Enterprise Porcelain Light Glass UI/UX with Smooth Kinetic Map Navigation
 */

// Secure Telemetry Pipeline (Serverless proxy on Vercel with encrypted dynamic fallback)
function _resolveEncryptedStreamUrl(callbackName) {
  const cipher = "KxUBBBpVfU4ADhEnSwsKAgIYF1coChQdQ0JEJgARBwEKNxUXThZ7VCgfOkhCI04jMTdcAlplCQMwPCYEARMGAB4bCA4hJAMAFhM8UTBtYFpzJyBaEx8GKE4QEE0gFBRYHwAHAhYlFhx6UVxSLwQHTg==";
  const keyBytes = [67, 97, 117, 116, 105, 111, 82, 97, 100, 97, 114, 84, 101, 108, 101, 109, 101, 116, 114, 121, 75, 101, 121, 50, 48, 50, 54];
  const raw = typeof atob === 'function' ? atob(cipher) : '';
  let base = '';
  for (let i = 0; i < raw.length; i++) {
    base += String.fromCharCode(raw.charCodeAt(i) ^ keyBytes[i % keyBytes.length]);
  }
  return `${base}${callbackName}&gid=0`;
}

// Coordinates Dictionary for Indian Cities & Strategic Corridors
const GEO_COORDINATES = {
  "bangalore": [12.9716, 77.5946],
  "mumbai": [19.0760, 72.8777],
  "delhi": [28.7041, 77.1025],
  "hyderabad": [17.3850, 78.4867],
  "chennai": [13.0400, 80.1800],
  "che": [13.0400, 80.1800],
  "krishnagiri": [12.5266, 78.2146],
  "pune": [18.5204, 73.8567],
  "gurugram": [28.4595, 77.0266],
  "kolkata": [22.5726, 88.3639],
  "nagpur": [21.1458, 79.0882],
  "kolar": [13.1379, 78.1294],
  "coimbatore": [11.0168, 76.9558],
  "trichy": [10.7905, 78.7047],
  "indore": [22.7196, 75.8577],
  "jaipur": [26.9124, 75.7873],
  "surat": [21.1702, 72.8311],
  "noida": [28.5355, 77.3910],
  "raipur": [21.2514, 81.6296],
  "amritsar": [31.6340, 74.8723],
  "ahmedabad": [23.0225, 72.5714],
  "dehradun": [30.3165, 78.0322],
  "aurangabad": [19.8762, 75.3433],
  "pondicherry": [11.9350, 79.7900],
  "puducherry": [11.9350, 79.7900],
  "hosur": [12.7409, 77.8253],
  "chandigarh": [30.7333, 76.7794],
  "guntur": [16.3067, 80.4365],
  "ernakulam": [9.9816, 76.2999],
  "ambala": [30.3782, 76.7767],
  "bathinda": [30.2110, 74.9455],
  "gandhinagar": [23.2156, 72.6369],
  "madgaon": [15.2832, 73.9862],
  "kochi": [10.0150, 76.3120],
  "faridabad": [28.4089, 77.3178],
  "goa": [15.2993, 74.1240],
  "ghaziabad": [28.6692, 77.4538],
  "sikar": [27.6094, 75.1398],
  "rajkot": [22.3039, 70.8022],
  "sangali": [16.8524, 74.5815],
  "salem": [11.6643, 78.1460],
  "namakal": [11.2189, 78.1674],
  "namakkal": [11.2189, 78.1674],
  "erode": [11.3410, 77.7172],
  "tn": [11.1271, 78.6569],
  "jodhpur": [26.2389, 73.0243],
  "vellore": [12.9165, 79.1325],
  "singrauli": [24.1997, 82.6645],
  "pollachi": [10.6609, 77.0048],
  "ludhiana": [30.9010, 75.8573],
  "mysore": [12.2958, 76.6394],
  "manipal": [13.3525, 74.7950],
  "madurai": [9.9252, 78.1198],
  "patiala": [30.3398, 76.3869],
  "guwahati": [26.1445, 91.7362],
  "gopalganj": [26.4674, 84.4442],
  "bhopal": [23.2599, 77.4126],
  "ambikapur": [23.1205, 83.1979],
  "bhilai": [21.1938, 81.3509],
  "vadodara": [22.3072, 73.1812],
  "kanpur": [26.4499, 80.3319],
  "amravati": [20.9374, 77.7796],
  "bhiwandi": [19.2967, 73.0631],
  "vidisha": [23.5251, 77.8081],
  "vijaywada": [16.5062, 80.6480],
  "calicut": [11.2650, 75.8200],
  "mohali": [30.7046, 76.7179],
  "ajmer": [26.4499, 74.6399],
  "tiruvannamalai": [12.2253, 79.0747],
  "tirupur": [11.1085, 77.3411],
  "kota": [25.2138, 75.8648],
  "binola": [28.3283, 76.8837],
  "solan": [30.8400, 76.9634],
  "jammu": [32.7266, 74.8570],
  "jalna": [19.8410, 75.8864],
  "bhubaneswar": [20.2961, 85.8245],
  "moradabad": [28.8386, 78.7733],
  "kapurthala": [31.3800, 75.3800],
  "manali": [32.2432, 77.1892],
  "assam": [26.2006, 92.9376],
  "jharsuguda": [21.8554, 84.0062],
  "hisar": [29.1492, 75.7217],
  "tikamgarh": [24.7438, 78.8306],
  "yavatmal": [20.3888, 78.1204],
  "vizag": [17.6868, 83.2185],
  "jamshedhpur": [22.8046, 86.2029],
  "tumkur": [13.3422, 77.1017],
  "nanded": [19.1383, 77.3210],
  "bellary": [15.1394, 76.9214],
  "mumbai- nalsapora": [19.4173, 72.8350],
  "fatehpur": [25.9284, 80.8130],
  "agra": [27.1767, 78.0081],
  "beed": [18.9891, 75.7601],
  "nashik": [19.9975, 73.7898],
  "eluru": [16.7107, 81.0952],
  "chapra": [25.7796, 84.7499],
  "moga": [30.8165, 75.1717],
  "tepl": [12.9800, 80.0500],
  "bilaspur": [22.0797, 82.1391],
  "bhiwadi": [28.2104, 76.8606],
  "gwalior": [26.2183, 78.1828],
  "rajasthan": [27.0238, 74.2179],
  "jalandhar": [31.3260, 75.5762]
};

// State Vehicle Plate Code to Capital / Major Transport Node
const STATE_COORDINATES = {
  "KA": [12.9716, 77.5946],
  "MH": [19.0760, 72.8777],
  "DL": [28.7041, 77.1025],
  "HR": [28.4595, 77.0266],
  "TN": [13.0400, 80.1800],
  "TS": [17.3850, 78.4867],
  "AP": [16.5062, 80.6480],
  "GJ": [23.0225, 72.5714],
  "RJ": [26.9124, 75.7873],
  "WB": [22.5726, 88.3639],
  "PB": [30.7333, 76.7794],
  "UP": [28.5355, 77.3910],
  "MP": [22.7196, 75.8577],
  "CG": [21.2514, 81.6296],
  "KL": [10.0150, 76.3120],
  "GA": [15.2993, 74.1240],
  "UK": [30.3165, 78.0322],
  "UA": [30.3165, 78.0322],
  "HP": [30.8400, 76.9634],
  "JK": [32.7266, 74.8570],
  "AS": [26.1445, 91.7362],
  "OD": [20.2961, 85.8245],
  "OR": [20.2961, 85.8245],
  "BR": [25.5941, 85.1376],
  "PY": [11.9350, 79.7900],
  "CH": [30.7333, 76.7794],
  "NL": [25.6751, 94.1086]
};

// Strategic Logistics Hotzones
const HOTZONE_CORRIDORS = [
  {
    id: "bangalore",
    name: "Bangalore Logistics Belt",
    shortName: "Bangalore",
    state: "Karnataka",
    center: [12.9716, 77.5946],
    radiusMeters: 45000,
    color: "#e11d48",
    riskLevel: "Critical Hotzone",
    description: "Electronic City, Whitefield, Peenya, Hosur & Kolar Industrial Hubs"
  },
  {
    id: "mumbai-pune",
    name: "Mumbai-Pune Expressway Belt",
    shortName: "Mumbai-Pune",
    state: "Maharashtra",
    center: [18.7500, 73.4000],
    radiusMeters: 65000,
    color: "#f97316",
    riskLevel: "Severe Hotzone",
    description: "JNPT Port, Thane, Navi Mumbai, Bhiwandi Warehousing & Pune Auto Hub"
  },
  {
    id: "delhi-ncr",
    name: "Delhi-NCR Logistics Gateway",
    shortName: "Delhi-NCR",
    state: "Delhi / Haryana / UP",
    center: [28.5500, 77.1500],
    radiusMeters: 55000,
    color: "#eab308",
    riskLevel: "High Hotzone",
    description: "Gurugram, Noida, Faridabad, Binola & NH-48 Logistics Corridor"
  },
  {
    id: "chennai-krishnagiri",
    name: "Chennai-Krishnagiri Auto Belt",
    shortName: "Chennai-Krishnagiri",
    state: "Tamil Nadu",
    center: [12.7500, 79.1500],
    radiusMeters: 80000,
    color: "#76C457",
    riskLevel: "High Hotzone",
    description: "Sriperumbudur, Oragadam, Krishnagiri & Vellore Industrial Corridor"
  },
  {
    id: "hyderabad",
    name: "Hyderabad Cyber & Logistics Belt",
    shortName: "Hyderabad",
    state: "Telangana",
    center: [17.3850, 78.4867],
    radiusMeters: 38000,
    color: "#2A7C13",
    riskLevel: "Moderate Hotzone",
    description: "ORR Logistics, Shamshabad, Medchal & Cyberabad Transport Corridors"
  },
  {
    id: "kolkata",
    name: "Kolkata & Eastern Logistics Hub",
    shortName: "Kolkata",
    state: "West Bengal",
    center: [22.5726, 88.3639],
    radiusMeters: 35000,
    color: "#a855f7",
    riskLevel: "Moderate Hotzone",
    description: "Howrah Logistics, Dankuni, Kolkata Port & NH-19 Eastern Gateway"
  },
  {
    id: "punjab-gt",
    name: "Punjab-Haryana GT Road Corridor",
    shortName: "Punjab-Haryana",
    state: "Punjab / Haryana",
    center: [30.9010, 75.8573],
    radiusMeters: 70000,
    color: "#38bdf8",
    riskLevel: "Active Corridor",
    description: "Amritsar, Ludhiana, Chandigarh, Ambala & Bathinda Transport Hubs"
  },
  {
    id: "gujarat",
    name: "Gujarat Industrial Expressway",
    shortName: "Gujarat",
    state: "Gujarat",
    center: [22.7000, 72.8500],
    radiusMeters: 65000,
    color: "#34d399",
    riskLevel: "Active Corridor",
    description: "Ahmedabad, Vadodara, Gandhinagar, Surat & Rajkot Freight Hubs"
  },
  {
    id: "central-india",
    name: "Central Logistics Grid (Nagpur-Raipur)",
    shortName: "Central Grid",
    state: "Maharashtra / CG / MP",
    center: [21.1800, 80.3000],
    radiusMeters: 90000,
    color: "#10b981",
    riskLevel: "Active Corridor",
    description: "MIHAN Nagpur, Raipur, Bhilai & Bilaspur Central Transshipment Grid"
  }
];

// Application State
const appState = {
  rawIncidents: [],
  filteredIncidents: [],
  incidentMap: new Map(),
  lastSyncTime: null,
  isSyncing: false,
  autoSyncInterval: 300000, // 5 mins (300,000 ms)
  autoSyncTimer: null,
  map: null,
  heatLayer: null,
  clusterLayer: null,
  hotzoneLayerGroup: null,
  accidentSpotlightLayer: null,
  indiaBoundaryLayer: null,
  tileLayers: {},
  currentBasemap: 'esri_streets',
  charts: {},
  activeTab: 'map',
  sidebarOpen: true,
  // Filter settings
  filters: {
    search: '',
    severity: 'all',
    hotzone: 'all',
    client: 'all',
    resolved: 'all',
    year: 'all',
    subRequest: 'all',
    todayOnly: false
  },
  // Heatmap settings
  heatSettings: {
    mode: 'weighted', // 'weighted' or 'count'
    radius: 32,
    blur: 22,
    maxZoom: 13,
    minOpacity: 0.50
  },
  // Table pagination
  tablePage: 1,
  pageSize: 25,
  sortField: 'id',
  sortAsc: false
};

// Deterministic jitter for city clusters so vehicles spread along realistic routes
function getDeterministicJitter(key, index) {
  let hash = 0;
  const str = key + "_" + index;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash * 31) + str.charCodeAt(i)) & 0x7FFFFFFF;
  }
  const jLat = (((hash % 1000) / 1000.0) - 0.5) * 0.12;
  const jLng = ((((Math.floor(hash / 1000)) % 1000) / 1000.0) - 0.5) * 0.12;
  return [jLat, jLng];
}

// Classify severity: 4=Critical/Accident, 3=Hardware/Sensor, 2=Operational, 1=Routine
function classifySeverity(incidentType, subRequest, issueDetails, remarks, status) {
  const combined = `${incidentType} ${subRequest} ${issueDetails} ${remarks} ${status}`.toLowerCase();
  
  if (incidentType === 'Critical' || 
      combined.match(/accident|crash|collision|hit | hit|impact|police|fir|injury|hazard|overturn|fatal|head-on|rear-end|rollover/)) {
    return 4; // Critical Accident / Collision
  }
  if (combined.match(/damage|cable|tamper|wiring|hanging|antenna|sim card failure|camera damaged|power cable/)) {
    return 3; // Sensor / Hardware Fault
  }
  if (combined.match(/sd card corruption|offline|device status|ai video related|device offline|platform issue/)) {
    return 2; // Operational / Telemetry Issue
  }
  return 1; // Routine Video Request / Inquiries
}

// Strict Coastal and Land Boundary Clamping to guarantee 0 incidents ever appear in water bodies
function clampToIndianLand(lat, lng) {
  let cLat = Number(lat);
  let cLng = Number(lng);
  if (isNaN(cLat) || isNaN(cLng)) return [12.9716, 77.5946];

  // 1. Southernmost Mainland Limit (Kanyakumari Cape 8.08 N)
  if (cLat < 8.09) {
    cLat = 8.12;
  }
  if (cLat > 37.1) {
    cLat = 37.0;
  }

  // 2. Chennai & North Tamil Nadu Coast (Bay of Bengal)
  // The coastline is between 80.26 and 80.28. Any coordinate > 80.255 is coastal surf or ocean.
  if (cLat >= 12.7 && cLat <= 13.5) {
    if (cLng > 80.255) {
      // Shift inland into Chennai West logistics corridors (Ambattur, Porur, Sriperumbudur, Guindy)
      const delta = cLng - 80.255;
      cLng = 80.23 - (delta * 0.8) - 0.02;
    }
  }

  // 3. South Tamil Nadu & Puducherry Coast
  if (cLat >= 10.5 && cLat < 12.7 && cLng > 79.82) {
    cLng = 79.78 - ((cLng - 79.82) * 0.6);
  }
  if (cLat >= 8.1 && cLat < 10.5 && cLng > 79.25) {
    cLng = 79.15;
  }

  // 4. Andhra Pradesh Coastline (Nellore, Guntur, Kakinada, Vizag)
  if (cLat >= 13.5 && cLat < 16.0 && cLng > 80.05) {
    cLng = 79.98;
  }
  if (cLat >= 16.0 && cLat < 17.5 && cLng > 82.25) {
    cLng = 82.15;
  }
  if (cLat >= 17.5 && cLat <= 18.2 && cLng > 83.24) {
    // Vizag Port / Coast: shift to Auto Nagar / Gajuwaka inland
    cLng = 83.18;
  }

  // 5. Odisha & West Bengal Coast
  if (cLat >= 18.2 && cLat < 21.0 && cLng > 86.60) {
    cLng = 86.40;
  }
  if (cLat >= 21.0 && cLat <= 22.2 && cLng > 88.25) {
    // Sundarbans waters south of Kolkata: shift north to Kolkata/Howrah hub
    cLng = 88.28;
    if (cLat < 22.4) cLat = 22.45;
  }

  // 6. Kerala Coastline (Arabian Sea)
  if (cLat >= 8.1 && cLat < 9.5 && cLng < 76.90) {
    cLng = 76.95;
  }
  if (cLat >= 9.5 && cLat < 10.5 && cLng < 76.28) {
    // Kochi / Ernakulam coast: shift inland to Kalamassery / Aluva
    cLng = 76.32;
  }
  if (cLat >= 10.5 && cLat < 12.0 && cLng < 75.78) {
    // Calicut / Malappuram: shift inland
    cLng = 75.82;
  }

  // 7. Karnataka Coastal Belt (Mangalore, Udupi, Manipal, Karwar)
  if (cLat >= 12.0 && cLat < 13.2 && cLng < 74.84) {
    // Mangalore: shift inland
    cLng = 74.88;
  }
  if (cLat >= 13.2 && cLat <= 13.6 && cLng < 74.78) {
    // Manipal / Udupi: shift east onto the Manipal plateau
    cLng = 74.80;
  }
  if (cLat > 13.6 && cLat < 15.0 && cLng < 74.30) {
    cLng = 74.40;
  }

  // 8. Goa & Konkan Coast (Arabian Sea)
  if (cLat >= 15.0 && cLat < 18.5 && cLng < 73.35) {
    cLng = 73.45;
  }

  // 9. Mumbai Metropolitan Region (Arabian Sea west of Mumbai)
  if (cLat >= 18.8 && cLat <= 19.4) {
    if (cLng < 72.825) {
      // Shift east into Mumbai central logistics spine (Kurla / Powai / Thane / Bhiwandi)
      const delta = 72.825 - cLng;
      cLng = 72.86 + (delta * 0.8);
    }
  }
  if (cLat > 19.4 && cLat <= 20.2 && cLng < 72.75) {
    cLng = 72.82;
  }

  // 10. Gulf of Khambhat & Gujarat Coast
  if (cLat >= 20.8 && cLat <= 21.8) {
    if (cLng > 72.0 && cLng < 72.65) {
      // In the Gulf of Khambhat waters: shift east to Surat/Bharuch highway
      cLng = 72.82;
    }
  }
  if (cLat >= 21.5 && cLat <= 23.0 && cLng < 69.60) {
    cLng = 69.75;
  }

  return [Number(cLat.toFixed(5)), Number(cLng.toFixed(5))];
}

// Geocode a record given its location, client, and vehicle number
function geocodeRecord(loc, client, vehicleNumber, issueId, index) {
  let lat = 0, lng = 0;
  let hasExact = false;
  const locStr = (loc || '').trim().toLowerCase();

  // 1. Direct coordinate string in Location column (e.g. "19.171669, 73.113199" or "20,697622, 76,996852")
  const cleanedLoc = locStr.replace(/(\d{1,2}),(\d{3,})/g, '$1.$2');
  const coordMatch = cleanedLoc.match(/(-?\d{1,2}\.?\d*)\s*[,;/]\s*(-?\d{1,2}\.?\d*)/);
  if (coordMatch) {
    lat = parseFloat(coordMatch[1]);
    lng = parseFloat(coordMatch[2]);
    if (!isNaN(lat) && !isNaN(lng) && lat > 6 && lat < 38 && lng > 68 && lng < 98) {
      const [cLat, cLng] = clampToIndianLand(lat, lng);
      return { lat: cLat, lng: cLng, isExact: true, zone: 'Exact GPS Coordinate' };
    }
  }

  // 2. Exact or partial city name match in dictionary
  for (const [cityName, coords] of Object.entries(GEO_COORDINATES)) {
    if (locStr.includes(cityName)) {
      lat = coords[0];
      lng = coords[1];
      hasExact = true;
      break;
    }
  }

  // 3. Fallback: Check Client fleet location indicators
  if (!hasExact && client) {
    const cl = client.toLowerCase();
    if (cl.includes('mumbai')) { lat = 19.0760; lng = 72.8777; hasExact = true; }
    else if (cl.includes('chennai') || cl.includes('che')) { lat = 13.0400; lng = 80.1800; hasExact = true; }
    else if (cl.includes('bangalore') || cl.includes('blr') || cl.includes('infant') || cl.includes('green drive')) { lat = 12.9716; lng = 77.5946; hasExact = true; }
    else if (cl.includes('delhi') || cl.includes('del') || cl.includes('zing') || cl.includes('trev')) { lat = 28.7041; lng = 77.1025; hasExact = true; }
    else if (cl.includes('hyd')) { lat = 17.3850; lng = 78.4867; hasExact = true; }
    else if (cl.includes('kol')) { lat = 22.5726; lng = 88.3639; hasExact = true; }
  }

  // 4. Fallback: State Code from Indian Vehicle Number plate prefix (e.g. KA, MH, DL, HR, TN)
  if (!hasExact && vehicleNumber) {
    const vn = vehicleNumber.trim().toUpperCase();
    if (vn.length >= 2) {
      const pfx = vn.substring(0, 2);
      if (STATE_COORDINATES[pfx]) {
        lat = STATE_COORDINATES[pfx][0];
        lng = STATE_COORDINATES[pfx][1];
        hasExact = true;
      }
    }
  }

  // Default fallback if unknown
  if (!hasExact) {
    lat = 12.9716;
    lng = 77.5946;
  }

  // Add realistic corridor jitter
  const [jLat, jLng] = getDeterministicJitter(`${issueId}_${vehicleNumber}`, index);
  lat = Number((lat + jLat).toFixed(5));
  lng = Number((lng + jLng).toFixed(5));

  // Strict coastal clamping so jitter never pushes into the sea
  const [cLat, cLng] = clampToIndianLand(lat, lng);
  lat = cLat;
  lng = cLng;

  // Determine hotzone name
  let zoneName = "Other India Hub";
  for (const z of HOTZONE_CORRIDORS) {
    const dLat = Math.abs(lat - z.center[0]);
    const dLng = Math.abs(lng - z.center[1]);
    if (dLat < 0.65 && dLng < 0.65) {
      zoneName = z.name;
      break;
    }
  }

  return { lat, lng, isExact: false, zone: zoneName };
}

// Convert tuple from prebaked snapshot or live row to normalized object
function normalizeTuple(t, idx) {
  const id = t[0] || `ISS${String(idx + 1).padStart(5, '0')}`;
  const client = t[1] || 'Unknown Fleet';
  const vehicle = t[2] || 'Unknown Plate';
  const raisedAt = t[3] || '';
  const year = String(t[4] || '');
  const month = t[5] || '';
  const raisedBy = t[6] || '';
  const subRequest = t[7] || 'General Telemetry';
  const severity = Number(t[8]) || 1;
  const details = t[9] || '';
  const remarks = t[10] || '';
  const location = t[11] || '';
  let lat = Number(t[12]);
  let lng = Number(t[13]);

  // Handle comma-separated coordinate format or NaN
  if ((lng > 180 || isNaN(lat) || isNaN(lng)) && location) {
    const cleanedLoc = location.replace(/(\d{1,2}),(\d{3,})/g, '$1.$2');
    const m = cleanedLoc.match(/(-?\d{1,2}\.?\d*)\s*[,;/]\s*(-?\d{1,2}\.?\d*)/);
    if (m) {
      lat = parseFloat(m[1]);
      lng = parseFloat(m[2]);
    }
  }

  // Strictly clamp onto Indian land mass so no incident ever appears in water
  const [clampedLat, clampedLng] = clampToIndianLand(lat, lng);
  lat = clampedLat;
  lng = clampedLng;

  const resolved = (t[14] || '').toLowerCase().includes('yes') ? 'Yes' : 'No';
  const resolvedAt = t[15] || '';
  const assignedTo = t[16] || '';
  const status = t[17] || '';
  const correction = t[18] || '';

  let hotzoneId = 'other';
  for (const z of HOTZONE_CORRIDORS) {
    const dLat = Math.abs(lat - z.center[0]);
    const dLng = Math.abs(lng - z.center[1]);
    if (dLat < 0.7 && dLng < 0.7) {
      hotzoneId = z.id;
      break;
    }
  }

  return {
    id,
    client,
    vehicle,
    raisedAt,
    year,
    month,
    raisedBy,
    subRequest,
    severity,
    details,
    remarks,
    location,
    lat,
    lng,
    resolved,
    resolvedAt,
    assignedTo,
    status,
    correction,
    hotzoneId
  };
}

// Convert raw GViz row to normalized object
function parseGVizRow(c, idx) {
  const getVal = (colIndex) => {
    if (!c || !c[colIndex] || c[colIndex].v === undefined || c[colIndex].v === null) return '';
    return String(c[colIndex].v).trim();
  };

  const id = getVal(1) || `ISS${String(idx + 1).padStart(5, '0')}`;
  const client = getVal(2) || 'Unknown Fleet';
  const vehicle = getVal(3) || 'Unknown Plate';
  const raisedAt = getVal(4);
  const year = getVal(5);
  const month = getVal(6);
  const raisedBy = getVal(7);
  const subRequest = getVal(9) || 'General Telemetry';
  const issueDetails = getVal(10);
  const incidentType = getVal(11);
  const remarks = getVal(12);
  const assignedTo = getVal(14);
  const location = getVal(15);
  const resolvedYn = getVal(17);
  const resolvedAt = getVal(18);
  const status = getVal(19);
  const correction = getVal(23);

  const severity = classifySeverity(incidentType, subRequest, issueDetails, remarks, status);
  const geo = geocodeRecord(location, client, vehicle, id, idx);
  const resolved = resolvedYn.toLowerCase().includes('yes') ? 'Yes' : 'No';

  let hotzoneId = 'other';
  for (const z of HOTZONE_CORRIDORS) {
    const dLat = Math.abs(geo.lat - z.center[0]);
    const dLng = Math.abs(geo.lng - z.center[1]);
    if (dLat < 0.7 && dLng < 0.7) {
      hotzoneId = z.id;
      break;
    }
  }

  return {
    id,
    client,
    vehicle,
    raisedAt,
    year,
    month,
    raisedBy,
    subRequest,
    severity,
    details: issueDetails,
    remarks,
    location: location || geo.zone,
    lat: geo.lat,
    lng: geo.lng,
    resolved,
    resolvedAt,
    assignedTo,
    status,
    correction,
    hotzoneId
  };
}

// Main Application Lifecycle
function startApp() {
  initUI();
  initMap();
  initCharts();
  loadInitialData();
  setupAutoSync();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

// UI Event Listeners & Tab Controller
function initUI() {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Drawer Backdrop Click to Dismiss
  const backdrop = document.getElementById('drawer-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', closeAllDrawers);
  }

  // Keyboard shortcut: ESC closes all drawers and modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDrawers();
      closeModal();
    }
  });

  // Sync Now Button
  const syncBtn = document.getElementById('btn-sync-now');
  if (syncBtn) {
    syncBtn.addEventListener('click', () => syncWithGoogleSheet(true));
  }

  // Auto-sync Interval Dropdown
  const intervalSelect = document.getElementById('select-sync-interval');
  if (intervalSelect) {
    intervalSelect.addEventListener('change', (e) => {
      const val = parseInt(e.target.value, 10);
      appState.autoSyncInterval = val;
      setupAutoSync();
      const label = val === 0 ? 'Manual Only' : (val >= 60000 ? `${val / 60000} mins` : `${val / 1000}s`);
      showToast(`Auto-sync interval set to ${label}`, "info");
    });
  }

  // Filter Search Input
  const searchInput = document.getElementById('filter-search');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      appState.filters.search = searchInput.value.trim().toLowerCase();
      applyFilters();
    }, 250));
  }

  // Severity Quick Filter Pills
  document.querySelectorAll('[data-sev-pill]').forEach(pill => {
    pill.addEventListener('click', () => {
      const sevVal = pill.getAttribute('data-sev-pill');
      appState.filters.severity = sevVal;
      updateSeverityFilterPills(sevVal);
      applyFilters();
    });
  });

  // Dismiss Corridor Liquid Dropdown on outside click
  document.addEventListener('click', (e) => {
    const container = document.getElementById('corridor-dropdown-container');
    const menu = document.getElementById('corridor-dropdown-menu');
    if (container && menu && !container.contains(e.target) && !menu.classList.contains('hidden')) {
      window.toggleCorridorMenu(false);
    }
  });

  // Top Bar Corridor Selector (sync state when programmatically updated)
  const barCorridorSelect = document.getElementById('bar-corridor-select');
  if (barCorridorSelect) {
    barCorridorSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      const corridor = HOTZONE_CORRIDORS.find(c => c.id === val);
      const name = corridor ? corridor.name : 'All India Corridors';
      window.selectBarCorridor(val, name);
    });
  }

  // Hotzone Corridor Dropdown in Filter Drawer
  const hotzoneFilter = document.getElementById('filter-hotzone');
  if (hotzoneFilter) {
    hotzoneFilter.addEventListener('change', (e) => {
      const val = e.target.value;
      const opt = hotzoneFilter.options[hotzoneFilter.selectedIndex];
      const name = opt ? opt.text.split('(')[0].trim() : val;
      window.selectBarCorridor(val, name);
    });
  }

  // Client Fleet Dropdown
  const clientFilter = document.getElementById('filter-client');
  if (clientFilter) {
    clientFilter.addEventListener('change', (e) => {
      appState.filters.client = e.target.value;
      applyFilters();
    });
  }

  // Resolution Status
  const resFilter = document.getElementById('filter-resolved');
  if (resFilter) {
    resFilter.addEventListener('change', (e) => {
      appState.filters.resolved = e.target.value;
      applyFilters();
    });
  }

  // Sub-request Dropdown
  const subFilter = document.getElementById('filter-subrequest');
  if (subFilter) {
    subFilter.addEventListener('change', (e) => {
      appState.filters.subRequest = e.target.value;
      applyFilters();
    });
  }

  // Clear Filters Button
  const clearBtn = document.getElementById('btn-clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', resetFilters);
  }

  // Heatmap Controls Live Sliders
  const heatModeToggle = document.getElementById('heat-mode-toggle');
  if (heatModeToggle) {
    heatModeToggle.addEventListener('change', (e) => {
      appState.heatSettings.mode = e.target.checked ? 'weighted' : 'count';
      document.getElementById('heat-mode-label').textContent = e.target.checked ? 'Risk-Weighted (Accidents 5x)' : 'Raw Event Count (1x)';
      updateHeatmapLayer();
    });
  }

  const heatRadius = document.getElementById('slider-heat-radius');
  if (heatRadius) {
    heatRadius.addEventListener('input', (e) => {
      appState.heatSettings.radius = parseInt(e.target.value, 10);
      document.getElementById('val-heat-radius').textContent = e.target.value + 'px';
      updateHeatmapLayer();
    });
  }

  const heatBlur = document.getElementById('slider-heat-blur');
  if (heatBlur) {
    heatBlur.addEventListener('input', (e) => {
      appState.heatSettings.blur = parseInt(e.target.value, 10);
      document.getElementById('val-heat-blur').textContent = e.target.value + 'px';
      updateHeatmapLayer();
    });
  }

  const heatOpacity = document.getElementById('slider-heat-opacity');
  if (heatOpacity) {
    heatOpacity.addEventListener('input', (e) => {
      appState.heatSettings.minOpacity = parseFloat(e.target.value) / 100;
      document.getElementById('val-heat-opacity').textContent = e.target.value + '%';
      updateHeatmapLayer();
    });
  }

  // Layer Toggles
  const toggleHeat = document.getElementById('toggle-layer-heat');
  if (toggleHeat) {
    toggleHeat.addEventListener('change', (e) => {
      if (e.target.checked) appState.map.addLayer(appState.heatLayer);
      else appState.map.removeLayer(appState.heatLayer);
    });
  }

  const toggleClusters = document.getElementById('toggle-layer-clusters');
  if (toggleClusters) {
    toggleClusters.addEventListener('change', (e) => {
      if (e.target.checked) appState.map.addLayer(appState.clusterLayer);
      else appState.map.removeLayer(appState.clusterLayer);
    });
  }

  const toggleZones = document.getElementById('toggle-layer-zones');
  if (toggleZones) {
    toggleZones.addEventListener('change', (e) => {
      if (e.target.checked) appState.map.addLayer(appState.hotzoneLayerGroup);
      else appState.map.removeLayer(appState.hotzoneLayerGroup);
    });
  }

  const toggleSpotlight = document.getElementById('toggle-layer-spotlight');
  if (toggleSpotlight) {
    toggleSpotlight.addEventListener('change', (e) => {
      if (e.target.checked) appState.map.addLayer(appState.accidentSpotlightLayer);
      else appState.map.removeLayer(appState.accidentSpotlightLayer);
    });
  }

  const toggleBoundary = document.getElementById('toggle-layer-boundary');
  if (toggleBoundary) {
    toggleBoundary.addEventListener('change', (e) => {
      if (appState.indiaBoundaryLayer) {
        if (e.target.checked) appState.map.addLayer(appState.indiaBoundaryLayer);
        else appState.map.removeLayer(appState.indiaBoundaryLayer);
      }
    });
  }

  // Basemap Selector (NO WATERMARKS, 100% FREE & CLEAN)
  const basemapSelect = document.getElementById('select-basemap');
  if (basemapSelect) {
    basemapSelect.addEventListener('change', (e) => {
      switchBasemap(e.target.value);
    });
  }

  // Floating HUD Navigation Buttons
  const btnZoomIn = document.getElementById('hud-zoom-in');
  const btnZoomOut = document.getElementById('hud-zoom-out');
  const btnResetIndia = document.getElementById('hud-reset-india');
  if (btnZoomIn) btnZoomIn.addEventListener('click', () => appState.map.zoomIn());
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => appState.map.zoomOut());
  if (btnResetIndia) btnResetIndia.addEventListener('click', () => flyToCorridor('all'));

  // Corridor Teleport Buttons
  document.querySelectorAll('[data-fly-corridor]').forEach(btn => {
    btn.addEventListener('click', () => {
      const corridorId = btn.getAttribute('data-fly-corridor');
      flyToCorridor(corridorId);
    });
  });

  // Export CSV Button
  const exportBtn = document.getElementById('btn-export-csv');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportFilteredCSV);
  }

  // Fullscreen Button
  const fsBtn = document.getElementById('btn-fullscreen');
  if (fsBtn) {
    fsBtn.addEventListener('click', toggleFullScreen);
  }

  // Modal Close Button
  const modalClose = document.getElementById('modal-close-btn');
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  const modalBackdrop = document.getElementById('incident-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Table Pagination
  const prevBtn = document.getElementById('table-prev-btn');
  const nextBtn = document.getElementById('table-next-btn');
  if (prevBtn) prevBtn.addEventListener('click', () => changeTablePage(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeTablePage(1));
}

// Switch Basemap Cleanly
function switchBasemap(mode) {
  appState.currentBasemap = mode;
  Object.values(appState.tileLayers).forEach(l => {
    if (appState.map.hasLayer(l)) appState.map.removeLayer(l);
  });

  if (appState.tileLayers[mode]) {
    appState.map.addLayer(appState.tileLayers[mode]);
    // Ensure India boundary stays crisp and above tiles
    if (appState.indiaBoundaryLayer && appState.map.hasLayer(appState.indiaBoundaryLayer)) {
      appState.indiaBoundaryLayer.bringToFront();
    }
  }
}

// ==========================================================================
// APPLE LIQUID GLASS DRAWER CONTROLLERS (VISIONOS / IOS 18 STYLE)
// ==========================================================================
window.openDrawer = function(drawerName) {
  const backdrop = document.getElementById('drawer-backdrop');
  
  ['filters', 'insights', 'logbook'].forEach(d => {
    const el = document.getElementById(`drawer-${d}`);
    const btn = document.getElementById(`btn-toggle-${d}`);
    if (d === drawerName) {
      if (el) {
        if (d === 'filters') el.classList.remove('-translate-x-[110%]');
        else if (d === 'insights') {
          el.classList.remove('translate-x-[110%]');
          updateCharts();
          setTimeout(() => { Object.values(appState.charts).forEach(c => c && c.resize && c.resize()); }, 300);
        }
        else if (d === 'logbook') {
          el.classList.remove('translate-y-[110%]');
          renderTable();
        }
      }
      if (btn) btn.classList.add('liquid-pill-active');
    } else {
      if (el) {
        if (d === 'filters') el.classList.add('-translate-x-[110%]');
        else if (d === 'insights') el.classList.add('translate-x-[110%]');
        else if (d === 'logbook') el.classList.add('translate-y-[110%]');
      }
      if (btn) btn.classList.remove('liquid-pill-active');
    }
  });

  if (backdrop) {
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
  }

  const mapBtn = document.getElementById('btn-mode-map');
  if (mapBtn) mapBtn.classList.remove('liquid-pill-active');
};

window.closeDrawer = function(drawerName) {
  const el = document.getElementById(`drawer-${drawerName}`);
  const btn = document.getElementById(`btn-toggle-${drawerName}`);
  if (el) {
    if (drawerName === 'filters') el.classList.add('-translate-x-[110%]');
    else if (drawerName === 'insights') el.classList.add('translate-x-[110%]');
    else if (drawerName === 'logbook') el.classList.add('translate-y-[110%]');
  }
  if (btn) btn.classList.remove('liquid-pill-active');

  // Check if any drawer is still open
  const anyOpen = ['filters', 'insights', 'logbook'].some(d => {
    const dEl = document.getElementById(`drawer-${d}`);
    if (!dEl) return false;
    if (d === 'filters') return !dEl.classList.contains('-translate-x-[110%]');
    if (d === 'insights') return !dEl.classList.contains('translate-x-[110%]');
    if (d === 'logbook') return !dEl.classList.contains('translate-y-[110%]');
    return false;
  });

  if (!anyOpen) {
    const backdrop = document.getElementById('drawer-backdrop');
    if (backdrop) {
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    }
    const mapBtn = document.getElementById('btn-mode-map');
    if (mapBtn) mapBtn.classList.add('liquid-pill-active');
  }

  setTimeout(() => { if (appState.map) appState.map.invalidateSize(); }, 350);
};

window.closeAllDrawers = function() {
  ['filters', 'insights', 'logbook'].forEach(d => {
    const el = document.getElementById(`drawer-${d}`);
    const btn = document.getElementById(`btn-toggle-${d}`);
    if (el) {
      if (d === 'filters') el.classList.add('-translate-x-[110%]');
      else if (d === 'insights') el.classList.add('translate-x-[110%]');
      else if (d === 'logbook') el.classList.add('translate-y-[110%]');
    }
    if (btn) btn.classList.remove('liquid-pill-active');
  });

  const backdrop = document.getElementById('drawer-backdrop');
  if (backdrop) {
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
  }

  const mapBtn = document.getElementById('btn-mode-map');
  if (mapBtn) mapBtn.classList.add('liquid-pill-active');

  setTimeout(() => { if (appState.map) appState.map.invalidateSize(); }, 350);
};

window.toggleDrawer = function(drawerName) {
  const el = document.getElementById(`drawer-${drawerName}`);
  if (!el) return;
  let isOpen = false;
  if (drawerName === 'filters') isOpen = !el.classList.contains('-translate-x-[110%]');
  else if (drawerName === 'insights') isOpen = !el.classList.contains('translate-x-[110%]');
  else if (drawerName === 'logbook') isOpen = !el.classList.contains('translate-y-[110%]');

  if (isOpen) {
    closeDrawer(drawerName);
  } else {
    openDrawer(drawerName);
  }
};

function switchTab(tabName) {
  if (tabName === 'map') {
    closeAllDrawers();
  } else if (tabName === 'analytics') {
    openDrawer('insights');
  } else if (tabName === 'logbook') {
    openDrawer('logbook');
  }
}

// Leaflet Map Initialization with Ultra-Smooth Physics
function initMap() {
  const mapEl = document.getElementById('map-container');
  if (!mapEl) return;

  // Initialize Map with Ultra-Smooth Hardware Zoom & Kinetic Panning
  appState.map = L.map('map-container', {
    center: [22.0, 78.9],
    zoom: 5,
    minZoom: 4,
    maxZoom: 18,
    zoomControl: false,
    preferCanvas: true,
    zoomSnap: 1, // Integer snap eliminates fractional tile blur & matrix jitter
    zoomDelta: 1, // Full crisp zoom step
    wheelPxPerZoomLevel: 120, // Calibrated wheel scroll velocity for smooth glide
    wheelDebounceTime: 60, // Smooth debounce prevents wheel event queue stutter
    zoomAnimation: true,
    zoomAnimationThreshold: 18, // NEVER disable animation regardless of zoom level jump!
    fadeAnimation: true,
    markerZoomAnimation: true,
    inertia: true,
    inertiaDeceleration: 3000,
    inertiaMaxSpeed: 2000
  });

  // Branded Cautio Micro Bottom Bubble (Clean, compact, no long copyright strings)
  if (appState.map.attributionControl) {
    appState.map.attributionControl.setPrefix(
      '<a href="https://www.cautio.com/" target="_blank" rel="noopener noreferrer" class="cautio-bottom-bubble" title="Cautio Telemetry">' +
      '<img src="cautio-logo.svg?v=4" alt="Cautio" />' +
      '<span>RADAR</span>' +
      '</a>'
    );
  }

  // TILE LAYERS (100% FREE, FAST, UNBLOCKED, ZERO WATERMARKS)
  // 1. Esri High-Definition Streets
  appState.tileLayers.esri_streets = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '',
    maxZoom: 22,
    maxNativeZoom: 16,
    keepBuffer: 6,
    updateWhenZooming: false,
    updateWhenIdle: true
  });

  // 2. Esri World High-Resolution Satellite
  appState.tileLayers.esri_satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '',
    maxZoom: 22,
    maxNativeZoom: 16,
    keepBuffer: 6,
    updateWhenZooming: false,
    updateWhenIdle: true
  });

  // Add Default Basemap (Esri High-Definition Streets - crisp & zero watermarks)
  appState.tileLayers.esri_streets.addTo(appState.map);

  // Official Illuminated India National Geographic Boundary
  if (window.INDIA_GEOJSON) {
    appState.indiaBoundaryLayer = L.geoJSON(window.INDIA_GEOJSON, {
      style: {
        color: '#76C457', // vibrant Cautio leaf green outline
        weight: 3.2,
        opacity: 0.95,
        fillColor: '#2A7C13',
        fillOpacity: 0.05,
        dashArray: null
      }
    }).addTo(appState.map);
  }

  // Focus precisely on India geographical bounds
  appState.map.fitBounds([[8.0, 68.0], [35.5, 97.5]]);

  // Recalibrate dimensions after mount
  setTimeout(() => {
    appState.map.invalidateSize();
    appState.map.fitBounds([[8.0, 68.0], [35.5, 97.5]]);
  }, 100);
  setTimeout(() => {
    appState.map.invalidateSize();
  }, 400);

  // Browser Resize Handler
  window.addEventListener('resize', () => {
    if (appState.map) appState.map.invalidateSize();
  });

  // Heatmap Layer
  appState.heatLayer = L.heatLayer([], {
    radius: appState.heatSettings.radius,
    blur: appState.heatSettings.blur,
    maxZoom: appState.heatSettings.maxZoom,
    minOpacity: appState.heatSettings.minOpacity,
    gradient: {
      0.15: '#76C457',  // Cautio Vivid Leaf Green
      0.35: '#2A7C13',  // Cautio Deep Forest Green
      0.55: '#FFF8CF',  // Cautio Warm Lemon Cream
      0.70: '#FBE6C2',  // Cautio Warm Apricot Sand
      0.85: '#f97316',  // Amber / Orange
      1.00: '#e11d48'   // Critical Collision Rose
    }
  }).addTo(appState.map);

  // 1. Collision Spotlight Pane (z-index 550: Above heat canvas 400, strictly below numbers 650)
  appState.map.createPane('spotlightPane');
  const spotlightPane = appState.map.getPane('spotlightPane');
  if (spotlightPane) {
    spotlightPane.style.zIndex = '550';
    spotlightPane.style.pointerEvents = 'auto';
  }

  // 2. Cluster Numbers Pane (z-index 650: Above collision hot dots so numbers are always on top)
  appState.map.createPane('clusterPane');
  const clusterPane = appState.map.getPane('clusterPane');
  if (clusterPane) {
    clusterPane.style.zIndex = '650';
    clusterPane.style.pointerEvents = 'auto';
  }

  // 3. Hotzone Hub Number Badges Pane (z-index 720: Highest map layer for clean visibility)
  appState.map.createPane('badgePane');
  const badgePane = appState.map.getPane('badgePane');
  if (badgePane) {
    badgePane.style.zIndex = '720';
    badgePane.style.pointerEvents = 'auto';
  }

  // Sleek Clustered Marker Layer with High-Legibility Numbers in clusterPane (z-index 650)
  appState.clusterLayer = L.markerClusterGroup({
    clusterPane: 'clusterPane',
    chunkedLoading: true,
    chunkInterval: 50,
    chunkDelay: 10,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    maxClusterRadius: 85,
    zoomToBoundsOnClick: false, // We control clicking to guarantee 100% responsive "Zone In"
    iconCreateFunction: function (cluster) {
      const count = cluster.getChildCount();
      let colorClass = 'bg-white/95 border-2 border-[#76C457] text-[#2A7C13] shadow-[0_4px_16px_rgba(42,124,19,0.25)]';
      if (count > 500) colorClass = 'bg-rose-50 border-2 border-rose-500 text-rose-700 shadow-[0_4px_16px_rgba(225,29,72,0.25)]';
      else if (count > 150) colorClass = 'bg-amber-50 border-2 border-amber-500 text-amber-800 shadow-[0_4px_16px_rgba(245,158,11,0.25)]';
      else if (count > 40) colorClass = 'bg-[#f0faf0] border-2 border-[#76C457] text-[#1e5a0e] shadow-[0_4px_12px_rgba(118,196,87,0.25)]';

      const displayCount = count > 999 ? (count / 1000).toFixed(1) + 'k' : count;
      const isLarge = displayCount.toString().length >= 4;
      const widthClass = isLarge ? 'min-w-[38px] px-2 h-7 rounded-full' : 'w-7 h-7 rounded-full';
      const size = isLarge ? [38, 28] : [28, 28];
      return L.divIcon({
        html: `<div class="${widthClass} flex items-center justify-center text-[10px] font-mono font-bold shadow-lg border-2 cursor-pointer hover:scale-115 transition-transform leading-none box-border select-none ${colorClass}">${displayCount}</div>`,
        className: 'custom-cluster-icon',
        iconSize: size,
        iconAnchor: [size[0] / 2, size[1] / 2]
      });
    }
  });

  // Cluster Click Handler: Guarantees Smooth "Zone In" + Instant Spiderfy
  appState.clusterLayer.on('clusterclick', function (a) {
    const cluster = a.layer;
    const currentZoom = appState.map.getZoom();
    const maxZoom = appState.map.getMaxZoom();
    const bounds = cluster.getBounds();
    const isPointBounds = bounds.getNorthEast().equals(bounds.getSouthWest());
    const boundsZoom = appState.map.getBoundsZoom(bounds);

    if (!isPointBounds && boundsZoom > currentZoom) {
      appState.map.flyToBounds(bounds, {
        maxZoom: Math.min(boundsZoom, maxZoom),
        duration: 0.55,
        easeLinearity: 0.35
      });
    } else {
      if (currentZoom < 16) {
        appState.map.flyTo(cluster.getLatLng(), Math.min(currentZoom + 3, maxZoom), {
          duration: 0.5,
          easeLinearity: 0.35
        });
      }
      cluster.spiderfy();
    }
  });

  const clusterCheckbox = document.getElementById('toggle-layer-clusters');
  if (!clusterCheckbox || clusterCheckbox.checked) {
    appState.map.addLayer(appState.clusterLayer);
  }

  // Smart Map Click: Zone into closest hotspot when clicked on heatmap areas
  appState.map.on('click', (e) => {
    if (appState.map.getZoom() >= 14) return;
    const clickLat = e.latlng.lat;
    const clickLng = e.latlng.lng;
    let closest = null;
    let minDistSq = Infinity;
    const incidents = appState.filteredIncidents;
    for (let i = 0; i < incidents.length; i++) {
      const inc = incidents[i];
      const dLat = inc.lat - clickLat;
      const dLng = inc.lng - clickLng;
      const d2 = dLat * dLat + dLng * dLng;
      if (d2 < minDistSq) {
        minDistSq = d2;
        closest = inc;
      }
    }

    if (closest && minDistSq < 0.035) {
      appState.map.flyTo([closest.lat, closest.lng], Math.min(appState.map.getZoom() + 3, 14), {
        duration: 0.6,
        easeLinearity: 0.35
      });
    }
  });

  appState.hotzoneLayerGroup = L.layerGroup();
  const zoneCheckbox = document.getElementById('toggle-layer-zones');
  if (!zoneCheckbox || zoneCheckbox.checked) {
    appState.map.addLayer(appState.hotzoneLayerGroup);
  }
  appState.accidentSpotlightLayer = L.layerGroup().addTo(appState.map);

  // Auto-hide high-level hotzone numbers at street zoom levels (>= 9) so street views stay clean
  appState.map.on('zoomend', () => {
    const z = appState.map.getZoom();
    if (appState.hotzoneLayerGroup) {
      if (z >= 9) {
        if (appState.map.hasLayer(appState.hotzoneLayerGroup)) {
          appState.map.removeLayer(appState.hotzoneLayerGroup);
        }
      } else {
        const toggleZones = document.getElementById('toggle-layer-zones');
        if (!toggleZones || toggleZones.checked) {
          if (!appState.map.hasLayer(appState.hotzoneLayerGroup)) {
            appState.map.addLayer(appState.hotzoneLayerGroup);
          }
        }
      }
    }
  });

  renderHotzonePolygons();
}

// Render floating VisionOS Liquid Glass Hotzone Hub Count Badges on Heatmap
function renderHotzonePolygons() {
  if (!appState.hotzoneLayerGroup) return;
  appState.hotzoneLayerGroup.clearLayers();

  const incidents = appState.filteredIncidents || [];
  const counts = {};
  HOTZONE_CORRIDORS.forEach(c => { counts[c.id] = 0; });

  incidents.forEach(inc => {
    if (counts[inc.hotzoneId] !== undefined) {
      counts[inc.hotzoneId]++;
    }
  });

  HOTZONE_CORRIDORS.forEach(corridor => {
    const count = counts[corridor.id] || 0;
    if (count === 0) return;

    const formattedCount = count > 999 ? (count / 1000).toFixed(1) + 'k' : count.toLocaleString();
    const displayName = corridor.shortName || corridor.name.split(' ')[0];

    // Position offset to prevent geographical overlap in close proximity hubs
    let offsetStyle = 'transform: translate(-50%, -50%);';
    if (corridor.id === 'bangalore') {
      offsetStyle = 'transform: translate(-50%, -135%);';
    } else if (corridor.id === 'chennai-krishnagiri') {
      offsetStyle = 'transform: translate(-50%, 35%);';
    }

    const badgeIcon = L.divIcon({
      className: 'custom-hotzone-count-badge',
      html: `
        <div style="${offsetStyle}">
          <div onclick="window.selectBarCorridor('${corridor.id}', '${corridor.name}')" 
               class="hotzone-bubble-pill group" 
               title="${corridor.name}: ${count.toLocaleString()} incident reports">
            <span class="hub-title">${displayName}</span>
            <span class="hub-badge">${formattedCount}</span>
          </div>
        </div>
      `,
      iconSize: null,
      iconAnchor: null
    });

    const marker = L.marker(corridor.center, { 
      icon: badgeIcon,
      pane: 'badgePane',
      zIndexOffset: 1000
    });

    appState.hotzoneLayerGroup.addLayer(marker);
  });
}

// ==========================================================================
// THEMATIC LIQUID GLASS CORRIDOR DROPDOWN CONTROLLER
// ==========================================================================
window.toggleCorridorMenu = function(forceState) {
  const menu = document.getElementById('corridor-dropdown-menu');
  const chevron = document.getElementById('corridor-dropdown-chevron');
  if (!menu) return;

  const isHidden = menu.classList.contains('hidden');
  const shouldOpen = forceState !== undefined ? forceState : isHidden;

  if (shouldOpen) {
    menu.classList.remove('hidden');
    if (chevron) chevron.classList.add('rotate-180');
  } else {
    menu.classList.add('hidden');
    if (chevron) chevron.classList.remove('rotate-180');
  }
};

window.selectBarCorridor = function(corridorId, displayName) {
  // 1. Update top bar pill label
  const labelEl = document.getElementById('corridor-dropdown-label');
  if (labelEl) {
    labelEl.textContent = displayName || 'Freight Corridor';
  }

  // 2. Update hidden input state
  const barSelect = document.getElementById('bar-corridor-select');
  if (barSelect) {
    barSelect.value = corridorId;
  }

  // 3. Synchronize filter drawer select if present
  const hotzoneFilter = document.getElementById('filter-hotzone');
  if (hotzoneFilter && hotzoneFilter.value !== corridorId) {
    hotzoneFilter.value = corridorId;
  }

  // 4. Update active highlight & check icon in custom liquid glass dropdown
  document.querySelectorAll('#corridor-dropdown-menu .corridor-option').forEach(opt => {
    const optId = opt.getAttribute('data-corridor-id');
    const checkIcon = opt.querySelector('.corridor-check-icon');
    if (optId === corridorId) {
      opt.classList.add('active');
      opt.classList.add('text-[#0f290f]');
      opt.classList.remove('text-[#4a6e4a]');
      if (checkIcon) checkIcon.classList.remove('hidden');
    } else {
      opt.classList.remove('active');
      opt.classList.remove('text-[#0f290f]');
      opt.classList.add('text-[#4a6e4a]');
      if (checkIcon) checkIcon.classList.add('hidden');
    }
  });

  // 5. Dismiss dropdown
  window.toggleCorridorMenu(false);

  // 6. Update reactive state & map camera
  appState.filters.hotzone = corridorId;
  applyFilters();
  flyToCorridor(corridorId);

  // 7. Refresh Lucide icons for newly revealed check icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

// Global helper for corridor switching
window.filterByCorridor = function(corridorId) {
  const corridor = HOTZONE_CORRIDORS.find(c => c.id === corridorId);
  const name = corridor ? corridor.name : 'All India Corridors';
  window.selectBarCorridor(corridorId, name);
};

// Smooth Camera Fly-To Corridor (Liquid-Smooth Kinematics)
function flyToCorridor(corridorId) {
  if (!appState.map) return;
  if (corridorId === 'all') {
    const indiaBounds = [[8.0, 68.0], [35.5, 97.5]];
    appState.map.flyToBounds(indiaBounds, {
      duration: 0.85,
      easeLinearity: 0.35,
      noMoveStart: true
    });
    showToast("Focused on National India Grid");
    return;
  }
  const corridor = HOTZONE_CORRIDORS.find(c => c.id === corridorId);
  if (corridor) {
    const zoom = corridor.radiusMeters > 60000 ? 9 : 10;
    appState.map.flyTo(corridor.center, zoom, { duration: 0.8, easeLinearity: 0.35 });
    showToast(`Focused on ${corridor.name}`);
  }
}

// Load Initial Dataset
function loadInitialData() {
  if (window.INITIAL_INCIDENT_DATA && Array.isArray(window.INITIAL_INCIDENT_DATA) && window.INITIAL_INCIDENT_DATA.length > 0) {
    console.log(`Loading prebaked snapshot of ${window.INITIAL_INCIDENT_DATA.length} incidents...`);
    const incidents = [];
    appState.incidentMap.clear();

    window.INITIAL_INCIDENT_DATA.forEach((tuple, idx) => {
      const inc = normalizeTuple(tuple, idx);
      incidents.push(inc);
      appState.incidentMap.set(inc.id, inc);
    });

    appState.rawIncidents = incidents;
    appState.lastSyncTime = new Date();
    populateDropdowns();
    updateTodayBadge();
    applyFilters();
  }

  // AUTO-CONNECT IMMEDIATELY TO GOOGLE SHEETS API ON STARTUP
  syncWithGoogleSheet(false);
}

// Live Telemetry Synchronization Engine
// Dual mode:
// 1. Vercel Serverless Proxy (/api/sync) - Completely masks Google Sheets from client network tab
// 2. Encrypted stream fallback - Dynamic in-memory stream resolution
async function syncWithGoogleSheet(isManual = false) {
  if (appState.isSyncing) return;
  appState.isSyncing = true;

  const syncIcon = document.getElementById('sync-icon');
  if (syncIcon) syncIcon.classList.add('animate-spin');

  updateLiveSyncBadge("Syncing...", "amber");

  // Attempt 1: Fetch via serverless proxy (/api/sync)
  try {
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeoutId = controller ? setTimeout(() => controller.abort(), 6000) : null;
    const res = await fetch('/api/sync', { signal: controller ? controller.signal : undefined });
    if (timeoutId) clearTimeout(timeoutId);

    if (res && res.ok) {
      const data = await res.json();
      if (data && data.table && Array.isArray(data.table.rows)) {
        processGVizData(data, isManual);
        return;
      }
    }
  } catch (e) {
    // /api/sync unavailable (e.g. running on local static server) -> seamlessly fall back
  }

  // Attempt 2: Fallback to dynamic encrypted stream
  syncViaEncryptedStream(isManual);
}

// Encrypted Stream Sync (Zero plain-text URLs in source code, connects dynamically)
function syncViaEncryptedStream(isManual) {
  const callbackName = 'onTelemetryStreamCallback_' + Date.now();

  window[callbackName] = function (data) {
    cleanup();
    processGVizData(data, isManual);
  };

  const script = document.createElement('script');
  script.id = 'telemetry-stream-script';
  script.src = _resolveEncryptedStreamUrl(callbackName);

  script.onerror = function () {
    cleanup();
    appState.isSyncing = false;
    const syncIcon = document.getElementById('sync-icon');
    if (syncIcon) syncIcon.classList.remove('animate-spin');
    updateLiveSyncBadge("Retrying...", "amber");
    if (isManual) showToast("Telemetry sync busy. Cached snapshot active.", "warning");
  };

  function cleanup() {
    delete window[callbackName];
    const el = document.getElementById('telemetry-stream-script');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  document.body.appendChild(script);
}

// Process GViz Text (Fallback compatibility)
function processGVizResponse(text, isManual) {
  try {
    const jsonStr = text.replace(/^[^{]*\(/, '').replace(/\);?\s*$/, '');
    const data = JSON.parse(jsonStr);
    processGVizData(data, isManual);
  } catch (e) {
    console.error("Failed to parse GViz JSON text:", e);
    syncViaEncryptedStream(isManual);
  }
}

// Process Parsed GViz Data
function processGVizData(data, isManual) {
  appState.isSyncing = false;
  const syncIcon = document.getElementById('sync-icon');
  if (syncIcon) syncIcon.classList.remove('animate-spin');

  if (!data || !data.table || !data.table.rows) {
    console.error("Invalid GViz payload structure:", data);
    updateLiveSyncBadge("Offline", "rose");
    return;
  }

  const rows = data.table.rows;
  const incomingIncidents = [];
  let newCount = 0;

  rows.forEach((row, idx) => {
    if (!row || !row.c) return;
    const c1 = row.c[1] ? row.c[1].v : null;
    const c2 = row.c[2] ? row.c[2].v : null;
    const c3 = row.c[3] ? row.c[3].v : null;
    if (!c1 && !c2 && !c3) return;
    const inc = parseGVizRow(row.c, idx);
    incomingIncidents.push(inc);
    if (!appState.incidentMap.has(inc.id)) {
      newCount++;
    }
  });

  appState.rawIncidents = incomingIncidents;
  appState.incidentMap.clear();
  incomingIncidents.forEach(inc => appState.incidentMap.set(inc.id, inc));

  appState.lastSyncTime = new Date();
  updateLiveSyncBadge("Live Connected", "emerald");
  populateDropdowns();
  updateTodayBadge();
  applyFilters();

  if (newCount > 0) {
    showToast(`Live Connected: ${newCount} new incident reports synced (${incomingIncidents.length.toLocaleString()} total)`, "success");
  } else {
    showToast(`Live Connected: Google Sheets synchronized (${incomingIncidents.length.toLocaleString()} incidents)`, "success");
  }
}

// Update Header Live Sync Badge (Stable compact indicator, zero layout shifts)
function updateLiveSyncBadge(text, color) {
  const badge = document.getElementById('live-sync-badge');
  const iconContainer = document.getElementById('live-sync-icon-container');
  const container = document.getElementById('live-status-container');

  if (badge) {
    badge.textContent = text;
  }

  if (container && appState.rawIncidents) {
    container.title = `Google Sheets Sync: ${text} (${appState.rawIncidents.length.toLocaleString()} incidents active)`;
  }

  if (iconContainer) {
    if (color === 'amber' || color === 'cyan') {
      iconContainer.innerHTML = '<i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-amber-600 animate-spin"></i>';
    } else if (color === 'rose') {
      iconContainer.innerHTML = '<i data-lucide="wifi-off" class="w-3.5 h-3.5 text-rose-600"></i>';
    } else {
      iconContainer.innerHTML = '<i data-lucide="wifi" class="w-3.5 h-3.5 text-[#2A7C13]"></i>';
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

// Severity Filter Buttons Dynamic Styler (Guarantees zero contrast clash)
function updateSeverityFilterPills(activeVal) {
  const configs = {
    'all': {
      active: 'bg-[#2A7C13] text-white border-2 border-[#76C457] shadow-sm',
      inactive: 'bg-slate-100 hover:bg-slate-200 text-[#143814] border-2 border-slate-200'
    },
    '4': {
      active: 'bg-rose-600 text-white border-2 border-rose-400 shadow-sm',
      inactive: 'bg-rose-50 hover:bg-rose-100 text-rose-800 border-2 border-rose-300'
    },
    '3': {
      active: 'bg-amber-600 text-white border-2 border-amber-400 shadow-sm',
      inactive: 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-2 border-amber-300'
    },
    '2': {
      active: 'bg-emerald-600 text-white border-2 border-emerald-400 shadow-sm',
      inactive: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-2 border-emerald-300'
    }
  };

  document.querySelectorAll('[data-sev-pill]').forEach(pill => {
    const val = pill.getAttribute('data-sev-pill');
    const cfg = configs[val] || configs['all'];
    const baseClass = 'px-2.5 py-1.5 rounded-xl text-[11px] font-semibold text-left transition shadow-xs';
    pill.className = `${baseClass} ${val === activeVal ? cfg.active : cfg.inactive}`;
  });
}

// Setup Periodic Auto-Sync Timer
function setupAutoSync() {
  if (appState.autoSyncTimer) {
    clearInterval(appState.autoSyncTimer);
    appState.autoSyncTimer = null;
  }
  if (appState.autoSyncInterval > 0) {
    appState.autoSyncTimer = setInterval(() => {
      syncWithGoogleSheet(false);
    }, appState.autoSyncInterval);
  }
}

// Populate Dropdown Menus
function populateDropdowns() {
  const clientSet = new Set();
  const subRequestSet = new Set();

  appState.rawIncidents.forEach(inc => {
    if (inc.client && inc.client !== 'Unknown Fleet') clientSet.add(inc.client);
    if (inc.subRequest) subRequestSet.add(inc.subRequest);
  });

  const clientSelect = document.getElementById('filter-client');
  if (clientSelect) {
    const cur = clientSelect.value;
    const sortedClients = Array.from(clientSet).sort();
    clientSelect.innerHTML = '<option value="all">All Fleets & Clients</option>';
    sortedClients.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      clientSelect.appendChild(opt);
    });
    clientSelect.value = cur || 'all';
  }

  const subSelect = document.getElementById('filter-subrequest');
  if (subSelect) {
    const cur = subSelect.value;
    const sortedSubs = Array.from(subRequestSet).sort();
    subSelect.innerHTML = '<option value="all">All Issue Categories</option>';
    sortedSubs.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      subSelect.appendChild(opt);
    });
    subSelect.value = cur || 'all';
  }
}

// ==========================================================================
// TODAY'S ENTRIES ENGINE & TIMESTAMP PARSER
// ==========================================================================
function parseIncidentDate(dateStr) {
  if (!dateStr) return null;
  const str = String(dateStr).trim();

  // 1. Google Sheets GViz Date(year, month, day, [hr, min, sec])
  // Matches Date(2026,7,6) or Date(2026,7,6,14,39,26)
  const gvizMatch = str.match(/Date\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+),\s*(\d+),\s*(\d+))?/i);
  if (gvizMatch) {
    const y = parseInt(gvizMatch[1], 10);
    const m = parseInt(gvizMatch[2], 10); // GViz month is 0-indexed
    const d = parseInt(gvizMatch[3], 10);
    const hr = gvizMatch[4] ? parseInt(gvizMatch[4], 10) : 0;
    const min = gvizMatch[5] ? parseInt(gvizMatch[5], 10) : 0;
    const sec = gvizMatch[6] ? parseInt(gvizMatch[6], 10) : 0;
    return new Date(y, m, d, hr, min, sec);
  }

  // 2. DD/MM/YYYY or DD-MM-YYYY (optionally with time)
  const ddmmyyyy = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
  if (ddmmyyyy) {
    const d = parseInt(ddmmyyyy[1], 10);
    const m = parseInt(ddmmyyyy[2], 10) - 1; // 0-indexed month
    const y = parseInt(ddmmyyyy[3], 10);
    const hr = ddmmyyyy[4] ? parseInt(ddmmyyyy[4], 10) : 0;
    const min = ddmmyyyy[5] ? parseInt(ddmmyyyy[5], 10) : 0;
    const sec = ddmmyyyy[6] ? parseInt(ddmmyyyy[6], 10) : 0;
    return new Date(y, m, d, hr, min, sec);
  }

  // 3. YYYY-MM-DD (optionally with time)
  const yyyymmdd = str.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
  if (yyyymmdd) {
    const y = parseInt(yyyymmdd[1], 10);
    const m = parseInt(yyyymmdd[2], 10) - 1;
    const d = parseInt(yyyymmdd[3], 10);
    const hr = yyyymmdd[4] ? parseInt(yyyymmdd[4], 10) : 0;
    const min = yyyymmdd[5] ? parseInt(yyyymmdd[5], 10) : 0;
    const sec = yyyymmdd[6] ? parseInt(yyyymmdd[6], 10) : 0;
    return new Date(y, m, d, hr, min, sec);
  }

  const parsed = new Date(str);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function formatDisplayDate(dateStr) {
  const dateObj = parseIncidentDate(dateStr);
  if (!dateObj) return dateStr || 'N/A'; // Fallback to raw if unparseable
  
  return dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) + ' • ' + dateObj.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

function isIncidentToday(dateStr) {
  if (!dateStr) return false;
  const incDate = parseIncidentDate(dateStr);
  if (!incDate) return false;
  const today = new Date();
  return (
    incDate.getFullYear() === today.getFullYear() &&
    incDate.getMonth() === today.getMonth() &&
    incDate.getDate() === today.getDate()
  );
}

function countTodayIncidents() {
  return appState.rawIncidents.filter(inc => isIncidentToday(inc.raisedAt)).length;
}

function updateTodayBadge() {
  const count = countTodayIncidents();
  const headerBadge = document.getElementById('badge-today-count');
  const drawerBadge = document.getElementById('drawer-today-count');
  if (headerBadge) headerBadge.textContent = count.toLocaleString();
  if (drawerBadge) drawerBadge.textContent = count.toLocaleString();
}

window.toggleTodayFilter = function(forceState) {
  if (forceState !== undefined) {
    appState.filters.todayOnly = Boolean(forceState);
  } else {
    appState.filters.todayOnly = !appState.filters.todayOnly;
  }

  // Synchronize button styling
  const btn = document.getElementById('btn-toggle-today');
  const drawerCheckbox = document.getElementById('toggle-filter-today');

  if (btn) {
    if (appState.filters.todayOnly) {
      btn.classList.add('liquid-pill-active');
    } else {
      btn.classList.remove('liquid-pill-active');
    }
  }

  if (drawerCheckbox) {
    drawerCheckbox.checked = appState.filters.todayOnly;
  }

  applyFilters();

  if (appState.filters.todayOnly) {
    const count = appState.filteredIncidents.length;
    if (count > 0) {
      showToast(`Filtered: Showing ${count.toLocaleString()} incident reports logged today`, "success");
    } else {
      showToast("No new incident reports logged for today yet. Displaying all live data.");
    }
  } else {
    showToast("Displaying all commercial fleet incidents across India");
  }
};

// Reset Filters
function resetFilters() {
  appState.filters = {
    search: '',
    severity: 'all',
    hotzone: 'all',
    client: 'all',
    resolved: 'all',
    year: 'all',
    subRequest: 'all',
    todayOnly: false
  };

  const searchEl = document.getElementById('filter-search');
  if (searchEl) searchEl.value = '';

  const dropdowns = ['filter-client', 'filter-resolved', 'filter-subrequest'];
  dropdowns.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = 'all';
  });

  window.selectBarCorridor('all', 'All India Corridors');

  const todayBtn = document.getElementById('btn-toggle-today');
  if (todayBtn) {
    todayBtn.classList.remove('liquid-pill-active', 'ring-2', 'ring-[#76C457]', 'bg-[#2A7C13]', 'text-white');
    todayBtn.classList.add('text-[#143814]');
  }
  const todayToggle = document.getElementById('toggle-filter-today');
  if (todayToggle) todayToggle.checked = false;

  updateSeverityFilterPills('all');

  applyFilters();
  flyToCorridor('all');
  showToast("Filters reset to full national view");
}

// Filter Engine & Reactive Update
function applyFilters() {
  const f = appState.filters;

  const filtered = appState.rawIncidents.filter(inc => {
    if (f.todayOnly && !isIncidentToday(inc.raisedAt)) {
      return false;
    }

    if (f.search) {
      const q = f.search;
      const match = inc.id.toLowerCase().includes(q) ||
                    inc.vehicle.toLowerCase().includes(q) ||
                    inc.client.toLowerCase().includes(q) ||
                    inc.location.toLowerCase().includes(q) ||
                    inc.details.toLowerCase().includes(q) ||
                    inc.remarks.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (f.severity !== 'all') {
      const targetSev = parseInt(f.severity, 10);
      if (inc.severity !== targetSev) return false;
    }

    if (f.hotzone !== 'all') {
      if (inc.hotzoneId !== f.hotzone) return false;
    }

    if (f.client !== 'all') {
      if (inc.client !== f.client) return false;
    }

    if (f.subRequest !== 'all') {
      if (inc.subRequest !== f.subRequest) return false;
    }

    if (f.resolved !== 'all') {
      if (inc.resolved !== f.resolved) return false;
    }

    return true;
  });

  appState.filteredIncidents = filtered;

  updateKPICards();
  updateHeatmapLayer();
  updateClusterMarkers();
  updateAccidentSpotlight();
  renderHotzonePolygons();
  updateCharts();
  renderTable();
  updateTodayBadge();

  // Active filter badge
  let count = 0;
  if (f.todayOnly) count++;
  if (f.search) count++;
  if (f.severity !== 'all') count++;
  if (f.hotzone !== 'all') count++;
  if (f.client !== 'all') count++;
  if (f.resolved !== 'all') count++;
  if (f.subRequest !== 'all') count++;

  const badgeEl = document.getElementById('active-filter-badge');
  if (badgeEl) {
    if (count > 0) {
      badgeEl.textContent = `${count}`;
      badgeEl.classList.remove('hidden');
    } else {
      badgeEl.classList.add('hidden');
    }
  }
}

// Update Top KPI Scorecards
function updateKPICards() {
  const total = appState.rawIncidents.length;
  const current = appState.filteredIncidents.length;

  let accidents = 0;
  let resolvedCount = 0;
  const uniqueVehicles = new Set();
  const uniqueClients = new Set();
  const hotzoneCounts = {};

  appState.filteredIncidents.forEach(inc => {
    if (inc.severity === 4) accidents++;
    if (inc.resolved === 'Yes') resolvedCount++;
    if (inc.vehicle && inc.vehicle !== 'Unknown Plate') uniqueVehicles.add(inc.vehicle);
    if (inc.client && inc.client !== 'Unknown Fleet') uniqueClients.add(inc.client);
    hotzoneCounts[inc.hotzoneId] = (hotzoneCounts[inc.hotzoneId] || 0) + 1;
  });

  const resRate = current > 0 ? ((resolvedCount / current) * 100).toFixed(1) : 0;
  const activeZones = Object.keys(hotzoneCounts).filter(k => k !== 'other').length;

  animateCounter('kpi-total-incidents', current);
  animateCounter('kpi-critical-accidents', accidents);
  animateCounter('kpi-active-hotzones', activeZones);
  animateCounter('kpi-vehicles-impacted', uniqueVehicles.size);
  animateCounter('kpi-resolution-rate', resRate, '%');
  animateCounter('kpi-active-clients', uniqueClients.size);

  const barCountEl = document.getElementById('bar-incident-count');
  if (barCountEl) {
    barCountEl.textContent = current.toLocaleString();
  }

  const subTotal = document.getElementById('kpi-total-subtext');
  if (subTotal) {
    subTotal.textContent = current === total ? `Full Fleet Telemetry (${total.toLocaleString()} total)` : `Filtered: ${current.toLocaleString()} of ${total.toLocaleString()}`;
  }
}

// Smooth Number Counter Animation
function animateCounter(id, target, suffix = '') {
  const el = document.getElementById(id);
  if (!el) return;
  const targetNum = typeof target === 'number' ? target : parseFloat(target);
  if (isNaN(targetNum)) {
    el.textContent = target + suffix;
    return;
  }
  el.textContent = Math.round(targetNum).toLocaleString() + suffix;
}

// Update Heatmap Points & Weights
function updateHeatmapLayer() {
  if (!appState.heatLayer) return;

  const isWeighted = appState.heatSettings.mode === 'weighted';
  const points = [];

  appState.filteredIncidents.forEach(inc => {
    let weight = 1.0;
    if (isWeighted) {
      if (inc.severity === 4) weight = 5.0;
      else if (inc.severity === 3) weight = 3.0;
      else if (inc.severity === 2) weight = 1.5;
      else weight = 0.6;
    }
    points.push([inc.lat, inc.lng, weight]);
  });

  appState.heatLayer.setLatLngs(points);
  appState.heatLayer.setOptions({
    radius: appState.heatSettings.radius,
    blur: appState.heatSettings.blur,
    minOpacity: appState.heatSettings.minOpacity
  });
}

// Zone In to Coordinates on Map
window.zoneInToCoordinates = function(lat, lng) {
  if (!appState.map) return;
  const currentZoom = appState.map.getZoom();
  const targetZoom = Math.min(Math.max(currentZoom + 3, 15), 18);
  appState.map.flyTo([lat, lng], targetZoom, {
    duration: 0.65,
    easeLinearity: 0.35
  });
};

// Update Marker Cluster Layer
function updateClusterMarkers() {
  if (!appState.clusterLayer) return;
  appState.clusterLayer.clearLayers();

  // Render all active incidents with chunked loading for seamless 60fps clustering
  const dataToRender = appState.filteredIncidents;
  const markers = [];

  dataToRender.forEach(inc => {
    let pinColor = '#2A7C13';
    let pinBorder = '#76C457';
    let dotHtml = '<div class="w-1 h-1 rounded-full bg-white"></div>';

    if (inc.severity === 4) {
      pinColor = '#be123c';
      pinBorder = '#ffffff';
      dotHtml = '<div class="w-1 h-1 rounded-full bg-white"></div>';
    } else if (inc.severity === 3) {
      pinColor = '#c2410c';
      pinBorder = '#fed7aa';
      dotHtml = '<div class="w-1 h-1 rounded-full bg-amber-200"></div>';
    } else if (inc.severity === 2) {
      pinColor = '#2A7C13';
      pinBorder = '#76C457';
      dotHtml = '<div class="w-1 h-1 rounded-full bg-[#76C457]"></div>';
    }

    const icon = L.divIcon({
      className: 'custom-vehicle-pin',
      html: `
        <div class="relative group cursor-pointer transform hover:scale-125 transition-transform duration-200" title="${inc.vehicle} - ${getSeverityLabel(inc.severity)}">
          <div class="w-3 h-3 rounded-full flex items-center justify-center shadow-md border" style="background-color: ${pinColor}; border-color: ${pinBorder}">
            ${dotHtml}
          </div>
        </div>
      `,
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });

    const marker = L.marker([inc.lat, inc.lng], { icon });

    const popupHtml = `
      <div class="p-4 bg-white/95 backdrop-blur-xl text-[#0f290f] rounded-2xl shadow-[0_12px_36px_rgba(42,124,19,0.18),0_4px_12px_rgba(0,0,0,0.06)] border-2 border-[#76C457]/60 min-w-[290px] max-w-[340px]">
        <div class="flex items-center justify-between border-b border-[#76C457]/30 pb-2 mb-2">
          <span class="font-mono font-bold text-xs text-white bg-[#2A7C13] px-2.5 py-0.5 rounded-lg border border-[#76C457]/60 shadow-sm">${inc.id}</span>
          <span class="px-2.5 py-0.5 text-[10px] font-semibold rounded-full ${getSeverityBadgeClasses(inc.severity)}">
            ${getSeverityLabel(inc.severity)}
          </span>
        </div>
        <div class="text-xs font-bold text-[#0f290f] mb-1 flex items-center gap-1.5">
          <span class="tracking-wide font-mono">${inc.vehicle}</span>
          <span class="text-[#2d522d] text-[11px] font-semibold">(${inc.client})</span>
        </div>
        <div class="text-[11px] text-[#2d522d] mb-1.5 font-medium">
          <span class="text-[#5a805a]">Category:</span> ${inc.subRequest}
        </div>
        <div class="text-xs text-[#0f290f] bg-[#f2faf0] p-2.5 rounded-xl border border-[#76C457]/30 mb-2.5 line-clamp-3 leading-relaxed font-normal">
          ${inc.details || 'No additional issue description recorded.'}
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#5a805a] mb-3">
          <span>${inc.location}</span>
          <span class="${inc.resolved === 'Yes' ? 'text-[#2A7C13] font-bold' : 'text-rose-600 font-bold'}">
            ${inc.resolved === 'Yes' ? 'Resolved' : 'Pending'}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-1">
          <button onclick="window.zoneInToCoordinates(${inc.lat}, ${inc.lng})" class="py-2 px-2.5 rounded-xl bg-[#eaf7e8] hover:bg-[#d8f0d5] text-[#2A7C13] border border-[#76C457]/60 text-xs font-semibold transition shadow-sm flex items-center justify-center gap-1">
            <span>Zone In</span>
          </button>
          <button onclick="window.inspectIncident('${inc.id}')" class="py-2 px-2.5 rounded-xl bg-[#2A7C13] hover:bg-[#226610] text-white text-xs font-semibold transition shadow-md shadow-[#2A7C13]/25 border border-[#76C457]/60 flex items-center justify-center gap-1">
            <span>Inspect</span>
          </button>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml);
    markers.push(marker);
  });

  appState.clusterLayer.addLayers(markers);
}

// Update Accident Spotlight Layer (Guaranteed High-Priority Interactive Collision Dots)
function updateAccidentSpotlight() {
  if (!appState.accidentSpotlightLayer) return;
  appState.accidentSpotlightLayer.clearLayers();

  const accidents = appState.filteredIncidents.filter(i => i.severity === 4);
  accidents.forEach(acc => {
    // Subtle outer radar aura (small 12px diameter)
    const auraMarker = L.circleMarker([acc.lat, acc.lng], {
      pane: 'spotlightPane',
      radius: 6,
      color: '#f43f5e',
      fillColor: '#f43f5e',
      fillOpacity: 0.25,
      weight: 1,
      interactive: true
    });

    // Core crisp pinpoint red collision dot (7px diameter)
    const pulseMarker = L.circleMarker([acc.lat, acc.lng], {
      pane: 'spotlightPane',
      radius: 3.5,
      color: '#ffffff',
      fillColor: '#be123c',
      fillOpacity: 1.0,
      weight: 1.5,
      interactive: true
    });

    const popupHtml = `
      <div class="p-4 bg-white/95 backdrop-blur-xl text-[#0f290f] rounded-2xl shadow-[0_12px_36px_rgba(225,29,72,0.18),0_4px_12px_rgba(0,0,0,0.06)] border-2 border-rose-400/80 min-w-[290px] max-w-[340px]">
        <div class="flex items-center justify-between border-b border-rose-200 pb-2 mb-2">
          <div class="flex items-center gap-1.5">
            <i data-lucide="flame" class="w-3.5 h-3.5 text-rose-600 flex-shrink-0"></i>
            <span class="font-mono font-bold text-xs text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-lg border-2 border-rose-300 shadow-sm">${acc.id}</span>
          </div>
          <span class="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-rose-100 text-rose-800 border-2 border-rose-300">
            Critical Collision
          </span>
        </div>
        <div class="text-xs font-bold text-[#0f290f] mb-1 flex items-center gap-1.5 font-mono">
          <span class="text-sm font-bold text-[#0f290f]">${acc.vehicle}</span>
          <span class="text-[#2d522d] font-sans font-semibold">(${acc.client})</span>
        </div>
        <div class="text-[11px] text-[#2d522d] mb-1.5 font-medium">
          <span class="text-[#5a805a]">Location:</span> ${acc.location}
        </div>
        <div class="text-xs text-[#0f290f] bg-rose-50/50 p-2.5 rounded-xl border border-rose-200 mb-2.5 line-clamp-3 leading-relaxed font-normal">
          ${acc.details || acc.subRequest || 'Critical accident impact telemetry detected.'}
        </div>
        <div class="flex items-center justify-between text-[11px] text-[#5a805a] mb-3">
          <span>${acc.raisedAt ? formatDisplayDate(acc.raisedAt) : 'Live Telemetry'}</span>
          <span class="${acc.resolved === 'Yes' ? 'text-[#2A7C13] font-semibold' : 'text-rose-600 font-semibold'}">
            ${acc.resolved === 'Yes' ? 'Resolved' : 'Action Required'}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button onclick="window.zoneInToCoordinates(${acc.lat}, ${acc.lng})" class="py-2 px-3 rounded-xl bg-[#eaf7e8] hover:bg-[#d8f0d5] text-[#2A7C13] border border-[#76C457]/60 text-xs font-semibold transition shadow-sm flex items-center justify-center gap-1">
            <span>Zone In</span>
          </button>
          <button onclick="window.inspectIncident('${acc.id}')" class="py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition shadow-md shadow-rose-600/30 border border-rose-400/60 flex items-center justify-center gap-1">
            <span>Inspect</span>
          </button>
        </div>
      </div>
    `;

    pulseMarker.bindTooltip(`Critical Collision: ${acc.vehicle} (${acc.location})`, {
      direction: 'top',
      offset: [0, -10]
    });

    pulseMarker.bindPopup(popupHtml, { autoPan: true, closeButton: true, offset: [0, -6] });
    auraMarker.bindPopup(popupHtml, { autoPan: true, closeButton: true, offset: [0, -6] });

    const handleDotClick = function(e) {
      if (e && e.originalEvent) {
        L.DomEvent.stopPropagation(e);
      }
      window.zoneInToCoordinates(acc.lat, acc.lng);
      pulseMarker.openPopup();
    };

    pulseMarker.on('click', handleDotClick);
    auraMarker.on('click', handleDotClick);

    appState.accidentSpotlightLayer.addLayer(auraMarker);
    appState.accidentSpotlightLayer.addLayer(pulseMarker);
  });
}

// Analytical Visualizations (Chart.js)
function initCharts() {
  const ctxHotzones = document.getElementById('chart-hotzones');
  if (ctxHotzones) {
    appState.charts.hotzones = new Chart(ctxHotzones, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Total Incidents',
            data: [],
            backgroundColor: '#2A7C13',
            borderRadius: 6
          },
          {
            label: 'Accidents & Collisions',
            data: [],
            backgroundColor: '#e11d48',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#0f290f', font: { size: 11, weight: 'bold' } } },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { ticks: { color: '#3d653d', font: { size: 10, weight: 'bold' } }, grid: { color: 'rgba(118, 196, 87, 0.15)' } },
          y: { ticks: { color: '#3d653d', font: { size: 10, weight: 'bold' } }, grid: { color: 'rgba(118, 196, 87, 0.15)' } }
        }
      }
    });
  }

  const ctxCategories = document.getElementById('chart-categories');
  if (ctxCategories) {
    appState.charts.categories = new Chart(ctxCategories, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: ['#2A7C13', '#76C457', '#93DA77', '#C4F0B0', '#1b5e0c', '#3d9e23', '#d97706', '#0f290f'],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: '#0f290f', font: { size: 11, weight: '600' }, boxWidth: 12 } }
        },
        cutout: '65%'
      }
    });
  }

  const ctxTimeline = document.getElementById('chart-timeline');
  if (ctxTimeline) {
    appState.charts.timeline = new Chart(ctxTimeline, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Incident Velocity',
          data: [],
          borderColor: '#2A7C13',
          backgroundColor: 'rgba(118, 196, 87, 0.18)',
          fill: true,
          tension: 0.35,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBackgroundColor: '#2A7C13'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { color: '#3d653d', font: { size: 10, weight: 'bold' } }, grid: { color: 'rgba(118, 196, 87, 0.15)' } },
          y: { ticks: { color: '#3d653d', font: { size: 10, weight: 'bold' } }, grid: { color: 'rgba(118, 196, 87, 0.15)' } }
        }
      }
    });
  }

  const ctxClients = document.getElementById('chart-clients');
  if (ctxClients) {
    appState.charts.clients = new Chart(ctxClients, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Incident Load',
          data: [],
          backgroundColor: '#76C457',
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { ticks: { color: '#3d653d', font: { size: 10, weight: 'bold' } }, grid: { color: 'rgba(118, 196, 87, 0.15)' } },
          y: { ticks: { color: '#3d653d', font: { size: 10, weight: 'bold' } }, grid: { color: 'rgba(118, 196, 87, 0.15)' } }
        }
      }
    });
  }

  const ctxResolution = document.getElementById('chart-resolution');
  if (ctxResolution) {
    appState.charts.resolution = new Chart(ctxResolution, {
      type: 'doughnut',
      data: {
        labels: ['Resolved', 'Pending Action'],
        datasets: [{
          data: [0, 0],
          backgroundColor: ['#76C457', '#e11d48'],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#0f290f', font: { size: 11, weight: 'bold' } } }
        },
        cutout: '70%'
      }
    });
  }
}

// Update Chart Data on Filter Changes
function updateCharts() {
  if (!appState.charts.hotzones) return;

  const zoneMap = {};
  HOTZONE_CORRIDORS.forEach(z => {
    zoneMap[z.id] = { name: z.name.replace(' Logistics Belt', '').replace(' Expressway Belt', '').replace(' Gateway', ''), total: 0, accidents: 0 };
  });

  appState.filteredIncidents.forEach(inc => {
    if (zoneMap[inc.hotzoneId]) {
      zoneMap[inc.hotzoneId].total++;
      if (inc.severity === 4) zoneMap[inc.hotzoneId].accidents++;
    }
  });

  const sortedZones = Object.values(zoneMap).sort((a, b) => b.total - a.total);
  appState.charts.hotzones.data.labels = sortedZones.map(z => z.name);
  appState.charts.hotzones.data.datasets[0].data = sortedZones.map(z => z.total);
  appState.charts.hotzones.data.datasets[1].data = sortedZones.map(z => z.accidents);
  appState.charts.hotzones.update();

  const catMap = {};
  appState.filteredIncidents.forEach(inc => {
    const sr = inc.subRequest || 'Other';
    catMap[sr] = (catMap[sr] || 0) + 1;
  });
  const topCats = Object.entries(catMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
  appState.charts.categories.data.labels = topCats.map(c => c[0]);
  appState.charts.categories.data.datasets[0].data = topCats.map(c => c[1]);
  appState.charts.categories.update();

  const timeMap = {};
  appState.filteredIncidents.forEach(inc => {
    if (inc.year && inc.month) {
      const key = `${inc.month.substring(0, 3)} '${inc.year.substring(2)}`;
      timeMap[key] = (timeMap[key] || 0) + 1;
    }
  });
  const timeKeys = Object.keys(timeMap);
  appState.charts.timeline.data.labels = timeKeys;
  appState.charts.timeline.data.datasets[0].data = timeKeys.map(k => timeMap[k]);
  appState.charts.timeline.update();

  const clientMap = {};
  appState.filteredIncidents.forEach(inc => {
    if (inc.client && inc.client !== 'Unknown Fleet') {
      clientMap[inc.client] = (clientMap[inc.client] || 0) + 1;
    }
  });
  const topClients = Object.entries(clientMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
  appState.charts.clients.data.labels = topClients.map(c => c[0]);
  appState.charts.clients.data.datasets[0].data = topClients.map(c => c[1]);
  appState.charts.clients.update();

  let resolved = 0, pending = 0;
  appState.filteredIncidents.forEach(inc => {
    if (inc.resolved === 'Yes') resolved++;
    else pending++;
  });
  appState.charts.resolution.data.datasets[0].data = [resolved, pending];
  appState.charts.resolution.update();
}

// Render Incident Explorer Table
function renderTable() {
  const tbody = document.getElementById('table-body');
  if (!tbody) return;

  const total = appState.filteredIncidents.length;
  const start = (appState.tablePage - 1) * appState.pageSize;
  const end = Math.min(start + appState.pageSize, total);
  const pagedData = appState.filteredIncidents.slice(start, end);

  tbody.innerHTML = '';

  if (pagedData.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-14 text-[#5a805a]">
          <div class="w-10 h-10 rounded-full bg-[#eaf7e8] text-[#2A7C13] border-2 border-[#76C457]/50 flex items-center justify-center mx-auto mb-3 font-mono font-bold text-sm">--</div>
          <div class="font-bold text-[#0f290f] text-sm">No incidents match the active filters</div>
          <div class="text-xs text-[#5a805a] mt-1">Try broadening your search query or reset filters</div>
        </td>
      </tr>
    `;
    updateTablePagination(0, 0, 0);
    return;
  }

  pagedData.forEach(inc => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-[#f0faf0] border-b border-[#76C457]/20 transition cursor-pointer text-[#0f290f] font-medium';

    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-bold text-xs"><span class="bg-[#2A7C13] text-white px-2 py-0.5 rounded-lg border border-[#76C457]/50 shadow-sm">${inc.id}</span></td>
      <td class="py-3 px-4 text-xs font-bold text-[#0f290f] font-mono tracking-wide">
        ${inc.vehicle}
      </td>
      <td class="py-3 px-4 text-xs text-[#2d522d] font-semibold">${inc.client}</td>
      <td class="py-3 px-4 text-xs text-[#5a805a]">${inc.location}</td>
      <td class="py-3 px-4 text-xs">
        <span class="px-2.5 py-0.5 text-[10px] font-bold rounded-full ${getSeverityBadgeClasses(inc.severity)}">
          ${getSeverityLabel(inc.severity)}
        </span>
      </td>
      <td class="py-3 px-4 text-xs text-[#0f290f] truncate max-w-[200px] font-medium">${inc.subRequest}</td>
      <td class="py-3 px-4 text-xs">
        <span class="${inc.resolved === 'Yes' ? 'text-[#2A7C13] font-semibold' : 'text-rose-600 font-semibold'}">
          ${inc.resolved === 'Yes' ? 'Resolved' : 'Pending'}
        </span>
      </td>
      <td class="py-3 px-4 text-xs text-right space-x-2 whitespace-nowrap">
        <button onclick="window.locateOnMap('${inc.id}')" title="Locate on Map" class="px-2.5 py-1 bg-[#eaf7e8] hover:bg-[#d8f0d5] text-[#2A7C13] rounded-lg border border-[#76C457]/50 transition font-semibold shadow-sm">
          Locate
        </button>
        <button onclick="window.inspectIncident('${inc.id}')" title="View Details" class="px-3 py-1 bg-[#2A7C13] hover:bg-[#226610] text-white rounded-lg transition font-semibold shadow-sm border border-[#76C457]/50">
          Inspect
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateTablePagination(start + 1, end, total);
}

// Table Pagination Controls
function updateTablePagination(start, end, total) {
  const pageInfo = document.getElementById('table-page-info');
  const prevBtn = document.getElementById('table-prev-btn');
  const nextBtn = document.getElementById('table-next-btn');

  if (pageInfo) {
    pageInfo.textContent = total > 0 ? `Showing ${start.toLocaleString()} - ${end.toLocaleString()} of ${total.toLocaleString()}` : '0 incidents';
  }
  if (prevBtn) prevBtn.disabled = appState.tablePage <= 1;
  if (nextBtn) nextBtn.disabled = end >= total;
}

function changeTablePage(delta) {
  const maxPage = Math.ceil(appState.filteredIncidents.length / appState.pageSize);
  const newPage = appState.tablePage + delta;
  if (newPage >= 1 && newPage <= maxPage) {
    appState.tablePage = newPage;
    renderTable();
  }
}

// Locate Incident on Map
window.locateOnMap = function(issueId) {
  const inc = appState.incidentMap.get(issueId);
  if (!inc) return;

  switchTab('map');
  appState.map.flyTo([inc.lat, inc.lng], 14, { duration: 0.75, easeLinearity: 0.5 });

  setTimeout(() => {
    L.popup()
      .setLatLng([inc.lat, inc.lng])
      .setContent(`
        <div class="p-4 bg-white/95 backdrop-blur-xl text-[#0f290f] rounded-2xl shadow-[0_12px_36px_rgba(42,124,19,0.18),0_4px_12px_rgba(0,0,0,0.06)] border-2 border-[#76C457]/60 min-w-[280px]">
          <div class="flex items-center justify-between border-b border-[#76C457]/30 pb-1.5 mb-2">
            <span class="font-mono text-white text-xs font-bold bg-[#2A7C13] px-2 py-0.5 rounded-lg border border-[#76C457]/50 shadow-sm">${inc.id}</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${getSeverityBadgeClasses(inc.severity)}">${getSeverityLabel(inc.severity)}</span>
          </div>
          <div class="font-bold text-[#0f290f] text-xs mb-1 font-mono">${inc.vehicle} <span class="text-[#2d522d] font-sans font-semibold">(${inc.client})</span></div>
          <div class="text-xs text-[#2d522d] mb-2 leading-relaxed font-normal">${inc.details || inc.subRequest}</div>
          <div class="text-[11px] text-[#5a805a] mb-2.5 font-medium">${inc.location}</div>
          <button onclick="window.inspectIncident('${inc.id}')" class="w-full py-2 bg-[#2A7C13] hover:bg-[#226610] text-white rounded-xl text-xs font-semibold transition shadow-md shadow-[#2A7C13]/25 border border-[#76C457]/60">Inspect Full Forensic Log</button>
        </div>
      `)
      .openOn(appState.map);
  }, 800);
};

// Open Forensic Incident Inspector Modal
let currentInspectedIssueId = null;

// Open Forensic Incident Inspector Modal (VisionOS Liquid Glass)
window.inspectIncident = function(issueId) {
  const inc = appState.incidentMap.get(issueId);
  if (!inc) return;
  currentInspectedIssueId = issueId;

  // Crucial: close any open Leaflet popup
  if (appState.map) {
    appState.map.closePopup();
  }

  const elId = document.getElementById('modal-issue-id');
  if (elId) elId.textContent = inc.id;

  const elVeh = document.getElementById('modal-vehicle');
  if (elVeh) elVeh.textContent = inc.vehicle;

  const elCli = document.getElementById('modal-client');
  if (elCli) elCli.textContent = inc.client;

  const elLoc = document.getElementById('modal-location');
  if (elLoc) elLoc.textContent = inc.location;

  const elRaised = document.getElementById('modal-raised-at');
  if (elRaised) elRaised.textContent = inc.raisedAt ? formatDisplayDate(inc.raisedAt) : 'N/A';

  const elResolved = document.getElementById('modal-resolved-at');
  if (elResolved) elResolved.textContent = inc.resolvedAt ? formatDisplayDate(inc.resolvedAt) : 'Pending Action';

  const elAssigned = document.getElementById('modal-assigned-to');
  if (elAssigned) elAssigned.textContent = inc.assignedTo || 'Unassigned';

  const elSub = document.getElementById('modal-subrequest');
  if (elSub) elSub.textContent = inc.subRequest;

  const elDet = document.getElementById('modal-details');
  if (elDet) elDet.textContent = inc.details || 'No telemetry diagnosis recorded.';

  const elRem = document.getElementById('modal-remarks');
  if (elRem) elRem.textContent = inc.remarks || 'No on-ground observations reported.';

  const elCorr = document.getElementById('modal-correction');
  if (elCorr) elCorr.textContent = inc.correction || 'Pending resolution verification.';

  const elCoords = document.getElementById('modal-coords');
  if (elCoords) elCoords.textContent = `${inc.lat.toFixed(5)}, ${inc.lng.toFixed(5)}`;

  const sevBadge = document.getElementById('modal-severity-badge');
  if (sevBadge) {
    sevBadge.className = `px-2.5 py-0.5 text-[11px] font-bold rounded-full ${getSeverityBadgeClasses(inc.severity)}`;
    sevBadge.textContent = getSeverityLabel(inc.severity);
  }

  const resBadge = document.getElementById('modal-status-badge');
  if (resBadge) {
    resBadge.className = `px-2.5 py-0.5 text-[11px] font-bold rounded-full shadow-sm ${inc.resolved === 'Yes' ? 'bg-[#eaf7e8] text-[#2A7C13] border-2 border-[#76C457]' : 'bg-rose-50 text-rose-700 border-2 border-rose-300'}`;
    resBadge.textContent = inc.resolved === 'Yes' ? 'Resolved' : 'Action Required';
  }


  const modal = document.getElementById('incident-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
};

window.closeModal = function() {
  const modal = document.getElementById('incident-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

// Locate Current Incident from Modal on Map
window.locateCurrentModalIncident = function() {
  if (!currentInspectedIssueId) return;
  const issueId = currentInspectedIssueId;
  closeModal();
  setTimeout(() => {
    window.locateOnMap(issueId);
  }, 120);
};

// Export Filtered CSV
function exportFilteredCSV() {
  const data = appState.filteredIncidents;
  if (data.length === 0) {
    showToast("No data to export", "warning");
    return;
  }

  const headers = ["Issue Id", "Vehicle Number", "Clients", "Location", "Severity", "Sub-request", "Issue Details", "Remarks", "Raised At", "Resolved Status", "Resolved At", "Assigned To", "Latitude", "Longitude"];
  const rows = data.map(i => [
    `"${i.id}"`,
    `"${i.vehicle}"`,
    `"${i.client}"`,
    `"${i.location}"`,
    `"${getSeverityLabel(i.severity)}"`,
    `"${i.subRequest}"`,
    `"${(i.details || '').replace(/"/g, '""')}"`,
    `"${(i.remarks || '').replace(/"/g, '""')}"`,
    `"${i.raisedAt}"`,
    `"${i.resolved}"`,
    `"${i.resolvedAt}"`,
    `"${i.assignedTo}"`,
    i.lat,
    i.lng
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `fleet_incidents_export_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`Exported ${data.length.toLocaleString()} incidents to CSV!`, "success");
}

// Fullscreen Toggle
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn(`Error attempting fullscreen: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Helpers
function getSeverityLabel(sev) {
  if (sev === 4) return 'Critical Accident & Collision';
  if (sev === 3) return 'Hardware / Sensor Fault';
  if (sev === 2) return 'Operational / Telemetry';
  return 'Routine Video Request';
}

function getSeverityBadgeClasses(sev) {
  if (sev === 4) return 'bg-rose-100 text-rose-800 border-2 border-rose-300 animate-pulse font-bold';
  if (sev === 3) return 'bg-amber-100 text-amber-900 border-2 border-amber-300 font-bold';
  if (sev === 2) return 'bg-[#eaf7e8] text-[#2A7C13] border-2 border-[#76C457] font-bold';
  return 'bg-emerald-50 text-emerald-900 border-2 border-emerald-300 font-bold';
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Toast Notifications in Cautio Palette
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  let borderClass = 'border-[#76C457] text-[#0f290f]';
  let iconHtml = '<i data-lucide="check-circle-2" class="w-4 h-4 text-[#2A7C13] flex-shrink-0"></i>';

  if (type === 'success') {
    borderClass = 'border-[#76C457] text-[#0f290f]';
    iconHtml = '<i data-lucide="check-circle-2" class="w-4 h-4 text-[#2A7C13] flex-shrink-0"></i>';
  } else if (type === 'warning') {
    borderClass = 'border-amber-400 text-[#0f290f]';
    iconHtml = '<i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600 flex-shrink-0"></i>';
  } else if (type === 'error') {
    borderClass = 'border-rose-400 text-rose-900';
    iconHtml = '<i data-lucide="alert-circle" class="w-4 h-4 text-rose-600 flex-shrink-0"></i>';
  } else {
    iconHtml = '<i data-lucide="info" class="w-4 h-4 text-[#2A7C13] flex-shrink-0"></i>';
  }

  toast.className = `px-4 py-3 bg-white/95 backdrop-blur-xl border-2 ${borderClass} rounded-2xl shadow-[0_12px_36px_rgba(42,124,19,0.18),0_4px_12px_rgba(0,0,0,0.06)] text-xs font-semibold flex items-center gap-2.5 transform transition-all duration-300 translate-y-2 opacity-0`;
  toast.innerHTML = `${iconHtml}<span class="font-medium">${message}</span>`;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 4000);
}

// Modal Backdrop Click & Escape Key Handlers
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('incident-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
