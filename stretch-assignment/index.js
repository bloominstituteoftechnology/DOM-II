
let lowest = -1

document.addEventListener('click', function(event){
    if (event.target.matches('.block')) {
        event.target.style.order = lowest
        lowest--
    }
})

let rocket
let positions = new Map()
let gravity = new Map()

document.addEventListener('mousedown', function(event){
    if (event.target.matches('.block')) {
        clearTimeout(rocket) // bug fix if mouse up was missed
        let time = Date.now()
        rocket = setTimeout(moveRight, 10, event.target, time)
        if (!gravity.get(event.target)) gravity.set(event.target, setTimeout(gravityHandler, 10, event.target, time))
    }
})

document.addEventListener('mouseup', function(event){
    clearTimeout(rocket)
})

function moveRight(box, time) {
    let newTime = Date.now()
    positions.set(box, positions.get(box) + Math.round((newTime - time)/2) || 10)
    box.style.marginLeft = `${positions.get(box)}px`
    rocket = setTimeout(moveRight, 10, box, newTime)
}

function gravityHandler(box, time) {
    let newTime = Date.now()
    positions.set(box, Math.max(positions.get(box) - Math.round((newTime - time)/5), 10))
    box.style.marginLeft = `${positions.get(box)}px`
    setTimeout(gravityHandler, 10, box, newTime)
}