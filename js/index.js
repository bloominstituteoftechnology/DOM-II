// Your code goes here
const foot = document.querySelector('.footer')
foot.addEventListener('mouseover', function(e){
    e.target.style.display = 'none'
})

const contentDirection = document.querySelector('.content-destination')
contentDirection.addEventListener('mouseleave', () => {
    contentDirection.style.color = 'pink'
})

const para = document.querySelectorAll('p')
para.addEventListener('click', function(e){
    e.target.style.color = 'red'
})

const content = document.querySelector('.content-section')
content.addEventListener('click', () => {
    console.log(`This is how you click things`)
})

const add = document.querySelectorAll('a')
add.forEach(
    e =>  e.addEventListener('mouseover', function(e){
        (e.target.style.color = 'green')
}))

const main = document.querySelector('.main-navigation')
main.addEventListener('resize', function(e){
    e.target.fontFamily = 'Times New Roman'
})

const workBtn = document.querySelector('.btn')
workBtn.addEventListener('select', function(e){
    e.target.classList.remove('.btn')
})

const allP = document.querySelectorAll('p')
allP.forEach (
    e => (e.addEventListener('click', function(e){
    console.log(`This is how we do it!`)
})))

const wholePage = document.querySelector('html')
wholePage.addEventListener('dblclick', function(e){
    e.target.style.fontSize = ''
})