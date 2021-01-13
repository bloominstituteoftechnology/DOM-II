// Your code goes here
const busImg = document.querySelector('img')
busImg.addEventListener(`mouseover`, () => {
    busImg.style.opacity = 0.7
})

busImg.addEventListener(`mouseout`, () => {
    busImg.style.opacity = 1
})


const navBar = document.querySelector('.nav')
navBar.style.display = 'flex'
navBar.style.alignItems = 'center'

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach( element => element.addEventListener('mouseover', function(){
    element.style.opacity = .5;
    element.style.fontSize = 'x-large';
}))
navLinks.forEach( element => element.addEventListener('mouseout', function(){
    element.style.opacity = 1;
    element.style.fontSize = 'initial'
}))


window.addEventListener('resize', () => {
    (document.querySelector('body')).style.backgroundColor = 'red'
    console.log('yes')
})

