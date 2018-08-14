// Your code goes here

//step 1
const parentContainer = document.querySelector('.home');
const allATags = document.querySelectorAll('a');
const headerimg = document.querySelector('.headerimg');
const mainHeading = document.querySelector('.main-navigation');
const navContainer = document.querySelector('.nav-container');
const innerNav = document.querySelector('.nav');
const header2 = document.querySelector('h2');
const para = document.querySelector('p');


//1
navContainer.addEventListener('mousedown', (event) => {
    navContainer.classList.toggle('redacted');
    //event.stopPropagation();
});


//2
innerNav.addEventListener('mouseover', (event) => {
    innerNav.classList.toggle('remove');
    //event.stopPropagation();
});


//3
headerimg.addEventListener('wheel', (event) => {
    //headerimg.classList.toggle('displayNone');
    event.currentTarget.parentNode.style.backgroundColor = "red";
    //event.stopPropagation();
    event.preventDefault();
});


//4
headerimg.addEventListener('dblclick', (event) => {
    //headerimg.classList.toggle('displayNone');
    event.currentTarget.parentNode.style.backgroundColor = "white";
});


//5
header2.addEventListener('mouseout', (event) => {
    event.currentTarget.style.fontSize = '10px';
});


//6
header2.addEventListener('mouseup', (event) => {
    event.currentTarget.style.fontSize = '20px';
});


//7
para.addEventListener('click', (event) => {
    event.currentTarget.style.backgroundColor = 'black';
    //event.stopPropagation();
});


//8
para.addEventListener('contextmenu', (event) => {
    event.currentTarget.style.backgroundColor = 'white';
    event.stopPropagation();
});


//9
para.addEventListener('pointerleave', (event) => {
    event.currentTarget.style.backgroundColor = 'red';
    event.stopPropagation();
});


//10
para.addEventListener('pointermove', (event) => {
    event.currentTarget.style.fontSize = '25px';
});

