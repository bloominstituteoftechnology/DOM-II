// Your code goes here
const navLinks = document.querySelectorAll('.nav-link');
Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseenter', (event) => {
        event.target.style.color = 'white'
        event.target.style.backgroundColor = 'black'
    })
}) 
Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'black'
        event.target.style.backgroundColor = 'white'
    })
}) 
const h4 = document.querySelectorAll('h4');
Array.from(h4).forEach(element => {
    element.addEventListener('dblclick', (event) => {
    event.target.style.border = 'thin solid black'})
    
})

const buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach(button => {
    button.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'white'
        event.target.style.color = 'black'
        event.target.textContent = 'Fun awaits!'
    })
})
Array.from(buttons).forEach(button => {
    button.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'rgb(23, 162, 184)'
        event.target.style.color = 'white'
        event.target.textContent = 'Sign me up!'
    })
})

const h1 = document.querySelector('h1')
h1.addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '5rem'
    event.target.style.backgroundColor = 'yellow'
    event.target.style.color = 'black'
})
h1.addEventListener('mouseleave', (event) => {
    event.target.style.fontSize = '4rem'
    event.target.style.backgroundColor = 'white'
    event.target.style.color = 'black'
})

