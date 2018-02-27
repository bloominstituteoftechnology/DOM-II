const allBlocks = document.querySelectorAll(".block");
const blockDiv = document.querySelectorAll(".blocks");

allBlocks.forEach(function(x){
    x.addEventListener("mousedown", moveRight);
});

function moveTop() {
    event.target.parentNode.insertBefore(event.target, event.target.parentNode.firstChild);
}

function moveRight(event) {
    let box = event.target
    let marg = window.getComputedStyle(box, null).getPropertyValue('margin-left');
    marg = +marg.substring(0, marg.length - 2);
    let move = setInterval(frame, 10);
    function frame() {
        if (marg == 350) {
            clearInterval(move);
        } else {
            marg = marg + 5;
            box.style.margin = `10px 10px 10px ${marg}px`;
        }
    }
    blockDiv[0].addEventListener("mouseup", function() {
        clearInterval(move);
        moveLeft(event);
    });
}

function moveLeft(event) {
 
    let box = event.target
    let marg = window.getComputedStyle(box, null).getPropertyValue('margin-left');
    marg = +marg.substring(0, marg.length - 2);
    let move = setInterval(frame, 10);
    function frame() {
        if (marg === 10) {
            clearInterval(move);
        } else {
            marg = marg - 5;
            box.style.margin = `10px 10px 10px ${marg}px`;
        }
    }
    box.addEventListener("mousedown", function() {
        clearInterval(move);
    });
}