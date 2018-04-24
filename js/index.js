const startButton = document.getElementById("start-button");
const ctaText = document.getElementById("big-text");
const navLinks = document.querySelectorAll(".nav");
const colors = ["red", "blue", "orange", "green", "purple", "yellow", "aqua", "pink"]

window.addEventListener("click", (event) => {
  TweenLite.to(ctaText, 1, {color:colors[Math.floor(Math.random() * colors.length)]});
});

startButton.addEventListener("click", (event) => {
  console.log("Button got clicked")
  event.stopPropagation();
});

navLinks[0].addEventListener("click", (event) => {
  console.log("I got clicked");
  event.stopPropagation();

});
navLinks[1].addEventListener("click", (event) => {
  console.log("I got clicked 2");
  event.stopPropagation();
});
navLinks[2].addEventListener("click", (event) => {
  console.log("I got clicked 3");
  event.stopPropagation();
});
navLinks[3].addEventListener("click", (event) => {
  console.log("I got clicked 4");
  event.stopPropagation();
});
navLinks[4].addEventListener("click", (event) => {
  console.log("I got clicked 5");
  event.stopPropagation();
});
navLinks[5].addEventListener("click", (event) => {
  console.log("I got clicked 6");
  event.stopPropagation();
});
