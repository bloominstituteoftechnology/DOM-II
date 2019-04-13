// Your code goes here
const foot = document.querySelector('.footer')
foot.addEventListener('mouseover', function(e){
    e.target.style.display = 'none'
})

const bigLetter = document.querySelector('h1')
bigLetter.addEventListener('keydown', function(e){
    e.target.fontSize = '8rem'
})

const para = document.querySelector('p')
para.addEventListener('wheel', function(e){
    para.lineHeight = '3'
})

const content = document.querySelector('.content-section')
content.addEventListener()