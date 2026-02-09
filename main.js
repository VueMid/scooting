let div = document.querySelector(".header__mb-div");
let openburger = document.querySelector(".header__open-burger");
let closeburger = document.querySelector(".header__close-burger");
let links = document.querySelectorAll(".header__mb-links-texts");
let button = document.querySelector(".header__mb-button");
openburger.addEventListener("click", () => {
  div.style.opacity = "1";
  closeburger.style.display = "block";
  openburger.style.display = "none";
});
closeburger.addEventListener("click", () => {
  div.style.opacity = "0";
  closeburger.style.display = "none";
  openburger.style.display = "block";
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    div.style.opacity = "0";
    closeburger.style.display = "none";
    openburger.style.display = "block";
  });
});
button.addEventListener("click", () => {
  div.style.opacity = "0";
  closeburger.style.display = "none";
  openburger.style.display = "block";
});