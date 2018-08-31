const textContent = document.querySelectorAll('p');
const logo = document.querySelector('.logo-heading');
const introImage = document.querySelector('.intro img')
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a')
const headings = document.querySelectorAll('h2');
const buttons = document.querySelector('.btn')
const imgs = document.querySelectorAll('img')

let onOff;

function toggle(value, cb) {    
    if (value === 1) {
        cb();
        onOff = 0;
    } else {
        cb();
        onOff = 1;
    }
};

console.log(textContent.length);

// 1. Change first paragraph to goldenrod on click
const textContentClickHandler = function() {
    if (onOff === 1) {
        textContent[0].style.color = 'goldenrod';
    } else {
        textContent[0].style.color = 'black';
    }
};

textContent[0].addEventListener('click', function() {
    toggle(onOff, textContentClickHandler);
});

// 2. Change second paragraph to italic on double click
const textContentDoubleClickHandler = function() {
    if (onOff === 1) {
        textContent[1].style.fontStyle = 'italic';
    } else {
        textContent[1].style.fontStyle = 'normal';
    }
};

textContent[1].addEventListener('dblclick', function() {
    toggle(onOff, textContentDoubleClickHandler);
});