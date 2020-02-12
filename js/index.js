// Your code goes here
const button = document.querySelectorAll(".btn");
button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.2)";
    button.style.transition = "transform 1s";
});
const doc = document;


const head = doc.querySelector('.main-navigation');

const navlink = doc.querySelector('.nav');

navlink.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('active');
});
navlink.addEventListener('mouseout', (event) => {
    event.target.classList.toggle('active');
});

head.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.fontWeight = 'bold';
});

const scrollPixelNav = doc.createElement('span');
scrollPixelNav.innerHTML = 0;
scrollPixelNav.style.fontSize = '1.5rem';


let scrollPixelDescription = doc.createElement('span');
scrollPixelDescription.innerHTML = 'Scroll Pixel Counter: '
scrollPixelDescription.style.fontSize = '1.5rem';

const bod = doc.querySelector('body');
bod.addEventListener('wheel', (event) => {
    event.stopPropagation;
    scrollPixelNav.innerHTML++;
});

doc.querySelector('.main-navigation').append(scrollPixelDescription);
doc.querySelector('.main-navigation').append(scrollPixelNav);


const fill = doc.querySelector('.fill');
const empties = doc.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}

const formey = doc.getElementById('message');
formey.innerHTML = '';
formey.addEventListener('focus', (event) => {
    event.target.style.border = '3px dashed green';
    event.target.innerHTML = 'message';
    console.log(event.target);
});

formey.addEventListener('blur', (event) => {
    event.target.style.border = '3px dashed red';
    event.target.innerHTML = 'I guess not : (';
    console.log(event.target);
});

window.addEventListener('resize', (event) => {
    alert('rezing');
});


const funBus = doc.createElement('div');
funBus.innerHTML = 'funbox';
funBus.style.display = 'none';
header.appendChild(funBus);

window.addEventListener('scroll', (event) => {
    setTimeout(() => (funBox.className = 'scroll-active'), 1000);
});

var el = document.getElementById('cont');

el.addEventListener('select', (event) => {
    event.target.style.backgroundColor = 'grey';
    
}, false);


var footColor = document.querySelector('footer');

footColor.addEventListener('dblclick', (event) => {
    console.log(footColor);
    console.log(event);
    event.target.style.backgroundColor = 'red';
    
});


const topElement = doc.querySelector('header');
const botElement = doc.querySelector('.nav-container');

console.log(bottomElement);

botElement.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = 'navy';
});

topElement.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
});

navlink.addEventListener('click', (event) => {
    event.preventDefault();
});