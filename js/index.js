// Your code goes here

// Short notattion for document object
const doc = document;

// Mouseover listener

const header = doc.querySelector('.main-navigation');

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


const counterNav = doc.createElement('span');
counterNav.innerHTML = 0;
// counterNav.style.cssFloat = 'right';
let counterDescription = doc.createElement('span');
counterDescription.innerHTML = 'Scroll Counter: '

const body = doc.querySelector('body');
body.addEventListener('wheel', (event) => {
    event.stopPropagation;
    counterNav.innerHTML++;
});

doc.querySelector('.main-navigation').append(counterDescription);
doc.querySelector('.main-navigation').append(counterNav);


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

