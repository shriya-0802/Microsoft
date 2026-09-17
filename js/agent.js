// ============================================================
// SettleIn — Agent Conversation Engine
// ============================================================

class SettleInAgent {
 constructor() {
 this.conversationHistory = [];
 this.profile = {};
 this.onboardingComplete = false;
 this.currentPhase = 'day1';
 }

 // -----------------------------------------------------------
 // Set user profile from onboarding
 // -----------------------------------------------------------
 setProfile(profile) {
 this.profile = profile;
 this.onboardingComplete = true;
 }

 // -----------------------------------------------------------
 // Get city data
 // -----------------------------------------------------------
 getCityData() {
 if (!this.profile || !this.profile.city) return SETTLE_IN_DATA.cities['Austin, TX'];
 return SETTLE_IN_DATA.cities[this.profile.city] || {
 welcome: `Welcome to ${this.profile.city}! Enjoy your new city adventure.`,
 utilities: {
 electric: { provider: 'City Electricity Board', phone: '112', website: 'power.gov' },
 water: { provider: 'Municipal Water Supply', phone: '112', website: 'water.gov' },
 gas: { provider: 'Natural Gas Pipeline', phone: '112', website: 'gas.gov' },
 internet: ['Fiber Broadband', '5G Wireless', 'Local ISP Network']
 },
 dmv: { name: 'Citizen ID & Registration Portal', deadline: '30 days', website: 'gov.in', tip: 'Complete applications online to skip queues' },
 transit: { system: 'City Metro & Transit Network', app: 'Transit App', pass: 'City Transit Card', tip: 'Use smart card for seamless transfers' },
 localTips: [
 ` Discover local food markets and cultural highlights in ${this.profile.city}.`,
 ` Use digital transit apps for live bus and metro schedules.`,
 `️ Register your new address at the municipal ward office within 30 days.`
 ],
 schools: { district: 'Municipal Education Board', website: 'education.gov', enrollment: 'Online transfer portal active year-round' }
 };
 }

