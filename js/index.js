document.querySelector('.logo-heading').addEventListener('mouseover', (event) => { 
    event.currentTarget.innerHTML = 'Fun Bus!!!'
    event.currentTarget.style.color = 'orange';
});

const container = document.querySelector('html');
document.addEventListener('wheel', () => {
    container.style.backgroundColor = '#ffdae0';
});

document.addEventListener('scroll', () => {
    container.style.backgroundColor = '#ffedcc';
});

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => { 
    btn.addEventListener('click', (event) => {
        window.alert('FUN BUS IS READY TO DEPART!');
    });
});

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

const nav = document.querySelector('nav');
window.addEventListener('resize', () => {
    nav.classList.toggle('reverse');
});


const h2s = document.querySelectorAll('h2');
h2s.forEach((h2) => {
    h2.addEventListener('dblclick', (event) => {
        event.target.style.fontSize = '5rem';
    });
});


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((a) => {
    a.addEventListener('click', (event) => {
        event.preventDefault();
        event.currentTarget.style.color = '#ee8033';
    });
});

nav.addEventListener('mouseover', (event) => {
    event.target.style.fontWeight = 'bold';
});

document.querySelector('#first-nav').addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.fontStyle = 'italic';
});