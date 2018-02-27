// Outward function
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];
const blocks = document.getElementsByClassName("blocks")[0];

function travelers() {
    grayBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
    });

    redBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
    });

    blueBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
    });

    greenBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
    });

    pinkBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
    });
}

let left = 0;

 function init () {
     Array.from(blocks.children).forEach(block => {
         block.style.marginLeft = "0px";
     });
     left = 0;
 }

function toRight(arg) {
    init();
    left += 50;
    arg.style.marginLeft = `${left}px` ;
}
 
const timerInterval = setInterval (travelers(),10);

//-----------------------------------------------------//