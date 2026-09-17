# SettleIn: AI Powered Relocation Operating System

**Live Demo:** [https://settlein-yupd.onrender.com](https://settlein-yupd.onrender.com/)

Built for the **Microsoft Agent-a-thon 2026**, **SettleIn** transforms the fragmented, stressful process of moving to a new city into a seamless, delightful, and fully autonomous digital experience.



## 🌟 The Vision

Relocating involves navigating a maze of logistics—finding neighborhoods, managing packing, transferring utilities, finding healthcare, and keeping track of documents. SettleIn is a unified "Relocation Operating System" that provides users with a personalized, AI-driven command center to orchestrate their entire move from start to finish.

## 🚀 Key Features & How It Works

### 1. Dual-Portal Architecture
SettleIn operates on a unified data layer with two distinct interfaces:
- **Citizen Portal**: The user-facing dashboard where individuals manage their relocation checklist, track inventory, and chat with the AI agent.
- **Admin Gateway**: A backend portal for city departments (Utilities, Government, Healthcare, etc.) to review, approve, or reject user requests. Approvals automatically sync back to the Citizen's checklist in real-time.

### 2. Intelligent AI Agent (Powered by Gemini)
At the heart of SettleIn is a context-aware chatbot powered by **Google Gemini**. 
- **Contextual Awareness:** The agent knows what city you are moving to and tailors its advice accordingly.
- **Actionable Advice:** Users can ask about setting up utilities, finding local schools, or navigating public transit, receiving immediate, intelligent guidance.

### 3. Smart Neighborhood Matcher
Users can discover optimal neighborhoods based on crucial metrics:
- **Safety Scores**, **School Ratings**, and **Average Rent**.
- Users can view specific property listings, book home tours, and view localized commuting guides.

### 4. Pack & Move Inventory System
A comprehensive digital manifest for packing:
- Users can add items, assign them to specific rooms, and tag them as **Fragile**.
- Generates a downloadable **Packing Slip PDF** for movers.

### 5. Document & Checklist Trackers
- **Setup Checklist:** Tracks critical life-setup tasks (e.g., Water Connection, Internet). Users submit requests directly from the checklist, which ping the Admin Gateway for approval.
- **Document Tracker:** Securely logs essential identification and financial documents, flagging critical requirements like Passports and Rental Agreements.

### 6. Emergency SOS & Aviation Telemetry
- **SOS Dispatcher:** Instant access to localized emergency numbers (Police, Hospital, Fire).
- **Aviation Telemetry:** Real-time tracking of relocation flights.

---

## 🛠️ Technical Stack & Architecture

SettleIn is engineered to be lightweight, fast, and highly modular:

- **Frontend:** Vanilla HTML5, CSS3, and JavaScript. We utilized a custom design system focusing on glassmorphism, modern typography, and **Lucide SVG Icons** for a sleek, premium, emoji-free aesthetic.
- **Backend:** Node.js with Express.js.
- **AI Integration:** `@google/genai` SDK for intelligent chatbot capabilities.
- **Data Persistence:** A lightweight, local JSON database (`settlein_db.json`) architecture that allows for instant read/write state syncing between the Citizen and Admin portals.

## 💻 Running Locally

1. Clone the repository and navigate to the `settlein` directory:
   ```bash
   cd settlein
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set your environment variables:
   ```bash
   export GEMINI_API_KEY="your_api_key_here"
   ```
4. Start the local server:
   ```bash
   npm start
   ```
5. Open `http://localhost:8080` (or the port specified by the server) in your browser.

## Built With
- HTML, CSS, JavaScript (Vanilla Frontend)
- Node.js (Backend)
- Google Gemini API (Agentic Intelligence)
- Lucide Icons (Sleek UI)
