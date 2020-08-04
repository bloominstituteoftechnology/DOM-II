// Your code goes here

const funBus = document.querySelector('h1.logo-heading');
const allLinks = document.querySelectorAll('nav a');
const allImgs = document.querySelectorAll('img');
const allBtns = document.querySelectorAll('.btn');
const body = document.querySelector('body');


/******************** EVENT FUNCTIONS *****************/

function mouseOvr(event) {
  event.target.style.color = 'orange';
}

function keyDown(event) {
  if (event.key === 'Escape') {
    funBus.style.color = 'blue'
  }
}

function dblClick(event) {

  if (event.target.style.border) {
    event.target.style.border = 'none'
  } else {
    event.target.style.border = '2px dashed green'
  }
}

function useScroll(event) {
  body.style.background = 'orange';
}
/***************** EVENT LISTENERS ******************/

allLinks.forEach(el => {
  el.addEventListener('mouseover', mouseOvr)
})

allImgs.forEach(el => {
  el.addEventListener('dblclick', dblClick)
})

allBtns.forEach(el => el{
  el.addEventListener('')
})

document.addEventListener('keydown', keyDown)

body.addEventListener('wheel', useScroll)

