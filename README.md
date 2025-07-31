# 📄 Random User Page Generator (RUPG)

A simple modular JavaScript project that generates a random user profile using data from public APIs. Built with HTML, CSS, and vanilla JS, following a clean separation of concerns.

## 📑 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [File Responsibilities](#file-responsibilities)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)

## ✨ Features

- Generates Facebook‑style profile pages populated with random user data in one click
- Fully modular: model–view–controller split for easy maintenance
- Framework‑free — just ES6 modules, HTML5, and CSS3

## 🗂 Project Structure

```text
├── index.html  # Main HTML skeleton
├── style.css   # All styles and visual design
├── main.js     # App entry point & controller logic
├── model.js    # Data layer: fetching, transforming, storing
└── render.js   # View layer: DOM rendering and updates
```

## 📄 File Responsibilities

### `index.html`

Provides the basic page markup and links scripts & stylesheets.

### `style.css`

Holds all visual styling: layout, colors, fonts, and responsive rules.

### `main.js`

Coordinates the app:

- Imports from `model.js` & `render.js`
- Bridges data and UI
- Initializes the page on load

### `model.js`

Manages data:

- Performs API requests
- Parses and normalizes responses
- Stores any local state

### `render.js`

Handles the DOM:

- Renders page elements
- Updates the UI when data changes

## 🚀 Getting Started

1. **Clone** the repository
   ```bash
   git clone &lt;your-repo-url&gt;
   ```
2. **Open** `index.html` in your browser
3. **Hack away!** Build awesome features step‑by‑step 🔥

## ⚙️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6 Modules)**
