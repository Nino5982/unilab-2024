// // active header on scroll
const Header = document.getElementById("header");
const nav = document.getElementById("nav");
let scrollTrigger = 60;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.scrollY >= scrollTrigger) {
    header.classList.add("active-header");
  } else {
    header.classList.remove("active-header");
  }
};

// sign ion form popup

function openForm() {
 nav.classList.toggle("show-popup");
}