 // -----------------------------------------------------------
 // Process user message and generate response
 // -----------------------------------------------------------
 processMessage(userMessage) {
 const msg = userMessage.toLowerCase().trim();
 this.conversationHistory.push({ role: 'user', content: userMessage });

 let response = '';

 // Greeting / Getting started
 if (this.isGreeting(msg)) {
 response = this.generateWelcomeResponse();
 }
 // Utilities
 else if (this.matchesIntent(msg, ['utilit', 'electric', 'water', 'gas', 'internet', 'wifi', 'power'])) {
 response = this.generateUtilitiesResponse();
 }
 // Healthcare
 else if (this.matchesIntent(msg, ['doctor', 'healthcare', 'dentist', 'hospital', 'medical', 'pharmacy', 'prescription', 'health'])) {
 response = this.generateHealthcareResponse();
 }
 // Schools / Education
 else if (this.matchesIntent(msg, ['school', 'enroll', 'education', 'kids', 'children', 'kindergarten', 'daycare'])) {
 response = this.generateSchoolsResponse();
 }
 // Driver's license / DMV
 else if (this.matchesIntent(msg, ['driver', 'license', 'dmv', 'id card', 'state id', 'vehicle', 'registration', 'car'])) {
 response = this.generateDriversLicenseResponse();
 }
 // Pets
 else if (this.matchesIntent(msg, ['pet', 'dog', 'cat', 'vet', 'veterinar', 'animal'])) {
 response = this.generatePetsResponse();
 }
 // Banking / Finance
 else if (this.matchesIntent(msg, ['bank', 'account', 'finance', 'money', 'credit', 'insurance'])) {
 response = this.generateBankingResponse();
 }
 // Transit / Transportation
 else if (this.matchesIntent(msg, ['transit', 'bus', 'train', 'subway', 'transport', 'commut', 'metro'])) {
 response = this.generateTransitResponse();
 }
 // Address change / Mail
 else if (this.matchesIntent(msg, ['address', 'mail', 'usps', 'postal', 'forward'])) {
 response = this.generateAddressResponse();
 }
 // Local tips / exploration
 else if (this.matchesIntent(msg, ['tip', 'recommend', 'local', 'restaurant', 'food', 'fun', 'explore', 'things to do', 'attraction'])) {
 response = this.generateLocalTipsResponse();
 }
 // Community
 else if (this.matchesIntent(msg, ['community', 'meetup', 'friend', 'social', 'neighbor', 'volunteer', 'club'])) {
 response = this.generateCommunityResponse();
 }
 // What's next / Progress
 else if (this.matchesIntent(msg, ['next', 'what should', 'priority', 'important', 'urgent', 'first', 'start'])) {
 response = this.generateNextStepsResponse();
 }
 // Overwhelmed / emotional
 else if (this.matchesIntent(msg, ['overwhelm', 'stress', 'too much', 'hard', 'difficult', 'confused', 'lost', 'help'])) {
 response = this.generateEncouragementResponse();
 }
 // Checklist
 else if (this.matchesIntent(msg, ['checklist', 'task', 'list', 'todo', 'to-do', 'all tasks'])) {
 response = this.generateChecklistResponse();
 }
 // Neighborhood / Enclave / Living Zone queries
 else if (this.matchesIntent(msg, ['neighborhood', 'enclave', 'society', 'apartment', 'suburb', 'patia', 'indiranagar', 'koramangala', 'whitefield', 'bandra', 'powai', 'saheed', 'nayapalli', 'chandrasekharpur', 'hitec', 'jubilee', 'cyber city', 'vasant vihar', 'hinjawadi', 'kalyani nagar', 'omr', 'tanjong', 'downtown', 'domain', 'minato', 'roppongi', 'capitol hill', 'living in'])) {
 response = this.generateNeighborhoodResponse(userMessage);
 }
 // Cost of living
 else if (this.matchesIntent(msg, ['cost', 'expensive', 'afford', 'living', 'rent', 'price', 'salary', 'budget'])) {
 response = this.generateCostOfLivingResponse();
 }
 // Documents
 else if (this.matchesIntent(msg, ['document', 'paperwork', 'papers', 'record', 'certificate', 'id card'])) {
 response = this.generateDocumentsResponse();
 }
 // Emergency
 else if (this.matchesIntent(msg, ['emergency', 'police', 'fire department', 'hospital', 'poison', '911', 'urgent care', 'safety'])) {
 response = this.generateEmergencyResponse();
 }
 // Weather
 else if (this.matchesIntent(msg, ['weather', 'climate', 'temperature', 'rain', 'snow', 'hot', 'cold', 'winter', 'summer'])) {
 response = this.generateWeatherResponse();
 }
 // Thank you
 else if (this.matchesIntent(msg, ['thank', 'thanks', 'awesome', 'great', 'perfect', 'amazing'])) {
 response = this.generateThankYouResponse();
 }
 // Default / catch-all
 else {
 response = this.generateSmartDefault(userMessage);
 }

 this.conversationHistory.push({ role: 'agent', content: response });
 return response;
 }

 // -----------------------------------------------------------
 // Intent Matching
 // -----------------------------------------------------------
 matchesIntent(message, keywords) {
 return keywords.some(kw => message.includes(kw));
 }

 isGreeting(msg) {
 const greetings = ['hello', 'hi', 'hey', 'started', 'get set up', 'just moved', 'new here', 'begin', 'moved to'];
 return greetings.some(g => msg.includes(g));
 }

 // -----------------------------------------------------------
 // Response Generators
 // -----------------------------------------------------------
 generateWelcomeResponse() {
 const city = this.getCityData();
 const cityName = this.profile.city || 'your new city';

 let response = '';
 if (city) {
 response = `${city.welcome}\n\n`;
 } else {
 response = `Welcome to ${cityName}! How exciting that you're starting a new chapter here.\n\n`;
 }

 response += `Based on your profile, I've created a personalized setup checklist just for you. Here's what I recommend tackling first:\n\n`;
 response += `** Day 1 Priorities:**\n`;
 response += `1. Set up electricity and water\n`;
 response += `2. Get internet service scheduled\n`;
 response += `3. Test smoke detectors and change locks\n\n`;

 if (this.profile.pets && this.profile.pets !== 'No pets') {
 response += ` I've also added pet-specific tasks since your furry friends need settling in too!\n\n`;
 }

 if (this.profile.household === 'Family with kids') {
 response += ` School enrollment tasks are on your list — I'll help you navigate that when you're ready.\n\n`;
 }

 response += `What would you like to tackle first? You can ask me about utilities, healthcare, government IDs, or anything else about getting set up!`;

 return response;
 }

