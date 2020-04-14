// Your code goes here
const first = document.querySelector('.nav')
first.addEventListener('click',(event)=>{event.target.style.backgroundColor = 'yellow';})

const second = document.querySelector('body')
second.addEventListener('mousedown',(event)=>{event.target.style.backgroundColor = 'yellow';})

const third = document.querySelector('.footer')
third.addEventListener('mouseover', (event)=>{event.target.style.backgroundColor = 'pink';})

const fourth = document.querySelector('body')
fourth.addEventListener('mouseout', (event)=>{event.target.style.backgroundColor = 'purple';})

const fifth = document.querySelector('.nav')
fifth.addEventListener('dblclick', (event)=>{event.target.style.backgroundColor = 'white';})

const sixth = document.querySelector('h2')
sixth.addEventListener('mousemove', (event)=>{event.target.style.backgroundColor = 'green';})

const seven = document.querySelector('p')
seven.addEventListener('mouseup',(event)=>{event.target.style.backgroundColor = 'red';})

const eight = document.querySelector('body')
eight.addEventListener('keydown',(event)=>{event.target.style.backgroundColor = 'orange';})

const nine = document.querySelector('body')
nine.addEventListener('keyup', (event)=>{event.target.style.backgroundColor = 'black';})

const ten = document.querySelector('body')
ten.addEventListener('select', (event)=> {event.target.style.backgroundColor= 'teal';})

const eleven = document.querySelector('.content-pick')
eleven.addEventListener('click', (event)=> { console.log('Hello')})

const twelve = document.querySelectorAll('.btn')
twelve.forEach(item => {
    item.addEventListener('click', (event)=> { event.stopPropagation()})
})

const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', (event) => event.preventDefault())
})
