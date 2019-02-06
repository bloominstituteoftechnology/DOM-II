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
    event.target.style.color = 'yellow';
})

const newImg = document.querySelector('img');

newImg.addEventListener('mouseover', function(event) {
    alert('Click now and enter to win!');
    event.preventDefault();
})

const foot = document.querySelector('footer');

foot.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow';
})

const button = document.querySelector('.btn');

button.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'red';
})

const bttn = document.getElementById('butn');

bttn.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'black';
})

const headFour = document.querySelector('h4');

headFour.addEventListener('mouseover', function(event) {
    console.log(`The event type: ${event.type}`);
})

const headerNew = document.querySelector('.main-navigation');

headerNew.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'teal';
})