// Your code goes here
const nav = document.querySelectorAll('.nav-link');
console.log(nav);

    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('mouseover', (event) => {
            event.target.style.fontSize = '3rem';
            console.log('mouse over!')});
        console.log(nav[i]);
    }
    
    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener('mouseout', (event) => {
            event.target.style.fontSize = '1.5rem';
            console.log('mouse over!')});
        console.log(nav[i]);
    }

const logoHeading = document.querySelector('.logo-heading');

    logoHeading.addEventListener('click', () => {
    logoHeading.classList.toggle('blue');
    
})

const button = document.querySelectorAll('.btn');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mousedown', (event) => {
        event.target.innerText = "I'm ready!";
        });
    console.log(button[i]);
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseup', (event) => {
        event.target.innerText = "Sign Me Up!";
        });
    console.log(button[i]);
}

const body = document.querySelector('body');
body.addEventListener('wheel', (event) => {
    event.target.style = 'background-color: green'
})

const page = document.querySelector('.text-content');
page.addEventListener('scroll', (event) => {
    event.target.style = 'background-color: pink'
})