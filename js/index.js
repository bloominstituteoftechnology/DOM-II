let logo = document.querySelector('#logo-img');

logo.addEventListener('mouseover', (event) => {
    event.currentTarget.classList.add('skew');
});

let button = document.querySelector('.btn');

button.addEventListener('dblclick', (event) => {
    event.currentTarget.classList.add("go-green", 'skew');
    console.log('You pressed the button!');
});

let mainHeader = document.querySelector('.dom-text');

mainHeader.addEventListener('click', (event) => {
    event.currentTarget.classList.add("go-green");
    console.log('You clicked the header!');
});

window.addEventListener('contextmenu', () => {
    console.log("context!")
});

window.addEventListener('wheel', () => {
    console.log("wheelin' and dealin'!")
});