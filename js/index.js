// Your code goes here
let nav = document.querySelector('nav');
let navButtons = nav.querySelectorAll('a');

console.log(navButtons);
for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'lightgrey';
    })
    navButtons[i].addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'white';
    })
}
