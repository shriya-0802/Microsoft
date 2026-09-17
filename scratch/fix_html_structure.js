const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Remove dangling about-view fragments
// The dangling fragment starts around <!-- Agent Design --> and ends before <!-- ===== Documents View ===== -->
content = content.replace(/<!-- Agent Design -->[\s\S]*?(?=<!-- ===== Documents View ===== -->)/, '');

// 2. Remove dangling documents-view extra </div>
// The extra </div> is between <!-- ===== Documents View ===== --> blocks ending and Budget View starting.
content = content.replace(/<\/div>\s*<\/div>\s*<!-- ===== Budget & Cost of Living View ===== -->/, '</div>\n\n<!-- ===== Budget & Cost of Living View ===== -->');

// 3. Remove dangling budget-view fragments
// The dangling fragment starts around <!-- Monthly Budget Estimator --> (the second one) and ends before Neighborhood view.
content = content.replace(/<!-- Monthly Budget Estimator -->[\s\S]*?(?=<!-- ===== Neighborhood & Living Zone Matcher View \(Customer\) ===== -->)/, '');

// 4. Redesign dashboard-view
// Find the entire dashboard view from <!-- ===== Dashboard View ===== --> up to the next view (checklist-view)
// Oh wait, my old regex replacement logic for dashboard-view is:
const newDashboardView = `<!-- ===== Dashboard View ===== -->
<div class="view active" id="dashboard-view">
        <div class="dashboard animate-fade-in-up" style="max-width: 1200px; margin: 0 auto; padding: 48px 24px; display: flex; flex-direction: column; gap: 40px;">
          
          <!-- Hero Section -->
          <div class="dashboard-hero" style="display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 24px; border-bottom: 1px solid var(--border-color);">
            <div>
              <h2 style="font-family: var(--font-display); font-size: 2.8rem; font-weight: 800; letter-spacing: -1px; margin: 0; color: var(--text-primary);">
                Welcome to <span class="gradient-text" id="dashboard-city">Your New City</span>, <span id="dashboard-user-name" style="font-weight: 600;">Friend</span>.
              </h2>
              <p style="font-size: 1.1rem; color: var(--text-secondary); margin-top: 12px; margin-bottom: 0;">Here is your personalized relocation command center.</p>
            </div>
            <div style="text-align: right;">
              <div class="badge" style="background: rgba(124, 106, 239, 0.1); color: var(--primary); font-weight: 700; padding: 8px 16px; border-radius: 8px; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px;">
                Status: Planning
              </div>
            </div>
          </div>

          <!-- KPI Metric Cards -->
          <div class="dashboard-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
            <div class="stat-card glass-card" style="padding: 28px; border-left: 4px solid var(--primary);">
              <h3 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-top: 0;">Total Tasks</h3>
              <p id="stat-total-tasks" style="font-size: 2.5rem; font-family: var(--font-display); font-weight: 800; color: var(--text-primary); margin: 8px 0 0 0;">0</p>
            </div>
            <div class="stat-card glass-card" style="padding: 28px; border-left: 4px solid var(--sage);">
              <h3 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-top: 0;">Completed</h3>
              <p id="stat-completed-tasks" style="font-size: 2.5rem; font-family: var(--font-display); font-weight: 800; color: var(--sage); margin: 8px 0 0 0;">0</p>
            </div>
            <div class="stat-card glass-card" style="padding: 28px; border-left: 4px solid var(--amber);">
              <h3 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-top: 0;">Pending</h3>
              <p id="stat-pending-tasks" style="font-size: 2.5rem; font-family: var(--font-display); font-weight: 800; color: var(--amber); margin: 8px 0 0 0;">0</p>
            </div>
            <div class="stat-card glass-card" style="padding: 28px; border-left: 4px solid var(--terracotta);">
              <h3 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-top: 0;">Critical</h3>
              <p id="stat-critical-tasks" style="font-size: 2.5rem; font-family: var(--font-display); font-weight: 800; color: var(--terracotta); margin: 8px 0 0 0;">0</p>
            </div>
          </div>

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

            <!-- Context Info -->
            <div class="glass-card" style="padding: 32px; background: linear-gradient(145deg, var(--bg-card) 0%, var(--bg-primary) 100%); border: 1px solid var(--border-color);">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin: 0 0 24px 0;">Relocation Context</h3>
              <div id="dashboard-context-info" style="display: flex; flex-direction: column; gap: 20px;">
                <!-- Populated by JS -->
              </div>
            </div>
          </div>

        </div>
      </div>\n`;

content = content.replace(/<!-- ===== Dashboard View ===== -->[\s\S]*?(?=<!-- ===== Checklist & Tasks View ===== -->)/, newDashboardView);

fs.writeFileSync(indexHtmlPath, content, 'utf8');
console.log('Successfully repaired HTML and upgraded dashboard-view.');
