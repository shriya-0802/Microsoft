const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 1. Fix Property Tour Button Form Submission
// Instead of binding in DOMContentLoaded, we'll rewrite handleConfirmTourBooking to be ultra-resilient
// and we'll change the button in HTML to use onclick if needed, but form submit is fine.

const newTourHandler = `async function handleConfirmTourBooking(e) {
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
    const tourDate = getVal('tour-date', new Date().toISOString().split('T')[0]);
    const tourTime = getVal('tour-time', '10:00 AM');
    
    const modeEl = document.querySelector('input[name="tour-mode"]:checked');
    const mode = modeEl ? modeEl.value : 'In-Person Walkthrough';
    
    const applicantName = getVal('tour-applicant-name', 'Resident');
    const phone = getVal('tour-phone', '+91 00000 00000');
    const notes = getVal('tour-notes', 'Standard walkthrough inspection');

    const bookingPayload = {
      id: \`TOUR-\${Date.now().toString().slice(-4)}\`,
      propId, propTitle, society, city, tourDate, tourTime, mode, applicantName, phone, notes,
      status: 'CONFIRMED',
      bookedAt: new Date().toISOString()
    };

    let myBookings = [];
    try { myBookings = JSON.parse(localStorage.getItem('settlein_tour_bookings') || '[]'); } catch(err) {}
    myBookings.unshift(bookingPayload);
    localStorage.setItem('settlein_tour_bookings', JSON.stringify(myBookings));

    if (typeof checklistManager !== 'undefined' && checklistManager) {
      const tourTask = {
        id: \`task-tour-\${Date.now()}\`,
        phase: 'week1',
        category: 'housing',
        title: \`📍 Scheduled Property Tour: \${propTitle}\`,
        description: \`\${mode} on \${tourDate} at \${tourTime}. Society: \${society}, \${city}. Contact: \${phone}. Special notes: \${notes}.\`,
        priority: 'high'
      };
      checklistManager.addTask(tourTask);
      checklistManager.saveState();
    }

    if (typeof closeBookTourModal === 'function') closeBookTourModal();
    if (typeof showToast === 'function') showToast(\`🎉 Property Tour Confirmed for \${tourDate}!\`, 'success');
    
    if (typeof renderRentals === 'function') renderRentals();
    if (typeof renderDashboard === 'function') renderDashboard();
    if (typeof renderChecklist === 'function') renderChecklist();
  } catch (err) {
    console.error('Tour Booking Error:', err);
    if (typeof showToast === 'function') showToast('Failed to book tour.', 'error');
  }
}`;

appJs = appJs.replace(/async function handleConfirmTourBooking\(e\) \{[\s\S]*?(?=async function fetchCityData)/, newTourHandler + '\n\n');

// 2. Fix Add Lease Review Button
const newLeaseHandler = `function addLeaseReviewToChecklistById(propId) {
  try {
    let prop = null;
    if (typeof SETTLE_IN_DATA !== 'undefined' && SETTLE_IN_DATA.verifiedProperties) {
      prop = SETTLE_IN_DATA.verifiedProperties.find(p => p.id === propId);
    }
    
    const lockIn = prop ? (prop.lockIn || prop.leaseDuration || '11 Months') : '11 Months';
    const title = prop ? prop.title : (propId || 'Selected Property');
    
    if (typeof checklistManager !== 'undefined' && checklistManager) {
      const taskId = \`task-lease-\${prop ? prop.id : Date.now()}\`;
      const existing = checklistManager.tasks.find(t => t.id === taskId);
      if (existing) {
        if (typeof showToast === 'function') showToast('Lease review already in Checklist.', 'warning');
        return;
      }
      
      checklistManager.addTask({
        id: taskId,
        phase: 'week1',
        category: 'housing',
        title: \`📝 Review Tenancy & Lease Agreement: \${title}\`,
        description: \`Statutory review for \${lockIn} lock-in period. Verify deposit terms, maintenance clauses, and exit conditions before signing.\`,
        priority: 'critical'
      });
      checklistManager.saveState();
      if (typeof showToast === 'function') showToast(\`Added lease review for \${title} to your Checklist! 📋\`, 'success');
      if (typeof renderChecklist === 'function') renderChecklist();
      if (typeof renderDashboard === 'function') renderDashboard();
    }
  } catch (err) {
    console.error('Add Lease Review Error:', err);
    if (typeof showToast === 'function') showToast('Failed to add lease review.', 'error');
  }
}`;

appJs = appJs.replace(/function addLeaseReviewToChecklistById\(propId\) \{[\s\S]*?(?=function addLeaseReviewToChecklist\()/, newLeaseHandler + '\n\n');

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Fixed Tour and Lease handlers in app.js');

// Now we need to modify index.html to ensure buttons trigger properly.
// For the tour form, let's make sure it has an ID and the button is type=submit.
const indexHtmlPath = path.join(__dirname, '../index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// The lease review modal HTML is generated in JS!
// Let's check `showLeaseModal` in app.js.
const oldLeaseModalBtn = /onclick="addLeaseReviewToChecklistById\('\$\{prop\.id\.replace\(\/'\/g, "\\\\'"\)\}'\); closeLeaseModal\(\);"/;
appJs = appJs.replace(oldLeaseModalBtn, \`onclick="addLeaseReviewToChecklistById('\${prop.id}'); closeLeaseModal();"\`);
fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Fixed button onclick syntax in showLeaseModal');

