// Your code goes here
const header = document.querySelector('.main-navigation');

header.addEventListener('dblclick', () => {
    header.classList.toggle('header')
})

const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseenter', (event) => {
    event.stopPropagation();
    logoHeading.classList.toggle('logoHeading');
})

const button = document.querySelectorAll('.nav-link');

const button1 = button[0];

button1.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    let home = document.querySelector('.home');
    home.classList.toggle('button1');
})

const button2 = button[1];

button2.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    let home = document.querySelector('.home');
    home.classList.toggle('button2');
})

const button3 = button[2];

button3.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    let home = document.querySelector('.home');
    home.classList.toggle('button3');
})

const button4 = button[3];

button4.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    let home = document.querySelector('.home');
    home.classList.toggle('button4');
})

const image1 = document.querySelector('.intro img');

image1.addEventListener('mouseup', (event) => {
    event.stopPropagation();
    image1.classList.toggle('image1');
})
const image2 = document.querySelector('.img-content img');

image2.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    image2.classList.toggle('image2');
})

const image3 = document.querySelector('.inverse-content img');

image3.addEventListener('select', (event) => {
    event.stopPropagation();
    image3.classList.toggle('image3');
})

const footerButtons = document.querySelectorAll('.btn');

const footerButton1 = footerButtons[0];

footerButton1.addEventListener('keydown', (event) => {
    event.stopPropagation();
    const contentPick = document.querySelector('.content-pick');
    contentPick.classList.toggle('footerButton1');
})

const footerButton2 = footerButtons[1];

footerButton2.addEventListener('keyup', (event) => {
    event.stopPropagation();
    const contentPick = document.querySelector('.content-pick');
    contentPick.classList.toggle('footerButton2');
})

const footerButton3 = footerButtons[2];

footerButton3.addEventListener('keypress', (event) => {
    event.stopPropagation();
    const contentPick = document.querySelector('.content-pick');
    contentPick.classList.toggle('footerButton3');
})


const colorDiv = document.querySelector('.colorDiv');

colorDiv.addEventListener('mousemove', (event) => {
    event.stopPropagation();
    colorDiv.style.backgroundColor = 'rgb('+event.offsetX+','+event.offsetY+',40)'
})