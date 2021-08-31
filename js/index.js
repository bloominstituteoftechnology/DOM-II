// Your code goes here `mouseover` `keydown` `wheel` `load` `focus` `resize` `scroll` `select` `dblclick` `drag / drop`
//change colors, animate objects, remove objects, etc.

//Event Listener 1, make logo heading yellow on mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', event => {
    event.target.style.color = 'yellow';
    setTimeout(function() {
        event.target.style.color = '';
    }, 500);
})

//Event Listener 2 make nav link uppercase with keydown
const nav = document.querySelector('.nav');
nav.addEventListener('keydown', event => {
    event.target.style.textTransform = 'uppercase';
});

//Event Listener 3 make intro h2 increase in size with wheel
const intro = document.querySelector('.intro h2');
let scale = 1;
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    intro.style.transform = `scale(${scale})`;
}
intro.addEventListener('wheel', zoom);

//Event Listener 4 make console say page is loaded with load
window.addEventListener('load', (event) => {
    console.log('Page is fully loaded');
});

//Event Listener 5 make a new intro input box turn pink with focus
let introInput = document.createElement('input');
const header = document.querySelector('.intro');
header.appendChild(introInput);
introInput.setAttribute('placeholder', 'Where should the bus go?');
introInput.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});

//Event Listener 6 attempting to log the window size upon resize
// let sizePara = document.createElement('p');
// let height = '';
// let width = '';
// function getWindowSize() {
//     height.textContent = window.innerHeight;
//     width.textContent = window.innerWidth;
// }
// sizePara.innerHTML('Window Height: ' + height + '<br>' + 'Window Width: ' + width);
// header.appendChild(sizePara);
// window.addEventListener('resize', getWindowSize);

//Event Listener 7 scroll
let position = window.scrollY;
window.addEventListener('scroll', () => {
    console.log(position);
})

//Event Listener 8 create an input box with a value, create a paragraph after, use select to log words in the input box
let introInput2 = document.createElement('input');
header.appendChild(introInput2);
introInput2.setAttribute('value', 'Hey try selecting some words');

let inputLog = document.createElement('p');
header.appendChild(inputLog);
function selectLog (event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    inputLog.textContent = `You selected: ${selection}`;
}
introInput2.addEventListener('selector', selectLog);

//Event Listener 9 dblclick
const dest = document.querySelector('.content-destination p');
dest.addEventListener('dblclick', event => {
    event.target.style.color = 'red';
})

//Event Listener 10 
let divBelowFooter = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(divBelowFooter);
divBelowFooter.textContent = 'drop zone here';

//nest two similar events and prevent event propagation
const adventureP = document.querySelector('.container .inverse-content .text-content p:nth-of-type(1)');

const adventureDiv = document.querySelector('.container .inverse-content .text-content');

adventureP.addEventListener('click', event => {
    event.target.style.background = 'purple';
    event.stopPropagation();
})

adventureDiv.addEventListener('click', event => {
    event.target.style.background = 'green';
    event.stopPropagation();
})

//stop the nav items from refreshing the page
let navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
    })
})