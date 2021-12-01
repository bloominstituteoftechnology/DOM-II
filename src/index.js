import './less/index.less'

// Your code goes here!

// ******* keydown event
const logo = document.querySelector('.logo-heading');

function fKey(evt) {
    if (evt.key === 'f') {
        logo.textContent = "Hella Fun Freakin Bus";
    }
};
document.addEventListener('keydown', fKey);

// *********  load event
window.addEventListener('load', (evt) => {
    alert('This page is loaded! Just like you will be on this Hella Fun Freakin Bus!');
});

// ******** mouseover event
let h2Change = document.getElementsByTagName('h2');

document.addEventListener('mouseover', function(h2Change) {
    h2Change.target.style.color = "green";
});

// ******** mouseout event 
document.addEventListener('mouseout', function(h2Change) {
    h2Change.target.style.color = "black";
});

// ********* scroll event 

let words = document.querySelectorAll('p');
window.addEventListener('scroll', function () {
    words.textContent = 'Anything to make this thing work';
});