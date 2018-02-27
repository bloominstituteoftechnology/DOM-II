// Outward function
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];

function rocket () {
    grayBlock.addEventListener("click", (event) => {
        toTop(event.target);
    });
}

function toTop(arg) {
    arg.style.order = -1;
}
 
rocket();
// init function