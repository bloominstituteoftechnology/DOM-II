// Your code goes here
const signButtons = document.querySelectorAll('.btn');
const navButton = document.querySelectorAll('nav a');
const containerH2 = document.querySelectorAll('h2');
const logo = document.querySelector('.logo-heading');
const headerImg = document.querySelector('.intro img')
const header = document.querySelector('.nav-container')
const h4 = document.createElement('h4')
const home = document.querySelector('.home')
const welcome = document.querySelector('.intro h2')
const letsGo = document.querySelector('.text-content h2')
const destination = document.querySelector('.content-destination h2')
const destinationValue = document.querySelector('.content-destination')
const style = document.createElement('style')

style.innerHTML = `
    .btn {
        background-color: black;
        color: white;
        display: block;
        height: 40px;
        line-height: 40px;
        text-decoration: none;
        width: 100px;
        text-align: center;
        cursor: pointer;
    }
`
document.head.appendChild(style)

const user = {
    name: ''
}
//console.log(letsGo)

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

// Destination Input
const destinationInput = document.createElement('INPUT')
const destinationStrong = document.createElement('strong')
destinationInput.setAttribute('type', 'text')
destinationInput.setAttribute('value', 'Where do you want to go?')
 
destination.appendChild(destinationInput)
destination.appendChild(destinationStrong)

const updateDestination = (e) => {
    const targetValue = e.target.value
    if (targetValue.length > 3) {
        destinationStrong.textContent = ` I love ${e.target.value} too!`
    }
}
destinationInput.addEventListener('input', updateDestination)

// Change color on focus
const changeInputColorAndRest = (e) => {
destinationInput.setAttribute('value', '')
    e.target.style.background = 'pink'
}
destinationInput.addEventListener('focus', changeInputColorAndRest)

// ALert if input is empty
const emptyInputAlert = (e) => {
    const targetValue = e.target.value
    destinationInput.setAttribute('value', 'Where do you want to go?')
    e.target.style.background = ''
    if (targetValue.length === 0) {
        alert('Please tell me where you want to go.')
    }
}
destinationInput.addEventListener('blur', emptyInputAlert)

// Alert on signup
const buttons = Array.from(signButtons)
const handleClick = () => {
    alert('Sorry the sign up page is out of order')
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick)
})



Array.from(document.links).forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    })
})

document.addEventListener('click', function(event) {
    console.log(' No more propagation!!');
    event.stopPropagation();
})
