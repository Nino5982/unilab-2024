const Header = document.getElementById("header");
const nav = document.getElementById("nav");
const signIn = document.getElementById("sign-in");
const burger = document.getElementById("burger-menu");
let scrollTrigger = 60;

// active header on scroll
window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.scrollY >= scrollTrigger) {
    header.classList.add("active-header");
   
  } else {
    header.classList.remove("active-header");
  }
};

// sign in form popup

function openForm() {
   header.classList.toggle("active-header");
  signIn.classList.toggle("hidden");
  signIn.classList.toggle("signin");
  
}


// burger
function openMobileMenu() {
  burger.classList.toggle("open")
  
}