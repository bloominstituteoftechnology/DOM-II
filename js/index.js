// Your code goes here
// bubbles
const mouseOn = document.querySelectorAll('nav').forEach(a => {
nav.addEventListener("mouseover", (e) => {
    e.style.transform = scale("2.0");
    e.style.textDecoration = "none";
});

// bubbles
const keyCode = document.getElementByName('body');
keyCode.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === 32) {
    return;
}
    keyCode.style.backgroundColor = 'honey';
});

let scale = 1;

// bubbles
const wheel = document.getElementsByClassName("img-content");
wheel.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
        scale *= e.deltaY * -2;
    } else {
        scale /= e.deltaY * 2;
    }
    e.preventDefault;
    wheel.style.transform = `scale(${scale})`;
});

// no bubbles
const load = document.querySelector('footer p');
load.addEventListener('DOMContentLoaded', (e) => {
load.style.textAlign = "center";
});

// no bubbles
const focus = document.querySelector('.text-content p');
focus.addEventListener('focus', (e) => {

});

// no bubbles
let i = 0;
const resize = document.querySelector('footer');
resize.addEventListener('resize', (e) => {
    resize.append(document.createElement('p').textContent = `This window has been resized ${change} times`);
    let change = i += 1;
});


const scroll = document.getElementByName('body');
scroll.addEventListener('scroll', (e) => {
scroll.style.backgroundColor = "black" ? "white" : "black";
});


const select = document.getElementByName('h1');
select.addEventListener('select', (e) => {
    select.style.textContent = "This is the fun-vee!"
});

// bubbles
const dblclick = document.querySelector('.logo-heading');
dblclick.addEventListener('dblclick', (e) => { 
dblclick.style.border = "5px dashed #85e085"
});


// dragDrop