// Your code goes here
const parentContainer = document.querySelector('.home');
const navBox = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const textContent = document.querySelector('.text-content');


navBox.addEventListener('mouseover', (event) => {
    console.log('Hello');
    navBox.style.backgroundColor = 'red';
    navLinks.style.color = 'green';
});

textContent.addEventListener('click', (event) => {
    console.log('Hello');
    textContent.style.color = 'purple';
})
