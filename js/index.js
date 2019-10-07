
// EVENT LISTENERS TO USE
// mouseover - CHECK
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick - CHECK

// Prevent links from working
const navLinks = document.querySelectorAll('nav a');
console.log(navLinks);

navLinks.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
    })
    element.addEventListener('dblclick', (e) => {
        e.target.style.backgroundColor = 'lightgrey';
    })
});

// Logo gets big when you hover
const logo = document.querySelector('h1');

// Logo changes background when  you enter / leave
logo.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'lightgrey';
});

logo.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white';
});

// Hides the cards when you click on them
const destination = document.querySelectorAll('.destination');

destination.forEach(element => {
    element.addEventListener('click', (e) => {
        e.target.style.display = 'none';
    })
});

// Footer changes background when  you enter / leave
const footer = document.querySelector('footer');

footer.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'lightgrey';
});

footer.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white';
});

// Record the keycodes on the page
const body = document.querySelector('body');

body.addEventListener('keypress', (e) => {
  console.log(e.code);
});

footer.addEventListener('wheel', (e) => {
    e.target.style.backgroundColor = 'blue';
});

// Stop propogation
const button = document.querySelectorAll('.btn');

button.forEach(element => {
    element.addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
        e.stopPropagation();
    })
});


// document.querySelector('header').addEventListener('scroll', myFunction);

// function myFunction() {
//     document.getElementById("yo").innerHTML = "you scrolled";
// }