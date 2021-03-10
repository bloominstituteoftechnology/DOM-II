/* ### Task 2: Create listeners for 10 types of events *** have fun and create events listeners**

* [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
  * `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`

Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
*/
//1

const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", function (event) {
  event.target.style.color = "orange";
});

//2
const title = document.querySelector("h1");
title.addEventListener("mouseenter", function (event) {
  event.target.style.color = "crimson";
});

const firstImg = document.querySelector(".intro");

firstImg.addEventListener("dblclick", function (e) {
  e.target.style.color = "blue";
});

// const content = document.querySelector(".text-content");
// content.addEventListener("keydown", (event) => {
//   if (event.key === 'Tab') {
//     content.
//   }
//   // do something
// });

let para = document.querySelector(".img-content");
para.addEventListener("click", function (e) {
  alert(
    "lordkdjfh. djdikdPress wanderlust darn simple organized.dPress wanderlust darn simple organized.dPress wanderlust darn simple organized.dPress wanderlust darn simple organized.dPress wanderlust darn simple organized.dPress wanderlust darn simple organized.dPress wanderlust darn simple organized.dkdjjjkdem "
  );
});

/* Selecting DOM element */
const button = document.querySelector("button");

/* Callback function */
function alertButton() {
  alert("Hi native JavaScript");
}

/* Event listener */
button.addEventListener("click", alertButton, false);

//////  hidden text button !!!!!!
/* Selecting DOM elements */
const revealButton = document.querySelector(".reveal-button");
const hiddenSection = document.querySelector(".hidden-section");

/* Callback function */
function revealSection() {
  if (hiddenSection.classList.contains("reveal")) {
    hiddenSection.classList.remove("reveal");
  } else {
    hiddenSection.classList.add("reveal");
  }
}

/* Event listener */
revealButton.addEventListener("click", revealSection, false);

// window size!!!!!!!!!!!
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener("resize", reportWindowSize);

heightOutput.addEventListener("mouseover", function (event) {
  event.target.style.color = "red";
});

////form reset !!!!!!!!!!
function logReset(event) {
  log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("reset", logReset);

//form submit !!!!!!!!

function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
