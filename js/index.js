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
  alert("Don't press me further!")
})
// `wheel`
const wheel = window.addEventListener('wheel', function(event) {
  event.target.style.backgroundColor = "#FCE1CE";
  setTimeout(() => {
    event.target.style.backgroundColor = "";
  }, 3000)
})
// `drag / drop`

// `focus`

// `resize`

// `mousemove`
const mouseMove = document.querySelectorAll('.btn')

mouseMove.addEventListener('mousemove', function(event) {
  event.target.style.backgroundColor = "red";
  setTimeout(function() {
    event.target.style.backgroundColor = "";
  }, 3000)
})
// `select`
const select = document.getElementByTagName('body')

select.addEventListener('select', function() {
  alert('test');
})

// `dblclick`
const dblClick = document.querySelector('h1')

dblClick.addEventListener('dblclick', function(event) {
  event.target.parentNode.style.backgroundColor = "#BDDBE6";
  setTimeout(function() {
    event.target.parentNode.style.backgroundColor = "";
  }, 3000)
})
