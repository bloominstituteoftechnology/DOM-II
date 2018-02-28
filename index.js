// Outward function
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];
const blocks = document.getElementsByClassName("blocks")[0];
let left = 0;
let moveRight;
let moveLeft;

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

    window.addEventListener("mousedown", (event) => {
        document.querySelector("body").style.background = "white";
    });

    window.addEventListener("mouseup", (event) => {
        document.querySelector("body").style.background = "yellow";
        stop(moveRight);
        toLeft(event.target);
    });
}

// function init() {
//     Array.from(blocks.children).forEach(block => {
//         block.style.marginLeft = "0px";
//     });
//     left = 0;
// }

function toRight(arg) {
    moveRight = setInterval(function () {
        left += 1;
        arg.style.marginLeft = `${left}px`;
    }, 10);
}

function toLeft(arg) {
    moveLeft = setInterval(function () {
        if (left > 0) {
            left -= 1;
            arg.style.marginLeft = `${left}px`;
        }
    }, 10);
}

function stop(arg) {
    //init();
    clearInterval(arg);
}

const timerInterval = setInterval(travelers(), 10);

//-----------------------------------------------------//