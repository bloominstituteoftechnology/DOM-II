const blocks = document.querySelector(".blocks");
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

redBlock.addEventListener("click", (event) => {
  redBlock.classList.add("blockToTop");
});

blueBlock.addEventListener("click", (event) => {
  blueBlock.classList.add("blockToTop"); 
});

