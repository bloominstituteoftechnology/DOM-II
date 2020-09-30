//selecting following elements from DOM
//h1
const h1 = document.querySelector('h1')//done
//h2's
const h2 = document.querySelector('h2')//done
//h4
const h4 = document.querySelector('h4')//done
//nav
const navLinks = document.querySelector('.nav')//done
//img's
const busImg = document.querySelector('.intro')//done
const mapImg = document.querySelector('.img-content')//done
const boatImg1 = document.querySelector('.inverse-content')//done
const boatImg2 = document.querySelector('.content-destination')//done
//P's
const p = document.querySelector('.container .intro p')//done
const footer = document.querySelector('footer')

h1.addEventListener('click', event => {
    h1.style.color = 'yellow'
})

document.addEventListener('keyup', event => {
    h2.style.color = 'blue'  
})

h4.addEventListener('mousemove', event => {
    h4.style.background = 'purple'
})

navLinks.addEventListener('keydown', event => {
    if(event.key == 'Escape'){
        navLinks.style.background = 'green'
    }
})

busImg.addEventListener('dblclick', event => {
    busImg.removeChild(busImg.childNodes[0])
})

mapImg.addEventListener('mousedown', event => {
    mapImg.style.background = 'red'
})

boatImg1.addEventListener('wheel', event => {
    boatImg1.style.background = 'cyan'
})

document.addEventListener('keypress', event => {
    boatImg2.style.background = 'red'
})

p.addEventListener('mouseover', (event) => {
    p.style.background = 'pink'
})

document.addEventListener('mouseout', event => {
    footer.style.background = 'brown'
})