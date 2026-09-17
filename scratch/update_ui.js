const fs = require('fs');
const path = require('path');

const stylesPath = path.join(__dirname, '../css/styles.css');
let css = fs.readFileSync(stylesPath, 'utf8');

// Append new modern CSS classes to styles.css
const modernCss = `
/* ─── Premium Modern UI Classes ─── */
.glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: var(--transition-slow);
}
.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--primary-glow);
}
.card-image-wrapper {
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
}
.card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-card:hover .card-image-wrapper img {
  transform: scale(1.08);
}
.card-image-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(44,34,30,0.05) 0%, rgba(44,34,30,0.85) 100%);
  pointer-events: none;
}
.card-badges-top {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}
.badge-glass {
  background: rgba(250, 246, 240, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.8);
}
.badge-match {
  background: var(--sage);
  color: #FFFFFF;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.card-title-bottom {
  position: absolute;
  bottom: 14px;
  left: 16px;
  right: 16px;
  color: #FFFFFF;
  z-index: 2;
}
.card-title-bottom h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 800;
  color: #FFFFFF;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  line-height: 1.2;
}
.card-title-bottom p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.95);
  margin-top: 4px;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  font-weight: 500;
}
.card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 16px;
}
.card-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
  font-weight: 500;
}
.card-metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: 16px;
  border: 1px solid var(--border-color);
}
.metric-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.metric-label {
  font-size: 0.7rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.metric-value {
  font-size: 1rem;
  font-weight: 800;
  color: var(--text-primary);
}
.metric-value.highlight-terracotta { color: var(--terracotta); }
.metric-value.highlight-sage { color: var(--sage); }
.metric-value.highlight-amber { color: var(--amber); }

.card-highlights {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.highlight-pill {
  font-size: 0.75rem;
  background: var(--bg-primary);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  font-weight: 600;
  transition: var(--transition-fast);
}
.highlight-pill:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}
.card-actions-deck {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid var(--border-color);
  padding-top: 18px;
}
.card-actions-row {
  display: grid;
  grid-template-columns: 1.3fr 1fr 0.9fr;
  gap: 10px;
}
.btn {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn:hover {
  transform: translateY(-2px);
}
.btn:active {
  transform: translateY(0);
}
.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 14px rgba(200, 106, 75, 0.25);
}
.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(200, 106, 75, 0.35);
}
.btn-secondary {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
.btn-secondary:hover {
  background: var(--border-color);
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
`;

if (!css.includes('Premium Modern UI Classes')) {
  fs.writeFileSync(stylesPath, css + modernCss, 'utf8');
}

