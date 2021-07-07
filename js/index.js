// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll` ----- ?
// * `select`
// * `dblclick`
// * `drag / drop`

// Your code goes here

// Declaring variables I will be using
const logo = document.querySelector('.logo-heading')
const introH2 = document.querySelector('.intro h2')
const pContent = document.querySelector('.content-section .text-content p')
const intro = document.querySelector('.intro')

    // -----Mouseover------
logo.addEventListener('mouseover', function(event) {
    event.target.style.color = 'purple';

        // This sets a timer for the color to restart after a delay of 1000
    setTimeout(function() {
        event.target.style.color = '';
    }, 1000)
});

    // -----Keydown-----
document.addEventListener('keydown', function(event) {
    if (event.key === 'e') {

        // This changes the text design when pressing the event key 'e'
        introH2.textContent = 'You pressed "e" so this changed!!!';
        introH2.style.color = 'red';
        introH2.style.fontSize = '6rem';
        introH2.style.textTransform = 'uppercase';
    }
})
    // -----Wheel-----
document.addEventListener('wheel', function(event) {
    pContent.textContent = 'Changed this content with scroll wheel';
    pContent.style.color = 'green';
})


    // -----Dblclick-----
document.addEventListener('dblclick', function(event) {
    intro.style.backgroundColor = 'cyan';
})


