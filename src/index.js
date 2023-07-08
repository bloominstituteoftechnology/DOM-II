import './less/index.less'

//click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

//KEYDOWN 
window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<h1>NEVER CLICK 6 AGAIN</h1>'
    }
})
//  MOUSEOVER 
const logoHeading = document.querySelector('.logo-heading')

logoHeading.addEventListener('mouseover', evt => {
    evt.target.style.color = '#FFA500'
    logoHeading.textContent = 'ROLL OUT!'
})

//MOUSE LEAVE & MOUSE ENTER
const destinations = document.querySelectorAll('.destination')
for(let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', evt => {
        destination.style.fontWeight = 'initial'
    })
}


//DoubleClick
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

//MOUSEMOVE
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    // console.log(`mousey boy is at ${clientX}, ${clientY}`)
})

//COPY
const welcome = document.querySelector('h2')

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        welcome.textContent += text
    })
})

//FOCUS

window.addEventListener('resize', () => {
    alert('Window Resized!')
})

 //onload
 window.onload = function (evt) {
    const footer = document.querySelector('.footer')
    footer.textContent = 'ALL ABOARD!'
 }