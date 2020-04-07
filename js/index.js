/* 
  SOME EVENT OPTIONS:
    copy, keypress, click, doubleclick, mouseenter, mouseleave, mouseover
    scroll, onscroll, wheel, resize, focus, blur, focusin, focusout
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

// Select all and each destination
const destination = selectAll('.destination')

const funInTheSun = destination[0]
const mountainExcursion = destination[1]
const islandGetaway = destination[2]

// Display the textContent of the target calling this function
const attendance = (e) => alert(e.target.textContent)

// Select all of the h2s and add a click event listener
const allH2s = selectAll('h2')
allH2s.forEach(h2 => h2.addEventListener('click', attendance))
