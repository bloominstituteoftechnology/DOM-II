
let lowest = -1

document.addEventListener('click', function(event){
    if (event.target.matches('.block')) {
        event.target.style.order = lowest
        lowest--
    }
})

let rocket
let positions = new Map()

document.addEventListener('mousedown', function(event){
    if (event.target.matches('.block')) {
        rocket = setTimeout(moveRight,10,event.target, Date.now())
    }
})

document.addEventListener('mouseup', function(event){
    clearInterval(rocket)
})

function moveRight(box, time) {
    let newTime = Date.now()
    positions.set(box, positions.get(box) + Math.round((newTime - time)/10) || 10)
    box.style.marginLeft = `${positions.get(box)}px`
    rocket = setTimeout(moveRight, 10, box, newTime)
}