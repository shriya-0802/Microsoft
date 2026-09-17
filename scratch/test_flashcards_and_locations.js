const fs = require('fs');
const path = require('path');

console.log('--- RUNNING FLASHCARDS & LOCATION MATCHER VALIDATION ---');

// 1. Verify index.html elements
const html = fs.readFileSync('index.html', 'utf8');
const htmlChecks = [
  { name: 'Flashcard Modal Overlay', test: html.includes('id="onboarding-overlay"') && html.includes('flashcard-modal-overlay') },
  { name: 'Flashcard Container', test: html.includes('class="flashcard-container"') },
  { name: 'Flashcard Step Number', test: html.includes('id="flashcard-step-num"') },
  { name: 'Flashcard Progress Bar', test: html.includes('id="flashcard-progress-bar"') },
  { name: 'Flashcard Dynamic Content Body', test: html.includes('id="flashcard-card-content"') },
  { name: 'Neighborhood Location Pills', test: html.includes('id="hood-location-pills"') },
  { name: 'Rental Location Pills', test: html.includes('id="rental-location-pills"') },
  { name: 'Rental Location Showcase Banner', test: html.includes('id="rental-location-showcase"') },
  { name: 'Hero Purpose Badge', test: html.includes('id="hero-purpose-badge"') },
  { name: 'Hero Purpose Value', test: html.includes('id="chip-purpose-val"') }
];

let htmlPass = true;
htmlChecks.forEach(c => {
  if (c.test) {
    console.log(`✅ [HTML] ${c.name} found`);
  } else {
    console.error(`❌ [HTML] ${c.name} MISSING!`);
    htmlPass = false;
  }
});

// 2. Verify css/styles.css classes
const css = fs.readFileSync('css/styles.css', 'utf8');
const cssChecks = [
  '.flashcard-modal-overlay',
  '.flashcard-container',
  '.flashcard-header',
  '.flashcard-options-grid',
  '.flashcard-opt-card',
  '.location-listing-bar',
  '.location-pill-btn',
  '.location-pill-badge',
  '.location-showcase-card'
];

let cssPass = true;
cssChecks.forEach(c => {
  if (css.includes(c)) {
    console.log(`✅ [CSS] ${c} found`);
  } else {
    console.error(`❌ [CSS] ${c} MISSING!`);
    cssPass = false;
  }
});

// 3. Verify js/app.js functions & data structures
const appJs = fs.readFileSync('js/app.js', 'utf8');
const jsChecks = [
  { name: 'REALTIME_CITY_TELEMETRY table', test: appJs.includes('REALTIME_CITY_TELEMETRY') },
  { name: 'renderFlashcardStep function', test: appJs.includes('function renderFlashcardStep()') },
  { name: 'selectFlashcardCountry', test: appJs.includes('function selectFlashcardCountry(') },
  { name: 'selectFlashcardState', test: appJs.includes('function selectFlashcardState(') },
  { name: 'selectFlashcardCity', test: appJs.includes('function selectFlashcardCity(') },
  { name: 'selectFlashcardPurpose', test: appJs.includes('function selectFlashcardPurpose(') },
  { name: 'selectFlashcardHousehold', test: appJs.includes('function selectFlashcardHousehold(') },
  { name: 'selectFlashcardHomeType', test: appJs.includes('function selectFlashcardHomeType(') },
  { name: 'selectFlashcardPet', test: appJs.includes('function selectFlashcardPet(') },
  { name: 'selectFlashcardKids', test: appJs.includes('function selectFlashcardKids(') },
  { name: 'nextFlashcardStep', test: appJs.includes('function nextFlashcardStep()') },
  { name: 'prevFlashcardStep', test: appJs.includes('function prevFlashcardStep()') },
  { name: 'completeOnboarding', test: appJs.includes('function completeOnboarding()') },
  { name: 'selectNeighborhoodLocation', test: appJs.includes('function selectNeighborhoodLocation(') },
  { name: 'selectRentalLocation', test: appJs.includes('function selectRentalLocation(') },
  { name: 'viewHomesInLocation', test: appJs.includes('function viewHomesInLocation(') },
  { name: 'clearLocationFilter', test: appJs.includes('function clearLocationFilter()') },
  { name: 'Real-time verified rental badge', test: appJs.includes('Available Now • Real-time verified') },
  { name: 'Real-time inquiry counter', test: appJs.includes('Inquiries Today') },
  { name: 'Location pill generation in renderNeighborhoods', test: appJs.includes('hood-location-pills') },
  { name: 'Location pill generation in renderRentals', test: appJs.includes('rental-location-pills') }
];

let jsPass = true;
jsChecks.forEach(c => {
  if (c.test) {
    console.log(`✅ [JS] ${c.name} found`);
  } else {
    console.error(`❌ [JS] ${c.name} MISSING!`);
    jsPass = false;
  }
});

if (htmlPass && cssPass && jsPass) {
  console.log('\n🎉 ALL VALIDATION CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('\n⚠️ SOME VALIDATION CHECKS FAILED!');
  process.exit(1);
}
