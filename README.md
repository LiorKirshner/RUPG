# 📄 Random User Page Generator

A simple modular JavaScript project that generates a random user profile using data from public APIs.  
Built with HTML, CSS, and vanilla JS using a clean separation of concerns.

---

## 📁 Project Structure

├── index.html # The main HTML file – basic structure of the page
├── style.css # All styles and visual design
├── main.js # Entry point: coordinates logic, initializes app
├── model.js # Handles data logic – fetching, transforming, storing
├── render.js # Responsible for rendering DOM elements

---

## 🔹 File Responsibilities

### `index.html`

Contains the root structure of the web page. It loads all necessary scripts and links the CSS file.

### `style.css`

Defines all visual styling for the project – layout, colors, fonts, etc.

### `main.js`

Acts as the app’s main controller. It:

- Imports functions from `model.js` and `render.js`
- Orchestrates the interaction between data and UI
- Initializes the page on load

### `model.js`

Deals with all data-related functionality:

- API requests
- Data parsing
- Local state (if any)

### `render.js`

Contains all DOM-related code:

- Renders elements to the screen
- Updates the view when data changes

---

## ✅ Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start coding and build awesome features step-by-step!

---

## 🚀 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6 Modules)
