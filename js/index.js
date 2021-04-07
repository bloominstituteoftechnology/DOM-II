// Your code goes here

// Nav Links selector 
let navLinks = document.querySelector('.nav');
navLinks.addEventListener('click', (event) => {
    event.target.style.color = 'orange'
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);


// Keydown selector

const keyPusher = document.querySelector('body')
keyPusher.addEventListener('keydown', function(event) {
    event.target.style.color = 'orange'
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

// Wheel selector
const el = document.querySelector('.img-content');
let scale = 1;
el.onwheel = zoom;
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}

// double click selector
let funBusTitle = document.querySelector('.logo-heading');
 funBusTitle.addEventListener('dblclick', function (event) {
    event.target.style.color = 'orange';
    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);

// keyup selector
const keyPusher2 = document.querySelector('body')
keyPusher2.addEventListener('keyup', function(event) {
    event.target.style.color = '#808000'
    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
}, false);

const form = document.querySelector('.footer');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';
}, true);