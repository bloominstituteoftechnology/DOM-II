// Your code goes here
const header = document.querySelector('.main-navigation')

header.addEventListener('mouseover', function (event){
    event.target.style.background = '#8FBC8F'
})



const images = document.querySelector('.intro')
document.addEventListener('keydown', function (event){
    if (event.key === 'Escape'){
        images.remove('img')
    }
})



const destination = document.querySelector('.content-pick')
destination.addEventListener('click', function (event){
    event.target.style.background = 'black'
})



header.addEventListener('mouseout', function (event){
    event.target.style.background = 'white'
})



const funBus = document.querySelector('h1')
funBus.addEventListener('copy', function (event){
    event.target.style.color = '#FF4500'
})



const fourthHeaders = document.querySelector('.destination')

fourthHeaders.addEventListener('mouseup', function (event){
    event.target.style.color = 'white'
})

const fourthHeadersTwo = document.querySelector('.destination:nth-of-type(2)')
fourthHeadersTwo.addEventListener('mouseup', function (event){
    event.target.style.color = 'white'
})

const fourthHeadersThree = document.querySelector('.destination:nth-of-type(3)')
fourthHeadersThree.addEventListener('mouseup', function (event){
    event.target.style.color = 'white'
})



const inverseContent = document.querySelector('.inverse-content')
inverseContent.addEventListener('wheel', function (event){
    event.stopPropagation()
    let scale = 1;
    scale += event.deltaY * -.01;
    event.target.style.transform = `scale(${scale})`; 
})



const contentDestination = document.querySelector('.content-destination')
contentDestination.addEventListener('contextmenu', function (event){
    event.preventDefault()
    event.target.style.color = '#FA8072'
})



window.addEventListener('load', function (event){
    images.style.background = '#D2B48C'
})


const footer = document.querySelector('.footer')
const footerPara = document.querySelector('.footer p')
footerPara.addEventListener('cut', function (event){
    footer.style.background = '#FF0000'
})


document.querySelector('nav').addEventListener('click', function (event){
    event.preventDefault()
})