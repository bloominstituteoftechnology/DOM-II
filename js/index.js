const getRandomColor = () => {
  const COLORS = [
    'blue',
    'red',
    'green',
    'lightcoral',
    'lightblue',
    'yellow',
    'orange',
    'rebeccapurple',
    'lavendar',
  ]
  return COLORS[Math.floor(Math.random() * COLORS.length)]
}

// Unique Event Listener #1: `mouseover/mouseleave` on images
const images = document.querySelectorAll('img')
images.forEach(img => {
  img.addEventListener('mouseover', function() {
    this.style.opacity = 0.5
    this.style.filter = 'sepia(0.15)'
  })

  img.addEventListener('mouseleave', function() {
    this.style.opacity = 1
    this.style.filter = 'sepia(0)'
  })
})

// Unique Event Listener #2: `DOMContentLoaded` - show alert
document.addEventListener('DOMContentLoaded', function() {
  // alert('Welcome to the Fun Bus!')
})

// Unique Event Listener #3: `click` - change background color each button click
const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const COLORS = [
      'blue',
      'red',
      'green',
      'lightcoral',
      'lightblue',
      'yellow',
      'orange',
      'rebeccapurple',
      'lavendar',
    ]
    document.body.style.background = getRandomColor()
  })
})

// Unique Event Listener #4: `dblclick` plays cute sound
document.body.addEventListener('dblclick', () => {
  const audio = new Audio('assets/cartoon_pluck_hair.mp3')
  audio.play()
})

// Unique Event Listener #5: `copy` acts as a broken highlighter
document.addEventListener('copy', (e) => {
  const selection = document.getSelection()
  const selectedElement = selection.focusNode.parentElement
  selectedElement.style.background = getRandomColor()
})
