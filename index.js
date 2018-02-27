const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const pink = document.getElementById("pink");
const gray = document.getElementById("gray");

red.addEventListener("mousedown", (event) => {

  red.id = 'toRight';
});

pink.addEventListener("mousedown", (event) => {

  pink.id = 'toRight';
});

blue.addEventListener("mousedown", (event) => {

  blue.id = 'toRight';
});

green.addEventListener("click", (event) => {

  green.id = 'toRight';
});

gray.addEventListener("click", (event) => {

  gray.id = 'toRight';
});
