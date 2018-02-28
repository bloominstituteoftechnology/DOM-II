const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const pink = document.getElementById("pink");
const gray = document.getElementById("gray");
let i = 0;
let mover;

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
});

gray.addEventListener("mouseup", () => {
  window.clearInterval(mover);
  gray.style.marginLeft = '10px';
  i = 10;
});

