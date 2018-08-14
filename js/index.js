const logo = document.querySelector(".logo-heading");
const nav = document.querySelector(".nav");
const funbus = document.querySelector(".bus-img");
const h2s = document.querySelector(".intro h2");
// const words = document.querySelector(".text-content2");
h2s.addEventListener('mouseenter', (event) => {
    event.target.style.width = '100px';
    event.stopPropagation();
});

logo.addEventListener('mousedown', (event) => {
    event.target.style.color = 'red';
});

logo.addEventListener('mouseup', (event) => {
    event.target.style.color = 'blue';
});

nav.addEventListener('mouseover', (event) => {
    event.target.style.opacity = 0.5;
    event.stopPropagation();
});

nav.addEventListener('mouseout', (event) => {
    event.target.style.opacity = 1;
});

funbus.addEventListener('dblclick', (event) => {
    event.target.style = "transform: scale(2)"; 
});

funbus.addEventListener('dragstart', (event) => {
    event.target.style = "transform: scale(1)"; 
});

document.addEventListener('keydown', (event) => {
    event.target.style = "transform: scale(1.5)";
});

document.addEventListener('keyup', (event) => {
    event.target.style = "transform: scale(1)";
});
// words.addEventListener('copy', (event) => {
//     event.target.style.color = 'blue';
// });

document.addEventListener('wheel', (event) => {
    event.target.style.color = getRandomColor();
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};





