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

// `drag / drop`

// `focus`

// `resize`

// `scroll`

// `select`

// `dblclick`
