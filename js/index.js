// Your code goes here


// mouseover

const mainImage = document.querySelector('.container .intro img');

mainImage.addEventListener('mouseover', (event) => {
    event.target.style.filter = 'grayscale(100%)'
});


// keydown

const background = document.querySelector('html')

background.addEventListener('keydown', (event) =>{
    event.target.style.backgroundImage = 'linear-gradient(#FF5F6D, #FFC371)';
});

// wheel



// drag / drop
// load
// focus
// resize
// scroll

const mainNavigation = document.querySelector('.main-navigation');
const mainNavLogo = document.querySelector('.logo-heading');
const mainNavText = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', (event) => {
    mainNavigation.style.backgroundColor = 'black';
    mainNavText.forEach(item => item.style.color = 'white');
    mainNavLogo.style.color = 'white';
});

// select
// dblclick



