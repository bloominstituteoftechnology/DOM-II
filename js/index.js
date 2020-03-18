// Your code goes here
 const doc = document;

 // MOUSEOVER 

const changeNav = doc.querySelector('.main-navigation');

changeNav.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.color = 'violet';
});

// KEYDOWN

const bodyColor = doc.querySelector('body');
bodyColor.addEventListener('keydown', (event) => {
    bodyColor.style.backgroundColor = 'pink';
});

// WHEEL
const bodyColor2 = doc.querySelector('body');
bodyColor2.addEventListener('wheel', (event) => {
    bodyColor2.style.backgroundColor = 'magenta';
});

// Drag
const images = doc.querySelector('img');
images.addEventListener('dragstart', (event) => {
    images.target.style.opacity = 1.5;
}, false);

// LOAD

window.addEventListener('load', (event) => {
    alert("HELLO! THANKS FOR VISITING FUN BUS!");
});


// DBLCLICK

const button = doc.querySelectorAll('.btn');
const buttonClicked = function(e) {
    e.target.style.backgroundColor = 'blue';
    e.target.style.color = 'white';
}
button.forEach(item => {item.addEventListener('click', buttonClicked)});

// SCROLL

window.scroll({
    top: 0,
    behavior: 'smooth'
});

// RESIZE

window.addEventListener('resize', (event) => {
    anchorSelector.forEach(element => element.style.border = "1px dashed yellow")
    anchorSelector.forEach(element => element.style.borderRadius = "4px")
    anchorSelector.forEach(element => element.style.padding = "2px")
});


// Mouseleave
const footer = doc.querySelector('.footer');
footer.addEventListener('mouseleave', (event) => {
    footer.style.background = 'indigo';
})

const header = doc.querySelector('.main-navigation');
header.addEventListener('mouseleave', (event) => {
    header.style.background = 'indigo';
})
