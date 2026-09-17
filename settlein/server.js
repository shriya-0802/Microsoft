const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ─── In-Memory Stores ───
let users = [
  { id: 'usr-admin-1', username: 'admin', password: 'password', role: 'admin', department: 'utilities' },
  { id: 'usr-cust-1', username: 'customer', password: 'password', role: 'customer', department: null }
];

const departmentRequests = [];

// ─── JSON DB ───
const DB_FILE = path.join(__dirname, 'data', 'settlein_db.json');

function readDb() {
  try {
    if (fs.existsSync(DB_FILE)) return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) { console.warn('DB read error:', e.message); }
  return {};
}

function writeDb(data) {
  try {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (e) { console.error('DB write error:', e.message); }
}

function initDb() {
  const db = readDb();
  let modified = false;
  ['tourBookings', 'movingBudgets', 'userProfiles', 'checklistTasks', 'inventory', 'neighborhoods', 'properties'].forEach(key => {
    if (!db[key]) { db[key] = []; modified = true; }
  });
  if (modified) writeDb(db);
}
initDb();

// ─── 1. Health ───
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online', server: 'SettleIn Express.js', uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// ─── 2. Auth ───
app.post('/api/auth/signup', (req, res) => {
  const { username, password, role, department } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password are required' });
  if (users.find(u => u.username === username)) return res.status(400).json({ error: 'Username already exists' });

  const newUser = {
    id: `usr-${Math.floor(Math.random() * 90000) + 10000}`,
    username, password, role: role || 'customer',
    department: role === 'admin' ? (department || 'gov') : null
  };
  users.push(newUser);
  res.status(201).json({ success: true, user: newUser, token: `mock-token-${newUser.id}` });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password, portal } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials. Please verify your username and password.' });
  if (portal === 'admin' && user.role !== 'admin') return res.status(403).json({ error: 'Access Denied: This portal is restricted to Department Administrators.' });
  if (portal === 'citizen' && user.role === 'admin') return res.status(403).json({ error: 'Admin account detected. Please sign in through the Admin Gateway.' });
  res.json({ success: true, user, token: `mock-token-${user.id}` });
});

// ─── 3. Admin Portal ───
app.get('/api/admin/requests', (req, res) => {
  const { deptId, status } = req.query;
  let results = [...departmentRequests];
  if (deptId && deptId !== 'all') results = results.filter(r => r.deptId === deptId);
  if (status && status !== 'ALL') results = results.filter(r => r.status === status);
  res.json({
    total: departmentRequests.length, filtered: results.length,
    pendingCount: departmentRequests.filter(r => r.status === 'PENDING').length,
    approvedCount: departmentRequests.filter(r => r.status === 'APPROVED').length,
    rejectedCount: departmentRequests.filter(r => r.status === 'REJECTED').length,
    requests: results
  });
});

