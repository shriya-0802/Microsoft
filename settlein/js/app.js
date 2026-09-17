// ============================================================
// SettleIn 2.0 — Core Application Logic
// Clean Apple/Linear Architecture
// ============================================================

let agent;
let checklistManager;
let currentView = 'dashboard';
let userProfile = {};
let currentUser = null;

// ─── Modal Utilities ───
function openModal(overlayId) {
  const o = document.getElementById(overlayId);
  if (!o) return;
  o.classList.remove('hidden');
  o.classList.add('active');
  o.style.display = 'flex';
  o.onclick = (e) => { if (e.target === o) closeModal(overlayId); };
}
function closeModal(overlayId) {
  const o = document.getElementById(overlayId);
  if (!o) return;
  o.classList.add('hidden');
  o.classList.remove('active');
  o.style.display = 'none';
}

// ─── API ───
function getApiBase() {
  if (window.location.protocol === 'file:') return 'http://localhost:8080';
  if (window.location.port && window.location.port !== '8080') return 'http://localhost:8080';
  return '';
}
function apiFetch(path, opts = {}) {
  return fetch(/^https?:\/\//.test(path) ? path : `${getApiBase()}${path}`, opts);
}

// ─── DB Sync ───
async function loadDataFromDb() {
  try {
    const city = userProfile?.city || 'Bhubaneswar, India';
    const userId = currentUser?.id || 'demo-user';
    const [hoodRes, propRes, invRes, checklistRes] = await Promise.all([
      apiFetch(`/api/db/neighborhoods?city=${encodeURIComponent(city)}`),
      apiFetch(`/api/db/properties?city=${encodeURIComponent(city)}`),
      apiFetch(`/api/db/inventory?userId=${encodeURIComponent(userId)}`),
      apiFetch(`/api/db/checklist?userId=${encodeURIComponent(userId)}`)
    ]);
    if (hoodRes.ok) { const d = await hoodRes.json(); if (d?.neighborhoods?.length) SETTLE_IN_DATA.neighborhoods = d.neighborhoods; }
    if (propRes.ok) { const d = await propRes.json(); if (d?.properties?.length) SETTLE_IN_DATA.rentalProperties = d.properties; }
    if (invRes.ok) {
      const d = await invRes.json();
      if (d?.items?.length) {
        const local = getInventory();
        const remote = new Map(d.items.map(i => [i.id, i]));
        const merged = local.map(i => ({ ...i, ...(remote.get(i.id) || {}) }));
        d.items.forEach(i => { if (!local.some(l => l.id === i.id)) merged.push(i); });
        localStorage.setItem('settlein_inventory', JSON.stringify(merged));
      }
    }
    if (checklistRes.ok && checklistManager) {
      const d = await checklistRes.json();
      if (d?.tasks) d.tasks.forEach(rt => {
        const lt = checklistManager.tasks.find(t => t.id === rt.id);
        if (lt) Object.assign(lt, rt); else checklistManager.addTask(rt);
      });
      checklistManager.saveState();
    }
  } catch (e) { console.error('DB sync error:', e); }
}

async function saveChecklistTaskToDb(task) {
  if (!task) return;
  try { await apiFetch('/api/db/checklist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...task, userId: currentUser?.id || 'demo-user' }) }); } catch (e) {}
}
async function saveInventoryItemToDb(item) {
  if (!item) return;
  try { await apiFetch('/api/db/inventory', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...item, userId: currentUser?.id || 'demo-user' }) }); } catch (e) {}
}
async function deleteInventoryItemFromDb(id) {
  if (!id) return;
  try { await apiFetch(`/api/db/inventory/${encodeURIComponent(id)}`, { method: 'DELETE' }); } catch (e) {}
}

// ─── Profile ───
function saveProfile(p) { try { localStorage.setItem('settlein_profile', JSON.stringify(p)); } catch(e) {} }
function loadProfile() { try { const d = localStorage.getItem('settlein_profile'); return d ? JSON.parse(d) : null; } catch(e) { return null; } }

function formatLocalCurrency(val, city) {
  if (typeof val !== 'number') val = Number(val) || 0;
  const c = city || userProfile?.city || 'Bhubaneswar, India';
  const costData = SETTLE_IN_DATA?.costOfLiving?.[c] || SETTLE_IN_DATA?.costOfLiving?.['Bhubaneswar, India'];
  let sym = costData?.currencySymbol || (c.includes('Singapore') ? 'S$' : c.includes('Dubai') ? 'AED ' : c.includes('Tokyo') ? '¥' : (c.includes('USA') || c.includes('TX') || c.includes('WA')) ? '$' : '₹');
  return `${sym}${val.toLocaleString()}`;
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', async () => {
  agent = new SettleInAgent();
  checklistManager = new ChecklistManager();

  const savedUser = localStorage.getItem('settlein_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    document.getElementById('auth-view').style.display = 'none';
    document.getElementById('btn-logout').style.display = 'block';

    if (currentUser.role === 'customer') {
      const adminNav = document.querySelector('[data-view="admin"]');
      if (adminNav) adminNav.style.display = 'none';

      let savedProfile = loadProfile();
      if (!savedProfile || Object.keys(savedProfile).length === 0) {
        userProfile = {};
        showOnboarding();
      } else {
        userProfile = savedProfile;
        agent.setProfile(userProfile);
        checklistManager.initialize(userProfile);
        hideOnboarding();
        await loadDataFromDb();
        renderDashboard();
        renderChecklist();
        renderNeighborhoods();
        renderRentals();
        renderBudget();
        renderDocuments();
        renderInventory();
        renderAviation();
        showStarterPrompts();
      }
    } else if (currentUser.role === 'admin') {
      hideOnboarding();
      document.querySelectorAll('.nav-item').forEach(item => { if (item.dataset.view !== 'admin') item.style.display = 'none'; });
      switchView('admin');
      const subBtn = document.getElementById('btn-open-submit-modal');
      if (subBtn) subBtn.style.display = 'none';
      renderAdmin();
    }
  } else {
    document.getElementById('auth-view').style.display = 'flex';
    document.querySelectorAll('.view').forEach(v => { if (v.id !== 'auth-view') v.classList.remove('active'); });
  }

  setupEventListeners();
  setupNavigation();
});

// ─── Auth ───
let currentAuthPortal = 'citizen';
let authMode = 'login';

function switchAuthPortal(portal) {
  currentAuthPortal = portal;
  document.getElementById('btn-portal-citizen')?.classList.toggle('active', portal === 'citizen');
  document.getElementById('btn-portal-admin')?.classList.toggle('active', portal === 'admin');
  const err = document.getElementById('auth-error'); if (err) err.style.display = 'none';

  if (portal === 'admin') {
    document.getElementById('auth-header-title').innerHTML = `Department <span class="gradient-text">Admin Gateway</span>`;
    document.getElementById('auth-header-desc').textContent = 'Official admin sign-in for department clearances.';
    document.getElementById('citizen-auth-tabs').style.display = 'none';
    document.getElementById('admin-dept-picker').style.display = 'block';
    document.getElementById('auth-submit-btn').textContent = 'Authorize & Enter Admin Portal →';
    authMode = 'login';
  } else {
    document.getElementById('auth-header-title').innerHTML = `Citizen <span class="gradient-text">Setup Portal</span>`;
    document.getElementById('auth-header-desc').textContent = 'Login or create an account to start your relocation navigator.';
    document.getElementById('citizen-auth-tabs').style.display = 'flex';
    document.getElementById('admin-dept-picker').style.display = 'none';
    toggleAuthMode('login');
  }
}

function toggleAuthMode(mode) {
  authMode = mode;
  document.getElementById('btn-mode-login')?.classList.toggle('active', mode === 'login');
  document.getElementById('btn-mode-signup')?.classList.toggle('active', mode === 'signup');
  document.getElementById('auth-submit-btn').textContent = mode === 'signup' ? 'Create Citizen Account →' : 'Sign In to Citizen Portal →';
}

function loginAsMoverAdmin() {
  localStorage.setItem('settlein_user', JSON.stringify({ id: 'mover-admin', role: 'admin', username: 'moveradmin' }));
  window.location.href = '/admin.html';
}

async function handleAuthSubmit(e) {
  e.preventDefault();
  const username = document.getElementById('auth-username').value.trim();
  const password = document.getElementById('auth-password').value;
  const errorEl = document.getElementById('auth-error');
  errorEl.style.display = 'none';

  if (!username || !password) { errorEl.textContent = 'Please enter both username and password.'; errorEl.style.display = 'block'; return; }

  let endpoint = '/api/auth/login';
  let body = { username, password, portal: currentAuthPortal };
  if (currentAuthPortal === 'citizen' && authMode === 'signup') { endpoint = '/api/auth/signup'; body.role = 'customer'; }
  else if (currentAuthPortal === 'admin') { body.department = document.getElementById('auth-department')?.value || 'utilities'; }

  let authSuccess = false, loggedInUser = null, authToken = null;

  try {
    const res = await apiFetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Authentication failed');
    loggedInUser = data.user; authToken = data.token; authSuccess = true;
  } catch (apiErr) {
    // Fallback to local accounts
    let localUsers = [];
    try { localUsers = JSON.parse(localStorage.getItem('settlein_local_users') || '[]'); } catch(e) {}
    if (!localUsers.find(u => u.username === 'admin')) localUsers.push({ id: 'usr-admin-1', username: 'admin', password: 'password', role: 'admin', department: 'utilities' });
    if (!localUsers.find(u => u.username === 'customer')) localUsers.push({ id: 'usr-cust-1', username: 'customer', password: 'password', role: 'customer', department: null });

    if (currentAuthPortal === 'citizen' && authMode === 'signup') {
      if (localUsers.find(u => u.username === username)) { errorEl.textContent = 'Username already exists.'; errorEl.style.display = 'block'; return; }
      loggedInUser = { id: `usr-${Date.now()}`, username, password, role: 'customer', department: null };
      localUsers.push(loggedInUser); localStorage.setItem('settlein_local_users', JSON.stringify(localUsers));
      authToken = `mock-token-${loggedInUser.id}`; authSuccess = true;
    } else {
      const found = localUsers.find(u => u.username === username && u.password === password);
      if (!found) { errorEl.textContent = apiErr.message?.includes('Server') ? 'Invalid credentials.' : apiErr.message; errorEl.style.display = 'block'; return; }
      if (currentAuthPortal === 'admin' && found.role !== 'admin') { errorEl.textContent = 'Access Denied: Admin portal restricted.'; errorEl.style.display = 'block'; return; }
      if (currentAuthPortal === 'citizen' && found.role === 'admin') { errorEl.textContent = 'Admin account — use Admin Gateway.'; errorEl.style.display = 'block'; return; }
      loggedInUser = found; authToken = `mock-token-${found.id}`; authSuccess = true;
    }
  }

  if (authSuccess && loggedInUser) {
    localStorage.setItem('settlein_user', JSON.stringify(loggedInUser));
    localStorage.setItem('settlein_token', authToken || `token-${Date.now()}`);
    window.location.reload();
  }
}

