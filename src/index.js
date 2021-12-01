import './less/index.less'

// Your code goes here!

// 1 ******* keydown event
const logo = document.querySelector('.logo-heading');

function fKey(evt) {
    if (evt.key === 'f') {
        logo.textContent = "Hella Fun Freakin Bus";
    }
};
document.addEventListener('keydown', fKey);

// 2 *********  load event
window.addEventListener('load', (evt) => {
    alert('This page is loaded! Just like you will be on this Hella Fun Freakin Bus!');
});

// 3 ******** mouseover event
const h2Change = document.querySelector('h2');

h2Change.addEventListener('mouseover', function(h2Change) {
    h2Change.target.style.color = "green";
});

// 4 ******** mouseout event 
h2Change.addEventListener('mouseout', function(h2Change) {
    h2Change.target.style.color = "black";
});

// 5 ********* click event 

const destChange = document.querySelector('h4');
destChange.addEventListener('dblclick', function(evt) {
    evt.target.textContent = 'Get on gittin!';
});

// 6 ********* click event  
const paraElems = document.querySelectorAll('p');
paraElems.forEach(p => p.addEventListener('click', evt => evt.target.textContent = 'Anything to make this thing work'));

// //****** scroll event */
// const bigWords = document.querySelector('nav a')
// console.log(bigWords);
// bigWords.addEventListener('scroll', evt => {
//     evt.target.style.fontSize = '18px';
//     console.log('It works!!!');
// });


// ****** preventDefault
const noClick = document.querySelectorAll('nav a')
noClick.forEach(function(evt) {
    evt.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('stop trying');
    });
});



