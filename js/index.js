
// * [*] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:// Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`

// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.


const logoHeading = document.querySelector('h1');
const navLinks = document.querySelector('a');
const busImg = document.querySelector('.intro img');
const mapImg = document.querySelector('content-section img');
const riverImg = document.querySelector('.content-section .inverse-content img');
const boatImg = document.querySelector('.content-destination img');
const signUpButton = document.querySelector('.btn');
const busText = document.querySelector('.intro p')

console.log(logoHeading);
console.log(navLinks);
console.log(busImg);
console.log(mapImg);
console.log(riverImg);
console.log(boatImg);
console.log(signUpButton);
console.log(busText);

//MOUSEOVER

logoHeading.addEventListener('click', function(event){
    logoHeading.style.color = 'pink';
})

navLinks[0].addEventListener('mouseover', function(event){
    navLinks.style.color = 'red';
})


// Array.from(document.links).forEach(function (link) {
//     link.addEventListener('mouseover', function(event){
//         link.style.color = 'red';
//     })
// })


// const nav = document.querySelectorAll('.nav-link');
// console.log(nav);
// function mouseover(){
//     nav.style.color = 'pink';
// }
// nav.addEventListener('mouseover', mouseover);


// mouseover.addEventListener('mouseover', function(event){
//     console.log('uses a mouseover');
// })

// KEYDOWN

busImg.addEventListener('keydown', function(event){
    busImg.style.color = 'pink';
})

//WHEEL
mapImg.addEventListener('wheel', function (event){
    mapImg.style.color = 'pink';
});

//LOAD
riverImg.addEventListener('DOMContentLoaded', function (event){
    riverImg.style.color = 'pink';
});

//FOCUS
boatImg.addEventListener('focus', function (event){
    boatImg.style.color = 'pink';
});

//RESIZE
riverImg.addEventListener('resize', function(event){
    riverImg.style.color = 'pink';
})

//SCROLL
signUpButton.addEventListener('scroll', function(event){
    signUpButton.style.color = 'pink';
})

//SELECT
signUpButton.addEventListener('select', function(event){
    signUpButton.style.color = 'pink';
})


//DBLCLICK
navLinks[1].addEventListener('dblclick', function(event){
    navLinks.style.fontSize = '10rem';
})


//DRAG DROP

navLinks[2].addEventListener('drag / drop', function(event){
    navLinks.target.style.fontSize = '10rem';
})

// * [*] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
const objSample = { owner: {name: 'Cynthia'}};
const pathSample = 'owner.name';


//DOM 2 with Gabril Cabrejas Video 

// * [*] Stop the navigation items from refreshing the page by using `preventDefault()`

Array.from(document.links).forEach(function (link) {
    link.addEventListener('click', function (event){
        console.log(`disrupting the default behavior of "${event.target.textContent}"`
        );
        event.preventDefault();
    })
})