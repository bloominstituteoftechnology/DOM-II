// element.addEventListener( event, function, useCapture);

//selectors
let blocks = document.querySelector(".blocks");
let redBlock = document.querySelector(".block--red");
let blueBlock = document.querySelector(".block--blue");
let greenBlock = document.querySelector(".block--green");
let pinkBlock = document.querySelector(".block--pink");
let grayBlock = document.querySelector(".block--gray");


//Events
redBlock.addEventListener("click", function () { redBlock.style.background = "lightblue" });

blueBlock.addEventListener("click", changeText);
function changeText() {
    blueBlock.textContent = "Here is some text for the blue box"
};

greenBlock.addEventListener("mouseover", function () { greenBlock.style.border = "3px solid red" });