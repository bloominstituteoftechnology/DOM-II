// Your code goes here
const logNew = document.querySelector('.logo-heading');

logNew.addEventListener('click', function(event) {
    console.log('Bus is running!');
})

const headerTwo = document.querySelector('h2');

headerTwo.addEventListener('dblclick', function(event) {
    event.target.style.color = 'yellow';
})

const para = document.querySelector('p');

para.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
})

const newNav = document.querySelector('nav');

newNav.addEventListener('mouseover', function(event) {
    event.target.style.color = 'green';
})

const newImg = document.querySelector('img');

newImg.addEventListener('mouseover', function(event) {
    event.target.style.display = 'none';
})

const foot = document.querySelector('footer');

foot.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow';
})

const button = document.querySelector('.btn');

button.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'red';
})

const contain = document.querySelector('.container nav-container');

contain.addEventListener('mouseover', function(event) {
    console.log(`Event: ${event}`)
})

const headFour = document.querySelector('h4');

headFour.addEventListener('mouseover', function(event) {
    console.log(`The event type: ${event.type}`);
})

const ctn = document.querySelector('.container home');

ctn.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'teal';
})