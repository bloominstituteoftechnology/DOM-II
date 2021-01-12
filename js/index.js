// Your code goes here
let header = document.querySelector('header');
header.addEventListener('mouseenter', () => {header.style.backgroundColor = 'skyblue'});
header.addEventListener('mouseleave', (event) => {event.currentTarget.style.backgroundColor = 'white'});

document.addEventListener('click', (event) => {event.target.style.backgroundColor = 'orange'}); 
document.addEventListener('keydown', () => {document.body.style.color = 'blue'});
document.addEventListener('keyup', () => {document.body.style.color = 'black'});
document.addEventListener('scroll', () => {document.body.style.backgroundColor = 'yellow'});
document.addEventListener('dblclick', (event) => {event.target.style.backgroundColor = 'white'});

document.addEventListener('select', (event) => {event.target.style.color = 'red'});

window.addEventListener('resize', () => document.body.style.border = '5px solid black');

let busImg = document.querySelector('header img');
busImg.addEventListener('drag', (event) => event.target.style.width = '100px');
busImg.addEventListener('dragend', (event) => event.target.style.width = '100%');

let navItems = document.querySelectorAll('nav-link');
navItems.forEach((link) => link.addEventListener('click', (event) => event.preventDefault()));
