export class Model {
  async fetchUserData() {
    const res = await fetch("https://randomuser.me/api/?results=1");
    if (!res.ok) throw new Error("Failed to fetch user");
    const data = await res.json();
    return data.results[0]; // Return the first user only
  }
}
