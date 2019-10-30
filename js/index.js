// Your code goes here

// Variables/Sectors

const containerSection = document.querySelectorAll('.container section');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const img = document.querySelector('img')
const introText = document.querySelector('.intro p');
const body = document.querySelector('body');
const navLink = document.querySelectorAll('.nav-link');
const testBtn = document.querySelector('.test-btn');
const testDiv = document.querySelector('.test-div');

// Events

// Event 1: mouseover - background to grey when hover over each section
containerSection.forEach(function(item) {
    item.addEventListener('mouseover', event => {
        event.currentTarget.style.backgroundColor = 'lightgray';
    })
})

// Event 2: mouseleave - background back to white when mouse leaves section
containerSection.forEach(function(item) {
    item.addEventListener('mouseleave', event => {
        event.currentTarget.style.backgroundColor = 'white';
    })
})

// Event 3: scroll - top navigation bar changes to a sand color when the page scrolls
document.addEventListener('scroll', event => {
     header.style.backgroundColor = '#F9E0CB';
})


// Event 4: resize - displays an alert when the browser window is resized
window.addEventListener('resize', event => {
    alert(`you resized the window`);
})


// Event 5: load - the h1 color changes as soon as the page finishes loading.
window.addEventListener('load', event => {
    h1.style.color = 'lime';
})

// Event 6: offline - displays an alert if you disconnect from the internet.
window.addEventListener('offline', event => {
    alert(`no internet connection`);
})

// Event 7: dblclick - hides the main image when double clicked.

img.addEventListener('dblclick', event => {
    img.style.visibility = 'hidden';
})

// Event 8: keydown - the fontsize of the text in the <p> in the intro section increases to 2rem when a key is pressed down.
document.addEventListener('keydown', event => {
    introText.style.fontSize = '2rem';
})

// Event 9: drag - background changes to olive when you drag sommething
document.addEventListener('drag', event => {
    body.style.backgroundColor = 'olive';
})

// Event 10: mousedown - nav link font size increases
navLink.forEach(function(item) {
    item.addEventListener('mousedown', event => {
        event.target.style.fontSize = '4rem';
    })
})

// Nest two similar events somewhere in the site and prevent the event propagation properly. 
testBtn.addEventListener('click', event => {
    event.stopPropagation();
    event.target.style.fontSize = '.5rem';
})

testDiv.addEventListener('click', event => {
    // event.stopPropagation();
    event.target.style.backgroundColor = 'purple';
})

//Stop the navigation from items from refreshing the page by using `preventDefault()`
navLink.forEach(node => {
    node.addEventListener('click', function(event){
        //stop the nav items from refreshing the page
        event.preventDefault();
        event.target.style.color = 'gray';
    });
});