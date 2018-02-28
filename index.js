// const blocks = document.querySelectorAll('.block');
// blocks.forEach(block => {
//   block.addEventListener('click', () => {
//     const parent = block.parentNode;
//     parent.removeChild(block);
//     parent.prepend(block);
//   });
// });

const red = document.getElementsByClassName('block block--red');
const blue = document.getElementsByClassName('block block--blue');
const green = document.getElementsByClassName('block block--green');
const pink = document.getElementsByClassName('block block--pink');
const gray = document.getElementsByClassName('block block--gray');

let moveMarginLeftRed = 10;
let moveMarginLeftBlue = 10;
let moveMarginLeftGreen = 10;
let moveMarginLeftPink = 10;
let moveMarginLeftGray = 10;

let moveRight;
let moveLeft;

red[0].addEventListener('mousedown', () => {
  clearInterval(moveLeft);
  moveRight = setInterval(function() {
    moveMarginLeftRed += 10;
    red[0].style.marginLeft = moveMarginLeftRed.toString() + '%';
  }, 10);
});
blue[0].addEventListener('mousedown', () => {
  clearInterval(moveLeft);
  moveRight = setInterval(function() {
    moveMarginLeftBlue += 10;
    blue[0].style.marginLeft = moveMarginLeftBlue.toString() + '%';
  }, 10);
});
green[0].addEventListener('mousedown', () => {
  clearInterval(moveLeft);
  moveRight = setInterval(function() {
    moveMarginLeftGreen += 10;
    green[0].style.marginLeft = moveMarginLeftGreen.toString() + '%';
  }, 10);
});
pink[0].addEventListener('mousedown', () => {
  clearInterval(moveLeft);
  moveRight = setInterval(function() {
    moveMarginLeftPink += 10;
    pink[0].style.marginLeft = moveMarginLeftPink.toString() + '%';
  }, 10);
});
gray[0].addEventListener('mousedown', () => {
  clearInterval(moveLeft);
  moveRight = setInterval(function() {
    moveMarginLeftGray += 10;
    gray[0].style.marginLeft = moveMarginLeftGray.toString() + '%';
  }, 10);
});

window.addEventListener('mouseup', () => {
  moveLeft = setInterval(function() {
    clearInterval(moveRight);
    if (moveMarginLeftRed >= 10) {
      moveMarginLeftRed -= 1;
      red[0].style.marginLeft = moveMarginLeftRed.toString() + '%';
    }
    if (moveMarginLeftBlue >= 10) {
      moveMarginLeftBlue -= 1;
      blue[0].style.marginLeft = moveMarginLeftBlue.toString() + '%';
    }
    if (moveMarginLeftGreen >= 10) {
      moveMarginLeftGreen -= 1;
      green[0].style.marginLeft = moveMarginLeftGreen.toString() + '%';
    }
    if (moveMarginLeftPink >= 10) {
      moveMarginLeftPink -= 1;
      pink[0].style.marginLeft = moveMarginLeftPink.toString() + '%';
    }
    if (moveMarginLeftGray >= 10) {
      moveMarginLeftGray -= 1;
      gray[0].style.marginLeft = moveMarginLeftGray.toString() + '%';
    }
  }, 10);
});
