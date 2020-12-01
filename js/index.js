// Your code goes here
//const nav = document.querySelector(".main-navigation");
const heading = document.querySelector(".logo-heading");
const img = document.querySelector("img");
const imgContent = document.querySelector(".img-content img");
const h2 = document.querySelector(".text-content h2");
const body = document.querySelector("body");
const des = document.querySelector(".content-destination img");
//const btn = document.querySelector(".btn");
const destination = document.querySelector(".destination h4");

//Heading -- mouseover

img.addEventListener("mousemove", runEvent);

function runEvent(e) {
  heading.textContent = `Where will adventure take us... ${e.offsetX}, ${e.offsetY}`;
}
//end heading mouseover
//DblClick
imgContent.addEventListener("dblclick", changeImg);

function changeImg() {
  h2.textContent = `Where will you go?`;
}
//end- dbl click
//Key down Start
body.addEventListener("keydown", paraChange);

function paraChange(e) {
  document.body.style.color = "gray";
}
//Wheel start
let scale = 1;
des.onwheel = zoom;

des.addEventListener("wheel", zoom);

function zoom(e) {
  e.preventDefault();

  scale += e.deltaY * -0.01;
  //Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);
  // Apply scale transform
  des.style.transform = `scale(${scale})`;
}
//Wheel end
//Load start
window.addEventListener("load", h2a);

function h2a() {
  document.body.style.color = "purple";
}
//load end

//scroll
window.addEventListener("scroll", function () {
  heading.style.backgroundColor = "black";
});
//SCROLL END

//resize
window.onresize = reportWindowSize;

function reportWindowSize() {
  destination.textContent = window.innerHeight;
}
//Resize-end

//-----//

//focus

//Drag/drop

//SELECT

//-----//
//focus--not working
// btn.addEventListener("focus", getFocus);

// function getFocus() {
//   document.getElementById(".destination h4").focus();
// }

// btn.addEventListener("focus", bodyBack);

// function bodyBack(e) {
//   heading.textContent = `Hello`;
// }

// console.log(runEvent);
//---Use the following--//
//// `mouseover`
////   - `keydown`
//// - `wheel`
////   - `load`
////   - `focus`
////   - `resize`
////   - `scroll`
////   - `select`
//  // - `dblclick`
//   - `drag / drop`
