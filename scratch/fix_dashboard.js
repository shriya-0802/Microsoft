const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const replacement = `function renderDashboard() {
  const cityData = agent.getCityData();
  const progress = checklistManager.getOverallProgress();
  const completed = checklistManager.getCompletedCount();
  const total = checklistManager.getTotalCount();
  const pending = total - completed;
  const critical = checklistManager.tasks ? checklistManager.tasks.filter(t => t.priority === 'critical' && !t.completed).length : 0;
  const pendingTasks = checklistManager.getPendingTasks();

  // 1. Update hero & welcome greeting
  const heroCity = document.getElementById('dashboard-city');
  if (heroCity) heroCity.textContent = userProfile.city || 'Your New City';
  
  const heroUser = document.getElementById('dashboard-user-name');
  if (heroUser) {
    heroUser.textContent = (typeof currentUser !== 'undefined' && currentUser && currentUser.name) ? currentUser.name : (userProfile.userName || 'Friend');
  }

  // 2. Update stats blocks (safe property setting)
  const setStat = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setStat('stat-total-tasks', total);
  setStat('stat-completed-tasks', completed);
  setStat('stat-pending-tasks', pending);
  setStat('stat-critical-tasks', critical);

  // 3. Recommended Next Steps
  const nextStepsEl = document.getElementById('dashboard-next-steps');
  if (nextStepsEl) {
    if (pendingTasks.length === 0) {
      nextStepsEl.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.95rem;">You\\'re all caught up! Enjoy your new city.</p>';
    } else {
      nextStepsEl.innerHTML = pendingTasks.slice(0, 3).map(task => \`
        <div style="background: var(--bg-secondary); border-radius: 12px; padding: 14px 18px; border-left: 4px solid \${task.priority === 'critical' ? 'var(--terracotta)' : 'var(--sage)'}; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">\${task.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">\${task.description.substring(0, 60)}...</div>
          </div>
          <button class="btn btn-sm btn-secondary" onclick="openChecklist()" style="border-radius: 50px; padding: 6px 12px; font-size: 0.8rem;">Review</button>
        </div>
      \`).join('');
    }
  }

  // 4. Relocation Context
  const contextInfoEl = document.getElementById('dashboard-context-info');
  if (contextInfoEl) {
    contextInfoEl.innerHTML = \`
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
        <span style="color: var(--text-secondary); font-size: 0.9rem;">Destination</span>
        <span style="font-weight: 600; color: var(--text-primary);">\${userProfile.city || 'Not Set'}</span>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
        <span style="color: var(--text-secondary); font-size: 0.9rem;">Household</span>
        <span style="font-weight: 600; color: var(--text-primary);">\${userProfile.household || 'Solo'}</span>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
        <span style="color: var(--text-secondary); font-size: 0.9rem;">Purpose</span>
        <span style="font-weight: 600; color: var(--text-primary);">\${userProfile.purpose || 'Career Move'}</span>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary); font-size: 0.9rem;">Pets</span>
        <span style="font-weight: 600; color: var(--text-primary);">\${userProfile.pets || 'None'}</span>
      </div>
    \`;
  }

  // 5. Update local tips
  const tipContent = document.getElementById('tip-content');
  if (tipContent && cityData && cityData.localTips) {
    tipContent.innerHTML = cityData.localTips.slice(0, 3).map(tip => \`
      <div class="tip-item" style="padding: 10px 14px; background: var(--bg-secondary); border-radius: 8px; border-left: 3px solid var(--primary); font-size: 0.9rem;">\${tip}</div>
    \`).join('');
  } else if (tipContent) {
    tipContent.innerHTML = \`
      <div class="tip-item">Complete your onboarding to get city-specific insider tips for \${userProfile.city || 'your new city'}!</div>
    \`;
  }

  // 6. Update SOS City Emergency Dispatcher
  const sosCityName = document.getElementById('sos-city-name');
  const sosGrid = document.getElementById('dashboard-sos-grid');
  const city = userProfile.city || 'Bhubaneswar, India';
  if (sosCityName) sosCityName.textContent = city;

  if (sosGrid) {
    let contacts = null;
    if (typeof SETTLE_IN_DATA !== 'undefined' && SETTLE_IN_DATA.emergencyContacts) {
        contacts = SETTLE_IN_DATA.emergencyContacts[city] || SETTLE_IN_DATA.emergencyContacts['Bhubaneswar, India'];
    }
    
    if (contacts) {
      const cleanTel = (str) => (str || '').split('/')[0].replace(/[^0-9+]/g, '');
      const policeTel = cleanTel(contacts.police.emergency);
      const hospitalTel = cleanTel(contacts.hospital.phone);
      const fireTel = cleanTel(contacts.fire.emergency);
      const roadTel = cleanTel(contacts.roadside ? contacts.roadside.phone : '1033');

      sosGrid.innerHTML = \`
        <div style="background: var(--bg-secondary); border-radius: 14px; padding: 18px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm);">
          <div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">\${contacts.police.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">Emerg: <strong>\${contacts.police.emergency}</strong> | Non-Emerg: \${contacts.police.nonEmergency || '112'}</div>
          </div>
          <a href="tel:\${policeTel}" class="btn btn-sm btn-primary" style="text-decoration: none; padding: 8px 16px; border-radius: 50px;">Dial Police</a>
        </div>
        <div style="background: var(--bg-secondary); border-radius: 14px; padding: 18px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm);">
          <div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">\${contacts.hospital.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;"><strong>\${contacts.hospital.phone}</strong><br>\${contacts.hospital.address}</div>
          </div>
          <a href="tel:\${hospitalTel}" class="btn btn-sm btn-primary" style="text-decoration: none; padding: 8px 16px; border-radius: 50px;">Dial Hospital</a>
        </div>
        <div style="background: var(--bg-secondary); border-radius: 14px; padding: 18px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm);">
          <div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">\${contacts.fire.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">Fire & Rescue: <strong>\${contacts.fire.emergency}</strong></div>
          </div>
          <a href="tel:\${fireTel}" class="btn btn-sm btn-primary" style="text-decoration: none; padding: 8px 16px; border-radius: 50px;">Dial Fire</a>
        </div>
        \${contacts.roadside ? \`
        <div style="background: var(--bg-secondary); border-radius: 14px; padding: 18px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm);">
          <div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">️ \${contacts.roadside.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">Transit Helpline: <strong>\${contacts.roadside.phone}</strong></div>
          </div>
          <a href="tel:\${roadTel}" class="btn btn-sm btn-secondary" style="text-decoration: none; padding: 8px 16px; border-radius: 50px;">Dial Transit</a>
        </div>
        \` : ''}
      \`;
    }
  }

  if (typeof refreshRealTimeData === 'function') {
    refreshRealTimeData();
  }
}`;

const renderDashRegex = /function renderDashboard\(\)\s*\{[\s\S]*?\}\s*function\s+updateProgressRing/m;

if (renderDashRegex.test(appJs)) {
    appJs = appJs.replace(renderDashRegex, replacement + '\n\nfunction updateProgressRing');
    fs.writeFileSync(appJsPath, appJs, 'utf8');
    console.log("Successfully replaced renderDashboard.");
} else {
    console.log("Regex failed! Trying alternative regex.");
    const altRegex = /function renderDashboard\(\)\s*\{[\s\S]*?(?=async function refreshRealTimeData)/;
    if (altRegex.test(appJs)) {
        appJs = appJs.replace(altRegex, replacement + '\n\n');
        fs.writeFileSync(appJsPath, appJs, 'utf8');
        console.log("Successfully replaced renderDashboard with alt regex.");
    } else {
        console.log("Both regexes failed. Need manual replace.");
    }
}
