import './less/index.less'

// Your code goes here!

// -------------------------One-----------------------------
window.addEventListener('load', event => {
    console.log(`${event.type} happened`);
});
// -------------------------Two-----------------------------
// const buttonsClick = document.querySelectorAll(".btn");

// function clickButton() {
//     console.log('None of these buttons work');
// }

// buttonsClick.addEventListener("click", clickButton);
// -------------------------Three-----------------------------
// const button = document.querySelector('.btn');

// button.addEventListener('focus', (event) => {
//   event.target.style.background = 'pink';
// });

// button.addEventListener('blur', (event) => {
//   event.target.style.background = '';
// });

// -------------------------Four-----------------------------
// const links = document.querySelectorAll("#");

// links.forEach(link => {
//   link.addEventListener("click", function(event) {
//     event.preventDefault();
//   });
// });

// -------------------------Five-----------------------------
window.addEventListener('scroll', event => {
    console.log(`${event.type} happened`);
});

// -------------------------Six-----------------------------
const button = document.querySelectorAll('.btn'); 
// button.addEventListener('mouseover', event => {
//     console.log(`${event.type} happened`);
// });

button.forEach(button => {
    button.addEventListener('mouseover', function(event) {
        console.log(`${event.type} happened`);
    })
})

// -------------------------Seven-----------------------------
window.addEventListener('keydown', event => {
    console.log(`${event.type} happened`);
});
// -------------------------Eight-----------------------------


// -------------------------Nine-----------------------------


// -------------------------Ten-----------------------------


