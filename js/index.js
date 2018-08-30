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
    event.target.style.width = '100%'
}

const imageHoverHandler = function(event){
    event.target.style.width = '50%';
}

const imageDClickHandler = function(event){
    event.target.style.width = '100%';
}

const clickAnchorHandler = function(event){
    event.target.style.background = 'darkcyan';
}

button.forEach((clickButton) => {
    clickButton.addEventListener('click', buttonClickHandler)
})

button.forEach((hoverButton) => {
    hoverButton.addEventListener('mouseover', buttonHoverHandler)
})

images.forEach((hoverImage) => {
    hoverImage.addEventListener('mouseover', imageHoverHandler)
})

images.forEach((dClick) => {
    dClick.addEventListener('dblclick', imageDClickHandler)
})

anchor.forEach((clickAnchor) => {
    clickAnchor.addEventListener('click', clickAnchorHandler)
})

nav.addEventListener('click', function(event){
    event.preventDefault()
})

nav.addEventListener('mouseover', function(event){
    event.stopImmediatePropagation();
    event.target.parentNode.style.background = 'lightgray';
})

mainNav.addEventListener('mouseover', function(event){
    event.target.style.background = 'hotpink';
})

title.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '5rem';
})

title.addEventListener('click', function(event){
    event.target.innerHTML = 'HAVE FUN!';
})

