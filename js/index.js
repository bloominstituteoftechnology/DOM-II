// Your code goes here
const body = document.querySelector('.logo-heading');
body.addEventListener('click', event => {
    body.innerHTML = 'Bus Fun';
});
console.log('body');

const navLinks = document.querySelector('.nav-link');
navLinks.addEventListener('mouseover', event => {
    navLinks.style.color = "red";
});
console.log('nav');

const headerImg = document.querySelector('img')
window.addEventListener('resize', () => {
    headerImg.style.width = '50px';
})
