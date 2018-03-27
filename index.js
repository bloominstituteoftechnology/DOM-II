// When a block is clicked, it should go to the top of the stack
// ROCKETS
const blocks = document.querySelector('.blocks')
const childrenArr = [...blocks.childNodes]// spread syntax, not an array 

const toTop = (event) => {
  let childToMove = blocks.removeChild(event.target)
  blocks.insertBefore(childToMove,blocks.firstChild)
  event.stopPropagation()
}

// add event listener to each child
childrenArr.map(child => {
  child.addEventListener('click', toTop)
})

let mouse = false
// While a mouse is clicked down on a box, it should move to the right
// TRAVELERS
const moveToRight = node => {
    setInterval(() => {
      (node.style.marginLeft = `${(parseInt(node.style.marginLeft) || 0) + 1}px`)
    }, 100)
}

const moveRight = e => {
  mouse = true
  let childToMove = e.target
  // move right every 100ms
  moveToRight(childToMove)
  e.stopPropagation() 
}

childrenArr.map(child => child.addEventListener('mousedown', moveRight)) 

// When the mouse button is released, it should travel back to its original position
const moveLeft = e => {
  mouse = false
  clearInterval(interval)
  interval = setInterval(() => {
    if(parsInt(e.target.style.marginLeft) === 0) clearInterval(interval)
    e.target.style.marginLeft = `${(parsInt(e.target.style.marginLeft) || 0) - 1}px`
  }, 100)
  e.stopPropagation()
}
// A mouse down that occurs during a transition back to the original position should send it traveling to the right agian from its current position
childrenArr.map(child => child.addEventListener('mouseup', moveLeft))