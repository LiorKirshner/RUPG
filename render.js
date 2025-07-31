export class Renderer {
  renderUser(user) {
    $(".profile-name").text(`${user.name.first} ${user.name.last}`);
    $(".profile-image").attr("src", user.picture.large);
    $(".profile-location").text(
      `${user.location.city}, ${user.location.state}`
    );
  }

  renderFriends(friends) {
    //friends data
    const $list = $(".friends-list");
    $list.empty();

    friends.forEach((friend) => {
      const fullName = `${friend.name.first} ${friend.name.last}`;
      $list.append(`<li>${fullName}</li>`);
    });
  }
}
