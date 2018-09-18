// Your code goes here

let funTitle = document.querySelector('h1');
funTitle.addEventListener('mouseover', (e) => {
    event.target.style.color = 'purple';
})

document.addEventListener('keydown', (e) => {
    const aKey = event.key;
    alert(`Whoa dude, you can\'t just go around pressing buttons like:\n ${aKey}\n`)
})