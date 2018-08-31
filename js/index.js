// Your code goes here
const navLinks = document.querySelectorAll("a");
const navbar = document.querySelectorAll("main-navigation"); 

navLinks.forEach(function(element){
  element.addEventListener('mouseover', function(event){
    event.target.style.color = "red"; 
    event.target.style.fontSize = "20px"; 
    event.target.style.transition = "1s";
    event.stopPropagation(); 
  }); 
  element.addEventListener('mouseout', function(event){
    event.target.style.color = "black"; 
    event.target.style.fontSize = "16px"; 
    event.target.style.transition = "1s";
  });  
});

const navLogo = document.querySelector('.logo-heading'); 

navLogo.addEventListener("click", function(){
  this.style.transform = "rotate(50040deg)"; 
  this.style.transition = "5s"; 
})

const buttons = document.querySelectorAll(".btn"); 

buttons.forEach(function(element){
  element.addEventListener('dblclick', function(event){
    event.target.style.borderColor = "blue"; 
    event.target.style.backgroundColor = "red"; 
  }); 
})

document.addEventListener("keydown", function(event){
  alert("Oops! You may have accidentally struck a key!");
});  

const img1 = document.querySelector("#adventure-img");

img1.addEventListener('mousedown', function(event){
  event.target.style.transform = "rotate(360deg)"; 
  event.target.style.transition = "5s"; 
})

const img2 = document.querySelector("#img2");

img2.addEventListener("mouseup", function(event){
  event.target.style.borderRadius = "50%"; 
  event.target.style.transition = "5s"; 
})

const pickDestination = document.querySelector("#pick-destination"); 

pickDestination.addEventListener("mousemove", function(event){
  event.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; 
  event.target.style.transition = "3s"; 
  event.target.style.borderRadius = "15px"; 
  event.target.style.marginBottom = "15px"; 
  event.target.style.padding = "10px"; 
})


document.addEventListener('copy', function(event){
  event.clipboardData.setData('text/plain', 'Hello, world!');
  event.clipboardData.setData('text/html', '<b>Hello, world!</b>');
  event.preventDefault();
  console.log("item copied"); 
});

const lastImg = document.querySelector(".last-img"); 

lastImg.addEventListener("mouseenter", function(event){
  event.target.style.filter= "invert(1)"; 
})