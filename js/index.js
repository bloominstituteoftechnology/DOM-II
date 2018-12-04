// Your code goes here

const yellowbus = document.querySelector(".intro img");

yellowbus.addEventListener("mouseover", function(event) {
    yellowbus.style.border="1px solid blue";
})

const home = document.querySelector("body");

home.addEventListener('keydown', function(event) {
    event.stopPropagation();
    home.classList.toggle("goblue");
  });