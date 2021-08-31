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
const siteButtons = document.querySelectorAll("div .btn");
const busPhoto = document.querySelector(".intro img");
const siteBody = document.querySelector("body");

console.log(siteButtons);

// Event Listener 1 (Hover over header to make it grey)
header.addEventListener("mouseover", (event) => {
  header.style.backgroundColor = "grey";
  header.style.color = "white";
  event.stopPropagation();
});

// Event Listener 2 (Remove your mouse from the header to make the header white)
header.addEventListener("mouseleave", (event) => {
  header.style.backgroundColor = "white";
  header.style.color = "black";
  event.stopPropagation();
});

// Event Listener 3 (Click on a button to toggle between orange and white background)
siteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.style.backgroundColor === "orange") {
      button.style.backgroundColor = "white";
      button.style.color = "black";
    } else {
      button.style.backgroundColor = "orange";
      button.style.color = "white";
    }
    event.stopPropagation();
  });
});

// Event Listener 4 (Press any key for an alert message)
document.addEventListener("keydown", (event) => {
  alert("You pressed a key!");
});

// Event Listener 5 (Double click the bus photo for an alert message)
busPhoto.addEventListener("dblclick", (event) => {
  alert("You double-clicked the bus photo!");
});

// Event Listener 6 (Scroll down from the top to make the background light yellow)
document.addEventListener("scroll", (event) => {
  siteBody.style.transition = "1s";
  siteBody.style.backgroundColor = "lightyellow";
});

// Event Listener 7 (Alert the user when the site loads)
window.addEventListener("load", (event) => {
  alert("The site has been loaded! Welcome!");
});
