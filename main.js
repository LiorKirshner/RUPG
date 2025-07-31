import { Model } from "./model.js";
import { Renderer } from "./render.js";

const model = new Model();
const renderer = new Renderer();

// Fetch and render user only on button click
document.getElementById("loadUserBtn").addEventListener("click", async () => {
  $("#intro-btn").hide(); // Hide the button container
  $("#content").show(); // Show the main content

  try {
    const users = await model.fetchUsers();
    const mainUser = users[0];
    const friends = users.slice(1, 7);

    renderer.renderUser(mainUser);
    renderer.renderFriends(friends);
  } catch (err) {
    console.error("Error loading users:", err.message);
  }
});
