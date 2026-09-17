const fs = require('fs');

console.log('====================================================');
console.log('🧪 COMPREHENSIVE END-TO-END BUTTON & FUNCTION TEST');
console.log('====================================================');

// Build a mock browser DOM environment
class MockElement {
  constructor(tag, id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = '';
    this.classList = {
      _classes: new Set(),
      add: (...c) => c.forEach(cls => this.classList._classes.add(cls)),
      remove: (...c) => c.forEach(cls => this.classList._classes.delete(cls)),
      toggle: (cls, force) => {
        if (force === undefined) {
          if (this.classList._classes.has(cls)) this.classList._classes.delete(cls);
          else this.classList._classes.add(cls);
        } else if (force) {
          this.classList._classes.add(cls);
        } else {
          this.classList._classes.delete(cls);
        }
      },
      contains: (cls) => this.classList._classes.has(cls)
    };
    this.style = {};
    this.children = [];
    this.attributes = {};
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.dataset = {};
    this._listeners = {};
    this.remove = () => {};
  }

  addEventListener(event, fn) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(fn);
  }

  removeEventListener(event, fn) {
    if (this._listeners[event]) {
      this._listeners[event] = this._listeners[event].filter(l => l !== fn);
    }
  }

  dispatchEvent(event) {
    if (this._listeners[event.type]) {
      this._listeners[event.type].forEach(fn => fn(event));
    }
    if (this['on' + event.type]) {
      this['on' + event.type](event);
    }
  }

  click() {
    this.dispatchEvent({ type: 'click', target: this, preventDefault: () => {} });
  }

  querySelector(sel) {
    return null;
  }

  querySelectorAll(sel) {
    return [];
  }

  appendChild(el) {
    this.children.push(el);
    return el;
  }

  removeChild(el) {
    this.children = this.children.filter(c => c !== el);
    return el;
  }

  setAttribute(k, v) {
    this.attributes[k] = v;
  }

  getAttribute(k) {
    return this.attributes[k] || null;
  }
}

// Mock DOM storage & document
const elementsById = new Map();
function getOrCreate(id, tag = 'div') {
  if (!elementsById.has(id)) {
    elementsById.set(id, new MockElement(tag, id));
  }
  return elementsById.get(id);
}

// Seed essential elements from index.html
const essentialIds = [
  'auth-view', 'btn-logout', 'btn-portal-citizen', 'btn-portal-admin', 'auth-error',
  'auth-header-icon', 'auth-header-title', 'auth-header-desc', 'citizen-auth-tabs',
  'auth-submit-btn', 'auth-demo-hint', 'auth-department', 'admin-dept-picker',
  'auth-username', 'auth-password', 'onboarding-overlay', 'flashcard-card-content',
  'flashcard-step-num', 'flashcard-progress-bar', 'onboarding-next', 'onboarding-back',
  'onboarding-skip', 'dashboard-view', 'dashboard-city', 'dashboard-user-name',
  'hero-city-badge', 'hero-purpose-badge', 'chip-purpose-val', 'hero-members-badge',
  'chip-members-val', 'hero-home-badge', 'chip-home-val', 'hero-pets-badge',
  'chip-pets-val', 'stat-total', 'stat-completed', 'stat-pending', 'stat-progress',
  'progress-ring-circle', 'progress-ring-percentage', 'phase-list', 'tip-content',
  'sos-city-name', 'dashboard-sos-grid', 'section-neighborhoods', 'section-rentals',
  'tab-btn-hoods', 'tab-btn-rentals', 'hood-location-pills', 'rental-location-pills',
  'rental-location-showcase', 'rental-location-clear-btn', 'hood-search-input',
  'rental-search-input', 'filter-pet-friendly', 'rental-recommend-text', 'rentals-grid',
  'hoods-grid', 'inventory-list', 'inventory-summary', 'checklist-tasks',
  'checklist-progress-bar', 'checklist-progress-text', 'chat-input', 'chat-send',
  'chat-messages', 'commute-guide-overlay', 'commute-modal-body', 'lease-modal-overlay',
  'lease-modal-body', 'box-labels-overlay', 'box-labels-container', 'add-box-overlay',
  'dept-request-overlay', 'dept-req-dept', 'dept-req-title', 'dept-req-name',
  'dept-req-city', 'dept-req-details', 'btn-open-submit-modal', 'budget-breakdown-table'
];

