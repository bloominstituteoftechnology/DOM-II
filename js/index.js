// --------------------------- EVENT LISTENERS ------------------------ //

// 1. Mouseover -------------------------------------------------

const mouseOver = document.querySelector('.logo-heading');
mouseOver.addEventListener('mouseover', function(event){
    event.target.style.color = 'aquamarine';
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
});

// 2. Load --------------------------------------------------------

window.addEventListener('load', (event) => {
    console.log('Locked and Loaded');
});

// 3. Click --------------------------------------------------------

const buttonClick = document.querySelector('.btn');
buttonClick.addEventListener('click', event => {
    buttonClick.textContent = `Boop! ${event.detail}`;
});

// 4. Keydown ---------------------------------------------------------

let body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
    event.target.style.color = 'gray';
    event.target.style.backgroundColor = 'black';
});