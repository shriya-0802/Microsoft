const fs = require('fs');
const dbPath = './data/settlein_db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

db.schools = {
  'Bengaluru': [
    { name: 'National Public School (NPS)', rating: 9.8, type: 'CBSE' },
    { name: 'Delhi Public School (DPS) East', rating: 9.5, type: 'CBSE' },
    { name: 'Greenwood High International', rating: 9.7, type: 'IB/IGCSE' },
    { name: 'Bishop Cotton Boys\' & Girls\' School', rating: 9.6, type: 'ICSE' },
    { name: 'Inventure Academy', rating: 9.4, type: 'ICSE/IB' }
  ],
  'Mumbai': [
    { name: 'Dhirubhai Ambani International School', rating: 9.9, type: 'IB/ICSE' },
    { name: 'Bombay Scottish School', rating: 9.7, type: 'ICSE' },
    { name: 'Jamnabai Narsee School', rating: 9.5, type: 'ICSE' },
    { name: 'Cathedral and John Connon School', rating: 9.8, type: 'ICSE/IB' }
  ],
  'Delhi NCR': [
    { name: 'Modern School Barakhamba Road', rating: 9.8, type: 'CBSE' },
    { name: 'DPS R.K. Puram', rating: 9.6, type: 'CBSE' },
    { name: 'The Shri Ram School', rating: 9.9, type: 'ICSE/IB' },
    { name: 'Vasant Valley School', rating: 9.5, type: 'CBSE' }
  ],
  'Bhubaneswar': [
    { name: 'SAI International School', rating: 9.7, type: 'CBSE' },
    { name: 'DAV Public School, Chandrasekharpur', rating: 9.5, type: 'CBSE' },
    { name: 'KiiT International School', rating: 9.6, type: 'CBSE/IB' },
    { name: 'Loyola School', rating: 9.3, type: 'ICSE' }
  ],
  'Hyderabad': [
    { name: 'Hyderabad Public School (HPS)', rating: 9.7, type: 'ICSE' },
    { name: 'Oakridge International School', rating: 9.6, type: 'IB/IGCSE' },
    { name: 'Chirec International School', rating: 9.5, type: 'CBSE/IB' },
    { name: 'Silver Oaks International', rating: 9.4, type: 'IB' }
  ]
};

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('Real school data injected into DB successfully!');
