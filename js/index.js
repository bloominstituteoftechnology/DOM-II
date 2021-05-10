// Your code goes here
//

//mouseover
//keydown
//wheel
//load
//focus
//resize
//scroll
//select
//dblclick
//drag / drop

//mouseover
const mouseover = document.querySelector('#mouseover') 

mouseover.addEventListener('mouseover', event => {
    event.target.style.color = 'red';
    document.body.style.backgroundColor = 'blue';
})

//keydown
const keydown = document.querySelector('#keydown') 

keydown.addEventListener('keydown', event => {
    event.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';
})

//wheel
const wheel = document.querySelector('#wheel') 

wheel.addEventListener('wheel', event => {
    event.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';
})

//load
const load = document.querySelector('#load') 

load.addEventListener('load', event => {
    event.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';
})

//focus
const focus = document.querySelector('#focus') 

focus.addEventListener('focus', event => {
    event.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';
})

//resize
const resize = document.querySelector('#resize') 

resize.addEventListener('resize', event => {
    event.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';
})

//scroll
const scroll = document.querySelector('#scroll') 

scroll.addEventListener('scroll', event => {
    event.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';
})

//select
const select = document.querySelector('#select') 

select.addEventListener('select', event => {
    event.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';
})

//dblclick
const dblclick = document.querySelector('#dblclick') 

dblclick.addEventListener('dblclick', event => {
    dblclick.classList.toggle('large');
    event.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';
})



//************************************************drag*************************** 
var dragged;

document.addEventListener("drag", event => {

}, false);

document.addEventListener("dragstart", event => {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", event => {
  event.target.style.opacity = "";
}, false);


document.addEventListener("dragover", event => {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", event => {
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", event => {
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", event => {
  event.preventDefault();
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);