app.post('/api/admin/submit-request', (req, res) => {
  const { deptId, title, applicantName, city, makerNotes, userId, taskId } = req.body;
  if (!deptId || !title || !applicantName) return res.status(400).json({ error: 'Missing required fields' });
  const deptMap = {
    gov: 'Government & Citizen Services', utilities: 'Utilities & Power Grid Board',
    healthcare: 'Healthcare & Medical Registry', banking: 'Banking & Financial Regulatory Board',
    education: 'Education & Schools Board', aviation: 'Aviation & Logistics Division'
  };
  const newReq = {
    id: `REQ-2026-${String(departmentRequests.length + 1).padStart(3, '0')}`,
    deptId, deptName: deptMap[deptId] || 'Civic Services', title, applicantName,
    city: city || 'Destination City', submittedDate: new Date().toISOString().split('T')[0],
    status: 'PENDING', makerNotes: makerNotes || 'Submitted for review.', checkerRemarks: '',
    docRef: `DOC-${(deptId || 'GEN').toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
    userId, taskId
  };
  departmentRequests.unshift(newReq);
  res.status(201).json({ success: true, request: newReq });
});

app.post('/api/admin/approve-request', (req, res) => {
  const { requestId, checkerRemarks, approvedBy } = req.body;
  const db = readDb();
  const target = departmentRequests.find(r => r.id === requestId);
  if (!target) return res.status(404).json({ error: 'Request not found' });
  target.status = 'APPROVED';
  target.checkerRemarks = checkerRemarks || `APPROVED by ${target.deptName} Officer.`;
  target.approvedBy = approvedBy || 'Department Admin Officer';
  target.approvedTimestamp = new Date().toLocaleString();
  
  if (target.userId && target.taskId && db.checklistTasks) {
    const ct = db.checklistTasks.find(t => t.id === target.taskId && t.userId === target.userId);
    if (ct) { ct.adminStatus = 'APPROVED'; writeDb(db); }
  }
  
  res.json({ success: true, request: target });
});

app.post('/api/admin/reject-request', (req, res) => {
  const { requestId, checkerRemarks } = req.body;
  const db = readDb();
  const target = departmentRequests.find(r => r.id === requestId);
  if (!target) return res.status(404).json({ error: 'Request not found' });
  target.status = 'REJECTED';
  target.checkerRemarks = checkerRemarks || 'REJECTED: Incomplete documentation.';
  target.rejectedTimestamp = new Date().toLocaleString();
  
  if (target.userId && target.taskId && db.checklistTasks) {
    const ct = db.checklistTasks.find(t => t.id === target.taskId && t.userId === target.userId);
    if (ct) { ct.adminStatus = 'REJECTED'; writeDb(db); }
  }
  
  res.json({ success: true, request: target });
});

// ─── 4. Experience ───
app.get('/api/experience', (req, res) => {
  res.json({
    company: 'Bourntec Solutions Inc.', role: 'Data Analyst Intern',
    location: 'Bhubaneswar, India', period: 'May 2025 – Jun 2025',
    summary: 'Engineered real-time aviation analytics dashboards in Power BI, unifying REST API, Excel, and GIS datasets.',
    highlights: [
      'Engineered real-time aviation analytics dashboards in Power BI.',
      'Developed automated REST API ingest pipelines with GIS spatial vector boundaries.',
      'Implemented DAX calculations for flight fuel efficiency and congestion metrics.'
    ],
    technologiesUsed: ['Power BI', 'REST API', 'Excel', 'GIS', 'SQL', 'Python', 'DAX']
  });
});

// ─── 5. Aviation ───
app.get('/api/aviation/telemetry', (req, res) => {
  const city = req.query.city ? req.query.city.split(',')[0].trim() : 'Bhubaneswar';
  
  const db = readDb();
  const allFlights = db.flights || [];
  
  // Filter flights for the requested city
  let cityFlights = allFlights.filter(f => f.origin === city || f.destination === city);
  
  // If no flights found for a rare city, fallback to random generated so it's never empty
  if (cityFlights.length === 0) {
    const otherCities = ['Delhi', 'Mumbai', 'Kolkata', 'Singapore', 'Dubai', 'Tokyo', 'London', 'New York', 'Paris', 'Frankfurt'];
    const airlines = ['AI', '6E', 'UK', 'SG', 'EK', 'SQ'];
    const dataSources = ['Live ADS-B', 'GIS Spatial'];
    for (let i = 0; i < 5; i++) {
      const isOutbound = Math.random() > 0.5;
      const origin = isOutbound ? city : otherCities[Math.floor(Math.random() * otherCities.length)];
      const dest = isOutbound ? otherCities[Math.floor(Math.random() * otherCities.length)] : city;
      const status = ['ON_TIME', 'EN_ROUTE', 'BOARDING', 'DELAYED'][Math.floor(Math.random() * 4)];
      const depH = Math.floor(Math.random() * 24);
      const depM = Math.floor(Math.random() * 60);
      const arrH = (depH + (Math.floor(Math.random() * 12) + 1)) % 24;
      const fmtAMPM = (h, m) => {
        const ampm = h >= 12 ? 'PM' : 'AM';
        let hh = h % 12;
        hh = hh ? hh : 12;
        return `${hh.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ampm} IST`;
      };
      cityFlights.push({
        flightId: `${airlines[Math.floor(Math.random() * airlines.length)]}-${Math.floor(Math.random() * 900) + 100}`,
        origin, destination: dest, status,
        departureTime: fmtAMPM(depH, depM),
        arrivalTime: fmtAMPM(arrH, depM),
        altitudeFt: status === 'EN_ROUTE' ? Math.floor(Math.random() * 15000) + 25000 : 0,
        speedKts: status === 'EN_ROUTE' ? Math.floor(Math.random() * 200) + 300 : 0,
        lat: (Math.random() * 40 - 20).toFixed(4), lng: (Math.random() * 100 - 50).toFixed(4),
        delayRisk: status === 'DELAYED' ? 'High' : status === 'EN_ROUTE' ? 'Medium' : 'Low',
        fuelEfficiencyPct: (85 + Math.random() * 14).toFixed(1),
        dataSources: [dataSources[Math.floor(Math.random() * dataSources.length)]]
      });
    }
  }

  res.json({
    dashboardTitle: `Real-Time Airspace Telemetry: ${city}`,
    metrics: { totalFlightsTracked: 1428, onTimePerformancePct: 92.4, avgFuelEfficiencyPct: 93.8, gisSpatialNodesActive: 340 },
    liveFlights: cityFlights.slice(0, 8)
  });
});

app.post('/api/aviation/predict-delay', (req, res) => {
  const { flightId, distanceKm, weatherCondition } = req.body;
  const dist = parseFloat(distanceKm) || 1200;
  const weather = weatherCondition || 'Clear';
  let weatherMultiplier = 1.0, weatherNote = 'Optimal visibility and winds aloft.';
  if (weather === 'Rain') { weatherMultiplier = 1.45; weatherNote = 'Moderate runway wetness, standard IFR approach.'; }
  else if (weather === 'Thunderstorm') { weatherMultiplier = 2.85; weatherNote = 'Convective storm cells; holding pattern required.'; }
  else if (weather === 'Fog') { weatherMultiplier = 2.20; weatherNote = 'Low RVR — Cat-III ILS guidance active.'; }

  const baseDelayMin = (dist > 1800 ? 12 : 5) * weatherMultiplier;
  
  let chaoticHash = 0;
  const idStr = flightId || 'AI-204';
  for(let i=0; i<idStr.length; i++) chaoticHash = Math.imul(31, chaoticHash) + idStr.charCodeAt(i) | 0;
  const hash = Math.abs(chaoticHash) % 100;
  
  const operationalDelay = hash > 80 ? (hash * 1.2) : hash > 40 ? (hash * 0.5) : 0;
  const predictedDelayMinutes = Math.min(180, Math.max(0, Math.round(baseDelayMin + operationalDelay + (Math.sin(dist) * 5))));
  const delayProbability = Math.min(99, Math.round((predictedDelayMinutes / 120) * 80 + (weatherMultiplier > 1.5 ? 40 : 10) + (hash % 10)));
  const riskLevel = delayProbability > 65 ? 'HIGH' : delayProbability > 35 ? 'MEDIUM' : 'LOW';

  res.json({
    success: true, flightId: flightId || 'AI-204', distanceKm: dist, weatherCondition: weather,
    predictedDelayMinutes, delayProbability, delayRiskLevel: riskLevel,
    fuelEfficiencyScore: Math.max(75, Math.round(98 - (predictedDelayMinutes * 0.18))),
    estimatedFuelBurnKg: Math.round(dist * 2.85),
    optimalAltitude: dist > 1500 ? 'FL380 (38,000 ft)' : 'FL340 (34,000 ft)',
    weatherImpactNote: weatherNote, confidenceScore: 94.6,
    aiRecommendation: riskLevel === 'HIGH' ? '⚠️ Divert path via waypoint Alpha-9. Carry +35 min holding fuel.'
      : riskLevel === 'MEDIUM' ? 'ℹ️ Minor gate delay expected. Standard vector descent.'
      : '✅ Clear airspace. Direct approach cleared.',
    mlEngine: 'TensorFlow Flight Telemetry Regressor + RAG GIS Model'
  });
});

// ─── 6. Chat ───
app.post('/api/chat', async (req, res) => {
  const { prompt, city } = req.body;
  const apiKey = process.env.GEMINI_API_KEY || '';
  
  const cleanCity = city ? city.split(',')[0].trim() : 'Bhubaneswar';
  
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    return res.json({ 
      response: `⚠️ **Gemini API Key Missing**\nI'm ready to act as your intelligent AI agent for ${cleanCity}, but I need a valid Gemini API Key to function. Please update \`server.js\` or set the \`GEMINI_API_KEY\` environment variable and restart the server!`,
      retrievedDocs: 0, 
      confidenceScore: 0 
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const db = readDb();
    const schools = db.schools ? (db.schools[cleanCity] || []) : [];
    const rests = db.restaurants ? (db.restaurants[cleanCity] || []) : [];
    const properties = db.rentalProperties ? db.rentalProperties.filter(p => p.city.includes(cleanCity)).slice(0, 5) : [];

    const systemPrompt = `You are the SettleIn AI Relocation Agent, an expert concierge for users moving to ${cleanCity}.
Be incredibly helpful, concise, and format your responses with beautiful Markdown (bolding, emojis, bullet points).
Use the following real-time database context for ${cleanCity} to answer the user's query:

Top Schools: ${JSON.stringify(schools)}
Top Restaurants: ${JSON.stringify(rests)}
Sample Properties: ${JSON.stringify(properties)}

Always prioritize using this local context to provide specific, actionable recommendations.
CRITICAL INSTRUCTION: If the user explicitly asks you to add an item or task to their checklist (e.g. "add office work to my checklist"), you MUST append the following exact string at the very end of your response, replacing [TASK] with the actual task name:
<ACTION_ADD_CHECKLIST>[TASK]</ACTION_ADD_CHECKLIST>

Example:
Sure! I've added it to your checklist.
<ACTION_ADD_CHECKLIST>office work</ACTION_ADD_CHECKLIST>`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: { systemInstruction: systemPrompt }
    });

    let reply = response.text;
    
    // Convert newlines to <br> for HTML rendering in the chat UI
    reply = reply.replace(/\n/g, '<br>');

    res.json({ response: reply, retrievedDocs: 5, confidenceScore: 0.99 });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.json({ 
      response: `🚨 **Error connecting to Gemini API**:\n${error.message}\nPlease check your API key and internet connection.`,
      retrievedDocs: 0, 
      confidenceScore: 0 
    });
  }
});

