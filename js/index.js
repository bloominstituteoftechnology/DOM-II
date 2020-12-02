// Your code goes here
const logo = document.querySelector(".logo-heading");

const img = document.querySelector(".img-content img")

const body = document.querySelector("body")

const links = document.querySelectorAll(".nav-link")

const btn = document.querySelector(".destination")
console.log(btn)

logo.addEventListener("mouseover", function (event) {
    event.target.style.color = "goldenrod";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500)
});

const imgChange = document.querySelector(".intro img")
// console.log(imgChange)
document.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        imgChange.setAttribute("src", "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
    }
})

document.addEventListener("keyup", function (event){
    if (event.key === "Enter"){
        imgChange.setAttribute("src", "https://images.unsplash.com/photo-1593621283277-1c3a5cc1daf4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
    }
})

logo.addEventListener("click", function (event) {
    event.target.style.color = "blue";
})

window.addEventListener("load", function(event) {
    console.log("OK WE ARE AGO")
})

body.addEventListener("copy", function(event){
    console.log("You copied a part of or the whole of", event.target)
})

logo.addEventListener("dblclick", function(event){
    event.target.style.background = "purple"
})

logo.addEventListener("mouseover", function(event){
    event.target.style.fontSize = "2em"
})

logo.addEventListener("mouseout", function(event){
    event.target.style.fontSize = ""
})

document.addEventListener("keypress", function (event){
    if (event.key === "Enter"){
        img.setAttribute("src", "https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80")
    }
})



Array.from(document.links).forEach(function (link) {
    link.addEventListener("click", function (event) {
        console.log("STOP")
        event.preventDefault() //Do not know if this is correct or not. 
        //It seems to simple and easy.
    }) 
})

body.addEventListener("click", function(event){
    console.log("propagation test!")
})


btn.addEventListener("click", function(event){
    event.stopPropagation()
})
//YAY IT WORKS!!!!