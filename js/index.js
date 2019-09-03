// Your code goes here
// ============= EVENT LISTENERS ==================
//1
//created a new class to add to all the headers to make them big
const headers = document.querySelectorAll("h2");
for (let i = 0; i < headers.length; i++) {
  headers[i].className += " big";
  console.log(headers[i].className);
}
//2
const hOne = document.querySelector("h1");
hOne.addEventListener("click", function() {
  alert("Yo, that tickled");
});
//3 changing the border of an image

function imgMouseOver() {
  //letsGoImg.style.filter = "grayscale(99%)";
  // letsGoImg.style.position = "relative";
  letsGoImg.style.border = "2px solid black";
}
// putting all images into variables:
const letsGoImg = document.getElementById("lets-go-img");
const adventureImg = document.getElementById("adventure-img");
const funBus = document.getElementById("fun-bus");
const pickDestImg = document.getElementById("pick-destination-img");

letsGoImg.addEventListener("mouseenter", imgMouseOver);
letsGoImg.addEventListener("mouseleave", imgMouseLeave);

//4
function imgMouseLeave() {
  //letsGoImg.style.filter = "grayscale(0%)";
  letsGoImg.style.border = "none";
}

//5
/* function scaleBus() {
  funBus.style.transform = "scale(1.2)";
  funBus.style.transition = "all 0.5s";
}

funBus.addEventListener("mouseenter", scaleBus);
//6
funBus.addEventListener("mouseleave", shirnkBus);
function shirnkBus() {
  funBus.style.transform = "scale(1.0)";
  funBus.style.transition = "all 0.5s";
} */

//7 putting all pics into an array and adding the same listeners/events
const picsArr = [letsGoImg, adventureImg, funBus, pickDestImg];
// adding event listeners to all items to transfrom to larger images
picsArr.forEach(item => {
  item.addEventListener("mouseenter", event => {
    item.style.transform = "scale(1.2)";
    item.style.transition = "all 0.5s";
    item.style.cursor = "pointer";
    item.style.overflow = "hidden";
    event.stopPropagation();
  });
  item.addEventListener("mouseleave", event => {
    item.style.transform = "scale(1)";
    item.style.transition = "all 0.5s";
  });
});

//8 adding mouse events to headers to make them itallics when scrolled over
headers.forEach(item => {
  item.addEventListener("mouseenter", event => {
    item.style.fontStyle = "italic";
    item.style.cursor = "pointer";
  });
  item.addEventListener("mouseleave", event => {
    item.style.fontStyle = "normal";
  });
});

const paraGraphs = document.querySelectorAll("p");
paraGraphs.forEach(item => {
  item.addEventListener("mouseenter", event => {
    item.style.fontWeight = "bolder";
    item.style.cursor = "pointer";
  });
  item.addEventListener("mouseleave", event => {
    item.style.fontWeight = "normal";
  });
});

// stopping event propagation gave the sections click background turns light blue
const section = document.querySelectorAll(".content-section");
section.forEach(item =>
  item.addEventListener("click", event => {
    item.style.background = "lightblue";
  })
);
// stop the click event from propagating up to the section, preventing the color changing to light blue.
paraGraphs.forEach(item => {
  item.addEventListener("click", event => {
    item.style.fontWeight = "bolder";
    item.style.cursor = "pointer";
    event.stopPropagation();
  });
});

// Stop the navigation from items from refreshing the page by using `preventDefault()` ===> linked all the tags to google.com but prevented navigation.
const allATags = document.querySelectorAll("a");
allATags.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
  });
});
