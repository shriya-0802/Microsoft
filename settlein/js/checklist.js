// ============================================================
// SettleIn — Checklist Management System
// ============================================================

class ChecklistManager {
 constructor() {
 this.tasks = [];
 this.profile = {};
 this.onTaskComplete = null; // callback
 }

 // -----------------------------------------------------------
 // Initialize with profile-based tasks
 // -----------------------------------------------------------
 initialize(profile) {
 this.profile = profile;
 this.tasks = this.generatePersonalizedTasks();
 this.loadSavedState();
 }

 // -----------------------------------------------------------
 // Generate tasks based on user profile
 // -----------------------------------------------------------
 generatePersonalizedTasks() {
 const hasKids = (this.profile && this.profile.household && this.profile.household.includes('Family')) ||
 (this.profile && this.profile.kids && (this.profile.kids.startsWith('Yes') || this.profile.kids.includes('Toddler')));
 const hasPets = this.profile && this.profile.pets && this.profile.pets !== 'No pets';

 return SETTLE_IN_DATA.tasks
.filter(task => {
 // Include tasks for all
 if (task.forAll) return true;
 // Include pet tasks only if user has pets
 if (task.forPets && hasPets) return true;
 // Include kid tasks only if user has kids
 if (task.forKids && hasKids) return true;
 return false;
 })
.map(task => ({
...task,
 completed: false,
 completedAt: null
 }));
 }

 // -----------------------------------------------------------
 // Save / Load state from localStorage
 // -----------------------------------------------------------
 saveState() {
 const state = this.tasks.map(t => ({
 id: t.id,
 completed: t.completed,
 completedAt: t.completedAt
 }));
 try {
 localStorage.setItem('settlein_tasks', JSON.stringify(state));
 // Also preserve custom dynamic tasks (tours, leases, hood visits)
 const customTasks = this.tasks.filter(t => t.id && (t.id.startsWith('task-tour') || t.id.startsWith('task-lease') || t.id.startsWith('task-hood') || t.isCustom));
 localStorage.setItem('settlein_custom_tasks', JSON.stringify(customTasks));
 } catch(e) { /* ignore */ }
 }

 saveProgress() {
 this.saveState();
 }

 addTask(task) {
 if (!task) return;
 if (!task.id) task.id = `task-custom-${Date.now()}`;
 if (typeof task.completed !== 'boolean') task.completed = false;
 task.isCustom = true;
 this.tasks.unshift(task);
 this.saveState();
 return task;
 }

 loadSavedState() {
 try {
 // Reload custom tasks first
 const savedCustom = localStorage.getItem('settlein_custom_tasks');
 if (savedCustom) {
 const customTasks = JSON.parse(savedCustom);
 if (Array.isArray(customTasks)) {
 customTasks.forEach(ct => {
 if (!this.tasks.some(t => t.id === ct.id)) {
 this.tasks.unshift(ct);
 }
 });
 }
 }

 const saved = localStorage.getItem('settlein_tasks');
 if (saved) {
 const state = JSON.parse(saved);
 state.forEach(s => {
 const task = this.tasks.find(t => t.id === s.id);
 if (task) {
 task.completed = s.completed;
 task.completedAt = s.completedAt;
 }
 });
 }
 } catch(e) { /* ignore */ }
 }

 // -----------------------------------------------------------
 // Toggle task completion
 // -----------------------------------------------------------
 toggleTask(taskId) {
 const task = this.tasks.find(t => t.id === taskId);
 if (!task) return null;

 task.completed = !task.completed;
 task.completedAt = task.completed ? new Date().toISOString() : null;
 this.saveState();

 if (task.completed && this.onTaskComplete) {
 this.onTaskComplete(task);
 }

 return task;
 }

 // -----------------------------------------------------------
 // Query methods
 // -----------------------------------------------------------
 getTasksByPhase(phaseId) {
 return this.tasks.filter(t => t.phase === phaseId);
 }

 getTasksByCategory(categoryId) {
 return this.tasks.filter(t => t.category === categoryId);
 }

 getCompletedCount() {
 return this.tasks.filter(t => t.completed).length;
 }

 getTotalCount() {
 return this.tasks.length;
 }

 // Tasks that are still actionable. Kept as a dedicated query because the
 // dashboard, checklist, and agent all need the same definition of “pending”.
 getPendingTasks() {
 return this.tasks.filter(t => !t.completed);
 }

 getPhaseProgress(phaseId) {
 const phaseTasks = this.getTasksByPhase(phaseId);
 if (phaseTasks.length === 0) return 0;
 const completed = phaseTasks.filter(t => t.completed).length;
 return Math.round((completed / phaseTasks.length) * 100);
 }

 getOverallProgress() {
 if (this.tasks.length === 0) return 0;
 return Math.round((this.getCompletedCount() / this.getTotalCount()) * 100);
 }

 getNextPriorityTasks(count = 5) {
 const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
 const phaseOrder = { day1: 0, week1: 1, month1: 2, settled: 3 };

 return this.tasks
.filter(t => !t.completed)
.sort((a, b) => {
 // First by phase
 const phaseDiff = (phaseOrder[a.phase] || 0) - (phaseOrder[b.phase] || 0);
 if (phaseDiff !== 0) return phaseDiff;
 // Then by priority
 return (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3);
 })
.slice(0, count);
 }

 getPhaseStats() {
 return SETTLE_IN_DATA.phases.map(phase => {
 const tasks = this.getTasksByPhase(phase.id);
 const completed = tasks.filter(t => t.completed).length;
 return {
...phase,
 total: tasks.length,
 completed,
 progress: tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0
 };
 });
 }

 getCategoryStats() {
 return SETTLE_IN_DATA.categories.map(cat => {
 const tasks = this.getTasksByCategory(cat.id);
 const completed = tasks.filter(t => t.completed).length;
 return {
...cat,
 total: tasks.length,
 completed,
 progress: tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0
 };
 }).filter(c => c.total > 0);
 }

 // -----------------------------------------------------------
 // Get uncompleted tasks filtered by active filter
 // -----------------------------------------------------------
 getFilteredTasks(filter = 'all') {
 if (filter === 'all') return this.tasks;
 if (filter === 'pending') return this.tasks.filter(t => !t.completed);
 if (filter === 'completed') return this.tasks.filter(t => t.completed);
 // Filter by phase
 if (['day1', 'week1', 'month1', 'settled'].includes(filter)) {
 return this.tasks.filter(t => t.phase === filter);
 }
 return this.tasks;
 }

 // -----------------------------------------------------------
 // Reset all tasks
 // -----------------------------------------------------------
 reset() {
 this.tasks.forEach(t => {
 t.completed = false;
 t.completedAt = null;
 });
 this.saveState();
 }
}

if (typeof module !== 'undefined' && module.exports) {
 module.exports = ChecklistManager;
}
