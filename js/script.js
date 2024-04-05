const Header = document.getElementById("header");
const nav = document.getElementById("nav");
const signIn = document.getElementById("sign-in");
let scrollTrigger = 60;

// active header on scroll
window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.scrollY >= scrollTrigger) {
    header.classList.add("active-header");
    signIn.classList.remove("signin");
    signIn.classList.add("hidden");
  } else {
    header.classList.remove("active-header");
  }
};

// sign ion form popup

function openForm() {
  signIn.classList.toggle("hidden");
  signIn.classList.toggle("signin");
}
