const fs = require('fs');

let content = fs.readFileSync('js/agent.js', 'utf8');

// Replace standard list emojis
content = content.replace(/• ️ \*\*Government\*\*/g, "• **Government**");
content = content.replace(/• ️ \*\*Weather\*\*/g, "• **Weather**");

// Remove standard conversational emojis
content = content.replace(/👋 /g, "");
content = content.replace(/⚡ /g, "");
content = content.replace(/🏥 /g, "");
content = content.replace(/🎓 /g, "");
content = content.replace(/🚇 /g, "");
content = content.replace(/📋 /g, "");
content = content.replace(/🍕 /g, "");

fs.writeFileSync('js/agent.js', content);
