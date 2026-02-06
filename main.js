let body = document.querySelector("body");
let navbar = document.querySelector(".header__mb-nav");
let openBurger = document.querySelector(".header__open-burger");
let closeBurger = document.querySelector(".header__close-burger");
let div = document.querySelector(".header__mb-div");
let links = document.querySelectorAll(".header__mb-links-texts");
openBurger.addEventListener("click", () => {
  navbar.style.display = "flex";
  closeBurger.style.display = "block";
  openBurger.style.display = "none";
  div.style.opacity = "1";
  navbar.style.transition = "500ms ease all !important";
  div.style.transition = "500ms ease all !important";
  body.style.overflow = "hidden";
});
closeBurger.addEventListener("click", () => {
  navbar.style.display = "none";
  closeBurger.style.display = "none";
  openBurger.style.display = "block";
  div.style.opacity = "0";
  navbar.style.transition = "500ms ease all !important";
  div.style.transition = "500ms ease all !important";
  body.style.overflow = "auto";
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.style.display = "none";
    closeBurger.style.display = "none";
    openBurger.style.display = "block";
    div.style.opacity = "0";
    navbar.style.transition = "500ms ease all !important";
    div.style.transition = "500ms ease all !important";
    body.style.overflow = "auto";
  });
});