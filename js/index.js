// initial commit

// Selectors
let navItems = document.querySelectorAll('.nav-link');
let introImg = document.querySelector('.intro img');
let logoHeading = document.querySelector('.logo-heading');


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
