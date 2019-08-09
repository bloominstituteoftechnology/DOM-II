// Your code goes here
// Task 2

// This is the 'mouseover event created the fuction the long way.
const title = document.querySelector('h1')
function makeFontBold(event) {
    event.stopPropagation()
    event.currentTarget.style.cssText = 'color: blue; border: 1px solid black; transition: 2s; fontWeight: bold;'
}

title.addEventListener('mouseover', makeFontBold)  // <= this is the end of the 'mouseover

//thi