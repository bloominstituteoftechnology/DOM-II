// Your code goes here


// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick

const mainImage = document.querySelector('img');

mainImage.addEventListener('mouseover', (event) => {
    event.target.style.filter = 'grayscale(100%)'
})