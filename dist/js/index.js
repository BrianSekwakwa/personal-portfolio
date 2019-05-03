const toggleButton = document.querySelector("#nav-icon1");
const hiddenMenu = document.querySelector(".menu");

// Events
toggleButton.addEventListener("click", openMenu);

// Functionality for toggle button
$(document).ready(function() {
  $("#nav-icon1").click(function() {
    $(this).toggleClass("open");
  });
});

// Open hidden menu
function openMenu() {
  hiddenMenu.classList.toggle("showMenu");
}
