const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
let content = fs.readFileSync(indexHtmlPath, 'utf8');

// Fix 1: Restore budget-view closing tags and the second half of budget-view
// We will replace the current broken budget-view section.
const brokenBudgetViewRegex = /<!-- ===== Budget & Cost of Living View ===== -->[\s\S]*?(?=<!-- ===== Neighborhood & Living Zone Matcher View \(Customer\) ===== -->)/;
const restoredBudgetView = `<!-- ===== Budget & Cost of Living View ===== -->
 <div class="view" id="budget-view">
        <div class="budget-view animate-fade-in-up" style="padding: 48px; gap: 40px; max-width: 1000px; width: 100%; margin: 0 auto; display: flex; flex-direction: column;">

          <div class="about-hero" style="padding: 16px 0; border-bottom: 1px solid var(--border-color);">
            <h2 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; letter-spacing: -0.5px;"><span class="gradient-text">Cost & Budget Planner</span></h2>
            <p style="font-size: 1.1rem; color: var(--text-secondary); margin-top: 8px;">Analyze your destination's cost of living and accurately forecast your relocation logistics.</p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
            <!-- Cost of Living Comparison -->
            <div class="glass-card" style="padding: 32px;">
              <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 24px; color: var(--text-primary); text-transform: uppercase; letter-spacing: 1px;">Cost of Living &mdash; <span id="budget-city-name" style="color: var(--primary);">Your City</span></h3>
              <div id="cost-of-living-content">
                <!-- Populated by JS -->
              </div>
            </div>

            <!-- Monthly Budget Estimator -->
            <div class="glass-card" style="padding: 32px;">
              <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 24px; color: var(--text-primary); text-transform: uppercase; letter-spacing: 1px;">Monthly Budget Estimator</h3>
              
              <div class="form-group" style="margin-bottom: 20px;">
                <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; display: block;">Base Monthly Income (After Tax)</label>
                <div style="position: relative;">
                  <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); font-weight: 600;">$</span>
                  <input type="number" id="budget-income" placeholder="5000" style="width: 100%; padding: 14px 16px 14px 36px; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-secondary); color: var(--text-primary); font-size: 1.1rem;">
                </div>
              </div>

              <div class="form-group" style="margin-bottom: 24px;">
                <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; display: block;">Maximum Housing Allocation (%)</label>
                <input type="range" id="budget-housing-percent" min="10" max="60" value="30" style="width: 100%; margin-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; color: var(--primary); font-weight: 700;">
                  <span>Conservative</span>
                  <span id="budget-housing-label">30%</span>
                  <span>Aggressive</span>
                </div>
              </div>

              <div style="background: rgba(124, 106, 239, 0.05); border-left: 4px solid var(--primary); padding: 16px; border-radius: 8px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary);">Recommended Max Rent:</p>
                <p id="budget-max-rent" style="margin: 4px 0 0; font-size: 2rem; font-weight: 800; color: var(--text-primary); font-family: var(--font-display);">$1,500</p>
              </div>

              <button class="btn btn-primary" onclick="calculateBudget()" style="width: 100%; padding: 16px; border-radius: 12px; font-weight: 700; font-size: 1rem;">
                Recalculate Projections
              </button>
            </div>
          </div>
        </div>
      </div>\n\n`;

content = content.replace(brokenBudgetViewRegex, restoredBudgetView);

// Fix 2: Overlapping letters in SOS Dispatcher.
// The issue is in app.js where we do innerHTML for sosGrid.
// Actually, let's fix the overlapping letters in app.js.
// Wait, is there any overlapping CSS in styles.css?
// In the user's screenshot, it says "Dial Police" printed directly over "112 / 100".
// This happens if a button is positioned absolutely over text, or if flexbox is squishing them.
// Let's check app.js for SOS.
fs.writeFileSync(indexHtmlPath, content, 'utf8');
console.log('Restored budget-view HTML.');

// Fix 3: Implement new dashboard-view!
// Since my regex in the previous attempt failed to find Checklist View correctly.
const dashboardRegex = /<!-- ===== Dashboard View ===== -->[\s\S]*?(?=<!-- ===== Chat View ===== -->)/;

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
            <div class="glass-card" style="padding: 32px; background: linear-gradient(145deg, var(--bg-card) 0%, var(--bg-primary) 100%);">
              <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin: 0 0 24px 0;">Relocation Context</h3>
              <div id="dashboard-context-info" style="display: flex; flex-direction: column; gap: 20px;">
                <!-- Populated by JS -->
              </div>
            </div>
          </div>

        </div>
      </div>\n\n`;

content = content.replace(dashboardRegex, newDashboardView);
fs.writeFileSync(indexHtmlPath, content, 'utf8');
console.log('Applied new dashboard-view.');

