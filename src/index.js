import './less/index.less'

// Your code goes here!
let counter = 0;

//mouseover
//this will tell me the coordinates of where I clicked 
const nav = document.querySelector(".nav");
nav.addEventListener('mouseover', (e) => {
    const image = document.querySelector('.intro img')
    image.style = "display:none"
    counter++;
    console.log(counter);
});

const title = document.querySelector(".intro h2");
title.addEventListener("click", (e) => {
    const image = document.querySelector('.intro img')
    image.style = "display:inline"
    counter++;
    console.log(counter);
} );


//keydown
//this will tell me the key I pressed down
document.addEventListener("keydown", (event) => {
    console.log(event)
});


//wheel
//will tell me where i scrolled my wheel to
document.addEventListener('wheel', (event) => {console.log(event)});

const second_image = document.querySelector(".content-section img");
second_image.addEventListener("click", (event) => {
    const title = document.querySelector("header h1")
    title.style = "display:none"
})

//load
//
//document.addEventListener('load', event => {console.log(event)});

//focus
//
//document.addEventListener('focus', event => {console.log(event)});