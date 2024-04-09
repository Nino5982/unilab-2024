const Header = document.getElementById("header");
const nav = document.getElementById("nav");
const signIn = document.getElementById("sign-in");
const burger = document.getElementById("burger-menu");
const navList = document.getElementById("nav-list");

const mobileNav = document.querySelector(".mobile-menu__navigation");
const mobileMenu = document.getElementById("mobile-menu");

// sign in form popup

function openForm() {
  // navList.classList.toggle("active-nav");
  header.classList.toggle("active-header");
  signIn.classList.toggle("hidden");
  signIn.classList.toggle("signin");
}

// burger
function openMobileMenu() {
  burger.classList.toggle("open");
  mobileNav.classList.toggle("hidden");
  mobileMenu.classList.toggle("bg-white");
}
