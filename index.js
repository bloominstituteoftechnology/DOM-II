const allBlocks = document.querySelectorAll(".block");

allBlocks.forEach(function(x){
    x.addEventListener("mousedown", moveRight);
});

function moveTop() {
    event.target.parentNode.insertBefore(event.target, event.target.parentNode.firstChild);
}

function moveRight(event) {
    let box = event.target
    let pad = window.getComputedStyle(box, null).getPropertyValue('padding-left');
    pad = +pad.substring(0, pad.length - 2);
    let move = setInterval(frame, 10);
    function frame() {
        if (pad == 350) {
            clearInterval(move);
        } else {
            pad = pad + 5;
            box.style.padding = `0 0 0 ${pad}px`;
        }
    }
    box.addEventListener("mouseup", function() {
        clearInterval(move);
        moveLeft(event);
    });
}

function moveLeft(event) {
    let box = event.target
    let pad = window.getComputedStyle(box, null).getPropertyValue('padding-left');
    pad = +pad.substring(0, pad.length - 2);
    let move = setInterval(frame, 10);
    function frame() {
        if (pad == 0) {
            clearInterval(move);
        } else {
            pad = pad - 5;
            box.style.padding = `0 0 0 ${pad}px`;
        }
    }
    box.addEventListener("mousedown", function() {
        clearInterval(move);
    });
}