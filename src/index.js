import './less/index.less'

//mouseover
//mouseleave
const txt = document.querySelectorAll('h2, h4, p, .logo-heading, .nav .nav-link')
txt.forEach((tag) => {
    tag.addEventListener('mouseover', event => {
        event.target.style.color = 'orange'
    })
    tag.addEventListener('mouseleave', event => {
        event.target.style.color = ''
    })
})

//load
// window.addEventListener('load', event => [
//     alert('Hello friend!!!')
// ])

//click
const footer = document.querySelector('.footer')
footer.addEventListener('click', event => {
    event.target.style.backgroundColor = 'pink'
})

//dblclick
const photos = document.querySelectorAll('img')
photos.forEach((photo) => {
    photo.addEventListener('dblclick', event => [
        photo.src = ''
    ])
})

//keydown
const body = document.querySelector('body')
function yellowBg (event) {
    console.log(event.key)
    if (event.key === 'y'){
        body.style.backgroundColor = 'yellow' 
    }
}
body.addEventListener('keydown', yellowBg)

//preventDefault
const homeTag = document.querySelector('.nav-link.home')
homeTag.addEventListener('click', event => {
    event.preventDefault();
    console.log('this is working')
})

//wheel
const header = document.querySelector('header h1');
header.addEventListener('wheel', event => {
    event.target.style.fontSize = '7rem'
})