// Your code goes here

let funBus = document.querySelector('.intro img');

funBus.addEventListener('mouseover', event => {
    funBus.src = ['img/no-fun-bus.jpg'];
});

document.addEventListener('keydown', event => {
    alert('THE FUN IS OVER');
});

document.addEventListener('wheel', event => {
    alert('You\'re not moving this bus!')
});

let mapImage = document.querySelector('.img-content');

mapImage.addEventListener('drag', event => {
    alert('STOP IT, HOW WILL WE KNOW WHERE TO GO??');
});

document.addEventListener('load', event => {
    
});

'focus';

document.addEventListener('resize', event => {
    alert('Pls stop');
});

document.addEventListener('scroll', event => {
    alert('weeeeeeeee');
});

let paragraph = document.querySelectorAll('nav a');

paragraph.addEventListener('select', event => {
    paragraph.style.color = 'blue';
});

let body = document.querySelector('body');

body.addEventListener('dblclick', event => {
    body.style.color = 'blue';
});