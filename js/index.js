
//Brings up a window that welcomes you the website once the page fully loads

window.addEventListener('load', (event) => {
    alert
})

// changes the color of the text in the nav when the mouse is over it and moves away

const mainNav = document.querySelector('.nav')

mainNav.addEventListener('mouseover', function(event) { 
    event.target.style.color = 'red';
})
mainNav.addEventListener('mouseout', function(event) {
    event.target.style.color = 'black'
})


//Adds a border around the first image on the page when the mouse is over it

const imgFun = document.querySelector('.intro img')

imgFun.addEventListener('mouseenter', function(event) {
    event.target.style.border = '1px solid red'
})
imgFun.addEventListener('mouseleave', function(event) {
    event.target.style.border = ''
})



const topContentHead = document.querySelector('.content-section .text-content h2')

topContentHead.addEventListener