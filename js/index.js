// Your code goes here


const theBus = document.querySelector(".topBus");
const theLogo = document.querySelector(".logo-heading");
const thePar = document.querySelector("p");
const theHeader = document.querySelector("h2");
const theNav = document.querySelector(".nav");
const theMap = document.querySelector(".img-content");
const btnOne = document.querySelector(".btn");
const btnTwo = document.querySelector(".topBus");
const btnThree = document.querySelector(".topBus");
const theCR = document.querySelector(".footer");

theBus.addEventListener("mouseover", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".topBus", 1, {x:-50,x:250});
    console.log("love");
  });

  theLogo.addEventListener("click", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".logo-heading", 1, {x:250});
    console.log("love");
  });

  thePar.addEventListener("keydown", function(event) {
    // only has to deal with event bubbling
    TweenMax.to("p", 1, {x:250});
    console.log("love");
  });

  theHeader.addEventListener("wheel", function(event) {
    // only has to deal with event bubbling
    TweenMax.to("h2", 1, {x:250});
    console.log("love");
  });

  theNav.addEventListener("drag/drop", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".nav", 1, {x:250});
    console.log("love");
  });

  theMap.addEventListener("focus", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".img-content", 1, {x:250});
    console.log("love");
  });

  btnOne.addEventListener("resize", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".topBus", 1, {x:250});
    console.log("love");
  });

  btnTwo.addEventListener("scroll", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".topBus", 1, {x:250});
    console.log("love");
  });

  btnThree.addEventListener("select", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".topBus", 1, {x:250});
    console.log("love");
  });

  theCR.addEventListener("dblclick", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".footer", 1, {x:250});
    console.log("love");
  });

