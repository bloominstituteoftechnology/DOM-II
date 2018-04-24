const startButton = document.getElementById("start-button");
const ctaText = document.getElementById("big-text");
console.log(ctaText);
startButton.addEventListener("click", () => ctaText.setAttribute("style", "color:red"));
