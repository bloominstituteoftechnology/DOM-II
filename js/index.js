// Your code goes here

//MOUSEOVER colors the tags red when I hover over
let letsGo = document.querySelector(".text-content h2");

letsGo.addEventListener('mouseover', (el)=>{
    el.target.style.color = "red";
})

//MouseOut
letsGo.addEventListener('mouseout', (el)=>{
el.target.style.color = "black"})

//RESIZE :  fun bus goes all CAPS! when resizing the window

let funBus = document.querySelector('.logo-heading');

window.addEventListener('resize', (el)=>{
    funBus.textContent = "FUN BUS!";
})

//DOUBLECLICK  when I double click the navs the background turns blue

let home = document.querySelector('.main-navigation');

home.addEventListener('dblclick', (el)=>{
    el.target.style.color = "blue";
})


//LOAD when the page loads I get an alert message
window.addEventListener('load', ()=>{
    alert("The page loaded")
})



//FOCUS 
let aTag = document.querySelector(".nav-link");
aTag.addEventListener('blur', (el)=>{
aTag.style.backgroundColor = "pink";
})


//SCROLL  page automatically is scrolled to the bottom when page loads
window.addEventListener('scroll', (el)=>{
el.scroll(4000)
})

//wWHEEL
document.addEventListener("wheel", function(event){
    alert('Stop wheeling!!!');
    
 });

//drag&drop still not working
let welcome = document.querySelector(".intro h2");
welcome.addEventListener("drag", ()=>{
welcome.style.color = "blue"
})




//keydown not working
let key = document.querySelector(".main-navigation");

key.addEventListener('keydown', (el) =>{
    if (event.keyCode === 65) {
        return el.target.style.backgroundColor = "red";
    }})
