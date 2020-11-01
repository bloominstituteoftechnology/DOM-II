// Logo Heading Mouseover and Mouseleave
const logo = document.querySelector('.logo-heading')
logo.addEventListener('mouseover', () => {
    logo.style.color = '#009900'
    logo.style.transition = "all .8s"
})

const logoLeave = document.querySelector('.logo-heading')
logoLeave.addEventListener('mouseleave', () => {
    logoLeave.style.color = '#ffd800'
})

// Window Keydown Alert
window.addEventListener('keydown', () => {
    alert('Bus passenger: I’d like a ticket to New York, please.\nTicket seller: By Buffalo?\nBus passenger: Of course not, I’m in the bus queue, aren’t I?')
})

// Header Image Dblclick
const headerIMG = document.querySelector('.intro img')
    headerIMG.addEventListener('dblclick', () => {
        headerIMG.src = 'https://i.ibb.co/k4TKhc3/yellowvan.jpg'
        headerIMG.style.marginLeft = '33%'
        headerIMG.style.borderRadius = '10%'
    })

// Window Resize Background Color
const background = document.querySelector('body')
window.addEventListener('resize', () => {
    background.style.backgroundColor = "#89cff0"
})

// Scroll Background Color Nav Bar
const navBar = document.querySelector('.main-navigation')
window.addEventListener('scroll', () => {
    navBar.style.backgroundColor = '#89cff0'
})

// H2 Click
const h2 = document.querySelector('.intro h2')
h2.addEventListener('click', () => {
    h2.style.color = 'purple'
    h2.style.fontSize = '50px'
})

// Intro Paragraph Mousemove
const intro = document.querySelector('.intro p')
intro.addEventListener('mousemove', () => {
    intro.style.fontSize = '30px'
})

// Window Onload
window.onload = function() {
    alert('Welcome to the site')
}

// No Copy
background.addEventListener('copy', () => {
    alert('Thanks for wanting to save that piece of info.')
})

//Footer Stop Propagation
const div = document.querySelector('.footer div')
div.addEventListener('click', () => {
    div.style.backgroundColor = 'purple'
})

const copyright = document.querySelector('.footer p')
copyright.addEventListener('click', () => {
    copyright.style.color = '#ffd800'
    event.stopPropagation()
})

// Nav Prevent Default
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(navigation => {
    navigation.addEventListener('click', (event) => {
        event.preventDefault()
    })
})