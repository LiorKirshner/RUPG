import { Model } from "./model.js";
import { Renderer } from "./render.js";

const model = new Model();
const renderer = new Renderer();

document.getElementById("loadUserBtn").addEventListener("click", async () => {
  try {
    await loadUsers(); // Must succeed first
  } catch (err) {
    console.error("Critical error: could not load main user data");
    return;
  }
  // Hide intro button and show main content
  $("#intro-btn").hide();
  $("#content").show();
  // Load additional data in parallel
  await loadQuote();
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