 generateUtilitiesResponse() {
 const city = this.getCityData();
 let response = SETTLE_IN_DATA.agentResponses.utilities.intro + '\n\n';

 if (city && city.utilities) {
 const u = city.utilities;
 response += `**For ${this.profile.city}:**\n\n`;
 response += ` **Electricity:** ${u.electric.provider}\n`;
 response += ` ${u.electric.phone} | ${u.electric.website}\n`;
 if (u.electric.note) response += ` *${u.electric.note}*\n`;
 response += `\n`;
 response += ` **Water:** ${u.water.provider}\n`;
 response += ` ${u.water.phone} | ${u.water.website}\n\n`;
 response += ` **Gas:** ${u.gas.provider}\n`;
 response += ` ${u.gas.phone} | ${u.gas.website}\n\n`;
 response += ` **Internet providers available:**\n`;
 u.internet.forEach(isp => {
 response += ` • ${isp}\n`;
 });
 response += `\n **Pro tip:** Call or go online to set up service at least 1-2 days before you need it. Have your new address and move-in date ready!`;
 } else {
 response += SETTLE_IN_DATA.agentResponses.utilities.steps.join('\n') + '\n\n';
 response += ` I'd recommend checking your city's official website for the specific utility providers in your area.`;
 }

 return response;
 }

 generateHealthcareResponse() {
 const city = this.getCityData();
 let response = SETTLE_IN_DATA.agentResponses.healthcare.intro + '\n\n';
 response += SETTLE_IN_DATA.agentResponses.healthcare.steps.join('\n') + '\n\n';

 if (this.profile.household === 'Family with kids') {
 response += `\n **For your family:** Don't forget to find a pediatrician too! Ask your new primary care doctor for referrals — they usually know the best pediatricians in the area.\n\n`;
 }

 if (city) {
 response += ` For ${this.profile.city}, I'd recommend using your insurance provider's directory to find in-network doctors nearby. You can also check platforms like Zocdoc or Healthgrades for reviews.`;
 }

 return response;
 }

 generateSchoolsResponse() {
 const city = this.getCityData();
 let response = SETTLE_IN_DATA.agentResponses.schools.intro + '\n\n';
 response += SETTLE_IN_DATA.agentResponses.schools.steps.join('\n') + '\n\n';

 if (city && city.schools) {
 response += `\n** For ${this.profile.city}:**\n`;
 response += `• School District: **${city.schools.district}**\n`;
 response += `• Website: ${city.schools.website}\n`;
 response += `• Enrollment: ${city.schools.enrollment}\n\n`;
 }

 response += ` **Pro tip:** Visit the school in person if possible. Meet the principal, see the classrooms, and ask about after-school programs. It helps kids feel more comfortable on day one!`;

 return response;
 }

 generateDriversLicenseResponse() {
 const city = this.getCityData();
 let response = SETTLE_IN_DATA.agentResponses.driversLicense.intro + '\n\n';
 response += SETTLE_IN_DATA.agentResponses.driversLicense.steps.join('\n') + '\n\n';

 if (city && city.dmv) {
 response += `\n** For ${this.profile.city}:**\n`;
 response += `• Agency: **${city.dmv.name}**\n`;
 response += `• Deadline: **${city.dmv.deadline}** after establishing residency\n`;
 response += `• Website: ${city.dmv.website}\n`;
 response += `• *${city.dmv.tip}*\n`;
 }

 return response;
 }

