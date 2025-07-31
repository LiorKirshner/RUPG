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
  localStorage.setItem("savedUserPage", JSON.stringify(data));
});

document.getElementById("loadUserBtn").addEventListener("click", () => {
  const savedData = JSON.parse(localStorage.getItem("savedUserPage"));
  if (!savedData) return alert("No saved data found.");

  renderer.renderUser(savedData.mainUser);
  renderer.renderFriends(savedData.friends);
  renderer.renderQuote(savedData.quote);
  renderer.renderPokemon(savedData.pokemon);
  renderer.renderBacon(savedData.bacon);
});
