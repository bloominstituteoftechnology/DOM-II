// Rachelle Pestanas & Brett Sullivan
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];
const blockParent = document.getElementsByClassName("blocks")[0];
redBlock.addEventListener("click", (event) => {
    redBlock.style.order = -1;
    blueBlock.style.order = 0;
    greenBlock.style.order = 0;
    pinkBlock.style.order = 0;
    grayBlock.style.order = 0;
    
    
})
blueBlock.addEventListener("click", (event) => {
    redBlock.style.order = 0;
    blueBlock.style.order = -1;
    greenBlock.style.order = 0;
    pinkBlock.style.order = 0;
    grayBlock.style.order = 0;
    
    
})
greenBlock.addEventListener("click", (event) => {
    redBlock.style.order = 0;
    blueBlock.style.order = 0;
    greenBlock.style.order = -1;
    pinkBlock.style.order = 0;
    grayBlock.style.order = 0;
    
    
})
pinkBlock.addEventListener("click", (event) => {
    redBlock.style.order = 0;
    blueBlock.style.order = 0;
    greenBlock.style.order = 0;
    pinkBlock.style.order = -1;
    grayBlock.style.order = 0;
    
    
})
grayBlock.addEventListener("click", (event) => {
    redBlock.style.order = 0;
    blueBlock.style.order = 0;
    greenBlock.style.order = 0;
    pinkBlock.style.order = 0;
    grayBlock.style.order = -1;
    
 })