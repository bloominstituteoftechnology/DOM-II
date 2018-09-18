// Your code goes here

// Selectors

const background = document.querySelector('body');

const mainImage = document.querySelector('.container .intro img');

const mainNavigation = document.querySelector('.main-navigation');

const mainNavLogo = document.querySelector('.logo-heading');

const mainNavText = document.querySelectorAll('.nav-link');

const funInTheSun = document.querySelector('.destination h4')

const video = document.createElement('video');
video.style.maxWidth = '50%';
video.style.marginTop = '20px';
video.type = 'video/mp4';
video.src = 'Exploring the Sahara Desert Morocco - Lonely Planet travel video.mp4';
video.controls = 'true';

const destination = document.querySelector('.content-destination');
destination.prepend(video);

const btn = document.querySelectorAll('.content-pick .btn');
console.log(btn);

const footer = document.querySelector('.footer');

mainImage.style.filter = 'grayscale(100%)'
// mainImage.style.zIndex = '-1'
// mainImage.style.position = 'relative'

mainImage.addEventListener('mouseover', (event) => {
    event.target.style.filter = 'grayscale(0%)'
});

// mouseenter

video.addEventListener('mouseenter', (event) => {
    event.target.style.maxWidth = '100%'
});

//mouseleave

video.addEventListener('mouseleave', (event) => {
    event.target.style.maxWidth = '50%'
});

mainImage.addEventListener('mouseleave', (event) => {
    event.target.style.filter = 'grayscale(100%)'
});

// keydown

background.addEventListener('keydown', (event) =>{
    event.target.style.backgroundImage = 'linear-gradient(#FF5F6D, #FFC371)';
    event.stopPropagation();
    event.preventDefault();
});

// scroll

window.addEventListener('scroll', (event) => {
    mainNavigation.style.backgroundColor = 'black';
    mainNavText.forEach(item => item.style.color = 'white');
    mainNavLogo.style.color = 'white';
});

//  Click

btn.forEach(item => item.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#F4E2D8';
}));

// dblclick

btn.forEach(item => item.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = '#BA5370';
}));

// select

footer.addEventListener('select' , (event) => {
    event.target.alert('Something was selected!')
});

// load
// focus
// resize



