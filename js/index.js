// --------------------------- EVENT LISTENERS ------------------------ //

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
busImg.addEventListener('mouseover', event => {
    busImg.setAttribute('src', 'https://images.unsplash.com/photo-1537110008491-de25aefaf46a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80');
});

// 2. Mouseleave ---------------------------------------------------

const busImgReturn = document.querySelector('.intro img');
busImgReturn.addEventListener('mouseleave', event => {
    busImgReturn.setAttribute('src', 'img/fun-bus.jpg');
});

// 3. Load --------------------------------------------------------

window.addEventListener('load', event => {
    console.log('Locked and Loaded');
});

// 4. Click --------------------------------------------------------

const buttonClick = document.querySelector('.btn');
buttonClick.addEventListener('click', event => {
    buttonClick.textContent = `Boop! ${event.detail}`;
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

// Pointer Down ----------------------------------------------------------------

const pointerDown = document.querySelector('p');
pointerDown.addEventListener('pointerdown', event => {
    console.log('Pointer down event');
});

// // 6. Blur ------------------------------------------------------------

// const title = document.querySelector('div, img');
// title.addEventListener('blur', (event) => {
//     event.target.background = ' ';
// }); 

// // 7. Wheel -----------------------------------------------------------

// const adventureImageWheel = document.querySelector('img:nth-of-type(3)');
// adventureImageWheel.addEventListener('wheel', event => {
//     adventureImageWheel.setAttribute('src', 'img/adventure.jpg');
// });
