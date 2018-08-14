// Your code goes here
const fluidImg = document.querySelector('.img-fluid');
const adventureImg = document.querySelector('.adventure-img');
const mainHeading = document.querySelector('.main-heading');
const firstHeading = document.querySelector('.first-heading');
const mainNavigation = document.querySelector('.main-navigation');
const logoHeading = document.querySelector('.logo-heading');
const contentDestination = document.querySelector('.content-destination');
const destination1 = document.querySelector('.destination1');
const destination2 = document.querySelector('.destination2');
const destination3 = document.querySelector('.destination3');
const footer = document.querySelector('.footer');

mainNavigation.addEventListener('mouseover', (event) => {
   event.currentTarget.style.backgroundColor = '#ffff00';
});

mainHeading.addEventListener('click', (event) => {
   event.currentTarget.style.fontSize = '400%'; 
});

firstHeading.addEventListener('dblclick', (event) => {
   event.currentTarget.style.color = 'red'; 
});

logoHeading.addEventListener('mousemove', (event) => {
   event.currentTarget.style.textDecoration = 'underline'; 
});

adventureImg.addEventListener('mouseenter', (event) => {
   event.currentTarget.style.border = '5px solid black'; 
});

fluidImg.addEventListener('mouseenter', (event) => {
   event.currentTarget.style.border = '5px solid black'; 
});

contentDestination.addEventListener('mousedown', (event) => {
    event.currentTarget.style.opacity = '.6';
});

destination1.addEventListener('mouseout', (event) => {
    event.currentTarget.style.backgroundColor = '#ffff00';
});

destination2.addEventListener('mouseleave', (event) => {
    event.currentTarget.style.display = 'none';
});

destination3.addEventListener('mouseup', (event) => {
    event.currentTarget.style.display = 'none';
});

footer.addEventListener('contextmenu', (event) => {
    event.currentTarget.style.display = 'none';
});
