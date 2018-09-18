
// click event
const CPRButton = document.querySelector('.CPRButton')
const copyText = document.querySelector('.testing')


CPRButton.addEventListener('click', () => {
    copyText.classList.toggle('testing')
})


// doubleclick event

const button1 = document.querySelector('.btn')


button1.addEventListener('dblclick', (e) => {
    e.target.parentNode.style.color = 'red';
})

// keydownEvent

const ctaHeader = document.querySelector('.home .intro .headerImg')
const introHeader = document.querySelector('.intro')

window.addEventListener('keydown', () => {
    ctaHeader.classList.toggle('headerImg')
})


// mousewheel Event
const letsGo = document.querySelector('.text-content h2')

window.addEventListener('wheel', (e) => {
    letsGo.style.marginLeft = '50%';
})

// mouseover Event

const advImg = document.querySelector('.img-content')
const imgCont = document.querySelector('.imgContainer')

imgCont.addEventListener('mouseover', () => {
    advImg.classList.toggle('img-content');
})

// keyup Event

const contDestination = document.querySelector('.content-destination h2')


window.addEventListener('keyup', () => {
    contDestination.classList.toggle('content-destination')
})

// auxclick event

const destH = document.querySelector('.dest-h')
const destP = document.querySelector('.dest-p')

destH.addEventListener('auxclick', (e) => {
    destP.classList.toggle('dest-p')
})


// mouseup event
const destH2 = document.querySelector('.dest-h2')

destH2.addEventListener('mouseup', (e) => {
    destH2.classList.toggle('dest-h2')
})

// mouseout event

const destP2 = document.querySelector('.dest-p2')

destP2.addEventListener('mouseout', (e) => {
    destP2.classList.toggle('dest-p2')
})

// Mousemove
const destH3 = document.querySelector('.dest-h3')

destH3.addEventListener('mousemove', (e) => {
    destH3.classList.toggle('dest-h3')
})

// Remove default functionality of nav

const myNav = document.querySelector('.nav');


myNav.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
})


