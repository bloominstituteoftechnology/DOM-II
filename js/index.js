// Your code goes here
let nav = document.querySelector('nav');
let navButtons = nav.querySelectorAll('a');

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'lightgrey';
    })
    navButtons[i].addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'white';
    })
}

let intro = document.querySelector('.intro');
let introP = intro.querySelector('p');
let introPOriginal = introP.textContent;

document.addEventListener('keydown', (event) => {
    console.log(introP.textContent);
    introP.textContent = introP.textContent + 'Fun Bus ';
    if (event.keyCode === 27) {
        introP.textContent = introPOriginal;
    }
})

let logo = document.querySelector('h1');

logo.addEventListener('click', (event) => {
    if (event.target.style.fontSize === '4rem') {
        event.target.style.fontSize = '5rem';
    } else {
        event.target.style.fontSize = '4rem';
    }
})