// ─── Onboarding Flashcards ───
let flashcardStep = 0;
const TOTAL_FLASHCARDS = 5;

const REALTIME_CITY_TELEMETRY = {
  'Bhubaneswar, India': { temp: '28°C Sunny', safety: 9.4, transit: 'Mo Bus & Metro Active', avgRent: '₹22,000' },
  'Bengaluru, India': { temp: '24°C Breezy', safety: 9.0, transit: 'Namma Metro Active', avgRent: '₹38,000' },
  'Mumbai, India': { temp: '29°C Humid', safety: 9.2, transit: 'Western Line Open', avgRent: '₹55,000' },
  'Delhi NCR, India': { temp: '26°C Clear', safety: 8.8, transit: 'DMRC Metro Express', avgRent: '₹32,000' },
  'Hyderabad, India': { temp: '27°C Sunny', safety: 9.2, transit: 'Hitec City Metro', avgRent: '₹28,000' },
  'Pune, India': { temp: '25°C Pleasant', safety: 9.1, transit: 'MahaMetro Active', avgRent: '₹26,000' },
  'Chennai, India': { temp: '30°C Coastal', safety: 9.3, transit: 'CMRL Metro Active', avgRent: '₹24,000' },
  'Singapore': { temp: '30°C Tropical', safety: 9.8, transit: 'MRT Grid Active', avgRent: 'S$4,200' },
  'Dubai, UAE': { temp: '32°C Clear', safety: 9.6, transit: 'Dubai Metro Active', avgRent: '6,500 AED' },
  'Austin, TX': { temp: '26°C Sunny', safety: 9.1, transit: 'CapMetro Active', avgRent: '$2,100' },
  'Tokyo, Japan': { temp: '19°C Mild', safety: 9.9, transit: 'JR Yamanote Active', avgRent: '¥180,000' },
  'Seattle, WA': { temp: '18°C Overcast', safety: 9.0, transit: 'Link Light Rail', avgRent: '$2,400' }
};

function showOnboarding() {
  if (currentUser?.role === 'admin') { hideOnboarding(); return; }
  document.getElementById('onboarding-overlay')?.classList.remove('hidden');
  flashcardStep = 0;
  userProfile = userProfile || {};
  userProfile.country = userProfile.country || 'India';
  userProfile.state = userProfile.state || 'Odisha';
  userProfile.city = userProfile.city || 'Bhubaneswar, India';
  userProfile.situation = userProfile.situation || 'Corporate / IT Career Move';
  userProfile.household = userProfile.household || '1 (Solo Relocator)';
  userProfile.homeType = userProfile.homeType || 'Monthly Rental Apartment (1–11 Months)';
  userProfile.pets = userProfile.pets || 'No pets';
  userProfile.kids = userProfile.kids || 'No school admissions needed';
  renderFlashcardStep();
}

function hideOnboarding() { document.getElementById('onboarding-overlay')?.classList.add('hidden'); }

function renderFlashcardStep() {
  const container = document.getElementById('flashcard-card-content');
  const stepNum = document.getElementById('flashcard-step-num');
  const progressBar = document.getElementById('flashcard-progress-bar');
  const nextBtn = document.getElementById('onboarding-next');
  const backBtn = document.getElementById('onboarding-back');

  if (stepNum) stepNum.textContent = flashcardStep + 1;
  if (progressBar) progressBar.style.width = `${((flashcardStep + 1) / TOTAL_FLASHCARDS) * 100}%`;
  if (backBtn) { backBtn.style.display = flashcardStep > 0 ? 'inline-flex' : 'none'; backBtn.onclick = prevFlashcardStep; }
  if (nextBtn) { nextBtn.textContent = flashcardStep === TOTAL_FLASHCARDS - 1 ? 'Finish & Explore! 🎉' : 'Next Flashcard →'; nextBtn.onclick = nextFlashcardStep; }
  document.getElementById('onboarding-skip').onclick = () => { userProfile.city = userProfile.city || 'Bhubaneswar, India'; completeOnboarding(); };
  if (!container) return;

  if (flashcardStep === 0) {
    // Card 1: Destination
    const countries = [{ id:'India',name:'India',flag:'🇮🇳' },{id:'Singapore',name:'Singapore',flag:'🇸🇬'},{id:'UAE',name:'UAE',flag:'🇦🇪'},{id:'USA',name:'United States',flag:'🇺🇸'},{id:'Japan',name:'Japan',flag:'🇯🇵'}];
    const cur = userProfile.country || 'India';
    let states = cur === 'India' ? ['Odisha','Karnataka','Maharashtra','Delhi NCR','Telangana','Tamil Nadu','Gujarat'] : cur === 'USA' ? ['Texas','Washington'] : cur === 'Singapore' ? ['Singapore'] : cur === 'UAE' ? ['Dubai'] : ['Tokyo'];
    const cs = userProfile.state || states[0];
    const cityMap = { 'Odisha':['Bhubaneswar, India'],'Karnataka':['Bengaluru, India'],'Maharashtra':['Mumbai, India','Pune, India'],'Delhi NCR':['Delhi NCR, India'],'Telangana':['Hyderabad, India'],'Tamil Nadu':['Chennai, India'],'Gujarat':['Ahmedabad, India'],'Texas':['Austin, TX'],'Washington':['Seattle, WA'],'Singapore':['Singapore'],'Dubai':['Dubai, UAE'],'Tokyo':['Tokyo, Japan'] };
    const cities = cityMap[cs] || ['Bhubaneswar, India'];
    container.innerHTML = `
      <h3 class="flashcard-title"> Card 1: Where are you relocating?</h3>
      <p class="flashcard-subtitle">Select your destination. Live telemetry and civic clearances will adapt.</p>
      <div style="margin-bottom:14px;"><div class="text-xs font-semibold text-tertiary" style="text-transform:uppercase;margin-bottom:6px;">1. Country</div>
        <div class="location-bar">${countries.map(c => `<button type="button" class="location-pill ${cur===c.id?'active':''}" onclick="selectFlashcardCountry('${c.id}')">${c.flag} ${c.name}</button>`).join('')}</div></div>
      <div style="margin-bottom:14px;"><div class="text-xs font-semibold text-tertiary" style="text-transform:uppercase;margin-bottom:6px;">2. State / Region</div>
        <div class="location-bar">${states.map(s => `<button type="button" class="location-pill ${cs===s?'active':''}" onclick="selectFlashcardState('${s}')">${s}</button>`).join('')}</div></div>
      <div><div class="text-xs font-semibold text-tertiary" style="text-transform:uppercase;margin-bottom:8px;">3. City</div>
        <div style="display:flex;flex-direction:column;gap:8px;">${cities.map(city => {
          const t = REALTIME_CITY_TELEMETRY[city] || { temp:'26°C', safety:9.2, transit:'Transit Connected', avgRent:'₹22,000' };
          return `<div class="flashcard-opt-card ${userProfile.city===city?'selected':''}" onclick="selectFlashcardCity('${city}')">
            <div class="flashcard-opt-icon">🏙️</div><div style="flex:1;">
            <div class="flashcard-opt-title">${city}</div>
            <div class="flashcard-opt-desc">Safety ${t.safety}/10 · ${t.temp} · ${t.transit} · Avg Rent: <strong>${t.avgRent}/mo</strong></div></div></div>`;
        }).join('')}</div></div>`;
  } else if (flashcardStep === 1) {
    // Card 2: Purpose
    const items = [{id:'Corporate / IT Career Move',icon:'💼',title:'Corporate / IT Career Move',desc:'Job transfer, tech office'},{id:'Higher Education & Studies',icon:'<i data-lucide="graduation-cap"></i>',title:'Higher Education',desc:'University, research'},{id:'Family Life & Relocation',icon:'👨‍👩‍👧',title:'Family Life',desc:'Moving with family'},{id:'Business, Startup & Venture',icon:'🚀',title:'Business / Startup',desc:'New venture setup'},{id:'Lifestyle, Wellness & Calm Living',icon:'🌿',title:'Lifestyle & Wellness',desc:'Retirement, calm living'}];
    container.innerHTML = `<h3 class="flashcard-title">🎯 Card 2: Purpose of relocating?</h3><p class="flashcard-subtitle">Customizes clearances, checklist, and neighborhood recommendations.</p>
      <div class="flashcard-options-grid">${items.map(p => `<div class="flashcard-opt-card ${userProfile.situation===p.id?'selected':''}" onclick="selectFlashcardPurpose('${p.id}')"><div class="flashcard-opt-icon">${p.icon}</div><div><div class="flashcard-opt-title">${p.title}</div><div class="flashcard-opt-desc">${p.desc}</div></div></div>`).join('')}</div>`;
  } else if (flashcardStep === 2) {
    // Card 3: Household
    const items = [{id:'1 (Solo Relocator)',icon:'🧑',title:'Solo',desc:'Studio / 1BHK'},{id:'2 (Couple / Partners)',icon:'💑',title:'Couple',desc:'1-2 BHK'},{id:'3–4 (Family with Kids)',icon:'👨‍👩‍👧',title:'Family with Kids',desc:'2-3 BHK'},{id:'5+ (Extended Family)',icon:'',title:'Extended Family',desc:'3-4 BHK+ / Villa'},{id:'Roommates / Group',icon:'👥',title:'Roommates',desc:'Shared flat'}];
    container.innerHTML = `<h3 class="flashcard-title">👥 Card 3: How many members?</h3><p class="flashcard-subtitle">Recommends bedroom sizing and budget.</p>
      <div class="flashcard-options-grid">${items.map(h => `<div class="flashcard-opt-card ${userProfile.household===h.id?'selected':''}" onclick="selectFlashcardHousehold('${h.id}')"><div class="flashcard-opt-icon">${h.icon}</div><div><div class="flashcard-opt-title">${h.title}</div><div class="flashcard-opt-desc">${h.desc}</div></div></div>`).join('')}</div>`;
  } else if (flashcardStep === 3) {
    // Card 4: Housing
    const items = [{id:'Monthly Rental Apartment (1–11 Months)',icon:'',title:'Monthly Rental (1-11 mo)',desc:'Standard lease + security deposit'},{id:'Long-Term Multi-Year Lease (1–3 Years)',icon:'<i data-lucide="file-text"></i>',title:'Multi-Year Lease (1-3 yr)',desc:'Locked-in rates, stamp duty'},{id:'Corporate Fully-Furnished Suite',icon:'',title:'Corporate Furnished',desc:'Move-in ready with amenities'},{id:'Independent Villa / Property Purchase',icon:'🏡',title:'Villa / Purchase',desc:'Independent ownership'}];
    container.innerHTML = `<h3 class="flashcard-title"> Card 4: Housing arrangement?</h3><p class="flashcard-subtitle">Filters verified apartments and verifies tenancy compliance.</p>
      <div class="flashcard-options-grid">${items.map(ht => `<div class="flashcard-opt-card ${userProfile.homeType===ht.id?'selected':''}" onclick="selectFlashcardHomeType('${ht.id}')"><div class="flashcard-opt-icon">${ht.icon}</div><div><div class="flashcard-opt-title">${ht.title}</div><div class="flashcard-opt-desc">${ht.desc}</div></div></div>`).join('')}</div>`;
  } else if (flashcardStep === 4) {
    // Card 5: Pets & Kids
    const pets = [{id:'No pets',label:'🚫 No pets'},{id:'Dog(s)',label:'🐕 Dog(s)'},{id:'Cat(s)',label:'🐈 Cat(s)'},{id:'Dogs and cats',label:' Both'},{id:'Other pets',label:'🐦 Other'}];
    const kids = [{id:'No school admissions needed',label:'🚫 No School'},{id:'Yes (Primary / Elementary School)',label:'🏫 Primary'},{id:'Yes (Middle / High School)',label:'📚 High School'},{id:'Toddler / Preschool',label:'👶 Toddler'}];
    container.innerHTML = `<h3 class="flashcard-title"> Card 5: Pets & School Admissions</h3><p class="flashcard-subtitle">Activates pet-friendly filters and education tasks.</p>
      <div style="margin-bottom:20px;"><div class="text-sm font-bold" style="margin-bottom:8px;">1. Pets?</div><div class="location-bar">${pets.map(p => `<button type="button" class="location-pill ${userProfile.pets===p.id?'active':''}" onclick="selectFlashcardPet('${p.id}')">${p.label}</button>`).join('')}</div></div>
      <div><div class="text-sm font-bold" style="margin-bottom:8px;">2. School admissions?</div><div class="location-bar">${kids.map(k => `<button type="button" class="location-pill ${userProfile.kids===k.id?'active':''}" onclick="selectFlashcardKids('${k.id}')">${k.label}</button>`).join('')}</div></div>`;
  }
}