 generatePetsResponse() {
 const city = this.getCityData();
 let response = `Great question! Here's what your pets need in the new city: \n\n`;
 response += `**Essential pet setup tasks:**\n`;
 response += `1. **Find a veterinarian** — Transfer medical records from your previous vet\n`;
 response += `2. **City pet registration** — Many cities require pets to be licensed\n`;
 response += `3. **Update microchip info** — Update your address with the microchip company\n`;
 response += `4. **Find a pet store** — Locate nearby shops for food and supplies\n`;
 response += `5. **Identify emergency vet clinics** — Know where to go for after-hours emergencies\n\n`;

 if (city && city.dogParks) {
 response += `** Dog Parks in ${this.profile.city}:**\n`;
 city.dogParks.forEach(park => {
 response += `• ${park}\n`;
 });
 response += `\n`;
 }

 response += ` **Pro tip:** Keep your pets in a quiet, secure room while unpacking. The chaos of moving can be stressful for them too!`;

 return response;
 }

 generateBankingResponse() {
 let response = `Let's get your finances set up in your new city! \n\n`;
 response += `**Banking setup checklist:**\n`;
 response += `1. **Update your address** with your current bank (online or by phone)\n`;
 response += `2. **Consider a local bank/credit union** if your current bank doesn't have branches nearby\n`;
 response += `3. **Update direct deposits** — Notify your employer of any new banking info\n`;
 response += `4. **Update auto-payments** — Mortgage, subscriptions, utilities\n`;
 response += `5. **Order new checks** with your updated address\n\n`;
 response += `**Insurance updates:**\n`;
 response += `• Auto insurance — Rates vary by state/city, you might save money!\n`;
 response += `• Health insurance — Check if your plan covers providers in your new area\n`;
 response += `• Renter's/Homeowner's — Required for most leases and mortgages\n\n`;
 response += ` **Pro tip:** Many credit unions offer better rates and fees than big banks. Check out local options!`;

 return response;
 }

 generateTransitResponse() {
 const city = this.getCityData();
 let response = `Let's get you moving around your new city! \n\n`;

 if (city && city.transit) {
 response += `**Public Transit in ${this.profile.city}:**\n`;
 response += `• System: **${city.transit.system}**\n`;
 response += `• App: **${city.transit.app}**\n`;
 response += `• Pass: **${city.transit.pass}**\n`;
 response += `• *${city.transit.tip}*\n\n`;
 }

 response += `**General transit tips for any new city:**\n`;
 response += `1. Download the local transit app right away\n`;
 response += `2. Get a transit pass/card — usually saves money over single rides\n`;
 response += `3. Try your commute route before your first day of work\n`;
 response += `4. Check if your employer offers transit benefits\n`;
 response += `5. Explore bike-sharing programs — great for short trips!\n\n`;
 response += ` **Pro tip:** Google Maps and Citymapper are great for planning routes in most cities!`;

 return response;
 }

 generateAddressResponse() {
 let response = `Updating your address is one of the most important things to do quickly! \n\n`;
 response += `**Change-of-address checklist:**\n`;
 response += `1. **USPS Mail Forwarding** — File at usps.com ($1.10 fee for identity verification)\n`;
 response += ` This forwards mail from your old address for up to 12 months\n`;
 response += `2. **Government agencies** — IRS, Social Security, voter registration\n`;
 response += `3. **Financial institutions** — Banks, credit cards, investment accounts\n`;
 response += `4. **Insurance companies** — Auto, health, life, renter's\n`;
 response += `5. **Subscriptions** — Streaming services, magazines, online shopping accounts\n`;
 response += `6. **Employer** — HR department, payroll\n`;
 response += `7. **Medical providers** — Doctors, dentists, pharmacy\n\n`;
 response += ` **Pro tip:** Keep a running list on your phone and add addresses as you remember them. You'll be updating this for weeks!`;

 return response;
 }

