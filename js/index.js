// Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop
// Mouseover h1 to turn text red
let h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
})
// Press B on Body to turn H1 into Funnest Bus
let body = document.querySelector('body');
body.addEventListener('keydown', function(event){
    if (event.keyCode == 66) {
        h1.innerHTML = 'Funnest Bus';
    }
})
// Mouse wheel on body to turn .container.home[0] Tan 
let container = document.querySelectorAll('.container.home')
body.addEventListener('wheel', function() {
    container[0].style.background = 'Tan';
})
// When window loads console displays a message
window.addEventListener('load', () => {
    console.log('page is loaded');
})
// When window is resized, the area of the window is calculated
window.addEventListener('resize', () => {
    console.log(window.innerWidth + window.innerHeight)
})
// When scrolled it will console.log
window.addEventListener("scroll", () => {
    console.log('you scrolled')
})
//Select
let introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('select', e => {
    e.currentTarget.style.backgroundColor = 'white';
})
//dbl click on footer for it to turn to teal background
let footer = document.querySelector('footer');
footer.addEventListener('dblclick', function(event) {
    event.target.style.background = '#62A2B8'

})
//drag/drop Drag Bus img to the first h2 and drop to turn the background color red, and resize image to 400px when dragged. Drag second image over h2. Also used preventDefault to stop dragover.

let introImg = document.querySelector('.intro img');

introImg.addEventListener('drag', (event) => {
    event.currentTarget.style.width = '400px';
})
introImg.addEventListener('dragend', (event) => {
    event.currentTarget.style.width = '800px';
})
introHeader.addEventListener('dragover', (event) => {
    event.preventDefault();
});
introHeader.addEventListener('drop', (event) => {
    body.style.backgroundColor = 'black';
});

//Prevent nav from refreshing page
document.querySelector('nav').addEventListener('click', function(event) {
    event.preventDefault()
})