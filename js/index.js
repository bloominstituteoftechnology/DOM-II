// Your code goes here

const funBus = document.querySelector('h1.logo-heading');
const allLinks = document.querySelectorAll('nav a');
const allImgs = document.querySelectorAll('img');
const allHeaderTwo = document.querySelectorAll('h2');
const allHeaderFour = document.querySelectorAll('h4')
const body = document.querySelector('body');
const headerScroll = document.querySelector('header')
const allBtns = document.querySelectorAll('.btn')
const h2Text = document.querySelector('.content-destination h2')

/***************** EVENT LISTENERS ******************/

allLinks.forEach(el => {
  el.addEventListener('mouseover', mouseOvr)
})

allImgs.forEach(el => {
  el.addEventListener('dblclick', dblClick)
})

document.addEventListener('scroll', useScroll)

window.addEventListener('resize', useResize)

document.addEventListener('keydown', keyDown)

body.addEventListener('wheel', useWheel)

window.addEventListener('load', useLoad)

document.addEventListener('mouseup', useMouseUp)

document.addEventListener('mousedown', useMouseDwn)

h2Text.addEventListener('mouseenter', useMouseEntr)
/******************** EVENT FUNCTIONS *****************/

allLinks.forEach(el => {
  el.addEventListener('click', event => {
    console.log('test');
    event.preventDefault()
  })
})

function mouseOvr(event) {
  event.target.style.color = 'orange';
}

function keyDown(event) {
  if (event.key === 'A') {
    funBus.style.color = 'blue'
  }
}

function dblClick(event) {

  if (event.target.style.border === '2px dashed green') {
    event.target.style.border = 'none'
  } else {
    event.target.style.border = '2px dashed green'
  }
}

function useWheel(event) {

  body.style.background = 'orange';
}

function useResize(event) {
  allHeaderTwo.forEach(el => {
    el.style.border = '2px solid purple'
  })
}

function useLoad(event) {
  allHeaderFour.forEach(el => {
    el.style.color = 'blue';
  })
}

function useScroll(event) {
  headerScroll.style.background = 'pink';
}

function useMouseDwn(event) {
  allBtns.forEach(el => {
    el.style.background = 'pink';
  })
}

function useMouseUp(event) {

  allBtns.forEach(el => {
    el.style.background = 'black';
  })
}

function useMouseEntr(event) {
  event.target.style.color = 'blue';
}



