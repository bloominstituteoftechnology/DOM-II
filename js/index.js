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
const wheelImg = document.querySelectorAll('img')
let scale = 1;
wheelImg.addEventListener('wheel', () => {
event.preventDefault();
scale += event.deltaY *-0.01;

scale = Math.min(Math.max(.125, scale), 4);

wheelImg.style.transform = `scale(${scale})`;
})
