// Your code goes here
// MouseOver

const headChange = document.querySelector('.intro h2')
console.log(headChange);
function mouseOver(event) {
    event.target.style.color = 'red';
}
headChange.addEventListener('mouseenter', mouseOver)
// Keydown
// Wheel
// Load
// Focus
// Resize
// Scroll
// Select
// DoubleClick
// Drag/Drop
