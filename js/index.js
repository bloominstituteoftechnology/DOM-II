// Your code goes here

//MOUSEOVER NAV TEXT CHANGES COLOR AND BACK TO BLACK WHEN MOUSE LEAVES
let navText = document.querySelectorAll('.nav-link');
navText.forEach(function(element) {
    element.addEventListener('mouseover', (event) => {
        event.target.style.color = 'yellow';
    });
});
navText.forEach(function(element) {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'black';
    });
});

//KEYDOWN CHANGES UI COLORS TO NIGHT-TIME MODE WHEN KEY N IS PRESSED
let body = document.querySelector('body');
let header = document.querySelector('.main-navigation');
let footer = document.querySelector('.footer');
let anchorText = document.querySelectorAll('a');
let paragraphText = document.querySelectorAll('p');
let h1 = document.querySelectorAll('h1');
let h2 = document.querySelectorAll('h2');
let h4 = document.querySelectorAll('h4');
document.addEventListener('keydown', (event) => {
    if (event.key === 'n') {
        body.style.backgroundColor = 'rgb(71, 71, 73';
        header.style.background = 'rgb(50, 50, 52)';
        footer.style.background = 'rgb(50, 50, 52)';
        anchorText.forEach(function(element) {element.style.color = 'white';});
        paragraphText.forEach(function(element) {element.style.color = 'white';});
        h1.forEach(function(element) {element.style.color = 'white';});
        h2.forEach(function(element) {element.style.color = 'white';});
        h4.forEach(function(element) {element.style.color = 'white';});
    }
});





