const fs = require('fs');

const appJs = fs.readFileSync('js/app.js', 'utf8');
const agentJs = fs.readFileSync('js/agent.js', 'utf8');
const checklistJs = fs.readFileSync('js/checklist.js', 'utf8');
const dataJs = fs.readFileSync('js/data.js', 'utf8');
const allJs = [appJs, agentJs, checklistJs, dataJs].join('\n');

const eventRegex = /onclick\s*=\s*["']([^"']+)["']/gi;
let match;
const handlers = new Set();
while ((match = eventRegex.exec(appJs)) !== null) {
  const expr = match[1];
  const calls = expr.match(/([a-zA-Z0-9_$]+)\s*\(/g) || [];
  for (let c of calls) {
    handlers.add(c.replace('(', '').trim());
  }
}

console.log(`Found ${handlers.size} dynamic onclick handlers in app.js:`);
let missing = 0;
for (let fn of handlers) {
  if (['closeBoxLabelsModal', 'print', 'alert', 'prompt', 'confirm'].includes(fn)) continue;
  const hasDef = new RegExp(`(function\\s+${fn}\\b|const\\s+${fn}\\s*=|let\\s+${fn}\\s*=|var\\s+${fn}\\s*=)`).test(allJs);
  if (!hasDef) {
    console.error(`❌ MISSING DYNAMIC FUNCTION IN JS: ${fn}`);
    missing++;
  } else {
    console.log(`  ✓ ${fn}`);
  }
}

if (missing === 0) {
  console.log('✅ ALL dynamic onclick handlers in app.js exist!');
} else {
  console.error(`❌ ${missing} functions missing!`);
}
