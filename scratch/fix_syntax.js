const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const replacement = `function addLeaseReviewToChecklistById(propId) {
 try {
   let prop = null;
   if (typeof SETTLE_IN_DATA !== 'undefined' && SETTLE_IN_DATA.rentalProperties) {
     prop = SETTLE_IN_DATA.rentalProperties.find(p => p.id === propId);
   }
   
   const lockIn = prop ? (prop.lockIn || prop.leaseDuration || '11 Months') : '11 Months';
   const title = prop ? prop.title : (propId || 'Selected Property');
   
   if (typeof checklistManager === 'undefined' || !checklistManager) {
     checklistManager = new ChecklistManager();
     checklistManager.initialize(typeof userProfile !== 'undefined' ? userProfile : { city: (prop ? prop.city : 'Bhubaneswar, India'), household: 'Solo' });
   }
   
   const taskId = \`task-lease-\${prop ? prop.id : (propId || Date.now())}\`;
   const alreadyExists = checklistManager.tasks && checklistManager.tasks.some(t => t.id === taskId);
   
   if (!alreadyExists) {
     const task = {
       id: taskId,
       phase: 'week1',
       category: 'housing',
       title: \`Review Tenancy & Lease Agreement: \${title}\`,
       description: \`Examine lock-in clauses (\${lockIn}), stamp duty registration proof, maintenance breakdown, and refundable security deposit terms for \${title}.\`,
       priority: 'high'
     };
     checklistManager.addTask(task);
     checklistManager.saveState();

     // Sync to persistent database in background
     try {
       fetch(\`\${getApiBase()}/api/db/checklist\`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(task)
       }).catch(() => {});
     } catch(e) {}
   }

   showToast(\`Added lease review for \${title} to your Checklist! \`, 'success');
   if (typeof renderChecklist === 'function') renderChecklist();
   if (typeof renderDashboard === 'function') renderDashboard();
   if (typeof renderRentals === 'function') renderRentals();
 } catch(err) {
   console.error('Failed to add lease review:', err);
   if (typeof showToast === 'function') showToast('Failed to add lease review.', 'error');
 }
}`;

const oldFuncRegex = /function addLeaseReviewToChecklistById\(propId\) \{[\s\S]*?(?=function addLeaseReviewToChecklist\()/;

appJs = appJs.replace(oldFuncRegex, replacement + '\n\n');

fs.writeFileSync(appJsPath, appJs, 'utf8');
