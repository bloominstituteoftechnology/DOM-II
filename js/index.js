// Your code goes here

// import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";


//=====- querySelector declerations
const contactNav = document.querySelectorAll(".nav-link");
const destination = document.querySelectorAll(".destination");
const btn = document.querySelectorAll("btn");
const mainNavigation = document.querySelector(".main-navigation")
const img = document.querySelectorAll("img");
const nav = document.querySelectorAll(".nav")
const logoHeading = document.querySelector(".logo-heading");

// =====- new elements
const burgerArrow = document.createElement("span");
burgerArrow.textContent = "&#8964;";
mainNavigation.appendChild(burgerArrow);

// if 

counter = 0

mainNavigation.addEventListener("click", ()=>{
  counter++;
  console.log('This is the parent you are clicking on')
    if (counter % 3 === 0 ){
      logoHeading.style.color = "red";
      logoHeading.style.fontSize = "8rem"
    } else if (counter % 5 === 0){
      logoHeading.style.color = "purple";
      logoHeading.style.fontSize = "8rem"
    } else if (counter % 3 === 0 && i % 5=== 0){
      logoHeading.style.color = "green";
      logoHeading.style.fontSize = "8rem"
    } else {
      logoHeading.style.color = "cyan";
      logoHeading.style.fontSize = "8rem"
    }
})




img[1].addEventListener("mouseover", ()=>{
  img[1].style.opacity = ".5"
})
img[1].addEventListener("mouseout", ()=>{
  img[1].style.opacity = "1"
})

img[2].addEventListener("mouseover", ()=>{
  img[2].style.opacity = ".5"
})
img[2].addEventListener("mouseout", ()=>{
  img[2].style.opacity = "1"
})

img[3].addEventListener("mouseover", ()=>{
  img[3].style.opacity = ".5"
})
img[3].addEventListener("mouseout", ()=>{
  img[3].style.opacity = "1"
})


// TweenMax.to(".container img")

