const startButton = document.getElementById("start-button");
const ctaText = document.getElementById("big-text");
const navLinks = document.querySelectorAll(".nav");
const colors = ["red", "blue", "orange", "green", "purple", "yellow", "aqua", "pink"]

startButton.addEventListener("click", () => TweenLite.to(ctaText, 1, {color:colors[Math.floor(Math.random() * colors.length)]}));
