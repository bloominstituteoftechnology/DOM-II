const blocks = document.querySelector('.blocks')
const childrenArr = [...blocks.childNodes]

//When a block is clicked, it should go to the top of the stack
const toTop = (event) => {
    let childToMove = blocks.removeChild(event.target)
    blocks.insertBefore(childToMove, blocks.firstChild)
    event.stopPropagation()  
}

// add event listener to each child
childrenArr.map(child => {
    child.addEventListener('click', toTop)
})

// travelers:
let interval 
let mouse = false
// While a mouse is clicked down on a box, it should move to the right
const moveToRight = node => {
    interval = setInterval(() => {
      (node.style.marginLeft = `${(parseInt(node.style.marginLeft) || 0) + 1}px`)
    }, 100)
}

const moveRight = e => {
    mouse = true
    let childToMove = e.target
    console.log('event worked through')
    //move right every 100 ms
    moveToRight(childToMove)
    e.stopPropagation()
}

childrenArr.map(child => child.addEventListener('mousedown', moveRight))

// STRETCH
// When the mouse button is released, it should travel back to 
// its original position
const moveLeft = e => {
    clearInterval(interval)
    interval = setInterval(() => {
      e.target.style.marginLeft = `${(parseInt(e.target.style.marginLeft) || 0) - 1}px`
    }, 100)
      e.stopPropagation()
  }
  childrenArr.map(child => child.addEventListener('mouseup', moveLeft))

// A mouse down that occurs during a transition back to the original position 
// should send it traveling to the right again from its current position
