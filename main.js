import { Model } from "./model.js";
import { Renderer } from "./render.js";

const model = new Model();
const renderer = new Renderer();

document
  .getElementById("generateUserBtn")
  .addEventListener("click", async () => {
    try {
      await loadUsers(); // Must succeed first
    } catch (err) {
      console.error("Critical error: could not load main user data");
      return;
    }
    // Load additional data in parallel
    await loadQuote();
    await loadPokemon();
    await loadBacon();
  });

async function loadUsers() {
  try {
    const { mainUser, friends } = await model.fetchUsers();
    renderer.renderUser(mainUser);
    renderer.renderFriends(friends);
  } catch (err) {
    console.error("Error loading users:", err.message);
  }
}

async function loadQuote() {
  try {
    const quote = await model.fetchQuote();
    renderer.renderQuote(quote);
  } catch (err) {
    console.error("Error loading quote:", err.message);
  }
}

async function loadPokemon() {
  try {
    const pokemon = await model.fetchPokemon();
    renderer.renderPokemon(pokemon);
  } catch (err) {
    console.error("Error loading pokemon:", err.message);
  }
}

async function loadBacon() {
  try {
    const bacon = await model.fetchBacon();
    renderer.renderBacon(bacon);
  } catch (err) {
    console.error("Error loading Bacon Ipsum API:", err.message);
  }
}

document.getElementById("saveUserBtn").addEventListener("click", () => {
  const data = model.getData();
  const key = `${data.mainUser.name.first} ${data.mainUser.name.last}`;

  // טען את כל המשתמשים והמערך של המפתחות
  let allUsers = JSON.parse(localStorage.getItem("users")) || {};
  let userKeys = JSON.parse(localStorage.getItem("userKeys")) || [];

  // אם המשתמש כבר קיים, הסר אותו מהמערך כדי להכניס אותו מחדש בסוף
  userKeys = userKeys.filter((k) => k !== key);

  // הוסף את המשתמש החדש בסוף המערך
  userKeys.push(key);
  allUsers[key] = data;

  // שמור רק 5 אחרונים
  while (userKeys.length > 5) {
    const oldestKey = userKeys.shift();
    delete allUsers[oldestKey];
    // הסר גם מה-dropdown
    const optionToRemove = document.querySelector(
      `#savedUsersSelect option[value="${oldestKey}"]`
    );
    if (optionToRemove) optionToRemove.remove();
  }

  localStorage.setItem("users", JSON.stringify(allUsers));
  localStorage.setItem("userKeys", JSON.stringify(userKeys));

  // הוסף אופציה ל-dropdown אם לא קיימת
  const select = document.getElementById("savedUsersSelect");
  if (!select.querySelector(`option[value="${key}"]`)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    select.appendChild(option);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Load saved users into dropdown
  const select = document.getElementById("savedUsersSelect");
  const allUsers = JSON.parse(localStorage.getItem("users")) || {};
  const userKeys = JSON.parse(localStorage.getItem("userKeys")) || [];

  userKeys.forEach((key) => {
    if (!select.querySelector(`option[value="${key}"]`)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      select.appendChild(option);
    }
  });

  // Try to load last saved user automatically
  if (userKeys.length > 0) {
    const lastKey = userKeys[userKeys.length - 1];
    renderer.renderUserPage(allUsers[lastKey]);
    select.value = lastKey;
  } else {
    // If no saved user, generate a new one automatically
    document.getElementById("generateUserBtn").click();
  }

  document.getElementById("loadUserBtn").addEventListener("click", () => {
    const selectedKey = document.getElementById("savedUsersSelect").value;
    const allUsers = JSON.parse(localStorage.getItem("users")) || {};
    const savedData = allUsers[selectedKey];

    if (!savedData) return alert("No saved data found.");

    renderer.renderUserPage(savedData);
  });
});