function selectFlashcardCountry(c) { userProfile.country=c; const m={India:['Odisha','Bhubaneswar, India'],Singapore:['Singapore','Singapore'],UAE:['Dubai','Dubai, UAE'],USA:['Texas','Austin, TX'],Japan:['Tokyo','Tokyo, Japan']}; const v=m[c]||['Odisha','Bhubaneswar, India']; userProfile.state=v[0]; userProfile.city=v[1]; renderFlashcardStep(); }
function selectFlashcardState(s) { userProfile.state=s; const m={'Odisha':'Bhubaneswar, India','Karnataka':'Bengaluru, India','Maharashtra':'Mumbai, India','Delhi NCR':'Delhi NCR, India','Telangana':'Hyderabad, India','Tamil Nadu':'Chennai, India','Gujarat':'Ahmedabad, India','Texas':'Austin, TX','Washington':'Seattle, WA','Singapore':'Singapore','Dubai':'Dubai, UAE','Tokyo':'Tokyo, Japan'}; userProfile.city=m[s]||'Bhubaneswar, India'; renderFlashcardStep(); }
function selectFlashcardCity(c) { userProfile.city = c; renderFlashcardStep(); }
function selectFlashcardPurpose(p) { userProfile.situation = p; renderFlashcardStep(); }
function selectFlashcardHousehold(h) { userProfile.household = h; renderFlashcardStep(); }
function selectFlashcardHomeType(ht) { userProfile.homeType = ht; renderFlashcardStep(); }
function selectFlashcardPet(p) { userProfile.pets = p; renderFlashcardStep(); }
function selectFlashcardKids(k) { userProfile.kids = k; renderFlashcardStep(); }
function nextFlashcardStep() { if (flashcardStep < TOTAL_FLASHCARDS - 1) { flashcardStep++; renderFlashcardStep(); } else completeOnboarding(); }
function prevFlashcardStep() { if (flashcardStep > 0) { flashcardStep--; renderFlashcardStep(); } }

async function completeOnboarding() {
  hideOnboarding();
  userProfile.userName = userProfile.userName || currentUser?.username || 'Friend';
  saveProfile(userProfile);
  agent.setProfile(userProfile);
  checklistManager.initialize(userProfile);
  await loadDataFromDb();
  renderDashboard(); renderChecklist(); renderNeighborhoods(); renderRentals(); renderBudget(); renderDocuments(); renderInventory(); renderAviation(); showStarterPrompts();
  showToast('🎉 Welcome to ' + (userProfile.city || 'your new city') + '!', 'success');
}

// ─── Navigation ───
function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchView(item.dataset.view));
  });
}

function switchView(viewId) {
  currentView = viewId;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(`${viewId}-view`);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === viewId));

  // Close mobile sidebar
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('open');

  // Lazy render
  if (viewId === 'admin') renderAdmin();
  if (viewId === 'aviation') renderAviation();
}

// ─── Dashboard ───
function renderDashboard() {
  const city = userProfile?.city || 'Your New City';
  const name = userProfile?.userName || currentUser?.username || 'Friend';
  const cityEl = document.getElementById('dashboard-city'); if (cityEl) cityEl.textContent = city;
  const nameEl = document.getElementById('dashboard-user-name'); if (nameEl) nameEl.textContent = name;
  const sosCity = document.getElementById('sos-city-name'); if (sosCity) sosCity.textContent = city;

  // Stats
  if (checklistManager) {
    const tasks = checklistManager.tasks || [];
    const total = tasks.length, done = tasks.filter(t => t.completed).length;
    document.getElementById('stat-total-tasks').textContent = total;
    document.getElementById('stat-completed-tasks').textContent = done;
    document.getElementById('stat-pending-tasks').textContent = total - done;
    document.getElementById('stat-critical-tasks').textContent = tasks.filter(t => t.priority === 'critical' && !t.completed).length;
  }

  // Next Steps
  const stepsEl = document.getElementById('dashboard-next-steps');
  if (stepsEl && checklistManager) {
    const pending = (checklistManager.tasks || []).filter(t => !t.completed).slice(0, 4);
    stepsEl.innerHTML = pending.length ? pending.map(t => `
      <div class="card" style="padding:16px; cursor:pointer;" onclick="switchView('checklist')">
        <div class="flex-between">
          <div><div class="font-semibold" style="font-size:0.8125rem;">${t.icon || '📌'} ${t.title}</div>
          <div class="text-xs text-secondary" style="margin-top:2px;">${t.subtitle || t.category || ''}</div></div>
          <span class="badge ${t.priority==='critical'?'badge-danger':'badge-primary'}">${t.phase || ''}</span>
        </div>
      </div>`).join('') : '<p class="text-sm text-secondary">All tasks completed! 🎉</p>';
  }

  // Context Info
  const contextEl = document.getElementById('dashboard-context-info');
  if (contextEl) {
    const items = [
      { label: 'Destination City', value: userProfile?.city || 'Not set', icon: '' },
      { label: 'Purpose', value: userProfile?.situation || 'Not set', icon: '🎯' },
      { label: 'Household Size', value: userProfile?.household || 'Not set', icon: '👥' },
      { label: 'Housing Type', value: userProfile?.homeType || 'Not set', icon: '' }
    ];
    contextEl.innerHTML = items.map(i => `
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:1.25rem;">${i.icon}</span>
        <div><div class="text-xs text-tertiary font-semibold" style="text-transform:uppercase;">${i.label}</div>
        <div class="font-semibold" style="font-size:0.8125rem;">${i.value}</div></div>
      </div>`).join('');
  }

  // Tips
  const tipEl = document.getElementById('tip-content');
  if (tipEl) {
    const cityData = agent?.getCityData();
    const tips = cityData?.localTips || ['Explore local food markets.', 'Use transit apps for schedules.', 'Register your address within 30 days.'];
    tipEl.innerHTML = tips.map(t => `<div style="padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-md);font-size:0.75rem;">${t}</div>`).join('');
  }

  // SOS
  const sosEl = document.getElementById('dashboard-sos-grid');
  if (sosEl) {
    const cityData = agent?.getCityData();
    const sos = cityData?.emergencyContacts || [
      { name: 'Police', number: '100', icon: '<i data-lucide="shield"></i>', color: 'var(--info)' },
      { name: 'Ambulance', number: '108', icon: '<i data-lucide="activity"></i>', color: 'var(--danger)' },
      { name: 'Fire', number: '101', icon: '<i data-lucide="flame"></i>', color: 'var(--warning)' },
      { name: 'Municipal Helpline', number: '112', icon: '<i data-lucide="phone"></i>', color: 'var(--success)' }
    ];
    sosEl.innerHTML = sos.map(s => `
      <a href="tel:${s.number}" class="sos-card" style="text-decoration:none; color:inherit;" onclick="showToast('Calling ${s.name}: ${s.number}', 'info')">
        <div class="sos-icon" style="background:${s.color || 'var(--info)'}20;">${s.icon || '<i data-lucide="phone"></i>'}</div>
        <div><div class="font-semibold" style="font-size:0.8125rem;">${s.name}</div>
        <div class="text-xs text-secondary">${s.number}</div></div>
      </a>`).join('');
  }
}

