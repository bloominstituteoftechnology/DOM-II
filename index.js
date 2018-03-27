//When a block is clicked, it should go to the top of the stack

const blocks = document.querySelector('.blocks')
const childrenArr = [...blocks.childNodes]

const toTop = event => {
  blocks.insertBefore(blocks.removeChild(event.target), blocks.firstChild)
  event.stopPropagation()
}

// add event listener to each child
childrenArr.map(child => child.addEventListener('click', toTop))
