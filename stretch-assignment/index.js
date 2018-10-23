const blocks = document.querySelector(".blocks");
const red = document.querySelector(".block--red");
const blue = document.querySelector(".block--blue");
const green = document.querySelector(".block--green");
const pink = document.querySelector(".block--pink");
const gray = document.querySelector(".block--gray");
const blocksArr = [red,blue,green,pink, gray];

blocks.addEventListener('click', (e) => {
  console.log(e.target.parentNode.children);
  blocksArr.forEach(block => block.style.order = "0");
  e.target.style.order = "-1";
})