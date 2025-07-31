export class Model {
  async safeFetch(url) {
    // A reusable helper for all API requests
    // Handles fetch, response validation, and JSON parsing in one place
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch from ${url}`);
    const data = await res.json();
    return data;
  }

  async fetchUsers() {
    const data = await this.safeFetch("https://randomuser.me/api/?results=7");
    return data.results;
  }

  async fetchQuote() {
    const data = await this.safeFetch("https://api.kanye.rest");
    return data.quote;
  }
}
