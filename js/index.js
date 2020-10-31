// Your code goes here

const Bus = document.querySelector('.intro img')
Bus.addEventListener('click', e => alert('Hey! Don\'t touch the bus!'))

const Fun = document.querySelector('.logo-heading')
Fun.addEventListener('mouseover', e => e.target.style.fontSize = '6rem')
Fun.addEventListener('mouseleave', e => e.target.style.fontSize = '3rem')

const Welcome = document.querySelector('.intro h2')
Welcome.addEventListener('dblclick', e => e.target.style.color = 'red')
Welcome.addEventListener('dblclick', e => e.target.style.fontStyle = 'italic')

const Head = document.querySelector('header')
Head.addEventListener('wheel', e => e.target.style.backgroundColor = 'blue')

const Pic = document.querySelector('.content-destination img')
Pic.addEventListener('contextmenu', e => e.target.style.marginTop = '15rem')

const Foot = document.querySelector('.footer')
Foot.addEventListener('mousedown', e => e.target.style.backgroundColor = 'purple')
Foot.addEventListener('mouseup', e => e.target.style.backgroundColor = 'orange')

const Mount = document.querySelector('.destination:nth-of-type(2) h4')
Mount.addEventListener('copy', e => e.target.textContent = 'Hey! No copying!')

const Html = document.querySelector('html')
Html.addEventListener('keydown', e => e.target.style.fontFamily = 'arial')

 
// Stop Propagation
const LetsGo = document.querySelector('.content-section')
LetsGo.addEventListener('mouseover', e => e.target.style.border = '5px solid orange')

const map = document.querySelector('.content-section img')
map.addEventListener('mouseover', e => e.target.style.border = '3px dashed red')
map.addEventListener('mouseover', e => e.stopPropagation())

// Prevent Default
const Home = document.querySelectorAll('.nav')
Home.forEach(e => e.addEventListener('click', e => e.target.setAttribute('href', 'index.html')))
Home.forEach(e => e.addEventListener('click', e => e.preventDefault()))

//Stretch
