let busImage = document.querySelector(".intro img");
let title = document.querySelector("h1");
let footer = document.querySelector("footer");
let destinationTitle = document.querySelector(".content-destination h2");
let destination = document.querySelector(".content-destination");
let navElements = document.querySelectorAll(".nav-link");

busImage.addEventListener("click", (e) => {
  alert("Hello I am Josh and Your computer has virus!");
});

document.body.addEventListener("keydown", (e) => {
  alert(`Stop pressing ${e.key}!`);
});

title.addEventListener("mouseover", (e) => {
  title.textContent = "Click Me!";
});

document.body.addEventListener("wheel", (e) => {
  alert(`Wheel not allowed!`);
});

window.addEventListener("load", (e) => {
  alert(`Welcome!`);
});

document.body.addEventListener("dblclick", (e) => {
  document.body.style.backgroundColor = "blue";
});

window.addEventListener("copy", (e) => {
  alert("Ey stop stealing!");
});

window.addEventListener("resize", (e) => {
  document.body.style.backgroundColor = "green";
});

footer.addEventListener("focus", (e) => {
  alert("You are focusing on the footer!");
});

title.addEventListener("select", (e) => {
  alert("You you have selected the title");
});

destination.addEventListener("click", (e) => {
  alert("You have picked the whole section, how greedy!");
});
destinationTitle.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  alert("You have picked the title!");
});

navElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
