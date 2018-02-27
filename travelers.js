const blocks = document.querySelector(".blocks");
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");
// const redBlockAppend = document.getElementsByClassName("blocks")[0].appendChild(redBlock);
// when clicked, margin-left to 100px;

redBlock.addEventListener("mousedown", (event) => {
    redBlock.classList.add("blockDownClick");
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
    redBlock.classList.remove("blockDownClick");
 });
 
 blueBlock.addEventListener("mouseup", (event) => {
    blueBlock.classList.remove("blockDownClick");
 });
 
 greenBlock.addEventListener("mouseup", (event) => {
   greenBlock.classList.remove("blockDownClick");
 });
 
 pinkBlock.addEventListener("mouseup", (event) => {
   pinkBlock.classList.remove("blockDownClick");
 });
 
 grayBlock.addEventListener("mouseup", (event) => {
   grayBlock.classList.remove("blockDownClick");
 });