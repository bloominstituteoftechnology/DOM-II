// Your code goes here

const logo = document.querySelector("h1");
logo.addEventListener("mouseover", function (event) {
  event.target.style.color = "orange";
});

const logoTwo = document.querySelector("h1");
logoTwo.addEventListener("click", function (event) {
  event.target.style.color = "black";
});

// const navLinks = document.querySelector('a');
// navLinks.addEventListener('mouseover', function(event){
//     event.target.style.text-decoration = "bold"
// })

const navLinks = document.querySelector("nav");
navLinks.addEventListener("click", function (event) {
  event.target.style.fontWeight = "900";
});

const navLinksT = document.querySelector("nav");
navLinksT.addEventListener("dblclick", function (event) {
  event.target.style.fontWeight = "100";
});
//example of something to do
const link = document.querySelectorAll("h2");
Array.from(link).forEach((item) => {
  item.addEventListener(
    "mouseenter",
    (e) => {
      item.style.color = "red";
      e.target.style.fontSize = "6rem";
    },
    false
  );
});
Array.from(link).forEach((item) => {
  item.addEventListener(
    "mouseleave",
    (e) => {
      e.target.style.color = "#666666";
      e.target.style.fontSize = "";
      setTimeout((e) => {
        item.style.color = "";
      }, 600);
    },
    false
  );
});
