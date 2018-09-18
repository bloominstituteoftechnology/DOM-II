// mouseover
document.querySelector('.logo-heading').addEventListener('mouseover', (event) => { 
    event.currentTarget.innerHTML = 'Fun Bus!!!'
    event.currentTarget.style.color = 'orange';
});

// wheel
const container = document.querySelector('html');
document.addEventListener('wheel', () => {
    container.style.backgroundColor = '#ffdae0';
});

// scroll
document.addEventListener('scroll', () => {
    container.style.backgroundColor = '#ffedcc';
});

// click
const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => { 
    btn.addEventListener('click', (event) => {
        window.alert('FUN BUS IS READY TO DEPART!');
    });
});

// focus, blur, keyup, keydown
const inputs = document.querySelectorAll('.input');
inputs.forEach((input) => { 
    input.addEventListener('focus', (event) => {
        event.currentTarget.style.color = '#ee8033';
    });
    input.addEventListener('blur', (event) => {
        event.currentTarget.style.color = '#f46691';
    });
    input.addEventListener('keyup', (event) => {
        console.log(event.keyCode);
    });
    input.addEventListener('keydown', (event) => {
        console.log('Detected keydown');
    });
});

// resize
const nav = document.querySelector('nav');
window.addEventListener('resize', () => {
    nav.classList.toggle('reverse');
});

// dblclick
const h2s = document.querySelectorAll('h2');
h2s.forEach((h2) => {
    h2.addEventListener('dblclick', (event) => {
        event.target.style.fontSize = '5rem';
    });
});

// click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((a) => {
    a.addEventListener('click', (event) => {
        event.preventDefault();
        event.currentTarget.style.color = '#ee8033';
    });
});

// mouseover
nav.addEventListener('mouseover', (event) => {
    event.target.style.fontWeight = 'bold';
});

// mouseover
document.querySelector('#first-nav').addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.fontStyle = 'italic';
});