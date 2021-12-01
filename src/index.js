import './less/index.less'

// Your code goes here!

//Nav links highlighting and underlining

const nav = document.querySelectorAll('header nav a')
nav.forEach(item => {
   return item.addEventListener('mouseover', (e) => {
        e.target.style.color = 'blue'
        e.target.style.borderBottom = '2px solid black'
        item.addEventListener('mouseout', (e2) => {
            e2.target.style.color = ''
            e2.target.style.borderBottom = ''
        })
    })
    
})

//top image doubleclick turn into magic schoolbus.

const heroImg = document.querySelector('.home img')
heroImg.addEventListener('dblclick', (e) => {
    if(e.target.src !== 'https://dcmp.org/posterimages/series_4.jpg'){
        e.target.setAttribute('src','https://dcmp.org/posterimages/series_4.jpg')
    } else {
        e.target.setAttribute('src','http://localhost:9000/img/fun-bus.jpg')
    }
    
})

// invert strings titles

let titles = document.querySelectorAll('h2') 
let navTitle = document.querySelectorAll('h1')
let h4Titles = document.querySelectorAll('h4')

titles.forEach(title => title.addEventListener('click' , (e) =>{
    e.target.textContent = e.target.textContent.split('').reverse().join('')
}))

navTitle.forEach(title => title.addEventListener('click' , (e) =>{
    e.target.textContent = e.target.textContent.split('').reverse().join('')
}))

h4Titles.forEach(title => title.addEventListener('click' , (e) =>{
    e.target.textContent = e.target.textContent.split('').reverse().join('')
}))

// prevent defualts

nav.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.setAttribute('href', '#HelloWorld')
}) )