// Your code goes here
const aTags = document.querySelectorAll('a');
const myNav = document.querySelector('.nav');
myNav.addEventListener('animationstart', function() {});

const myDest = document.querySelector('div.destination');
myDest.addEventListener('click', function() {
    event.target.style.color = 'red';
});

const myBtn = document.querySelectorAll('.btn');
console.log(myBtn);
myBtn.addEventListener('focus', function() {
    event.target.style.backgroundColor = 'green';
}, true);