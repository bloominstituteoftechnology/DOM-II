// Event for page load
window.addEventListener('load', (event) => {
    console.log('The page has loaded')
})

// Adding subText for button presses ie: A = aqua
const subText = document.createElement ('h3')
subText.textContent = 'Press A, O, R, Y, B, W, to change colors'
subText.style.fontSize = '1.5rem'
const h1 = document.querySelector('h1')
h1.appendChild(subText)
h1.style.textAlign = 'center'

// Change the body color when a key is pressed
window.addEventListener('keydown', (event) => {
    if (event.key == 'a') {
        document.body.style.background = 'aqua'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'o') {
        document.body.style.background = 'orange'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'r') {
        document.body.style.background = 'red'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'y') {
        document.body.style.background = 'goldenrod'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'b') {
        document.body.style.background = 'black'
        document.body.style.visibility = 'visible'
    }

    if (event.key == 'w') {
        document.body.style.background = 'white'
        document.body.style.visibility = 'visible'
    }

    console.log(event.key)
})
