// Your code goes here
// Change the text color to crimson on mouse enter
const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseenter', function() {
    footerText.style.color = 'crimson';
})

// Change the color to grey on mouse leave
const footer = document.querySelector('.footer');
footer.addEventListener('mouseleave', function(){
    footer.style.background = 'grey';
})

// click mouse down to change width to 200px
const photo = document.querySelector('.img-content img')
photo.addEventListener('mousedown', function(){
    photo.style.width ='200px';
})

// Double clikc to change display to none
const intro = document.querySelector('.intro img')
intro.addEventListener('dblclick', function() {
    intro.style.display = 'none';
})

// Keyup to change body to orange
const body = document.querySelector('body')
body.addEventListener('keyup', function() {
    body.style.background = 'orange';
})

// Mouse over to change text color to crimson
const inverseText = document.querySelector('.inverse-content .text-content')
inverseText.addEventListener('mouseover', function() {
    inverseText.style.color = 'crimson';
})

// Mouse move to change text and background color
const destination = document.querySelector('.content-pick')
destination.addEventListener('mousemove', function() {
    destination.style.color = 'green';
    destination.style.background = 'lightgrey';
})

// Mouse to change heading to crimson
const destinationText = document.querySelector('.content-destination h2')
destinationText.addEventListener('mouseout', function() {
    destinationText.style.color = 'crimson';
})

// Wheel to change header to yellow
const header = document.querySelector('header')
header.addEventListener('wheel', function() {
    header.style.background = 'yellow';
})

// Mouse up to highlight nav items green
const nav = document.querySelector('.nav');
nav.addEventListener('mouseup', function() {
    nav.style.background = 'green';
})

const navigation = document.querySelectorAll('a');
navigation.forEach(navigation => {
    event.preventDefault();
    navigation.addEventListener('click', function () {
        navigation.style.color = 'purple';
    })
}) 