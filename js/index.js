// Your code goes here
// Task 2

// This is the 'mouseover' event created the fuction the long way.
const title = document.querySelector('h1')
function makeFontBold(event) {    
    event.currentTarget.style.cssText = 'color: blue; border: 1px solid black; transition: 2s; fontWeight: bold;'
}

title.addEventListener('mouseover', makeFontBold)  // <= this is the end of the 'mouseover

//this is the 'keydown' event 
document.addEventListener('keydown',(event) => {
alert("Stop pressing keys")
}) // end of 'Keydown'

// This is the 'wheeldown' event
const wheelImg = document.querySelector('h2')
wheelImg.addEventListener('wheel', (event) => {
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = 'rgb(255, 235, 205)'// ask about added the sandy-beach from variable... is that possible?;
}) //end

// start drap drop
const titleDrag = document.querySelector('h1')
const body = document.querySelector('body')

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

body.addEventListener("touchstart", dragStart, false);
body.addEventListener("touchend", dragEnd, false);
body.addEventListener("touchmove", drag, false);

body.addEventListener("mousedown", dragStart, false);
body.addEventListener("mouseup", dragEnd, false);
body.addEventListener("mousemove", drag, false);

function dragStart(event) {
    if (event.type === "touchstart") {
        initialX = event.touches[0].clientX - xOffset;
        initialY = event.touches[0].clientY -yOffset;
    } else {
        initialX = event.clientX - xOffset;
        initialY = event.clientY - yOffset;
    }
    if (event.target === titleDrag) {
        active = true;
    }
}

function dragEnd(event) {
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(event) {
    if (active) {
        event.preventDefault();
        if (event.type === "touchmove") {
            currentX = event.touches[0].clientX - initialX;
            currentY = event.touches[0].clientY - initialY;
        } else {
            currentX = event.clientX - initialX;
            currentY = event.clientY - initialY;
        }
        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, titleDrag);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px," + yPos + "px, 0";
} // completed the drag and drop 

// load
window.addEventListener('load', (event) => {
    alert('website fully loaded')
})// end

// focus
const hoverLinks = document.querySelector('nav a')
hoverLinks.addEventListener('focus', (event) => {
    event.target.style.color = 'rgb(255, 235, 205)';
})// end

// resize
const size = document.querySelector('body')
window.addEventListener('resize', (event) => {
    event.stopPropagation();
    body.style.backgroundColor = 'gold';
})// end


