const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
const appJsPath = path.join(__dirname, '../js/app.js');
const dataJsPath = path.join(__dirname, '../js/data.js');
const agentJsPath = path.join(__dirname, '../js/agent.js');
const checklistJsPath = path.join(__dirname, '../js/checklist.js');

// 1. Emoji Removal Regex
// This regex matches most pictorial emojis (flags, symbols, objects, faces)
const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

function removeEmojisFromFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace emojis with empty string. If there's a space after it, it might leave double spaces, but that's mostly harmless in HTML/JS.
  // We'll also do a pass to clean up extra spaces before punctuation or double spaces.
  let cleanContent = content.replace(emojiRegex, '');
  
  // Clean up "  " -> " " in text nodes/strings loosely.
  cleanContent = cleanContent.replace(/  +/g, ' ');
  // Clean up space before punctuation " ," -> ","
  cleanContent = cleanContent.replace(/ ,/g, ',');
  cleanContent = cleanContent.replace(/ \./g, '.');
  
  fs.writeFileSync(filePath, cleanContent, 'utf8');
  console.log(`Cleaned emojis from ${path.basename(filePath)}`);
}

removeEmojisFromFile(indexHtmlPath);
removeEmojisFromFile(appJsPath);
removeEmojisFromFile(dataJsPath);
removeEmojisFromFile(agentJsPath);
removeEmojisFromFile(checklistJsPath);

// 2. Dashboard View Refactoring in index.html
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// A function to extract a section by ID and replace it
function replaceSection(id, newContent) {
  const regex = new RegExp(`<div class="view" id="${id}">[\\s\\S]*?</div>\\s*</div>`, 'g');
  indexHtml = indexHtml.replace(regex, newContent);
}

// --- DOCUMENTS VIEW REFACTOR ---
const documentsViewNew = `<div class="view" id="documents-view">
        <div class="documents-view animate-fade-in-up" style="padding: 48px; gap: 32px; max-width: 900px; width: 100%; margin: 0 auto; display: flex; flex-direction: column;">
          <div class="checklist-header">
            <h2 style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.5px;">Document Tracker</h2>
            <p style="color: var(--text-secondary); font-size: 1rem; margin-top: 8px;">Organize and track the essential documents required for your relocation. Critical documents are flagged for priority.</p>
          </div>
          <div id="documents-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 20px;">
            <!-- Populated by JS -->
          </div>
        </div>
      </div>`;

