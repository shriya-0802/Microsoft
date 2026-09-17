const fs = require('fs');

let content = fs.readFileSync('js/app.js', 'utf8');

// Replacements for UI
content = content.replace(/icon:\s*'🚔'/g, "icon: '<i data-lucide=\"shield\"></i>'");
content = content.replace(/icon:\s*'🏥'/g, "icon: '<i data-lucide=\"activity\"></i>'");
content = content.replace(/icon:\s*'🚒'/g, "icon: '<i data-lucide=\"flame\"></i>'");
content = content.replace(/icon:\s*'📞'/g, "icon: '<i data-lucide=\"phone\"></i>'");

content = content.replace(/icon\s*\|\|\s*'📞'/g, "icon || '<i data-lucide=\"phone\"></i>'");
content = content.replace(/📞 Calling/g, '<i data-lucide=\"phone\" style=\"width:14px;height:14px;\"></i> Calling');

content = content.replace(/t\.completed \? '✓' : ''/g, "t.completed ? '<i data-lucide=\"check\" style=\"width:16px;height:16px;\"></i>' : ''");
content = content.replace(/✅ Completed:/g, 'Completed:');

// Chat
content = content.replace(/👋 Hi! I'm your SettleIn Agent/g, "Hi! I'm your SettleIn Agent");
content = content.replace(/⚡ Set up utilities/g, "<i data-lucide=\"zap\" style=\"width:16px;height:16px;\"></i> Set up utilities");
content = content.replace(/🏥 Find healthcare/g, "<i data-lucide=\"activity\" style=\"width:16px;height:16px;\"></i> Find healthcare");
content = content.replace(/🎓 Best schools/g, "<i data-lucide=\"graduation-cap\" style=\"width:16px;height:16px;\"></i> Best schools");
content = content.replace(/🚇 Public transit/g, "<i data-lucide=\"train\" style=\"width:16px;height:16px;\"></i> Public transit");
content = content.replace(/📋 What to do first/g, "<i data-lucide=\"list-todo\" style=\"width:16px;height:16px;\"></i> What to do first");
content = content.replace(/🍕 Local food & fun/g, "<i data-lucide=\"utensils\" style=\"width:16px;height:16px;\"></i> Local food & fun");

// Docs
content = content.replace(/'📘'/g, "'<i data-lucide=\"book\"></i>'");
content = content.replace(/'📄'/g, "'<i data-lucide=\"file-text\"></i>'");
content = content.replace(/'🏥'/g, "'<i data-lucide=\"activity\"></i>'");
content = content.replace(/'🏦'/g, "'<i data-lucide=\"landmark\"></i>'");
content = content.replace(/'🎓'/g, "'<i data-lucide=\"graduation-cap\"></i>'");
content = content.replace(/'🚗'/g, "'<i data-lucide=\"car\"></i>'");
content = content.replace(/'💡'/g, "'<i data-lucide=\"lightbulb\"></i>'");

// Toasts
content = content.replace(/✅/g, '');
content = content.replace(/❌/g, '');
content = content.replace(/🗑️/g, '');
content = content.replace(/📦/g, '');
content = content.replace(/📥/g, '');
content = content.replace(/📅/g, '');
content = content.replace(/🔄/g, '');
content = content.replace(/📋/g, '');
content = content.replace(/⚠️/g, '');
content = content.replace(/🏠/g, '');
content = content.replace(/🏢/g, '');
content = content.replace(/🛒/g, '');
content = content.replace(/🚇/g, '');
content = content.replace(/📶/g, '');
content = content.replace(/🍽️/g, '');
content = content.replace(/🛬/g, '');
content = content.replace(/🛫/g, '');
content = content.replace(/🌐/g, '');
content = content.replace(/⚡/g, '');
content = content.replace(/🏛️/g, '');
content = content.replace(/🏦/g, '');
content = content.replace(/🎓/g, '');
content = content.replace(/✈️/g, '');
content = content.replace(/🛡️/g, '');
content = content.replace(/💰/g, '');
content = content.replace(/📍/g, '');
content = content.replace(/🐾/g, '');
content = content.replace(/🛋️/g, '');
content = content.replace(/🛏️/g, '');
content = content.replace(/📐/g, '');
content = content.replace(/📝/g, '');
content = content.replace(/💡/g, '');
content = content.replace(/🛋️/g, '');
content = content.replace(/🍳/g, '');
content = content.replace(/💻/g, '');
content = content.replace(/🪪/g, '');


// Append lucide.createIcons() to render functions
content = content.replace(/function renderDashboard\(\) \{([\s\S]*?)dashboardNextSteps\.innerHTML \= [^;]+;([\s\S]*?)\}/, function(match) {
  return match.replace(/\}$/, "  if (window.lucide) window.lucide.createIcons();\n}");
});

content = content.replace(/function renderChecklist\(\) \{([\s\S]*?)\n\}/, function(match) {
  return match.replace(/\n\}$/, "\n  if (window.lucide) window.lucide.createIcons();\n}");
});

content = content.replace(/function renderDocuments\(\) \{([\s\S]*?)\n\}/, function(match) {
  return match.replace(/\n\}$/, "\n  if (window.lucide) window.lucide.createIcons();\n}");
});

content = content.replace(/function renderInventory\(\) \{([\s\S]*?)\n\}/, function(match) {
  return match.replace(/\n\}$/, "\n  if (window.lucide) window.lucide.createIcons();\n}");
});

content = content.replace(/function renderLocation\(\) \{([\s\S]*?)\n\}/, function(match) {
  return match.replace(/\n\}$/, "\n  if (window.lucide) window.lucide.createIcons();\n}");
});

content = content.replace(/function appendBotMessage\([^\)]+\) \{([\s\S]*?)\n\}/, function(match) {
  return match.replace(/\n\}$/, "\n  if (window.lucide) window.lucide.createIcons();\n}");
});

fs.writeFileSync('js/app.js', content);
