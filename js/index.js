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
    e.target.style.color = 'red'
})

const content = document.querySelector('.content-section')
content.addEventListener('drag', function(e){
    e.target.justifyContent = 'space-around'
})

const add = document.querySelector('a')
add.addEventListener('focus', function(e){
    e.target.color = 'pink'
})

const main = document.querySelector('.main-navigation')
main.addEventListener('resize', function(e){
    e.target.fontFamily = 'Times New Roman'
})

const workBtn = document.querySelector('.btn')
workBtn.addEventListener('select', function(e){
    e.target.classList.remove('.btn')
})

const allP = document.querySelectorAll('p')
allP.addEventListener('click', function(e){
    console.log(`This is how we do it!`)
})

const wholePage = document.querySelector('html')
wholePage.addEventListener('dblclick', function(e){
    e.target.style.fontSize = ''
})