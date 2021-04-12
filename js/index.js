// Your code goes here
const  navBar = document.querySelector('.nav')
navBar1 = navBar.firstElementChild
navBar1.addEventListener("mouseover", e => {
    e.target.style.fontSize = "2.6rem"
})
navBar1.addEventListener("mouseout", e => {
    e.target.style.fontSize = "1.6rem"
})
navBar1.addEventListener("click", e => {
    e.preventDefault()
})

const navBar2 = navBar1.nextElementSibling
navBar2.addEventListener("mouseover", e => {
    e.target.style.fontSize = "2.6rem"
})
navBar2.addEventListener("mouseout", e => {
    e.target.style.fontSize = "1.6rem"
})
navBar2.addEventListener("click", e => {
    e.preventDefault()
})

const navBar3 = navBar2.nextElementSibling
navBar3.addEventListener("mouseover", e => {
    e.target.style.fontSize = "2.6rem"
})
navBar3.addEventListener("mouseout", e => {
    e.target.style.fontSize = "1.6rem"
})
navBar3.addEventListener("click", e => {
    e.preventDefault()
})

const navBar4 = navBar3.nextElementSibling
navBar4.addEventListener("mouseover", e => {
    e.target.style.fontSize = "2.6rem"
})
navBar4.addEventListener("mouseout", e => {
    e.target.style.fontSize = "1.6rem"
})
navBar4.addEventListener("click", e => {
    e.preventDefault()
})

const txtContent = document.querySelector(".text-content")
txtContent.addEventListener("click", e => {
    e.target.style.color = "red"
    e.stopPropagation()
})