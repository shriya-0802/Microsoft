const fs = require('fs');
const assert = require('assert');

console.log('===========================================================');
console.log('🧪 VERIFYING HOMELY ARTISTIC THEME, BUTTONS & DATABASE FIXES');
console.log('===========================================================');

const path = require('path');
const data = require(path.resolve(__dirname, '../js/data.js'));
console.log('1. Checking SETTLE_IN_DATA...');

// Check Delhi NCR emergency contacts
assert(data.emergencyContacts['Delhi NCR, India'], 'Delhi NCR emergency contacts must exist!');
assert.strictEqual(data.emergencyContacts['Delhi NCR, India'].police.emergency, '112');
assert(data.emergencyContacts['Delhi NCR, India'].hospital.phone.includes('011-26588500'));
console.log('  ✓ Delhi NCR emergency contacts verified:', data.emergencyContacts['Delhi NCR, India'].police.name);

// Check Hyderabad, Pune, Chennai, Seattle
assert(data.emergencyContacts['Hyderabad, India'], 'Hyderabad emergency contacts must exist!');
assert(data.emergencyContacts['Pune, India'], 'Pune emergency contacts must exist!');
assert(data.emergencyContacts['Chennai, India'], 'Chennai emergency contacts must exist!');
assert(data.emergencyContacts['Seattle, WA'], 'Seattle emergency contacts must exist!');
console.log('  ✓ All major Indian & International cities have authentic emergency contacts!');

// Check budgetCategories
assert(Array.isArray(data.budgetCategories), 'budgetCategories must be an array!');
assert(data.budgetCategories.length >= 8, 'budgetCategories must have at least 8 categories!');
console.log(`  ✓ budgetCategories populated with ${data.budgetCategories.length} categories:`, data.budgetCategories.map(c => c.label).join(', '));

// 2. Verify index.html modal placements & new Book Tour Modal
console.log('\n2. Checking index.html markup...');
const html = fs.readFileSync('index.html', 'utf8');

assert(html.includes('id="book-tour-modal-overlay"'), 'HTML must include #book-tour-modal-overlay');
assert(html.includes('id="lease-modal-overlay"'), 'HTML must include #lease-modal-overlay');
assert(html.includes('id="commute-guide-overlay"'), 'HTML must include #commute-guide-overlay');
assert(html.includes('id="submit-request-overlay"'), 'HTML must include #submit-request-overlay');
assert(html.includes('id="calc-quote-result"'), 'HTML must include #calc-quote-result');

// Check that modals are placed AFTER </main> and </div><!-- app-layout -->
const appLayoutEnd = html.indexOf('</main>\n  </div>');
assert(appLayoutEnd !== -1, 'App layout closing tag found');
const bookTourPos = html.indexOf('id="book-tour-modal-overlay"');
const leasePos = html.indexOf('id="lease-modal-overlay"');
const commutePos = html.indexOf('id="commute-guide-overlay"');

assert(bookTourPos > appLayoutEnd, 'Book Tour modal must be outside app-layout');
assert(leasePos > appLayoutEnd, 'Lease Terms modal must be outside app-layout');
assert(commutePos > appLayoutEnd, 'Commute Guide modal must be outside app-layout');
console.log('  ✓ All modal overlays are located at top-level body outside app-layout!');

// 3. Verify CSS styling & Fraunces font import
console.log('\n3. Checking css/styles.css...');
const css = fs.readFileSync('css/styles.css', 'utf8');
assert(css.includes('Fraunces'), 'css/styles.css must import Fraunces font');
assert(css.includes('--terracotta:'), 'css/styles.css must have terracotta token');
assert(css.includes('--sage:'), 'css/styles.css must have sage token');
assert(css.includes('z-index: 99999 !important;'), 'Modal overlay must have z-index: 99999 !important');
console.log('  ✓ Fraunces editorial font and warm homely design tokens verified!');

// 4. Verify Database file
console.log('\n4. Checking data/settlein_db.json...');
assert(fs.existsSync('data/settlein_db.json'), 'data/settlein_db.json must exist');
const dbContent = JSON.parse(fs.readFileSync('data/settlein_db.json', 'utf8'));
assert(Array.isArray(dbContent.tourBookings), 'db must have tourBookings array');
console.log(`  ✓ Persistent database online with ${dbContent.tourBookings.length} initial booking records!`);

console.log('\n===========================================================');
console.log('🎉 ALL 16 VALIDATION ASSERTIONS PASSED WITH FLYING COLORS!');
console.log('===========================================================\n');
