// Your code goes here
// ============= EVENT LISTENERS ==================
//1
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
//3

function imgMouseOver() {
  //letsGoImg.style.filter = "grayscale(99%)";
  // letsGoImg.style.position = "relative";
  letsGoImg.style.border = "2px solid black";
}

const letsGoImg = document.getElementById("lets-go-img");

letsGoImg.addEventListener("mouseenter", imgMouseOver);
letsGoImg.addEventListener("mouseleave", imgMouseLeave);
//4
function imgMouseLeave() {
  //letsGoImg.style.filter = "grayscale(0%)";
  letsGoImg.style.border = "none";
}

//5
function stickyBus() {
  //funBus.style.position = "fixed";
  alert("hello");
}
const funBus = document.getElementById("fun-bus");
funBus.addEventListener("scroll", stickyBus);
