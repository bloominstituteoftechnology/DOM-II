// "About Us" navlink mouseover events
let navLinks = document.querySelectorAll('header nav a');
navLinks[1].addEventListener('mouseover', function(event) {
    event.target.textContent = 'About Bus';
});
navLinks[1].addEventListener('mouseout', function(event) {
    event.target.textContent = 'About Us';
});

// prevents default nav link behavior for clicks.
navLinks.forEach(link => link.addEventListener('click', function (event) {
    event.preventDefault();
}))

// Document keydown event
document.addEventListener('keydown', function(event) {
    alert(`Fun Bus knows you pressed ${event.key}`);
});

// Adventure Awaits header wheel event
let adventureHeader = document.querySelector('section.inverse-content h2');
document.addEventListener('wheel', function(event) {
    adventureHeader.textContent = 'The Wheel on the Mouse Goes Round and Round~';
});

// Welcome section drag events
let welcomeHeader = document.querySelector('header.intro h2');
let welcomeImage = document.querySelector('header.intro img');
welcomeImage.addEventListener('dragstart', function(event) {
    welcomeHeader.textContent = 'Take Me on an Adventure~';
});
welcomeImage.addEventListener('dragend', function(event) {
    welcomeHeader.textContent = 'Welcome to Fun Bus!';
});
// Taking advantage of closures to manipulate other objects
// with event listeners.

// Window load event 
// WINDOW, not document.
window.addEventListener('load', function (event) {
    alert('Fun Bus is now self-aware.');
});

// Contact link focus events
navLinks[3].addEventListener('focusin', function (event) {
    navLinks[3].textContent = 'Please Contact';
    event.stopPropagation();
});
navLinks[3].addEventListener('focusout', function (event) {
    navLinks[3].textContent = 'Contact';
    event.stopPropagation();
});

// Header banner image resize
let title = document.querySelector('h1.logo-heading');
window.addEventListener('resize', function (event) {
    title.textContent = 'I\'m Shrinking!';
});

// Similar bubbling events
// Intended behaviour should be:
// Click 3rd Nav Button: Switch between 'Blog' and 'More Bus'
// Click anything else in the header: header turns yellow/white
navLinks[2].addEventListener('click', function (event) {
    if (navLinks[2].textContent === 'More Bus') {
        navLinks[2].textContent = 'Blog';
    } else {
        navLinks[2].textContent = 'More Bus';
    }
    event.stopPropagation();
});
let headerTop = document.querySelector('div.nav-container');
headerTop.addEventListener('click', function (event) {
    if (headerTop.style.background == 'yellow') {
        headerTop.style.background = 'unset';
    } else {
        headerTop.style.background = 'yellow';
    }
})