// ─── Checklist ───
function renderChecklist(filter = 'all') {
  const container = document.getElementById('checklist-tasks');
  if (!container || !checklistManager) return;
  let tasks = checklistManager.tasks || [];

  if (filter === 'completed') tasks = tasks.filter(t => t.completed);
  else if (filter === 'pending') tasks = tasks.filter(t => !t.completed);
  else if (['day1','week1','month1','settled'].includes(filter)) tasks = tasks.filter(t => t.phase === filter);

  container.innerHTML = tasks.length ? tasks.map(t => `
    <div class="checklist-item ${t.completed?'completed':''}" onclick="toggleTask('${t.id}', event)">
      <div class="checklist-checkbox">${t.completed ? '<i data-lucide="check" style="width:16px;height:16px;"></i>' : ''}</div>
      <div style="flex:1;">
        <div class="checklist-text" style="font-size:0.8125rem;font-weight:600;">${t.icon || ''} ${t.title}</div>
        <div class="text-xs text-secondary" style="margin-top:2px;">${t.subtitle || t.category || ''}</div>
      </div>
      <div style="display:flex;gap:6px;">
        ${t.adminStatus === 'APPROVED' ? '<span class="badge badge-success">Approved</span>' : 
          t.adminStatus === 'REJECTED' ? '<span class="badge badge-danger">Rejected</span>' : 
          t.adminStatus === 'PENDING' ? '<span class="badge badge-warning">Pending</span>' : ''}
        ${t.priority==='critical' ? '<span class="badge badge-danger">Critical</span>' : ''}
        <span class="badge badge-neutral">${t.phase || ''}</span>
      </div>
    </div>`).join('') : '<p class="text-sm text-secondary" style="padding:24px;text-align:center;">No tasks match this filter.</p>';
}

function setChecklistFilter(filter, el) {
  document.querySelectorAll('#checklist-filters .filter-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  renderChecklist(filter);
}

function toggleTask(taskId, event) {
  if (event) event.stopPropagation();
  if (!checklistManager) return;
  const task = checklistManager.tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    checklistManager.saveState();
    saveChecklistTaskToDb(task);
    
    if (task.completed) {
      task.adminStatus = 'PENDING';
      // Send to Dept Admin Portal
      apiFetch('/api/admin/submit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deptId: task.category,
          title: task.title,
          applicantName: currentUser?.username || 'Customer',
          city: userProfile?.city || 'Destination City',
          makerNotes: task.description || 'Checklist task completed.',
          userId: currentUser?.id,
          taskId: task.id
        })
      }).catch(e => console.error('Failed to submit admin request', e));
    } else {
      delete task.adminStatus;
    }
    
    checklistManager.saveState();
    saveChecklistTaskToDb(task);
    renderChecklist();
    renderDashboard();
    if (task.completed) showToast(`Completed: ${task.title}`, 'success');
  }
}

// ─── Chat ───
function showStarterPrompts() {
  const msgEl = document.getElementById('chat-messages');
  if (!msgEl) return;
  const city = userProfile?.city || 'your new city';
  msgEl.innerHTML = `
    <div class="chat-msg bot">Hi! I'm your SettleIn Agent for <strong>${city}</strong>. Ask me about utilities, healthcare, schools, transit, or anything about your move!</div>
    <div class="chat-starter-grid">
      <div class="chat-starter-card" onclick="sendStarterPrompt('How do I set up utilities?')"><i data-lucide="zap" style="width:16px;height:16px;"></i> Set up utilities</div>
      <div class="chat-starter-card" onclick="sendStarterPrompt('Find me a good doctor nearby')"><i data-lucide="activity" style="width:16px;height:16px;"></i> Find healthcare</div>
      <div class="chat-starter-card" onclick="sendStarterPrompt('What are the best schools?')"><i data-lucide="graduation-cap" style="width:16px;height:16px;"></i> Best schools</div>
      <div class="chat-starter-card" onclick="sendStarterPrompt('How does public transit work?')"><i data-lucide="train" style="width:16px;height:16px;"></i> Public transit</div>
      <div class="chat-starter-card" onclick="sendStarterPrompt('What should I do first?')"><i data-lucide="list-todo" style="width:16px;height:16px;"></i> What to do first</div>
      <div class="chat-starter-card" onclick="sendStarterPrompt('Tell me about local food and fun')"><i data-lucide="utensils" style="width:16px;height:16px;"></i> Local food & fun</div>
    </div>`;
}

function sendStarterPrompt(text) {
  const input = document.getElementById('chat-input');
  if (input) { input.value = text; sendMessage(); }
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input?.value?.trim();
  if (!text) return;
  input.value = '';
  input.style.height = 'auto';
  document.getElementById('chat-send').disabled = true;

  // Remove starter grid
  document.querySelectorAll('.chat-starter-grid').forEach(g => g.remove());

  appendMessage('user', text);

  // Local agent response
  let response = agent.processMessage(text);

  // Also try API
  try {
    const res = await apiFetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: text, city: userProfile?.city }) });
    if (res.ok) { 
      const d = await res.json(); 
      if (d.response) {
        response = d.response;
        
        // Check for ACTION_ADD_CHECKLIST
        const match = response.match(/<ACTION_ADD_CHECKLIST>(.*?)<\/ACTION_ADD_CHECKLIST>/);
        if (match && match[1]) {
          const taskName = match[1].trim();
          if (checklistManager) {
            checklistManager.addTask({ title: taskName, category: 'custom', phase: 'day1' });
            renderChecklist();
          }
          response = response.replace(match[0], ''); // Hide action from UI
        }
      }
    }
  } catch(e) {
    console.error(e);
  }

  appendMessage('bot', response);
}

function appendMessage(role, content) {
  const el = document.getElementById('chat-messages');
  if (!el) return;
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  div.innerHTML = formatMessageContent(content);
  el.appendChild(div);
  el.scrollTop = el.scrollHeight;
}

function formatMessageContent(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
    .replace(/•/g, '<br>•');
}

// ─── Documents ───
function loadDocState() { try { return JSON.parse(localStorage.getItem('settlein_doc_state') || '{}'); } catch(e) { return {}; } }
function saveDocState() { localStorage.setItem('settlein_doc_state', JSON.stringify(loadDocState())); }

function renderDocuments() {
  const el = document.getElementById('documents-list');
  if (!el) return;
  const docState = loadDocState();
  const docs = SETTLE_IN_DATA?.documents || [
    { id: 'doc-id', name: 'Government ID / Aadhaar', icon: '<i data-lucide="id-card"></i>', category: 'Identity', critical: true },
    { id: 'doc-passport', name: 'Passport', icon: '<i data-lucide="book"></i>', category: 'Identity', critical: true },
    { id: 'doc-rental', name: 'Rental Agreement / Lease', icon: '<i data-lucide="file-text"></i>', category: 'Housing', critical: true },
    { id: 'doc-insurance', name: 'Health Insurance Card', icon: '<i data-lucide="activity"></i>', category: 'Healthcare', critical: false },
    { id: 'doc-bank', name: 'Bank Statements', icon: '<i data-lucide="landmark"></i>', category: 'Finance', critical: false },
    { id: 'doc-edu', name: 'Education Certificates', icon: '<i data-lucide="graduation-cap"></i>', category: 'Education', critical: false },
    { id: 'doc-vehicle', name: 'Vehicle Registration', icon: '<i data-lucide="car"></i>', category: 'Transport', critical: false },
    { id: 'doc-utility', name: 'Utility Bills (Previous)', icon: '<i data-lucide="lightbulb"></i>', category: 'Utilities', critical: false }
  ];

  el.innerHTML = docs.map(d => {
    const done = docState[d.id];
    const defaultIcons = { 'identity': '<i data-lucide="id-card"></i>', 'housing': '<i data-lucide="home"></i>', 'healthcare': '<i data-lucide="activity"></i>', 'finance': '<i data-lucide="landmark"></i>', 'education': '<i data-lucide="graduation-cap"></i>', 'transport': '<i data-lucide="car"></i>', 'utilities': '<i data-lucide="lightbulb"></i>' };
    const icon = d.icon || defaultIcons[d.category?.toLowerCase()] || '<i data-lucide="file-text"></i>';
    return `<div class="doc-card ${done?'':''}">
      <div class="doc-icon" style="${d.critical?'background:var(--danger-bg);':'background:var(--primary-glow);'}">${icon}</div>
      <div style="flex:1;">
        <div class="font-semibold" style="font-size:0.8125rem;">${d.name}</div>
        <div class="text-xs text-secondary">${d.category} ${d.critical?'· <span style="color:var(--danger);">Critical</span>':''}</div>
      </div>
      <button class="btn btn-sm ${done?'btn-success':'btn-secondary'}" onclick="toggleDoc('${d.id}', event)" style="font-size:0.6875rem;">${done?'✓ Ready':'Mark Ready'}</button>
    </div>`;
  }).join('');
  if (window.lucide) window.lucide.createIcons();
}

