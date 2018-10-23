// Variables

// Document Events

// *** === NavigationEvents === ***

// ** == Variables == ** 
let logo = document.querySelector('.logo-heading');
let navLinks = document.querySelectorAll('.nav-link');

//  ** == Events == **
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        console.log(event);
    });
});