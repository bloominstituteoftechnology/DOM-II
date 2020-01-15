// Your code goes here

// Mouse Over
const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", e => {
  e.target.style.color = "lightgreen";
});

// Key Down
const body = document.querySelector("body");
const h2List = document.querySelectorAll("h2");
body.addEventListener("keydown", () => {
  // h2.style.color = "#7eff77"
  h2List.forEach(element => {
    element.style.color = "purple";
  });
});