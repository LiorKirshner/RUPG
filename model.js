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
    const data = await this.safeFetch("https://randomuser.me/api/?results=8");

    const mainUser = data.results[0];
    const friends = data.results.slice(1);

    return { mainUser, friends };
  }

  async fetchQuote() {
    const data = await this.safeFetch("https://api.kanye.rest");
    return data.quote;
  }

  async fetchPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const data = await this.safeFetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    return {
      name: data.name,
      image: data.sprites.front_default,
    };
  }
}
