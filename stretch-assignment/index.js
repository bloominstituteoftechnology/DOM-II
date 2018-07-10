// element.addEventListener( event, function, useCapture);

let blocks = document.querySelector(".blocks");
let redBlock = document.querySelector(".block--red");
let blueBlock = document.querySelector(".block--blue");
let greenBlock = document.querySelector(".block--green");
let pinkBlock = document.querySelector(".block--pink");
let grayBlock = document.querySelector(".block--gray");

redBlock.addEventListener("click", function () { redBlock.style.background = "lightblue" });