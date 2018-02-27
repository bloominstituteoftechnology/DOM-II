const redB = document.getElementById("red");
const blueB = document.getElementById("blue");
const greenB = document.getElementById("green");
const pinkB = document.getElementById("pink");
const grayB = document.getElementById("gray");

var redN = 0;
var blueN = 0;
var greenN = 0;
var pinkN = 0;
var grayN = 0;

redB.addEventListener("click", (event) => {
    redN--;

    redB.style.order = `${redN}`;
});

blueB.addEventListener("click", (event) => {
    blueN--;

    blueB.style.order = `${blueN}`;
});

greenB.addEventListener("click", (event) => {
    greenN--;

    greenB.style.order = `${greenN}`;
});

pinkB.addEventListener("click", (event) => {
    pinkN--;

    pinkB.style.order = `${pinkN}`;
});

grayB.addEventListener("click", (event) => {
    grayN--;

    grayB.style.order = `${grayN}`;
});