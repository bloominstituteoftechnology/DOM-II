/*
Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
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
*/

// Selector reference variables
const header = document.querySelector("header");
const buttonSignMeUp = document.querySelector(".btn");

// Event Listener 1
header.addEventListener("mouseover", (event) => {
  header.style.backgroundColor = "black";
  header.style.color = "white";
  event.stopPropagation();
});

// Event Listener 2
header.addEventListener("mouseleave", (event) => {
  header.style.backgroundColor = "white";
  header.style.color = "black";
  event.stopPropagation();
});

// Event Listener 3
buttonSignMeUp.addEventListener("click", (event) => {
  if (buttonSignMeUp.style.backgroundColor === "orange") {
    buttonSignMeUp.style.backgroundColor = "white";
    buttonSignMeUp.style.color = "black";
  } else {
    buttonSignMeUp.style.backgroundColor = "orange";
    buttonSignMeUp.style.color = "white";
  }
});
