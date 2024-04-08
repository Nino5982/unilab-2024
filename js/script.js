const Header = document.getElementById("header");
const nav = document.getElementById("nav");
const signIn = document.getElementById("sign-in");
const burger = document.getElementById("burger-menu");
const navList = document.getElementById("nav-list");

const mobileNav = document.querySelector(".mobile-menu__navigation");
const mobileMenu =  document.getElementById("mobile-menu");


let scrollTrigger = 60;

// active header on scroll
window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.scrollY >= scrollTrigger) {
    header.classList.add("active-header");
    // nav.classList.add("active-nav");
  } else {
    header.classList.remove("active-header");
    // nav.classList.remove("active-nav");
  }
};

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



addEventListener("resize", (event) => {
      header.classList.remove("active-header");
  burger.classList.remove("open");
    mobileNav.classList.add("hidden");
  mobileMenu.classList.remove("bg-white");


});



// slick

$(document).ready(function(){
  $('.slider').slick({
    
  });
});