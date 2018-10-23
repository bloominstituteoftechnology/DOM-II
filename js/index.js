//Your code goes here
const aTags = document.querySelectorAll('a');
const myNav = document.querySelector('.nav');
myNav.addEventListener('animationstart', function() {});

const myDest = document.querySelector('div.destination');
myDest.addEventListener('click', function() {
    event.target.style.color = 'red';
});

const myBtn = document.querySelector('.btn');
console.log(myBtn);
myBtn.addEventListener('select', function() {
    alert('Selection changed!');
}, true);

const myFoot = document.querySelector('.footer');
myFoot.addEventListener('mouseover', function(event) {
    event.target.textContent = 'Get the Foot out!';
});

let dragImg = document.querySelector('.rounded');
dragImg.addEventListener('dragstart', function(event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);
dragImg.addEventListener("dragend", function(event) {
    event.target.style.opacity = "";
}, false);

const myHeadings = document.querySelectorAll('h4');
myHeadings.addEventListener('blur', function(event) {
    event.target.style.background = "";
}, true);