const navLink = document.querySelector("nav");

navLink.addEventListener("click", (evt) => {
  evt.target.style.color = "red";
});

const header = document.querySelector(".intro");

header.addEventListener("click", (evt) => {
  evt.target.style.color = "royalblue";
  evt.target.style.backgroundColor = "yellow";
});

const textContent = document.querySelector(".text-content");

textContent.addEventListener("mouseover", (evt) => {
  evt.target.style.backgroundColor = "black";
  evt.target.style.color = "white";
  evt.target.font = "font-smaller";
});

const textContent2 = document.querySelector(".inverse-content");

textContent2.addEventListener("mouseenter", (evt) => {
  evt.target.style.backgroundColor = "black";
  evt.target.style.color = "white";
  evt.target.font = "font-smaller";
});

const h1 = document.querySelector("h1");

h1.addEventListener("dblclick", (evt) => {
  evt.target.textContent = "Bus Fun";
});

const doom = document.querySelector(".content-destination h2");

doom.addEventListener("mouseover", (evt) => {
  evt.target.textContent = " Your dooms day vaction starts now";
  evt.target.style.color = "darkred";
});

const btn = document.querySelector(".content-pick");
btn.querySelector(".btn");
btn.addEventListener("mouseenter", (evt) => {
  evt.target.textContent = "turn back while you can";
});
