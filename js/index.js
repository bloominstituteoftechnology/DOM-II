// Your code goes here

//mouseenter/mouseleave

let navLogo = document.querySelector(".logo-heading")
navLogo.addEventListener("mouseenter", () => {
    navLogo.style.transform ="scale(3)";
    navLogo.style.transition = "transform 0.3s"
  } )
  navLogo.addEventListener("mouseleave", function() {
    navLogo.style.transform = "scale(1)"
  })
  navLogo.addEventListener("mouseenter", () => {
    navLogo.style.color = "orange"
  } )
  navLogo.addEventListener("mouseleave", function() {
    navLogo.style.color = "black"
  })

  //stop links from refreshing page

  const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped")
})

//mousedown
let changeColor = document.querySelector('.intro h2');
changeColor.addEventListener("mousedown", () => {
  changeColor.style.color ="blue"
})

//mouseup
let changeColor1 = document.querySelector('.intro p');
changeColor1.addEventListener("mouseup", () => {
  changeColor1.style.color ="red"
})

//click

let changeImg = document.querySelector('img');
changeImg.addEventListener("click", () => {
  changeImg.src="img/fun-bus.jpg"
})

//double click

let changeImg1 = document.querySelector('img');
changeImg1.addEventListener("dblclick", () => {
  changeImg1.src="web28/DOM-II/img/bus.jpg"
})

//resiz

const travel = document.querySelector(".img-content img");

window.addEventListener("resize", () => {
  travel.src = "web28/DOM-II/img/travel.jpg"
});

//mouseover 

const large = document.querySelector(".content-section .text-content p")

large.addEventListener("mouseover", function() {   
  
  large.style.fontSize = "4rem";
})

//keydown
let changeImgA = document.querySelector(".content-destination img")
window.addEventListener('keydown', checkKeyPress, false);
function checkKeyPress(key){
  if (key.keyCode == "65"){
    changeImgA.src="img/bus.jpg"
  }
}

//keyup
let changeImgR = document.querySelector(".img-fluid")
window.addEventListener('keyup', checkKeyPress, false);
function checkKeyPress2(key){
  if (key.keyCode == "66"){
    changeImgR.src="img/travel.jpg"
  }
}
//KeyPress
let changeImgP = document.querySelector(".content-section .img-content img")
window.addEventListener('keypress', checkKeyPress, false);
function checkKeyPress(key){
  if (key.keyCode == "97"){
    changeImgP.src="img/abeach.jpg"
  }
}
