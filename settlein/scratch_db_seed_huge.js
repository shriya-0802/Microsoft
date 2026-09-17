const fs = require('fs');
const dbPath = './data/settlein_db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Clear existing generated hoods & props to prevent duplicates
db.neighborhoods = db.neighborhoods.filter(h => !h.id.includes('hood-real-'));
db.properties = db.properties.filter(p => !p.id.includes('prop-real-'));

const citiesMap = {
  'Bengaluru, India': { hoods: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Electronic City', 'Jayanagar', 'BTM Layout', 'Malleshwaram'], costMult: 1.2 },
  'Mumbai, India': { hoods: ['Bandra West', 'Andheri West', 'Powai', 'Juhu', 'Colaba', 'Worli', 'Lower Parel', 'Goregaon'], costMult: 1.8 },
  'Delhi NCR, India': { hoods: ['Hauz Khas', 'Vasant Vihar', 'Defence Colony', 'Greater Kailash', 'Saket', 'Gurugram Sector 54', 'Noida Sector 15'], costMult: 1.1 },
  'Hyderabad, India': { hoods: ['Banjara Hills', 'Jubilee Hills', 'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur'], costMult: 1.0 },
  'Bhubaneswar, India': { hoods: ['Khandagiri', 'Patia', 'Jayadev Vihar', 'Chandrasekharpur', 'Saheed Nagar', 'Nayapalli'], costMult: 0.7 }
};

// UI exact vibes
const vibesList = ['Tech & Corporate', 'Peaceful & Family', 'Trendy & Nightlife', 'Trendy & Central'];

let hId = 1000;
let pId = 5000;

for (const [city, data] of Object.entries(citiesMap)) {
  data.hoods.forEach(hoodName => {
    // Generate Neighborhood
    db.neighborhoods.push({
      id: `hood-real-${hId++}`,
      name: hoodName,
      city: city,
      emoji: Math.random() > 0.5 ? '🌳' : '🏙️',
      vibe: [vibesList[Math.floor(Math.random() * vibesList.length)]],
      safetyScore: (7 + (Math.random() * 3)).toFixed(1),
      schoolRating: (7 + (Math.random() * 3)).toFixed(1),
      metroAccess: Math.random() > 0.4,
      avgRent: Math.floor((Math.random() * 20000 + 15000) * data.costMult),
      greenery: Math.random() > 0.3,
      landmarks: [`${hoodName} High Street`, 'City Mall'],
      transitInfo: Math.random() > 0.5 ? "Metro Station nearby" : "Bus Stop within 200m"
    });

    const numProps = Math.floor(Math.random() * 10) + 5; 
    const types = ['Rent', 'Lease'];
    const bhks = ['1BHK', '2BHK', '3BHK', '4BHK', 'Studio'];
    
    for (let i = 0; i < numProps; i++) {
      const bhk = bhks[Math.floor(Math.random() * bhks.length)];
      db.properties.push({
        id: `prop-real-${pId++}`,
        city: city,
        type: types[Math.floor(Math.random() * types.length)],
        bhk: bhk,
        title: `${bhk} Premium Apartment in ${hoodName}`,
        society: `${hoodName} Heights`,
        location: hoodName,
        price: Math.floor((Math.random() * 40000 + 10000) * data.costMult),
        rent: Math.floor((Math.random() * 40000 + 10000) * data.costMult),
        area: Math.floor(Math.random() * 1200) + 400,
        petFriendly: Math.random() > 0.4,
        furnished: Math.random() > 0.3
      });
    }
  });
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Generated fixed vibes dataset! Total Hoods: ${db.neighborhoods.length}, Total Props: ${db.properties.length}`);
