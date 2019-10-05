
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
const button = document.querySelectorAll('.destination');
console.log(button);

button.forEach(element => {
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


// document.querySelector('header').addEventListener('scroll', myFunction);

// function myFunction() {
//     document.getElementById("yo").innerHTML = "you scrolled";
// }