
const all = document.querySelector('html');
const mousedown = document.querySelector('.mousedown');
const groupOfBlocks = document.querySelector('.blocks');
const individualBlocks = document.querySelectorAll('.block');

individualBlocks.forEach((item) => item.addEventListener('click', function(e) {
    groupOfBlocks.prepend(item);
}))

individualBlocks.forEach((item) => item.addEventListener('mousedown', function(e) {
    TweenMax.to(item, 50, {xPercent: 1200});
}));

individualBlocks.forEach((item) => item.addEventListener('mouseup', function(e) {
    TweenMax.to(item, 5, {xPercent: 0});
}))


/// shows mousedown at top of screen when mouse is down

all.addEventListener('mousedown', function(e) {
    mousedown.classList.toggle('mousedown');
});

all.addEventListener('mouseup', function(e) {
    mousedown.classList.toggle('mousedown');
});