// Your code goes here

const navbar =document.querySelector('nav');

const navItems = document.querySelectorAll('nav a')
navItems.forEach((n) => {
    n.style.border = '1px solid black'
    n.style.padding = '10px'
    n.style.fontSize = '20px'
})



navbar.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red'
})

navbar.addEventListener('mouseover',(event) => {
    event.target.style.color = 'blue'
})

navbar.addEventListener('mouseout', (event) =>{
    event.target.style.color = ''
},false)

// body

const fullBody =document.querySelector('body');

let gkey = (event) =>{
    if (event.key === 'g'){
        event.target.style.backgroundColor = 'grey';
        event.target.style.color = 'white'
    }else {
        console.log('try another --- g')
    }
}
fullBody.addEventListener('keydown', gkey)




// img

const img =document.querySelector('.content-section .img-content img');

img.addEventListener('dblclick', (e) => {
    e.target.style.display = 'none'
})

img.addEventListener('wheel', (event) => {
    event.target.style.borderRadius = '50%'
})


// button

const button = document.querySelector('.content-pick .destination .btn')

button.addEventListener('click', (event) => {
    event.target.classList.toggle('btn')
})

// added textarea for select event and focus 

const textarea = document.querySelector('textarea');

textarea.addEventListener('select', (event) => {
    event.target.style.backgroundColor = 'orange'
    
})

textarea.addEventListener('focus',(e) => {
    e.target.style.background = 'pink'
})
