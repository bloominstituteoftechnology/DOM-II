// Your code goes here
const navLinks = document.querySelectorAll("a"); 

navLinks.forEach(function(element){
  element.addEventListener('mouseover', function(event){
    event.target.style.color = "red"; 
    event.target.style.fontSize = "20px"; 
    event.target.style.transition = "1s"; 
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