// --- BUDGET VIEW REFACTOR ---
const budgetViewNew = `<div class="view" id="budget-view">
        <div class="budget-view animate-fade-in-up" style="padding: 48px; gap: 40px; max-width: 1000px; width: 100%; margin: 0 auto; display: flex; flex-direction: column;">

          <div class="about-hero" style="padding: 16px 0; border-bottom: 1px solid var(--border-color);">
            <h2 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; letter-spacing: -0.5px;"><span class="gradient-text">Cost & Budget Planner</span></h2>
            <p style="font-size: 1.1rem; color: var(--text-secondary); margin-top: 8px;">Analyze your destination's cost of living and accurately forecast your relocation logistics.</p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
            <!-- Cost of Living Comparison -->
            <div class="glass-card" style="padding: 32px;">
              <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 24px; color: var(--text-primary); text-transform: uppercase; letter-spacing: 1px;">Cost of Living — <span id="budget-city-name" style="color: var(--primary);">Your City</span></h3>
              <div id="cost-of-living-content">
                <!-- Populated by JS -->
              </div>
            </div>

            <!-- Monthly Budget Estimator -->
            <div class="glass-card" style="padding: 32px;">
              <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 24px; color: var(--text-primary); text-transform: uppercase; letter-spacing: 1px;">Monthly Budget Estimator</h3>
              <div id="monthly-budget-bars">
                <!-- Populated by JS -->
              </div>
            </div>
          </div>

          <!-- Interactive Relocation Logistics Calculator -->
          <div class="glass-card" style="padding: 36px; margin-top: 16px; border-top: 4px solid var(--primary);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 32px;">
              <div>
                <h3 style="margin: 0; color: var(--text-primary); font-size: 1.5rem; font-family: var(--font-display); font-weight: 700;">Relocation Logistics Calculator</h3>
                <p style="margin: 8px 0 0 0; font-size: 0.95rem; color: var(--text-secondary);">Dynamic estimator for moving rates based on distance, residence size, and required services.</p>
              </div>
              <span class="badge" style="background: rgba(124, 106, 239, 0.1); color: var(--primary); font-weight: 700; padding: 8px 16px; border-radius: 8px; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px;">
                Real-Time Rate Matrix
              </span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-bottom: 32px;">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Home Configuration</label>
                <select id="calc-home-size" onchange="calculateMovingExpense()" style="width: 100%; padding: 14px 16px; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary); font-size: 0.95rem; outline: none; transition: border-color 0.2s;">
                  <option value="1bhk">1 BHK / Studio Apartment</option>
                  <option value="2bhk" selected>2 BHK Apartment</option>
                  <option value="3bhk">3 BHK Family Residence</option>
                  <option value="villa">4 BHK+ / Independent Villa</option>
                </select>
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Distance: <strong id="calc-dist-val" style="color: var(--primary);">450 km</strong></label>
                <input type="range" id="calc-distance" min="20" max="2500" step="20" value="450" oninput="document.getElementById('calc-dist-val').textContent = this.value + ' km'; calculateMovingExpense();" style="width: 100%; margin-top: 10px; accent-color: var(--primary);">
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Service Level</label>
                <select id="calc-pack-tier" onchange="calculateMovingExpense()" style="width: 100%; padding: 14px 16px; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary); font-size: 0.95rem; outline: none;">
                  <option value="self">Self Packing (Transport Only)</option>
                  <option value="standard" selected>Standard Movers (Pack + Move)</option>
                  <option value="vip">VIP White-Glove (Unpack + Setup)</option>
                </select>
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                <label style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;">Vehicle Shifting</label>
                <select id="calc-vehicle" onchange="calculateMovingExpense()" style="width: 100%; padding: 14px 16px; border-radius: 12px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary); font-size: 0.95rem; outline: none;">
                  <option value="none">None</option>
                  <option value="bike">Two-Wheeler (Motorcycle / Scooter)</option>
                  <option value="car">Four-Wheeler (Sedan / SUV)</option>
                </select>
              </div>
            </div>

            <div id="calc-quote-result" style="background: var(--bg-primary); border-radius: 12px; padding: 24px; border: 1px solid rgba(124, 106, 239, 0.2); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
              <!-- Filled by JS -->
            </div>
          </div>
          
          <!-- Moving Budget Categories -->
          <div class="glass-card" style="padding: 32px; margin-top: 8px;">
             <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 24px; color: var(--text-primary); text-transform: uppercase; letter-spacing: 1px;">Expense Categories Breakdown</h3>
             <div id="budget-categories">
               <!-- Populated by JS -->
             </div>
          </div>

        </div>
      </div>`;

// --- ABOUT VIEW REFACTOR ---
// Find the entire about-view and replace it.
const aboutViewNew = `<div class="view" id="about-view">
        <div class="about-view active animate-fade-in-up" style="max-width: 1100px; margin: 0 auto; padding: 48px 24px; display: flex; flex-direction: column; gap: 48px;">
          
          <div class="about-hero" style="text-align: center; max-width: 800px; margin: 0 auto;">
            <h2 style="font-family: var(--font-display); font-size: 3rem; font-weight: 800; letter-spacing: -1px; line-height: 1.2; margin-bottom: 16px;">Building the Modern <span class="gradient-text">Relocation Operating System</span></h2>
            <p style="font-size: 1.2rem; color: var(--text-secondary); line-height: 1.6;">SettleIn is engineered to transform the fragmented, stressful process of moving to a new city into a seamless, deterministic, and delightful digital experience.</p>
          </div>

          <div class="about-section">
            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 24px; color: var(--text-primary); text-align: center;">Core Architecture & Capabilities</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
              <div class="glass-card" style="padding: 32px;">
                <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Unified Checklist Engine</h4>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">A centralized task management matrix adapting to user personas in real-time, integrating everything from property visits to utility activation.</p>
              </div>
              <div class="glass-card" style="padding: 32px;">
                <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--sage); margin-bottom: 12px;">Dynamic Location Matcher</h4>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">Proprietary algorithms correlating safety metrics, transit proximity, and lifestyle preferences to recommend optimal residential enclaves.</p>
              </div>
              <div class="glass-card" style="padding: 32px;">
                <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--amber); margin-bottom: 12px;">Inventory & Logistics Tracker</h4>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">A granular packing manifest system generating automated QR labels and coordinating with transport quoting engines for flawless transit.</p>
              </div>
              <div class="glass-card" style="padding: 32px;">
                <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--terracotta); margin-bottom: 12px;">Real-Time Telemetry</h4>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">Live integrations surfacing neighborhood safety indexes, real-time rent benchmarks, and local transit grid operational statuses.</p>
              </div>
            </div>
          </div>

        </div>
      </div>`;

