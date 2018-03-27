const blocks = document.querySelectorAll('.block');
let order = -1

// function topOfStack(e) {
//     e.target.style.order = order;
//     order -=1;
// }

function rightOfStack(e) {
    e.target.style.marginLeft = '500px';
}

function originalPosition(e) {
    e.target.style.marginLeft = '10px';
}

blocks.forEach(block => {
    // block.addEventListener('click', topOfStack);
    block.addEventListener('mousedown', rightOfStack);
    block.addEventListener('mouseout', originalPosition);
});