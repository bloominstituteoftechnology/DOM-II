// // Your code goes here
console.log("Test")
//event Event Listeners
window.addEventListener('load', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('mouseover', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('keydown', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('wheel', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('focus', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('resize', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('scroll', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('select', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('dblclick', event => {
  console.log(`a ${event.type} happened`)
})

window.addEventListener('drag / drop', event => {
  console.log(`a ${event.type} happened`)
})


// stop Propagation secetion
let navContainer = document.querySelector('.container.nav-container')
console.log(navContainer)

let navLogo = document.querySelector('.logo-heading')
console.log(navLogo)

navContainer.addEventListener('click', e => {
  console.log(`a ${e.type} happened nav`)
})

navLogo.addEventListener('click', e => {
  console.log(`a ${e.type} happened navLogo`)
})

navLogo.addEventListener('click', (e) => e.stopPropagation())

// prevent default section
document.querySelector(".nav").addEventListener("click", function(event) {
         event.preventDefault();
}, false)

// changing background color
window.addEventListener('dblclick', event => {
  document.body.style.backgroundColor = "red"
})
