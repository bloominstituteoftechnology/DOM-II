// Your code goes here
/* 
  copy
  keypress
  click
  doubleclick
  mouseenter
  mouseleave
  mouseover
  * scroll   - onscroll   - Bubbles = Yes
  wheel
  resize   - onresize   - Bubbles = No - window object only
  focus    - onfocus    - Bubbles = No
  blur     - onblur     - Bubbles = No
  focusin  - onfocusin  - Bubbles = Yes
  focusout - onfocusout - Bubbles = Yes
*/

// 1- Create a function called 'get'
// that takes a CSS selector as its argument
// and executes document.querySelector with the argument.
const select = (selector) => {
  return document.querySelector(selector)
}

const selectAll = (selector) => {
  return document.querySelectorAll(selector)
}

// Select the navbar
const nav = select('.nav')

// Select each image
const imgFunBus = select(`[src='img/fun-bus.jpg']`)
const imgAdventure = select(`[src='img/adventure.jpg']`)
const imgFun = select(`[src='img/fun.jpg']`)
const imgDestination = select(`[src='img/destination.jpg']`)

// Select all and each destination
const destination = selectAll('.destination')

const funInTheSun = destination[0]
const mountainExcursion = destination[1]
const islandGetaway = destination[2]

const attendance = (e) => alert(e.target.textContent)

// Select all of the heading 2s
const allH2s = selectAll('h2')
allH2s.forEach(h2 => {
  h2.addEventListener('click', attendance)
})