// ─── 7. Telemetry ───
app.get('/api/db/telemetry/:city', (req, res) => {
  const city = req.params.city || 'Bhubaneswar, India';
  const data = {
    'Bhubaneswar, India': { temp: '29°C', condition: 'Sunny & Pleasant', aqi: 62, aqiStatus: 'Good', humidity: '64%', wind: '12 km/h NE', transitStatus: 'Mo Bus & E-Ride 100% Operational', gridStatus: 'TPCODL 99.8% Uptime' },
    'Bengaluru, India': { temp: '25°C', condition: 'Breezy & Mild', aqi: 74, aqiStatus: 'Moderate', humidity: '58%', wind: '15 km/h E', transitStatus: 'Namma Metro High Frequency', gridStatus: 'BESCOM 99.4% Uptime' },
    'Mumbai, India': { temp: '30°C', condition: 'Coastal Humid', aqi: 118, aqiStatus: 'Moderate', humidity: '78%', wind: '18 km/h SW', transitStatus: 'Western / Central Lines Open', gridStatus: 'BEST 99.9% Uptime' },
    'Singapore': { temp: '31°C', condition: 'Tropical Showers', aqi: 35, aqiStatus: 'Excellent', humidity: '82%', wind: '9 km/h NE', transitStatus: 'SMRT MRT 100% Active', gridStatus: 'SP Group 100% Uptime' },
    'Dubai, UAE': { temp: '33°C', condition: 'Clear & Sunny', aqi: 82, aqiStatus: 'Moderate', humidity: '44%', wind: '14 km/h NW', transitStatus: 'Dubai Metro Active', gridStatus: 'DEWA 100% Uptime' },
    'Austin, TX': { temp: '27°C', condition: 'Sunny & Clear', aqi: 28, aqiStatus: 'Excellent', humidity: '48%', wind: '11 km/h S', transitStatus: 'CapMetro On Schedule', gridStatus: 'Austin Energy 99.7% Uptime' },
    'Tokyo, Japan': { temp: '20°C', condition: 'Crisp & Clear', aqi: 22, aqiStatus: 'Pure', humidity: '50%', wind: '13 km/h E', transitStatus: 'JR East & Tokyo Metro 100%', gridStatus: 'TEPCO 100% Uptime' },
    'Seattle, WA': { temp: '18°C', condition: 'Mild Overcast', aqi: 24, aqiStatus: 'Pure', humidity: '68%', wind: '8 km/h NW', transitStatus: 'Link Light Rail On Schedule', gridStatus: 'Seattle City Light 99.9% Uptime' }
  };
  const fallback = { temp: '26°C', condition: 'Mild & Clear', aqi: 50, aqiStatus: 'Good', humidity: '60%', wind: '10 km/h', transitStatus: 'City Transit Active', gridStatus: '99.5% Uptime' };
  res.json({ city, realtime: data[city] || fallback, recordedAt: new Date().toISOString() });
});

