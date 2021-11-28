const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const navUl = document.querySelector("ul");
const menuBarOne = document.querySelector(".bar-one");
const menuBarTwo = document.querySelector(".bar-two");
const menuBarThree = document.querySelector(".bar-three");

burgerMenu.addEventListener("click", () => {
  navUl.classList.toggle("open-menu");
  nav.classList.toggle("open-menu");
  menuBarOne.classList.toggle("effect");
  menuBarTwo.classList.toggle("effect");
  menuBarThree.classList.toggle("effect");
});

import RouterHandler from "./router.js";

class Routing {
  constructor() {
    new RouterHandler();
  }
}

new Routing();
