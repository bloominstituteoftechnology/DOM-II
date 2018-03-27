const blocks = document.querySelector(".blocks");
const redBlock = document.getElementById("block--red");
const blueBlock = document.getElementById("block--blue");
const greenBlock = document.getElementById("block--green");
const pinkBlock = document.getElementById("block--pink");
const grayBlock = document.getElementById("block--gray");

redBlock.addEventListener('click', moveIt);

function placeDiv(x_pos, y_pos) {
    var d = document.getElementById('block--blue');
    d.style.position = "absolute";
    d.style.left = x_pos+'500px';
    d.style.top = y_pos+'-500px';
  }
  