// Your code goes here

// Clearing up elements for loading screen
// ---------------------------------------

let containers = Array.from(document.querySelectorAll("body > *")).slice(1);
containers.forEach(element => element.style.display ="none");

document.body.style.backgroundColor = "#201E1E";

// When the page finally loads
window.addEventListener("load", function() {
  let loadScreen = document.querySelector("#loading-container");
  document.body.removeChild(loadScreen);
  document.body.removeAttribute("style");
  containers.forEach(element => element.removeAttribute("style"));
});