 generateLocalTipsResponse() {
 const city = this.getCityData();
 let response = '';

 if (city && city.localTips) {
 response = `Here are some insider tips for ${this.profile.city}! \n\n`;
 city.localTips.forEach(tip => {
 response += `${tip}\n\n`;
 });
 response += `These are the kinds of things locals know — now you do too! Want to know about specific restaurants, activities, or hidden gems?`;
 } else {
 response = `Great idea to explore your new city! Here are some general tips:\n\n`;
 response += `1. **Ask neighbors** — They know the best local spots\n`;
 response += `2. **Check local subreddits** — Great source for city-specific tips\n`;
 response += `3. **Visit the farmers market** — Great food and community vibes\n`;
 response += `4. **Walk your neighborhood** — You'll discover hidden gems on foot\n`;
 response += `5. **Join local Facebook groups** — Great for recommendations\n\n`;
 response += `The best way to love your new city is to explore it like a tourist!`;
 }

 return response;
 }

 generateCommunityResponse() {
 let response = `Building community in a new city is so important! \n\n`;
 response += `**Ways to connect with your new community:**\n\n`;
 response += `1. **Meetup.com** — Find groups based on your interests (hiking, board games, tech, book clubs)\n`;
 response += `2. **Local library events** — Free programs, workshops, and meetups for all ages\n`;
 response += `3. **Neighborhood apps** — Try Nextdoor to connect with nearby neighbors\n`;
 response += `4. **Volunteer** — Nothing connects you to a community faster than giving back\n`;
 response += `5. **Sports leagues** — Recreational leagues are great for meeting people\n`;
 response += `6. **Religious/spiritual communities** — If applicable, places of worship often welcome newcomers warmly\n`;
 response += `7. **Coworking spaces** — Great for remote workers to find their "work tribe"\n\n`;

 if (this.profile.household === 'Family with kids') {
 response += `‍‍ **For families:** School events, PTA meetings, and kids' activities are goldmines for meeting other parents!\n\n`;
 }

 response += ` **Pro tip:** Say yes to everything for the first few months. Every invitation is a chance to build your network!`;

 return response;
 }

 generateNextStepsResponse() {
 const completedTasks = this.getCompletedTaskCount();
 const totalTasks = this.getTotalTaskCount();

 let response = `Let me look at where you are in your setup journey... \n\n`;
 response += `You've completed **${completedTasks}** out of **${totalTasks}** tasks so far.\n\n`;

 const nextTasks = this.getNextPriorityTasks(5);
 if (nextTasks.length > 0) {
 response += `**Here are your top priorities right now:**\n\n`;
 nextTasks.forEach((task, i) => {
 const urgency = task.priority === 'critical' ? '' : task.priority === 'high' ? '' : '';
 response += `${i + 1}. ${urgency} **${task.title}** — ${task.description}\n`;
 });
 response += `\nWould you like help with any of these? Just ask and I'll walk you through it!`;
 } else {
 response += ` Amazing — it looks like you've completed all your priority tasks! Check the **Checklist** tab to see if there are any remaining nice-to-have items.`;
 }

 return response;
 }

 generateEncouragementResponse() {
 const encouragement = this.getRandom(SETTLE_IN_DATA.agentResponses.encouragement);
 const completed = this.getCompletedTaskCount();

 let response = `${encouragement}\n\n`;

 if (completed > 0) {
 response += `Look at what you've already accomplished — **${completed} tasks completed!** That's real progress.\n\n`;
 }

 response += `Here's what I'd suggest: **pick just ONE task** from your checklist and focus on that. Once it's done, you'll feel a burst of momentum.\n\n`;
 response += `Would you like me to suggest the single most important thing to do right now?`;

 return response;
 }

 generateChecklistResponse() {
 let response = `Your personalized checklist is ready! \n\n`;
 response += `You can view and manage your full checklist by clicking the **Checklist** tab in the sidebar.\n\n`;
 response += `Here's a quick summary:\n`;

 SETTLE_IN_DATA.phases.forEach(phase => {
 const phaseTasks = this.getTasksForPhase(phase.id);
 const completed = phaseTasks.filter(t => t.completed).length;
 response += `• ${phase.icon} **${phase.label}**: ${completed}/${phaseTasks.length} completed\n`;
 });

 response += `\nWant me to walk you through a specific phase?`;

 return response;
 }

