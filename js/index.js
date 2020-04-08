/* 
  SOME EVENT OPTIONS:
    *copy, keypress, *click, *dblclick, *mouseenter, *mouseleave, *mouseover
    *auxclick, *wheel, resize, focus, blur, focusin, focusout, *contextmenu
*/

// Query selector utilities
const select = (selector) => document.querySelector(selector)
const selectAll = (selector) => document.querySelectorAll(selector)

// Select the navbar
const nav = select('.nav')

// src attributes of the images
const src =
{
  funBus: `[src='img/fun-bus.jpg']`,
  adventure: `[src='img/adventure.jpg']`,
  fun: `[src='img/fun.jpg']`,
  destination: `[src='img/destination.jpg']`
}

// Select each image
const imgFunBus = select(src.funBus)
const imgAdventure = select(src.adventure)
const imgFun = select(src.fun)
const imgDestination = select(src.destination)

// // Select all and each destination
const destination = selectAll('.destination')

const funInTheSun = destination[0]
const mountainExcursion = destination[1]
const islandGetaway = destination[2]


// **************  CALLBACK FUNCTIONS  ************** //

// Display the textContent of the target calling this function
const attendance = (e) => alert(e.target.textContent)

// Give the target a yellow background
const yellowBackground = (e) => e.target.style.backgroundColor = 'yellow'

// Prevent user from copying text
const preventCopy = (e) => {
  e.preventDefault()
  alert('You may not copy this text!')
}

// Toggle round, green borders
const giveRoundCorners = (e) => {
  e.target.classList.toggle('round-green-borders')
  // console.log(e)
}

// Toggle a 200px height
const shrinkIt = (e) => {
  e.preventDefault()
  e.target.classList.toggle('height-200px')
}

// Select all of the h2s
const allH2s = selectAll('h2')

// Prevent the context menu from appearing
const noContextMenu = (e) => {
  e.preventDefault()
  alert('Shortcut menu is not available in this context.')
}

// Event handlers
allH2s.forEach(h2 => h2.addEventListener('click', attendance))

imgFunBus.addEventListener('mouseover', giveRoundCorners)
imgFunBus.addEventListener('dblclick', giveRoundCorners)

imgAdventure.addEventListener('mouseenter',giveRoundCorners)
imgAdventure.addEventListener('mouseleave',giveRoundCorners)

imgFun.addEventListener('wheel', shrinkIt)
imgFun.addEventListener('contextmenu', noContextMenu)

// imgDestination.addEventListener('wheel', yellowBackground)

funInTheSun.addEventListener('copy', preventCopy)
funInTheSun.addEventListener('auxclick', yellowBackground)
