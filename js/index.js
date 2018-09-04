// Your code goes here
const nav = document.querySelectorAll('a');
const navHover = function(e){
    e.target.style.color = 'grey';
    e.preventDefault();
}
const navHoverNot = function(e){
    e.target.style.color = '';
}
nav.forEach (item => {item.addEventListener('mouseover', navHover)});
nav.forEach (item => {item.addEventListener('mouseleave', navHoverNot)});

const head = document.querySelector('.logo-heading');
const headingZoom = function(e){
    e.target.style.fontSize = '5rem';
}
head.addEventListener('click', headingZoom);

const button = document.querySelectorAll('.btn');
const buttonClicked = function(e) {
    e.target.style.backgroundColor = 'yellow';
    e.target.style.color = 'red';
}
button.forEach(item => {item.addEventListener('click', buttonClicked)});

const text = document.querySelectorAll('p');
const textCoppied = function(e) {
    e.target.style.backgroundColor = 'azure';
}
text.forEach(item => {item.addEventListener('copy',textCoppied)});