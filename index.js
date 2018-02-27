// Outward function
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];
const blocks = document.getElementsByClassName("blocks")[0];

function rocket () {
    grayBlock.addEventListener("click", (event) => {
        toTop(event.target);
    });

    redBlock.addEventListener("click", (event) => {
        toTop(event.target);
    });

    blueBlock.addEventListener("click", (event) => {
        toTop(event.target);
    });

    greenBlock.addEventListener("click", (event) => {
        toTop(event.target);
    });

    pinkBlock.addEventListener("click", (event) => {
        toTop(event.target);
    });
}

 function init () {
     Array.from(blocks.children).forEach(block => {
         block.style.order = 0;
     });
 }

function toTop(arg) {
    init();
    arg.style.order--;
}
 
const timerInterval = setInterval (rocket(),10);
// init function