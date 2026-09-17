const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const dataJs = fs.readFileSync(path.join(__dirname, '../js/data.js'), 'utf8');
const agentJs = fs.readFileSync(path.join(__dirname, '../js/agent.js'), 'utf8');
const checklistJs = fs.readFileSync(path.join(__dirname, '../js/checklist.js'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');

const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'http://localhost:8080' });

// Mock global dependencies like fetch and localStorage
dom.window.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};
dom.window.fetch = async () => ({ ok: true, json: async () => ({}) });

try {
  // Load scripts
  dom.window.eval(dataJs);
  dom.window.eval(agentJs);
  dom.window.eval(checklistJs);
  dom.window.eval(appJs);

  // Trigger DOMContentLoaded
  const event = dom.window.document.createEvent('Event');
  event.initEvent('DOMContentLoaded', true, true);
  dom.window.document.dispatchEvent(event);

  // Set user profile manually since login is skipped
  dom.window.userProfile = { city: 'Bhubaneswar, India', userName: 'Test' };
  dom.window.checklistManager = new dom.window.ChecklistManager();
  dom.window.checklistManager.initialize(dom.window.userProfile);

  // 1. Test "Confirm Property Tour Booking"
  console.log('Testing "Confirm Property Tour Booking"...');
  const bookTourForm = dom.window.document.getElementById('book-tour-form');
  if (bookTourForm) {
    const submitEvent = new dom.window.Event('submit', { bubbles: true, cancelable: true });
    // Mock preventDefault to check if it's called
    submitEvent.preventDefault = function() { this.defaultPrevented = true; };
    bookTourForm.dispatchEvent(submitEvent);
    console.log('Tour Form submit event dispatched.');
    console.log('Checklist tasks after tour:', dom.window.checklistManager.tasks.length);
  } else {
    console.error('book-tour-form NOT FOUND!');
  }

  // 2. Test "Add Lease Review to Checklist"
  console.log('\\nTesting "Add Lease Review to Checklist"...');
  // First, find a valid prop ID
  const propId = dom.window.SETTLE_IN_DATA.verifiedProperties[0].id;
  try {
    dom.window.addLeaseReviewToChecklistById(propId);
    console.log('Lease review added successfully.');
    console.log('Checklist tasks after lease review:', dom.window.checklistManager.tasks.length);
  } catch (err) {
    console.error('Error adding lease review:', err);
  }

} catch (err) {
  console.error('Global Error:', err);
}
