function onAuthStateChanged(user) {
  console.log(user);
  if (!user) {
    location.href = "index.html";
  }
}

window.addEventListener("load", function () {
  document.getElementById("sign-out").addEventListener("click", function () {
    firebase.auth().signOut();
    location.href = "index.html";
  });

  //listen for auth state changes
  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  var menu = firebase.database().ref("menu1").orderByChild("flag");
  menu.on("child_added", function (data) {
    var html_menu =
      "<li class='nav-item dropdown'><a href='" +
      data.val().href +
      "' id='mainNavaBlog' class='nav-link' data-bs-toggle='dropdown' aria-haspopup'true' aria-expanded='false'>" +
      data.val().value +
      "</ a></li>";

    document.getElementById("menuTab").innerHTML += html_menu;
  });
});
