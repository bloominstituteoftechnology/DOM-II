// Your code goes here

//changes nav links to purple when clicked
const links = document.querySelector('nav a')

function purple(event) {
    links.querySelector.background = 'yellow'
}
links.addEventListener('click', purple)

//animation on the main navigation

let intro = document.querySelector(".main-navigation")
intro.addEventListener('animationstart', start, false);
intro.addEventListener('animationiteration', iterate, false);
intro.addEventListener('animationend', end, false);

function start(e) {
    document.body.style.backgroundColor = 'purple';
}

function iterate(e) {
    document.body.style.backgroundColor = 'steelblue';
}

function end(e) {
    document.body.style.backgroundColor = 'pink';
}

//change color
document.querySelector('.text-content', ).style.backgroundColor = 'pink';
document.querySelector('.content-destination').style.backgroundColor = 'steelblue';
document.querySelector('.content-pick').style.backgroundColor = 'lavender';

//animation on the nav
document.querySelector(".nav").animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-300px)' }
], {
    // timing options
    duration: 4000,
    iterations: 1
});