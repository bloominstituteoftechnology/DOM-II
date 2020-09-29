// Disabling nav
const navLinks = document.querySelectorAll('a')
navLinks.forEach(item => item.addEventListener('click', e => {
    e.preventDefault()
}))

// Click
const h1 = document.querySelector('h1')
h1.addEventListener('click', e => {
    e.target.innerHTML = 'Sad Bus' 
    e.target.style.color = 'orange'
})

// dblclick
h1.addEventListener('dblclick', e => {
    e.target.innerHTML = 'Fun Bus'
    e.target.style.color = 'Black'
})

// Mouseover
document.querySelectorAll('p').forEach(item => item.addEventListener('mouseover', e => {
    e.target.style.color = 'pink'
}))

// Mouseout
document.querySelectorAll('p').forEach(item => item.addEventListener('mouseout', e => {
    e.target.style.color = 'black'
}))

// Keydown
document.body.addEventListener('keydown', e => {
    e.target.style.background = 'grey'
})

// Scroll
window.addEventListener('scroll', e => {
    document.body.style.background = '#d0bdf4'
})

// Focus
window.addEventListener('focus', e => {
    document.querySelector('footer').style.background = 'royalblue'
})

// Load
window.addEventListener('load', e => {
    alert('Welcome')
})

// Resize
window.addEventListener('resize', e => {
    document.querySelector('header').style.background = 'purple'
})

// Wheel
window.addEventListener('wheel', e => {
    document.querySelectorAll('h2').forEach(item => item.style.color = 'gold')
})