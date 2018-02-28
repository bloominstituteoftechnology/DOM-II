const blocks = document.querySelector(".blocks");
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");


// const redBlockAppend = document.getElementsByClassName("blocks")[0].appendChild(redBlock);

let hasBeenClicked = false;

redBlock.addEventListener("mousedown", (event) => {
  console.log(event);
  redBlock.style.marginLeft = "50px";
  hasBeenClicked = true;
 });
 
 blueBlock.addEventListener("mousedown", (event) => {
    blueBlock.classList.add("blockDownClick");
 });
 
 greenBlock.addEventListener("mousedown", (event) => {
   greenBlock.classList.add("blockDownClick");
 });
 
 pinkBlock.addEventListener("mousedown", (event) => {
   pinkBlock.classList.add("blockDownClick");
 });
 
 grayBlock.addEventListener("mousedown", (event) => {
   grayBlock.classList.add("blockDownClick");
 });

redBlock.addEventListener("mouseup", (event) => {
  // redBlock.classList.remove("blockDownClick");
  if(hasBeenClicked) {
    const twoSecsInterval = window.setTimeout(() => {
      console.log('hiUP');
      redBlock.style.marginLeft = "10px";
    
    }, 2000);
  }
});
 
 blueBlock.addEventListener("mouseup", (event) => {
  const twoSecsInterval = window.setTimeout(() => {
		redBlock.classList.remove("blockDownClick");
    }, 2000);
 });
 
 greenBlock.addEventListener("mouseup", (event) => {
  const twoSecsInterval = window.setInterval(() => {
		redBlock.classList.remove("blockDownClick");
    }, 2000);
 });
 
 pinkBlock.addEventListener("mouseup", (event) => {
  const twoSecsInterval = window.setInterval(() => {
		redBlock.classList.remove("blockDownClick");
    }, 2000);
 });
 
 grayBlock.addEventListener("mouseup", (event) => {
  const twoSecsInterval = window.setInterval(() => {
		redBlock.classList.remove("blockDownClick");
    }, 2000);
 });