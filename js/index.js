// Your code goes here

const Bus = document.querySelector('.intro img')
Bus.addEventListener('click', e => alert('Hey! Don\'t touch the bus!'))

const Fun = document.querySelector('.logo-heading')
Fun.addEventListener('mouseover', e => e.target.style.fontSize = '6rem')
Fun.addEventListener('mouseleave', e => e.target.style.fontSize = '3rem')

const Welcome = document.querySelector('.intro h2')
Welcome.addEventListener('dblclick', e => e.target.style.color = 'red')
Welcome.addEventListener('dblclick', e => e.target.style.fontStyle = 'italic')

