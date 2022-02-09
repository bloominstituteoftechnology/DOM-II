import './less/index.less'

// Your code goes here!
const focusButton = document.querySelector("div.btn");
const letsGo = document.querySelector("h1");
const title =  document.querySelector("header h2")
const nav = document.querySelector("header")
const zoom = document.querySelector("div.img-content")
const mouseOver = document.querySelector("div.destination");
const intro = document.querySelector('header p');
const footer = document.querySelector("footer");
const fun = document.querySelector(".content-destination h2")
const bottomContent = document.querySelector(".content-destination p")

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


  


mouseOver.addEventListener("mouseover", function(event) {
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

focusButton.addEventListener('copy', function(event) {
    focusButton.textContent = "yeet"
});

intro.addEventListener('cut', function(event){
    intro.textContent = "I'm Batman"
})

footer.addEventListener('paste', function(event){
    footer.textContent = "copyright Wayne INC 2020"
})


fun.addEventListener('click', function(event){
    fun.style.color = "pink"
})

bottomContent.addEventListener('mouseenter', function(event){
    bottomContent.style.backgroundColor = "purple"
})