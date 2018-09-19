const blocks = document.querySelectorAll('.block')

// let lowestLocationInt = -1

// blocks.forEach(block => {
//   block.addEventListener('click', event => {
//     block.style.order = lowestLocationInt
//     lowestLocationInt--
//   })
// })

const margins = {
  red: 0,
  blue: 0,
  green: 0,
  pink: 0,
  gray: 0
}

const intervals = {}

blocks.forEach(block => {
  block.addEventListener('mousedown', event => {
    let color = block.classList.item(1).substring(7)
    clearInterval(intervals[color])
    intervals[color] = setInterval(() => {
      block.style.borderLeft = `${margins[color]}px solid white`
      margins[color] += 2
      if (margins[color] > 800) {
        clearInterval(intervals[color])
      }
    }, 1)
  })
})

blocks.forEach(block => {
  block.addEventListener('mouseup', event => {
    let color = block.classList.item(1).substring(7)
    clearInterval(intervals[color])
    intervals[color] = setInterval(() => {
      block.style.borderLeft = `${margins[color]}px solid white`
      margins[color] -= 2
      if (margins[color] === 0) {
        clearInterval(intervals[color])
      }
    }, 1)
  })
})