function toggleDoc(docId, event) {
  if (event) event.stopPropagation();
  const state = loadDocState();
  state[docId] = !state[docId];
  localStorage.setItem('settlein_doc_state', JSON.stringify(state));
  renderDocuments();
  showToast(state[docId] ? ' Document marked ready!' : '📄 Document unmarked.', 'info');
}

// ─── Budget ───
function renderBudget() {
  const city = userProfile?.city || 'Bhubaneswar, India';
  const cityName = document.getElementById('budget-city-name');
  if (cityName) cityName.textContent = city;

  const costEl = document.getElementById('cost-of-living-content');
  if (costEl) {
    const costData = SETTLE_IN_DATA?.costOfLiving?.[city] || SETTLE_IN_DATA?.costOfLiving?.['Bhubaneswar, India'];
    if (costData) {
      const items = [
        { label: '1BHK Rent', value: costData.rent1br, icon: '' },
        { label: '2BHK Rent', value: costData.rent2br, icon: '' },
        { label: 'Groceries', value: costData.groceries, icon: '' },
        { label: 'Transport', value: costData.transport, icon: '' },
        { label: 'Internet', value: costData.internet, icon: '' },
        { label: 'Dining Out', value: costData.dining, icon: '' }
      ];
      costEl.innerHTML = items.map(i => `
        <div class="flex-between" style="padding:10px 0;border-bottom:1px solid var(--border-light);">
          <span class="text-sm">${i.icon} ${i.label}</span>
          <span class="font-bold text-sm">${i.value ? formatLocalCurrency(i.value, city) : 'N/A'}</span>
        </div>`).join('');
    } else {
      costEl.innerHTML = '<p class="text-sm text-secondary">Cost data not available for this city yet.</p>';
    }
  }

  // Slider label
  const slider = document.getElementById('budget-housing-percent');
  const label = document.getElementById('budget-housing-label');
  if (slider && label) {
    slider.oninput = () => { label.textContent = slider.value + '%'; calculateBudget(); };
  }
  calculateBudget();
}

function calculateBudget() {
  const income = parseFloat(document.getElementById('budget-income')?.value) || 5000;
  const pct = parseInt(document.getElementById('budget-housing-percent')?.value) || 30;
  const maxRent = Math.round(income * pct / 100);
  const el = document.getElementById('budget-max-rent');
  if (el) el.textContent = formatLocalCurrency(maxRent);
  
  const incomeInput = document.getElementById('budget-income');
  if (incomeInput) incomeInput.placeholder = formatLocalCurrency(5000);
}

function calculateMovingExpense() {
  const dist = parseFloat(document.getElementById('budget-moving-dist')?.value) || 1200;
  const rooms = parseInt(document.getElementById('budget-moving-rooms')?.value) || 2;
  const isPacking = document.getElementById('budget-moving-packing')?.checked;
  
  // Base cost calculation
  const baseFreight = dist * 1.5; // $1.5 per km
  const volumeSurcharge = rooms * 300; // $300 per room base volume
  const packingCost = isPacking ? (rooms * 250) : 0; // $250 per room for packing
  
  const total = Math.round(baseFreight + volumeSurcharge + packingCost);
  
  const resEl = document.getElementById('moving-cost-results');
  if (resEl) {
    resEl.innerHTML = `
      <div style="margin-bottom:12px;"><span class="text-sm text-tertiary">Estimated Freight:</span> <span class="font-bold float-right">${formatLocalCurrency(Math.round(baseFreight))}</span></div>
      <div style="margin-bottom:12px;"><span class="text-sm text-tertiary">Volume Surcharge (${rooms} rooms):</span> <span class="font-bold float-right">${formatLocalCurrency(Math.round(volumeSurcharge))}</span></div>
      <div style="margin-bottom:12px;"><span class="text-sm text-tertiary">Professional Packing:</span> <span class="font-bold float-right">${isPacking ? formatLocalCurrency(packingCost) : 'N/A'}</span></div>
      <hr style="border:none; border-top:1px solid var(--border-primary); margin:12px 0;">
      <div style="font-size:1.25rem; font-weight:800; color:var(--text-primary);">Total Estimate: <span style="color:var(--primary); float:right;">${formatLocalCurrency(total)}</span></div>
    `;
  }
}

// ─── Aviation ───
async function renderAviation() {
  try {
    const city = userProfile?.city || 'Bhubaneswar, India';
    const res = await apiFetch('/api/aviation/telemetry?city=' + encodeURIComponent(city));
    if (!res.ok) return;
    const data = await res.json();
    if (data.metrics) {
      document.getElementById('av-tracked').textContent = data.metrics.totalFlightsTracked?.toLocaleString() || '1,428';
      document.getElementById('av-ontime').textContent = data.metrics.onTimePerformancePct + '%';
      document.getElementById('av-fuel').textContent = data.metrics.avgFuelEfficiencyPct + '%';
      document.getElementById('av-nodes').textContent = data.metrics.gisSpatialNodesActive;
    }
    const tbody = document.getElementById('aviation-telemetry-rows');
    if (tbody && data.liveFlights) {
      const statusBadge = s => s === 'ON_TIME' ? 'badge-success' : s === 'EN_ROUTE' ? 'badge-info' : s === 'BOARDING' ? 'badge-primary' : 'badge-danger';
      const cityClean = city.split(',')[0].trim();
      tbody.innerHTML = data.liveFlights.map(f => {
        const isArr = f.destination.includes(cityClean);
        const directionIcon = isArr ? '<span style="color:var(--success);"> ARR</span>' : '<span style="color:var(--info);"> DEP</span>';
        return `<tr>
          <td class="font-bold">${f.flightId} <br><span style="font-size:0.65rem; padding:2px 4px; border-radius:4px; background:var(--bg-secondary);">${directionIcon}</span></td>
          <td class="text-sm">DEP: <b>${f.departureTime || 'TBA'}</b><br>ARR: <b>${f.arrivalTime || 'TBA'}</b></td>
          <td class="text-sm">${f.origin} → ${f.destination}</td>
          <td class="text-xs text-secondary">${f.lat}, ${f.lng}</td>
          <td class="text-sm">${f.altitudeFt?.toLocaleString()} ft / ${f.speedKts} kts</td>
          <td><span class="badge ${statusBadge(f.status)}">${f.status}</span></td>
          <td class="text-sm">${f.delayRisk}</td>
          <td class="text-xs text-secondary">${(f.dataSources||[]).join(', ')}</td>
        </tr>`;
      }).join('');
    }
  } catch(e) {}

  // ML Predictor
  const predictBtn = document.getElementById('av-btn-predict');
  if (predictBtn) predictBtn.onclick = async () => {
    const body = { flightId: document.getElementById('av-input-flight')?.value, distanceKm: document.getElementById('av-input-dist')?.value, weatherCondition: document.getElementById('av-input-weather')?.value };
    try {
      const res = await apiFetch('/api/aviation/predict-delay', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const pred = await res.json();
      const el = document.getElementById('av-prediction-result');
      if (el) {
        el.style.display = 'block';
        const riskColor = pred.delayRiskLevel === 'HIGH' ? 'var(--danger)' : pred.delayRiskLevel === 'MEDIUM' ? 'var(--warning)' : 'var(--success)';
        el.innerHTML = `
          <div class="font-bold" style="font-size:0.9375rem;margin-bottom:8px;">ML Prediction: ${pred.flightId}</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;">
            <div><div class="text-xs text-tertiary">Delay Risk</div><div class="font-bold" style="color:${riskColor};">${pred.delayRiskLevel} (${pred.delayProbability}%)</div></div>
            <div><div class="text-xs text-tertiary">Predicted Delay</div><div class="font-bold">${pred.predictedDelayMinutes} min</div></div>
            <div><div class="text-xs text-tertiary">Fuel Efficiency</div><div class="font-bold">${pred.fuelEfficiencyScore}%</div></div>
            <div><div class="text-xs text-tertiary">Optimal Alt</div><div class="font-bold">${pred.optimalAltitude}</div></div>
          </div>
          <div style="margin-top:12px;padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-md);font-size:0.75rem;">${pred.aiRecommendation || ''}</div>`;
      }
    } catch(e) { showToast('Prediction API unavailable.', 'error'); }
  };
}

// ─── Admin Portal ───
let currentAdminDeptFilter = 'all';
let currentAdminStatusFilter = 'ALL';

async function renderAdmin(deptFilter, statusFilter) {
  if (deptFilter !== undefined) currentAdminDeptFilter = deptFilter;
  if (statusFilter !== undefined) currentAdminStatusFilter = statusFilter;

  // Dept tabs
  const deptTabs = document.getElementById('admin-dept-tabs');
  if (deptTabs) {
    const depts = [{ id: 'all', name: ' All Departments' }, { id: 'utilities', name: ' Utilities' }, { id: 'gov', name: ' Government' }, { id: 'healthcare', name: '🏥 Healthcare' }, { id: 'banking', name: ' Banking' }, { id: 'education', name: ' Education' }, { id: 'aviation', name: ' Aviation' }];
    deptTabs.innerHTML = depts.map(d => `<button class="filter-btn ${currentAdminDeptFilter === d.id ? 'active' : ''}" onclick="renderAdmin('${d.id}')">${d.name}</button>`).join('');
  }

  // Status filter buttons
  document.querySelectorAll('.adm-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.status === currentAdminStatusFilter);
    b.onclick = () => renderAdmin(currentAdminDeptFilter, b.dataset.status);
  });

  try {
    const res = await apiFetch(`/api/admin/requests?deptId=${currentAdminDeptFilter}&status=${currentAdminStatusFilter}`);
    const data = await res.json();

    document.getElementById('adm-total').textContent = data.total || 0;
    document.getElementById('adm-pending').textContent = data.pendingCount || 0;
    document.getElementById('adm-approved').textContent = data.approvedCount || 0;
    document.getElementById('adm-rejected').textContent = data.rejectedCount || 0;

    const list = document.getElementById('admin-requests-list');
    if (list) {
      list.innerHTML = (data.requests || []).map(r => {
        const statusBadge = r.status === 'APPROVED' ? 'badge-success' : r.status === 'REJECTED' ? 'badge-danger' : 'badge-warning';
        const isAdmin = currentUser?.role === 'admin';
        return `<div class="card" style="padding:20px;">
          <div class="flex-between" style="margin-bottom:12px;">
            <div><div class="font-bold" style="font-size:0.9375rem;">${r.title}</div>
            <div class="text-xs text-secondary">${r.deptName} · ${r.id} · ${r.submittedDate}</div></div>
            <span class="badge ${statusBadge}">${r.status}</span>
          </div>
          <div class="text-sm" style="margin-bottom:8px;"><strong>Applicant:</strong> ${r.applicantName} · <strong>City:</strong> ${r.city}</div>
          <div class="text-xs text-secondary" style="margin-bottom:12px;">${r.makerNotes || ''}</div>
          ${r.checkerRemarks ? `<div class="text-xs" style="padding:8px;background:var(--success-bg);border-radius:var(--radius-sm);margin-bottom:8px;">${r.checkerRemarks}</div>` : ''}
          ${r.status === 'PENDING' && isAdmin ? `
            <div style="display:flex;gap:6px;">
              <button class="btn btn-success btn-sm" onclick="adminAction('approve','${r.id}')"> Approve</button>
              <button class="btn btn-danger btn-sm" onclick="adminAction('reject','${r.id}')"> Reject</button>
            </div>` : ''}
        </div>`;
      }).join('') || '<p class="text-sm text-secondary" style="text-align:center;padding:24px;">No requests found.</p>';
    }
  } catch(e) {
    document.getElementById('admin-requests-list').innerHTML = '<p class="text-sm text-secondary">Unable to load requests. Is the server running?</p>';
  }
}

