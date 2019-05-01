const toggleButton = document.querySelector("#nav-icon1");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", openMenu);

// Functionality for toggle button
$(document).ready(function() {
  $("#nav-icon1").click(function() {
    $(this).toggleClass("open");
  });
});

function openMenu() {
  menu.classList.toggle("show-menu");
}
