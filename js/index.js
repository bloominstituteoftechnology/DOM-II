// Your code goes here

const navElements = document.querySelectorAll('.nav-link')
navElements.forEach(element => {
    element.addEventListener('mouseover', function(event){
        navElements.forEach(element =>{
            element.style.color = "red"
        })
    })
})
navElements.forEach(element => {
    element.addEventListener('mouseout', function(event){
        navElements.forEach(element =>{
            element.style.color = "blue"
        })
    })
})

const images = document.querySelectorAll('img')
images.forEach((element, idx) => {
    element.id = `img-${idx}`
})
const imgOne = document.getElementById('img-0')
imgOne.addEventListener('dblclick', function(event){
    imgOne.style.display = 'none'
})

const imgTwo = document.getElementById('img-1')
imgTwo.addEventListener('mouseenter', function(event){
    imgTwo.style.display = 'none'
})
imgTwo.addEventListener('mouseleave', function(event){
    imgTwo.style.display = 'flex'
})

const imgThree = document.getElementById('img-2')
imgThree.addEventListener('mousedown', function(event){
    imgThree.style.display = 'none'
})
imgThree.addEventListener('mouseup', function(event){
    imgThree.style.display = 'block'
})

const imgFour = document.getElementById('img-3')
imgFour.addEventListener('click', function(event){
    imgFour.style.display = 'inline-flex'
})
imgFour.addEventListener('contextmenu', function(event){
    imgFour.style.display = 'inline-block'
})

const buttonElements = document.querySelectorAll('.btn')
buttonElements.forEach(element => {element.addEventListener('click', function (event){
        alert('You have been signed up!')
    })
}); 