async function adminAction(action, reqId) {
  try {
    const res = await apiFetch(`/api/admin/${action}-request`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ requestId: reqId, approvedBy: currentUser?.username || 'Admin' }) });
    if (res.ok) { showToast(`${action === 'approve' ? ' Approved' : ' Rejected'}: ${reqId}`, action === 'approve' ? 'success' : 'error'); renderAdmin(); }
  } catch(e) { showToast('Action failed.', 'error'); }
}

function setupDepartmentRequestModal() {
  document.getElementById('btn-open-submit-modal')?.addEventListener('click', () => openModal('submit-request-overlay'));
  document.getElementById('close-submit-modal')?.addEventListener('click', () => closeModal('submit-request-overlay'));

  document.getElementById('submit-request-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = {
      deptId: document.getElementById('req-dept').value,
      title: document.getElementById('req-title').value,
      applicantName: document.getElementById('req-name').value,
      city: document.getElementById('req-city').value,
      makerNotes: document.getElementById('req-notes').value
    };
    try {
      const res = await apiFetch('/api/admin/submit-request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (res.ok) { showToast(' Request submitted!', 'success'); closeModal('submit-request-overlay'); renderAdmin(); }
    } catch(e) { showToast('Submission failed.', 'error'); }
  });
}

// ─── Neighborhoods ───
let currentHoodCity = '';
let currentHoodVibe = 'all';
let currentHoodSearch = '';

function renderNeighborhoods() {
  currentHoodCity = userProfile?.city || 'Bhubaneswar, India';
  const citySelect = document.getElementById('hood-city-select');
  if (citySelect) { 
    citySelect.value = currentHoodCity; 
    citySelect.onchange = () => { 
      currentHoodCity = citySelect.value;
      if (userProfile) {
        userProfile.city = currentHoodCity;
        saveProfile(userProfile);
      }
      renderNeighborhoods(); 
      renderRentals();
      renderBudget();
      renderAviation();
    }; 
  }
  document.getElementById('hood-selected-city-text').textContent = currentHoodCity;

  // Vibe filter
  document.querySelectorAll('.hood-vibe-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.vibe === currentHoodVibe);
    b.onclick = () => { currentHoodVibe = b.dataset.vibe; document.querySelectorAll('.hood-vibe-btn').forEach(x => x.classList.toggle('active', x.dataset.vibe === currentHoodVibe)); filterNeighborhoods(); };
  });

  // Search
  document.getElementById('hood-search-input').oninput = (e) => { currentHoodSearch = e.target.value.toLowerCase(); filterNeighborhoods(); };

  // Pref checkboxes
  document.querySelectorAll('.hood-pref').forEach(cb => { cb.onchange = filterNeighborhoods; });

  filterNeighborhoods();
}

function filterNeighborhoods() {
  let hoods = (SETTLE_IN_DATA?.neighborhoods || []).filter(h => h.city === currentHoodCity);
  if (currentHoodVibe !== 'all') hoods = hoods.filter(h => h.vibe && h.vibe.includes(currentHoodVibe));
  if (currentHoodSearch) hoods = hoods.filter(h => (h.name + h.landmarks?.join('')).toLowerCase().includes(currentHoodSearch));

  // Match scoring
  const prefMetro = document.getElementById('pref-metro')?.checked;
  const prefSchools = document.getElementById('pref-schools')?.checked;
  const prefSafety = document.getElementById('pref-safety')?.checked;
  const prefGreenery = document.getElementById('pref-greenery')?.checked;
  const totalPrefs = [prefMetro, prefSchools, prefSafety, prefGreenery].filter(Boolean).length;

  hoods.forEach(h => {
    let matched = 0;
    if (prefMetro && h.metroAccess) matched++;
    if (prefSchools && h.schoolRating >= 9.0) matched++;
    if (prefSafety && h.safetyScore >= 9.0) matched++;
    if (prefGreenery && h.greenery) matched++;
    h._matchPct = totalPrefs > 0 ? Math.round((matched / totalPrefs) * 100) : 100;
  });
  hoods.sort((a, b) => b._matchPct - a._matchPct);

  // Location pills
  const pillsEl = document.getElementById('hood-location-pills');
  if (pillsEl) {
    const locs = [...new Set(hoods.map(h => h.name))];
    pillsEl.innerHTML = locs.map(l => `<button class="location-pill" onclick="viewHomesInLocation('${l}')">${l}</button>`).join('');
  }

  // Grid
  const grid = document.getElementById('neighborhoods-grid');
  if (grid) {
    grid.innerHTML = hoods.length ? hoods.map(h => `
      <div class="hood-card">
        <div class="hood-card-banner" style="background: url('/images/${(h.name.length % 3) === 0 ? 'luxury' : (h.name.length % 3) === 1 ? 'suburban' : 'downtown'}.jpg') center/cover;"></div>
        <div class="hood-card-body">
          <div class="flex-between"><div class="hood-card-title">${h.name}</div><span class="badge badge-primary">${h._matchPct}% Match</span></div>
          <div class="hood-card-meta">${h.city} · ${h.vibe || ''}</div>
          <div class="hood-score-row">
            <div class="hood-score"> ${h.safetyScore || '-'}</div>
            <div class="hood-score"> ${h.schoolRating || '-'}</div>
            <div class="hood-score"> ${h.metroAccess ? 'Yes' : 'No'}</div>
            <div class="hood-score"> ${h.avgRent ? formatLocalCurrency(h.avgRent) : '-'}/mo</div>
          </div>
          ${h.landmarks?.length ? `<div class="text-xs text-secondary" style="margin-bottom:8px;"> ${h.landmarks.slice(0, 3).join(' · ')}</div>` : ''}
          <div style="display:flex;gap:6px;">
            <button class="btn btn-sm btn-primary btn-pill" onclick="viewHomesInLocation('${h.name}')"> View Homes</button>
            <button class="btn btn-sm btn-secondary btn-pill" onclick="showCommuteGuide('${h.id || h.name}')"> Commute</button>
          </div>
        </div>
      </div>`).join('') : '<p class="text-sm text-secondary" style="text-align:center;padding:24px;">No neighborhoods found for this city / filter.</p>';
  }
}

// ─── Rentals ───
let currentRentalCity = '';
let currentRentalType = 'all';
let currentRentalBHK = 'all';
let currentRentalSearch = '';
let currentRentalLocation = '';

