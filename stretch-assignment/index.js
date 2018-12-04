const groupOfBlocks = document.querySelector('.blocks');
const individualBlocks = document.querySelectorAll('.block');

individualBlocks.forEach((item) => item.addEventListener('click', function(e) {
    groupOfBlocks.prepend(item);
}))

individualBlocks.forEach((item) => item.addEventListener('mousedown', function(e) {
    TweenMax.to(item, 5, {xPercent: 1200});
}));