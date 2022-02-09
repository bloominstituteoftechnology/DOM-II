
import './less/index.less'

// Your code goes here!

// Selecting Elements to change
const navButtons = document.querySelectorAll(".nav a");
console.log(navButtons);
const title = document.querySelector("h1");
const introImg = document.querySelector(".intro img");

// Creating Events with .addEventListener

// function greyBackground() {
//     EventTarget.style.color = 'grey'
// }

// navButtons.addEventListener("mouseover", greyBackground);

navButtons.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'lightgrey';}
)});

title.addEventListener('click', event => {
    title.textContent += ` Is Taking Off!!`;
})

introImg.addEventListener('dblclick', function (event){
    introImg.style.border = '5rem';
})

window.addEventListener('load', (event) => {
    console.log('Good job loading');
  });

const source = document.querySelector('div.source');

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});