// Your code goes here

const navLinks = document.querySelector('a')
const busImg = document.querySelector('.intro img')
const destination = document.querySelector('.destination');
const footer = document.querySelector('.footer')
const body = document.querySelector('body')
const btn = document.querySelector('.btn')
const middleImage = document.querySelector('.content-destination img');
const headerContainer = document.querySelector('.intro');
const destinationText = document.querySelectorAll('.destination');

// 1.
navLinks.addEventListener('mouseover', () => {
    console.log('mouse went over')
    navLinks.style.color = 'yellow';
});

// 2. 
navLinks.addEventListener('mouseout', () => {
    console.log('mouse went out')
    navLinks.style.color = 'black';
})  
