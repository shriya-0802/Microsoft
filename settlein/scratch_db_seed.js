const fs = require('fs');

const dbPath = './data/settlein_db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const cities = ['Bhubaneswar, India', 'Bengaluru, India', 'Mumbai, India', 'Delhi NCR, India', 'Hyderabad, India', 'Austin, TX', 'Singapore', 'Dubai, UAE', 'Tokyo, Japan', 'Seattle, WA'];
const vibes = ['Family-Friendly', 'Luxury & Upscale', 'Tech Hub', 'Quiet & Green', 'Student Hub', 'Nightlife', 'Business District'];

for (let i = 0; i < 50; i++) {
  const city = cities[i % cities.length];
  db.neighborhoods.push({
    id: `hood-${i}`,
    name: `Sector ${i + 1} Enclave`,
    city: city,
    emoji: i % 2 === 0 ? '🌳' : '🏙️',
    vibe: [vibes[i % vibes.length]],
    safetyScore: (7 + (Math.random() * 3)).toFixed(1),
    schoolRating: (7 + (Math.random() * 3)).toFixed(1),
    metroAccess: Math.random() > 0.5,
    avgRent: Math.floor(Math.random() * 30000) + 10000,
    greenery: Math.random() > 0.5,
    landmarks: ['Central Park', 'City Mall'],
    transitInfo: "Metro Station within 500m."
  });
}

const types = ['Rent', 'Lease'];
const bhks = ['1BHK', '2BHK', '3BHK', '4BHK', 'Studio'];

for (let i = 0; i < 100; i++) {
  const city = cities[i % cities.length];
  db.properties.push({
    id: `prop-${i}`,
    city: city,
    type: types[i % types.length],
    bhk: bhks[i % bhks.length],
    title: `${bhks[i % bhks.length]} Luxury Apartment in ${city.split(',')[0]}`,
    society: `Premium Society ${i}`,
    location: `Sector ${i % 50 + 1} Enclave`,
    price: Math.floor(Math.random() * 50000) + 15000,
    rent: Math.floor(Math.random() * 50000) + 15000,
    area: Math.floor(Math.random() * 1500) + 500,
    petFriendly: Math.random() > 0.5,
    furnished: Math.random() > 0.5
  });
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('Database seeded successfully.');
