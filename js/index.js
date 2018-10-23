// Your code goes here
// `mouseover`
const nav = document.querySelector('.nav')

nav.addEventListener('mouseover', function(event) {
  event.target.style.color = 'orange';
  event.target.style.fontWeight = 900;
  setTimeout(function() {
    event.target.style.color = "";
    event.target.style.fontWeight = '';
  }, 500);
}, false);

// `keydown`

const home = document.querySelector('.home')

mainNav.addEventListener('keydown', function(event) {
  event.style.backgroundColor = #B7D9E3;
  setTimeout(function() {
    event.style.backgroundColor = '';
  }, 200);
}, false);

// `wheel`

const contentTop = document.querySelector('content-selection > .text-content')

contentTop.addEventListener('wheel', function(event) {
    event.target.style.fontSize = "40px";
    setTimeout(function() {
      event.target.style.fontSize = "";
    }, 500);
}, false);

// `drag / drop`


// `load`


// `focus`


// `resize`


// `scroll`


// `select`
const intro = document.querySelector('.intro')

intro.addEventListener('select', function(event) {
  event.target.parentNode.innerHTML = 'Selected elements!';
})

// `dblclick`
const button = document.querySelector('.content-destination > img')

button.addEventListener('dblclick', function(event) {
  event.target.parentNode.style.display = "none";
  setTimeout(function() {
    event.target.parentNode.style.display = "";
  }, 900)
}, false)
