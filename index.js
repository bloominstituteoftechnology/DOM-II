const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];


blueBlock.addEventListener("click", event => {
    blueBlock.style.order = "-1";
});
greenBlock.addEventListener("click", event => {
    greenBlock.style.order = "-2";
});
pinkBlock.addEventListener("click", event => {
    pinkBlock.style.order = "-3";
});
grayBlock.addEventListener("click", event => {
    grayBlock.style.order = "-4";
});
redBlock.addEventListener("click", event => {
    redBlock.style.order = "-5";
});