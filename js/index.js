// Your code goes here

// Short notattion for document object
const doc = document;

// Mouseover listener

const header = doc.querySelector('.main-navigation');

const navlinks = doc.querySelector('.nav');

navlinks.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('active');
});
navlinks.addEventListener('mouseout', (event) => {
    event.target.classList.toggle('active');
});
// Bolden up our header to make it more prominent

header.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.fontWeight = 'bold';
});


// Keydown listener

// Remind people to pay attention and scroll

// doc.addEventListener('keydown', (event) => {
//     const keydown = event.key;
//     alert('Typing any keys while reading our page including: ' + keydown + ' is strictly prohibited. Yes, even ' + keydown + '.');
// });



// Wheel listener

// Show how much pixels people are scrolling through


const scrollPixelNav = doc.createElement('span');
scrollPixelNav.innerHTML = 0;
scrollPixelNav.style.fontSize = '1.6rem';
// onst scrollPixelNav = doc.createElement('span');
// scrollPixelNav.innerHTML = 0;


// scrollPixelNav.style.cssFloat = 'right';
let scrollPixelDescription = doc.createElement('span');
scrollPixelDescription.innerHTML = 'Scroll Pixel Counter: '
scrollPixelDescription.style.fontSize = '1.6rem';

const body = doc.querySelector('body');
body.addEventListener('wheel', (event) => {
    event.stopPropagation;
    scrollPixelNav.innerHTML++;
});

doc.querySelector('.main-navigation').append(scrollPixelDescription);
doc.querySelector('.main-navigation').append(scrollPixelNav);


// Drag and Drop

// Asign elements to fill and empties constants

const fill = doc.querySelector('.fill');
const empties = doc.querySelectorAll('.empty');

// Add listeners to the filled div
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Run loop through empty div and add listeners with callback functions 
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}

// Load Event Listener

// window.addEventListener("load", function(event) {
//     setTimeout(() => (alert("Are you ready? Because this webpage is.."), 0));
// });

// Focus Event Listener
const formey = doc.getElementById('message');
formey.innerHTML = '';
formey.addEventListener('focus', (event) => {
    event.target.style.border = '3px dashed green';
    event.target.innerHTML = 'I noticed you want to send me a message';
    console.log(event.target);
});

// Focus Blus Listener
formey.addEventListener('blur', (event) => {
    event.target.style.border = '3px dashed red';
    event.target.innerHTML = 'I guess not : (';
    console.log(event.target);
});

// Focus Resize Listener
window.addEventListener('resize', (event) => {
    console.log(event);
    alert('No cheating here. We know if you are rezing');
});

// Scroll Listener

const funBox = doc.createElement('div');
funBox.innerHTML = 'funbox';
funBox.style.display = 'none';
header.appendChild(funBox);

window.addEventListener('scroll', (event) => {
    setTimeout(() => (funBox.className = 'scroll-active'), 1000);
});