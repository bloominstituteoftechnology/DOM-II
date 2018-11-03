// Your code goes here

// 1st Event
const body = document.querySelector('body');
const home = document.querySelector('.home');

document.addEventListener('keypress', function() {
    body.classList.toggle('colorToggle');
});

// 2nd Event
body.addEventListener('copy', function(event) {
    event.target.style.visibility = 'hidden';
});

// 3rd Event 
const images = document.querySelector('img');

images[0].addEventListener('mouseenter', function (event) {
    const str = event.target.width - 250;
    event.target.style.width = `${str}px`.toString();
});

images[0].addEventListener('mouseleave', function(event) {
    const str = event.target.width + 250;
    event.target.style.width = `${str}px`.toString();
});

// 4th Event
const headers = document.querySelectorAll('h2');

headers.forEach(header => {
    header.addEventListener('drag', function() {
        header.classList.add('changeColor');
    });
});

// 5th Event
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
    p.addEventListener('copy', function(event) {
        event.stopPropagation();
        p.classList.add('changeColor');
    });
});

// 6th Event
const navLinks = document.querySelectorAll('a');

navLinks.forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
        images.forEach(image => image.classList.toggle('remove'));
    });
});

// 7th Event
const logo = document.querySelector('.logo-heading');

logo.addEventListener('dblclick', function() {
    event.target.style.fontSize = '85px';
});

// 8th Event
const destinations = document.querySelectorAll('.destination p');

destinations.forEach(destination => {
    destination.addEventListener('wheel', function() {
        destination.style.fontSize = '15px';
    });
});

// 9th Event
document.addEventListener('keydown', function() {
    logo.classList.add('changeColor');
});

// 10th Event
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'maroon';
    });
});
