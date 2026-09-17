// ============================================================
// SettleIn — Knowledge Base & Data Layer
// ============================================================

const SETTLE_IN_DATA = {
 "profileQuestions": [
 {
 "id": "city",
 "question": "Which city are you moving to?",
 "type": "grouped-select",
 "groupedOptions": [
 {
 "continent": "Asia",
 "countries": [
 {
 "country": "India",
 "states": [
 {
 "state": "Odisha",
 "cities": [
 "Bhubaneswar, India"
 ]
 },
 {
 "state": "Karnataka",
 "cities": [
 "Bengaluru, India"
 ]
 },
 {
 "state": "Maharashtra",
 "cities": [
 "Mumbai, India",
 "Pune, India"
 ]
 },
 {
 "state": "Delhi",
 "cities": [
 "Delhi NCR, India"
 ]
 },
 {
 "state": "Telangana",
 "cities": [
 "Hyderabad, India"
 ]
 },
 {
 "state": "Tamil Nadu",
 "cities": [
 "Chennai, India"
 ]
 },
 {
 "state": "West Bengal",
 "cities": [
 "Kolkata, India"
 ]
 },
 {
 "state": "Gujarat",
 "cities": [
 "Ahmedabad, India"
 ]
 },
 {
 "state": "Rajasthan",
 "cities": [
 "Jaipur, India"
 ]
 }
 ]
 },
 {
 "country": "Singapore",
 "states": [
 {
 "state": "Singapore",
 "cities": [
 "Singapore"
 ]
 }
 ]
 },
 {
 "country": "Japan",
 "states": [
 {
 "state": "Tokyo",
 "cities": [
 "Tokyo, Japan"
 ]
 }
 ]
 },
 {
 "country": "UAE",
 "states": [
 {
 "state": "Dubai",
 "cities": [
 "Dubai, UAE"
 ]
 }
 ]
 }
 ]
 },
 {
 "continent": "North America",
 "countries": [
 {
 "country": "USA",
 "states": [
 {
 "state": "Texas",
 "cities": [
 "Austin, TX"
 ]
 },
 {
 "state": "Washington",
 "cities": [
 "Seattle, WA"
 ]
 },
 {
 "state": "New York",
 "cities": [
 "New York, NY"
 ]
 },
 {
 "state": "Colorado",
 "cities": [
 "Denver, CO"
 ]
 },
 {
 "state": "California",
 "cities": [
 "San Francisco, CA"
 ]
 },
 {
 "state": "Illinois",
 "cities": [
 "Chicago, IL"
 ]
 }
 ]
 }
 ]
 },
 {
 "continent": "Other",
 "countries": [
 {
 "country": "Other",
 "states": [
 {
 "state": "Other",
 "cities": [
 "Other"
 ]
 }
 ]
 }
 ]
 }
 ],
 "options": [
 "Bhubaneswar, India",
 "Bengaluru, India",
 "Mumbai, India",
 "Delhi NCR, India",
 "Hyderabad, India",
 "Pune, India",
 "Chennai, India",
 "Kolkata, India",
 "Ahmedabad, India",
 "Jaipur, India",
 "Singapore",
 "Tokyo, Japan",
 "Dubai, UAE",
 "Austin, TX",
 "Seattle, WA",
 "New York, NY",
 "Denver, CO",
 "San Francisco, CA",
 "Chicago, IL",
 "Other"
 ],
 "icon": ""
 },
 {
 "id": "household",
 "question": "How many members are accompanying you?",
 "type": "select",
 "options": [
 "1 (Solo Relocator)",
 "2 (Couple / Partner)",
 "3–4 (Family with Kids)",
 "5+ (Extended Household)",
 "Roommates / Group"
 ],
 "icon": ""
 },
 {
 "id": "homeType",
 "question": "What housing arrangement are you looking for?",
 "type": "select",
 "options": [
 "Monthly Rental Apartment (1–2 BHK)",
 "Spacious Family Rental (3+ BHK)",
 "Multi-Year Corporate Lease (Villa / Penthouse)",
 "Furnished Studio / Co-Living Suite"
 ],
 "icon": ""
 },
 {
 "id": "kids",
 "question": "Will you need admissions for school-going kids?",
 "type": "select",
 "options": [
 "No school admissions needed",
 "1 child",
 "2 children",
 "3+ children"
 ],
 "icon": ""
 },
 {
 "id": "pets",
 "question": "Are any furry friends / pets accompanying you?",
 "type": "select",
 "options": [
 "No pets",
 "Dog(s)",
 "Cat(s)",
 "Dogs and cats",
 "Other pets"
 ],
 "icon": ""
 },
 {
 "id": "situation",
 "question": "What's bringing you to your new city?",
 "type": "select",
 "options": [
 "New corporate job",
 "Remote tech career",
 "Higher studies / University",
 "Family relocation",
 "Fresh life chapter"
 ],
 "icon": ""
 },
 {
 "id": "timeline",
 "question": "When is your moving timeline?",
 "type": "select",
 "options": [
 "Already arrived!",
 "This upcoming week",
 "Within this month",
 "In 1–2 months"
 ],
 "icon": ""
 }
 ],
 "phases": [
 {
 "id": "day1",
 "label": "Day 1",
 "icon": "",
 "color": "#FF8C42",
 "description": "Essential first-day tasks"
 },
 {
 "id": "week1",
 "label": "Week 1",
 "icon": "",
 "color": "#FFB347",
 "description": "Get the basics running"
 },
 {
 "id": "month1",
 "label": "Month 1",
 "icon": "",
 "color": "#7C6AEF",
 "description": "Build your foundation"
 },
 {
 "id": "settled",
 "label": "Settled",
 "icon": "",
 "color": "#4ECDC4",
 "description": "Make it feel like home"
 }
 ],
 "categories": [
 {
 "id": "utilities",
 "label": "Utilities",
 "icon": ""
 },
 {
 "id": "government",
 "label": "Government & ID",
 "icon": "️"
 },
 {
 "id": "healthcare",
 "label": "Healthcare",
 "icon": ""
 },
 {
 "id": "finance",
 "label": "Banking & Finance",
 "icon": ""
 },
 {
 "id": "education",
 "label": "Education",
 "icon": ""
 },
 {
 "id": "transport",
 "label": "Transportation",
 "icon": ""
 },
 {
 "id": "home",
 "label": "Home Setup",
 "icon": ""
 },
 {
 "id": "pets",
 "label": "Pets",
 "icon": ""
 },
 {
 "id": "community",
 "label": "Community",
 "icon": ""
 },
 {
 "id": "fun",
 "label": "Local Exploration",
 "icon": ""
 }
 ],
 "tasks": [
 {
 "id": "t1",
 "phase": "day1",
 "category": "utilities",
 "title": "Set up electricity",
 "description": "Contact the local electric provider to start service at your new address.",
 "priority": "critical",
 "forAll": true
 },
 {
 "id": "t2",
 "phase": "day1",
 "category": "utilities",
 "title": "Set up water service",
 "description": "Contact the city water department or utility provider.",
 "priority": "critical",
 "forAll": true
 },
 {
 "id": "t3",
 "phase": "day1",
 "category": "utilities",
 "title": "Set up internet service",
 "description": "Research local ISPs and schedule installation.",
 "priority": "critical",
 "forAll": true
 },
 {
 "id": "t4",
 "phase": "day1",
 "category": "home",
 "title": "Change locks or get new keys",
 "description": "For security, change the locks on your new home or get keys from your landlord.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t5",
 "phase": "day1",
 "category": "home",
 "title": "Test smoke & CO detectors",
 "description": "Ensure all safety devices are working. Replace batteries if needed.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t6",
 "phase": "day1",
 "category": "utilities",
 "title": "Set up gas service",
 "description": "If your home uses gas, contact the provider to start service.",
 "priority": "critical",
 "forAll": true
 },
 {
 "id": "t7",
 "phase": "day1",
 "category": "pets",
 "title": "Set up pet safe spaces",
 "description": "Create a comfortable, secure area for your pets while unpacking.",
 "priority": "high",
 "forPets": true
 },
 {
 "id": "t10",
 "phase": "week1",
 "category": "government",
 "title": "Update your mailing address (USPS)",
 "description": "File a change of address with USPS to forward mail from your old address.",
 "priority": "critical",
 "forAll": true
 },
 {
 "id": "t11",
 "phase": "week1",
 "category": "government",
 "title": "Get a new driver's license or state ID",
 "description": "Visit the local DMV to transfer your license. Most states require this within 30-90 days.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t12",
 "phase": "week1",
 "category": "government",
 "title": "Register your vehicle",
 "description": "Transfer your vehicle registration to the new state if applicable.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t13",
 "phase": "week1",
 "category": "finance",
 "title": "Open a local bank account or update address",
 "description": "Set up banking in your new city or update your existing bank with your new address.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t14",
 "phase": "week1",
 "category": "healthcare",
 "title": "Find a primary care doctor",
 "description": "Research and register with a local primary care physician.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t15",
 "phase": "week1",
 "category": "healthcare",
 "title": "Find a local pharmacy",
 "description": "Transfer any prescriptions to a nearby pharmacy.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t16",
 "phase": "week1",
 "category": "healthcare",
 "title": "Find a pediatrician",
 "description": "Find and register with a pediatrician for your children.",
 "priority": "high",
 "forKids": true
 },
 {
 "id": "t17",
 "phase": "week1",
 "category": "education",
 "title": "Research school districts & enrollment",
 "description": "Contact local schools, gather enrollment documents, and schedule visits.",
 "priority": "critical",
 "forKids": true
 },
 {
 "id": "t18",
 "phase": "week1",
 "category": "transport",
 "title": "Learn the public transit system",
 "description": "Download transit apps, get passes, and learn key routes.",
 "priority": "medium",
 "forAll": true
 },
 {
 "id": "t19",
 "phase": "week1",
 "category": "home",
 "title": "Set up renter's or homeowner's insurance",
 "description": "Get coverage for your new home. Required by most landlords and mortgage lenders.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t20",
 "phase": "week1",
 "category": "pets",
 "title": "Find a local veterinarian",
 "description": "Register with a vet and transfer your pet's medical records.",
 "priority": "high",
 "forPets": true
 },
 {
 "id": "t21",
 "phase": "week1",
 "category": "pets",
 "title": "Register your pet with the city",
 "description": "Many cities require pet licensing and registration. Check local requirements.",
 "priority": "medium",
 "forPets": true
 },
 {
 "id": "t22",
 "phase": "week1",
 "category": "home",
 "title": "Find nearest grocery stores",
 "description": "Locate nearby supermarkets, farmers markets, and specialty food stores.",
 "priority": "medium",
 "forAll": true
 },
 {
 "id": "t30",
 "phase": "month1",
 "category": "government",
 "title": "Register to vote",
 "description": "Update your voter registration to your new address and district.",
 "priority": "medium",
 "forAll": true
 },
 {
 "id": "t31",
 "phase": "month1",
 "category": "healthcare",
 "title": "Find a local dentist",
 "description": "Schedule dental check-ups for the family at a new practice.",
 "priority": "medium",
 "forAll": true
 },
 {
 "id": "t32",
 "phase": "month1",
 "category": "finance",
 "title": "Update insurance policies",
 "description": "Update auto, health, and life insurance with your new address and local agents.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t33",
 "phase": "month1",
 "category": "finance",
 "title": "Update tax withholding info",
 "description": "Adjust W-4 or tax documents for your new state's tax rates.",
 "priority": "medium",
 "forAll": true
 },
 {
 "id": "t34",
 "phase": "month1",
 "category": "education",
 "title": "Complete school enrollment",
 "description": "Submit all documents, immunization records, and finalize enrollment.",
 "priority": "critical",
 "forKids": true
 },
 {
 "id": "t35",
 "phase": "month1",
 "category": "education",
 "title": "Find extracurricular activities",
 "description": "Sports leagues, music lessons, art classes — help kids build new friendships.",
 "priority": "medium",
 "forKids": true
 },
 {
 "id": "t36",
 "phase": "month1",
 "category": "community",
 "title": "Get a library card",
 "description": "Sign up at your local public library — free books, events, WiFi, and community!",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t37",
 "phase": "month1",
 "category": "community",
 "title": "Find community groups or meetups",
 "description": "Join local clubs, hobby groups, or neighborhood associations.",
 "priority": "medium",
 "forAll": true
 },
 {
 "id": "t38",
 "phase": "month1",
 "category": "home",
 "title": "Set up a mail/package routine",
 "description": "Set up informed delivery, package lockers, or coordinate with building management.",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t39",
 "phase": "month1",
 "category": "transport",
 "title": "Find a trusted local mechanic",
 "description": "Ask neighbors or check reviews for reliable auto repair shops.",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t40",
 "phase": "month1",
 "category": "pets",
 "title": "Find dog parks & pet-friendly spots",
 "description": "Discover local dog parks, pet-friendly restaurants, and walking trails.",
 "priority": "low",
 "forPets": true
 },
 {
 "id": "t41",
 "phase": "month1",
 "category": "home",
 "title": "Set up emergency contacts",
 "description": "Create a list of local emergency numbers, nearest hospital, and trusted neighbors.",
 "priority": "high",
 "forAll": true
 },
 {
 "id": "t50",
 "phase": "settled",
 "category": "fun",
 "title": "Explore local restaurants & cafes",
 "description": "Try the spots locals love. Ask neighbors for hidden gems!",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t51",
 "phase": "settled",
 "category": "fun",
 "title": "Visit local landmarks & attractions",
 "description": "Be a tourist in your own city — explore parks, museums, and cultural sites.",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t52",
 "phase": "settled",
 "category": "fun",
 "title": "Find your favorite walking/running routes",
 "description": "Discover trails, parks, and scenic paths near your neighborhood.",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t53",
 "phase": "settled",
 "category": "community",
 "title": "Meet your neighbors",
 "description": "Introduce yourself! Bring cookies, attend block parties, join the neighborhood chat.",
 "priority": "medium",
 "forAll": true
 },
 {
 "id": "t54",
 "phase": "settled",
 "category": "community",
 "title": "Find volunteer opportunities",
 "description": "Give back to your new community through local volunteer organizations.",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t55",
 "phase": "settled",
 "category": "fun",
 "title": "Create your \"new city favorites\" list",
 "description": "Build your go-to list: favorite coffee shop, pizza place, park, bookstore...",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t56",
 "phase": "settled",
 "category": "community",
 "title": "Join a local sports league or fitness class",
 "description": "Great way to stay active and make friends in your new city.",
 "priority": "low",
 "forAll": true
 },
 {
 "id": "t40x",
 "phase": "day1",
 "category": "housing",
 "title": "Expanded Task 40",
 "description": "Important task to remember during relocation phase day1",
 "priority": "critical",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t41x",
 "phase": "week1",
 "category": "home",
 "title": "Expanded Task 41",
 "description": "Important task to remember during relocation phase week1",
 "priority": "high",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t42x",
 "phase": "month1",
 "category": "pets",
 "title": "Expanded Task 42",
 "description": "Important task to remember during relocation phase month1",
 "priority": "medium",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t43x",
 "phase": "settled",
 "category": "fun",
 "title": "Expanded Task 43",
 "description": "Important task to remember during relocation phase settled",
 "priority": "low",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t44x",
 "phase": "day1",
 "category": "utilities",
 "title": "Expanded Task 44",
 "description": "Important task to remember during relocation phase day1",
 "priority": "critical",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t45x",
 "phase": "week1",
 "category": "government",
 "title": "Expanded Task 45",
 "description": "Important task to remember during relocation phase week1",
 "priority": "high",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t46x",
 "phase": "month1",
 "category": "registration",
 "title": "Expanded Task 46",
 "description": "Important task to remember during relocation phase month1",
 "priority": "medium",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t47x",
 "phase": "settled",
 "category": "healthcare",
 "title": "Expanded Task 47",
 "description": "Important task to remember during relocation phase settled",
 "priority": "low",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t48x",
 "phase": "day1",
 "category": "finance",
 "title": "Expanded Task 48",
 "description": "Important task to remember during relocation phase day1",
 "priority": "critical",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t49x",
 "phase": "week1",
 "category": "education",
 "title": "Expanded Task 49",
 "description": "Important task to remember during relocation phase week1",
 "priority": "high",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t50x",
 "phase": "month1",
 "category": "community",
 "title": "Expanded Task 50",
 "description": "Important task to remember during relocation phase month1",
 "priority": "medium",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t51x",
 "phase": "settled",
 "category": "housing",
 "title": "Expanded Task 51",
 "description": "Important task to remember during relocation phase settled",
 "priority": "low",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t52x",
 "phase": "day1",
 "category": "home",
 "title": "Expanded Task 52",
 "description": "Important task to remember during relocation phase day1",
 "priority": "critical",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t53x",
 "phase": "week1",
 "category": "pets",
 "title": "Expanded Task 53",
 "description": "Important task to remember during relocation phase week1",
 "priority": "high",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t54x",
 "phase": "month1",
 "category": "fun",
 "title": "Expanded Task 54",
 "description": "Important task to remember during relocation phase month1",
 "priority": "medium",
 "forAll": true,
 "forKids": false,
 "forPets": false
 },
 {
 "id": "t55x",
 "phase": "settled",
 "category": "utilities",
 "title": "Expanded Task 55",
 "description": "Important task to remember during relocation phase settled",
 "priority": "low",
 "forAll": true,
 "forKids": false,
 "forPets": false
 }
 ],
 "cities": {
 "Bhubaneswar, India": {
 "welcome": "Welcome to the Temple City of India! Bhubaneswar blends rich heritage, smart city innovation, green parks, and thriving tech parks.",
 "utilities": {
 "electric": {
 "provider": "TPCODL (TP Central Odisha Distribution)",
 "phone": "1912 / 0674-2530100",
 "website": "tpcentralodisha.com",
 "note": "Apply for 3-Phase smart electricity meter via TPCODL portal"
 },
 "water": {
 "provider": "WATCO Odisha (Water Corporation of Odisha)",
 "phone": "0674-2390322",
 "website": "watcodisha.nic.in"
 },
 "gas": {
 "provider": "GAIL Gas / BPCL City Gas",
 "phone": "1800-22-4344",
 "website": "gailgas.com"
 },
 "internet": [
 "JioFiber",
 "Airtel Xstream",
 "BSNL Bharat Fiber",
 "RailTel"
 ]
 },
 "dmv": {
 "name": "RTO Bhubaneswar (OD-02 / OD-33)",
 "deadline": "30 days",
 "website": "parivahan.gov.in",
 "tip": "Use Parivahan Sewa online portal for driving license address transfer."
 },
 "transit": {
 "system": "Mo Bus & Mo E-Ride",
 "app": "Mo Bus App",
 "pass": "Mo Bus Card",
 "tip": "Mo Bus is AC-enabled and covers Info City, Patia, Janpath, and BBI Airport."
 },
 "localTips": [
 " Visit Lingaraj Temple, Mukteswar Temple, and Rajarani Temple early morning for peace.",
 "️ Shop at Ekamra Haat for authentic Odisha handloom, Sambalpuri sarees, and Pattachitra art.",
 " Try authentic Odisha rasagola, Chhena Poda, and Dahibara Aloodum in Cuttack/Bhubaneswar.",
 " Walk through Ekamra Kanan Botanical Park and Jayadev Vatika for lush green trails.",
 "️ Biju Patnaik International Airport (BBI) is just 15 minutes from downtown."
 ],
 "schools": {
 "district": "Central Board of Secondary Education (CBSE) / ICSE",
 "website": "chseodisha.nic.in",
 "enrollment": "Admissions open March to April"
 },
 "dogParks": [
 "Kalinga Stadium Park",
 "Jayadev Vatika Pet Walk",
 "Ekamra Kanan Grounds"
 ]
 },
 "Bengaluru, India": {
 "welcome": "Welcome to India's Silicon Valley! Bengaluru offers pleasant weather, tech innovation, vibrant microbreweries, and lush parks.",
 "utilities": {
 "electric": {
 "provider": "BESCOM (Bengaluru Electricity Supply)",
 "phone": "1912",
 "website": "bescom.karnataka.gov.in"
 },
 "water": {
 "provider": "BWSSB Water Board",
 "phone": "080-22238888",
 "website": "bwssb.karnataka.gov.in"
 },
 "gas": {
 "provider": "GAIL Gas Bengaluru",
 "phone": "1800-266-2666",
 "website": "gailgas.com"
 },
 "internet": [
 "Airtel Xstream",
 "JioFiber",
 "ACT Fibernet",
 "Hathway"
 ]
 },
 "dmv": {
 "name": "RTO Bengaluru",
 "deadline": "30 days",
 "website": "transport.karnataka.gov.in",
 "tip": "Slot booking on Parivahan portal avoids long waits."
 },
 "transit": {
 "system": "Namma Metro (Purple & Green Line) + BMTC Bus",
 "app": "Namma Yatri / BMTC App",
 "pass": "Namma Metro Smart Card",
 "tip": "Namma Metro connects Whitefield, MG Road, and Indiranagar."
 },
 "localTips": [
 " Filter coffee at CTR Malleshwaram or Vidyarthi Bhavan is legendary.",
 " Cubbon Park is closed to traffic on Sundays — great for morning strolls with pets.",
 " Explore world-class craft breweries in Indiranagar and Koramangala.",
 " Plan travel around peak traffic hours (8:30 AM - 10:30 AM & 5:30 PM - 8:30 PM)."
 ],
 "schools": {
 "district": "Karnataka State Board / CBSE / IB World Schools",
 "website": "schooleducation.kar.nic.in",
 "enrollment": "Admissions open December to January"
 },
 "dogParks": [
 "Cubbon Park Dog Area",
 "Domlur Dog Park",
 "Agara Lake Pet Area"
 ]
 },
 "Austin, TX": {
 "welcome": "Welcome to the Live Music Capital of the World! Austin is known for its vibrant culture, incredible food scene, and outdoor lifestyle.",
 "utilities": {
 "electric": {
 "provider": "Austin Energy",
 "phone": "512-494-9400",
 "website": "austinenergy.com",
 "note": "City-owned utility — generally fast setup"
 },
 "water": {
 "provider": "Austin Water",
 "phone": "512-972-0000",
 "website": "austintexas.gov/water"
 },
 "gas": {
 "provider": "Texas Gas Service",
 "phone": "800-700-2443",
 "website": "texasgasservice.com"
 },
 "internet": [
 "AT&T Fiber",
 "Spectrum",
 "Google Fiber",
 "Grande Communications"
 ]
 },
 "dmv": {
 "name": "Texas DPS",
 "deadline": "90 days",
 "website": "dps.texas.gov",
 "tip": "Book online to avoid 2+ hour waits!"
 },
 "transit": {
 "system": "Capital Metro",
 "app": "CapMetro App",
 "pass": "MetroPass",
 "tip": "The MetroRail runs from downtown to north Austin suburbs"
 },
 "localTips": [
 " Breakfast tacos are a religion here. Start with Veracruz All Natural or Torchy's.",
 " Barton Springs Pool is a must — a natural spring-fed pool in the heart of the city.",
 " Check out free live music on South Congress Avenue any evening.",
 " Watch 1.5 million bats fly out from under the Congress Ave Bridge at sunset (Mar-Oct).",
 " The Greenbelt trails are perfect for hiking and swimming in summer."
 ],
 "schools": {
 "district": "Austin ISD",
 "website": "austinisd.org",
 "enrollment": "Online enrollment available year-round"
 },
 "dogParks": [
 "Zilker Park Off-Leash Area",
 "Red Bud Isle",
 "Norwood Estate Dog Park",
 "Yard Bar"
 ]
 },
 "Seattle, WA": {
 "welcome": "Welcome to the Emerald City! Seattle offers stunning nature, amazing coffee, and a thriving tech scene.",
 "utilities": {
 "electric": {
 "provider": "Seattle City Light",
 "phone": "206-684-3000",
 "website": "seattle.gov/city-light"
 },
 "water": {
 "provider": "Seattle Public Utilities",
 "phone": "206-684-3000",
 "website": "seattle.gov/utilities"
 },
 "gas": {
 "provider": "Puget Sound Energy",
 "phone": "888-225-5773",
 "website": "pse.com"
 },
 "internet": [
 "Xfinity",
 "CenturyLink",
 "Wave Broadband",
 "Starlink"
 ]
 },
 "dmv": {
 "name": "Washington DOL",
 "deadline": "30 days",
 "website": "dol.wa.gov",
 "tip": "You can start the process online and finish in person."
 },
 "transit": {
 "system": "King County Metro + Sound Transit",
 "app": "Transit GO Ticket",
 "pass": "ORCA Card",
 "tip": "Get an ORCA card — it works on buses, light rail, and ferries!"
 },
 "localTips": [
 " Skip the Pike Place Starbucks tourist line. Try Elm Coffee Roasters or Victrola instead.",
 "️ On clear days, Mount Rainier views will stop you in your tracks.",
 " Pike Place Market is worth visiting early morning before crowds.",
 "️ Locals don't use umbrellas. Get a good rain jacket instead.",
 " Take a ferry to Bainbridge Island — it's free entertainment with incredible views."
 ],
 "schools": {
 "district": "Seattle Public Schools",
 "website": "seattleschools.org",
 "enrollment": "Enrollment opens in February for the following year"
 },
 "dogParks": [
 "Magnuson Park Off-Leash",
 "Westcrest Park",
 "Golden Gardens",
 "Dr. Jose Rizal Dog Park"
 ]
 },
 "Denver, CO": {
 "welcome": "Welcome to the Mile High City! ️ Denver offers 300 days of sunshine, world-class outdoor recreation, and a booming food scene.",
 "utilities": {
 "electric": {
 "provider": "Xcel Energy",
 "phone": "800-895-4999",
 "website": "xcelenergy.com"
 },
 "water": {
 "provider": "Denver Water",
 "phone": "303-893-2444",
 "website": "denverwater.org"
 },
 "gas": {
 "provider": "Xcel Energy",
 "phone": "800-895-4999",
 "website": "xcelenergy.com"
 },
 "internet": [
 "Xfinity",
 "CenturyLink",
 "Ting Internet",
 "Starry Internet"
 ]
 },
 "dmv": {
 "name": "Colorado DMV",
 "deadline": "90 days",
 "website": "dmv.colorado.gov",
 "tip": "Many services available at county clerk offices with shorter lines."
 },
 "transit": {
 "system": "RTD",
 "app": "RTD Mobile Tickets",
 "pass": "RTD Pass",
 "tip": "The A Line connects Denver International Airport to Union Station downtown."
 },
 "localTips": [
 " Denver has more breweries per capita than almost any US city. Start with Great Divide or Ratio.",
 "️ Red Rocks Amphitheatre is a bucket-list concert venue — check the schedule!",
 " 300 days of sunshine means sunscreen is essential, even in winter.",
 " Ski resorts are just 1-2 hours west on I-70. Get an Ikon or Epic pass early.",
 " The altitude is real (5,280 ft). Stay hydrated and ease into exercise."
 ],
 "schools": {
 "district": "Denver Public Schools",
 "website": "dpsk12.org",
 "enrollment": "SchoolChoice enrollment window is in January"
 },
 "dogParks": [
 "Cherry Creek Dog Park",
 "Berkeley Dog Park",
 "Railyard Dog Park",
 "Kennedy Soccer Complex Dog Park"
 ]
 },
 "New York, NY": {
 "welcome": "Welcome to the city that never sleeps! New York offers unmatched culture, diversity, and energy.",
 "utilities": {
 "electric": {
 "provider": "Con Edison",
 "phone": "800-752-6633",
 "website": "coned.com",
 "note": "Start service at least 2 days before move-in"
 },
 "water": {
 "provider": "NYC DEP (included in rent for most apartments)",
 "phone": "718-595-7000",
 "website": "nyc.gov/dep"
 },
 "gas": {
 "provider": "Con Edison / National Grid",
 "phone": "800-752-6633",
 "website": "coned.com"
 },
 "internet": [
 "Spectrum",
 "Verizon Fios",
 "Optimum",
 "RCN"
 ]
 },
 "dmv": {
 "name": "New York DMV",
 "deadline": "30 days",
 "website": "dmv.ny.gov",
 "tip": "Book appointments online — walk-ins have very long wait times."
 },
 "transit": {
 "system": "MTA (Subway + Bus)",
 "app": "MYmta App",
 "pass": "OMNY / MetroCard",
 "tip": "Get an OMNY-enabled payment card for easy subway access. Weekly unlimited MetroCard is $34."
 },
 "localTips": [
 " The best pizza is at your neighborhood spot, not the tourist places. Explore!",
 " Download the Citymapper app — it's the best for navigating the subway.",
 " Central Park has free concerts, movie screenings, and events all summer.",
 " Many museums have 'pay what you wish' hours. Check schedules.",
 " Get your bagel from a no-frills corner shop, not a chain."
 ],
 "schools": {
 "district": "NYC DOE",
 "website": "schools.nyc.gov",
 "enrollment": "Apply through MySchools.nyc portal"
 },
 "dogParks": [
 "Madison Square Dog Run",
 "Tompkins Square Dog Run",
 "Prospect Park Dog Beach",
 "Carl Schurz Dog Run"
 ]
 },
 "San Francisco, CA": {
 "welcome": "Welcome to the City by the Bay! San Francisco offers iconic views, incredible diversity, and innovation around every corner.",
 "utilities": {
 "electric": {
 "provider": "PG&E / CleanPowerSF",
 "phone": "800-743-5000",
 "website": "pge.com"
 },
 "water": {
 "provider": "SF Water (SFPUC)",
 "phone": "415-551-3000",
 "website": "sfpuc.org"
 },
 "gas": {
 "provider": "PG&E",
 "phone": "800-743-5000",
 "website": "pge.com"
 },
 "internet": [
 "Xfinity",
 "AT&T",
 "Sonic",
 "Monkeybrains"
 ]
 },
 "dmv": {
 "name": "California DMV",
 "deadline": "10 days for vehicle, 10 days for license",
 "website": "dmv.ca.gov",
 "tip": "California has one of the shortest deadlines! Start immediately."
 },
 "transit": {
 "system": "SFMTA (Muni) + BART",
 "app": "MuniMobile",
 "pass": "Clipper Card",
 "tip": "Get a Clipper Card — works on Muni, BART, Caltrain, and ferries."
 },
 "localTips": [
 "️ 'The coldest winter I ever spent was a summer in San Francisco' — bring layers!",
 " Walk across the Golden Gate Bridge at least once. Start from the south side.",
 " Pier 39 sea lions are fun but explore Fisherman's Wharf beyond the tourist spots.",
 " The cable cars are iconic but slow. Use them as a scenic ride, not daily transit.",
 " Golden Gate Park is bigger than Central Park and has a free bison paddock!"
 ],
 "schools": {
 "district": "SFUSD",
 "website": "sfusd.edu",
 "enrollment": "Round 1 enrollment opens in November"
 },
 "dogParks": [
 "Fort Funston",
 "Crissy Field",
 "Dolores Park Dog Area",
 "McLaren Park"
 ]
 },
 "Chicago, IL": {
 "welcome": "Welcome to the Windy City! ️ Chicago offers world-class architecture, deep-dish pizza, and a vibrant lakefront lifestyle.",
 "utilities": {
 "electric": {
 "provider": "ComEd",
 "phone": "800-334-7661",
 "website": "comed.com"
 },
 "water": {
 "provider": "City of Chicago (usually included in rent)",
 "phone": "312-744-4426",
 "website": "chicago.gov/water"
 },
 "gas": {
 "provider": "Peoples Gas",
 "phone": "866-556-6001",
 "website": "peoplesgasdelivery.com"
 },
 "internet": [
 "Xfinity",
 "AT&T",
 "RCN",
 "Google Fiber (select areas)"
 ]
 },
 "dmv": {
 "name": "Illinois Secretary of State",
 "deadline": "90 days",
 "website": "ilsos.gov",
 "tip": "The downtown facility on Randolph is usually less crowded than suburban offices."
 },
 "transit": {
 "system": "CTA (L Train + Bus)",
 "app": "Ventra App",
 "pass": "Ventra Card",
 "tip": "Get a Ventra Card for the L train. The 7-day unlimited pass is great for your first week."
 },
 "localTips": [
 " It's deep-dish, not 'Chicago-style pizza.' Try Lou Malnati's or Pequod's.",
 "️ Chicago's lakefront beaches are stunning in summer. North Ave Beach is popular.",
 " The Art Institute is one of the best museums in the world. Thursday evenings are free for Illinois residents.",
 "️ Winter is serious. Get a proper parka, boots, and learn to layer.",
 " Blues and jazz are alive here. Check out Kingston Mines or Green Mill."
 ],
 "schools": {
 "district": "Chicago Public Schools",
 "website": "cps.edu",
 "enrollment": "GoCPS portal for enrollment applications"
 },
 "dogParks": [
 "Montrose Dog Beach",
 "Churchill Field Dog Park",
 "Grant Bark Park",
 "Wiggly Field"
 ]
 }
 },
 "agentResponses": {
 "greeting": "Hey there! I'm **SettleIn**, your relocation life-setup navigator. I'm here to make moving to a new city feel less overwhelming and more exciting.\n\nLet's get you settled into your new home! I'll create a personalized checklist just for you. First, let me ask a few quick questions about your move.",
 "phaseIntros": {
 "day1": " **Day 1 — The Essentials**\nThese are the things you need to handle right away so your new place is livable and safe. Let's tackle them one at a time.",
 "week1": " **Week 1 — Getting Established**\nNow that you have the basics, let's get the important admin done — IDs, banking, healthcare. One step at a time!",
 "month1": " **Month 1 — Building Your Foundation**\nYou're settling in nicely! This phase is about making your new city truly yours — community, routines, and those finishing touches.",
 "settled": " **You're Getting Settled!**\nTime for the fun part — exploring your city, meeting neighbors, and finding your new favorite spots. This is where your new city starts to feel like home."
 },
 "taskCompleted": [
 "Awesome, that's done! One step closer to feeling at home.",
 "Great job! You're making incredible progress!",
 "Check! You're really getting the hang of this new city life.",
 "Done and done! Look at you go — new city champion!",
 "Another one down! Your new life is really coming together.",
 "Nailed it! That's one less thing to worry about."
 ],
 "encouragement": [
 "Moving is a lot, but you're handling it like a pro. ",
 "Remember, you don't have to do everything at once. Take it one task at a time.",
 "Every task you complete is a step toward making this city your home. ",
 "You've got this! And I'm here whenever you need help. ",
 "It's completely normal to feel overwhelmed. You're doing amazing.",
 "Think of it this way — you're building an entirely new adventure! "
 ],
 "outOfScope": "I appreciate the question! I'm specifically designed to help with life-setup tasks after a move — things like utilities, government paperwork, finding services, and getting to know your city. For that particular topic, I'd recommend checking with a local expert or doing a quick search. Is there a setup task I can help you with? ",
 "cantDetermine": "That's a great question, but I want to make sure I give you accurate information. Since details can vary, I'd recommend checking directly with **{source}** for the most up-to-date info. Would you like me to help with another setup task in the meantime?",
 "utilities": {
 "intro": "Let's get your utilities set up! Here's what you'll typically need for your new home:",
 "steps": [
 "1. **Electricity** — Contact the provider to start service (have your address and move-in date ready)",
 "2. **Water** — Usually set up through the city or county",
 "3. **Gas** — If your home uses gas for heating/cooking",
 "4. **Internet** — Compare local providers for the best deal",
 "5. **Trash/Recycling** — Check if included in your rent or need separate setup"
 ]
 },
 "healthcare": {
 "intro": "Finding good healthcare in a new city is really important. Here's my recommended approach: ",
 "steps": [
 "1. **Check your insurance network** — Find which doctors and facilities accept your plan",
 "2. **Primary care doctor** — Look for one close to home with good reviews",
 "3. **Pharmacy** — Transfer prescriptions to a nearby pharmacy",
 "4. **Dentist** — Schedule a routine check-up within your first month",
 "5. **Urgent care** — Note the nearest urgent care and ER locations, just in case"
 ]
 },
 "schools": {
 "intro": "Enrolling kids in a new school is one of the most important tasks! Here's the general process:",
 "steps": [
 "1. **Research the school district** — Check ratings and options in your area",
 "2. **Contact the school** — Call or visit to learn about their enrollment process",
 "3. **Gather documents** — You'll typically need: proof of residency, birth certificate, immunization records, previous school records",
 "4. **Schedule a visit** — Let your kids see the school before their first day",
 "5. **Ask about activities** — Sports, clubs, and after-school programs help kids make friends faster"
 ]
 },
 "driversLicense": {
 "intro": "Transferring your driver's license is usually required within 30-90 days of moving. Here's the typical process: ",
 "steps": [
 "1. **Check the deadline** — Each state has different requirements",
 "2. **Gather documents** — Current license, proof of new address, Social Security card",
 "3. **Book an appointment** — Many DMVs require or recommend appointments",
 "4. **Pass any required tests** — Some states require a written or vision test",
 "5. **Update vehicle registration** — Don't forget your car needs new plates too!"
 ]
 }
 },
 "starterPrompts": [
 {
 "icon": "",
 "title": "Get started",
 "text": "I just moved to a new city. Help me get set up!"
 },
 {
 "icon": "",
 "title": "Set up utilities",
 "text": "I need to set up utilities at my new place — electricity, water, internet."
 },
 {
 "icon": "",
 "title": "Find healthcare",
 "text": "How do I find a good doctor and dentist in my new area?"
 },
 {
 "icon": "",
 "title": "Enroll kids",
 "text": "I need to enroll my kids in school. What's the process?"
 },
 {
 "icon": "",
 "title": "Transfer license",
 "text": "What do I need to do to transfer my driver's license?"
 },
 {
 "icon": "",
 "title": "Pet setup",
 "text": "I moved with pets. What registrations and services do I need?"
 },
 {
 "icon": "",
 "title": "Cost of living",
 "text": "What's the cost of living in my new city?"
 },
 {
 "icon": "",
 "title": "Documents needed",
 "text": "What documents do I need to collect for my move?"
 },
 {
 "icon": "",
 "title": "Emergency info",
 "text": "What are the emergency services and contacts in my area?"
 }
 ],
 "documents": [
 {
 "id": "doc1",
 "name": "Government-Issued Photo ID",
 "category": "identity",
 "description": "Driver's license, passport, or state ID",
 "critical": true
 },
 {
 "id": "doc2",
 "name": "Social Security Card",
 "category": "identity",
 "description": "Required for employment, banking, and DMV",
 "critical": true
 },
 {
 "id": "doc3",
 "name": "Birth Certificate(s)",
 "category": "identity",
 "description": "For school enrollment and ID applications",
 "critical": true
 },
 {
 "id": "doc4",
 "name": "Passport",
 "category": "identity",
 "description": "International ID and travel document",
 "critical": false
 },
 {
 "id": "doc5",
 "name": "Marriage Certificate",
 "category": "identity",
 "description": "If applicable — needed for some name/address changes",
 "critical": false
 },
 {
 "id": "doc6",
 "name": "Lease Agreement / Mortgage Docs",
 "category": "housing",
 "description": "Proof of new residency address",
 "critical": true
 },
 {
 "id": "doc7",
 "name": "Proof of Previous Address",
 "category": "housing",
 "description": "Utility bill or bank statement from old address",
 "critical": false
 },
 {
 "id": "doc8",
 "name": "Vehicle Title & Registration",
 "category": "vehicle",
 "description": "Current state registration and title document",
 "critical": true
 },
 {
 "id": "doc9",
 "name": "Auto Insurance Policy",
 "category": "vehicle",
 "description": "Current policy info for re-registration",
 "critical": true
 },
 {
 "id": "doc10",
 "name": "Vehicle Inspection Certificate",
 "category": "vehicle",
 "description": "Some states require a safety/emissions inspection",
 "critical": false
 },
 {
 "id": "doc11",
 "name": "Health Insurance Cards",
 "category": "medical",
 "description": "For all family members",
 "critical": true
 },
 {
 "id": "doc12",
 "name": "Medical Records",
 "category": "medical",
 "description": "Vaccination records, prescriptions, specialist notes",
 "critical": true
 },
 {
 "id": "doc13",
 "name": "Dental Records",
 "category": "medical",
 "description": "X-rays and treatment history from previous dentist",
 "critical": false
 },
 {
 "id": "doc14",
 "name": "Pet Vaccination Records",
 "category": "pets",
 "description": "Required for vet registration and pet licensing",
 "critical": true
 },
 {
 "id": "doc15",
 "name": "School Transcripts",
 "category": "education",
 "description": "Academic records for school enrollment transfer",
 "critical": true
 },
 {
 "id": "doc16",
 "name": "Immunization Records (Kids)",
 "category": "education",
 "description": "Required by all schools — check state-specific requirements",
 "critical": true
 },
 {
 "id": "doc17",
 "name": "IEP/504 Plan",
 "category": "education",
 "description": "Special education plans if applicable",
 "critical": false
 },
 {
 "id": "doc18",
 "name": "Employment Offer Letter",
 "category": "employment",
 "description": "Proof of employment in new city",
 "critical": false
 },
 {
 "id": "doc19",
 "name": "Previous Tax Returns",
 "category": "financial",
 "description": "Last 2-3 years for state tax filing",
 "critical": false
 },
 {
 "id": "doc20",
 "name": "Bank Statements",
 "category": "financial",
 "description": "Last 2-3 months for new account setup",
 "critical": false
 }
 ],
 "documentCategories": [
 {
 "id": "identity",
 "label": "Identity & Personal",
 "icon": "",
 "color": "#FF8C42"
 },
 {
 "id": "housing",
 "label": "Housing",
 "icon": "",
 "color": "#FFB347"
 },
 {
 "id": "vehicle",
 "label": "Vehicle",
 "icon": "",
 "color": "#7C6AEF"
 }
 ],
 "departments": [
 {
 "id": "all",
 "name": "All Departments",
 "icon": "️",
 "color": "#7C6AEF"
 },
 {
 "id": "gov",
 "name": "Government & Citizen Services",
 "icon": "️",
 "color": "#FF8C42",
 "description": "Address changes, ID cards, Aadhaar, Passport, Voter Registration"
 },
 {
 "id": "utilities",
 "name": "Utilities & Power Grid Board",
 "icon": "",
 "color": "#7C6AEF",
 "description": "Electricity meters, Water mains, Natural gas, High-speed fiber"
 },
 {
 "id": "healthcare",
 "name": "Healthcare & Medical Registry",
 "icon": "",
 "color": "#4ECDC4",
 "description": "Health insurance endorsement, primary doctor allocation, emergency records"
 },
 {
 "id": "banking",
 "name": "Banking & Financial Regulatory Board",
 "icon": "",
 "color": "#FFB347",
 "description": "PAN verification, local bank account setup, credit evaluation"
 },
 {
 "id": "education",
 "name": "Education & Schools Board",
 "icon": "",
 "color": "#FF6B9D",
 "description": "School admissions, transfer certificates, student IDs"
 },
 {
 "id": "aviation",
 "name": "Aviation & Logistics Division",
 "icon": "️",
 "color": "#C850C0",
 "description": "Bourntec GIS Flight Trajectory Clearance & Airport Node Access"
 }
 ],
 "initialDepartmentRequests": [],
 "costOfLiving": {
 "Bhubaneswar, India": {
 "rent1br": 14500,
 "rent2br": 24000,
 "groceries": 8500,
 "transport": 2500,
 "utilities": 3000,
 "internet": 1000,
 "dining": 5000,
 "overall": "Very Affordable",
 "index": 32,
 "currency": "INR (₹)",
 "currencySymbol": "₹",
 "currencyCode": "INR"
 },
 "Bengaluru, India": {
 "rent1br": 28000,
 "rent2br": 48000,
 "groceries": 12000,
 "transport": 4000,
 "utilities": 3600,
 "internet": 1200,
 "dining": 9500,
 "overall": "Moderate",
 "index": 42,
 "currency": "INR (₹)",
 "currencySymbol": "₹",
 "currencyCode": "INR"
 },
 "Mumbai, India": {
 "rent1br": 45000,
 "rent2br": 75000,
 "groceries": 15000,
 "transport": 3500,
 "utilities": 4000,
 "internet": 1200,
 "dining": 12500,
 "overall": "Medium-High",
 "index": 55,
 "currency": "INR (₹)",
 "currencySymbol": "₹",
 "currencyCode": "INR"
 },
 "Delhi NCR, India": {
 "rent1br": 32000,
 "rent2br": 55000,
 "groceries": 13500,
 "transport": 3800,
 "utilities": 4200,
 "internet": 1200,
 "dining": 10500,
 "overall": "Moderate",
 "index": 48,
 "currency": "INR (₹)",
 "currencySymbol": "₹",
 "currencyCode": "INR"
 },
 "Hyderabad, India": {
 "rent1br": 24000,
 "rent2br": 42000,
 "groceries": 11500,
 "transport": 3200,
 "utilities": 3400,
 "internet": 1000,
 "dining": 8500,
 "overall": "Affordable",
 "index": 38,
 "currency": "INR (₹)",
 "currencySymbol": "₹",
 "currencyCode": "INR"
 },
 "Pune, India": {
 "rent1br": 18000,
 "rent2br": 32000,
 "groceries": 10000,
 "transport": 2800,
 "utilities": 3000,
 "internet": 1000,
 "dining": 7500,
 "overall": "Affordable",
 "index": 36,
 "currency": "INR (₹)",
 "currencySymbol": "₹",
 "currencyCode": "INR"
 },
 "Chennai, India": {
 "rent1br": 19000,
 "rent2br": 34000,
 "groceries": 10500,
 "transport": 2900,
 "utilities": 3200,
 "internet": 1000,
 "dining": 7800,
 "overall": "Affordable",
 "index": 37,
 "currency": "INR (₹)",
 "currencySymbol": "₹",
 "currencyCode": "INR"
 },
 "Kolkata, India": {
 "rent1br": 14000,
 "rent2br": 24000,
 "groceries": 8500,
 "transport": 2200,
 "utilities": 2800,
 "internet": 900,
 "dining": 6000,
 "overall": "Very Affordable",
 "index": 30,
 "currency": "INR (₹)",
 "currencySymbol": "₹",
 "currencyCode": "INR"
 },
 "Singapore": {
 "rent1br": 2600,
 "rent2br": 4200,
 "groceries": 550,
 "transport": 150,
 "utilities": 190,
 "internet": 60,
 "dining": 420,
 "overall": "High",
 "index": 160,
 "currency": "SGD (S$)",
 "currencySymbol": "S$",
 "currencyCode": "SGD"
 },
 "Tokyo, Japan": {
 "rent1br": 135000,
 "rent2br": 240000,
 "groceries": 48000,
 "transport": 15000,
 "utilities": 18000,
 "internet": 5500,
 "dining": 35000,
 "overall": "Medium-High",
 "index": 110,
 "currency": "JPY (¥)",
 "currencySymbol": "¥",
 "currencyCode": "JPY"
 },
 "Dubai, UAE": {
 "rent1br": 6500,
 "rent2br": 11000,
 "groceries": 1400,
 "transport": 500,
 "utilities": 750,
 "internet": 320,
 "dining": 1200,
 "overall": "High",
 "index": 138,
 "currency": "AED (AED)",
 "currencySymbol": "AED ",
 "currencyCode": "AED"
 },
 "Austin, TX": {
 "rent1br": 1450,
 "rent2br": 1850,
 "groceries": 380,
 "transport": 95,
 "utilities": 165,
 "internet": 65,
 "dining": 250,
 "overall": "Medium-High",
 "index": 104,
 "noIncomeTax": true,
 "currency": "USD ($)",
 "currencySymbol": "$",
 "currencyCode": "USD"
 },
 "Seattle, WA": {
 "rent1br": 2100,
 "rent2br": 2800,
 "groceries": 420,
 "transport": 100,
 "utilities": 145,
 "internet": 70,
 "dining": 300,
 "overall": "High",
 "index": 152,
 "noIncomeTax": true,
 "currency": "USD ($)",
 "currencySymbol": "$",
 "currencyCode": "USD"
 },
 "Denver, CO": {
 "rent1br": 1600,
 "rent2br": 2100,
 "groceries": 370,
 "transport": 90,
 "utilities": 130,
 "internet": 60,
 "dining": 230,
 "overall": "Medium-High",
 "index": 112,
 "noIncomeTax": false,
 "currency": "USD ($)",
 "currencySymbol": "$",
 "currencyCode": "USD"
 },
 "New York, NY": {
 "rent1br": 3200,
 "rent2br": 4500,
 "groceries": 480,
 "transport": 127,
 "utilities": 170,
 "internet": 65,
 "dining": 400,
 "overall": "Very High",
 "index": 187,
 "noIncomeTax": false,
 "currency": "USD ($)",
 "currencySymbol": "$",
 "currencyCode": "USD"
 }
 },
 "emergencyContacts": {
 "Bhubaneswar, India": {
 "police": {
 "name": "Odisha Police / Commissionerate",
 "emergency": "112 / 100",
 "nonEmergency": "0674-2530100",
 "website": "commissioneratepolice.nic.in"
 },
 "fire": {
 "name": "Odisha Fire Services",
 "emergency": "101",
 "nonEmergency": "0674-2531033"
 },
 "hospital": {
 "name": "AIIMS Bhubaneswar",
 "phone": "0674-2476789",
 "address": "Sijua, Patrapada"
 },
 "poison": {
 "name": "National Poison Information",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "NHAI Highway Helpline",
 "phone": "1033"
 },
 "animalControl": {
 "name": "Bhubaneswar Municipal Corp",
 "phone": "0674-2431253",
 "address": "Kalpana Square"
 }
 },
 "Bengaluru, India": {
 "police": {
 "name": "Bengaluru City Police",
 "emergency": "112",
 "nonEmergency": "080-22942222",
 "website": "ksp.gov.in"
 },
 "fire": {
 "name": "Karnataka Fire Services",
 "emergency": "101",
 "nonEmergency": "080-22971500"
 },
 "hospital": {
 "name": "Manipal Hospital HAL Road",
 "phone": "080-25024444",
 "address": "98 HAL Airport Rd"
 },
 "poison": {
 "name": "State Poison Helpline",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "Karnataka Traffic Police",
 "phone": "1033"
 },
 "animalControl": {
 "name": "BBMP Animal Husbandry",
 "phone": "080-22221188",
 "address": "Hudson Circle"
 }
 },
 "Mumbai, India": {
 "police": {
 "name": "Mumbai Police Department",
 "emergency": "100 / 112",
 "nonEmergency": "022-22620111",
 "website": "mumbaipolice.gov.in"
 },
 "fire": {
 "name": "Mumbai Fire Brigade",
 "emergency": "101",
 "nonEmergency": "022-23076111"
 },
 "hospital": {
 "name": "Lilavati Hospital Bandra",
 "phone": "022-26751000",
 "address": "A-791 Bandra Reclamation"
 },
 "poison": {
 "name": "National Poison Center",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "Mumbai Traffic Control",
 "phone": "022-24937747"
 },
 "animalControl": {
 "name": "BMC Animal Control",
 "phone": "1916",
 "address": "Mahalaxmi"
 }
 },
 "Singapore": {
 "police": {
 "name": "Singapore Police Force",
 "emergency": "999",
 "nonEmergency": "1800 255 0000",
 "website": "police.gov.sg"
 },
 "fire": {
 "name": "SDF Civil Defence",
 "emergency": "995",
 "nonEmergency": "1800 286 5555"
 },
 "hospital": {
 "name": "Singapore General Hospital",
 "phone": "+65 6222 3322",
 "address": "Outram Road"
 },
 "poison": {
 "name": "Drug & Poison Info Centre",
 "phone": "+65 6423 9119"
 },
 "roadside": {
 "name": "EMAS Expressway Helpline",
 "phone": "1800 225 5582"
 },
 "animalControl": {
 "name": "NParks AVS",
 "phone": "1800 476 1600"
 }
 },
 "Tokyo, Japan": {
 "police": {
 "name": "Metropolitan Police Department",
 "emergency": "110",
 "nonEmergency": "#9110"
 },
 "fire": {
 "name": "Tokyo Fire Department",
 "emergency": "119",
 "nonEmergency": "03-3212-2119"
 },
 "hospital": {
 "name": "St. Luke's International Hospital",
 "phone": "+81 3-3541-5151",
 "address": "Akashi-cho, Chuo-ku"
 },
 "poison": {
 "name": "Japan Poison Information",
 "phone": "029-852-9999"
 },
 "roadside": {
 "name": "JAF Roadside Assistance",
 "phone": "0570-00-8139"
 },
 "animalControl": {
 "name": "Tokyo Animal Welfare Center",
 "phone": "03-3302-3507"
 }
 },
 "Dubai, UAE": {
 "police": {
 "name": "Dubai Police",
 "emergency": "999",
 "nonEmergency": "901"
 },
 "fire": {
 "name": "Dubai Civil Defence",
 "emergency": "997",
 "nonEmergency": "800 997"
 },
 "hospital": {
 "name": "Rashid Hospital",
 "phone": "+971 4 219 2000",
 "address": "Oud Metha Road"
 },
 "poison": {
 "name": "Dubai Health Authority",
 "phone": "800 342"
 },
 "roadside": {
 "name": "RTA Roadside Control",
 "phone": "800 9090"
 },
 "animalControl": {
 "name": "Dubai Municipality Veterinary",
 "phone": "800 900"
 }
 },
 "Delhi NCR, India": {
 "police": {
 "name": "Delhi Police Control (Police HQ)",
 "emergency": "112",
 "nonEmergency": "011-23490010",
 "website": "delhipolice.gov.in"
 },
 "fire": {
 "name": "Delhi Fire Service",
 "emergency": "101",
 "nonEmergency": "011-23412222"
 },
 "hospital": {
 "name": "AIIMS New Delhi (Ansari Nagar)",
 "phone": "011-26588500",
 "address": "Sri Aurobindo Marg, Ansari Nagar"
 },
 "poison": {
 "name": "AIIMS National Poison Centre",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "Delhi Traffic Helpline",
 "phone": "1095"
 },
 "animalControl": {
 "name": "MCD Veterinary Services",
 "phone": "155304",
 "address": "Civic Centre, Minto Road"
 }
 },
 "Hyderabad, India": {
 "police": {
 "name": "Hyderabad City Police",
 "emergency": "112",
 "nonEmergency": "040-27852435",
 "website": "hyderabadpolice.gov.in"
 },
 "fire": {
 "name": "Telangana State Disaster & Fire",
 "emergency": "101",
 "nonEmergency": "040-23442944"
 },
 "hospital": {
 "name": "Apollo Hospitals Jubilee Hills",
 "phone": "040-23607777",
 "address": "Road No 72, Film Nagar"
 },
 "poison": {
 "name": "National Poison Center",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "Hyderabad Traffic Police Control",
 "phone": "040-27852482"
 },
 "animalControl": {
 "name": "GHMC Veterinary Wing",
 "phone": "040-21111111",
 "address": "Tank Bund Rd"
 }
 },
 "Pune, India": {
 "police": {
 "name": "Pune City Police",
 "emergency": "112",
 "nonEmergency": "020-26122880",
 "website": "punepolice.gov.in"
 },
 "fire": {
 "name": "Pune Municipal Fire Brigade",
 "emergency": "101",
 "nonEmergency": "020-26451707"
 },
 "hospital": {
 "name": "Ruby Hall Clinic Pune",
 "phone": "020-66455100",
 "address": "40 Sassoon Road"
 },
 "poison": {
 "name": "Poison Control India",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "Pune Traffic Control Helpline",
 "phone": "020-26208225"
 },
 "animalControl": {
 "name": "PMC Veterinary Department",
 "phone": "1800-1030-222",
 "address": "Shivajinagar"
 }
 },
 "Chennai, India": {
 "police": {
 "name": "Greater Chennai Police",
 "emergency": "112",
 "nonEmergency": "044-23452359",
 "website": "chennaipolice.gov.in"
 },
 "fire": {
 "name": "Tamil Nadu Fire & Rescue",
 "emergency": "101",
 "nonEmergency": "044-28554309"
 },
 "hospital": {
 "name": "Apollo Hospital Greams Road",
 "phone": "044-28290200",
 "address": "21 Greams Lane, Thousand Lights"
 },
 "poison": {
 "name": "State Poison Helpline",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "Chennai Traffic Control",
 "phone": "103"
 },
 "animalControl": {
 "name": "Blue Cross of India / GCC",
 "phone": "044-22354959",
 "address": "Guindy"
 }
 },
 "Kolkata, India": {
 "police": {
 "name": "Kolkata Police (Lalbazar)",
 "emergency": "112",
 "nonEmergency": "033-22143024"
 },
 "fire": {
 "name": "West Bengal Fire & Emergency",
 "emergency": "101",
 "nonEmergency": "033-22521165"
 },
 "hospital": {
 "name": "SSKM Hospital / Apollo Kolkata",
 "phone": "033-22231589",
 "address": "Canal Circular Rd"
 },
 "poison": {
 "name": "National Poison Center",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "Kolkata Traffic Helpline",
 "phone": "1073"
 },
 "animalControl": {
 "name": "KMC Animal Control",
 "phone": "033-22861000"
 }
 },
 "Ahmedabad, India": {
 "police": {
 "name": "Ahmedabad City Police",
 "emergency": "112",
 "nonEmergency": "079-25630100"
 },
 "fire": {
 "name": "Ahmedabad Fire & Emergency",
 "emergency": "101",
 "nonEmergency": "079-22148465"
 },
 "hospital": {
 "name": "Civil Hospital Ahmedabad",
 "phone": "079-22683721",
 "address": "Asarwa"
 },
 "poison": {
 "name": "National Poison Helpline",
 "phone": "1800-116-117"
 },
 "roadside": {
 "name": "Traffic Control Ahmedabad",
 "phone": "1095"
 },
 "animalControl": {
 "name": "AMC Cattle Nuisance Control",
 "phone": "079-25391811"
 }
 },
 "Seattle, WA": {
 "police": {
 "name": "Seattle Police Department",
 "emergency": "911",
 "nonEmergency": "206-625-5011"
 },
 "fire": {
 "name": "Seattle Fire Department",
 "emergency": "911",
 "nonEmergency": "206-386-1400"
 },
 "hospital": {
 "name": "Harborview Medical Center",
 "phone": "206-744-3000",
 "address": "325 9th Ave"
 },
 "poison": {
 "name": "Washington Poison Center",
 "phone": "1-800-222-1222"
 },
 "roadside": {
 "name": "WSDOT Highway Advisory",
 "phone": "511"
 },
 "animalControl": {
 "name": "Seattle Animal Shelter",
 "phone": "206-386-7387",
 "address": "2061 15th Ave W"
 }
 },
 "New York, NY": {
 "police": {
 "name": "NYPD Police Department",
 "emergency": "911",
 "nonEmergency": "311"
 },
 "fire": {
 "name": "FDNY Fire Department",
 "emergency": "911",
 "nonEmergency": "718-999-2000"
 },
 "hospital": {
 "name": "NewYork-Presbyterian Hospital",
 "phone": "212-746-5454",
 "address": "525 E 68th St"
 },
 "poison": {
 "name": "NYC Poison Control Center",
 "phone": "1-800-222-1222"
 },
 "roadside": {
 "name": "NY State Thruway Authority",
 "phone": "511"
 },
 "animalControl": {
 "name": "Animal Care Centers of NYC",
 "phone": "212-788-4000"
 }
 }
 },
 "budgetCategories": [
 {
 "id": "cat-packing",
 "icon": "",
 "label": "Packing & Carton Supplies",
 "items": [
 "Corrugated moving boxes (small, medium, heavy-duty wardrobe boxes)",
 "Eco-friendly bubble wrap, packing paper, and protective foam corners",
 "Reinforced adhesive carton tape & dispenser guns",
 "Permanent markers, color-coded room labels & QR stickers",
 "Mattress vacuum preservation bags & stretch wrap film"
 ]
 },
 {
 "id": "cat-movers",
 "icon": "",
 "label": "Professional Movers & Logistics Transport",
 "items": [
 "Door-to-door interstate relocation truck hire & fuel surcharge",
 "Professional packing crew & loading/unloading labor",
 "Transit marine/all-risk insurance coverage (1.2% - 3% valuation)",
 "Elevator booking / long-carry stairway surcharges",
 "Temporary secure warehouse storage during transit delay"
 ]
 },
 {
 "id": "cat-tenancy",
 "icon": "",
 "label": "Housing, Deposit & Tenancy Legal Setup",
 "items": [
 "Refundable security deposit (usually 1–2 months rent escrow)",
 "First month advance rent consideration",
 "Tenancy agreement stamp duty, notary & state registration fee",
 "Society move-in non-refundable shifting fee (RWA / HOA)",
 "Police tenant verification application & biometric fee"
 ]
 },
 {
 "id": "cat-utilities",
 "icon": "",
 "label": "Utilities, Power Grid & Internet Activation",
 "items": [
 "Smart electricity meter transfer / 3-phase security deposit",
 "Municipal water connection & meter transfer charge",
 "Piped natural gas (PNG) / LPG cylinder security deposit",
 "High-speed optical fiber broadband installation & router fee",
 "Water purifier (RO) installation / filter replacement"
 ]
 },
 {
 "id": "cat-furnishing",
 "icon": "️",
 "label": "Home Furnishing & Appliance Setup",
 "items": [
 "Rental appliance subscription (Refrig, Washer, Microwave)",
 "Window curtains, blackout drapes & tension rods",
 "Bedding, linens, pillows & mattress protectors",
 "Kitchen cookware essentials, dining set & spice jars",
 "Home workspace ergonomic chair & desk setup"
 ]
 },
 {
 "id": "cat-pets",
 "icon": "",
 "label": "Pet & Personal Vehicle Relocation",
 "items": [
 "Veterinary health certificate & rabies vaccination boost",
 "IATA-approved pet airline crate / pet-friendly taxi transit",
 "Vehicle carrier transport (Car / Two-wheeler train parcel)",
 "State RTO vehicle NOC (No Objection Certificate) & road tax transfer",
 "New local municipal pet registration license"
 ]
 },
 {
 "id": "cat-family",
 "icon": "",
 "label": "Family & School Registration Setup",
 "items": [
 "School admission processing, prospectus & registration fees",
 "School uniforms, stationery kits & curriculum books",
 "School bus / private van transportation fee (quarterly advance)",
 "Neighborhood sports academy / swimming club membership",
 "Local pediatrician / family physician initial consultation"
 ]
 },
 {
 "id": "cat-contingency",
 "icon": "️",
 "label": "Emergency Relocation Contingency Buffer",
 "items": [
 "10%–15% contingency cash reserve for unexpected delays",
 "Hotel / Airbnb stay buffer in case handover is delayed 24-48 hours",
 "Immediate locksmith lock re-keying & extra duplicate keys",
 "Pest control treatment & deep chemical sanitization prior to move-in",
 "Local emergency medical kit & household repair tools"
 ]
 }
 ],
 "workExperience": [
 {
 "role": "Data Analyst Intern",
 "company": "Bourntec Solutions Inc.",
 "location": "Bhubaneswar, India",
 "duration": "May 2025 – Jun 2025",
 "icon": "️",
 "color": "#FF8C42",
 "bullets": [
 "Engineered real-time aviation analytics dashboards in Power BI, unifying REST API, Excel, and Geographic Information System (GIS).",
 "Developed automated REST API ingest pipelines integrating tabular Excel datasets and live GIS spatial vector boundaries.",
 "Implemented DAX calculations for flight fuel efficiency, altitude dynamics, and airport node congestion metrics."
 ],
 "skillsUsed": [
 "Power BI",
 "REST API",
 "Excel",
 "GIS",
 "SQL",
 "Python",
 "DAX"
 ]
 }
 ],
 "weather": {
 "Bhubaneswar, India": {
 "summer": "38°C / 100°F",
 "winter": "16°C / 60°F",
 "rainy": "Jul-Sep",
 "note": "️ Warm tropical climate. Monsoons from July to September."
 },
 "Bengaluru, India": {
 "summer": "33°C / 91°F",
 "winter": "17°C / 62°F",
 "rainy": "Jun-Oct",
 "note": " Silicon Valley of India! Pleasant year-round climate."
 },
 "Mumbai, India": {
 "summer": "34°C / 93°F",
 "winter": "20°C / 68°F",
 "rainy": "Jun-Sep",
 "note": " Coastal climate with heavy monsoon showers."
 },
 "Delhi NCR, India": {
 "summer": "42°C / 107°F",
 "winter": "7°C / 45°F",
 "rainy": "Jul-Aug",
 "note": "️ Distinct seasons. Hot summers and cool winter breezes."
 },
 "Singapore": {
 "summer": "31°C / 88°F",
 "winter": "26°C / 79°F",
 "rainy": "Nov-Jan",
 "note": " Tropical rainforest climate. Warm and humid year-round."
 },
 "Tokyo, Japan": {
 "summer": "30°C / 86°F",
 "winter": "5°C / 41°F",
 "rainy": "Jun-Jul",
 "note": " Beautiful cherry blossom spring and snowy winters."
 },
 "Dubai, UAE": {
 "summer": "42°C / 108°F",
 "winter": "24°C / 75°F",
 "rainy": "Jan-Feb",
 "note": "️ Sunny desert weather. Pleasant outdoor winters."
 },
 "Austin, TX": {
 "summer": "95°F / 35°C",
 "winter": "50°F / 10°C",
 "rainy": "May-Jun",
 "note": "️ Hot summers, mild winters. 228 sunny days/year."
 },
 "Denver, CO": {
 "summer": "88°F / 31°C",
 "winter": "34°F / 1°C",
 "rainy": "Apr-May",
 "note": " 300 days of sunshine! Dry climate, drink water."
 },
 "New York, NY": {
 "summer": "84°F / 29°C",
 "winter": "33°F / 1°C",
 "rainy": "Apr-Jun",
 "note": " Four distinct seasons. Hot summers, cold winters."
 },
 "San Francisco, CA": {
 "summer": "68°F / 20°C",
 "winter": "52°F / 11°C",
 "rainy": "Nov-Mar",
 "note": "️ Famously cool summers. Microclimates everywhere."
 },
 "Chicago, IL": {
 "summer": "83°F / 28°C",
 "winter": "26°F / -3°C",
 "rainy": "May-Jun",
 "note": "️ Cold winters, beautiful summers by the lake."
 }
 },
 "neighborhoods": [
 {
 "id": "n1",
 "name": "Patia & KIIT Road",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156511533697-d1f63c?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n2",
 "name": "Saheed Nagar",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153921643869-98169b?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n3",
 "name": "Jaydev Vihar",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151932629027-c81952?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n4",
 "name": "Chandrasekharpur",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158529767638-29e566?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n5",
 "name": "Nayapalli",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156127373914-0b0f61?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n6",
 "name": "Khandagiri",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156947009174-7a3a7c?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n7",
 "name": "VSS Nagar",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154271841895-fb3435?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n8",
 "name": "Mancheswar",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "800m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156639369108-884bee?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n9",
 "name": "Rasulgarh",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "900m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155125693796-a76ef1?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n10",
 "name": "Damana",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "1000m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155067878949-d41c38?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n11",
 "name": "Indiranagar",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154545171733-9a473e?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n12",
 "name": "Koramangala",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154169002339-e97db0?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n13",
 "name": "HSR Layout",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159307689623-79d364?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n14",
 "name": "Whitefield",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153912745520-3b5217?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n15",
 "name": "JP Nagar",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159682274091-888548?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n16",
 "name": "Jayanagar",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155524209983-63fcf2?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n17",
 "name": "BTM Layout",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158938679310-165786?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n18",
 "name": "Marathahalli",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "800m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154981649819-504201?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n19",
 "name": "Electronic City",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "900m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151098866389-15cfc5?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n20",
 "name": "Hebbal",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "1000m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154587159019-ef17aa?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n21",
 "name": "Yelahanka",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "1100m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157683911302-b7405f?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n22",
 "name": "Bannerghatta Road",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "1200m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157427957564-70374c?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n23",
 "name": "Bandra West",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 65000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157462453391-67919a?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n24",
 "name": "Andheri West",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 65000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152922222356-3dd193?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n25",
 "name": "Powai",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 65000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155711392036-6b7578?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n26",
 "name": "Juhu",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 65000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156171576384-977760?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n27",
 "name": "Lower Parel",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 65000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158826202996-f0bbe4?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n28",
 "name": "Worli",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 65000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151918844305-898983?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n29",
 "name": "Goregaon",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 65000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154540724105-6aa2e5?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n30",
 "name": "Malad",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 65000,
 "metroDist": "800m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152036952678-be2788?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n31",
 "name": "Thane",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 65000,
 "metroDist": "900m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155563228602-8c66bb?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n32",
 "name": "Navi Mumbai",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 65000,
 "metroDist": "1000m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155642031928-b82ee9?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n33",
 "name": "Dadar",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 65000,
 "metroDist": "1100m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15958313481-475313?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n34",
 "name": "DLF Cyber City Gurgaon",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158925647763-32ab95?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n35",
 "name": "Dwarka",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159325545347-b117d2?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n36",
 "name": "Noida Sector 62",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157798161499-601050?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n37",
 "name": "Greater Noida",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15326068580-ab7041?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n38",
 "name": "Vasant Kunj",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152268151771-75ebe5?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n39",
 "name": "Saket",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154267745131-792bda?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n40",
 "name": "Lajpat Nagar",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159200006858-861646?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n41",
 "name": "Hauz Khas",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "800m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154043696808-7b2d65?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n42",
 "name": "Rajouri Garden",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "900m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153178161630-3ed34e?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n43",
 "name": "Rohini",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "1000m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155204786667-ea891d?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n44",
 "name": "HITEC City",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158046725631-104060?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n45",
 "name": "Gachibowli",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15236999538-e9af08?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n46",
 "name": "Banjara Hills",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152815618602-7dc684?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n47",
 "name": "Jubilee Hills",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153963810640-360fab?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n48",
 "name": "Madhapur",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158247021344-2b8a49?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n49",
 "name": "Kondapur",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157580229619-a89f65?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n50",
 "name": "Kukatpally",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157967429330-8d0704?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n51",
 "name": "Miyapur",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "800m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157718532870-30d503?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n52",
 "name": "Begumpet",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "900m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154649451033-427169?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n53",
 "name": "Secunderabad",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "1000m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151151774640-e24920?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n54",
 "name": "Koregaon Park",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151509382337-b8c284?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n55",
 "name": "Viman Nagar",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15308026244-b58773?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n56",
 "name": "Hinjewadi",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154752707737-c3dad8?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n57",
 "name": "Baner",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154314303737-3a3966?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n58",
 "name": "Kharadi",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157224162618-a2e922?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n59",
 "name": "Aundh",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156210865907-fee35f?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n60",
 "name": "Wakad",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159669972916-9f1b9f?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n61",
 "name": "Hadapsar",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "800m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152425505944-2ac01f?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n62",
 "name": "T. Nagar",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156426126644-24619a?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n63",
 "name": "Adyar",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15990932452-2338fe?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n64",
 "name": "Anna Nagar",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153564030836-773ade?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n65",
 "name": "OMR Sholinganallur",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156436996112-3171e8?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n66",
 "name": "Velachery",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158452505625-9768bb?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n67",
 "name": "Porur",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151742294525-904f90?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n68",
 "name": "Nungambakkam",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158326916376-d62cd1?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n69",
 "name": "Mylapore",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "800m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151125641518-bd2943?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n70",
 "name": "Orchard",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 3500,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151970690927-a4d00f?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n71",
 "name": "Marina Bay",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 3500,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159879569000-07b342?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n72",
 "name": "Holland Village",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 3500,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156721886120-4f0498?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n73",
 "name": "Bukit Timah",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 3500,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158127374544-a18203?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n74",
 "name": "Tanjong Pagar",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 3500,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151669682730-415ad5?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n75",
 "name": "Tiong Bahru",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 3500,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154638387119-4311eb?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n76",
 "name": "Novena",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 3500,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153108151210-3dcacc?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n77",
 "name": "Clementi",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 3500,
 "metroDist": "800m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151799044510-b50db5?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n78",
 "name": "Downtown Dubai",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 8000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154844884124-1a10e2?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n79",
 "name": "Dubai Marina",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 8000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154766554315-7c182e?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n80",
 "name": "JBR",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 8000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15113127739-4e0ffa?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n81",
 "name": "Business Bay",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 8000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158983836057-f12cea?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n82",
 "name": "JLT",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 8000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154643063318-57dfcc?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n83",
 "name": "Al Barsha",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 8000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153364197074-b715a7?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n84",
 "name": "Palm Jumeirah",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 8000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159076569449-4b6b13?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n85",
 "name": "Downtown Austin",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157755817487-1fba7c?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n86",
 "name": "East Austin",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 2200,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153187977252-35256b?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n87",
 "name": "South Lamar",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152228213457-ae50f4?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n88",
 "name": "Mueller",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 2200,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152433327991-f5cb2b?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n89",
 "name": "Domain",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154551374891-3290cc?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n90",
 "name": "Zilker",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 2200,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156544804498-353c21?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n91",
 "name": "Hyde Park",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155975686364-ecabe8?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n92",
 "name": "Shibuya",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 150000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15761536103-bb20d8?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n93",
 "name": "Shinjuku",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 150000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157200241188-755750?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n94",
 "name": "Roppongi",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 150000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158015246134-cbd8cd?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n95",
 "name": "Minato",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 150000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159161925375-f15fa5?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n96",
 "name": "Setagaya",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 150000,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157645158404-6d2263?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n97",
 "name": "Meguro",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 150000,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154523072070-767fba?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n98",
 "name": "Nakano",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 150000,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156511265773-59b9d2?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n99",
 "name": "Capitol Hill",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156196501409-d95fd3?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n100",
 "name": "Ballard",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 2200,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154467237806-cf3f0f?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n101",
 "name": "Fremont",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156582583470-df85db?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n102",
 "name": "Queen Anne",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 2200,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159342713828-86668c?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n103",
 "name": "South Lake Union",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "500m from Station",
 "vibe": "Student & Academic",
 "vibeBadge": " Student",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157005580684-c54c85?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n104",
 "name": "Wallingford",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 2200,
 "metroDist": "600m from Station",
 "vibe": "Peaceful & Green",
 "vibeBadge": " Peaceful",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156380147949-0c0920?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "n105",
 "name": "Beacon Hill",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "700m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15996601455-2a425a?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx106",
 "name": "Khandagiri Square",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-159459700428-e2715c?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx107",
 "name": "Old Town",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156259851222-1cde42?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx108",
 "name": "Unit 9",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157621393256-d022b8?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx109",
 "name": "Unit 1",
 "city": "Bhubaneswar, India",
 "description": "A wonderful neighborhood in Bhubaneswar, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "400m from Station",
 "vibe": "Premium & Executive",
 "vibeBadge": " Premium",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154105402334-af164b?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx110",
 "name": "Frazer Town",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151459431645-f76446?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx111",
 "name": "Malleshwaram",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154408965969-000fa7?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx112",
 "name": "Basavanagudi",
 "city": "Bengaluru, India",
 "description": "A wonderful neighborhood in Bengaluru, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155225221864-ea7193?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx113",
 "name": "Chembur",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 65000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-158029989566-7186d2?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx114",
 "name": "Borivali",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 65000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156685974634-457203?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx115",
 "name": "Kandivali",
 "city": "Mumbai, India",
 "description": "A wonderful neighborhood in Mumbai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 65000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157001908772-f1b579?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx116",
 "name": "Connaught Place",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151396355505-0f713b?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx117",
 "name": "South Extension",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154386155695-099c4b?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx118",
 "name": "Karol Bagh",
 "city": "Delhi NCR, India",
 "description": "A wonderful neighborhood in Delhi NCR, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154487896422-370dcb?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx119",
 "name": "Ameerpet",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153609471552-6ae413?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx120",
 "name": "Somajiguda",
 "city": "Hyderabad, India",
 "description": "A wonderful neighborhood in Hyderabad, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151652861434-c7d898?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx121",
 "name": "Shivajinagar",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157186623261-a29500?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx122",
 "name": "Kothrud",
 "city": "Pune, India",
 "description": "A wonderful neighborhood in Pune, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155444839960-7c8c6a?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx123",
 "name": "Guindy",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 25000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152262861438-f854ca?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx124",
 "name": "Alwarpet",
 "city": "Chennai, India",
 "description": "A wonderful neighborhood in Chennai, India offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 25000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152855409677-30529f?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx125",
 "name": "Changi",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 3500,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151816935366-8b3020?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx126",
 "name": "Jurong East",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 3500,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153393727744-94ff8d?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx127",
 "name": "Woodlands",
 "city": "Singapore",
 "description": "A wonderful neighborhood in Singapore offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 3500,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153317856156-5f08b9?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx128",
 "name": "Deira",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 8000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156359967077-c95a2b?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx129",
 "name": "Bur Dubai",
 "city": "Dubai, UAE",
 "description": "A wonderful neighborhood in Dubai, UAE offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 8000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-154834787967-c04f23?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx130",
 "name": "North Loop",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-15734094145-8c2cc4?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx131",
 "name": "Allandale",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 2200,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152669973414-066c84?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx132",
 "name": "Brentwood",
 "city": "Austin, TX",
 "description": "A wonderful neighborhood in Austin, TX offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-153606088455-22b0d2?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx133",
 "name": "Asakusa",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 150000,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-157667753464-01d40b?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx134",
 "name": "Akihabara",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 150000,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152920549546-0013d8?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx135",
 "name": "Ueno",
 "city": "Tokyo, Japan",
 "description": "A wonderful neighborhood in Tokyo, Japan offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 150000,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-151531703885-9216dd?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx136",
 "name": "Green Lake",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "100m from Station",
 "vibe": "Tech & Corporate",
 "vibeBadge": " Tech",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-152181181426-b1a6ca?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx137",
 "name": "Pioneer Square",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 9,
 "schoolsScore": 9,
 "greeneryScore": 8,
 "avgRent": 2200,
 "metroDist": "200m from Station",
 "vibe": "Family & Residential",
 "vibeBadge": "‍‍‍ Family",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-155652064874-be27ff?auto=format&fit=crop&w=800&q=80"
 },
 {
 "id": "nx138",
 "name": "Belltown",
 "city": "Seattle, WA",
 "description": "A wonderful neighborhood in Seattle, WA offering a perfect mix of amenities.",
 "safetyScore": 8,
 "schoolsScore": 8,
 "greeneryScore": 7,
 "avgRent": 2200,
 "metroDist": "300m from Station",
 "vibe": "Trendy & Cultural",
 "vibeBadge": " Cultural",
 "highlights": [
 "Great cafes",
 "Parks nearby",
 "Good schools",
 "Transit access"
 ],
 "schools": "Local Public School, International Academy",
 "image": "https://images.unsplash.com/photo-156879006482-7770f8?auto=format&fit=crop&w=800&q=80"
 }
 ],
 "rentalProperties": [
 {
 "id": "p1",
 "title": "1 BHK / Studio in Patia & KIIT Road",
 "city": "Bhubaneswar, India",
 "neighborhood": "Patia & KIIT Road",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 25000,
 "deposit": 75000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169130791265-0e4b13?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p2",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 25100,
 "deposit": 75300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167342898140-a96011?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p3",
 "title": "3 BHK in Powai",
 "city": "Mumbai, India",
 "neighborhood": "Powai",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 25200,
 "deposit": 75600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162377608183-52b21f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p4",
 "title": "4 BHK+ / Villa in Greater Noida",
 "city": "Delhi NCR, India",
 "neighborhood": "Greater Noida",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 25300,
 "deposit": 75900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163685803681-ca4385?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p5",
 "title": "1 BHK / Studio in Madhapur",
 "city": "Hyderabad, India",
 "neighborhood": "Madhapur",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 25400,
 "deposit": 76200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16931384432-174dad?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p6",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 25500,
 "deposit": 76500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169118801234-41610f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p7",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 25600,
 "deposit": 76800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161582635877-379928?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p8",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 3070,
 "deposit": 9210,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165134592626-7e9a89?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p9",
 "title": "1 BHK / Studio in Dubai Marina",
 "city": "Dubai, UAE",
 "neighborhood": "Dubai Marina",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 6400,
 "deposit": 19200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166802599797-4b3578?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p10",
 "title": "2 BHK in South Lamar",
 "city": "Austin, TX",
 "neighborhood": "South Lamar",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 1890,
 "deposit": 5670,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165821359045-5e9a60?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p11",
 "title": "3 BHK in Minato",
 "city": "Tokyo, Japan",
 "neighborhood": "Minato",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 130000,
 "deposit": 390000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168514762747-ef0b05?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p12",
 "title": "4 BHK+ / Villa in South Lake Union",
 "city": "Seattle, WA",
 "neighborhood": "South Lake Union",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 1910,
 "deposit": 5730,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163812191288-2af6a5?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p13",
 "title": "1 BHK / Studio in Jaydev Vihar",
 "city": "Bhubaneswar, India",
 "neighborhood": "Jaydev Vihar",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 26200,
 "deposit": 78600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165085041697-b0763d?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p14",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 26300,
 "deposit": 78900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165292817692-cfc51b?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p15",
 "title": "3 BHK in Juhu",
 "city": "Mumbai, India",
 "neighborhood": "Juhu",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 26400,
 "deposit": 79200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165432623907-0023f7?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p16",
 "title": "4 BHK+ / Villa in Saket",
 "city": "Delhi NCR, India",
 "neighborhood": "Saket",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 26500,
 "deposit": 79500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169346757557-c7072c?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p17",
 "title": "1 BHK / Studio in Kukatpally",
 "city": "Hyderabad, India",
 "neighborhood": "Kukatpally",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 26600,
 "deposit": 79800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166324502013-dfd8ca?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p18",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 26700,
 "deposit": 80100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166095805029-5f07cc?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p19",
 "title": "3 BHK in Anna Nagar",
 "city": "Chennai, India",
 "neighborhood": "Anna Nagar",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 26800,
 "deposit": 80400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16798788287-a46b6a?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p20",
 "title": "4 BHK+ / Villa in Bukit Timah",
 "city": "Singapore",
 "neighborhood": "Bukit Timah",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 3190,
 "deposit": 9570,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161213788463-e4089b?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p21",
 "title": "1 BHK / Studio in Palm Jumeirah",
 "city": "Dubai, UAE",
 "neighborhood": "Palm Jumeirah",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 7000,
 "deposit": 21000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162465414395-692dd1?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p22",
 "title": "2 BHK in Downtown Austin",
 "city": "Austin, TX",
 "neighborhood": "Downtown Austin",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2010,
 "deposit": 6030,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166513797699-78b5d0?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p23",
 "title": "3 BHK in Shinjuku",
 "city": "Tokyo, Japan",
 "neighborhood": "Shinjuku",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 142000,
 "deposit": 426000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166081244004-93d9f9?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p24",
 "title": "4 BHK+ / Villa in Fremont",
 "city": "Seattle, WA",
 "neighborhood": "Fremont",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2030,
 "deposit": 6090,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166227323600-d2c656?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p25",
 "title": "1 BHK / Studio in Nayapalli",
 "city": "Bhubaneswar, India",
 "neighborhood": "Nayapalli",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 27400,
 "deposit": 82200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165229679418-597760?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p26",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 27500,
 "deposit": 82500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161781235011-14c3ed?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p27",
 "title": "3 BHK in Lower Parel",
 "city": "Mumbai, India",
 "neighborhood": "Lower Parel",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 27600,
 "deposit": 82800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16376947980-a30444?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p28",
 "title": "4 BHK+ / Villa in Hauz Khas",
 "city": "Delhi NCR, India",
 "neighborhood": "Hauz Khas",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 27700,
 "deposit": 83100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166466990764-12fe5e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p29",
 "title": "1 BHK / Studio in Begumpet",
 "city": "Hyderabad, India",
 "neighborhood": "Begumpet",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 27800,
 "deposit": 83400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167029674805-7921ab?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p30",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 27900,
 "deposit": 83700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166301998054-1d7296?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p31",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 28000,
 "deposit": 84000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169523887071-a51552?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p32",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 3310,
 "deposit": 9930,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166362278399-52b8b2?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p33",
 "title": "1 BHK / Studio in JLT",
 "city": "Dubai, UAE",
 "neighborhood": "JLT",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 7600,
 "deposit": 22800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16766557770-b1e13f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p34",
 "title": "2 BHK in Zilker",
 "city": "Austin, TX",
 "neighborhood": "Zilker",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2130,
 "deposit": 6390,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165770750001-97d534?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p35",
 "title": "3 BHK in Nakano",
 "city": "Tokyo, Japan",
 "neighborhood": "Nakano",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 154000,
 "deposit": 462000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165279947124-bdc0b6?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p36",
 "title": "4 BHK+ / Villa in Capitol Hill",
 "city": "Seattle, WA",
 "neighborhood": "Capitol Hill",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2150,
 "deposit": 6450,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162293081303-cf3e32?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p37",
 "title": "1 BHK / Studio in VSS Nagar",
 "city": "Bhubaneswar, India",
 "neighborhood": "VSS Nagar",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 28600,
 "deposit": 85800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169621439737-ad28f3?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p38",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 28700,
 "deposit": 86100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169527985141-0f1148?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p39",
 "title": "3 BHK in Worli",
 "city": "Mumbai, India",
 "neighborhood": "Worli",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 28800,
 "deposit": 86400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167205127053-5d0b8f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p40",
 "title": "4 BHK+ / Villa in Rohini",
 "city": "Delhi NCR, India",
 "neighborhood": "Rohini",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 28900,
 "deposit": 86700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162178748338-465f4e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p41",
 "title": "1 BHK / Studio in HITEC City",
 "city": "Hyderabad, India",
 "neighborhood": "HITEC City",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 29000,
 "deposit": 87000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161570442736-caace1?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p42",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 29100,
 "deposit": 87300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168882249894-bbe86f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p43",
 "title": "3 BHK in Anna Nagar",
 "city": "Chennai, India",
 "neighborhood": "Anna Nagar",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 29200,
 "deposit": 87600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168280446550-7f5e94?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p44",
 "title": "4 BHK+ / Villa in Bukit Timah",
 "city": "Singapore",
 "neighborhood": "Bukit Timah",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 3430,
 "deposit": 10290,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167051494015-467c46?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p45",
 "title": "1 BHK / Studio in JBR",
 "city": "Dubai, UAE",
 "neighborhood": "JBR",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 8200,
 "deposit": 24600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164550568547-3072b7?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p46",
 "title": "2 BHK in Mueller",
 "city": "Austin, TX",
 "neighborhood": "Mueller",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2250,
 "deposit": 6750,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166225673842-9e4eaf?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p47",
 "title": "3 BHK in Setagaya",
 "city": "Tokyo, Japan",
 "neighborhood": "Setagaya",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 166000,
 "deposit": 498000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163463467256-35c697?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p48",
 "title": "4 BHK+ / Villa in Wallingford",
 "city": "Seattle, WA",
 "neighborhood": "Wallingford",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2270,
 "deposit": 6810,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164631344482-0993d8?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p49",
 "title": "1 BHK / Studio in Rasulgarh",
 "city": "Bhubaneswar, India",
 "neighborhood": "Rasulgarh",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 29800,
 "deposit": 89400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169897142231-b4eaca?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p50",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 29900,
 "deposit": 89700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163357046402-9b00e9?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p51",
 "title": "3 BHK in Goregaon",
 "city": "Mumbai, India",
 "neighborhood": "Goregaon",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 30000,
 "deposit": 90000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166172214043-6cb08f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p52",
 "title": "4 BHK+ / Villa in Dwarka",
 "city": "Delhi NCR, India",
 "neighborhood": "Dwarka",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 30100,
 "deposit": 90300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161785431649-4125ea?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p53",
 "title": "1 BHK / Studio in Banjara Hills",
 "city": "Hyderabad, India",
 "neighborhood": "Banjara Hills",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 30200,
 "deposit": 90600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165576034166-85d211?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p54",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 30300,
 "deposit": 90900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167191373418-7ff406?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p55",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 30400,
 "deposit": 91200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161975956658-4ec756?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p56",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 3550,
 "deposit": 10650,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168626218743-072096?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p57",
 "title": "1 BHK / Studio in Downtown Dubai",
 "city": "Dubai, UAE",
 "neighborhood": "Downtown Dubai",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 8800,
 "deposit": 26400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168212002106-f1937d?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p58",
 "title": "2 BHK in East Austin",
 "city": "Austin, TX",
 "neighborhood": "East Austin",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2370,
 "deposit": 7110,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163580331487-0cc9ef?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p59",
 "title": "3 BHK in Roppongi",
 "city": "Tokyo, Japan",
 "neighborhood": "Roppongi",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 178000,
 "deposit": 534000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168103657805-bfc2b6?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p60",
 "title": "4 BHK+ / Villa in Queen Anne",
 "city": "Seattle, WA",
 "neighborhood": "Queen Anne",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2390,
 "deposit": 7170,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166421022172-a305cd?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p61",
 "title": "1 BHK / Studio in Patia & KIIT Road",
 "city": "Bhubaneswar, India",
 "neighborhood": "Patia & KIIT Road",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 31000,
 "deposit": 93000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166090971067-f61c3d?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p62",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 31100,
 "deposit": 93300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163452212802-7f2260?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p63",
 "title": "3 BHK in Malad",
 "city": "Mumbai, India",
 "neighborhood": "Malad",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 31200,
 "deposit": 93600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162968642545-fb5076?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p64",
 "title": "4 BHK+ / Villa in Greater Noida",
 "city": "Delhi NCR, India",
 "neighborhood": "Greater Noida",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 31300,
 "deposit": 93900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169389577810-714fbb?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p65",
 "title": "1 BHK / Studio in Madhapur",
 "city": "Hyderabad, India",
 "neighborhood": "Madhapur",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 31400,
 "deposit": 94200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16368985647-f855cb?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p66",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 31500,
 "deposit": 94500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168682766036-d383a9?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p67",
 "title": "3 BHK in Anna Nagar",
 "city": "Chennai, India",
 "neighborhood": "Anna Nagar",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 31600,
 "deposit": 94800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167036313722-a17bc5?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p68",
 "title": "4 BHK+ / Villa in Bukit Timah",
 "city": "Singapore",
 "neighborhood": "Bukit Timah",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 3670,
 "deposit": 11010,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165431304794-eed4b0?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p69",
 "title": "1 BHK / Studio in Al Barsha",
 "city": "Dubai, UAE",
 "neighborhood": "Al Barsha",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 9400,
 "deposit": 28200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-1628808559-b89e54?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p70",
 "title": "2 BHK in Hyde Park",
 "city": "Austin, TX",
 "neighborhood": "Hyde Park",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2490,
 "deposit": 7470,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16560429442-1aaf40?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p71",
 "title": "3 BHK in Shibuya",
 "city": "Tokyo, Japan",
 "neighborhood": "Shibuya",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 190000,
 "deposit": 570000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165746018303-64e7f0?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p72",
 "title": "4 BHK+ / Villa in Ballard",
 "city": "Seattle, WA",
 "neighborhood": "Ballard",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2510,
 "deposit": 7530,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162582858304-a30a95?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p73",
 "title": "1 BHK / Studio in Jaydev Vihar",
 "city": "Bhubaneswar, India",
 "neighborhood": "Jaydev Vihar",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 32200,
 "deposit": 96600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165867173770-c36d0e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p74",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 32300,
 "deposit": 96900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16734222099-0fd46f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p75",
 "title": "3 BHK in Thane",
 "city": "Mumbai, India",
 "neighborhood": "Thane",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 32400,
 "deposit": 97200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166185775540-566a6f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p76",
 "title": "4 BHK+ / Villa in Saket",
 "city": "Delhi NCR, India",
 "neighborhood": "Saket",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 32500,
 "deposit": 97500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168713918509-3bbe14?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p77",
 "title": "1 BHK / Studio in Kukatpally",
 "city": "Hyderabad, India",
 "neighborhood": "Kukatpally",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 32600,
 "deposit": 97800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162533413111-a87c02?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p78",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 32700,
 "deposit": 98100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163701202920-9f6019?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p79",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 32800,
 "deposit": 98400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167048777885-236e1f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p80",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 3790,
 "deposit": 11370,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169408450726-01c6db?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p81",
 "title": "1 BHK / Studio in Business Bay",
 "city": "Dubai, UAE",
 "neighborhood": "Business Bay",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 10000,
 "deposit": 30000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166883864846-a0f76c?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p82",
 "title": "2 BHK in Domain",
 "city": "Austin, TX",
 "neighborhood": "Domain",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2610,
 "deposit": 7830,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168644468391-e7f7fd?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p83",
 "title": "3 BHK in Meguro",
 "city": "Tokyo, Japan",
 "neighborhood": "Meguro",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 202000,
 "deposit": 606000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162509718213-2e27af?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p84",
 "title": "4 BHK+ / Villa in Beacon Hill",
 "city": "Seattle, WA",
 "neighborhood": "Beacon Hill",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2630,
 "deposit": 7890,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166129308589-2000af?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p85",
 "title": "1 BHK / Studio in Nayapalli",
 "city": "Bhubaneswar, India",
 "neighborhood": "Nayapalli",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 33400,
 "deposit": 100200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166917560184-b735b8?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p86",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 33500,
 "deposit": 100500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166283507886-96a81e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p87",
 "title": "3 BHK in Navi Mumbai",
 "city": "Mumbai, India",
 "neighborhood": "Navi Mumbai",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 33600,
 "deposit": 100800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163083574274-3a8e9a?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p88",
 "title": "4 BHK+ / Villa in Hauz Khas",
 "city": "Delhi NCR, India",
 "neighborhood": "Hauz Khas",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 33700,
 "deposit": 101100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162957947998-7b264b?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p89",
 "title": "1 BHK / Studio in Begumpet",
 "city": "Hyderabad, India",
 "neighborhood": "Begumpet",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 33800,
 "deposit": 101400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163167383525-7e2153?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p90",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 33900,
 "deposit": 101700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168285377459-6fde43?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p91",
 "title": "3 BHK in Anna Nagar",
 "city": "Chennai, India",
 "neighborhood": "Anna Nagar",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 34000,
 "deposit": 102000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162020867653-58f1e3?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p92",
 "title": "4 BHK+ / Villa in Bukit Timah",
 "city": "Singapore",
 "neighborhood": "Bukit Timah",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 3910,
 "deposit": 11730,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168634272330-ed9fd0?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p93",
 "title": "1 BHK / Studio in Dubai Marina",
 "city": "Dubai, UAE",
 "neighborhood": "Dubai Marina",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 10600,
 "deposit": 31800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163706083681-14676d?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p94",
 "title": "2 BHK in South Lamar",
 "city": "Austin, TX",
 "neighborhood": "South Lamar",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2730,
 "deposit": 8190,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163870130393-ba7d90?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p95",
 "title": "3 BHK in Minato",
 "city": "Tokyo, Japan",
 "neighborhood": "Minato",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 214000,
 "deposit": 642000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169367851719-8745aa?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p96",
 "title": "4 BHK+ / Villa in South Lake Union",
 "city": "Seattle, WA",
 "neighborhood": "South Lake Union",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2750,
 "deposit": 8250,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166801117705-55e632?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p97",
 "title": "1 BHK / Studio in VSS Nagar",
 "city": "Bhubaneswar, India",
 "neighborhood": "VSS Nagar",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 34600,
 "deposit": 103800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163362281254-c3bf91?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p98",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 34700,
 "deposit": 104100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164536361738-7e906a?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p99",
 "title": "3 BHK in Dadar",
 "city": "Mumbai, India",
 "neighborhood": "Dadar",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 34800,
 "deposit": 104400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164009254743-29abce?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p100",
 "title": "4 BHK+ / Villa in Rohini",
 "city": "Delhi NCR, India",
 "neighborhood": "Rohini",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 34900,
 "deposit": 104700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164093242465-659c08?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p101",
 "title": "1 BHK / Studio in HITEC City",
 "city": "Hyderabad, India",
 "neighborhood": "HITEC City",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 35000,
 "deposit": 105000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167064592279-f3c3bd?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p102",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 35100,
 "deposit": 105300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166724091140-6246f5?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p103",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 35200,
 "deposit": 105600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168582526544-d91db6?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p104",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4030,
 "deposit": 12090,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16180156197-451d2d?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p105",
 "title": "1 BHK / Studio in Palm Jumeirah",
 "city": "Dubai, UAE",
 "neighborhood": "Palm Jumeirah",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 11200,
 "deposit": 33600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161279873399-236731?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p106",
 "title": "2 BHK in Downtown Austin",
 "city": "Austin, TX",
 "neighborhood": "Downtown Austin",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2850,
 "deposit": 8550,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16988825739-72265a?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p107",
 "title": "3 BHK in Shinjuku",
 "city": "Tokyo, Japan",
 "neighborhood": "Shinjuku",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 226000,
 "deposit": 678000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163725831459-a3c29a?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p108",
 "title": "4 BHK+ / Villa in Fremont",
 "city": "Seattle, WA",
 "neighborhood": "Fremont",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2870,
 "deposit": 8610,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162521761636-aa8277?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p109",
 "title": "1 BHK / Studio in Rasulgarh",
 "city": "Bhubaneswar, India",
 "neighborhood": "Rasulgarh",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 35800,
 "deposit": 107400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167839060333-bc611e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p110",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 35900,
 "deposit": 107700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168125572964-4a4af4?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p111",
 "title": "3 BHK in Bandra West",
 "city": "Mumbai, India",
 "neighborhood": "Bandra West",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 36000,
 "deposit": 108000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166331284212-fa3b35?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p112",
 "title": "4 BHK+ / Villa in Dwarka",
 "city": "Delhi NCR, India",
 "neighborhood": "Dwarka",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 36100,
 "deposit": 108300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162172826382-cc5dbf?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p113",
 "title": "1 BHK / Studio in Banjara Hills",
 "city": "Hyderabad, India",
 "neighborhood": "Banjara Hills",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 36200,
 "deposit": 108600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162200192674-a9c7f6?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p114",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 36300,
 "deposit": 108900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161780446449-ef8b1e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p115",
 "title": "3 BHK in Anna Nagar",
 "city": "Chennai, India",
 "neighborhood": "Anna Nagar",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 36400,
 "deposit": 109200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162203221966-e01a40?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p116",
 "title": "4 BHK+ / Villa in Bukit Timah",
 "city": "Singapore",
 "neighborhood": "Bukit Timah",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4150,
 "deposit": 12450,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163017155651-67c6a5?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p117",
 "title": "1 BHK / Studio in JLT",
 "city": "Dubai, UAE",
 "neighborhood": "JLT",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 11800,
 "deposit": 35400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166868618327-4d4e27?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p118",
 "title": "2 BHK in Zilker",
 "city": "Austin, TX",
 "neighborhood": "Zilker",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 2970,
 "deposit": 8910,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163551462586-a309fd?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p119",
 "title": "3 BHK in Nakano",
 "city": "Tokyo, Japan",
 "neighborhood": "Nakano",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 238000,
 "deposit": 714000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169935388899-ea1772?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p120",
 "title": "4 BHK+ / Villa in Capitol Hill",
 "city": "Seattle, WA",
 "neighborhood": "Capitol Hill",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 2990,
 "deposit": 8970,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162576868320-685584?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p121",
 "title": "1 BHK / Studio in Patia & KIIT Road",
 "city": "Bhubaneswar, India",
 "neighborhood": "Patia & KIIT Road",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 37000,
 "deposit": 111000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168429792441-5bad4c?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p122",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 37100,
 "deposit": 111300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162626372878-c34598?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p123",
 "title": "3 BHK in Andheri West",
 "city": "Mumbai, India",
 "neighborhood": "Andheri West",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 37200,
 "deposit": 111600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167532947385-4a9eb8?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p124",
 "title": "4 BHK+ / Villa in Greater Noida",
 "city": "Delhi NCR, India",
 "neighborhood": "Greater Noida",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 37300,
 "deposit": 111900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163655839211-8c65d3?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p125",
 "title": "1 BHK / Studio in Madhapur",
 "city": "Hyderabad, India",
 "neighborhood": "Madhapur",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 37400,
 "deposit": 112200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16564890055-477056?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p126",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 37500,
 "deposit": 112500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163426372847-60f422?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p127",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 37600,
 "deposit": 112800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165649829481-afa2df?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p128",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4270,
 "deposit": 12810,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166090236171-1b9975?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p129",
 "title": "1 BHK / Studio in JBR",
 "city": "Dubai, UAE",
 "neighborhood": "JBR",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 12400,
 "deposit": 37200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161347287161-054c29?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p130",
 "title": "2 BHK in Mueller",
 "city": "Austin, TX",
 "neighborhood": "Mueller",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 3090,
 "deposit": 9270,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165428055116-bf4d9e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p131",
 "title": "3 BHK in Setagaya",
 "city": "Tokyo, Japan",
 "neighborhood": "Setagaya",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 250000,
 "deposit": 750000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163620559383-de54ec?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p132",
 "title": "4 BHK+ / Villa in Wallingford",
 "city": "Seattle, WA",
 "neighborhood": "Wallingford",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 3110,
 "deposit": 9330,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163361342793-808021?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p133",
 "title": "1 BHK / Studio in Jaydev Vihar",
 "city": "Bhubaneswar, India",
 "neighborhood": "Jaydev Vihar",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 38200,
 "deposit": 114600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165809018121-f2df34?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p134",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 38300,
 "deposit": 114900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168641729945-dc608f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p135",
 "title": "3 BHK in Powai",
 "city": "Mumbai, India",
 "neighborhood": "Powai",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 38400,
 "deposit": 115200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16945069896-f5b784?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p136",
 "title": "4 BHK+ / Villa in Saket",
 "city": "Delhi NCR, India",
 "neighborhood": "Saket",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 38500,
 "deposit": 115500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163276890451-aa40bc?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p137",
 "title": "1 BHK / Studio in Kukatpally",
 "city": "Hyderabad, India",
 "neighborhood": "Kukatpally",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 38600,
 "deposit": 115800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166383081464-f94315?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p138",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 38700,
 "deposit": 116100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162173181929-9f5478?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p139",
 "title": "3 BHK in Anna Nagar",
 "city": "Chennai, India",
 "neighborhood": "Anna Nagar",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 38800,
 "deposit": 116400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169121220719-f38a89?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p140",
 "title": "4 BHK+ / Villa in Bukit Timah",
 "city": "Singapore",
 "neighborhood": "Bukit Timah",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4390,
 "deposit": 13170,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168819902945-efa7de?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p141",
 "title": "1 BHK / Studio in Downtown Dubai",
 "city": "Dubai, UAE",
 "neighborhood": "Downtown Dubai",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 13000,
 "deposit": 39000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165148716156-d288e5?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p142",
 "title": "2 BHK in East Austin",
 "city": "Austin, TX",
 "neighborhood": "East Austin",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 3210,
 "deposit": 9630,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164240094466-c6d1d5?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p143",
 "title": "3 BHK in Roppongi",
 "city": "Tokyo, Japan",
 "neighborhood": "Roppongi",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 262000,
 "deposit": 786000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16268105121-ffdd76?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p144",
 "title": "4 BHK+ / Villa in Queen Anne",
 "city": "Seattle, WA",
 "neighborhood": "Queen Anne",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 3230,
 "deposit": 9690,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168647396695-9481eb?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p145",
 "title": "1 BHK / Studio in Nayapalli",
 "city": "Bhubaneswar, India",
 "neighborhood": "Nayapalli",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 39400,
 "deposit": 118200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163180976350-0f08c8?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p146",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 39500,
 "deposit": 118500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161036306177-17f35d?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p147",
 "title": "3 BHK in Juhu",
 "city": "Mumbai, India",
 "neighborhood": "Juhu",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 39600,
 "deposit": 118800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169938548798-97e298?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p148",
 "title": "4 BHK+ / Villa in Hauz Khas",
 "city": "Delhi NCR, India",
 "neighborhood": "Hauz Khas",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 39700,
 "deposit": 119100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-1640106068-329500?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p149",
 "title": "1 BHK / Studio in Begumpet",
 "city": "Hyderabad, India",
 "neighborhood": "Begumpet",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 39800,
 "deposit": 119400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168486201279-436721?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p150",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 39900,
 "deposit": 119700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165318355532-333440?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p151",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 40000,
 "deposit": 120000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164401058204-26c2c1?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p152",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4510,
 "deposit": 13530,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167156419748-4b9d7c?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p153",
 "title": "1 BHK / Studio in Al Barsha",
 "city": "Dubai, UAE",
 "neighborhood": "Al Barsha",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 13600,
 "deposit": 40800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166799780091-2da6cc?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p154",
 "title": "2 BHK in Hyde Park",
 "city": "Austin, TX",
 "neighborhood": "Hyde Park",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 3330,
 "deposit": 9990,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162310887107-3b0060?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p155",
 "title": "3 BHK in Shibuya",
 "city": "Tokyo, Japan",
 "neighborhood": "Shibuya",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 274000,
 "deposit": 822000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16966073382-907546?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p156",
 "title": "4 BHK+ / Villa in Ballard",
 "city": "Seattle, WA",
 "neighborhood": "Ballard",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 3350,
 "deposit": 10050,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168620924478-24dbf3?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p157",
 "title": "1 BHK / Studio in VSS Nagar",
 "city": "Bhubaneswar, India",
 "neighborhood": "VSS Nagar",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 40600,
 "deposit": 121800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168529223749-65ab19?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p158",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 40700,
 "deposit": 122100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167898900195-4474af?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p159",
 "title": "3 BHK in Lower Parel",
 "city": "Mumbai, India",
 "neighborhood": "Lower Parel",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 40800,
 "deposit": 122400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165603579998-ec1231?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p160",
 "title": "4 BHK+ / Villa in Rohini",
 "city": "Delhi NCR, India",
 "neighborhood": "Rohini",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 40900,
 "deposit": 122700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161886732374-cfc95a?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p161",
 "title": "1 BHK / Studio in HITEC City",
 "city": "Hyderabad, India",
 "neighborhood": "HITEC City",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 41000,
 "deposit": 123000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166107138565-b9f178?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p162",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 41100,
 "deposit": 123300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162562514711-c6755e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p163",
 "title": "3 BHK in Anna Nagar",
 "city": "Chennai, India",
 "neighborhood": "Anna Nagar",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 41200,
 "deposit": 123600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169471504014-1471da?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p164",
 "title": "4 BHK+ / Villa in Bukit Timah",
 "city": "Singapore",
 "neighborhood": "Bukit Timah",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4630,
 "deposit": 13890,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16367316052-b42473?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p165",
 "title": "1 BHK / Studio in Business Bay",
 "city": "Dubai, UAE",
 "neighborhood": "Business Bay",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 14200,
 "deposit": 42600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162283800588-10da01?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p166",
 "title": "2 BHK in Domain",
 "city": "Austin, TX",
 "neighborhood": "Domain",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 3450,
 "deposit": 10350,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164171323237-ee5ff6?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p167",
 "title": "3 BHK in Meguro",
 "city": "Tokyo, Japan",
 "neighborhood": "Meguro",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 286000,
 "deposit": 858000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162700466194-a3887c?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p168",
 "title": "4 BHK+ / Villa in Beacon Hill",
 "city": "Seattle, WA",
 "neighborhood": "Beacon Hill",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 3470,
 "deposit": 10410,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16379838103-49d600?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p169",
 "title": "1 BHK / Studio in Rasulgarh",
 "city": "Bhubaneswar, India",
 "neighborhood": "Rasulgarh",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 41800,
 "deposit": 125400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165870437984-a57585?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p170",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 41900,
 "deposit": 125700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161971684860-f31f1f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p171",
 "title": "3 BHK in Worli",
 "city": "Mumbai, India",
 "neighborhood": "Worli",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 42000,
 "deposit": 126000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168176294628-d4cea1?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p172",
 "title": "4 BHK+ / Villa in Dwarka",
 "city": "Delhi NCR, India",
 "neighborhood": "Dwarka",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 42100,
 "deposit": 126300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161470638375-638219?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p173",
 "title": "1 BHK / Studio in Banjara Hills",
 "city": "Hyderabad, India",
 "neighborhood": "Banjara Hills",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 42200,
 "deposit": 126600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163230173590-e06677?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p174",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 42300,
 "deposit": 126900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163147928408-2e8ead?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p175",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 42400,
 "deposit": 127200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16533806310-8174df?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p176",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4750,
 "deposit": 14250,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162757956037-cc6274?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p177",
 "title": "1 BHK / Studio in Dubai Marina",
 "city": "Dubai, UAE",
 "neighborhood": "Dubai Marina",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 14800,
 "deposit": 44400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162152480266-56b403?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p178",
 "title": "2 BHK in South Lamar",
 "city": "Austin, TX",
 "neighborhood": "South Lamar",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 3570,
 "deposit": 10710,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16155504486-662be0?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p179",
 "title": "3 BHK in Minato",
 "city": "Tokyo, Japan",
 "neighborhood": "Minato",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 298000,
 "deposit": 894000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163152638438-8e9894?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p180",
 "title": "4 BHK+ / Villa in South Lake Union",
 "city": "Seattle, WA",
 "neighborhood": "South Lake Union",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 3590,
 "deposit": 10770,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162294817138-114a3e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p181",
 "title": "1 BHK / Studio in Patia & KIIT Road",
 "city": "Bhubaneswar, India",
 "neighborhood": "Patia & KIIT Road",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 43000,
 "deposit": 129000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164841264953-f96fd4?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p182",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 43100,
 "deposit": 129300,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169302794394-8e5ad9?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p183",
 "title": "3 BHK in Goregaon",
 "city": "Mumbai, India",
 "neighborhood": "Goregaon",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 43200,
 "deposit": 129600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165304062644-7aa52e?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p184",
 "title": "4 BHK+ / Villa in Greater Noida",
 "city": "Delhi NCR, India",
 "neighborhood": "Greater Noida",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 43300,
 "deposit": 129900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-166922633947-7bdde6?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p185",
 "title": "1 BHK / Studio in Madhapur",
 "city": "Hyderabad, India",
 "neighborhood": "Madhapur",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 43400,
 "deposit": 130200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162156473898-e0638c?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p186",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 43500,
 "deposit": 130500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163530547989-258918?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p187",
 "title": "3 BHK in Anna Nagar",
 "city": "Chennai, India",
 "neighborhood": "Anna Nagar",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 43600,
 "deposit": 130800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-165468003475-760a7b?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p188",
 "title": "4 BHK+ / Villa in Bukit Timah",
 "city": "Singapore",
 "neighborhood": "Bukit Timah",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4870,
 "deposit": 14610,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161410331381-12b614?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p189",
 "title": "1 BHK / Studio in Palm Jumeirah",
 "city": "Dubai, UAE",
 "neighborhood": "Palm Jumeirah",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 15400,
 "deposit": 46200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-162986543820-8d50b4?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p190",
 "title": "2 BHK in Downtown Austin",
 "city": "Austin, TX",
 "neighborhood": "Downtown Austin",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 3690,
 "deposit": 11070,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168854691264-a3f476?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p191",
 "title": "3 BHK in Shinjuku",
 "city": "Tokyo, Japan",
 "neighborhood": "Shinjuku",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 310000,
 "deposit": 930000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168435422078-faf813?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p192",
 "title": "4 BHK+ / Villa in Fremont",
 "city": "Seattle, WA",
 "neighborhood": "Fremont",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 3710,
 "deposit": 11130,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161516813059-89e233?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p193",
 "title": "1 BHK / Studio in Jaydev Vihar",
 "city": "Bhubaneswar, India",
 "neighborhood": "Jaydev Vihar",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 44200,
 "deposit": 132600,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168279951135-643ef5?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p194",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 44300,
 "deposit": 132900,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161348313345-fb3be0?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p195",
 "title": "3 BHK in Malad",
 "city": "Mumbai, India",
 "neighborhood": "Malad",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 44400,
 "deposit": 133200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164656092373-03f119?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p196",
 "title": "4 BHK+ / Villa in Saket",
 "city": "Delhi NCR, India",
 "neighborhood": "Saket",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 44500,
 "deposit": 133500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164277681258-555797?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p197",
 "title": "1 BHK / Studio in Kukatpally",
 "city": "Hyderabad, India",
 "neighborhood": "Kukatpally",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 44600,
 "deposit": 133800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161014162381-764615?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p198",
 "title": "2 BHK in Aundh",
 "city": "Pune, India",
 "neighborhood": "Aundh",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 44700,
 "deposit": 134100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16124565030-536002?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p199",
 "title": "3 BHK in Nungambakkam",
 "city": "Chennai, India",
 "neighborhood": "Nungambakkam",
 "society": "Prestige Residency",
 "bhk": "3 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 44800,
 "deposit": 134400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168489043065-a8083f?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p200",
 "title": "4 BHK+ / Villa in Clementi",
 "city": "Singapore",
 "neighborhood": "Clementi",
 "society": "Lodha Vista",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 4990,
 "deposit": 14970,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-167943993896-3ef1cc?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p201",
 "title": "1 BHK / Studio in JLT",
 "city": "Dubai, UAE",
 "neighborhood": "JLT",
 "society": "Sobha Dream Acres",
 "bhk": "1 BHK / Studio",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 16000,
 "deposit": 48000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161046814727-674cb6?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p202",
 "title": "2 BHK in Zilker",
 "city": "Austin, TX",
 "neighborhood": "Zilker",
 "society": "DLF Phase 4",
 "bhk": "2 BHK",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 3810,
 "deposit": 11430,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169867125823-23e95a?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p203",
 "title": "3 BHK in Nakano",
 "city": "Tokyo, Japan",
 "neighborhood": "Nakano",
 "society": "Godrej Greens",
 "bhk": "3 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 322000,
 "deposit": 966000,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-16957788011-7587ce?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p204",
 "title": "4 BHK+ / Villa in Capitol Hill",
 "city": "Seattle, WA",
 "neighborhood": "Capitol Hill",
 "society": "Emaar Views",
 "bhk": "4 BHK+ / Villa",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 3830,
 "deposit": 11490,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-168582158673-b93050?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p205",
 "title": "1 BHK / Studio in Nayapalli",
 "city": "Bhubaneswar, India",
 "neighborhood": "Nayapalli",
 "society": "Prestige Residency",
 "bhk": "1 BHK / Studio",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 45400,
 "deposit": 136200,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169445188426-e54547?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p206",
 "title": "2 BHK in Koramangala",
 "city": "Bengaluru, India",
 "neighborhood": "Koramangala",
 "society": "Lodha Vista",
 "bhk": "2 BHK",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 45500,
 "deposit": 136500,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Lease",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163743184283-9f1299?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p207",
 "title": "3 BHK in Thane",
 "city": "Mumbai, India",
 "neighborhood": "Thane",
 "society": "Sobha Dream Acres",
 "bhk": "3 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 45600,
 "deposit": 136800,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-161447911086-bc5408?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p208",
 "title": "4 BHK+ / Villa in Hauz Khas",
 "city": "Delhi NCR, India",
 "neighborhood": "Hauz Khas",
 "society": "DLF Phase 4",
 "bhk": "4 BHK+ / Villa",
 "sqft": 800,
 "furnishing": "Semi-Furnished",
 "price": 45700,
 "deposit": 137100,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-169555012273-225e39?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 },
 {
 "id": "p209",
 "title": "1 BHK / Studio in Begumpet",
 "city": "Hyderabad, India",
 "neighborhood": "Begumpet",
 "society": "Godrej Greens",
 "bhk": "1 BHK / Studio",
 "sqft": 1200,
 "furnishing": "Fully Furnished",
 "price": 45800,
 "deposit": 137400,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": true,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-164278291164-053278?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Bachelors / Family"
 },
 {
 "id": "p210",
 "title": "2 BHK in Viman Nagar",
 "city": "Pune, India",
 "neighborhood": "Viman Nagar",
 "society": "Emaar Views",
 "bhk": "2 BHK",
 "sqft": 1600,
 "furnishing": "Unfurnished",
 "price": 45900,
 "deposit": 137700,
 "lockIn": "6 Months",
 "noticePeriod": "2 Months",
 "type": "Rent",
 "petFriendly": false,
 "amenities": [
 "Gym",
 "Pool",
 "Security",
 "Parking",
 "Power Backup"
 ],
 "image": "https://images.unsplash.com/photo-163134008909-391903?auto=format&fit=crop&w=800&q=80",
 "idealMembers": "Family Only"
 }
 ],
 "initialMoveInventory": [
 {
 "id": "inv-1",
 "room": "living",
 "name": "65\" 4K OLED Smart TV & Mount",
 "category": "Electronics",
 "boxNum": "BOX-LR-01",
 "weightKg": 22,
 "value": 75000,
 "fragile": true,
 "status": "Packed"
 },
 {
 "id": "inv-2",
 "room": "living",
 "name": "Designer Sofa Cushions & Silk Drapes",
 "category": "Household",
 "boxNum": "BOX-LR-02",
 "weightKg": 8,
 "value": 12000,
 "fragile": false,
 "status": "Packed"
 },
 {
 "id": "inv-3",
 "room": "living",
 "name": "Handcrafted Ceramic Lamps & Canvas Art",
 "category": "Decor",
 "boxNum": "BOX-LR-03",
 "weightKg": 6,
 "value": 18000,
 "fragile": true,
 "status": "Packed"
 },
 {
 "id": "inv-4",
 "room": "bedroom",
 "name": "King Comfort Mattress Vacuum Sealed",
 "category": "Bedding",
 "boxNum": "BOX-MB-01",
 "weightKg": 28,
 "value": 35000,
 "fragile": false,
 "status": "Loaded"
 },
 {
 "id": "inv-5",
 "room": "bedroom",
 "name": "Winter Wardrobe & Formal Suits Box",
 "category": "Clothing",
 "boxNum": "BOX-MB-02",
 "weightKg": 16,
 "value": 45000,
 "fragile": false,
 "status": "Packed"
 },
 {
 "id": "inv-6",
 "room": "bedroom",
 "name": "Jewelry Organizer & Memory Keepsakes",
 "category": "Valuables",
 "boxNum": "BOX-MB-03",
 "weightKg": 4,
 "value": 60000,
 "fragile": true,
 "status": "Packed"
 },
 {
 "id": "inv-7",
 "room": "kitchen",
 "name": "Corelle Porcelain Dinnerware & Crystal Glasses",
 "category": "Dining",
 "boxNum": "BOX-KT-01",
 "weightKg": 14,
 "value": 24000,
 "fragile": true,
 "status": "Packed"
 },
 {
 "id": "inv-8",
 "room": "kitchen",
 "name": "Barista Espresso Machine & Grinder",
 "category": "Appliances",
 "boxNum": "BOX-KT-02",
 "weightKg": 12,
 "value": 38000,
 "fragile": true,
 "status": "Loaded"
 },
 {
 "id": "inv-9",
 "room": "kitchen",
 "name": "Non-stick Ceramic Cookware & Spice Racks",
 "category": "Kitchen",
 "boxNum": "BOX-KT-03",
 "weightKg": 18,
 "value": 15000,
 "fragile": false,
 "status": "Packed"
 },
 {
 "id": "inv-10",
 "room": "office",
 "name": "Dual 27\" Monitors & Ergonomic Arm",
 "category": "Tech",
 "boxNum": "BOX-OF-01",
 "weightKg": 15,
 "value": 55000,
 "fragile": true,
 "status": "Packed"
 },
 {
 "id": "inv-11",
 "room": "office",
 "name": "Mechanical Keyboard, Audio Interface & Mics",
 "category": "Tech",
 "boxNum": "BOX-OF-02",
 "weightKg": 7,
 "value": 32000,
 "fragile": true,
 "status": "Packed"
 },
 {
 "id": "inv-12",
 "room": "office",
 "name": "Official Identity Dossiers & Legal Titles",
 "category": "Documents",
 "boxNum": "BOX-OF-03",
 "weightKg": 3,
 "value": 10000,
 "fragile": false,
 "status": "Packed"
 }
 ]
};

function formatLocalCurrency(val, city) {
 if (typeof val !== 'number') val = Number(val) || 0;
 let targetCity = city || (typeof userProfile !== 'undefined' && userProfile && userProfile.city) || 'Bhubaneswar, India';
 let costData = (typeof SETTLE_IN_DATA !== 'undefined' && SETTLE_IN_DATA.costOfLiving) ? (SETTLE_IN_DATA.costOfLiving[targetCity] || SETTLE_IN_DATA.costOfLiving['Bhubaneswar, India']) : null;
 let sym = (costData && costData.currencySymbol) || (targetCity.includes('Singapore') ? 'S$' : targetCity.includes('Dubai') ? 'AED ' : targetCity.includes('Tokyo') ? '¥' : targetCity.includes('USA') || targetCity.includes('TX') || targetCity.includes('WA') ? '$' : '₹');
 return `${sym}${val.toLocaleString()}`;
}
