const navLinks = document.querySelectorAll('.nav a');


navLinks.forEach( item => {
    item.addEventListener( 'mouseover', function (event) {
        event.target.style.color = 'green';
    })
    item.addEventListener( 'mouseleave', function (event) {
        event.target.style.color = null;
    })
})


const mainHeading = document.querySelector('h1.logo-heading');

mainHeading.addEventListener( 'click', function (event) {
    event.target.style.color = 'pink';
})


const welcome = document.querySelector('.intro h2')

welcome.addEventListener( 'dblclick', function (event) {
    welcome.style.fontSize = "20rem"
    welcome.style.backgroundColor = "red";
    welcome.textContent='Welcome To Fun Bus! Hop on'
})


const contentSection = document.querySelector('.content-section')

contentSection.addEventListener('wheel', function (event) {
    contentSection.style.backgroundColor='yellow'
})


const adventureImage = document.querySelector('.img-content img')

document.addEventListener('keydown', function (event) {
    if(event.key === 'Escape'){
        adventureImage.style.width = '50%'
    }
})


const busImage = document.querySelector('.intro img')

busImage.addEventListener('mouseover', function (event) {
    busImage.style.width = '80%'
})


const nav = document.querySelector('.main-navigation')

document.addEventListener('keyup', function (event) {
    if(event.key === 'Shift'){
        nav.style.backgroundColor = 'green'
    }
})

const logo = document.querySelector('.logo-heading')

logo.addEventListener('click', function (event) {
    event.stopPropagation()
    logo.style.fontSize = '2rem'
})

nav.addEventListener('click', function (event) {
    nav.style.width = '50%'
})