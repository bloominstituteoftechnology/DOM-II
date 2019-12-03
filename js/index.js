// Your code goes here

//Gasp imports
// import { gsap } from "gsap";
// import {CustomEase} from "..package/CustomEase.js";


const funbus = document.querySelector(`h1`);

funbus.addEventListener(`mouseover`,() => {
funbus.style.transform = "scale(1.2)";
funbus.style.transition = "transform 0.3s"
funbus.style.color = `red`;
// CustomWiggle.create("funWiggle", {wiggles: 10, type: "anticipate"});
// gsap.to(".logo-heading", {duration: 2, rotation: 30, ease: "funWiggle"});

})//1
funbus.addEventListener("mouseleave", () => {
    funbus.style.transform = "scale(1)"
    funbus.style.color = `purple`
})//2

const navlinks = document.querySelectorAll(`.nav-link`).forEach(el =>{
      
    el.addEventListener(`mouseenter`,() => {
    el.style.transform = "scale(1.2)";
    el.style.transition = "transform 0.3s"
    el.style.color = `orange`;

})//3

  el.addEventListener("mouseout", () => {
    el.style.transform = "scale(1)"
    el.style.color = `red`
})
  


})//4

const introsec = document.querySelector('.intro').addEventListener("contextmenu", (event) => {
    gsap.to('.intro', {
         duration: 1,
         rotateY: 180,
         ease: "elastic(1, 0.75)"
         

        })
        event.stopPropagation();
    })//5
    
const allimg = document.querySelectorAll("img").forEach(el => {
  el.addEventListener("dblclick", () => {
    gsap.to(el, {
     duration: 1,
     rotateX: 180,
     ease: "elastic(1, 0.75)"
    })
  })
})//6

//change to dark mode with keydown
const background = document.querySelector('body');
const header = document.querySelector('.main-navigation');
const footer = document.querySelector('footer');

document.addEventListener('keydown', (event) => {
  if(background.style.backgroundColor != 'black'){
    background.style.backgroundColor = 'black';
    background.style.color = 'whitesmoke';
  }
  if(header.style.backgroundColor != 'black'){
    header.style.backgroundColor = 'black';
    header.style.color = 'whitesmoke';
  }
  if(footer.style.backgroundColor != 'black'){
    footer.style.backgroundColor = 'black';
    footer.style.color = 'whitesmoke';
  }
})//7

//change back to light mode with keypress
document.addEventListener('keypress', (event) => {
  if(background.style.backgroundColor != 'white'){
    background.style.backgroundColor = 'white';
    background.style.color = 'black';
  }
  if(header.style.backgroundColor != 'white'){
    header.style.backgroundColor = 'white';
    header.style.color = 'black';
  }
  if(footer.style.backgroundColor != 'white'){
    footer.style.backgroundColor = 'white';
    footer.style.color = 'black';
  }
})//8

const viewPort = document.querySelector('body');
window.addEventListener('resize', () => {
 viewPort.style.backgroundColor = 'lightblue'
});//9


