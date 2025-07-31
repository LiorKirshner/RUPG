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

  let allUsers = JSON.parse(localStorage.getItem("users")) || {};

  // Remove oldest entry if size exceeds 4 (before adding new one = 5 max)
  const keys = Object.keys(allUsers);
  if (!allUsers[key] && keys.length >= 5) {
    const oldestKey = keys[0];
    delete allUsers[oldestKey];

    // Also remove option from dropdown if it exists
    const optionToRemove = document.querySelector(
      `#savedUsersSelect option[value="${oldestKey}"]`
    );
    if (optionToRemove) optionToRemove.remove();
  }

  allUsers[key] = data;
  localStorage.setItem("users", JSON.stringify(allUsers));

  // Add new option to dropdown if not already there
  const select = document.getElementById("savedUsersSelect");
  if (!select.querySelector(`option[value="${key}"]`)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    select.appendChild(option);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loadUserBtn").addEventListener("click", () => {
    const selectedKey = document.getElementById("savedUsersSelect").value;
    const allUsers = JSON.parse(localStorage.getItem("users")) || {};
    const savedData = allUsers[selectedKey];

    if (!savedData) return alert("No saved data found.");

    renderer.renderUserPage(savedData);
  });
});
