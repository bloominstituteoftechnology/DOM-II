// Your code goes here
const logohead = document.querySelector('.logo-heading');
logohead.addEventListener('click', (e) => {

    logohead.style.color = 'hotpink';
    e.stopPropagation();
});

const navlink = document.querySelectorAll('a');
navlink.addEventListener('keydown', (e) => {

    navlink.style.color = 'white';
    e.stopPropagation();
});

const introbox = document.querySelector('.intro');
introbox.addEventListener('mouseenter', (e) => {

    introbox.style.transform = 'scale(1.3)';
    introbox.style.transition = "transform 1s";
    e.stopPropagation();
});

const introbox = document.querySelector('.intro');
introbox.addEventListener('mouseleave', (e) => {

    introbox.style.transform = 'scale(1)';
    introbox.style.transition = "transform 1s";
    e.stopPropagation();
});

const introbox = document.querySelector('.intro');
introbox.addEventListener('mouseleave', (e) => {

    introbox.style.transform = 'scale(1)';
    introbox.style.transition = "transform 1s";
    e.stopPropagation();
});

const textContent = document.querySelector('.text-content');
textContent.addEventListener('dblclick', e => {
    e.target.style.textDecoration = "underline";
});