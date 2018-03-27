const allBlocks = document.querySelector(".blocks").childNodes; //includes all the child blocks
const redBlock = document.getElementById("redBlock");
const blueBlock = document.getElementById("blueBlock");
const greenBlock = document.getElementById("greenBlock");
const pinkBlock = document.getElementById("pinkBlock");
const grayBlock = document.getElementById("grayBlock");

// sets order for each block
function orderSet() {
  document.getElementById("redBlock").style.order = "0";
  document.getElementById("blueBlock").style.order = "0";
  document.getElementById("greenBlock").style.order = "0";
  document.getElementById("pinkBlock").style.order = "0";
  document.getElementById("grayBlock").style.order = "0";
};

// makes it so whatever block you click jumps to the top (super archaic method)
let count = 0;
const changeOrder = (event) => {
  // event.stopPropagation();
  event.target.style.order = count--;
}


let holdingDown = false;
const pushtoRight = (event) => {
  let currentX = 0
  if (holdingDown === true) {
    currentX = currentX + 10;
    event.target.style.right = currentX + "px";
  }

}

// when you click on blocks, it changes order!
// probably a better way to make it so it clicks all buttons instead of making a listener to each one
// will work on that later
//uncomment to test Rocket
// redBlock.addEventListener('click', changeOrder);
// blueBlock.addEventListener('click', changeOrder);
// greenBlock.addEventListener('click', changeOrder);
// pinkBlock.addEventListener('click', changeOrder);
// grayBlock.addEventListener('click', changeOrder);



// travelng
// comment out when testing rocket
redBlock.addEventListener('mousedown', pushtoRight);
blueBlock.addEventListener('mousedown', pushtoRight);
greenBlock.addEventListener('mousedown', pushtoRight);
pinkBlock.addEventListener('mousedown', pushtoRight);
grayBlock.addEventListener('mousedown', pushtoRight);
