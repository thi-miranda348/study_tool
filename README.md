# 🎓 Study Assistant: Quiz & Scheduler

A professional, lightweight, and high-performance web application suite designed to streamline the learning process for the college courses. This tool combines an interactive quiz engine with a dynamic study scheduler to ensure consistent progress and knowledge retention.

---

## 🚀 Key Features

### 1. Interactive Quiz Engine (`index.html`)
* **Dynamic Data Parsing:** Automatically loads and processes complex quiz data from an external `data.js` file.
* **Smart Filtering:** Includes a tag-based filter and a real-time search bar to quickly locate specific topics or keywords.
* **Mobile-First Design:** Optimized for smartphones with a sticky header, responsive layout, and large touch targets.
* **Study Statistics:** Displays real-time stats including total questions, topics available, and current items showing.
* **Theme Customization:** Features a built-in Dark Mode toggle to reduce eye strain during long study sessions.

### 2. Strategic Study Scheduler (`schedule.html`)
* **Chronological Planning:** Organizes study tasks based on a specific course start date (Jan 7, 2026).
* **Streak Tracking:** Encourages daily consistency with an automated "Day Streak" counter.
* **Progress Visualization:** Each day features a dynamic progress bar that updates as you complete tasks.
* **Task Management:** Add, delete, and toggle tasks easily with data persisted via `localStorage`.
* **Navigation:** Built-in date picker and "Today" button for rapid navigation through your study timeline.

---

## 🛠️ Technical Stack
* **Languages:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Typography:** Powered by the **Inter** font family for maximum readability on small screens.
* **Data Storage:** Utilizes browser `localStorage` for privacy and offline persistence of your schedule.
* **Deployment:** Fully compatible with **GitHub Pages** for free, secure hosting.

---

## 📁 File Structure
```text
/study-tool
├── index.html          # Main Quiz Application (Home)
├── schedule.html       # Study Planning & Tracking Tool
├── data.js             # Question database (Required for Quiz)
└── README.md           # Documentation & Project Overview
