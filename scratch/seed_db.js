const fs = require('fs');
const path = require('path');

// Let's read and eval it manually if needed
const dataPath = path.join(__dirname, '../js/data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Replace `const SETTLE_IN_DATA = ` with `module.exports = `
dataContent = dataContent.replace('const SETTLE_IN_DATA =', 'module.exports =');

const dbPath = path.join(__dirname, '../data/settlein_db.json');
let db = {
  tourBookings: [],
  movingBudgets: [],
  checklistTasks: [],
  inventory: []
};
if (fs.existsSync(dbPath)) {
  db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

// eval the string
let SETTLE_IN_DATA;
try {
  const sandbox = { module: { exports: {} } };
  const script = new (require('vm').Script)(dataContent);
  script.runInNewContext(sandbox);
  SETTLE_IN_DATA = sandbox.module.exports;
  
  if (SETTLE_IN_DATA.neighborhoods) db.neighborhoods = SETTLE_IN_DATA.neighborhoods;
  if (SETTLE_IN_DATA.rentalProperties) db.properties = SETTLE_IN_DATA.rentalProperties;
  if (SETTLE_IN_DATA.tasks) db.checklistTasks = SETTLE_IN_DATA.tasks;
  
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  console.log('Successfully seeded settlein_db.json from data.js');
} catch(err) {
  console.error(err);
}
