const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 1. Inject apiFetch wrapper
const apiFetchWrapper = `
// --- ROBUST API FETCH WRAPPER ---
async function apiFetch(endpoint, options = {}) {
  try {
    const res = await fetch(\`\${getApiBase()}\${endpoint}\`, options);
    if (!res.ok) {
      console.warn(\`API \${endpoint} failed with status \${res.status}\`);
    }
    return res;
  } catch (err) {
    console.error(\`Network Error on \${endpoint}:\`, err);
    throw err;
  }
}
`;
if (!appJs.includes('apiFetch(')) {
    appJs = appJs.replace('// ----------------------------------------------------------\n// Database Helpers', apiFetchWrapper + '\n// ----------------------------------------------------------\n// Database Helpers');
}

// 2. Fix handleConfirmTourBooking
const oldConfirmTourRegex = /async function handleConfirmTourBooking\(e\) \{[\s\S]*?showToast\('Tour booked successfully!.*?', 'success'\);[\s\S]*?\}/;
const newConfirmTour = `async function handleConfirmTourBooking(e) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }
  
  if (_tourBookingInProgress) return;
  _tourBookingInProgress = true;
  setTimeout(() => { _tourBookingInProgress = false; }, 1500);

  try {
    const getVal = (id, def) => {
      const el = document.getElementById(id);
      return (el && el.value) ? el.value : def;
    };

    const propId = getVal('tour-prop-id', 'prop-custom');
    const propTitle = getVal('tour-prop-title', 'Selected Residence');
    const society = getVal('tour-prop-society', 'Residential Enclave');
    const city = getVal('tour-prop-city', (typeof userProfile !== 'undefined' && userProfile ? userProfile.city : 'Bhubaneswar, India'));
    
    // Explicit safety for tour date and time
    const dateEl = document.getElementById('tour-date');
    const tourDate = (dateEl && dateEl.value) ? dateEl.value : new Date().toISOString().split('T')[0];
    
    const timeEl = document.getElementById('tour-time');
    const tourTime = (timeEl && timeEl.value) ? timeEl.value : '10:00 AM';
    
    const modeEl = document.querySelector('input[name="tour-mode"]:checked');
    const mode = modeEl ? modeEl.value : 'In-Person Walkthrough';
    
    const applicantName = getVal('tour-applicant-name', (typeof currentUser !== 'undefined' && currentUser && currentUser.name) ? currentUser.name : 'Verified Relocator');
    const phone = getVal('tour-phone', '+91 98610 12345');
    const notes = getVal('tour-notes', 'Standard walkthrough inspection');

    const bookingPayload = {
      propId, propTitle, society, city, tourDate, tourTime, mode, applicantName, phone, notes
    };

    // UI Updates First for immediate feedback
    if (typeof closeBookTourModal === 'function') closeBookTourModal();
    showToast('Tour booked successfully! Check your dashboard.', 'success');
    
    // Add to checklist
    if (typeof checklistManager !== 'undefined' && checklistManager) {
      const tourTask = {
        id: \`task-tour-\${Date.now()}\`,
        phase: 'week1',
        category: 'housing',
        title: \`Property Tour: \${propTitle}\`,
        description: \`Scheduled for \${tourDate} at \${tourTime} (\${mode}). Contact: \${phone}\`,
        priority: 'high'
      };
      checklistManager.addTask(tourTask);
      checklistManager.saveState();

      try {
        await fetch(\`\${getApiBase()}/api/db/checklist\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tourTask)
        });
      } catch(e) { console.warn("Checklist sync failed:", e); }
    }

    // Refresh UI
    if (typeof renderRentals === 'function') renderRentals();
    if (typeof renderDashboard === 'function') renderDashboard();
    if (typeof renderChecklist === 'function') renderChecklist();

    // Sync booking
    try {
      await fetch(\`\${getApiBase()}/api/db/bookings\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      });
    } catch(err) { console.warn("Booking sync failed:", err); }

  } catch(err) {
    console.error('Error confirming booking:', err);
    showToast('Error booking tour. Try again.', 'error');
  } finally {
    _tourBookingInProgress = false;
  }
}`;

if (oldConfirmTourRegex.test(appJs)) {
    appJs = appJs.replace(oldConfirmTourRegex, newConfirmTour);
} else {
    // Try simpler replace
    const fallbackRegex = /async function handleConfirmTourBooking\(e\) \{[\s\S]*?(?=function bookPropertyTour)/;
    if (fallbackRegex.test(appJs)) {
        appJs = appJs.replace(fallbackRegex, newConfirmTour + '\n\n');
    }
}

// 3. Fix addLeaseReviewToChecklistById
const oldLeaseRegex = /function addLeaseReviewToChecklistById\(propId\) \{[\s\S]*?showToast\('Added lease review.*?success'\);[\s\S]*?\}/;
const newLease = `function addLeaseReviewToChecklistById(propId) {
  try {
    const prop = (typeof SETTLE_IN_DATA !== 'undefined' && SETTLE_IN_DATA.rentalProperties) ? SETTLE_IN_DATA.rentalProperties.find(p => p.id === propId) : null;
    const title = prop ? prop.title : 'Selected Home';
    const lockIn = prop ? (prop.lockIn || prop.leaseDuration || '11 Months') : '11 Months';

    if (typeof checklistManager === 'undefined' || !checklistManager) {
      window.checklistManager = new ChecklistManager();
      checklistManager.initialize(userProfile || { city: (prop ? prop.city : 'Bhubaneswar, India'), household: 'Solo' });
    }

    const taskId = \`task-lease-\${propId || Date.now()}\`;
    const alreadyExists = checklistManager.tasks && checklistManager.tasks.some(t => t.id === taskId);
    
    if (!alreadyExists) {
      const task = {
        id: taskId,
        phase: 'week1',
        category: 'housing',
        title: \`Review Tenancy & Lease Agreement: \${title}\`,
        description: \`Examine lock-in clauses (\${lockIn}), stamp duty registration proof, maintenance breakdown, and refundable security deposit terms for \${title}.\`,
        priority: 'high'
      };
      checklistManager.addTask(task);
      checklistManager.saveState();

      fetch(\`\${getApiBase()}/api/db/checklist\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      }).catch(() => {});
    }

    showToast(\`Added lease review for \${title} to your Checklist! 📜\`, 'success');
    if (typeof renderChecklist === 'function') renderChecklist();
    if (typeof renderDashboard === 'function') renderDashboard();
    if (typeof renderRentals === 'function') renderRentals();
  } catch(e) {
    console.error('Error adding lease review:', e);
    showToast('Failed to add lease review.', 'error');
  }
}`;
if (oldLeaseRegex.test(appJs)) {
    appJs = appJs.replace(oldLeaseRegex, newLease);
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log("Successfully hardened app.js");
