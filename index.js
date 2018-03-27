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

// While a mouse is clicked down on a box, it should move to the right
// TRAVELERS
const moveToRight = node => {
  let curLeft = parseInt(node.style.left)
  curLeft = `${curleft + 1}px`
}

const moveRight = e => {
  let childToMove = e.target
  // move right every 100ms
  setInterval(moveToRight(childToMove), 100)
  stopPropagation() 
}

childrenArr.map(child => child.addEventListener('mousedown', moveRight))
