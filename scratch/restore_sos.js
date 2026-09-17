const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexHtmlPath, 'utf8');

// Insert the SOS grid container and Insider Tips back into the new dashboard-view!
const newDashSection = `
          <!-- Main Grid -->
          <div class="dashboard-grid" style="display: grid; grid-template-columns: 2fr 1fr; gap: 32px; margin-bottom: 32px;">
            <!-- Next Steps Panel -->
            <div class="glass-card" style="padding: 32px; display: flex; flex-direction: column;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin: 0;">Recommended Next Steps</h3>
                <button class="btn btn-sm btn-primary" onclick="switchView('checklist-view')" style="padding: 6px 16px; border-radius: 50px; font-weight: 600;">View All</button>
              </div>
              <div id="dashboard-next-steps" style="display: flex; flex-direction: column; gap: 16px;">
                <!-- Populated by JS -->
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 32px;">
              <!-- Context Info -->
              <div class="glass-card" style="padding: 32px; background: linear-gradient(145deg, var(--bg-card) 0%, var(--bg-primary) 100%);">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin: 0 0 24px 0;">Relocation Context</h3>
                <div id="dashboard-context-info" style="display: flex; flex-direction: column; gap: 20px;">
                  <!-- Populated by JS -->
                </div>
              </div>

              <!-- Insider Tips -->
              <div class="glass-card" style="padding: 32px;">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin: 0 0 16px 0;">Insider Tips</h3>
                <div id="tip-content" style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; display: flex; flex-direction: column; gap: 12px;">
                  <!-- Populated by JS -->
                </div>
              </div>
            </div>
          </div>

          <!-- SOS Dispatcher -->
          <div class="glass-card" style="padding: 32px; border: 2px solid rgba(239, 68, 68, 0.2);">
            <div style="margin-bottom: 24px;">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--terracotta); margin: 0 0 8px 0;">City Emergency SOS Dispatcher (<span id="sos-city-name">Your City</span>)</h3>
              <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">Instant one-click access to police, hospital, fire department, and municipal helpline dispatchers.</p>
            </div>
            <div id="dashboard-sos-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
              <!-- Populated by JS -->
            </div>
          </div>
`;

const dashRegex = /<!-- Main Grid -->[\s\S]*?(?=<\/div>\s*<\/div>\s*<!-- ===== Chat View ===== -->)/;
content = content.replace(dashRegex, newDashSection);

fs.writeFileSync(indexHtmlPath, content, 'utf8');
console.log('Added SOS Grid and Tips back to dashboard-view.');

const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const renderDashRegex = /function renderDashboard\(\)\s*\{[\s\S]*?\}\s*function\s+renderChecklist/m;