// ─── 8. DB CRUD ───
app.get('/api/db/status', (req, res) => {
  const db = readDb();
  res.json({
    status: 'ONLINE', connected: true,
    counts: {
      tourBookings: (db.tourBookings || []).length, departmentRequests: departmentRequests.length,
      registeredUsers: users.length, inventory: (db.inventory || []).length
    }
  });
});

app.get('/api/db/bookings', (req, res) => {
  const { city } = req.query;
  const db = readDb();
  let bookings = db.tourBookings || [];
  if (city) bookings = bookings.filter(b => b.city && b.city.toLowerCase() === city.toLowerCase());
  res.json({ success: true, bookings });
});

app.post('/api/db/bookings', (req, res) => {
  const { propId, propTitle, society, city, tourDate, tourTime, mode, applicantName, phone, notes } = req.body;
  if (!propTitle || !tourDate || !tourTime) return res.status(400).json({ error: 'Property, date, and time required' });
  const db = readDb();
  db.tourBookings = db.tourBookings || [];
  const newBooking = {
    id: `TOUR-${Date.now().toString().slice(-4)}-${Math.floor(Math.random() * 1000)}`,
    propId: propId || 'unknown', propTitle, society: society || 'Residential Complex',
    city: city || 'Bhubaneswar, India', tourDate, tourTime, mode: mode || 'In-Person',
    applicantName: applicantName || 'Relocator', phone: phone || '', notes: notes || '',
    status: 'CONFIRMED', bookedAt: new Date().toISOString()
  };
  db.tourBookings.unshift(newBooking);
  writeDb(db);
  res.status(201).json({ success: true, booking: newBooking });
});

