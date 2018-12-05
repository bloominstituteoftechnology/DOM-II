// Your code goes here

// CLEARING UP ELEMENTS FOR LOADING SCREEN
// =======================================

let mainContainer = document.querySelector("#main-container")
mainContainer.style.display ="none";

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
  mainContainer.removeAttribute("style");

  const minutesStr = String(minutesCount).padStart(2, '0');
  const secondsStr = String(secondsCount).padStart(2, '0');
  const millisecondsStr = (millisecondsCount === 1 ? "<=" : "") + String(millisecondsCount * 10);

  alert(`Your page is ready!\n\nPage load time: ${minutesStr}min : ${secondsStr}sec : approx. ${millisecondsStr}ms.`);
});

// AFTER PAGE HAS BEEN LOADED
// ==========================


// Normal page element query selectors
const headerLogo = document.querySelector(".logo-heading");
const aTagElements = document.querySelectorAll("a");
const imgElements = document.querySelectorAll("img");

// Overlay element query selectors
const overlayElements = document.querySelectorAll(".overlay-container *");
const overlayImage = document.querySelector(".overlay-image");

// Click event to disable default <a> element behavior and display alert
aTagElements.forEach(element => {
  element.addEventListener("click", e => {
    e.preventDefault();
    alert("Sorry, user. You are confined to this page (for now).");
  })
});

// Mouseover and click events to make the header logo behave like a link
headerLogo.addEventListener("mouseover", e => headerLogo.style.cursor = "pointer");
headerLogo.addEventListener("click", e => {
  e.preventDefault();
  alert("Sorry, user. You are confined to this page (for now).");
});

// Event to display image overlay view of double-clicked image
imgElements.forEach(imgElement => {
  imgElement.addEventListener("dblclick", e => {
    overlayElements.forEach(overlayElement => overlayElement.style.display = "block");
    overlayImage.src = imgElement.src;
  })
})