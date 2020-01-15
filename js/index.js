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
h2List.forEach(element => {
element.style.color = "purple";
});
});

// Wheel
const footer = document.querySelector("footer");
footer.addEventListener("wheel", function(e) {
  e.target.style.border = "2px solid green";
});

// Drag / Drop

// Load
window.addEventListener("load", () => {
    alert("Welcome to the FUN BUS!");
  });

// Focus

// Resize

// Scroll

// Select

// Double Click
const card = document.querySelectorAll('h4');
card.forEach(function(card){
  card.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    card.classList.toggle(card.style.color = "orange");
  });
})