app.post('/api/db/moving-budget', (req, res) => {
  const db = readDb();
  db.movingBudgets = db.movingBudgets || [];
  db.movingBudgets.unshift({ id: `BUDGET-${Date.now()}`, ...req.body, savedAt: new Date().toISOString() });
  writeDb(db);
  res.json({ success: true });
});

app.get('/api/db/checklist', (req, res) => {
  const { phase, category, userId } = req.query;
  const db = readDb();
  let tasks = db.checklistTasks || [];
  if (userId) tasks = tasks.filter(t => t.userId === userId);
  if (phase) tasks = tasks.filter(t => t.phase === phase);
  if (category) tasks = tasks.filter(t => t.category === category);
  res.json({ success: true, tasks });
});

app.post('/api/db/checklist', (req, res) => {
  const task = req.body;
  if (!task || !task.id) return res.status(400).json({ error: 'Valid task with id required' });
  const db = readDb();
  db.checklistTasks = db.checklistTasks || [];
  const idx = db.checklistTasks.findIndex(t => t.id === task.id);
  if (idx >= 0) db.checklistTasks[idx] = { ...db.checklistTasks[idx], ...task, updatedAt: new Date().toISOString() };
  else db.checklistTasks.unshift({ ...task, createdAt: new Date().toISOString() });
  writeDb(db);
  res.json({ success: true, task: idx >= 0 ? db.checklistTasks[idx] : db.checklistTasks[0] });
});

