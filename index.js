// When a block is clicked, it should go to the top of the stack

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