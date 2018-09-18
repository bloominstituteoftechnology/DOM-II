const title = document.querySelector('.logo-heading')
title.addEventListener('click', (e) => {
    e.stopPropagation();
    e.currentTarget.style.color = 'red';
    e.currentTarget.style.background = 'black'
    console.log("title was clicked!")
})

const mainHeader = document.querySelector('.main-navigation')
mainHeader.addEventListener('click', () => {
    console.log("mainHeader was clicked!")
})

const firstPic = document.querySelector('.intro img')
firstPic.addEventListener('mouseover', (e) => {
    e.currentTarget.parentNode.style.color = "red"
})

const introText = document.querySelector('p')
introText.addEventListener('dblclick', () => {
    introText.style.background = 'black'
})

// firstPic = document.querySelector('.intro img')
// firstPic.addEventListener('mouseup', () => {
//     firstPic.style.display = 'none'
// })

const secondHeading = document.querySelector('.secondH2')
secondHeading.addEventListener('copy', () => {
    secondHeading.classList.toggle('newHeadings')
})

const thirdHeading = document.querySelector('.thirdH2')
thirdHeading.addEventListener('paste', () => {
    thirdHeading.innerText = "Let's Go!"
    thirdHeading.classList.toggle('newHeadings')
})

const fourthHeading = document.querySelector('.fourthH2')
fourthHeading.addEventListener('contextmenu', (e) => {
    e.stopPropagation();
    fourthHeading.classList.toggle('newHeadings')
})

const firstH4 = document.querySelector('.firstH4')
firstH4.addEventListener('mouseenter', () => {
    firstH4.classList.toggle('newH4')
})

const secondH4 = document.querySelector('.secondH4')
secondH4.addEventListener('wheel', () => {
    secondH4.style.transform = 'skewY(25deg)'
})

const thirdH4 = document.querySelector('.thirdH4')
thirdH4.addEventListener('auxclick', () => {
    thirdH4.innerText = 'HELLLOOOO!'
})
thirdH4.addEventListener('mousemove', () => {
    thirdH4.style.color = 'red'
})

const homeItem = document.querySelector('.nav-link1')
const aboutUsItem = document.querySelector('.nav-link2')
const blogItem = document.querySelector('.nav-link3')
const contactItem = document.querySelector('.nav-link4')
homeItem.addEventListener('click', (e) => {
    e.preventDefault();
})
aboutUsItem.addEventListener('click', (e) => {
    e.preventDefault();
})
blogItem.addEventListener('click', (e) => {
    e.preventDefault();
})
contactItem.addEventListener('click', (e) => {
    e.preventDefault();
})

// const secondPic = document.querySelector('#pic2')
// secondPic.addEventListener('click', () => {
//     secondPic.src = 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
// })