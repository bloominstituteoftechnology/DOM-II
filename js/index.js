// Your code goes here
document.querySelector('title').innerText = 'Fun Bus Travel Agency - ????';
document.querySelector('.content-destination > img').alt = 'I\'m on a boat!';

const navigation = document.querySelectorAll('.nav-link');
navigation.forEach((navLink) => {
    navLink.addEventListener('mouseover', (event) => event.currentTarget.style.color = 'pink');
    navLink.addEventListener('click', (event) => event.preventDefault());
});

const navHead = document.querySelector('.logo-heading');
let fntSize = 3;
navHead.addEventListener('wheel', (event) => {
    fntSize += 0.1;
    event.currentTarget.style.fontSize = fntSize + 'rem';
    event.preventDefault();
});

const bod = document.querySelector('body');
bod.addEventListener('keydown', (event) => {
    document.title += event.key;
});

const introImg = document.querySelector('.img-bus');
introImg.addEventListener('dragstart', (event) => {
    event.currentTarget.style.transform = 'rotate(180deg)';
});

const funImg = document.querySelector('.img-fun');
window.addEventListener('load', () => funImg.style.transform = 'rotate(90deg)');

window.addEventListener('resize', () => bod.style.backgroundColor = 'lightgrey');

const introWelcome = document.querySelector('.intro > h2');
window.addEventListener('scroll', (event) => introWelcome.style.fontSize = '6rem');

const imgDest = document.querySelector('.img-destination');
imgDest.addEventListener('dblclick', (event) => document.title += ` ${event.detail}! ${event.detail} clicks! Ah ah ah! `);

window.addEventListener('copy', (event) => {
    let howl = 'AWWWOOOOOOOOOOOOO!!!';
    event.clipboardData.setData('text/plain', howl);
    alert(howl);
    event.preventDefault();
});


