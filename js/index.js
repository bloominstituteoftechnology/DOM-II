// Your code goes here
const navTags = document.querySelectorAll('nav a');

const logo = document.querySelector('h1');
navTags[0].addEventListener('mouseover', (event) => {
    navTags[0].classList.toggle("makeRed");
});

navTags[1].addEventListener('click', (event) => {
    navTags[1].classList.toggle("makeRed");
    event.preventDefault();
});


navTags[2].addEventListener('dblclick', (event) => {
    navTags[2].classList.toggle("makeRed");
});

navTags[3].addEventListener('mousedown', (event) => {
    navTags[3].classList.toggle("makeRed");
});

TweenMax.from(logo, 1.5, {
    y: -100,
    ease: Back.easeOut.config(1.7)
});

window.addEventListener('load', (event) => {
    alert('Website has been loaded');
});
window.addEventListener('rezise', (event) => {
    console.log('The window has been resized')
});

