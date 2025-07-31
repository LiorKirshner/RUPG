export class Renderer {
  renderUser(user) {
    $("#app").html(`
      <h2>${user.name.first} ${user.name.last}</h2>
      <img src="${user.picture.large}" alt="User Picture" />
    `);
  }
}
