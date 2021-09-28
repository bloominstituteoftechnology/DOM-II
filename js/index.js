// Your code goes here
const signButton = document.querySelectorAll('.btn');
const navButton = document.querySelectorAll('nav a');
const containerH2 = document.querySelectorAll('h2');
const logo = document.querySelector('.logo-heading');
const headerImg = document.querySelector('.intro img')
const header = document.querySelector('.nav-container')
const h4 = document.createElement('h4')
const home = document.querySelector('.home')
const welcome = document.querySelector('.intro h2')
const letsGo = document.querySelector('.text-content h2')
const user = {
    name: ''
}
console.log(letsGo)

// Image toggle black and white
let imageToggle = true
const imageChange = () => {
    if (imageToggle) {
        headerImg.setAttribute('style', 'filter: grayscale(100%);')
    } else {
        headerImg.setAttribute('style', '')
    }
    imageToggle = !imageToggle
}
headerImg.addEventListener('mouseover', imageChange, false)

// User is online
header.appendChild(h4)
const onlineH4 = header.querySelector('h4')
onlineH4.textContent = 'Boo! You are not online!'
const detectOnline = () => {
    onlineH4.textContent = 'Yay! You are online!'
}
window.addEventListener('online', detectOnline())
// Nav button colors
navButton.onclick = function(event) {
    navButton.setAttribute('style', 'color: red')
}

// On Load Message
const loadMessage = (e) => {
    alert("Welcome to my page! Press Okay to enter")
}
window.addEventListener('load', loadMessage)

// Ask for name on scroll
let hasScrolled = false
let scrollPosition = 0
const askName = () => {
    scrollPosition = window.scrollY
    if (!hasScrolled && scrollPosition > 150) {
        user.name = window.prompt('What is your name: ')
        welcome.textContent += ` ${user.name}`
        hasScrolled = true
    }
}
window.addEventListener('scroll', askName)

// Get excited
letsGo.textContent +=  ' <=== double click me if you are excited!'
const getExcited = () => {
    letsGo.insertAdjacentHTML('afterend', ' I am sooo excited!')
}
letsGo.addEventListener('dblclick', getExcited)



