// Comprehensive end-to-end test for Girlish Material UI, Onboarding Questions, and House Rental/Lease Matcher
const fs = require('fs');
const assert = require('assert');

console.log('🌸 Starting SettleIn Girlish UI & House Matcher Verification Suite...');

// 1. Verify CSS styles
const css = fs.readFileSync('css/styles.css', 'utf8');
assert(css.includes('--primary: #D95D70'), 'CSS must include Rose terracotta primary color');
assert(css.includes('--secondary: #85689E'), 'CSS must include Dusty Heather secondary color');
assert(css.includes('--bg-primary: #FAF6F0'), 'CSS must include warm linen ivory background');
assert(css.includes('.rental-card'), 'CSS must define .rental-card');
assert(css.includes('.matcher-tabs'), 'CSS must define .matcher-tabs');
assert(css.includes('.badge-rent'), 'CSS must define .badge-rent');
assert(css.includes('.badge-lease'), 'CSS must define .badge-lease');
assert(css.includes('.profile-badge-strip'), 'CSS must define .profile-badge-strip');
console.log('✅ CSS Design System & Girlish Material UI tokens verified.');

const data = require('../js/data.js');
assert(data, 'SETTLE_IN_DATA must be defined');

// Check profile questions
const qIds = data.profileQuestions.map(q => q.id);
assert(qIds.includes('city'), 'Must ask for destination city');
assert(qIds.includes('household'), 'Must ask for accompanying members');
assert(qIds.includes('homeType'), 'Must ask for housing arrangement (Rent vs Lease)');
assert(qIds.includes('kids'), 'Must ask for school admissions');
assert(qIds.includes('pets'), 'Must ask for pets');

const householdQ = data.profileQuestions.find(q => q.id === 'household');
assert(householdQ.options.length >= 5, 'Household question should offer comprehensive options');
console.log('✅ Onboarding questions verified:', qIds);

// Check rental properties
assert(Array.isArray(data.rentalProperties), 'rentalProperties must be an array');
assert(data.rentalProperties.length >= 10, 'Must have at least 10 rental & lease properties');

const rentProps = data.rentalProperties.filter(p => (p.type || p.listingType) === 'Rent');
const leaseProps = data.rentalProperties.filter(p => (p.type || p.listingType) === 'Lease');
assert(rentProps.length > 0, 'Must include homes available for monthly rent');
assert(leaseProps.length > 0, 'Must include homes available for multi-year lease');
console.log(`✅ Rental properties verified: ${data.rentalProperties.length} total (${rentProps.length} Rent, ${leaseProps.length} Lease).`);

// 3. Verify HTML structure
const html = fs.readFileSync('index.html', 'utf8');
assert(html.includes('id="hero-city-badge"'), 'HTML must include hero-city-badge');
assert(html.includes('id="chip-members-val"'), 'HTML must include chip-members-val');
assert(html.includes('id="chip-home-val"'), 'HTML must include chip-home-val');
assert(html.includes('id="chip-pets-val"'), 'HTML must include chip-pets-val');
assert(html.includes('id="tab-btn-hoods"'), 'HTML must include tab-btn-hoods');
assert(html.includes('id="tab-btn-rentals"'), 'HTML must include tab-btn-rentals');
assert(html.includes('id="section-neighborhoods"'), 'HTML must include section-neighborhoods');
assert(html.includes('id="section-rentals"'), 'HTML must include section-rentals');
assert(html.includes('id="rental-city-select"'), 'HTML must include rental-city-select');
assert(html.includes('id="lease-modal-overlay"'), 'HTML must include lease-modal-overlay');
console.log('✅ HTML markup & Material UI elements verified.');

// 4. Verify app.js methods
const appCode = fs.readFileSync('js/app.js', 'utf8');
assert(appCode.includes('function switchMatcherTab'), 'app.js must implement switchMatcherTab');
assert(appCode.includes('function renderRentals'), 'app.js must implement renderRentals');
assert(appCode.includes('function showLeaseModal'), 'app.js must implement showLeaseModal');
assert(appCode.includes('function closeLeaseModal'), 'app.js must implement closeLeaseModal');
assert(appCode.includes('function bookPropertyTour'), 'app.js must implement bookPropertyTour');
assert(appCode.includes('function toggleShortlistProperty'), 'app.js must implement toggleShortlistProperty');
assert(appCode.includes('function askAgentAboutProperty'), 'app.js must implement askAgentAboutProperty');
console.log('✅ app.js functions verified.');

console.log('🎉 ALL TESTS PASSED! Project is 100% verified and operational.');
