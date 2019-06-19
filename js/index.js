// Your code goes here
/*
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('mouseover', function (e) {
    //code below says if you click button the button will bounce to a larger size in 2sec
TweenMax.to('#logo-heading', 2, { scale: 1.5, ease: Bounce.easeOut });
});
*/

//nav a: click
const nav = document.querySelectorAll('nav a');
//adds event listener to 0th index of nav with 'click' object
nav[0].addEventListener('click', function (e) {
    //'Home' turns cyan when clicked
    e.target.style.color = 'cyan';
    //clicking on 'Home' only affects 'Home'
    e.stopPropagation();
});

nav[1].addEventListener('click', function (e) {
    e.target.style.color = 'teal';
    e.stopPropagation();
});

nav[2].addEventListener('click', function (e) {
    e.target.style.color = 'cyan';
    e.stopPropagation();
});

nav[3].addEventListener('click', function (e) {
    e.target.style.color = 'teal';
    e.stopPropagation();
});

//container: keyup + keydown
const container = document.querySelector('body');
container.addEventListener('keydown', function (e) {
    container.style.backgroundColor = 'red';
    console.log('keydown', e);
});

container.addEventListener('keyup', function (e) {
    e.currentTarget.style.color = 'pink';
});


//fun bus: wheel zoom
let scale = 1;
const logoHeading = document.querySelector('.logo-heading');
logoHeading.onwheel = zoom;

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.25, scale), 2.5);
    // Apply scale transform
    logoHeading.style.transform = `scale(${scale})`;
};


//drag, dragstart, + dragend
const dragWelcome = document.querySelector('.intro h2');
dragWelcome.addEventListener('drag', function () {
    dragWelcome.setAttribute('style', 'filter: opacity(50%)');
}, false);

const introImg = document.querySelector('.intro img');
introImg.addEventListener('dragstart', function (e) {
    e.target.setAttribute('style', 'filter: grayscale(70%)');
}, false);

const destinationImg = document.querySelector('.content-destination img');
//change will occur at the end of mouse click   
destinationImg.addEventListener('dragend', function (e) {
    e.target.setAttribute('style', 'filter: grayscale(100%');
}, false);


//mouseover: h2 
const h2Color = document.querySelectorAll('h2');

h2Color[0].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'beige';
    e.stopPropagation();
});

h2Color[1].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'beige';
    e.stopPropagation();
});

h2Color[2].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'beige';
    e.stopPropagation();
});

h2Color[3].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'beige';
    e.stopPropagation();
});

//mouseover: h4
const h4Color = document.getElementsByTagName('h4');

h4Color[0].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'coral';
    e.stopPropagation();
});

h4Color[1].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'coral';
    e.stopPropagation();
});

h4Color[2].addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = 'coral';
    e.stopPropagation();
});


//buttons: dbl click
const btns = document.querySelectorAll('.btn');
btns[0].addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'pink';
    e.stopPropagation();
});

btns[1].addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'pink';
    e.stopPropagation();
});

btns[2].addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'pink';
    e.stopPropagation();
});

// const signUpBtns = document.querySelectorAll('.btn');
// signUpBtns.forEach(function (element) {
//     element.addEventListener('dblclick', function (e) {
//         e.style.backgroundColor = 'pink';
//     });
// });
