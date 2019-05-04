// initial commit

// Selectors
let navItems = document.querySelectorAll('.nav-link');
let introImg = document.querySelector('.intro img');


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
