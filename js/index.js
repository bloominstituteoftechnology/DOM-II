// Your code goes here

//mouseover///////////////////////////////////

const bus = document.querySelector("img");
const animation = TweenMax.from(bus, 1, { x: 300, opacity: 0, scale: 1.0, });

animation.pause();
bus.addEventListener('mouseover', function() {
    animation.resume();
});
bus.addEventListener('mouseout', function() {
    animation.reverse();
});


//keydown////////////////////////////////

const logo = document.querySelector(".logo-heading");

document.addEventListener("keydown", function() {
  console.log("I did a keydown!");
  TweenMax.to(".logo-heading", 1, { rotation: 360, scale: 2.0 });
});

//wheel///////////////////////////////

const firstP = document.querySelector("p");
firstP.addEventListener("wheel", function(event) {
  console.log("I did a wheel!");
  event.target.style.color = "pink";
});

//drag / drop/////////////////////////////
const secondImg = document.querySelectorAll("img")[1];
secondImg.addEventListener("dragstart", function() {
  console.log("I did a drag!");
  alert("DONT TOUCH THAT!");
});

//load///////////////////////////////

const thirdImg = document.querySelectorAll("img")[2];

window.addEventListener("load", function() {
  console.log("I did a load thing!");
  TweenMax.to(thirdImg, 1, { rotation: 360, scale: 0.5 });
});

//focus/////////////////////////////

const form = document.getElementById("form");
form.addEventListener(
  "focus",
  function(event) {
    event.target.style.background = "pink";
  },
  true
);
form.addEventListener(
  "blur",
  function(event) {
    event.target.style.background = "";
  },
  true
);

//resize//////////////////////////

window.addEventListener("resize", function() {
  document.querySelector("body").style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

//scroll///////////////////////

const forthImg = document.querySelectorAll("img")[3];
document.addEventListener("scroll", function() {
  console.log("I did a scroll!");
  TweenMax.to(forthImg, .5, {x: 100, repeat:-1, yoyo: true});
});

//Click//////////////////////////////
const allBtn = document.getElementsByClassName('btn')
document.addEventListener('click', function(){
    TweenMax.to(allBtn, 1, { rotation: 360, scale: 0.5 });
    console.log('you clicked a thing!');
})

