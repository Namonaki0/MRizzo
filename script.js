const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const navUl = document.querySelector("ul");
const navLis = document.querySelectorAll("nav > ul > li");
const menuBarOne = document.querySelector(".bar-one");
const menuBarTwo = document.querySelector(".bar-two");
const menuBarThree = document.querySelector(".bar-three");
const routerOutlet = document.querySelector("#router-outlet");

burgerMenu.addEventListener("click", () => {
  navUl.classList.toggle("open-menu");
  nav.classList.toggle("open-menu");
  routerOutlet.classList.toggle("open-menu");
  menuBarOne.classList.toggle("effect");
  menuBarTwo.classList.toggle("effect");
  menuBarThree.classList.toggle("effect");
});

navLis.forEach((navLi) => {
  navLi.addEventListener("click", () => {
    nav.classList.remove("open-menu");
    navUl.classList.remove("open-menu");
    menuBarOne.classList.remove("effect");
    menuBarTwo.classList.remove("effect");
    menuBarThree.classList.remove("effect");
    routerOutlet.classList.remove("open-menu");
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const logo = document.querySelector(".logo");
  if (window.scrollY > 0) {
    nav.classList.add("scroll-effect");
    logo.classList.add("scroll-effect");
    burgerMenu.classList.add("scroll-effect");
  } else {
    nav.classList.remove("scroll-effect");
    logo.classList.remove("scroll-effect");
    burgerMenu.classList.remove("scroll-effect");
  }
});

console.log(nav.classList);

import RouterHandler from "./router.js";

class Routing {
  constructor() {
    new RouterHandler();
  }
}

new Routing();
