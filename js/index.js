// 1. Mouseover -------------------------------------------------

const mouseOver = document.querySelector('.logo-heading');
mouseOver.addEventListener('mouseover', event => {
    event.target.style.color = 'aquamarine';
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
});

const busImg = document.querySelector('.intro img');
busImg.classList.add('bus');
busImg.addEventListener('mouseover', () => {
    busImg.setAttribute('src', 'https://images.unsplash.com/photo-1537110008491-de25aefaf46a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80');
});

// 2. Mouseleave ---------------------------------------------------------------

const busImgReturn = document.querySelector('.intro img');
busImgReturn.addEventListener('mouseleave', () => {
    busImgReturn.setAttribute('src', 'img/fun-bus.jpg');
});

// 3. Load ---------------------------------------------------------------------

window.addEventListener('load', () => {
    console.log('Locked and Loaded');
});

// 4. Click --------------------------------------------------------------------

const buttonClick = document.querySelectorAll('.btn');
buttonClick[0].addEventListener('click', event => {
    buttonClick[0].textContent = `Boop! ${event.detail}`;
});

buttonClick[1].addEventListener('click', event => {
    buttonClick[1].textContent = `Boop! ${event.detail}`;
});

buttonClick[2].addEventListener('click', event => {
    buttonClick[2].textContent = `Boop! ${event.detail}`;
});

// 5. Key-down & Key-up ---------------------------------------------------------

const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', event => {
    event.target.style.color = 'gray';
    event.target.style.backgroundColor = 'black';
});

const keyUp = document.querySelector('body');
keyUp.addEventListener('keyup', event => {
    event.target.style.color = 'black';
    event.target.style.backgroundColor = 'white';
});

// 6. Pointer Down -------------------------------------------------------------

const pointerDown = document.querySelector('p');
pointerDown.addEventListener('pointerdown', () => {
    console.log('Pointer down event');
});

// 6. Blur ---------------------------------------------------------------------

const title = document.querySelector('div, img');
title.addEventListener('blur', (event) => {
    event.target.background = ' ';
}); 

// 7. Wheel -------------------------------------------------------------------

const adventureImageWheel = document.querySelector('img:nth-of-type(3)');
adventureImageWheel.addEventListener('wheel', () => {
    adventureImageWheel.setAttribute('src', 'img/adventure.jpg');
});

// 8. Timeout -----------------------------------------------------------------

const timeOut = new XMLHttpRequest();
timeOut.addEventListener('timeout', () => {
    console.log('Timeout!!');
});

// 9. Window resize -----------------------------------------------------------

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// 10. Online -----------------------------------------------------------------

const online = document.querySelector(online);
window.addEventListener('online', () => {
    console.log("You are now connected to the network.");
});