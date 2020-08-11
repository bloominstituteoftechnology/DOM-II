// Your code goes here
let headLine = document.querySelector('h1');
headLine.addEventListener('mouseover', (event) => {headLine.style.color = 'cyan';});
headLine.addEventListener('dblclick', (event) => {headLine.style.color = 'black';});

let footer = document.querySelector('footer');
footer.addEventListener('mouseover', (event) => {footer.style.backgroundColor = 'green';});
footer.addEventListener('dblclick', (event) => {footer.style.backgroundColor = 'red';});


let h2Highlight = document.querySelector('h2');
h2Highlight.addEventListener('mouseover', (event) => {h2Highlight.style.color = 'green';});

let pHighlight = document.querySelector('body p');
pHighlight.addEventListener('mouseover', (event) => {pHighlight.style.color = 'darkgreen';});

let btnClick = document.querySelectorAll('body btn');
btnClick.addEventListener('dblclick', (event) => {headLine.style.backgroundColor = 'black';});

