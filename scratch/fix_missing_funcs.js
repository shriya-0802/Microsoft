const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

if (!appJs.includes('function printBoxLabels')) {
  appJs = appJs.replace('window.printBoxLabels = printBoxLabels;', 'function printBoxLabels() { alert("Printing functionality coming soon."); }\nwindow.printBoxLabels = printBoxLabels;');
}

if (!appJs.includes('function downloadPackingSlip')) {
  appJs = appJs.replace('window.downloadPackingSlip = downloadPackingSlip;', 'function downloadPackingSlip() { alert("Download functionality coming soon."); }\nwindow.downloadPackingSlip = downloadPackingSlip;');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Fixed missing functions in app.js');
