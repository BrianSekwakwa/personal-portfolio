const toggleButton = document.querySelector("#nav-icon1");
const hiddenMenu = document.querySelector(".menu");
const hiddenMenuLinks = document.querySelectorAll(".menu__links a");

// Initializing AOS
AOS.init();

// Events
toggleButton.addEventListener("click", openMenu);
hiddenMenuLinks.forEach(item => {
  item.addEventListener("click", closeOnClick);
});

// Functionality for toggle button
$(document).ready(function() {
  $("#nav-icon1").click(function() {
    $(this).toggleClass("open");
  });
});

// Smooth Scrolling
$("ul a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// Open hidden menu
function openMenu() {
  hiddenMenu.classList.toggle("showMenu");
}

// Close hidden menu when menu links are clicked
function closeOnClick() {
  hiddenMenu.classList.remove("showMenu");
  toggleButton.classList.remove("open");
}
