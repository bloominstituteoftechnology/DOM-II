// Your code goes here

// Clearing up elements for loading screen
// ---------------------------------------

let containers = Array.from(document.querySelectorAll("body > *")).slice(1);
containers.forEach(element => element.style.display ="none");

document.body.style.backgroundColor = "#201E1E";

let minutesCount = 0;
let secondsCount = 0;
let millisecondsCount = 0;

// Code for loading time counter IIFE
(() => {
  const timerDisplay = document.querySelector(".timer-display");

  const minutesDisplay = document.querySelector("#min");
  const secondsDisplay = document.querySelector("#sec");
  const millisecondsDisplay = document.querySelector("#ms");

  let timer = window.setInterval(() => {
      if (++millisecondsCount === 100) {
          if (++secondsCount === 60) {
            minutesDisplay.textContent = String(++minutesCount).padStart(2, '0');
            secondsDisplay.textContent = millisecondsDisplay.textContent = String(secondsCount = millisecondsCount = 0).padStart(2, '0');
          } else {
            secondsDisplay.textContent = String(secondsCount).padStart(2, '0');
            millisecondsDisplay.textContent = String(millisecondsCount = 0).padStart(2, '0');
          }
      } else {
          millisecondsDisplay.textContent = String(millisecondsCount).padStart(2, '0');
      }
  }, 10);
})();

// When the page finally loads
window.addEventListener("load", e => {
  let loadScreen = document.querySelector("#loading-container");
  document.body.removeChild(loadScreen);
  document.body.removeAttribute("style");
  containers.forEach(element => element.removeAttribute("style"));

  const minutesStr = String(minutesCount).padStart(2, '0');
  const secondsStr = String(secondsCount).padStart(2, '0');
  const millisecondsStr = (millisecondsCount === 1 ? "<=" : "") + String(millisecondsCount * 10);

  alert(`Your page is ready!\n\nPage load time: ${minutesStr}min : ${secondsStr}sec : approx. ${millisecondsStr}ms.`);
});

// After page has been loaded
// --------------------------

const aTagElements = document.querySelectorAll("a");

// Event to disable default <a> element behavior and display alert
aTagElements.forEach(element => {
  element.addEventListener("click", e => {
    e.preventDefault();
    alert("Sorry user, you are confined to this page (for now).");
  });
});