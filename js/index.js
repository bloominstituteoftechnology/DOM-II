// Your code goes here
const btn = document.querySelectorAll('.btn')

btn[0].addEventListener('mouseover', () => {
    btn[0].style.color = 'orange';
});

btn[0].addEventListener('mouseout', () => {
    btn[0].style.color = 'white';
});

btn[1].addEventListener('click', () => {
    btn[1].classList.toggle('scaled');
});

btn[2].addEventListener('dblclick', () => {
    btn[2].classList.toggle('transformed');
});

const busImg = document.querySelector('.fun-bus-img')

busImg.addEventListener('mousemove', () => {
    busImg.classList.toggle('black-and-white');
});

const homePage = document.querySelector('.home')

window.addEventListener('keydown', () => {
    homePage.style.color = 'blue';
});

window.addEventListener('keypress', () => {
    homePage.style.color = 'orange';
    homePage.style.backgroundColor = 'white';
});

window.addEventListener('scroll', () => {
    homePage.style.backgroundColor = 'pink';
});

window.addEventListener('keyup', () => {
    homePage.style.color = 'black';

});

const logo = document.querySelector('.logo-heading')

//logo's event does not bubble up to main-navigation when using stopPropagation
logo.addEventListener('mousedown', () => {
    logo.style.color = 'red';
    event.stopPropagation();
});

const mainNav = document.querySelector('.main-navigation')

mainNav.addEventListener('mousedown', () => {
    mainNav.style.backgroundColor = 'gold';
});

//Preventing nav items from refreshing the page
let navItems = document.querySelectorAll('.nav-link')
navItems = Array.from(navItems);

navItems.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});


