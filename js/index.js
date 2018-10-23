//Your code goes here
const aTags = document.querySelector('a');
const myNav = document.querySelector('.nav');
myNav.addEventListener('animationstart', function() {});

const myDest = document.querySelector('div.destination');
myDest.addEventListener('click', function() {
    event.target.style.color = 'red';
});

const myBtn = document.querySelectorAll('.btn');
console.log(myBtn);
for (let i = 0; i < myBtn.length; i++) {
    myBtn[i].addEventListener('click', function() {
        alert('Selection changed!');
    }, true);
}


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

const myBody = document.querySelector('body');
console.log(myBody);
myBody.addEventListener('keydown', function() {
    event.target.style.background = 'lightblue';

});

const headings = document.querySelectorAll('h4');
console.log(headings[0]);
headings[0].addEventListener('click', function() {
    event.target.style.background = "red";
}, true)


const myMount = document.querySelector('.mountain');
console.log(myMount);
myMount.addEventListener('blur', function(event) {
    event.target.style.background = "";
}, true);

const myContent = document.querySelector('.home');
console.log(myContent);
myContent.addEventListener('dblclick', function() {
    alert('You clicked me!!!');
});

const myPick = document.querySelector('.pick');
console.log(myPick);
myPick.addEventListener('paste', function(event) {
    console.log(event);
    window.setTimeout(function() {
        alert('Pasted!');
    });
});