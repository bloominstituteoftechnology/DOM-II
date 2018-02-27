const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];


let rocket = -1;

function topper(e) {
    e.target.style.order = rocket;
    rocket -= 1;
}

blueBlock.addEventListener("click", topper);
greenBlock.addEventListener("click", topper);
pinkBlock.addEventListener("click", topper);
grayBlock.addEventListener("click", topper);
redBlock.addEventListener("click", topper);