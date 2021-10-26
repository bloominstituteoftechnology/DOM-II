//! 1. Load
window.addEventListener('load', () => {
    console.log('Voila! The page has loaded!');
});

//! 2. Click
const buttonClick = document.querySelectorAll('.btn');
buttonClick[0].addEventListener('click', e => {
    buttonClick[0].textContent = `Hey, don't click me! ${e.detail}`
});

//! 3. Mouse Over
const mouseOver2 = document.querySelector('.intro, h2, p');
mouseOver2.addEventListener('mouseover', e => {
    e.target.style.color = 'orange';
});

//! 4. Mouse Leave
const mouseLeave = document.querySelector('.intro, h2, p');
mouseLeave.addEventListener('mouseleave', e => {
    e.target.style.color = 'black';
})

//! 5. Key Down
const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', e => {
    e.target.style.color = '#8899A6';
    e.target.style.backgroundColor = '#15202B';
});

//! 6. Key Up
const keyUp = document.querySelector('body');
keyUp.addEventListener('keyup', e => {
    e.target.style.color = 'black';
    e.target.style.backgroundColor = 'white';
});

//! 7. Pointer Enter 
const pointerEnter = document.querySelector('.text-content p');
pointerEnter.addEventListener('pointerenter', e => {
    e.target.style.color = 'red';
});

//! 8 Pointer Leave
const pointerLeave = document.querySelector('.text-content p');
pointerLeave.addEventListener('pointerleave', e => {
    e.target.style.color = 'black';
});


