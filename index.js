const blocks = document.querySelector(".blocks");
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

// When an element is clicked, assign it the lowest order so it goes to top
// have pre-defined orders of 1-5. When element is clicked, it is assigned the order of 1
// How to make it so the other elements are incremented to 2,3,4,5?

// what if? Instead of incrementing the one we want, we decrement the other four?

// divName.style.color='red';
// style.order='num';
// num--;

let redNum = 0;
let blueNum = 0;
let greenNum = 0;
let pinkNum = 0;
let grayNum = 0;

redBlock.addEventListener("click", (event) => {
  // redBlock.classList.add("blockToTop");
  redNum--;
  redBlock.style.order="redNum";
});

blueBlock.addEventListener("click", (event) => {
  // blueBlock.classList.add("blockToTop");
  blueNum--;
  blueBlock.style.order="blueNum"; 
});

greenBlock.addEventListener("click", (event) => {
  greenBlock.classList.add("blockToTop");
});

pinkBlock.addEventListener("click", (event) => {
  pinkBlock.classList.add("blockToTop"); 
});

grayBlock.addEventListener("click", (event) => {
  grayBlock.classList.add("blockToTop");
});
