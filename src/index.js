import './less/index.less'

// Your code goes here!
const hoverButton = document.querySelector("div.btn");
const letsGo = document.querySelector("h1");
const title =  document.querySelector("header h2")
const nav = document.querySelector("header")
const zoom = document.querySelector("div.img-content")


function hover(){
    hoverButton.classList.add("off");
}

hoverButton.addEventListener("click", hover)

letsGo.addEventListener('dblclick', evt => {
    letsGo.style.color = "blue" ;
})

//if you press down arrow, it changes title to welcome to the bat cave
function changeTitle(){
    title.textContent = "Welcome to the BatCave"
}

document.addEventListener('keydown', changeTitle)


function navColor(){
    nav.style.backgroundColor = "red"
}

window.addEventListener("load", navColor)

function zoomIn(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);
  
    zoom.style.transform = `scale(${scale})`;
  }
   let scale = 1;
 

  zoom.addEventListener('wheel', zoomIn);