const newRenderDashboard = `function renderDashboard() {
 const progress = checklistManager.getOverallProgress();
 const completed = checklistManager.getCompletedCount();
 const total = checklistManager.getTotalCount();
 const pending = total - completed;
 const critical = checklistManager.tasks.filter(t => (t.priority === 'critical' || t.priority === 'high') && !t.completed).length;

 // Update hero & welcome greeting
 const heroCity = document.getElementById('dashboard-city');
 if (heroCity) {
  heroCity.textContent = userProfile.city || 'Your New City';
 }
 const heroUser = document.getElementById('dashboard-user-name');
 if (heroUser) {
  heroUser.textContent = (currentUser && currentUser.name) ? currentUser.name : (userProfile.userName || 'Friend');
 }

 // Update stats
 const statTotal = document.getElementById('stat-total-tasks');
 if (statTotal) statTotal.textContent = total;
 
 const statCompleted = document.getElementById('stat-completed-tasks');
 if (statCompleted) statCompleted.textContent = completed;
 
 const statPending = document.getElementById('stat-pending-tasks');
 if (statPending) statPending.textContent = pending;
 
 const statCritical = document.getElementById('stat-critical-tasks');
 if (statCritical) statCritical.textContent = critical;

 // Populate dashboard-next-steps
 const nextStepsEl = document.getElementById('dashboard-next-steps');
 if (nextStepsEl) {
  const pendingTasks = checklistManager.tasks.filter(t => !t.completed).slice(0, 3);
  if (pendingTasks.length > 0) {
   nextStepsEl.innerHTML = pendingTasks.map(t => \`
    <div style="background: var(--bg-primary); border-radius: 8px; padding: 16px; border-left: 3px solid var(--primary); display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">\${t.title}</h4>
        <p style="margin: 4px 0 0 0; font-size: 0.8rem; color: var(--text-secondary);">\${t.category.toUpperCase()}</p>
      </div>
      <button class="btn btn-sm btn-secondary" onclick="switchView('checklist-view')" style="padding: 6px 12px; font-size: 0.75rem;">Solve</button>
    </div>
   \`).join('');
  } else {
   nextStepsEl.innerHTML = \`<p style="color: var(--text-secondary); font-size: 0.9rem;">You're all caught up! Enjoy your new city.</p>\`;
  }
 }

 // Populate dashboard-context-info
 const contextInfoEl = document.getElementById('dashboard-context-info');
 if (contextInfoEl) {
  contextInfoEl.innerHTML = \`
   <div style="display: flex; flex-direction: column; gap: 8px;">
     <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-secondary); letter-spacing: 0.5px;">Destination</label>
     <div style="font-size: 1rem; font-weight: 600; color: var(--text-primary);">\${userProfile.city || 'Not set'}</div>
   </div>
   <div style="display: flex; flex-direction: column; gap: 8px;">
     <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-secondary); letter-spacing: 0.5px;">Household</label>
     <div style="font-size: 1rem; font-weight: 600; color: var(--text-primary);">\${userProfile.household || 'Solo'} (\${userProfile.pets || 'No pets'})</div>
   </div>
   <div style="display: flex; flex-direction: column; gap: 8px;">
     <label style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-secondary); letter-spacing: 0.5px;">Relocation Purpose</label>
     <div style="font-size: 1rem; font-weight: 600; color: var(--text-primary);">\${userProfile.situation || userProfile.purpose || 'General Relocation'}</div>
   </div>
  \`;
 }

 // Populate Insider Tips
 const tipContent = document.getElementById('tip-content');
 const cityData = typeof agent !== 'undefined' && typeof agent.getCityData === 'function' ? agent.getCityData() : null;
 if (tipContent && cityData && cityData.localTips) {
  tipContent.innerHTML = cityData.localTips.slice(0, 3).map(tip => \`
   <div style="padding-bottom: 8px; border-bottom: 1px solid var(--border-color);">\${tip}</div>
  \`).join('');
 } else if (tipContent) {
  tipContent.innerHTML = \`<div style="padding-bottom: 8px;">Complete your onboarding to get city-specific insider tips!</div>\`;
 }

 // Populate SOS Dispatcher (Using Flexbox to fix overlapping letters!)
 const sosCityName = document.getElementById('sos-city-name');
 const sosGrid = document.getElementById('dashboard-sos-grid');
 const city = userProfile.city || 'Bhubaneswar, India';
 if (sosCityName) sosCityName.textContent = city;

 if (sosGrid && typeof SETTLE_IN_DATA !== 'undefined' && SETTLE_IN_DATA.emergencyContacts) {
  const contacts = SETTLE_IN_DATA.emergencyContacts[city] || SETTLE_IN_DATA.emergencyContacts['Bhubaneswar, India'];
  if (contacts) {
   const cleanTel = (str) => (str || '').split('/')[0].replace(/[^0-9+]/g, '');
   sosGrid.innerHTML = \`
    <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--terracotta); display: flex; justify-content: space-between; align-items: center; gap: 16px;">
      <div style="flex: 1; min-width: 0;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">\${contacts.police.name}</div>
        <div style="color: var(--text-secondary); font-size: 0.85rem;">Emerg: <strong>\${contacts.police.number}</strong></div>
      </div>
      <a href="tel:\${cleanTel(contacts.police.number)}" class="btn btn-sm" style="background: var(--terracotta); color: white; border-radius: 50px; font-size: 0.75rem; padding: 8px 16px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);">Dial Police</a>
    </div>
    
    <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--terracotta); display: flex; justify-content: space-between; align-items: center; gap: 16px;">
      <div style="flex: 1; min-width: 0;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">\${contacts.hospital.name}</div>
        <div style="color: var(--text-secondary); font-size: 0.85rem;">Phone: <strong>\${contacts.hospital.number}</strong></div>
      </div>
      <a href="tel:\${cleanTel(contacts.hospital.number)}" class="btn btn-sm" style="background: var(--terracotta); color: white; border-radius: 50px; font-size: 0.75rem; padding: 8px 16px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);">Dial Hospital</a>
    </div>

    <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--terracotta); display: flex; justify-content: space-between; align-items: center; gap: 16px;">
      <div style="flex: 1; min-width: 0;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">\${contacts.fire.name}</div>
        <div style="color: var(--text-secondary); font-size: 0.85rem;">Hotline: <strong>\${contacts.fire.number}</strong></div>
      </div>
      <a href="tel:\${cleanTel(contacts.fire.number)}" class="btn btn-sm" style="background: var(--terracotta); color: white; border-radius: 50px; font-size: 0.75rem; padding: 8px 16px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);">Dial Fire</a>
    </div>

    <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--terracotta); display: flex; justify-content: space-between; align-items: center; gap: 16px;">
      <div style="flex: 1; min-width: 0;">
        <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">\${contacts.transit.name}</div>
        <div style="color: var(--text-secondary); font-size: 0.85rem;">Helpline: <strong>\${contacts.transit.number}</strong></div>
      </div>
      <a href="tel:\${cleanTel(contacts.transit.number)}" class="btn btn-sm" style="background: var(--text-primary); color: var(--bg-primary); border-radius: 50px; font-size: 0.75rem; padding: 8px 16px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">Dial Transit</a>
    </div>
   \`;
  }
 }
}

function renderChecklist`;

appJs = appJs.replace(renderDashRegex, newRenderDashboard);
fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Restored SOS grid rendering logic in app.js');
