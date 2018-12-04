const groupOfBlocks = document.querySelector('.blocks');
const individualBlocks = document.querySelectorAll('.block');

individualBlocks.forEach((item) => item.addEventListener('click', function(e) {
    groupOfBlocks.prepend(item);
}))

individualBlocks.forEach((item) => item.addEventListener('mousedown', function(e) {
    TweenMax.to(item, 50, {xPercent: 1200});
}));

individualBlocks.forEach((item) => item.addEventListener('mouseup', function(e) {
    TweenMax.to(item, 50, {xPercent: 0});
}))