const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');
const dataJs = fs.readFileSync(path.join(__dirname, '../js/data.js'), 'utf8');
const checkJs = fs.readFileSync(path.join(__dirname, '../js/checklist.js'), 'utf8');
const agentJs = fs.readFileSync(path.join(__dirname, '../js/agent.js'), 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable", url: "http://localhost:8080" });

dom.window.document.body.innerHTML += `<script>${dataJs}</script>`;
dom.window.document.body.innerHTML += `<script>${checkJs}</script>`;
dom.window.document.body.innerHTML += `<script>${agentJs}</script>`;
dom.window.document.body.innerHTML += `<script>${appJs}</script>`;

setTimeout(() => {
    try {
        console.log("Calling bookPropertyTour('PROP-001')...");
        dom.window.bookPropertyTour('PROP-001');
        console.log("Calling handleConfirmTourBooking()...");
        const event = new dom.window.Event('submit');
        event.preventDefault = () => {};
        
        // Populate inputs
        dom.window.document.getElementById('tour-date').value = '2026-10-10';
        dom.window.document.getElementById('tour-time').value = '10:00 AM';
        dom.window.document.getElementById('tour-mode').value = 'In-Person';
        
        dom.window.handleConfirmTourBooking(event).then(() => {
            console.log("Success handleConfirmTourBooking");
        }).catch(err => console.error("Error in handleConfirmTourBooking:", err));
        
    } catch(e) {
        console.error("Crash during test:", e);
    }
}, 2000);
