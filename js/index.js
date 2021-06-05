const naviLinks = document.querySelectorAll('nav.a')

naviLinks.forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = 'purple'
    })
    item.addEventListener('mouseleave', event => {
        event.target.style.color = null
    })
})

const heading = document.querySelector('h1.logo-heading')
heading.addEventListener('click', event => {
    event.target.style.color = 'red'
})

const welcomeFun = document.querySelector('.intro h2')
welcomeFun.addEventListener('dblclick', event => {
    welcomeFun.style.fontSize = '20px'
    welcomeFun.style.backgroundColor = 'dodger blue'
    welcomeFun.textContent = 'Welcome To Fun Bus! Hop On'
})

const contentSection = document.querySelector('.content-section')
contentSection.addEventListener('wheel', event => {
    contentSection.style.backgroundColor = 'orange'
})

const adventureImg = document.querySelector('.img-content img')
document.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
        adventureImg.style.width = '50%'
    }
})

const busImg = document.querySelector('.intro img')
busImg.addEventListener('mouseover', event => {
    busImg.style.width = '80%', center
})

const navi = document.querySelector('.main-navigation')
document.addEventListener('keyup', event => {
    if(event.key === 'Shift') {
        navi.style.backgroundColor = 'blue'
    }
})

const logo = document.querySelector('.logo-heading')
logo.addEventListener('click', event => {
    event.stopPropagation()
    logo.style.fontSize = '2px'
})

navi.addEventListener('click', event => {
    navi.style.width = '100%'
})