const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const pink = document.getElementById("pink");
const gray = document.getElementById("gray");
let i = 0;
let mover;
red.addEventListener("mousedown", () => {
mover = window.setInterval(function () {
  
  i = i + 10;
  console.log("this is i: ", i);

  red.style.marginLeft = `${i}px`;
  }, 250);
});

  red.addEventListener("mouseup", () => {
    window.clearInterval(mover);
    red.style.marginLeft = '10px';
    i = 10;
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
