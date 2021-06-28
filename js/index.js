// Your code goes here

// Selectors
const intro = document.querySelector(".intro");
const introImg = document.querySelectorAll(".intro > img");
const introHeader = document.querySelector(".intro > h2");
const introPara = document.querySelector(".intro > p");
const navLinks = document.querySelector(".nav");
const navContainer = document.querySelector(".nav-container");
const body = document.querySelector("body");
const content = document.querySelectorAll(".content-section");
const img = document.querySelectorAll("img");
const destination = document.querySelectorAll(".destination");
const footer = document.querySelector("footer");

// Event listeners

const allLinks = document.links;
const allLinksArray = Array.from(allLinks);

allLinksArray.forEach((link) => {
  link.addEventListener("mouseover", (event) => {
    link.style.color = "crimson";
  });
});

allLinksArray.forEach((link) => {
  link.addEventListener("mouseout", (event) => {
    link.style.color = "green";
  });
});

for (let i = 0; img.length; i++) {
  img[i].addEventListener("click", (event) => {
    img[i].style.borderRadius = "50%";
  });
}
