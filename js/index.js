// Your code goes here
const backgroundHeader = document.querySelector('.main-navigation')
backgroundHeader.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue';
});
backgroundHeader.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'white';
});
const navBar = document.querySelectorAll('.nav a')
navBar.forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'red';
    })
});
navBar.forEach((element) => {
    element.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
    })
});
// const buss = document.querySelector('.intro img')
// buss.addEventListener('keydown', (e) => {
//     if ( )
// } )

// keydown
// Wheel
// Drag
// load
// focus
// resize
// scroll


