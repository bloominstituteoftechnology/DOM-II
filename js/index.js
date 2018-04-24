

let logo = document.querySelector('#logo-img');

logo.addEventListener('mouseenter', (event) => {
    event.currentTarget.classList.add('skew');
});

logo.addEventListener('mouseleave', (event) => {
    event.currentTarget.classList.add('norm');
});

let anchor = document.querySelector('.anchor');

anchor.addEventListener('mousemove', (event) => {
    event.currentTarget.classList.add("font-change");
});

let button = document.querySelector('.btn');

button.addEventListener('dblclick', (event) => {
    event.currentTarget.classList.add("go-blue", 'skew');
    console.log('You pressed the button!');
});

let mainHeader = document.querySelector('.dom-text');

mainHeader.addEventListener('click', (event) => {
    event.currentTarget.classList.add("rotate", 'go-green');
    console.log('You clicked the header!');
});

let textContent = document.querySelector('h4', 'p');

textContent.addEventListener('mouseover', (event) => {
    event.currentTarget.classList.add("copy");
});

let midImg = document.querySelector('.middle-img');

midImg.addEventListener("click", (event) => {
    event.currentTarget.classList.add("rotate");
});

let contact = document.querySelector('.contact');

contact.addEventListener('mouseover', (event) => {
    event.currentTarget.classList.add('scale-up');
});

window.addEventListener('contextmenu', () => {
    console.log("context!")
});

window.addEventListener('wheel', () => {
    console.log("wheelin' and dealin'!")
});