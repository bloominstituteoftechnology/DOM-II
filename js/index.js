// Your code goes here
const nav = document.querySelector('.main-navigation');
const home = document.querySelector('.home');
const header = document.querySelector('.intro');
const images = document.querySelectorAll('.img');
const btns = document.querySelectorAll('.btn');

nav.addEventListener('mouseenter', (event) => {
    console.log('How are you.');
});

nav.addEventListener('wheel', (event) => {
    nav.style.color = 'blue';
}); 