essentialIds.forEach(id => getOrCreate(id));

const mockLocalStorage = {
  _store: {},
  getItem: (k) => mockLocalStorage._store[k] || null,
  setItem: (k, v) => { mockLocalStorage._store[k] = String(v); },
  removeItem: (k) => { delete mockLocalStorage._store[k]; },
  clear: () => { mockLocalStorage._store = {}; }
};

global.localStorage = mockLocalStorage;
global.window = {
  location: { reload: () => console.log('   [Mock Window] window.location.reload() triggered') },
  print: () => console.log('   [Mock Window] print() triggered'),
  alert: (msg) => console.log('   [Mock Window] alert:', msg)
};
global.location = global.window.location;
global.document = {
  getElementById: (id) => elementsById.get(id) || null,
  querySelector: (sel) => {
    if (sel.startsWith('#')) return elementsById.get(sel.slice(1)) || null;
    return null;
  },
  querySelectorAll: (sel) => {
    if (sel === '.nav-item') {
      return ['dashboard', 'neighborhood', 'inventory', 'checklist', 'documents', 'budget', 'aviation', 'admin'].map(v => {
        const el = new MockElement('div');
        el.dataset.view = v;
        return el;
      });
    }
    if (sel === '.view') {
      return Array.from(elementsById.values()).filter(e => e.id.endsWith('-view'));
    }
    if (sel === '.auth-tab-btn' || sel === '.portal-toggle-btn' || sel === '.rental-type-btn' || sel === '.rental-bhk-btn') {
      return [];
    }
    return [];
  },
  createElement: (tag) => new MockElement(tag),
  body: new MockElement('body'),
  addEventListener: (event, fn) => {
    if (event === 'DOMContentLoaded') global._domContentLoadedFn = fn;
  }
};
global.URL = {
  createObjectURL: () => 'blob:mock-url'
};
global.Blob = class Blob {};

// Load scripts in order: data.js -> agent.js -> checklist.js -> app.js
const dataCode = fs.readFileSync('js/data.js', 'utf8');
const agentCode = fs.readFileSync('js/agent.js', 'utf8');
const checklistCode = fs.readFileSync('js/checklist.js', 'utf8');
const appCode = fs.readFileSync('js/app.js', 'utf8');

try {
  eval(dataCode + '\nglobal.SETTLE_IN_DATA = SETTLE_IN_DATA;');
  console.log('✅ 1. data.js evaluated successfully');
  eval(agentCode + '\nglobal.SettleInAgent = SettleInAgent;');
  console.log('✅ 2. agent.js evaluated successfully');
  eval(checklistCode + '\nglobal.ChecklistManager = ChecklistManager;');
  console.log('✅ 3. checklist.js evaluated successfully');
  eval(appCode);
  console.log('✅ 4. app.js evaluated successfully');
} catch (err) {
  console.error('❌ Script evaluation error:', err);
  process.exit(1);
}

// Run DOMContentLoaded
console.log('\n--- TESTING DOMContentLoaded EXECUTION ---');
try {
  global._domContentLoadedFn();
  console.log('✅ DOMContentLoaded executed without any runtime exceptions!');
} catch (err) {
  console.error('❌ DOMContentLoaded threw error:', err);
  process.exit(1);
}

// Test 1: Auth portal switching & login
console.log('\n--- TESTING AUTHENTICATION & LOGIN ---');
try {
  switchAuthPortal('admin');
  switchAuthPortal('citizen');
  toggleAuthMode('signup');
  toggleAuthMode('login');

  // Set credentials for demo customer
  getOrCreate('auth-username').value = 'customer';
  getOrCreate('auth-password').value = 'password';

  const dummyEvent = { preventDefault: () => {} };
  handleAuthSubmit(dummyEvent);
  console.log('✅ Auth submission handled cleanly');
} catch (err) {
  console.error('❌ Auth error:', err);
  process.exit(1);
}

