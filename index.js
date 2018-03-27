const blocks = document.querySelectorAll('.block');
let order = -1

function topOfStack(e) {
    e.target.style.order = order;
    order -=1;
}



blocks.forEach(block => {
    block.addEventListener('click', topOfStack);
});