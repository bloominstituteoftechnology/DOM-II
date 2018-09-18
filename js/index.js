// Your code goes here
let funBus = document.querySelector('img');
funBus.addEventListener('click', event => {
    console.log('Fun bus was clicked!');
});

let mainNav = document.querySelectorAll('a');
mainNav[0].addEventListener("mouseover", event => {
        mainNav[0].style.borderBottom = "1px solid black";
});