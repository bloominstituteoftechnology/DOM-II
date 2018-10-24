//Your code goes here
const aTags = document.querySelector('a');
const myNav = document.querySelector('.nav');
myNav.addEventListener('animationstart', function() {});

// const myBus = document.querySelector('h1');
// console.log(myBus);
// myBus.addEventListener('resize', function() {
//     event.target.style.borderColor = 'yellow';
// });

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
console.log(headings[1]);
headings[1].addEventListener('click', function() {
    event.target.style.background = "red";
}, true)


// const myMount = document.querySelector('.mountain');
// console.log(myMount);
// myMount.addEventListener('blur', function(event) {
//     event.target.style.background = "";
// }, true);

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

const myLogo = document.querySelector('.logo-heading');
console.log(myLogo);
myLogo.addEventListener('mousedown', function() {
    event.target.style.opacity = '0.5';
}, true);