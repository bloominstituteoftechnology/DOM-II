import './less/index.less'

// Your code goes here!
// 1 - load
const header = document.querySelector('h1')
header.textContent = 'Bus of Fun '
// 2 - copy
window.addEventListener(`copy`, () => {
    navigator.clipboard.readText()
    .then(text => {
        header.textContent +=  text
    })
})
//3 - click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})
//4 - double click
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = 'NOT SO FAST'
})
//5 - key down
window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<h1>WHY YOU DO THIS TO ME?!<h1>';
    }
})
// 6 - mousemove
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    // console.log(`mouse it at ${clientX}, ${clientY}`)
})
// 7 - mouseenter
// 8 - mouseleave
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold'
    })

destination.addEventListener('mouseleave', () => {
    destination.style.fontWeight = 'initial'
})
}
//dragend

mainImg.addEventListener('dragend', event => {
    document.body.style.backgroundColor = 'white'
})
//event propagation
const btnParent = get('.destination')

function changeParent(event){
    btnParent.style.backgroundColor = 'grey'
    event.stopPropagation()
}
btnParent.addEventListener('click', changeParent)

const btnChild = get('.btn')

function changeChild(event){
    btnChild.style.backgroundColor = 'lime'
    event.stopPropagation()
}
btnChild.addEventListener('click', changeChild)