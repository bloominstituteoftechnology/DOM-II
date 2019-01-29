// Your code goes here

// Navigation Header
const navigationHeader = document.getElementsByClassName('logo-heading');

// Changing color when mousing over header
navigationHeader[0].addEventListener('mouseover', e => {
    event.target.style.color = "purple";
});

// Changing to orange on click
navigationHeader[0].addEventListener('click', e => {
    event.target.style.color = "orange";
});


// Changing to green when mousing out
navigationHeader[0].addEventListener('mouseout', e => {
    event.target.style.color = "green";
});

// Adding Scroll Event Listener

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const scrollable = 1310;
    if(scrolled === scrollable){
        alert(`DUN DUN DUN YOU'VE REACHED THE BOTTOM!`);    
    }
});





