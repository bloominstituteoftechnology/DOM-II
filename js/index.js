// Your code goes here
let test = document.getElementsByTagName("header")[0];
test.addEventListener(
  "mouseover",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "orange";
    event.target.style.text = "roboto";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);

let example = document.querySelector("header.intro");
example.addEventListener(
  "dblclick",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "brown";
    event.target.style.text = "roboto";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);

let changeSize = document.querySelector("img");
changeSize.addEventListener(
  "click",
  function(event) {
    // highlight the mouseover target
    event.target.style.borderRadius = "50px";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.borderRadius = 0;
    }, 500);
  },
  false
);

let doTheDo = document.querySelector("div.img-content");
doTheDo.addEventListener(
  "click",
  function(event) {
    // highlight the mouseover target
    event.target.style.borderRadius = "50px";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.borderRadius = 0;
    }, 500);
  },
  false
);

let tikTok = document.querySelector("section.content-section");
tikTok.addEventListener(
  "dblclick",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "blue";
    event.target.style.text = "sans-serif";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);

let Jesussaves = document.querySelector("section.content-destination");
Jesussaves.addEventListener(
  "mouseover",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "green";
    event.target.style.text = "sans-serif";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);

let yhhh = document.querySelector("section.content-section.inverse-content");
yhhh.addEventListener(
  "mouseover",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "orange";
    event.target.style.text = "sans-serif";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);

let toTest = document.querySelector("div.destination");
toTest.addEventListener(
  "mouseover",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "pink";
    event.target.style.text = "roboto";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);
document.querySelector("div.destination");
toTest.addEventListener(
  "dblclick",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "grey";
    event.target.style.text = "roboto";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);
let navigationItems = document.getElementsByTagName("a");
navigationItems.forEach(addEventListener)(
  "click",
  navigationItems.forEach(event)
);
