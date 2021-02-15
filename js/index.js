// Your code goes here

const body = document.querySelector('body')
body.addEventListener('click', () => {
    console.log('Hey there!..')
})

body.addEventListener('click', event => {
    event.target.style.backgroundColor = 'silver';
    event.target.style.transform = "scale(1.1)";
    event.target.style.transition = "transform .5s";
})

body.addEventListener('scroll',event =>{
    event.target.style.transform = "scale(1)"
    event.target.style.transition = "transform .5s";
    event.target.style.backgroundColor = "gray"
})

const busInSand = document.querySelectorAll('img')[0]
console.log(busInSand)
busInSand.addEventListener("mouseover", event =>{
    event.target.style.transform = "skewy(360deg)";
    event.target.style.transition = "transform 0.5s";
})
 
busInSand.addEventListener("mouseleave",function(){
    busInSand.style.transform = "scale(1)"
})

const title = document.querySelector('.logo-heading')
title.addEventListener('mousemove', (event) => {
    event.target.style.transform = "scale(1.1)"
    if(event.target.style.color === "red"){
        event.target.style.color = "black"
    }else {
        event.target.style.color = "red";
    }
})
  
const navs = document.querySelectorAll('.nav');
navs.forEach((navsEl) =>{
    navsEl.addEventListener('mouseover', (event) =>{
        if(event.target.style.color === "red"){
            event.target.style.color = "purple"
        }else {
            event.target.style.color = "red";
        }

    })
})

const selecta = document.querySelector('.intro p');
selecta.addEventListener('mouseup', event => {
    event.target.style.color = "red";
})
selecta.addEventListener('mousedown', event => {
    event.target.style.color = "purple";
})

const boatimg = document.querySelectorAll('img')[3]

boatimg.addEventListener("mouseenter", function(){
    boatimg.style.transform = "scale(1.9)";
    boatimg.style.transition = "transform 0.2s";
   
})
 
boatimg.addEventListener("mouseleave",function(){
    boatimg.style.transform = "scale(1)"
})

const destColumns = document.querySelectorAll('.destination')
console.log(destColumns);
destColumns.forEach((el) => {
    el.addEventListener('click', event => {
        event.target.parentElement.style.transform = "rotate(360deg)";
        event.target.parentElement.style.transition = "transform 1s";
        event.target.style.backgroundColor = "aqua";
    })
})

const img3 = document.querySelectorAll('img')[2]
console.log(img3);
img3.addEventListener('dblclick', event => {
        event.target.parentElement.parentElement.style.transform = "rotate(360deg)";
        event.target.parentElement.parentElement.style.transition = "transform 1s";
        event.target.style.backgroundColor = "black";
    })
    img3.addEventListener('mouseover', event => {
        event.target.parentElement.style.transform = "rotatey(360deg)";
        event.target.parentElement.style.transition = "transform 1s";
        
    })


    const img2 = document.querySelectorAll('img')[1];
    img2.addEventListener("auxclick",()=>{
        img2.style.transform = "rotateY(360deg)";
        img2.style.transition = "transform 1s";
    })
const textP = document.querySelector('.content-section p')
textP.addEventListener('select', event => {
    event.target.style.color = "green";
})