function renderRentals() {
  currentRentalCity = userProfile?.city || 'Bhubaneswar, India';
  const citySelect = document.getElementById('rental-city-select');
  if (citySelect) {
    const cities = [...new Set((SETTLE_IN_DATA?.rentalProperties || []).map(p => p.city))];
    citySelect.innerHTML = cities.map(c => `<option value="${c}" ${c === currentRentalCity ? 'selected' : ''}>${c}</option>`).join('');
    citySelect.onchange = () => { currentRentalCity = citySelect.value; filterRentals(); };
  }

  // Filters
  document.querySelectorAll('.rental-type-btn').forEach(b => { b.onclick = () => { currentRentalType = b.dataset.type; document.querySelectorAll('.rental-type-btn').forEach(x => x.classList.toggle('active', x.dataset.type === currentRentalType)); filterRentals(); }; });
  document.querySelectorAll('.rental-bhk-btn').forEach(b => { b.onclick = () => { currentRentalBHK = b.dataset.bhk; document.querySelectorAll('.rental-bhk-btn').forEach(x => x.classList.toggle('active', x.dataset.bhk === currentRentalBHK)); filterRentals(); }; });
  document.getElementById('rental-search-input').oninput = (e) => { currentRentalSearch = e.target.value.toLowerCase(); filterRentals(); };
  document.getElementById('filter-pet-friendly').onchange = filterRentals;

  filterRentals();
}

function filterRentals() {
  let props = (SETTLE_IN_DATA?.rentalProperties || []).filter(p => p.city === currentRentalCity);
  if (currentRentalType !== 'all') props = props.filter(p => p.type === currentRentalType);
  if (currentRentalBHK !== 'all') props = props.filter(p => p.bhk === currentRentalBHK);
  if (currentRentalSearch) props = props.filter(p => (p.title + p.society + p.location).toLowerCase().includes(currentRentalSearch));
  if (document.getElementById('filter-pet-friendly')?.checked) props = props.filter(p => p.petFriendly);
  if (currentRentalLocation) props = props.filter(p => p.location === currentRentalLocation || p.society === currentRentalLocation);

  // Location pills
  const pillsEl = document.getElementById('rental-location-pills');
  if (pillsEl) {
    const locs = [...new Set(props.map(p => p.location || p.society).filter(Boolean))];
    pillsEl.innerHTML = locs.map(l => `<button class="location-pill ${currentRentalLocation === l ? 'active' : ''}" onclick="selectRentalLocation('${l}')">${l}</button>`).join('');
  }
  document.getElementById('rental-location-clear-btn').style.display = currentRentalLocation ? 'inline' : 'none';

  // Grid
  const grid = document.getElementById('rentals-grid');
  if (grid) {
    grid.innerHTML = props.length ? props.map(p => `
      <div class="rental-card">
        <div style="height: 160px; background: url('/images/prop_${Math.abs(p.id.split('').reduce((a,b)=>a+b.charCodeAt(0),0)) % 3 + 1}.jpg') center/cover; border-radius: calc(var(--radius-xl) - 1px) calc(var(--radius-xl) - 1px) 0 0; margin: calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-5) calc(var(--space-5) * -1);"></div>
        <div class="flex-between" style="margin-bottom:8px;">
          <span class="badge ${p.type === 'Rent' ? 'badge-success' : 'badge-warning'}">${p.type || 'Rent'}</span>
          <span class="rental-price">${formatLocalCurrency(p.price || p.rent)}/mo</span>
        </div>
        <div class="rental-title">${p.title || p.bhk}</div>
        <div class="text-xs text-secondary" style="margin-bottom:8px;">${p.society || ''} · ${p.location || ''}</div>
        <div class="rental-meta" style="margin-bottom:12px;">
          <span> ${p.bhk}</span>
          <span> ${p.area || '-'} sqft</span>
          ${p.petFriendly ? '<span> Pet-Friendly</span>' : ''}
          ${p.furnished ? '<span> Furnished</span>' : ''}
        </div>
        <div style="display:flex;gap:6px;">
          <button class="btn btn-sm btn-primary btn-pill" onclick="bookPropertyTour('${p.id}')"> Book Tour</button>
          <button class="btn btn-sm btn-secondary btn-pill" onclick="showLeaseModal('${p.id}')"> Lease Guide</button>
        </div>
      </div>`).join('') : '<p class="text-sm text-secondary" style="text-align:center;padding:24px;">No homes match your filters.</p>';
  }
}

function selectRentalLocation(loc) { currentRentalLocation = loc; filterRentals(); }
function clearLocationFilter() { currentRentalLocation = ''; filterRentals(); }

function viewHomesInLocation(locName) {
  switchMatcherTab('rentals');
  currentRentalLocation = locName;
  filterRentals();
}

function switchMatcherTab(tab) {
  document.getElementById('tab-btn-hoods')?.classList.toggle('active', tab === 'hoods');
  document.getElementById('tab-btn-rentals')?.classList.toggle('active', tab === 'rentals');
  document.getElementById('section-neighborhoods').style.display = tab === 'hoods' ? 'block' : 'none';
  document.getElementById('section-rentals').style.display = tab === 'rentals' ? 'block' : 'none';
}

// ─── Tour Booking ───
function bookPropertyTour(propId) {
  const prop = (SETTLE_IN_DATA?.rentalProperties || []).find(p => p.id === propId);
  if (!prop) return;
  document.getElementById('tour-prop-id').value = prop.id;
  document.getElementById('tour-prop-title').value = prop.title || prop.bhk;
  document.getElementById('tour-prop-society').value = prop.society || '';
  document.getElementById('tour-prop-city').value = prop.city;
  document.getElementById('book-tour-property-summary').innerHTML = `<div class="font-bold text-sm">${prop.title || prop.bhk}</div><div class="text-xs text-secondary">${prop.society || ''} · ${prop.location || ''} · ${formatLocalCurrency(prop.price || prop.rent)}/mo</div>`;
  openModal('book-tour-modal-overlay');
}

function closeBookTourModal() { closeModal('book-tour-modal-overlay'); }

// ─── Lease / Commute Modals ───
function showCommuteGuide(hoodId) {
  const hood = (SETTLE_IN_DATA?.neighborhoods || []).find(h => (h.id || h.name) === hoodId);
  const body = document.getElementById('commute-modal-body');
  if (body) {
    body.innerHTML = hood ? `
      <div class="font-bold" style="margin-bottom:12px;">${hood.name} — ${hood.city}</div>
      <div class="text-sm text-secondary" style="line-height:1.6;">
        ${hood.transitInfo || `<strong> Metro:</strong> ${hood.metroAccess ? 'Walking distance' : 'Bus connection required'}<br>
        <strong> Safety:</strong> ${hood.safetyScore || 'N/A'}/10<br>
        <strong> Schools:</strong> Rating ${hood.schoolRating || 'N/A'}/10<br>
        <strong> Avg Rent:</strong> ${hood.avgRent ? formatLocalCurrency(hood.avgRent) : 'N/A'}/mo`}
      </div>` : '<p class="text-sm text-secondary">Transit info unavailable.</p>';
  }
  openModal('commute-guide-overlay');
}
function closeCommuteGuide() { closeModal('commute-guide-overlay'); }

function showLeaseModal(propId) {
  const prop = (SETTLE_IN_DATA?.rentalProperties || []).find(p => p.id === propId);
  const body = document.getElementById('lease-modal-body');
  if (body) {
    body.innerHTML = `
      <div class="font-bold" style="margin-bottom:12px;">${prop?.title || 'Property'} — Lease Guide</div>
      <div class="text-sm text-secondary" style="line-height:1.8;">
        <strong> Security Deposit:</strong> 2-3 months rent (refundable)<br>
        <strong> Agreement Period:</strong> 11 months standard (renewable)<br>
        <strong> Required Documents:</strong> ID proof, income proof, previous address<br>
        <strong> Utilities Transfer:</strong> Electricity & water meter name change<br>
        <strong> Notice Period:</strong> 1-2 months (check lease terms)<br>
        <strong> Registration:</strong> Mandatory for leases > 11 months<br>
        <strong> Tip:</strong> Always get a police verification receipt.
      </div>`;
  }
  openModal('lease-modal-overlay');
}
function closeLeaseModal() { closeModal('lease-modal-overlay'); }

// ─── Inventory ───
let currentInventoryRoom = 'all';
let currentInventoryStatus = 'ALL';

function getInventory() { try { return JSON.parse(localStorage.getItem('settlein_inventory') || '[]'); } catch(e) { return []; } }
function saveInventory(items) { localStorage.setItem('settlein_inventory', JSON.stringify(items)); }

function renderInventory(roomFilter, statusFilter) {
  if (roomFilter !== undefined) currentInventoryRoom = roomFilter;
  if (statusFilter !== undefined) currentInventoryStatus = statusFilter;

  let items = getInventory();
  if (items.length === 0) {
    // Seed from data.js
    items = SETTLE_IN_DATA?.inventoryItems || [];
    if (items.length) saveInventory(items);
  }

  // Room filter buttons
  document.querySelectorAll('.inv-room-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.room === currentInventoryRoom);
    b.onclick = () => renderInventory(b.dataset.room);
  });
  document.querySelectorAll('.inv-status-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.status === currentInventoryStatus);
    b.onclick = () => renderInventory(currentInventoryRoom, b.dataset.status);
  });

  // Search
  const search = document.getElementById('inv-search-input')?.value?.toLowerCase() || '';

  let filtered = [...items];
  if (currentInventoryRoom !== 'all') filtered = filtered.filter(i => i.room === currentInventoryRoom);
  if (currentInventoryStatus !== 'ALL') {
    if (currentInventoryStatus === 'FRAGILE') filtered = filtered.filter(i => i.fragile);
    else filtered = filtered.filter(i => i.status === currentInventoryStatus);
  }
  if (search) filtered = filtered.filter(i => (i.name + i.boxNum + i.category).toLowerCase().includes(search));

  // Stats
  document.getElementById('inv-total-boxes').textContent = items.length;
  document.getElementById('inv-total-weight').textContent = items.reduce((s, i) => s + (i.weightKg || 0), 0) + ' kg';
  document.getElementById('inv-total-value').textContent = formatLocalCurrency(items.reduce((s, i) => s + (i.value || 0), 0));
  document.getElementById('inv-total-fragile').textContent = items.filter(i => i.fragile).length;

  // Table
  const tbody = document.getElementById('inv-table-body');
  if (tbody) {
    const roomLabels = { living: ' Living', bedroom: ' Bedroom', kitchen: ' Kitchen', office: ' Office' };
    const statusBadge = s => s === 'Delivered' ? 'badge-success' : s === 'Loaded' ? 'badge-info' : 'badge-neutral';
    tbody.innerHTML = filtered.length ? filtered.map(i => `<tr>
      <td class="font-bold">${i.boxNum || '-'}</td>
      <td>${i.name || '-'}</td>
      <td class="text-sm">${roomLabels[i.room] || i.room || '-'} · ${i.category || '-'}</td>
      <td>${i.weightKg || 0} kg</td>
      <td>${formatLocalCurrency(i.value || 0)}</td>
      <td>${i.fragile ? ' Yes' : '—'}</td>
      <td><span class="badge ${statusBadge(i.status)}">${i.status || 'Packed'}</span></td>
      <td style="text-align:right;">
        ${(i.status === 'Packed' || !i.status) ? `<button class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="deleteBox('${i.id}')"> Cancel</button>` : '<span class="text-xs text-secondary">In Transit</span>'}
      </td>
    </tr>`).join('') : '<tr><td colspan="8" class="text-sm text-secondary" style="text-align:center;padding:24px;">No items match your filter.</td></tr>';
  }

  // Search listener
  const searchInput = document.getElementById('inv-search-input');
  if (searchInput) searchInput.oninput = () => renderInventory();
}

