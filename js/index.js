// Your code goes here
const button = document.querySelectorAll('.btn');
const images = document.querySelectorAll('img');
const nav = document.querySelector('nav');
const anchor = document.querySelectorAll('a');
const mainNav = document.querySelector('.main-navigation');
const title = document.querySelector('h1');

const buttonClickHandler = function(event){
    event.target.style.background = 'mediumaquamarine';
}

const buttonHoverHandler = function(event){
    event.target.style.width = '100%';
}

const buttonLeaveHandler = function(event){
    event.target.style.width = '200px';
}

const imageLoadHandler = function(event){
    event.target.style.width = '50%';
}

const imageHoverHandler = function(event){
    event.target.style.width = '75%';
}

const imageDClickHandler = function(event){
    event.target.style.width = '100%';
}

const clickAnchorHandler = function(event){
    event.target.style.color = 'darkcyan';
}

button.forEach((clickButton) => {
    clickButton.addEventListener('click', buttonClickHandler)
})

button.forEach((hoverButton) => {
    hoverButton.addEventListener('mouseenter', buttonHoverHandler)
})

button.forEach((leaveButton) => {
    leaveButton.addEventListener('mouseleave', buttonLeaveHandler)
})

images.forEach((loadImage) => {
    loadImage.addEventListener('load', imageLoadHandler)
})

images.forEach((hoverImage) => {
    hoverImage.addEventListener('mouseenter', imageHoverHandler)
})

images.forEach((dClick) => {
    dClick.addEventListener('dblclick', imageDClickHandler)
})

anchor.forEach((clickAnchor) => {
    clickAnchor.addEventListener('click', clickAnchorHandler)
})

nav.addEventListener('click', function(event){
    event.preventDefault();
})

nav.addEventListener('mouseover', function(event){
    event.preventDefault();
    event.target.parentNode.style.background = 'yellow';
})

mainNav.addEventListener('mouseover', function(event){
    event.target.style.background = 'lime';
})

title.addEventListener('mouseenter', function(event){
    event.target.style.fontSize = '5rem';
})

title.addEventListener('mouseleave', function(event){
    event.target.innerHTML = 'HAVE FUN!';
})

