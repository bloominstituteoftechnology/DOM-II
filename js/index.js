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









