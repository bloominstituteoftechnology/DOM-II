// Your code goes here
let images = document.querySelectorAll("img")
images.forEach((element)=>{
    element.addEventListener("mouseenter", function( event ) {
        // highlight the mouseenter target
        event.target.style.border = "3px dashed black"
    }, false)
    element.addEventListener("mouseleave", function( event ) {
        // highlight the mouseenter target
        event.target.style.border = "none"
    }, false)
})

let maincontainer = document.querySelector(".home")
document.addEventListener("keydown", function(event){
    console.log(event.key)
    if(event.key == "ArrowLeft"){
        width = parseInt(window.getComputedStyle(maincontainer).getPropertyValue('max-width'))
        newWidth = width + 50
        maincontainer.style.maxWidth = newWidth + "px";
    } else if(event.key == "ArrowRight"){
        width = parseInt(window.getComputedStyle(maincontainer).getPropertyValue('max-width'))
        newWidth = width - 50
        maincontainer.style.maxWidth = newWidth + "px";
    }
}, false)

let allText = document.querySelectorAll("p")
allText.forEach((element)=>{
    element.addEventListener("click", function(event){
        element.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    })
    element.addEventListener("dblclick", function(event){
        element.style.textShadow = "1px 1px #000000"
    })
})

window.addEventListener("load", function(event){
    let response = prompt("Are you having fun on the bus?", "Yes/no")
})

let body = document.querySelector("body")
window.addEventListener('resize', function(event){
    body.style.backgroundColor = "black"
    body.style.color = "white"
})

let nav = document.querySelector(".main-navigation")
let navA = document.querySelectorAll(".nav-link")
navA.forEach((element)=>{
    element.addEventListener("click", function(event){
        event.preventDefault();
    })
})
window.addEventListener("wheel", function(event){
    nav.style.backgroundColor = "black"
    nav.style.color = "white"
    navA.forEach((element)=>{
        element.style.color = "white"
    })
})

/* `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop` */