 generateThankYouResponse() {
 const responses = [
 "You're welcome! That's what I'm here for. What would you like to tackle next?",
 "Glad I could help! Remember, I'm here whenever you need me. What's next on your list?",
 "You got it! You're doing amazing with this move. Anything else you need help with?",
 "Happy to help! Your new city is lucky to have you. What else can I assist with?",
 "Anytime! Moving is a journey, and you're crushing it. What's next?"
 ];
 return this.getRandom(responses);
 }

 generateNeighborhoodResponse(userMessage = '') {
 const msg = userMessage.toLowerCase();
 const city = this.profile.city || 'your destination city';
 const hoods = (typeof SETTLE_IN_DATA !== 'undefined' && SETTLE_IN_DATA.neighborhoods) || [];
 
 // Find matching neighborhood by name or id or highlight keywords
 const found = hoods.find(h => 
 msg.includes(h.name.toLowerCase()) || 
 msg.includes(h.id.toLowerCase()) ||
 h.name.toLowerCase().split(' ')[0].length > 3 && msg.includes(h.name.toLowerCase().split(' ')[0])
 );
 
 if (found) {
 const rentStr = typeof formatLocalCurrency === 'function' ? formatLocalCurrency(found.avgRent, found.city) : '₹' + found.avgRent.toLocaleString();
 return `### Living Zone Briefing: **${found.name}** (${found.city})
**Vibe:** ${found.vibeBadge} (${found.vibe})
**Safety Index:** **${found.safetyScore}/10** | **Schools Rating:** **${found.schoolsScore}/10**

**Realistic Rental Benchmarks:**
• Average 2BHK Society Flat: **${rentStr}/month**
• Security Deposit: Typically 2 to 3 months rent in gated high-rises.

**Connectivity & Transit Walkability:**
• **Nearest Transit:** ${found.metroDist}
• **Commute to Airport:** Rapid corridor connection (~15-30 mins depending on time of day).

**Top Educational Institutions:**
• ${found.schools}

**Why Relocators Love This Enclave:**
${found.highlights.map(h => `• ${h}`).join('\n')}

**Agent Recommendation:**
${found.description}

 *Pro-tip: Head to the **Neighborhood Matcher** tab to run the % priority calculator, check the Transit Guide, or add an inspection tour directly to your checklist!*`;
 }

 // Generic neighborhood guidance for the city
 const cityHoods = hoods.filter(h => h.city.toLowerCase() === city.toLowerCase());
 let resp = `### Prime Living Enclaves in **${city}**\n\n`;
 resp += `Here are prime residential neighborhoods based on safety, connectivity, and amenities:\n\n`;
 if (cityHoods.length > 0) {
 cityHoods.forEach(h => {
 const rentStr = typeof formatLocalCurrency === 'function' ? formatLocalCurrency(h.avgRent, h.city) : '₹' + h.avgRent.toLocaleString();
 resp += `• **${h.name}** (${h.vibeBadge}): Avg 2BHK ~${rentStr}/mo. Safety: ${h.safetyScore}/10. Transit: ${h.metroDist}.\n`;
 });
 resp += `\n *Head to the **Neighborhood Matcher** tab to compare live % fit scores, view transit guides, and add inspection tasks directly to your checklist!*`;
 } else {
 resp += `Explore the **Neighborhood Matcher** tab on your left sidebar to view curated enclaves, safety ratings, and school districts across all cities!`;
 }
 return resp;
 }

