// Your code goes here

const funBusImg = document.querySelector('#fun-bus-img')
funBusImg.addEventListener('click', function(event) {
    funBusImg.style.display = 'none'
})

const adventureImg = document.querySelector('#adventure-img')
adventureImg.addEventListener('mouseover', function(event) {
    adventureImg.style.width = '50%'
})

const funImg = document.querySelector('#fun-img')
funImg.addEventListener('dblclick', function(event) {
    funImg.style.opacity = '50%'
})

const welcomeHeader = document.querySelector('#welcome-header')
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        welcomeHeader.style.color = 'blue'
    } else {
        return
    }
})

window.addEventListener('load', function(event) {
    alert('page is fully loaded');
})

const welcomeText = document.querySelector('#welcome-text')
window.addEventListener('select', function(event) {
    welcomeText.style.color = 'blue'
})

const container = document.querySelector('.container')
container.addEventListener('mouseenter', function(event) {
    container.style.backgroundColor = 'teal'
})

container.addEventListener('mouseleave', function(event) {
    container.style.backgroundColor = 'yellow'
})

const destinationImg = document.querySelector('#destination-img')
window.addEventListener('wheel', function() {
    destinationImg.style.border = '5px solid orange'
})

const textContent = document.querySelector('.text-content')
document.addEventListener("drag", function(event) {
    textContent.style.color = 'green'
}, false);
