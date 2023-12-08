function onAuthStateChanged(user) {
  console.log(user);
  if (!user) {
    location.href = "index.html";
  }
}

window.addEventListener("load", function () {
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

  var projects = firebase.database().ref("projects").orderByChild("flag");
  console.log(projects);
  projects.on("child_added", function (data) {
    var html_projects =
      '<div class="col-4"> <a href="#" class="w-25 p-2 shadow-md rounded text-center text-decoration-none"> <img class="img-fluid rounded w-100" src="' +
      data.val().img +
      '" alt="' +
      data.val().description +
      '"> <h3 class="h6 my-3 w-100"> <span class="text-dark">' +
      data.val().title +
      "</span> </h3> </a> </div>";

    document.getElementById("projectsTab").innerHTML += html_projects;
  });
});
