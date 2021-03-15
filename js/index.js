// Your code goes here
const introPic = document.querySelector('.intro img');
const navLinks = document.querySelectorAll('nav a');
const signupButtons = document.querySelectorAll('.btn');
const sectionHeaders = document.querySelectorAll('.text-content h2');
const footer = document.querySelector('.footer')
Array.from(signupButtons).forEach((event) => {
    event.addEventListener("mouseover", (event) => {
        event.target.style.fontSize = "2.5em"
    });
    event.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = "2em"
    });
});

Array.from(sectionHeaders).forEach((event) => {
    event.addEventListener("mouseover", (event) => {
        event.target.style.fontSize = "4.5em"
    });
    event.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = "3em"
    });
});

Array.from(navLinks).forEach((item) => {
    item.addEventListener('dblclick', (event) => {
        event.target.style.color = "red"
    });
});