function showAddBoxModal() { openModal('add-box-overlay'); }
function closeAddBoxModal() { closeModal('add-box-overlay'); }

function handleSaveNewBox(e) {
  e.preventDefault();
  const items = getInventory();
  const newItem = {
    id: `INV-${Date.now()}`,
    room: document.getElementById('box-room').value,
    name: document.getElementById('box-name').value,
    category: document.getElementById('box-category').value,
    boxNum: document.getElementById('box-id').value,
    weightKg: parseInt(document.getElementById('box-weight').value) || 0,
    value: parseInt(document.getElementById('box-value').value) || 0,
    fragile: document.getElementById('box-fragile').checked,
    status: 'Packed'
  };
  items.push(newItem);
  saveInventory(items);
  saveInventoryItemToDb(newItem);
  closeAddBoxModal();
  renderInventory();
  showToast(' Item added to inventory!', 'success');
  document.getElementById('add-box-form').reset();
}

function toggleBoxStatus(id) {
  const items = getInventory();
  const item = items.find(i => i.id === id);
  if (item) {
    const cycle = ['Packed', 'Loaded', 'Delivered'];
    const idx = cycle.indexOf(item.status || 'Packed');
    item.status = cycle[(idx + 1) % cycle.length];
    saveInventory(items);
    saveInventoryItemToDb(item);
    renderInventory();
  }
}

function deleteBox(id) {
  if (!confirm('Cancel/Delete this item?')) return;
  const items = getInventory();
  const item = items.find(i => i.id === id);
  if (item && item.status !== 'Packed' && item.status) {
    showToast('Cannot delete an item that is already in transit.', 'error');
    return;
  }
  const newItems = items.filter(i => i.id !== id);
  saveInventory(newItems);
  deleteInventoryItemFromDb(id);
  renderInventory();
  showToast(' Item removed.', 'info');
}

function showBoxLabelsModal() {
  const items = getInventory();
  const container = document.getElementById('box-labels-container');
  if (container) {
    container.innerHTML = items.map(i => `
      <div style="border:2px dashed var(--border-primary);border-radius:var(--radius-lg);padding:16px;display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div class="font-bold">${i.boxNum || 'BOX'}</div>
          <div class="text-sm">${i.name}</div>
          <div class="text-xs text-secondary">${i.room || ''} · ${i.weightKg || 0}kg ${i.fragile ? '·  FRAGILE' : ''}</div>
        </div>
        <div style="font-size:2rem;">${i.fragile ? '' : ''}</div>
      </div>`).join('');
  }
  openModal('box-labels-overlay');
}
function closeBoxLabelsModal() { closeModal('box-labels-overlay'); }

function exportInventorySlip() {
  const items = getInventory();
  if (!items.length) return showToast('Inventory is empty!', 'error');

  const printDiv = document.createElement('div');
  printDiv.style.padding = '30px';
  printDiv.style.fontFamily = 'Inter, sans-serif';
  printDiv.style.color = '#1f2937';
  
  const totalWeight = items.reduce((s, i) => s + (i.weightKg || 0), 0);
  const totalValue = items.reduce((s, i) => s + (i.value || 0), 0);

  printDiv.innerHTML = `
    <h1 style="color:#4f46e5; border-bottom:2px solid #e5e7eb; padding-bottom:10px;"> SettleIn Packing Manifest</h1>
    <div style="display:flex; justify-content:space-between; margin-bottom:20px; font-size:14px; color:#4b5563;">
      <span><strong>Date:</strong> ${new Date().toLocaleDateString()}</span>
      <span><strong>Total Items:</strong> ${items.length} boxes</span>
      <span><strong>Total Weight:</strong> ${totalWeight} kg</span>
    </div>
    <table style="width:100%; border-collapse:collapse; font-size:12px; margin-top:20px;">
      <tr style="background:#f3f4f6; text-align:left;">
        <th style="padding:10px; border:1px solid #e5e7eb;">Box ID</th>
        <th style="padding:10px; border:1px solid #e5e7eb;">Item Name</th>
        <th style="padding:10px; border:1px solid #e5e7eb;">Room</th>
        <th style="padding:10px; border:1px solid #e5e7eb;">Weight</th>
        <th style="padding:10px; border:1px solid #e5e7eb;">Status</th>
      </tr>
      ${items.map(i => `
      <tr>
        <td style="padding:8px; border:1px solid #e5e7eb; font-weight:bold;">${i.boxNum || '-'}</td>
        <td style="padding:8px; border:1px solid #e5e7eb;">${i.name} ${i.fragile ? ' (FRAGILE)' : ''}</td>
        <td style="padding:8px; border:1px solid #e5e7eb;">${i.room}</td>
        <td style="padding:8px; border:1px solid #e5e7eb;">${i.weightKg} kg</td>
        <td style="padding:8px; border:1px solid #e5e7eb;">${i.status || 'Packed'}</td>
      </tr>`).join('')}
    </table>
    <div style="margin-top:40px; font-size:10px; color:#9ca3af; text-align:center;">Generated by SettleIn Relocation Navigator</div>
  `;

  const opt = {
    margin:       0.5,
    filename:     'settlein_packing_manifest.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  
  showToast('Generating PDF...', 'info');
  html2pdf().set(opt).from(printDiv).save().then(() => {
    showToast(' Packing slip downloaded!', 'success');
  });
}

// ─── Event Listeners ───
function setupEventListeners() {
  // Logout
  document.getElementById('btn-logout')?.addEventListener('click', () => {
    localStorage.removeItem('settlein_user');
    localStorage.removeItem('settlein_token');
    window.location.reload();
  });

  // Chat
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  if (chatInput) {
    chatInput.addEventListener('input', () => { sendBtn.disabled = !chatInput.value.trim(); chatInput.style.height = 'auto'; chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px'; });
    chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } });
  }
  if (sendBtn) sendBtn.addEventListener('click', sendMessage);

  // Mobile sidebar
  document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    document.getElementById('sidebar')?.classList.toggle('open');
    document.getElementById('sidebar-overlay')?.classList.toggle('open');
  });
  document.getElementById('sidebar-overlay')?.addEventListener('click', () => {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebar-overlay')?.classList.remove('open');
  });

  // Tour booking form
  document.getElementById('book-tour-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = {
      propId: document.getElementById('tour-prop-id').value,
      propTitle: document.getElementById('tour-prop-title').value,
      society: document.getElementById('tour-prop-society').value,
      city: document.getElementById('tour-prop-city').value,
      tourDate: document.getElementById('tour-date').value,
      tourTime: document.getElementById('tour-time').value,
      mode: document.querySelector('input[name="tour-mode"]:checked')?.value,
      applicantName: document.getElementById('tour-applicant-name').value,
      phone: document.getElementById('tour-phone').value,
      notes: document.getElementById('tour-notes').value
    };
    try { await apiFetch('/api/db/bookings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); } catch(e) {}
    
    closeBookTourModal();
    
    // Simulate Email Send
    const emailBody = document.getElementById('email-modal-body');
    if (emailBody) {
      emailBody.innerHTML = `<strong>To:</strong> ${body.applicantName} &lt;customer@settlein.local&gt;\n<strong>Subject:</strong>  Home Tour Confirmed: ${body.propTitle}\n\nHi ${body.applicantName.split(' ')[0]},\n\nYour property tour is booked and confirmed!\n\n<strong>Property:</strong> ${body.propTitle} (${body.society})\n<strong>Date:</strong> ${body.tourDate}\n<strong>Time:</strong> ${body.tourTime}\n<strong>Mode:</strong> ${body.mode}\n\nOur agent will contact you at ${body.phone} shortly before the tour.\n\nBest,\nSettleIn Logistics Team`;
      openModal('email-modal-overlay');
    } else {
      showToast(' Tour booked successfully!', 'success');
    }
  });

  // Admin request modal
  setupDepartmentRequestModal();
}

// ─── Toast ───
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(24px)'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// ─── Reset ───
async function resetDemoState() {
  if (!confirm('Reset all demo data to defaults?')) return;
  ['settlein_user','settlein_token','settlein_profile','settlein_tasks','settlein_custom_tasks','settlein_inventory','settlein_doc_state'].forEach(k => localStorage.removeItem(k));
  try { await apiFetch('/api/db/reset', { method: 'POST' }); } catch(e) {}
  showToast(' Reset complete! Reloading...', 'info');
  setTimeout(() => window.location.reload(), 500);
}
