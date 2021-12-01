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
const busText = document.querySelector('p')
function textColor(){
  busText.style.color = 'orange';  
}

busText.addEventListener('mousedown', textColor);


//mouseup event
const image = document.querySelector('img')
function imageGone(){
  image.style.display = none;
}

image.addEventListener('mouseup', imageGone);


//mouseover event
const destination = document.querySelector('.content-destination')
function colorSize(){
  destination.style.color = 'green';  
  destination.style.fontSize = '1rem';
}

destination.addEventListener('mouseover', colorSize);


//mouseout event
const footerCopy = document.querySelector('.footer p');

function bold(){
  footerCopy.style.fontWeight = 'bold';  
}

footerCopy.addEventListener('mouseout', bold);


//keydown event
const letsGo = document.querySelector('.text-content h2');

function Color(e){
    if(e.code === 'KeyJ') {
     letsGo.style.color = 'blue';
    } 
 }
 document.addEventListener('keydown', Color);