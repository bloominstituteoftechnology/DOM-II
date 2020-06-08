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

const funBusBanner = document.querySelector(".intro > img");
funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.25)');

const footer = document.querySelector('.footer');
footer.addEventListener('contextmenu', (e) => { e.target.style.backgroundColor = 'Lightcoral'; })

const adventureAwaits = document.querySelectorAll('.text-content h2')
adventureAwaits.forEach(node => { node.addEventListener('mousemove', (e) => { e.target.style.color = 'Navy' }) });