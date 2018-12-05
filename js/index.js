


//=====- querySelector declerations
const homeNav = document.querySelectorAll(".nav-link")[0];
const aboutUsNav = document.querySelectorAll(".nav-link")[1];
const blogNav = document.querySelectorAll(".nav-link")[2];
const contactNav = document.querySelectorAll(".nav-link")[3];
const mainNavigation = document.querySelector(".main-navigation")
const img = document.querySelectorAll("img");
const nav = document.querySelectorAll(".nav");
const logoHeading = document.querySelector(".logo-heading");
const destination = document.querySelectorAll(".destination");
const footer = document.querySelector("footer");

// // =====- new elements
// const burgerArrow = document.createElement("span");
// burgerArrow.textContent = "&#8964;";
// mainNavigation.appendChild(burgerArrow);

//=====- event listeners
/* 
1) resize
2) wheel
3) scroll
4) dblclick
5) click
6) mouseenter
7) mouseleave
8) mouseover
9) mouseout
10) load
*/

window.addEventListener("resize", ()=>{
  footer.style.backgroundColor = "black";
  footer.style.color = "white";
});

// scroll will change flex order and color
let destCounter = 0;
destination[0].addEventListener("wheel", ()=>{
  destCounter++;
  console.log("mousewheel activated")
  if (destCounter % 3 === 0 ){
    destination[0].style.order = "0"
  } else if (destCounter % 5 === 0){
    destination[0].style.order = "1"
    destination[0].style.backgroundColor = "red";
    destination[0].style.color = "white";
  } else {
    destination[0].style.order = "2"
  }
  
})
destination[1].addEventListener("wheel", ()=>{
  destCounter++;
  console.log("mousewheel activated")
  if (destCounter % 3 === 0 ){
    destination[1].style.order = "1"
  } else if (destCounter % 5 === 0){
    destination[1].style.order = "2"
  } else {
    destination[1].style.backgroundColor = "red";
    destination[1].style.color = "white";
    destination[1].style.order = "0"
  }
  
})
destination[2].addEventListener("wheel", ()=>{
  destCounter++;
  console.log("mousewheel activated")
  if (destCounter % 3 === 0 ){
    destination[2].style.backgroundColor = "red";
    destination[2].style.color = "white";
    destination[2].style.order = "2"
  } else if (destCounter % 5 === 0){
    destination[2].style.order = "1"
  } else {
    destination[2].style.order = "0"
  }
  
})

// contact eventlistner

homeNav.addEventListener("scroll", (e)=>{
  e.preventDefault()
  e.stopPropagation();

  console.log("This is the child element.")
  homeNav.style.border = "2px solid red";
  homeNav.style.borderRadius = "100%";
  homeNav.style.padding = "1px";
})

aboutUsNav.addEventListener("dblclick", (e)=>{
  e.preventDefault()
  e.stopPropagation();
  console.log("This is the child element.")
  aboutUsNav.style.border = "2px solid cyan";
  aboutUsNav.style.borderRadius = "100%";
  aboutUsNav.style.padding = "1px";
})

blogNav.addEventListener("click", (e)=>{
  e.preventDefault()
  e.stopPropagation();
  console.log("This is the child element.")
  blogNav.style.border = "2px solid blue";
  blogNav.style.borderRadius = "100%";
  blogNav.style.padding = "1px";
})

contactNav.addEventListener("click", (e)=>{
  e.preventDefault()
  e.stopPropagation();
  console.log("This is the child element.")
  contactNav.style.border = "2px solid purple";
  contactNav.style.borderRadius = "100%";
  contactNav.style.padding = "1px";
})

//logoHeader click color using fizz-buzz algorithm

counter = 0
console.log(counter);
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


//img opacity event listner on  mouse hover
img[0].addEventListener("mouseenter", ()=>{
  img[0].style.opacity = ".5"
  img[0].style.backgroundColor ="blue";
})
img[0].addEventListener("mouseleave", ()=>{
  img[0].style.opacity = "1"
  img[0].style.backgroundColor ="none";
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

// greensock

window.addEventListener("load", ()=>{
  TweenLite.from(img[0], 1, {
     ease: Bounce.easeOut, y: -25
    });

    TweenLite.from(img[1], 1, { 
      ease: Circ.easeOut, y: -25
    });

    TweenLite.from(img[2], 1, {
      ease: Circ.easeOut, y: -25
    });

    TweenLite.from(img[3], 1, { 
      ease: Circ.easeOut, y: -25
    });
})

