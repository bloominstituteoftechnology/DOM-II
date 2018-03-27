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

// when you click on blocks, it changes order!
redBlock.addEventListener('click', changeOrder);
blueBlock.addEventListener('click', changeOrder);
greenBlock.addEventListener('click', changeOrder);
pinkBlock.addEventListener('click', changeOrder);
grayBlock.addEventListener('click', changeOrder);
