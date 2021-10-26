//! 1. Load
window.addEventListener('load', () => {
    console.log('Voila! the page has loaded!')
});

//! 2. Click
const buttonClick = document.querySelectorAll('.btn');
buttonClick[0].addEventListener('click', e => {
    buttonClick[0].textContent = `Hey, don't click me! ${e.detail}`
});

//! 3. MouseOver
const mouseOver = document.querySelector('.logo-heading');
mouseOver.addEventListener('mouseover', e => {
    e.target.style.color = 'purple';
    setTimeout(function () {
        e.target.style.color = '';
    }, 5000);
});

const busImg = document.querySelector('.intro img');
busImg.classList.add('bus');
busImg.addEventListener('mouseover', () => {
    busImg.setAttribute('src', 'https://images.unsplash.com/photo-1537110008491-de25aefaf46a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80');
});

//! 4. Key Down
const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', e => {
    e.target.style.color = '#8899A6';
    e.target.style.backgroundColor = '#15202B';
});

//! 5. Key Up
const keyUp = document.querySelector('body');
keyUp.addEventListener('keyup', e => {
    e.target.style.color = 'black';
    e.target.style.backgroundColor = 'white';
});

//! 6. Mouse Leave
const busImgReturn = document.querySelector('.intro img');
busImgReturn.addEventListener('mouseleave', () => {
    busImgReturn.setAttribute('src', 'img/fun-bus.jpg');
});