app.get('/api/db/neighborhoods', (req, res) => {
  const { city } = req.query;
  const db = readDb();
  let hoods = db.neighborhoods || [];
  if (city) hoods = hoods.filter(n => n.city && n.city.toLowerCase() === city.toLowerCase());
  res.json({ success: true, neighborhoods: hoods });
});

app.get('/api/db/properties', (req, res) => {
  const { city, bhk, type, petFriendly } = req.query;
  const db = readDb();
  let props = db.properties || [];
  if (city) props = props.filter(p => p.city && p.city.toLowerCase() === city.toLowerCase());
  if (bhk) props = props.filter(p => p.bhk === bhk);
  if (type) props = props.filter(p => p.type && p.type.toLowerCase() === type.toLowerCase());
  if (petFriendly !== undefined) props = props.filter(p => p.petFriendly === (petFriendly === 'true'));
  res.json({ success: true, properties: props });
});

app.get('/api/db/inventory', (req, res) => {
  const db = readDb();
  const { userId } = req.query;
  const items = userId ? (db.inventory || []).filter(i => i.userId === userId) : (db.inventory || []);
  res.json({ success: true, items });
});

app.post('/api/db/inventory', (req, res) => {
  const db = readDb();
  db.inventory = db.inventory || [];
  let item;
  if (req.body.id) {
    const idx = db.inventory.findIndex(i => i.id === req.body.id);
    if (idx >= 0) { db.inventory[idx] = { ...db.inventory[idx], ...req.body, updatedAt: new Date().toISOString() }; item = db.inventory[idx]; }
    else { item = { ...req.body, createdAt: new Date().toISOString() }; db.inventory.push(item); }
  } else {
    item = { id: `INV-${Date.now()}`, ...req.body, createdAt: new Date().toISOString() };
    db.inventory.push(item);
  }
  writeDb(db);
  res.json({ success: true, item });
});

app.delete('/api/db/inventory/:id', (req, res) => {
  const db = readDb();
  db.inventory = db.inventory || [];
  const len = db.inventory.length;
  db.inventory = db.inventory.filter(i => i.id !== req.params.id);
  if (db.inventory.length < len) { writeDb(db); res.json({ success: true }); }
  else res.status(404).json({ error: 'Item not found' });
});

app.get('/api/db/dashboard-stats', (req, res) => {
  const db = readDb();
  res.json({
    success: true, stats: {
      tourBookings: (db.tourBookings || []).length, checklistTasks: (db.checklistTasks || []).length,
      inventoryItems: (db.inventory || []).length, neighborhoods: (db.neighborhoods || []).length,
      properties: (db.properties || []).length
    }
  });
});

app.post('/api/db/reset', (req, res) => {
  const db = readDb();
  db.tourBookings = []; db.movingBudgets = []; db.checklistTasks = []; db.inventory = [];
  writeDb(db);
  res.json({ success: true, message: 'Database reset' });
});

app.use('/api', (req, res) => {
  res.status(404).json({ error: `API route ${req.method} ${req.originalUrl} not found` });
});

app.listen(PORT, () => {
  console.log(`\n  SettleIn 2.0 — http://localhost:${PORT}\n`);
});
