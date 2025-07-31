export class Model {
  async fetchUsers() {
    const res = await fetch("https://randomuser.me/api/?results=7");
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    return data.results; // Return array of 7 users
  }
}
