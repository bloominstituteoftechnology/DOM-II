//! 1. Load
window.addEventListener('load', () => {
    console.log('Congrats, the page has loaded!')
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
})
