const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const pink = document.getElementById("pink");
const gray = document.getElementById("gray");
let i = 0;
let mover;
<<<<<<< HEAD

// RED
red.addEventListener("mousedown", () => {
  mover = window.setInterval(function () {
    i = i + 10;

    red.style.marginLeft = `${i}px`;
  }, 100);
});

red.addEventListener("mouseup", () => {
  window.clearInterval(mover);
  red.style.marginLeft = '10px';
  i = 10;
});

// BLUE
blue.addEventListener("mousedown", () => {
  mover = window.setInterval(function () {
    i = i + 10;

    blue.style.marginLeft = `${i}px`;
  }, 100);
});

blue.addEventListener("mouseup", () => {
  window.clearInterval(mover);
  blue.style.marginLeft = '10px';
  i = 10;
});

// GREEN
green.addEventListener("mousedown", () => {
  mover = window.setInterval(function () {
    i = i + 10;

    green.style.marginLeft = `${i}px`;
  }, 100);
});

green.addEventListener("mouseup", () => {
  window.clearInterval(mover);
  green.style.marginLeft = '10px';
  i = 10;
});

// PINK
pink.addEventListener("mousedown", () => {
  mover = window.setInterval(function () {
    i = i + 10;

    pink.style.marginLeft = `${i}px`;
  }, 100);
});

pink.addEventListener("mouseup", () => {
  window.clearInterval(mover);
  pink.style.marginLeft = '10px';
  i = 10;
});

// GRAY
gray.addEventListener("mousedown", () => {
  mover = window.setInterval(function () {
    i = i + 10;

    gray.style.marginLeft = `${i}px`;
  }, 100);
=======
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
>>>>>>> 3fcbf0467d54f04b0079480f4f957c272b667cb0
});

gray.addEventListener("mouseup", () => {
  window.clearInterval(mover);
  gray.style.marginLeft = '10px';
  i = 10;
});

