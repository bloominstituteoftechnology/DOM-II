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
            });
        console.log(nav[i]);
    }

// nav.addEventListener('click', (event) => {
//     event.preventDefault();
// })

const logoHeading = document.querySelector('.logo-heading');

    logoHeading.addEventListener('dblclick', () => {
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
document.body.addEventListener('wheel', (event) => {
body.style.backgroundColor = 'green'
})