// Now replace app.js enclave rendering
const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const enclaveOld = /\<div class="enclave-card" style="background: var\(--bg-card\); border-radius: 20px; border: 1px solid var\(--border-color\); overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var\(--shadow-sm\); transition: transform 0\.25s cubic-bezier\(0\.16, 1, 0\.3, 1\), box-shadow 0\.25s cubic-bezier\(0\.16, 1, 0\.3, 1\);"\>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*`/g;

const enclaveNew = `<div class="enclave-card glass-card animate-fade-in-up">
      <div class="card-image-wrapper">
        <img src="\${hoodImg}" alt="\${hood.name}" onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'">
        <div class="card-image-gradient"></div>
        <div class="card-badges-top">
          <span class="badge-glass">\${hood.vibeBadge}</span>
          <span class="badge-match">\${hood.matchPct}% Match</span>
        </div>
        <div class="card-title-bottom">
          <h3>\${hood.name}</h3>
          <p>📍 \${hood.city}</p>
        </div>
      </div>
      <div class="card-body">
        <div>
          <p class="card-desc">\${hood.description}</p>
          <div class="card-metrics-grid">
            <div class="metric-item">
              <div class="metric-label">Avg 2BHK Rent</div>
              <div class="metric-value highlight-terracotta">\${formatLocalCurrency(hood.avgRent, hood.city)}<span style="font-size: 0.72rem; font-weight: 500; color: var(--text-secondary);">/mo</span></div>
            </div>
            <div class="metric-item">
              <div class="metric-label">Safety Rating</div>
              <div class="metric-value highlight-sage">⭐ \${hood.safetyScore} / 10</div>
            </div>
            <div class="metric-item">
              <div class="metric-label">Transit Walk</div>
              <div class="metric-value" title="\${hood.metroDist}">🚇 \${hood.metroDist}</div>
            </div>
            <div class="metric-item">
              <div class="metric-label">Schools Rating</div>
              <div class="metric-value highlight-amber">🎒 \${hood.schoolsScore} / 10</div>
            </div>
          </div>
          <div class="card-highlights">
            \${hood.highlights.map(hl => \`<span class="highlight-pill">✓ \${hl}</span>\`).join('')}
          </div>
        </div>
        <div class="card-actions-deck">
          <button class="btn btn-sm btn-primary" onclick="viewHomesInLocation('\${hood.name.replace(/'/g, "\\\\'")}')" style="width: 100%; padding: 12px; font-size: 0.9rem; font-weight: 700; border-radius: 50px;">
            🏡 View \${homesInHood} Available Homes in \${hood.name.split('&')[0].trim()} ➔
          </button>
          <div class="card-actions-row">
            \${isAlreadyAdded ? \`
              <button class="btn btn-sm btn-added-state" data-hood="\${hood.id}" disabled style="padding: 10px 8px; font-size: 0.85rem; font-weight: 600; border-radius: 50px; background: #D1E7DD; color: #0F5132; cursor: default; border: 1px solid #BADBCC;">
                ✓ Added
              </button>
            \` : \`
              <button class="btn btn-sm btn-secondary btn-add-hood-check" data-hood="\${hood.id}" onclick="addNeighborhoodToChecklistById('\${hood.id}')" style="padding: 10px 8px; font-size: 0.85rem; font-weight: 600; border-radius: 50px;">
                📋 + Checklist
              </button>
            \`}
            <button class="btn btn-sm btn-secondary" onclick="showCommuteGuide('\${hood.id}')" style="padding: 10px 8px; font-size: 0.85rem; font-weight: 600; border-radius: 50px;">
              🧭 Transit
            </button>
            <button class="btn btn-sm btn-secondary" onclick="askAgentAboutNeighborhoodById('\${hood.id}')" style="padding: 10px 8px; font-size: 0.85rem; font-weight: 600; border-radius: 50px;">
              💬 Inquire
            </button>
          </div>
        </div>
      </div>
    </div>\``;

appJs = appJs.replace(enclaveOld, enclaveNew);

// Replace rental cards in app.js
const rentalOld = /\<div class="rental-card" style="background: var\(--bg-card\); border-radius: 18px; border: 1px solid var\(--border-color\); overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var\(--shadow-sm\); transition: transform 0\.2s; cursor: pointer;" onclick="showLeaseModal\('\${prop.id}'\)"\>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*`/g;

const rentalNew = `<div class="rental-card glass-card animate-fade-in-up" style="cursor: pointer;" onclick="showLeaseModal('\${prop.id}')">
      <div class="card-image-wrapper">
        <img src="\${propImg}" alt="\${prop.title}" onerror="this.src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'">
        <div class="card-image-gradient"></div>
        <div class="card-badges-top">
          <span class="badge-glass">\${pType === 'Rent' ? '🏷️ Monthly Rent' : '📜 Long Lease'}</span>
          \${isPetFriendly ? '<span class="badge-glass" style="margin-left:6px;">🐾 Pet OK</span>' : ''}
          \${isAlreadyShortlisted ? '<span style="background: var(--primary); color: white; border-radius: 50px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; margin-left: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">❤️</span>' : ''}
        </div>
        <div class="card-title-bottom">
          <div style="font-size: 1.5rem; font-weight: 800; color: #FFFFFF; text-shadow: 0 2px 8px rgba(0,0,0,0.6); margin-bottom: 4px;">\${formatLocalCurrency(prop.price, prop.city)}<span style="font-size: 0.9rem; font-weight: 500;">/mo</span></div>
          <h3 style="font-size: 1.1rem;">\${prop.title}</h3>
        </div>
      </div>
      <div class="card-body" style="padding: 18px;">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;">
            📍 \${prop.society}, \${prop.neighborhood}
          </div>
          <div style="display: flex; gap: 12px; font-size: 0.85rem; font-weight: 600; color: var(--text-primary); border-top: 1px dashed var(--border-color); border-bottom: 1px dashed var(--border-color); padding: 10px 0;">
            <span style="display: flex; align-items: center; gap: 4px;">🛏️ \${prop.bhk}</span>
            <span style="display: flex; align-items: center; gap: 4px;">📐 \${prop.sqft || '1200'} sq.ft</span>
            <span style="display: flex; align-items: center; gap: 4px;">✨ \${prop.furnishing}</span>
          </div>
          <div style="display: flex; gap: 8px; justify-content: space-between; align-items: center; margin-top: 4px;">
             <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); bookPropertyTour('\${prop.id}')" style="flex: 1; padding: 10px; border-radius: 50px; font-weight: 600;">📅 Book Tour</button>
             <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); toggleShortlistProperty('\${prop.id}', this)" style="padding: 10px; border-radius: 50px;" title="Shortlist Property">\${isAlreadyShortlisted ? '❤️' : '🤍'}</button>
          </div>
        </div>
      </div>
    </div>\``;

appJs = appJs.replace(rentalOld, rentalNew);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log("UI Overhaul applied successfully!");
