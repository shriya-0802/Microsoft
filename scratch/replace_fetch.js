const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Replace await fetch(\`\${getApiBase()}/endpoint\`) with await apiFetch(\`/endpoint\`)
const oldFetchRegex = /await fetch\(`\$\{getApiBase\(\)\}([^`]+)`/g;
appJs = appJs.replace(oldFetchRegex, 'await apiFetch(`$1`');

// Replace fetch(\`\${getApiBase()}/endpoint\`) with apiFetch(\`/endpoint\`)
const oldFetchRegex2 = /fetch\(`\$\{getApiBase\(\)\}([^`]+)`/g;
appJs = appJs.replace(oldFetchRegex2, 'apiFetch(`$1`');

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log("Successfully replaced fetch with apiFetch");
