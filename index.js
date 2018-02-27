const blocks = document.querySelector(".blocks");
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

redBlock.addEventListener("click", (event) => {
   redBlock.classList.add("blockToTop");
   redOtherBoxes();
});

blueBlock.addEventListener("click", (event) => {
   blueBlock.classList.add("blockToTop");
   blueOtherBoxes();
  
});

greenBlock.addEventListener("click", (event) => {
  greenBlock.classList.add("blockToTop");
  greenOtherBoxes();
});

pinkBlock.addEventListener("click", (event) => {
  pinkBlock.classList.add("blockToTop");
  pinkOtherBoxes();
});

grayBlock.addEventListener("click", (event) => {
  grayBlock.classList.add("blockToTop");
  grayOtherBoxes();
});

let redOtherBoxes= () => {
  blueBlock.classList.remove("blockToTop");
  greenBlock.classList.remove("blockToTop");
  pinkBlock.classList.remove("blockToTop");
  grayBlock.classList.remove("blockToTop");
}

let blueOtherBoxes = () => {
  redBlock.classList.remove("blockToTop");
  greenBlock.classList.remove("blockToTop");
  pinkBlock.classList.remove("blockToTop");
  grayBlock.classList.remove("blockToTop");
}

let greenOtherBoxes = () => {
  redBlock.classList.remove("blockToTop");
  blueBlock.classList.remove("blockToTop");
  pinkBlock.classList.remove("blockToTop");
  grayBlock.classList.remove("blockToTop");
}

let pinkOtherBoxes = () => {
  redBlock.classList.remove("blockToTop");
  blueBlock.classList.remove("blockToTop");
  greenBlock.classList.remove("blockToTop");
  grayBlock.classList.remove("blockToTop"); 
}

let grayOtherBoxes = () => {
  redBlock.classList.remove("blockToTop");
  blueBlock.classList.remove("blockToTop");
  greenBlock.classList.remove("blockToTop");
  pinkBlock.classList.remove("blockToTop");
}

