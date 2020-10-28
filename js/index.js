// Your code goes here

// (1) Show an alert on load
window.addEventListener("load", () => {
    alert("Welcome to the Fun Bus");
});

// (2) Change the first button text to red on click
let button1 = document.querySelectorAll('.btn')[0];
button1.addEventListener('click', (event) => {
  event.target.style.color = 'red';
});

// (2) Change the second button text to blue on click
let button2 = document.querySelectorAll('.btn')[1];
button2.addEventListener('click', (event) => {
  event.target.style.color = 'blue';
});

// (2) Change the second button text to green on click
let button3 = document.querySelectorAll('.btn')[2];
button3.addEventListener('click', (event) => {
  event.target.style.color = 'green';
});

// (3) Turn all elements in main navigation bold on mouse over
const header = (document.querySelector('.main-navigation'));
header.addEventListener('mouseover', (event) => {
    event.target.style.fontWeight = 'bold';
});

// (4) Zoom in on bus image on mouse over
const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseover', () => {
    funBus.style.transform = 'scale(1.5)';
});

// (5) Zoom out on bus image on mouse leave
funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1)';
});

// (6) Make background red when scrolled to bottom of page, white when not
const scrollBody = document.querySelector('body');
window.addEventListener('scroll', () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPos = window.scrollY;
    if (scrollPos === maxScroll) {
        scrollBody.style.backgroundColor = 'red';
    }
    if (scrollPos != maxScroll) {
        scrollBody.style.backgroundColor = 'white';
    }
});

// (7) Make an alert for a keydown
window.addEventListener('keydown', () => {
    alert('Don\'t do that!');
});

// (8) Console out when scrolling in main navigation, use preventDefault() to stop scrolling
const scrollNav = document.querySelector('.main-navigation')
scrollNav.addEventListener('wheel', (event) => {
    console.log('SCROLL!');
    event.preventDefault();
});

// (9) Set background to green when resize, set back to white when done
const resizeBody = document.querySelector('body');
let resizeTimer;
window.addEventListener('resize', () => {
    resizeBody.style.backgroundColor = 'green';
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        resizeBody.style.backgroundColor = 'white';
    }, 250);
});

// (10) Double click on content destination image to scale, use stopPropagation to prevent nested function from scaling parent element
const destination = document.querySelector('.content-destination ');
const destinationImage = document.querySelector('.content-destination img');
destinationImage.addEventListener('dblclick', (event) => {
    destinationImage.style.transform = 'scale(1.5)';
    event.stopPropagation();
    destination.addEventListener('dblclick', () => {
        destination.style.transform = 'scale(1.5)';
        event.stopPropagation();
    });
});