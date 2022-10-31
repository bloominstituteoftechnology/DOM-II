import './less/index.less'

// Your code goes here!

//heading
const heading = document.querySelector('.logo-heading');
heading.addEventListener('click', e => {
    if(heading.style.color === 'blue'){
        heading.style.color = 'green'
    }else{heading.style.color = 'blue'}
})

//welcome
const welcome = document.querySelector('.intro');
welcome.children[1].addEventListener('mouseover', e => {
    welcome.children[1].textContent = 'Welcome To SUPER Fun Bus!'
})

welcome.children[0].addEventListener('drag',e => {
    welcome.children[0].style.borderRadius = '100%'
})


//let's go!
const letsGo = document.querySelectorAll('.content-section .text-content')[0];
window.addEventListener('keydown', e => {
    if(e.key === 'l'){
        letsGo.children[0].textContent = 'WHEEEE!'
    }
})


//adventure 
const adventure = document.querySelectorAll('.content-section .text-content')[1];
document.addEventListener('wheel', e =>{
    adventure.children[1].textContent = 'You adventured too fast!'
})

//buttons 
const buttons = document.querySelectorAll('.btn');
buttons.forEach(e => e.addEventListener('dblclick', (event) => {
    e.textContent = 'Fun was only a myth'
}))


//destination
const destination = document.querySelector('.content-destination');
destination.addEventListener('dblclick', e => {
    destination.style.border = '2px dotted black'
})

//document
document.addEventListener('keydown', e => {
    if(e.key === 'b'){
        document.body.style.backgroundColor = 'slategrey'
    }
})


//DANGER!!!
const danger = document.querySelectorAll('p');
document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
        danger.forEach(each => each.textContent = '')
    }
})

document.addEventListener('keydown', e => {
    if(e.key === 'Delete'){
        document.body.remove()
    }
})



