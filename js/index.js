


//=====- querySelector declerations
const homeNav = document.querySelectorAll(".nav-link")[0];
const aboutUsNav = document.querySelectorAll(".nav-link")[1];
const blogNav = document.querySelectorAll(".nav-link")[2];
const contactNav = document.querySelectorAll(".nav-link")[3];
const mainNavigation = document.querySelector(".main-navigation")
const img = document.querySelectorAll("img");
const nav = document.querySelectorAll(".nav")
const logoHeading = document.querySelector(".logo-heading");

// // =====- new elements
// const burgerArrow = document.createElement("span");
// burgerArrow.textContent = "&#8964;";
// mainNavigation.appendChild(burgerArrow);

//=====- event listeners

// contact eventlistner

homeNav.addEventListener("click", (e)=>{
  e.preventDefault()
  e.stopPropagation();

  console.log("This is the child element.")
  homeNav.style.border = "2px solid red";
  homeNav.style.borderRadius = "100%";
  homeNav.style.padding = "1px";
})

aboutUsNav.addEventListener("click", (e)=>{
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
     ease: Bounce.easeOut, y: -500 
    });
})

