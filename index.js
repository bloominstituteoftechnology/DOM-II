const blocks = document.querySelector('.blocks');

blocks.addEventListener('click', reorder);

let orderTracker = 0;

function reorder(event) {
    event.target.style.order = orderTracker;
    orderTracker--;
}