 generateCostOfLivingResponse() {
 const city = this.profile.city;
 const data = SETTLE_IN_DATA.costOfLiving[city];
 let response = `Let's talk about the cost of living in your new city! \n\n`;

 if (data) {
 response += `** Cost of Living — ${city}**\n`;
 response += `Overall Rating: **${data.overall}** (Index: ${data.index} vs national avg of 100)\n\n`;
 response += `**Monthly Cost Estimates:**\n`;
 response += ` 1BR Apartment: **$${data.rent1br.toLocaleString()}/mo**\n`;
 response += ` 2BR Apartment: **$${data.rent2br.toLocaleString()}/mo**\n`;
 response += ` Groceries: **$${data.groceries}/mo**\n`;
 response += ` Transportation: **$${data.transport}/mo**\n`;
 response += ` Utilities: **$${data.utilities}/mo**\n`;
 response += ` Internet: **$${data.internet}/mo**\n`;
 response += `️ Dining out: **$${data.dining}/mo**\n\n`;
 const total1br = data.rent1br + data.groceries + data.transport + data.utilities + data.internet + data.dining;
 response += `**Estimated monthly total (1BR):** ~$${total1br.toLocaleString()}\n\n`;
 if (data.noIncomeTax) {
 response += ` **Great news:** ${city.split(',')[1].trim()} has **no state income tax!** This can save you thousands per year.\n\n`;
 }
 response += ` These are averages — actual costs vary by neighborhood. Use Numbeo or Niche for detailed breakdowns.`;
 } else {
 response += `I don't have specific cost data for your city yet, but here are tips:\n\n`;
 response += `1. Use **Numbeo.com** or **Niche.com** for detailed comparisons\n`;
 response += `2. Check local Craigslist/Zillow for real rent prices\n`;
 response += `3. Visit local grocery stores to compare food costs\n`;
 response += `4. Ask your HR department if they offer cost-of-living adjustments`;
 }
 return response;
 }

 generateDocumentsResponse() {
 const docs = SETTLE_IN_DATA.documents;
 const categories = SETTLE_IN_DATA.documentCategories;
 let response = `Here's a comprehensive list of documents you should gather for your move! \n\n`;
 response += `** Critical Documents (Gather First):**\n`;

 const critical = docs.filter(d => d.critical);
 critical.forEach(doc => {
 const cat = categories.find(c => c.id === doc.category);
 response += `• ${cat ? cat.icon : ''} **${doc.name}** — ${doc.description}\n`;
 });

 response += `\n** Additional Documents (Helpful to Have):**\n`;
 const optional = docs.filter(d => !d.critical);
 optional.forEach(doc => {
 const cat = categories.find(c => c.id === doc.category);
 response += `• ${cat ? cat.icon : ''} ${doc.name} — ${doc.description}\n`;
 });

 response += `\n **Pro tip:** Make digital copies (photos/scans) of everything and store them securely in the cloud. You'll need to show these documents multiple times!\n\n`;
 response += ` You can track your document collection progress in the **Documents** tab in the sidebar.`;

 return response;
 }

 generateEmergencyResponse() {
 const city = this.profile.city;
 const contacts = SETTLE_IN_DATA.emergencyContacts[city];
 let response = `Here are the essential emergency contacts for your new area! \n\n`;
 response += `**️ Always dial 911 for life-threatening emergencies**\n\n`;

 if (contacts) {
 response += `** Emergency Services in ${city}:**\n\n`;
 response += ` **Police:** ${contacts.police.name}\n`;
 response += ` Emergency: ${contacts.police.emergency} | Non-Emergency: ${contacts.police.nonEmergency}\n\n`;
 response += ` **Fire:** ${contacts.fire.name}\n`;
 response += ` Emergency: ${contacts.fire.emergency} | Non-Emergency: ${contacts.fire.nonEmergency}\n\n`;
 response += ` **Nearest Hospital:** ${contacts.hospital.name}\n`;
 response += ` ${contacts.hospital.phone} | ${contacts.hospital.address}\n\n`;
 response += `️ **Poison Control:** ${contacts.poison.phone}\n\n`;
 response += ` **Road Conditions:** ${contacts.roadside.name} — ${contacts.roadside.phone}\n\n`;
 if (this.profile.pets && this.profile.pets !== 'No pets') {
 response += ` **Animal Control:** ${contacts.animalControl.name} — ${contacts.animalControl.phone}\n\n`;
 }
 }

 response += ` **Pro tip:** Save these numbers in your phone contacts AND keep a printed card at home. Also note the nearest urgent care center for non-emergency medical needs.`;
 return response;
 }

