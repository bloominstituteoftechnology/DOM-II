// Set various variables vastly used below.

let opacity = 1;
let radius = 0;
let pSize = 16;

// These are all the selectors I used in this project.

const mainNav = document.querySelector('.nav-container .nav');
const funBusImage = document.querySelector('.intro img');
const universalImgSelect = document.querySelectorAll('img');
const body = document.querySelector('body');
const p = document.querySelectorAll('p');
const btn = document.querySelectorAll('.btn');
const destinationDiv = document.querySelectorAll('.destination');

// I tried to mimic a picture fading out once you scroll down
// but ended up just having a the Fun Bus disappear instead.

window.addEventListener('scroll', (event) => {
    opacity = opacity - .3;    
    funBusImage.style.opacity = `${opacity}`;
    if (opacity <= 0) {funBusImage.style.display = 'none'}
})

// Resizing the window will bring the Fun Bus back from
// the opaque grave!

window.addEventListener('resize', (event) => {
    funBusImage.style.opacity = 1;
    funBusImage.style.display = 'block';
})

// Mousing over the picture of the map multiple times will
// increase the border radius untill 50, then display an
// alert message to stop!

universalImgSelect[1].addEventListener('mouseover', (event) => {
    radius === 50 ? alert(`That's too far!`) : radius += 5;
    universalImgSelect[1].style.borderRadius = `${radius}%`;
})

// Upon loading the page, you are greeted with a friendly
// chain of alert boxes to welcome you to the Fun Bus!

window.addEventListener('load', (event) => {
    window.alert('Welcome to my Fun Bus Page!');
    alert('I hope you enjoy your stay here on the Fun Bus!')
    alert('The Fun Bus strives to be a wild ride!')
    alert('I wish all my content was delivered to me through alert messages in my browser.')
    alert('Content control would be a thing of the past!')
    alert('Just think about it, you could just click a simple button to get more information to consume.')
    alert(`Honestly, you wouldn't need to think about much else.`)
    alert('Just mindlessly clicking... clicking... clicking...')
    alert('How about we change up the boxes a little bit. You know what to do.')
    confirm(`Sometimes options can be fun! Who knew "cancel" could be so enticing! Go ahead and click whatever you'd like. You've earned it.`);
    alert(`Not that it makes much of a choice. It's all about the illusion of choice, am I right? The idea of power is intoxicating.`)
    alert(`I want to get off Fun Bus's wild ride`);
})

// Once page is in focus, the blur effect is removed,
// and the text color is changed to green.

window.addEventListener('focus', (event) => {
    body.style.color = 'darkgreen';
    body.classList.remove('blur');
})

// Double-clicking turns the window blurry.

window.addEventListener('dblclick', (event) => {
    body.classList.remove('blur');
})

// Using the mouse's wheel, the p text gets smaller.

window.addEventListener('wheel', (event) => {
if (pSize <= 1) {
    pSize = 1;
} else {
    pSize -= 1;
    p.forEach(param => param.style.fontSize = `${pSize}px`);
}})

// Selecting text in the text box displays an alert.

window.addEventListener('select', (event) => {
    alert(`You've selected that text! Great job!`);
})

// Once 'b' is pressed, the page blur is toggled.

window.onkeydown = function(event) {
    if (event.keyCode === 66) {
        body.classList.toggle('blur');
    }
 };

// Blurs page once not focused.

 window.addEventListener('blur', (event) => {
    body.classList.add('blur');
})

// Example of the use of .stopPropagation().

btn[2].addEventListener('click', (event) => {
    btn[2].classList.toggle('blur')
    event.stopPropagation();
});

destinationDiv[1].addEventListener('click', (event) => {
    destinationDiv[1].classList.toggle('blur')
});

// Prevents the nav links from refreshing the page.

mainNav.addEventListener('click', (event) => {
    event.preventDefault()
});