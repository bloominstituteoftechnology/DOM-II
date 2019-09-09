// Your code goes here
const bus = document.querySelector(".bus");

bus.addEventListener("click", (e) => {
    e.target.style.marginLeft = '435px';
    e.target.style.transition = 'margin-left 5s';
});

bus.addEventListener("dblclick", (e) => {
    e.target.style.marginLeft = '0px';
    e.target.style.transition = 'margin-left 5s';
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

const back = document.querySelector('body');

back.addEventListener('wheel', (image) => {
    let rand1 = Math.floor(Math.random() * 101);
    let rand2 = Math.floor(Math.random() * 101);
    let rand3 = Math.floor(Math.random() * 101);
    image.target.style.backgroundColor = 'rgb(' + rand1 + ', ' + rand2 + ', ' + rand3 + ')';
})