/* eslint-disable no-unused-vars */
 
 
 const firstheading = document.querySelector(".logo-heading");
 firstheading.addEventListener("mouseenter", function(){
     alert('Hello World!')
 })

 

const navlist = document.querySelector("nav");
navlist.addEventListener("mouseover", function(){
    event.target.style.color = "red";})
    navlist.addEventListener("dblclick", function(){
        event.target.style.color = "blue"
    })

const funbuspic = document.querySelector(".funimg");
 funbuspic.addEventListener("mouseenter", function(){
    funbuspic.style.transform = "scale(1.6)";
    funbuspic.style.transition = "transform 1s";

})
const funbuspic1 = document.querySelector(".funimg");
 funbuspic1.addEventListener("mouseleave", function() {
    funbuspic.style.transform = "scale(1)";
})

// eslint-disable-next-line no-unused-vars
let text1 = document.querySelectorAll( "h2")
text1.forEach((element)=>{
    element.addEventListener("mouseover", ()=>{
        element.style.color = "red"
    })
})

let text2 = document.querySelectorAll("p")
text2.forEach((element) =>{
    element.addEventListener("mouseover", ()=>{
        element.style.fontSize = "25px";
        element.style.color ="green";
    
    })
})

 

