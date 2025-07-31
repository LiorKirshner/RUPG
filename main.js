import { Model } from "./model.js";
import { Renderer } from "./render.js";

const model = new Model();
const renderer = new Renderer();

// Fetch and render user only on button click
document.getElementById("loadUserBtn").addEventListener("click", async () => {
  try {
    const user = await model.fetchUserData();
    renderer.renderUser(user);
  } catch (err) {
    console.error("Error loading user:", err.message);
  }
});
