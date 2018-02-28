// Outward function
const redBlock = document.getElementsByClassName("block--red")[0];
const blueBlock = document.getElementsByClassName("block--blue")[0];
const greenBlock = document.getElementsByClassName("block--green")[0];
const pinkBlock = document.getElementsByClassName("block--pink")[0];
const grayBlock = document.getElementsByClassName("block--gray")[0];
const blocks = document.getElementsByClassName("blocks")[0];
let movingObj;

grayBlock.left = 0;
blueBlock.left = 0;
redBlock.left = 0;
greenBlock.left = 0;
pinkBlock.left = 0;
grayBlock.move;
pinkBlock.move;

function travelers() {
    grayBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
        movingObj = event.target;
        event.target.innerHTML = "MOUSE DOWN";
    });

    redBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
        movingObj = event.target;
        event.target.innerHTML = "MOUSE DOWN";

    });

    blueBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
        movingObj = event.target;
        event.target.innerHTML = "MOUSE DOWN";

    });

    greenBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
        movingObj = event.target;
        event.target.innerHTML = "MOUSE DOWN";

    });

    pinkBlock.addEventListener("mousedown", (event) => {
        toRight(event.target);
        movingObj = event.target;
        event.target.innerHTML = "MOUSE DOWN";

    });

    window.addEventListener("mousedown", (event) => {
        document.querySelector("body").style.background = "white";
    });

    window.addEventListener("mouseup", (event) => {
        document.querySelector("body").style.background = "yellow";
        // stop();
        toLeft(movingObj);
        movingObj.innerHTML = "MOUSE UP";
    });

    document.addEventListener("dragend", function (event) {
        document.querySelector("body").style.background = "yellow";
        // stop();
        toLeft(movingObj);
    });
}

function init() {
    Array.from(blocks.children).forEach(block => {
        block.style.marginLeft = "0px";
    });
    left = 0;
}

function toRight(arg) {
    stop(arg);
    arg.move = setInterval(function () {
        arg.left += 1;
        arg.style.marginLeft = `${arg.left}px`;
    }, 5);
}
function toLeft(arg) {
    stop(arg);
    arg.move = setInterval(function () {
        if (arg.left > 0) {
            arg.left -= 1;
            arg.style.marginLeft = `${arg.left}px`;
        }
        else {
            stop(arg);
        }
    }, 20);
}
function stop(arg) {
    // init();
    clearInterval(arg.move);
}

const timerInterval = setInterval(travelers(), 10);

//-----------------------------------------------------//