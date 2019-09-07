// Your code goes here

// nav h1 changes to a one of a rotating array of colors each time you hover
const colors = ['red', 'orange', 'teal', 'green', 'blue', 'indigo', 'violet']

let h1Color = 0

const navH1 = document.querySelector('header')

//mouse enter event listener 
navH1.addEventListener('mouseenter', () => {
  navH1.style.color = colors[h1Color]
})

//nav h1 changes color on mouseleave 
navH1.addEventListener('mouseleave', () => {
  navH1.style.color = 'black'
  h1Color = h1Color === colors.length - 1 ? 0 : h1Color + 1
})


// dblclick event listener inverting color 
let inverted = false

const images = document.querySelectorAll('img')
document.querySelector('body').addEventListener('dblclick', () => {
  images.forEach(
    image => (image.style.filter = !inverted ? 'invert(1)' : 'invert(0)')
  )
  inverted = inverted ? false : true
})

// add color to header when clicked 
const headerSelector = document.querySelector('header')
let backgroundYellow = false 

headerSelector.addEventListener('click', () => {
  headerSelector.style.background = !backgroundYellow ? 'yellow' : 'white'
  backgroundYellow = !backgroundYellow ? true : false
})


//rotate nav links by 30 degrees on click 
const navItems = document.querySelectorAll('nav a')
const rotations = [...Array(navItems.length)].map(() => 90)
navItems.forEach((item, i) =>
  item.addEventListener('click', event => {
    event.stopPropagation()
    event.preventDefault()
    item.style.transform = `rotateZ(${rotations[i]}deg)`
    rotations[i] += 90
  })
)

// increasing border thickness on image as it gets dragged 
let borderThickness = 0

const firstSectionImage = document.querySelector('section img')
firstSectionImage.addEventListener('drag', event => {
  console.log(event)
  firstSectionImage.style.border = `${borderThickness}px solid red`
  borderThickness++
})

//return border thickness on image as it gets released 
firstSectionImage.addEventListener('dragend', event => {
  console.log(event)
  firstSectionImage.style.border = ''
  borderThickness = 0
})

// added bouncing border to first image on load 
let firstImageBorder = 0
let ascending = true

const firstImage = document.querySelector('.home img')
firstImage.addEventListener('load', () => {
  setInterval(() => {
    firstImage.style.border = `${firstImageBorder}px solid black`
    if (ascending) {
      if (firstImageBorder === 10) {
        ascending = false
      }
      firstImageBorder++
    } else {
      if (firstImageBorder === 0) {
        ascending = true
      }
      firstImageBorder--
    }
  }, 1)
})


// wheel background color on scroll 
const bodySelector = document.querySelector('body')
let backgroundGrey = false

bodySelector.addEventListener('wheel', () => {
  bodySelector.style.background = !backgroundGrey ? 'yellow' : 'white' 
  backgroundGrey = !backgroundGrey ? true : false
})



