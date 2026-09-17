const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexHtmlPath, 'utf8');

// Insert the SOS grid container and Insider Tips back into the new dashboard-view!
const newDashSection = `
          <!-- Main Grid -->
          <div class="dashboard-grid" style="display: grid; grid-template-columns: 2fr 1fr; gap: 32px;">
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

// Find the old <!-- Main Grid --> and replace everything down to the closing tag of dashboard-view
const dashRegex = /<!-- Main Grid -->[\s\S]*?(?=<\/div>\s*<\/div>\s*<!-- ===== Chat View ===== -->)/;
content = content.replace(dashRegex, newDashSection);

fs.writeFileSync(indexHtmlPath, content, 'utf8');
console.log('Added SOS Grid and Tips back to dashboard-view.');

// Now fix app.js overlapping text in SOS Dispatcher
const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Fix SOS grid rendering layout to prevent absolute position overlap
// Instead of absolute positioning the button, use Flexbox!
const oldSosRender = /sosGrid\.innerHTML = `[\s\S]*?`;/;
const newSosRender = `sosGrid.innerHTML = \`
 <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--terracotta); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
   <div style="flex: 1;">
     <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">\${contacts.police.name}</div>
     <div style="color: var(--text-secondary); font-size: 0.85rem;">Emerg: <strong>\${contacts.police.number}</strong></div>
     <div style="color: var(--text-secondary); font-size: 0.8rem;">Non: \${contacts.police.nonEmergency || 'N/A'}</div>
   </div>
   <a href="tel:\${cleanTel(contacts.police.number)}" class="btn btn-sm" style="background: var(--terracotta); color: white; border-radius: 50px; font-size: 0.75rem; padding: 8px 16px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);">Dial Police</a>
 </div>
 <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--terracotta); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
   <div style="flex: 1;">
     <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">\${contacts.hospital.name}</div>
     <div style="color: var(--text-secondary); font-size: 0.85rem;">Phone: <strong>\${contacts.hospital.number}</strong></div>
     <div style="color: var(--text-secondary); font-size: 0.8rem;">(\${contacts.hospital.location || 'Local'})</div>
   </div>
   <a href="tel:\${cleanTel(contacts.hospital.number)}" class="btn btn-sm" style="background: var(--terracotta); color: white; border-radius: 50px; font-size: 0.75rem; padding: 8px 16px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);">Dial Hospital</a>
 </div>
 <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--terracotta); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
   <div style="flex: 1;">
     <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">\${contacts.fire.name}</div>
     <div style="color: var(--text-secondary); font-size: 0.85rem;">Hotline: <strong>\${contacts.fire.number}</strong></div>
   </div>
   <a href="tel:\${cleanTel(contacts.fire.number)}" class="btn btn-sm" style="background: var(--terracotta); color: white; border-radius: 50px; font-size: 0.75rem; padding: 8px 16px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);">Dial Fire</a>
 </div>
 <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--terracotta); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
   <div style="flex: 1;">
     <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">\${contacts.transit.name}</div>
     <div style="color: var(--text-secondary); font-size: 0.85rem;">Helpline: <strong>\${contacts.transit.number}</strong></div>
     <div style="color: var(--text-secondary); font-size: 0.8rem;">24/7 Roadside & Transit</div>
   </div>
   <a href="tel:\${cleanTel(contacts.transit.number)}" class="btn btn-sm" style="background: var(--text-primary); color: var(--bg-primary); border-radius: 50px; font-size: 0.75rem; padding: 8px 16px; text-decoration: none; white-space: nowrap; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">Dial Transit</a>
 </div>
\`;`;

// BUT wait! In my fix_appjs_and_css.js, I completely rewrote renderDashboard() and omitted the SOS Grid and Tips code!
// Oh right! Because I replaced the WHOLE renderDashboard function, the SOS grid logic doesn't even exist in app.js anymore.
// So I need to add it BACK to renderDashboard!
`;
