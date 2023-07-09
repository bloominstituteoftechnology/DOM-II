import './less/index.less'

//CLICK - 1
document.querySelector('nav :nth-child(1)').addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

//KEYDOWN - 2
window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<h1>NEVER CLICK 6 AGAIN</h1>'
    }
})
//  MOUSEOVER - 3
const logoHeading = document.querySelector('.logo-heading')

logoHeading.addEventListener('mouseover', evt => {
    evt.target.style.color = '#FFA500'
    logoHeading.textContent = 'ROLL OUT!'
})

//MOUSE LEAVE & MOUSE ENTER - 4 & 5
const destinations = document.querySelectorAll('.destination')
for(let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', evt => {
        destination.style.fontWeight = 'initial'
    })
}


//DoubleClick - 6
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

//MOUSEMOVE - 7
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    // console.log(`mousey boy is at ${clientX}, ${clientY}`)
})

//COPY - 8
const welcome = document.querySelector('h2')

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        welcome.textContent += text
    })
})

//RESIZE - 9

window.addEventListener('resize', () => {
    alert('Window Resized!')
})

 //ONLOAD - 10
 window.onload = function () {
    const footer = document.querySelector('.footer')
    footer.textContent = 'ALL ABOARD!'
    
 }

 //PREVENTDEFAULT()
document.querySelector('nav :nth-child(2)').addEventListener('click', function(e){
    alert('This took forever to do')
    e.preventDefault();
})
