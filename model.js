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

  async fetchBacon() {
    const text = await this.safeFetch(
      "https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1"
    );
    return text;
  }

  async fetchPokemon() {
    //randomly select from cool list or full Pokédex
    const coolPokemonIds = [6, 25, 94, 149, 197, 448, 282, 143, 248, 658, 384];
    const useCool = Math.random() < 0.5;

    const id = useCool
      ? coolPokemonIds[Math.floor(Math.random() * coolPokemonIds.length)]
      : Math.floor(Math.random() * 1025) + 1;

    const data = await this.safeFetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    return {
      name: data.name,
      image: data.sprites.front_default,
    };
  }
}
