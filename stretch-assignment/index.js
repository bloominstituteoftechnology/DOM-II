let lowest = 0;
const groupOfBlocks = document.querySelector('.blocks');
const individualBlocks = document.querySelectorAll('.block');
individualBlocks.forEach((item) => item.addEventListener('click', function(e) {
    groupOfBlocks.prepend(item);
}))