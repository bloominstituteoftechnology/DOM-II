import './less/index.less'

// Your code goes here!

// 1 - Load
window.onload = function (evt) {
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready to go!'

// 2 - Copy    
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
})

// 3 - Click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

// 4 - Double Click
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

// 5 - Keydown
window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = 'YOU RAN ORDER 66'
    }
})

// 6 - Mouse Move
document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY} = evt
    console.log(`mouse is at ${clientX}, ${clientY}`)
})

// 7 - Mouse Enter
// 8 - Mouse Leave
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}

}