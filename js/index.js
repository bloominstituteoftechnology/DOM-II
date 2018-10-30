// Your code goes here
// `load`
const load = window.addEventListener('load', event => {
  alert('Fun Bus has been loaded!')
})

// `mouseover`
const mouseOver = document.querySelector('nav');
mouseOver.addEventListener('mouseover', event => {
  event.target.style.color = 'orange';
  event.target.style.fontWeight = 1000;
  setTimeout(function() {
    event.target.style.color = "";
    event.target.style.fontWeight = "";
  }, 1000)
}, false)

// `keydown`
const keyDown = window.addEventListener('keydown', event => {
  console.log('button being pressed!')
})

// `wheel`
const wheel = window.addEventListener('wheel', function(event) {
  // event.stopPropagation();
  event.target.style.backgroundColor = "#FCE1CE";
  setTimeout(() => {
    event.target.style.backgroundColor = "";
  }, 3000)
})

// 'cut'
document.addEventListener('cut', function(event) {
  alert("Don't cut me!");
})

// `copy`
document.addEventListener('copy', function(event) {
  alert("Stop trying to copy me!");
})

// `resize`
const reSize = window.addEventListener('resize', function() {
  if(document.documentElement.clientWidth <= 500) {
    alert('Mobile Mode!');
  }
})

// `mousemove`
const mouseMove = document.querySelector('.btn')
mouseMove.addEventListener('mousemove', function(event) {
  event.target.style.backgroundColor = "red";
  setTimeout(function() {
    event.target.style.backgroundColor = "";
  }, 3000)
})

// `mouseenter`
const mouseEnter = document.querySelectorAll('img')

mouseEnter[0].addEventListener('mouseenter', event => {
  console.log('The Fun Bus!')
})
mouseEnter[1].addEventListener('mouseenter', event => {
  console.log('...mapping the route to take...')
  // event.target.style.span = "testing";
})
mouseEnter[2].addEventListener('mouseenter', event => {
  console.log('...to the canals that will take us to...')
})
mouseEnter[3].addEventListener('mouseenter', event => {
  console.log('...the beach destination!')
})

// `dblclick`
const dblClick = document.querySelector('body')

dblClick.addEventListener('dblclick', function(event) {
  // event.stopPropagation();
  event.target.parentNode.style.backgroundColor = "#BDDBE6";
  setTimeout(function() {
    event.target.parentNode.style.backgroundColor = "";
  }, 3000)
})
