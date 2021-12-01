import './less/index.less'

// Your code goes here!

//click event
const homeButton = document.querySelector('a')
function changeColor(){
  homeButton.style.color = 'purple';  
  homeButton.style.fontSize = '5rem';
}

homeButton.addEventListener('click', changeColor);

//double click event
const welcomeFunBus = document.querySelector('h2');

function funBus(){
    welcomeFunBus.style.fontSize = '2rem';
}

welcomeFunBus.addEventListener('dblclick', funBus);

//DOMcontentloaded event

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');
});

//keyup event
const adventure = document.querySelector('.text-content:nth-of-type(2)');
const adventureHeading = adventure.querySelector('h2');

function colorChange(e){
    if(e.code === 'KeyM') {
     adventureHeading.style.color = 'purple';
    } 
 }
 document.addEventListener('keyup', colorChange);



//wheel event
// const boat = document.querySelector('img');

// function boatWheel(e){
//     e.preventDefault();
//     if(e.deltaY < 0){
//         scale *= e.deltaY * -2;
//     } else {
//         scale/= e.deltaY * 2;
//     }
//     scale = Math.min(Math.max(.125, scale), 4);
// }

// let scale = 1;

// boat.addEventListener('wheel', boatWheel);

function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('div');
  document.onwheel = zoom;

//mousedown event



//mouseup event



//mouseover event



//mouseout event



//keydown event
const letsGo = document.querySelector('.text-content h2');

function Color(e){
    if(e.code === 'KeyJ') {
     letsGo.style.color = 'blue';
    } 
 }
 document.addEventListener('keydown', Color);