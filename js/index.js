// Your code goes here

//Making nav links change color
const navLinks = document.querySelector('.nav')
const nav1 = navLinks.firstElementChild
nav1.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "white"
})
nav1.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "white"
    event.target.style.color = "black"
})

const nav2 = nav1.nextElementSibling
nav2.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "white"
})
nav2.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "white"
    event.target.style.color = "black"
})

const nav3 = nav2.nextElementSibling
nav3.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "white"
})
nav3.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "white"
    event.target.style.color = "black"
})

const nav4 = nav3.nextElementSibling
nav4.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "white"
})
nav4.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "white"
    event.target.style.color = "black"
})

nav1.addEventListener("click", event => {
    event.preventDefault()
})

nav2.addEventListener("click", event => {
    event.preventDefault()
})

nav3.addEventListener("click", event => {
    event.preventDefault()
})

nav4.addEventListener("click", event => {
    event.preventDefault()
})

fullPage = document.querySelector("body")
fullPage.addEventListener("wheel", event => {
    fullPage.style.backgroundColor = "black"
    fullPage.style.color = "white"
    event.stopPropogation
})

fullPage.addEventListener('keypress', event => {
    if (event.key == " ") {
    event.preventDefault()
    event.target.style.backgroundColor = "white"
    event.target.style.color = "black"
    }
}) 


fullPage.addEventListener('keydown', event => {
    if (event.key == 'a') {
    event.target.style.color = 'green'
    event.target.style.fontWeight = 900
    console.log(fontWeight)
    }
})

fullPage.addEventListener('keyup', event => {
    if (event.key == 'a') {
        event.target.style.color = 'black'
        event.target.style.fontWeight = 100
    }
})

const destination = document.querySelector('.destination')
const button1 = destination.firstElementChild.nextElementSibling.nextElementSibling
button1.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = "red"
    console.log('I double clicked')
})

const destination2 = destination.nextElementSibling
const button2 = destination2.firstElementChild.nextElementSibling.nextElementSibling
button2.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = "red"
})

const destination3 = destination2.nextElementSibling
const button3 = destination3.firstElementChild.nextElementSibling.nextElementSibling
button3.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = "red"
})

const image1 = document.querySelector('img')
image1.addEventListener('mouseenter', event => {
    event.target.style.transform = "rotatey(180deg)"
    event.target.style.transition = "transform 2s"
})

