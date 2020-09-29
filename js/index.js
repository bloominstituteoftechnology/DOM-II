// Your code goes here
const navContainer = document.querySelector('.nav-container')
const navLinks = document.querySelectorAll('.nav-link')
const intro = document.querySelector('.intro')
const h2s = document.querySelectorAll('h2')
const paragraphs = document.querySelectorAll('p')
const textContent = document.querySelector('.text-content')
const contentDestination = document.querySelector('.content-destination')
const destination = document.querySelector('.destination')
const buttons = document.querySelectorAll('.btn')
const footer = document.querySelector('footer')

//1. mouseenter
navContainer.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'lightblue'
})
//2. mouseleave
navLinks.forEach(elem => { 
    elem.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'blue'
    })
})
//3. click
intro.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'yellow'
})
//4. mouseover
h2s.forEach(elem => {
    elem.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '38px'
        setTimeout(function() {
            event.target.style.fontSize = "";
          }, 500);    
    })
})

//5. dblclick
paragraphs.forEach(elem => {
    elem.addEventListener('dblclick', (event) => {
        event.target.style.backgroundColor = 'grey'
        event.target.style.color = 'white'
    })
})
//6. keydown
document.addEventListener('keydown', (event) => {
    if(event.key === "Escape")  {
        textContent.style.background = 'lightgrey'
    }
})
//7. keyup
document.addEventListener('keyup', (event) =>{
    if(event.key === " ") {
      contentDestination.style.background = 'lightgrey'  
    }
})
//8. mousedown



//9. 

//10. 