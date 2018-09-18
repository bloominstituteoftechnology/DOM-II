// Your code goes here
const header = document.querySelector('.main-navigation');

header.addEventListener('click', () => {
    header.classList.toggle('header')
})

const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('click', (event) => {
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

const button4 = button[3];

const image1 = document.querySelector('.intro img');

const image2 = document.querySelector('.img-content img');

const image3 = document.querySelector('.inverse-content img');

const footerButtons = document.querySelectorAll('.btn');

const footerButton1 = footerButtons[0];

const footerButton2 = footerButtons[1];

const footerButton3 = footerButtons[2];

