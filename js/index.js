//selecting following elements from DOM
//h1
const h1 = document.querySelector('h1')//done
//h2's
const h2 = document.querySelector('h2')//done
//h4
const h4 = document.querySelector('h4')
//nav
const navLinks = document.querySelector('.nav')//done
//img's
const busImg = document.querySelector('.intro')//done
const mapImg = document.querySelector('.img-content img')
const boatImg1 = document.querySelector('.inverse-content img')
const boatImg2 = document.querySelector('.content-destination img')
//P's
const p = document.querySelector('.container .intro p')//done
const footerP = document.querySelector('footer p')

h1.addEventListener('click', event => {
    h1.style.color = 'yellow'
})

document.addEventListener('keyup', event => {
    h2.style.color = 'blue'  
})

p.addEventListener('mouseover', (event) => {
    console.log('test')
    p.style.background = 'pink'
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

})
.