replaceSection('documents-view', documentsViewNew);
replaceSection('budget-view', budgetViewNew);
replaceSection('about-view', aboutViewNew);

// Fix admin and aviation layouts
indexHtml = indexHtml.replace(/<div class="admin-view"[^>]+>/, '<div class="admin-view animate-fade-in-up" style="padding: 48px; gap: 32px; max-width: 1050px; width: 100%; margin: 0 auto; display: flex; flex-direction: column;">');
indexHtml = indexHtml.replace(/<div class="aviation-view"[^>]+>/, '<div class="aviation-view animate-fade-in-up" style="padding: 48px; gap: 32px; max-width: 1050px; width: 100%; margin: 0 auto; display: flex; flex-direction: column;">');

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('Refactored views in index.html');

// 3. Update app.js dynamic HTML renderers to use modern CSS and no emojis
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Update renderDocuments() HTML structure
const renderDocsRegex = /function renderDocuments\(\)\s*\{[\s\S]*?const docsHtml = checklistManager.tasks[\s\S]*?\}\s*\}\s*\}/;

const newRenderDocs = `function renderDocuments() {
  if (!checklistManager) return;
  const list = document.getElementById('documents-list');
  if (!list) return;

  const docsHtml = checklistManager.tasks
    .filter(t => t.category === 'admin' || t.category === 'health')
    .map(t => {
      const isCritical = t.priority === 'critical' || t.priority === 'high';
      return \`
        <div class="glass-card" style="padding: 24px; border-left: 4px solid \${isCritical ? 'var(--terracotta)' : 'var(--primary)'}; display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <h4 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">\${t.title}</h4>
            \${isCritical ? '<span class="badge" style="background: rgba(232, 93, 117, 0.1); color: var(--terracotta); padding: 4px 10px; font-size: 0.7rem; text-transform: uppercase; font-weight: 700; border-radius: 4px;">Priority</span>' : ''}
          </div>
          <p style="margin: 0; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">\${t.description}</p>
          <div style="margin-top: auto; padding-top: 16px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color);">
             <span style="font-size: 0.8rem; font-weight: 600; color: \${t.completed ? 'var(--sage)' : 'var(--text-tertiary)'}; text-transform: uppercase;">\${t.completed ? 'Verified' : 'Pending'}</span>
             <button class="btn btn-sm \${t.completed ? 'btn-secondary' : 'btn-primary'}" onclick="toggleTask('\${t.id}')" style="padding: 6px 16px; font-weight: 600; border-radius: 50px;">
               \${t.completed ? 'Mark Pending' : 'Mark Verified'}
             </button>
          </div>
        </div>
      \`;
    }).join('');

  list.innerHTML = docsHtml || '<p style="color: var(--text-secondary); grid-column: 1/-1; text-align: center; padding: 40px;">No administrative documents required for your current profile.</p>';
}`;

appJs = appJs.replace(renderDocsRegex, newRenderDocs);

// Update renderBudget() category and quote HTML
appJs = appJs.replace(/<div style="background: var\\(--bg-card\\); border-radius: 12px; padding: 16px; box-shadow: var\\(--shadow-sm\\); display: flex; align-items: flex-start; gap: 12px;">/g, '<div class="glass-card" style="padding: 20px; display: flex; align-items: flex-start; gap: 16px;">');

appJs = appJs.replace(/<div style="font-size: 2rem;">\\\${cat\.icon}<\/div>/g, '<div style="font-size: 1.5rem; font-weight: 800; color: var(--primary); opacity: 0.7;">\\\${cat.id.substring(0,3).toUpperCase()}</div>');

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Refactored dynamic views in app.js');
