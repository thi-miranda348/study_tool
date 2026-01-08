Study Assistant: Quiz & Scheduler
A lightweight, high-performance web application designed to streamline the learning process for the college courses. This tool combines an interactive quiz engine with a dynamic study scheduler to ensure consistent progress and knowledge retention.

🚀 Features
1. Interactive Quiz Engine (index.html)
Dynamic Data Loading: Parses complex quiz data from an external data.js file for easy content updates.

Smart Filtering: Filter questions by specific topics/tags or use the instant search bar to find keywords.

Mobile-Optimized Interface: Responsive design with a sticky header and intuitive touch controls for studying on the go.

Theme Support: Switch between Light and Dark modes to reduce eye strain during late-night study sessions.

2. Strategic Study Scheduler (schedule.html)
Daily Task Management: Organize study goals with a clear "Day-by-Day" view starting from your start date.

Streak Tracking: Gamified "Day Streak" badge to motivate consistent daily activity.

Progress Analytics: Visual progress bars for each day to track completion rates.

Local Persistence: Uses localStorage to save your tasks directly in your browser without needing a database.

🛠️ Technical Stack
Frontend: HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript (ES6+).

Fonts: Inter via Google Fonts for maximum readability.

Architecture: Single Page Application (SPA) logic for smooth transitions and high performance on mobile devices.

📁 File Structure
Plaintext

/d386-study-assistant
├── index.html          # Main Quiz Application
├── schedule.html       # Study Planning Tool
├── data.js             # Question database (Not included in repo)
└── README.md           # Documentation
💻 Installation & Usage
Clone or Download: Save all files into a single folder.

Add Data: Ensure your data.js file is formatted correctly for the parseData function.

Deploy: Upload to GitHub Pages for a live mobile-friendly link.

Local Storage: Your data is saved locally on your device. Clearing browser cache may remove your schedule data.

🎨 UI/UX Design Principles
Accessibility: High contrast ratios and large touch targets for mobile users.

Interactivity: Immediate visual feedback on task completion and quiz answers.

Efficiency: Designed to minimize clicks, allowing you to focus on the content rather than the navigation.