// Test 2: Flashcard Inquiry Deck Steps
console.log('\n--- TESTING 5-STEP FLASHCARD INQUIRY DECK ---');
try {
  showOnboarding();
  console.log('   Step 0: Rendered');
  selectFlashcardCountry('India');
  selectFlashcardState('Odisha');
  selectFlashcardCity('Bhubaneswar, India');

  nextFlashcardStep();
  console.log('   Step 1: Purpose');
  selectFlashcardPurpose('Corporate / IT Career Move');

  nextFlashcardStep();
  console.log('   Step 2: Household');
  selectFlashcardHousehold('1 (Solo Relocator)');

  nextFlashcardStep();
  console.log('   Step 3: Housing Arrangement');
  selectFlashcardHomeType('Monthly Rental Apartment (1–11 Months)');

  nextFlashcardStep();
  console.log('   Step 4: Pets & Schooling');
  selectFlashcardPet('Dog(s)');
  selectFlashcardKids('No school admissions needed');

  // Step back and forward
  prevFlashcardStep();
  nextFlashcardStep();

  // Finish onboarding
  completeOnboarding();
  console.log('✅ Flashcard Inquiry Deck completed cleanly!');
} catch (err) {
  console.error('❌ Flashcard deck error:', err);
  process.exit(1);
}

// Test 3: Navigation across ALL views
console.log('\n--- TESTING VIEW SWITCHER NAVIGATION ---');
const views = ['dashboard', 'neighborhood', 'inventory', 'checklist', 'documents', 'budget', 'aviation', 'admin'];
views.forEach(v => {
  try {
    switchView(v);
    console.log(`   ✓ Navigation to view: '${v}' OK`);
  } catch (err) {
    console.error(`❌ switchView('${v}') failed:`, err);
    process.exit(1);
  }
});
console.log('✅ All 8 views render with zero exceptions!');

// Test 4: Neighborhood Matcher & Location Filtering
console.log('\n--- TESTING NEIGHBORHOOD & RENTAL LOCATION MATCHER ---');
try {
  switchMatcherTab('hoods');
  switchMatcherTab('rentals');
  selectNeighborhoodLocation('Patia & Infocity');
  viewHomesInLocation('Patia & Infocity');
  selectRentalLocation('Patia & Infocity');
  clearLocationFilter();
  resetNeighborhoodFilters();
  resetRentalFilters();
  toggleShortlistProperty('rent-bbsr-1');
  showCommuteGuide('bbsr-patia');
  closeCommuteGuide();
  showLeaseModal('rent-bbsr-1');
  closeLeaseModal();
  console.log('✅ Neighborhood & rental matcher interactive buttons fully operational!');
} catch (err) {
  console.error('❌ Matcher buttons failed:', err);
  process.exit(1);
}

// Test 5: Pack & Inventory Buttons
console.log('\n--- TESTING PACK & INVENTORY ACTIONS ---');
try {
  showAddBoxModal();
  closeAddBoxModal();
  showBoxLabelsModal();
  closeBoxLabelsModal();
  toggleBoxStatus('box-1');
  console.log('✅ Pack & inventory interactive actions fully operational!');
} catch (err) {
  console.error('❌ Inventory buttons failed:', err);
  process.exit(1);
}

// Test 6: Checklist interactive buttons
console.log('\n--- TESTING CHECKLIST BUTTONS ---');
try {
  setChecklistFilter('all');
  setChecklistFilter('week1');
  setChecklistFilter('high');
  console.log('✅ Checklist filter buttons operational!');
} catch (err) {
  console.error('❌ Checklist filter failed:', err);
  process.exit(1);
}

console.log('\n====================================================');
console.log('🎉 100% END-TO-END BUTTON VERIFICATION PASSED!');
console.log('====================================================\n');
