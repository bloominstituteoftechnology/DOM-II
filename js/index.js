// Variables

// Document Events

// *** === NavigationEvents === ***

// ** == Variables == ** 
let logo = document.querySelector('.logo-heading');
let navLinks = document.querySelectorAll('.nav-link');

//  ** == Events == **
navLinks.forEach(link => {
    link.addEventListener('dblclick', event => {
        // Prevent Default
        event.preventDefault();

        link.classList.toggle('clicked');
        alert(`Coming Soon !! Be on the look out for our ${event.target.innerText.toUpperCase()} page !!`);

        // Testing Log
        console.log('type:', event.type, '\n\rcurrent target:', event.currentTarget, '\n\rtarget:', event.target);
    });
});




// Testing Log
/*
console.log('type', event.type, 'current target', event.currentTarget, 'target', event.target);
*/