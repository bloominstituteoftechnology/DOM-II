// Your code goes here


const theBus = document.querySelector(".topBus");
const theLogo = document.querySelector(".logo-heading");
const thePar = document.querySelector("p");
const theHeader = document.querySelector("h2");
const theNav = document.querySelector(".nav");
const theMap = document.querySelector(".img-content");
const btnOne = document.querySelector(".btn");
const btnTwo = document.querySelector(".destImg");
const btnThree = document.querySelector("#btn3");
const theCR = document.querySelector(".footer");

theBus.addEventListener("mouseover", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".topBus", 1, {x:-50,x:250});
    console.log("mouseover");
  });

  // theLogo.addEventListener("keyup", function(event) {
  //   // only has to deal with event bubbling
  //   TweenMax.to(".testing", 3, {rotation:360, scale:0.5, ease:Power4.easOut});
  //   console.log("keyup");
  // });

  thePar.addEventListener("copy", function(event) {
    // only has to deal with event bubbling
    TweenMax.to("p", 1, {x:250});
    console.log("copy");
  });

  theHeader.addEventListener("wheel", function(event) {
    // only has to deal with event bubbling
    TweenMax.to("h2", 1, {x:250});
    console.log("wheel");
  });

  theNav.addEventListener("drag/drop", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".nav", 1, {x:250});
    console.log("drag/drop");
  });

  theMap.addEventListener("mouseleave", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".img-content", 1, {x:250});
    console.log("mouseleave");
  });

  btnOne.addEventListener("click", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".btn", 1, {x:250});
    console.log("click");
  });

  btnTwo.addEventListener("dragstart", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".destImg", 1, {x:250});
    console.log("dragstart");
  });

  // btnThree.addEventListener("scroll", function(event) {
  //   // only has to deal with event bubbling
  //   TweenMax.to("#btn3", 1, {x:250});
  //   console.log("scroll");
  // });

  theCR.addEventListener("dblclick", function(event) {
    // only has to deal with event bubbling
    TweenMax.to(".footer", 1, {x:250});
    console.log("double click");
  });

