const blocks = document.querySelector(".blocks");
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

console.log(blocks.childNodes[1]);
// const redBlockAppend = document.getElementsByClassName("blocks")[0].appendChild(redBlock);

redBlock.addEventListener("mousedown", (event) => {
    
    redBlock.style.marginLeft = '50px' // '50px'
    console.log(parseInt(redBlock.style.marginLeft));
 });
 
 blueBlock.addEventListener("mousedown", (event) => {
    blueBlock.style.marginLeft = "50px";
 });
 
 greenBlock.addEventListener("mousedown", (event) => {
    greenBlock.style.marginLeft = "50px";
 });
 
 pinkBlock.addEventListener("mousedown", (event) => {
    pinkBlock.style.marginLeft = "50px";
 });
 
 grayBlock.addEventListener("mousedown", (event) => {
    grayBlock.style.marginLeft = "50px";
 });

redBlock.addEventListener("mouseup", (event) => {
    redBlock.style.marginLeft = "10px";
});
 
 blueBlock.addEventListener("mouseup", (event) => {
    blueBlock.style.marginLeft = "10px";
 });
 
 greenBlock.addEventListener("mouseup", (event) => {
    greenBlock.style.marginLeft = "10px";
 });
 
 pinkBlock.addEventListener("mouseup", (event) => {
    pinkBlock.style.marginLeft = "10px";
 });
 
 grayBlock.addEventListener("mouseup", (event) => {
    grayBlock.style.marginLeft = "10px";
 });