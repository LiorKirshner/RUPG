export class Renderer {
  renderUser(user) {
    $(".profile-name").text(`${user.name.first} ${user.name.last}`);
    $(".profile-image").attr("src", user.picture.large);
    $(".profile-location").text(
      `${user.location.city}, ${user.location.state}`
    );
  }

  renderFriends(friends) {
    const $list = $(".friends-list");
    $list.empty();

    friends.forEach((friend) => {
      $list.append(`<li>${friend.name.first} ${friend.name.last}</li>`);
    });
  }

  renderQuote(quote) {
    $(".quote-text").text(`"${quote}"`);
  }

  renderPokemon(pokemon) {
    const properName =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    $(".pokemon-name").text(`Favorite Pokémon: ${properName}`);
    $(".pokemon-image").attr("src", pokemon.image);
  }
  renderBacon(text) {
    $(".about-text").text(text);
  }

  renderUserPage(data) {
    this.renderUser(data?.mainUser || null);
    this.renderFriends(data?.friends || []);
    this.renderQuote(data?.quote || null);
    this.renderPokemon(data?.pokemon || null);
    this.renderBacon(data?.bacon || null);
  }
}
