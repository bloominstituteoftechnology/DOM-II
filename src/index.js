import './less/index.less'

// Your code goes here!

// -------------------------One-----------------------------
window.addEventListener('load', event => {
    console.log(`${event.type} happened`);
});
// -------------------------Two-----------------------------
window.addEventListener('scroll', event => {
    console.log(`${event.type} happened`);
});

// -------------------------Three-----------------------------
const button = document.querySelectorAll('.btn'); 
// button.addEventListener('mouseover', event => {
//     console.log(`${event.type} happened`);
// });

button.forEach(button => {
    button.addEventListener('mouseover', function(event) {
        console.log(`${event.type} happened`);
    });
});

// -------------------------Four-----------------------------
window.addEventListener('keydown', event => {
    console.log(`${event.type} happened`);
});

// -------------------------Five-----------------------------
button.forEach(button => {
    button.addEventListener('dblclick', function(event) {
        console.log(`event passing through ${event.currentTarget.nodeName}`);
    });
});

// -------------------------Six-----------------------------
window.addEventListener('select', event => {
    console.log(`${event.currentTarget} was selected`);
});

// -------------------------Seven-----------------------------

// -------------------------Eight-----------------------------


// -------------------------Nine-----------------------------


// -------------------------Ten-----------------------------


