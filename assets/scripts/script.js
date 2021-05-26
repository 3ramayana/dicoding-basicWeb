// SHOW AND HIDE MENU
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("menu");
const spanToggle = document.querySelector(".menu-toggle span");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  spanToggle.classList.toggle("toggle-effect");
});