 generateWeatherResponse() {
 const city = this.profile.city;
 const weather = SETTLE_IN_DATA.weather[city];
 let response = '';

 if (weather) {
 response = `Here's what to expect from the weather in ${city}! ️\n\n`;
 response += `️ **Summer:** ${weather.summer}\n`;
 response += `️ **Winter:** ${weather.winter}\n`;
 response += `️ **Rainy Season:** ${weather.rainy}\n\n`;
 response += `${weather.note}\n\n`;
 response += `**What to pack/buy:**\n`;
 const summerTemp = parseInt(weather.summer);
 const winterTemp = parseInt(weather.winter);
 if (summerTemp > 85) response += `• ️ Sunscreen, sunglasses, light breathable clothes\n`;
 if (winterTemp < 40) response += `• Warm coat, boots, gloves, and layers\n`;
 if (weather.rainy) response += `• Rain jacket or umbrella\n`;
 response += `• Comfortable walking shoes\n\n`;
 response += ` **Pro tip:** Check the 10-day forecast before packing your final boxes. Your first week's wardrobe should match the current weather!`;
 } else {
 response = `I don't have specific weather data for your city, but I'd recommend:\n\n`;
 response += `1. Check Weather.com or AccuWeather for seasonal averages\n`;
 response += `2. Ask locals about microclimates and unexpected weather patterns\n`;
 response += `3. Pack layers — you can always adjust!`;
 }
 return response;
 }

 generateSmartDefault(userMessage) {
 const city = this.getCityData();
 let response = '';

 if (userMessage.length < 10) {
 response = `I'd love to help! Could you tell me a bit more about what you need? I can assist with:\n\n`;
 } else {
 response = `That's a great question! While I'm specifically focused on helping you set up your new life in ${this.profile.city || 'your new city'}, here's what I can help with:\n\n`;
 }

 response += `• **Utilities** — Electricity, water, gas, internet\n`;
 response += `• ️ **Government** — Driver's license, address change, voter registration\n`;
 response += `• **Healthcare** — Finding doctors, dentists, pharmacies\n`;
 response += `• **Banking** — Account setup, insurance updates\n`;
 response += `• **Transportation** — Transit passes, commuting tips\n`;
 response += `• **Schools** — Enrollment and finding the right school\n`;
 response += `• **Pets** — Vet, licensing, dog parks\n`;
 response += `• **Cost of Living** — Budget estimates, rent, groceries\n`;
 response += `• **Documents** — What paperwork you need\n`;
 response += `• **Emergency** — Local emergency contacts\n`;
 response += `• ️ **Weather** — Climate and what to expect\n`;
 response += `• **Community** — Meeting people, local groups\n`;
 response += `• **Local Tips** — Insider recommendations\n\n`;
 response += `Just ask about any of these topics!`;

 return response;
 }

 // -----------------------------------------------------------
 // Helper Methods
 // -----------------------------------------------------------
 getRandom(arr) {
 return arr[Math.floor(Math.random() * arr.length)];
 }

 getCompletedTaskCount() {
 if (typeof checklistManager !== 'undefined') {
 return checklistManager.getCompletedCount();
 }
 return 0;
 }

 getTotalTaskCount() {
 if (typeof checklistManager !== 'undefined') {
 return checklistManager.getTotalCount();
 }
 return SETTLE_IN_DATA.tasks.length;
 }

 getTasksForPhase(phaseId) {
 if (typeof checklistManager !== 'undefined') {
 return checklistManager.getTasksByPhase(phaseId);
 }
 return SETTLE_IN_DATA.tasks.filter(t => t.phase === phaseId);
 }

 getNextPriorityTasks(count) {
 if (typeof checklistManager !== 'undefined') {
 return checklistManager.getNextPriorityTasks(count);
 }
 return SETTLE_IN_DATA.tasks.filter(t => !t.completed).slice(0, count);
 }
}

if (typeof module !== 'undefined' && module.exports) {
 module.exports = SettleInAgent;
}

