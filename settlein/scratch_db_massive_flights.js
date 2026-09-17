const fs = require('fs');
const dbPath = './data/settlein_db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Delete existing mock flights to replace with a MASSIVE dataset
db.flights = [];

const allCities = [
  'Bengaluru', 'Mumbai', 'Delhi', 'Hyderabad', 'Bhubaneswar', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur',
  'Singapore', 'Dubai', 'Tokyo', 'London', 'New York', 'Paris', 'Frankfurt', 'Sydney', 'Toronto', 'Chicago',
  'Austin', 'Seattle', 'San Francisco', 'Los Angeles', 'Miami', 'Boston', 'Washington DC', 'Atlanta', 'Dallas', 'Houston',
  'Amsterdam', 'Madrid', 'Rome', 'Zurich', 'Vienna', 'Munich', 'Berlin', 'Istanbul', 'Moscow', 'Seoul',
  'Bangkok', 'Kuala Lumpur', 'Hong Kong', 'Shanghai', 'Beijing', 'Taipei', 'Manila', 'Jakarta', 'Ho Chi Minh', 'Doha'
];

const airlines = ['AI', '6E', 'UK', 'SG', 'EK', 'SQ', 'BA', 'LH', 'AF', 'JL', 'NH', 'UA', 'AA', 'DL', 'QF', 'CX'];
const statuses = ['ON_TIME', 'EN_ROUTE', 'BOARDING', 'DELAYED'];
const dataSources = ['Live ADS-B', 'GIS Spatial', 'ATC Radar', 'Satellite API'];

for (let i = 0; i < 5000; i++) {
  const origin = allCities[Math.floor(Math.random() * allCities.length)];
  let dest = allCities[Math.floor(Math.random() * allCities.length)];
  while (dest === origin) dest = allCities[Math.floor(Math.random() * allCities.length)]; // Prevent origin=dest
  
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  
  const depH = Math.floor(Math.random() * 24);
  const depM = Math.floor(Math.random() * 60);
  const durH = Math.floor(Math.random() * 12) + 1; // 1-12 hours flight
  const arrH = (depH + durH) % 24;
  
  const fmtAMPM = (h, m) => {
    const ampm = h >= 12 ? 'PM' : 'AM';
    let hh = h % 12;
    hh = hh ? hh : 12;
    return `${hh.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ampm} IST`;
  };
  
  db.flights.push({
    flightId: `${airlines[Math.floor(Math.random() * airlines.length)]}-${Math.floor(Math.random() * 9000) + 1000}`,
    origin: origin,
    destination: dest,
    departureTime: fmtAMPM(depH, depM),
    arrivalTime: fmtAMPM(arrH, depM),
    status: status,
    altitudeFt: status === 'EN_ROUTE' ? Math.floor(Math.random() * 15000) + 25000 : 0,
    speedKts: status === 'EN_ROUTE' ? Math.floor(Math.random() * 200) + 300 : 0,
    lat: (Math.random() * 140 - 70).toFixed(4),
    lng: (Math.random() * 360 - 180).toFixed(4),
    delayRisk: status === 'DELAYED' ? 'High' : status === 'EN_ROUTE' ? 'Medium' : 'Low',
    fuelEfficiencyPct: (85 + Math.random() * 14).toFixed(1),
    dataSources: [dataSources[Math.floor(Math.random() * dataSources.length)], dataSources[Math.floor(Math.random() * dataSources.length)]]
  });
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('Successfully injected 5000 flights covering 50 global cities into the DB!');
