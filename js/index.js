// Your code goes here
const nav = document.querySelector('.main-navigation');
nav.addEventListener('mouseover', (event) => {
    console.log(event.target);
    event.target.style.backgroundColor = 'yellow';
    // event.target.select
});

const home = document.querySelector('.intro');
console.log(home);
home.addEventListener('mousedown', function (event) {
    event.target.style.backgroundColor = 'pink';
    console.log(event);
});

const h1 = document.querySelector('.logo-heading');
h1.addEventListener('dragover', (event) => {
    event.target;
});

const intro = document.querySelector('.intro-img');
intro.addEventListener('drag', (event) => {
    // event.target.drag;
}, false);

const text = document.querySelector('.text-content');
text.addEventListener('scroll', (event) => {
    even
});

const h2 = document.querySelector('.text-content h2');
h2.addEventListener('dblclick', (event) => {
    event.currentTarget.style.color = 'blue';
});

const image = document.querySelector('.content-destination img');
image.addEventListener('drop', (event) => {
    event
});

const destination = document.querySelector('.destination');
destination.addEventListener('keypress', (event) => {
    event.target.style.backgroundColor = 'orange';

});

const h4 = document.querySelector('.destination h4');
h4.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = 'red';
});

const button = document.querySelector('.btn');
button.addEventListener('click', (event) => {
    event.target.style.color = 'black';
});
