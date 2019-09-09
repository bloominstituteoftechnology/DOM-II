// Your code goes here
const bus = document.querySelector(".bus");

bus.addEventListener("click", (e) => {
    let distance = e.target.style.left - 100;
    e.style.left = distance + 'px';
    e.style.transition = 'left 0.5s';
});

const textPic = document.querySelectorAll('.img-content');
textPic.forEach((image) => {
    image.addEventListener('mouseover', (e) => {
    e.target.style.opacity = '.5';
    e.target.style.transition = 'opacity .5s';
    });
    image.addEventListener('mouseout', (e) => {
        e.target.style.opacity = '1';
        e.target.style.transition = 'opacity .5s';
    });
});