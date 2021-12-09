import RouterHandler from "./router.js";
import merch from "./sections/merch.js";
import home from "./sections/home.js";
import videos from "./sections/videos.js";

class Routing {
  constructor() {
    new RouterHandler();
  }
}

new Routing();

//? MENU
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

//? NAVBAR BEHAVIOUR ON SCROLL
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

//? VIDEO SECTION

// const links = [
//   "https://www.youtube.com/embed/CkflepnHbhI",
//   "https://www.youtube.com/embed/ZJtyW6poDww",
//   "https://www.youtube.com/embed/FvuUm89JtLc",
//   "https://www.youtube.com/embed/jL8L97fbZcs",
//   "https://www.youtube.com/embed/ECsDpg-OK3U",
// ];

// const videosWrapper = document.querySelector(".videos-wrapper");
// const videoLibrary = document.querySelector(".video-library-other");

// const productDisplayWrapper = document.querySelectorAll(".merch-display > img");
// const merchDisplay = document.querySelector(".merch-display");
// const merchPageWrapper = document.querySelector(".merch-page-wrapper");
const merchPageModal = document.querySelector("#merch-page-modal");

const productDisplayImgs = document.querySelectorAll(".merch-display > img");
const merchPageModalImg = document.querySelector("#merch-page-modal > img");
const merchPageModalSpan = document.querySelector("#merch-page-modal > span");
productDisplayImgs.forEach((product) => {
  product.addEventListener("click", (e) => {
    console.log("exists");
    merchPageModalImg.src = e.target.src;
    merchPageModal.classList.add("active");
    document.body.classList.add("merch-modal-active");
  });
  merchPageModalSpan.addEventListener("click", () => {
    merchPageModal.classList.remove("active");
    document.body.classList.remove("merch-modal-active");
  });
});
// window.addEventListener("click", () => {
//   merchPageModal.classList.remove("active");
//   document.body.classList.remove("merch-modal-active");
// });
