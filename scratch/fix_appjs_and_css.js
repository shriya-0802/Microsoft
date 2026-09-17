const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// The original renderDashboard function in app.js has a lot of old logic. Let's replace the whole function.
// We'll find it by searching for "function renderDashboard()" and replacing up to the end of its block.
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

 // Populate dashboard-next-steps (Top 3 pending tasks)
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
}

function renderChecklist`;

appJs = appJs.replace(renderDashRegex, newRenderDashboard);
fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated renderDashboard in app.js');

// Now let's update CSS for elevated glassmorphism
const cssPath = path.join(__dirname, '../css/styles.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Let's refine .glass-card
const glassCardRegex = /\.glass-card\s*\{[\s\S]*?\}/;
const newGlassCard = `.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}`;

css = css.replace(glassCardRegex, newGlassCard);
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated CSS for glass-card.');
