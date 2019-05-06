// Your code goes here
// Change the text color
const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseenter', function() {
    footerText.style.color = 'white';
})
 
// Change the color 
const footer = document.querySelector('.footer');
footer.addEventListener('mouseleave', function(){
    footer.style.background = '#17a2b8';
})

// click mouse down 
const photo = document.querySelector('.img-content img')
photo.addEventListener('mousedown', function(){
    photo.style.width ='200px';
})

// Double clikc 
const intro = document.querySelector('.intro img')
intro.addEventListener('dblclick', function() {
    intro.style.display = 'none';
})

// Keyup 
const body = document.querySelector('body')
body.addEventListener('keyup', function() {
    body.style.background = '#CFD9DF';
    tweenMax.to('body' ,1,{scale:1, height:'100vh'});
})
// Mouse over 
const inverseText = document.querySelector('.inverse-content .text-content')
inverseText.addEventListener('mouseover', function() {
    inverseText.style.color = 'crimson';
})

// Mouse move 
const destination = document.querySelector('.content-pick')
destination.addEventListener('mousemove', function() {
    destination.style.color = 'white';
    destination.style.background = '#93a5cf';
})

// Mouse to change heading and under-line
const destinationText = document.querySelector('.content-destination h2')
destinationText.addEventListener('mouseout', function() {
    destinationText.style.color = 'crimson';
    destinationText.style.textDecoration = 'underline';
})

// Wheel to change header color
const header = document.querySelector('header')
header.addEventListener('wheel', function() {
    header.style.background = '#17a2b8';
})

// Mouse up to highlight nav items green
const nav = document.querySelector('.nav');
nav.addEventListener('mouseup', function() {
    nav.style.background = '#93a5cf ';
    nav.style.height = "4rem";  
})

// sign up name request
const btn_alart = document.querySelector('.btn');
btn_alart.addEventListener('click',function(){
    prompt('Your name please !');
})

// const header = document.querySelector('.main-navigation');
// header.addEventListener('mouseout',function(){
//     header.style.background = 'black';
// })
