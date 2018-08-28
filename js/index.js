// Your code goes here
const nav = document.querySelectorAll('.nav-link');

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '3rem';
    });
}

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '1.5rem';
    });
}

const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('dblclick', () => {
    logoHeading.style.color = 'blue';
});

const button = document.querySelectorAll('.btn');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mousedown', (event) => {
        event.target.innerText = "I'm ready!";
    });
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseup', (event) => {
        event.target.innerText = "Sign Me Up!";
    });
}

const body = document.querySelector('body');
document.body.addEventListener('wheel', (event) => {
    body.style.backgroundColor = 'green'
})