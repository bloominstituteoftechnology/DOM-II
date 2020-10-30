// Your code goes here

const Bus = document.querySelector('.intro img')
Bus.addEventListener('click', e => alert('Hey! Don\'t touch the bus!'))

const Fun = document.querySelector('.logo-heading')
Fun.addEventListener('mouseover', e => e.target.style.fontSize = '6rem')
Fun.addEventListener('mouseleave', e => e.target.style.fontSize = '3rem')

const Welcome = document.querySelector('.intro h2')
Welcome.addEventListener('dblclick', e => e.target.style.color = 'red')
Welcome.addEventListener('dblclick', e => e.target.style.fontStyle = 'italic')

const Html = document.querySelector('header')
Html.addEventListener('wheel', e => e.target.style.backgroundColor = 'blue')

const Pic = document.querySelector('.content-destination img')
Pic.addEventListener('contextmenu', e => e.target.style.marginTop = '15rem')

const Foot = document.querySelector('.footer')
Foot.addEventListener('mousedown', e => e.target.style.backgroundColor = 'purple')
Foot.addEventListener('mouseup', e => e.target.style.backgroundColor = 'orange')


 
// stop Propagation
const LetsGo = document.querySelector('.content-section')
LetsGo.addEventListener('mouseover', e => e.target.style.border = '5px solid orange')

const map = document.querySelector('.content-section img')
map.addEventListener('mouseover', e => e.target.style.border = '3px dashed red')
map.addEventListener('mouseover', e => e.stopPropagation())

