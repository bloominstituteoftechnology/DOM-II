// initial commit

// Selectors
let navItems = document.querySelectorAll('.nav-link');
let introImg = document.querySelector('.intro img');
let logoHeading = document.querySelector('.logo-heading');
let introP = document.querySelector('.intro p');
let textContentP = document.querySelector('.text-content p');
let allImgs = document.querySelectorAll('img');
const buttons = Array.prototype.slice.apply(
    document.querySelectorAll(".btn")
);
let mainNav = document.querySelector('.nav');


//doubleclick: changes color of nav items
navItems.forEach(event => {
    event.addEventListener('dblclick', (event) => {
        event.target.style.color = 'purple'; 
    });
});

// mouseenter: pointer disappears when hovering over bus image
introImg.addEventListener('mouseenter', (event) => {
    event.target.style.cursor = 'none';
    event.stopPropagation;
});

// mouseover/mouseleave: text expands and then shrinks
logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '6rem';
    event.stopPropagation
});
logoHeading.addEventListener('mouseleave', (event) => {
    event.target.style.fontSize = '4rem';
    event.stopPropagation;
});

//mouseover sets intro paragraph to invisible
introP.addEventListener('mouseover', (event) => {
    event.target.style.opacity = '0';
    event.stopPropagation;
});

// click on intro paragraph restores opacity
introP.addEventListener('click', (event) => {
    event.target.style.opacity = '1';
});

// scrolling mouse wheel over 2nd paragraph changes background color
textContentP.addEventListener('wheel', (event) => {
    event.target.style.backgroundColor = 'paleturquoise';
    event.stopPropagation;
});

// right-click on any image makes it disappear
allImgs.forEach((img) => {
    img.addEventListener('contextmenu', (event) => {
        event.target.style.display = 'none';
    });
});

// click on any button, color changes to navy text/white background
buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.target.style.color = 'navy';
        event.target.style.backgroundColor = 'white';
        event.stopPropagation;
    });
});