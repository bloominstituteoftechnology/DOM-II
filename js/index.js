// Your code goes here

//mouseOver

const navChange = document.getElementsByClassName("nav-link")[0];

const nav = document.getElementsByTagName("nav")[0];
// console.log(nav);

navChange.addEventListener("mouseover", event => {
  console.log(event);
  console.log("See this? It works.");
  console.log(nav);
  nav.style.backgroundColor = "red";
});

//keyDown
document.addEventListener("keydown", event => {
  alert("You pressed a key.");
});

//wheel

document.addEventListener("wheel", event => {
  console.log("We have a wheel event");
});

//drag or drop

// See draggable.js...

//load
// document.addEventListener("load", event => {
//   console.log("The page has loaded.");
// });

//focus

const focusSubject = document.querySelector('input[type="email"]');

focusSubject.addEventListener("focus", event => {
  event.target.style.background = "pink";
});

//resize - Not working

const forMobile = document.getElementsByClassName("destination");

window.addEventListener("resize", event => {
  console.log("forMobile works!");
  // div.destination.backgroundColor = "red";
});

//scroll
// const theyAreScrolling = document.getElementsByClassName('mainContainer');

window.addEventListener("scroll", function(event) {
  console.log(event + "They're scrolling..");
  // alert('Click OK if you have already read everything on this page.');
});

//select

//dblclick

const firstSignUp = document.getElementsByClassName("btn")[0];
firstSignUp.addEventListener("dblclick", event => {
  alert("Don't break your mouse! 1");
});

const secondSignUp = document.getElementsByClassName("btn")[1];
secondSignUp.addEventListener("dblclick", event => {
  alert("Don't break your mouse! 2!");
});

const thirdSignUp = document.getElementsByClassName("btn")[2];
thirdSignUp.addEventListener("dblclick", event => {
  alert("Don't break your mouse! 3!");
});
