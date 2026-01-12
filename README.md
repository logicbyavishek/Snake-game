# 🐍 Snake Game (JavaScript DOM Based)

A classic **Snake Game** built using **HTML, CSS, and Vanilla JavaScript**, implemented with a DOM-based grid system. The project focuses on **clean game logic, state handling, and multi-device controls** (keyboard + mobile swipe).

This project was built to strengthen core JavaScript concepts such as DOM manipulation, event handling, timers, collision detection, and basic game architecture.

---

## 🚀 Features

* 🎮 Classic snake gameplay
* ⌨️ Keyboard controls (Arrow keys)
* 📱 Mobile-friendly swipe / drag controls
* 🧱 Wall collision detection with Game Over modal
* 🐍 Self-collision detection (snake dies on body hit)
* 🔁 Direction reversal prevention (no instant opposite moves)
* 🏆 High Score persistence using `localStorage`
* ⏱️ Live game timer
* ♻️ Restart game without page reload

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Grid layout, UI styling, modals
* **JavaScript (ES6)** – Game logic, state management, events

No external libraries or frameworks used.

---

## 🎯 Controls

### Desktop

* ⬆️ Arrow Up – Move Up
* ⬇️ Arrow Down – Move Down
* ⬅️ Arrow Left – Move Left
* ➡️ Arrow Right – Move Right

### Mobile

* 👉 Swipe Right – Move Right
* 👈 Swipe Left – Move Left
* 👆 Swipe Up – Move Up
* 👇 Swipe Down – Move Down

> Reverse direction (e.g., Up → Down) is intentionally blocked to follow classic snake rules.

---

## 🧠 Game Logic Overview

* The board is rendered as a **dynamic grid using CSS Grid**.
* Snake position is stored as an array of coordinates.
* On each game tick:

  1. Next head position is calculated
  2. Wall and self-collision are checked
  3. Snake moves forward
  4. Food consumption increases score and length
  5. DOM is updated to reflect the new state

---

## 📂 Project Structure

```text
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 How to Run

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Click **Start Game** and begin playing

No build steps required.

---

## 📌 Learning Outcomes

* DOM-based game rendering
* Handling keyboard and touch events together
* Managing game state with JavaScript
* Collision detection logic
* Using `setInterval` safely
* Writing scalable, readable game code

---

## 🔮 Possible Enhancements

* Dynamic speed increase with score
* Pause / Resume functionality
* Level system
* Canvas-based rendering
* AI-controlled snake

---

## 👤 Author

**Avishek Dutta**
B.Tech CSE | JavaScript & Web Development Enthusiast

---

If you found this project useful or insightful, feel free to explore, fork, or build upon it.
