// Must have a variable that selects the element(s) that you want from your html.
// Add an event listener to that variable. 
//Create an event listener that changes the background color of buttons when you doubleclick

function random(num) {
    return Math.floor(Math.random() * (num + 1))

}

const randCol = `rgb(${random(250)}, ${random(260)}, ${random(270)})`
const btns = document.querySelectorAll('.btn')

btns.forEach(currentBtn => {
    currentBtn.addEventListener('dblclick', () => {
        currentBtn.style.backgroundColor = randCol
    })
})