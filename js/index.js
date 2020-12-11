// Your code goes here
// 1
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', event => {
    logoHeading.classList.toggle('toggle-style');
    event.stopImmediatePropagation();
    // debugger
})
logoHeading.addEventListener('mouseleave', event => {
    logoHeading.classList.toggle('toggle-style');
    event.stopImmediatePropagation();
});

// 2
const nav = document.querySelector('.nav');
document.addEventListener('keydown', event => {
    nav.classList.toggle('toggle-style')
})

// 3
const img = document.querySelector('img');
document.addEventListener('wheel', event => {  
    img.classList.toggle('toggle-radius');
})

// 4
window.addEventListener('load', event => {
    alert("Welcome!");
});

// 5
img.addEventListener('contextmenu', event => {
    event.preventDefault();
});

// 6
const body = document.querySelector('body');
window.addEventListener('resize', e => {
    body.classList.toggle('toggle-dark-mode');
});

// 7
img.addEventListener('dragstart', e => {
    e.preventDefault();
})

// 8
const contenth2 = document.querySelectorAll('.text-content h2');
contenth2.forEach(e => {
    e.style.userSelect = 'none'
    e.addEventListener('dblclick', event => {
        e.classList.toggle('toggle-font-size');
    })
})

// 9
window.addEventListener('beforeunload', e => {
    e.preventDefault();
    e.returnValue = "Are you sure you want to leave?";
})

// 10
logoHeading.addEventListener('mousemove', e => {
    logoHeading.classList.toggle('toggle-rave');
})


// event propogation
const navContainer = document.querySelector('.nav-container');
navContainer.addEventListener('mouseenter', e => {
    navContainer.style.border = '2px dotted blue'
    e.stopImmediatePropagation();
})
navContainer.addEventListener('mouseleave', e => {
    navContainer.style.border = 'none'
    e.stopImmediatePropagation();
})


// Nav links prevent default
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
    });
});