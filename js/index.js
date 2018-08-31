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

// 3. Change third paragraph to pink background on mouseover
const textContentMouseOverHandler = function() {
    if (onOff === 1) {
        textContent[2].style.backgroundColor = 'rgb(252, 17, 169)';
    } else {
        textContent[2].style.backgroundColor = 'white';
    }
};

textContent[2].addEventListener('mouseover', function() {
    toggle(onOff, textContentMouseOverHandler);
});

// 4. Change the opacity of the intro (top) image every time a key is pressed
document.addEventListener('keydown', (event) => {
    introImage.style.opacity = `${Math.random()}`;
});