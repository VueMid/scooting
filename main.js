let div = document.querySelector(".header__mb-div");
let openBurger = document.querySelector(".header__open-burger");
let closeBurger = document.querySelector(".header__close-burger");
let links = document.querySelectorAll(".header__mb-links-texts");
let button = document.querySelector(".header__mb-button");
openBurger.addEventListener("click", () => {
  closeBurger.style.display = "block";
  openBurger.style.display = "none";
  div.style.opacity = "1";
});
closeBurger.addEventListener("click", () => {
  closeBurger.style.display = "none";
  openBurger.style.display = "block";
  div.style.opacity = "0";
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    closeBurger.style.display = "none";
    openBurger.style.display = "block";
    div.style.opacity = "0";
  });
});
button.addEventListener("click", () => {
  closeBurger.style.display = "none";
  openBurger.style.display = "block";
  div.style.opacity = "0";
});