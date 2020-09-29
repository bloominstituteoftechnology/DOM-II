// Your code goes here
const funBus = document.querySelector('.logo-heading')

funBus.addEventListener('mouseenter', function (event){
    event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 3000);
}, false)

const home = document.querySelector('.nav-container')

home.addEventListener('click', function (event) {
    //handles click event
    console.log(`
    event type: ${event.type}
    event target: ${event.target.nodeName}
    timestamp: ${Math.floor(event.timeStamp / 1000)}
    `)
})

const h2 = document.querySelector('.intro')

h2.children[1].addEventListener('mouseover', function (event){
    event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 3000);
}, false)

window.addEventListener('load', (event) => {
    alert ('page is fully loaded')
  });

const header = document.querySelector('header')

header.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';    
  }, true);
  