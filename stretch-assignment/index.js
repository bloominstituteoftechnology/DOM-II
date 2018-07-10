// element.addEventListener( event, function, useCapture);

//selectors
let blocks = document.querySelector(".blocks");
let redBlock = document.querySelector(".block--red");
let blueBlock = document.querySelector(".block--blue");
let greenBlock = document.querySelector(".block--green");
let pinkBlock = document.querySelector(".block--pink");
let grayBlock = document.querySelector(".block--gray");


//Events
redBlock.innerHTML = "Click me!";
redBlock.addEventListener("click", function () { redBlock.style.background = "lightblue" });

blueBlock.innerHTML = "Click me!";
blueBlock.style.color = "white";
blueBlock.addEventListener("click", function () {
    blueBlock.style.background = "orange";
    blueBlock.textContent = "Here is some text for the now orange box";
});

greenBlock.innerHTML = "Hover here!";
greenBlock.addEventListener("mouseover", function () { greenBlock.style.border = "3px solid red" });

pinkBlock.innerHTML = "Hover here!";
pinkBlock.addEventListener("mouseenter", function () { pinkBlock.textContent = "Don't leave!"; });
pinkBlock.addEventListener("mouseleave", function () { alert("Goodbye :..("); });

grayBlock.innerHTML = "Wanna know a secret?";
grayBlock.addEventListener("mouseover", function () {
    grayBlock.style.background = "white"
    grayBlock.textContent = "I've been working on the wrong file the whole time.";
});