// Your code goes here
// --- have the logo wobble on mouseenter/mouseleave
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseenter", function (){
  logoHeading.classList.toggle("animate-wobble");
});
logoHeading.addEventListener("mouseleave", function (){
  logoHeading.classList.toggle("animate-wobble");
});

// --- make the whole page vibrate while a key is pressed
const html = document.querySelector("html");
html.addEventListener("keydown", function (){
  html.classList.add("vibrate");
});
html.addEventListener("keyup", function (){
  html.classList.remove("vibrate");
});

// --- have a bus travel back and forth across the nav during wheel events
const aBus = document.querySelector("#a-bus");
let busOffset = 200;
let goLeft = false;
html.addEventListener("wheel", function (){
  aBus.style.marginLeft = `${busOffset}px`;
  if (busOffset > 900){
    aBus.classList.toggle("a-bus-flipped");
    goLeft = true;
  } else if (busOffset < -300) {
    aBus.classList.toggle("a-bus-flipped");
    goLeft = false;
  }
  if (goLeft) {
    busOffset -= 70;
  } else {
    busOffset += 70;
  }
});

// --- allow drag/drop of draggable elements
// for now drop will toggle vibrate animation on drop target
function dragstart_handler(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  // console.log("dragging!");
}

function dragover_handler(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

function drop_handler(e) {
  e.preventDefault();
  // console.log(e.dataTransfer);
  // let src = document.getElementById(e.dataTransfer.getData("src"));
  // let srcParent = src.parentNode;
  // let dropTarget = e.target.firstElementChild;
  // console.log(src, srcParent, dropTarget);
  e.target.classList.toggle("vibrate");
}

const imgs = document.querySelectorAll("img");
imgs.forEach(element => {
  element.addEventListener("load", function(){
    // console.log(`loaded ${element.src}`);
    element.classList.add("fade-in");
  })
});