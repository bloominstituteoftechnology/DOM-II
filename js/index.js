// Your code goes here

// List of events
const eventListStr = {
  loadEventStr: "\"load\": Loading screen with page load time counter\n\n",
  clickEventStr: "\"click\": Default link behavior is disabled; a message is displayed instead upon clicking\n\n",
  mouseoverEventStr: "\"mouseover\": Mimic the hover pseudoclass on the Fun Bus logo (making it behave like a link, with click event also added)\n\n",
  dblclickEventStr: "\"dblclick\": Image overlay (with working close button) upon double-clicking on a photo\n\n",
  changeEventStr: "\"change\": Page color theme selector\n\n",
  keydownEventStr: "\"keydown\": Display this alert upon pressing the F1 key\n\n",
  focusEventStr: "\"focus\": Display dark overlay upon having the theme select menu on focus\n\n",
  blurEventStr: "\"blur\": Remove dark overlay upon clearing focus from the theme select menu (this effect will also happen when a new theme is selected)\n\n"
};

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

  alert(`Your page is ready! Press F1 while on the page to display the event implementations list.\n\nPage load time: ${minutesStr}min : ${secondsStr}sec : approx. ${millisecondsStr}ms.`);
});

// AFTER PAGE HAS BEEN LOADED
// ==========================


// Normal individual page element query selectors
const navArea = document.querySelector(".main-navigation");
const homeArea = document.querySelector(".home");
const footerArea = document.querySelector("footer");
const themeSelect = document.querySelector("#theme-selection");
const headerLogo = document.querySelector(".logo-heading");

// Normal grouped page element query selectors
const themeOptions = document.querySelectorAll("#theme-selection > option");
const aTagElements = document.querySelectorAll("a");
const imgElements = document.querySelectorAll("img");
const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a");
const buttons = document.querySelectorAll("button");

// Overlay element query selectors
const overlayElements = document.querySelectorAll(".overlay-main-container *");
const overlayArea = document.querySelector(".overlay-main-container");
const overlayBackground = document.querySelector(".overlay-background");
const overlayImage = document.querySelector(".overlay-image");

// Click event to disable default <a> element behavior and display alert
aTagElements.forEach(element => {
  element.addEventListener("click", e => {
    e.preventDefault();
    alert("Sorry, user. You are confined to this page (for now).");
  });
})

// Mouseover and click events to make the header logo behave like a link
headerLogo.addEventListener("mouseover", e => headerLogo.style.cursor = "pointer");
headerLogo.addEventListener("click", e => {
  e.preventDefault();
  alert("Sorry, user. You are confined to this page (for now).");
});

// Event to display image overlay view of double-clicked image
imgElements.forEach(imgElement => {
  imgElement.addEventListener("dblclick", e => {
    overlayElements.forEach(overlayElement => {
      overlayElement.style.display = "block";
    })
    overlayImage.src = imgElement.src;
  });
})

// Events to remove image overlay upon clicking outside of the image
overlayArea.addEventListener("click", e => {
  overlayElements.forEach(overlayElement => {
    overlayElement.removeAttribute("style");
  })
});
// Stops event propagation to prevent closing the overlay when clicking on the image area
overlayImage.addEventListener("click", e => {
  e.stopImmediatePropagation();
});


// Event to change page colors upon selecting a theme
themeSelect.addEventListener("change", e => {
  document.activeElement.blur();
  if (event.currentTarget.value === "dark") {
    themeSelect.style.color = "white";
    textElements.forEach(element => element.style.color = "white");

    themeOptions.forEach(option => {
      option.style.backgroundColor = "#212529";
    })
    mainContainer.style.backgroundColor = themeSelect.style.backgroundColor = navArea.style.backgroundColor = homeArea.style.backgroundColor = "#212529";
    footerArea.style.backgroundColor = "#001432";
  } else { // Original and other undefined themes
    themeSelect.removeAttribute("style");
    textElements.forEach(element => element.removeAttribute("style"));    
    
    themeOptions.forEach(option => {
      option.removeAttribute("style");
    })

    mainContainer.removeAttribute("style");
    themeSelect.removeAttribute("style");
    navArea.removeAttribute("style");
    homeArea.removeAttribute("style");
    footerArea.removeAttribute("style");
  }
});

// Event to have a list of page events pop up upon pressing the F1 key
window.addEventListener("keydown", e => {
  if (e.key === "F1") {
    alert("List of events on this page and their implementations:\n\n"
      + Object.values(eventListStr).reduce((acc, str) => acc + str).trim());
  }
});

themeSelect.addEventListener("focus", e => {
  overlayBackground.style.display = "block";
  overlayBackground.style.zIndex = "1";
})

themeSelect.addEventListener("blur", e => overlayBackground.removeAttribute("style"));