// Your code goes here
// gaining acces to the logo heading
const logo = document.querySelector('.logo-heading');
// adding event listener - mouseover
logo.addEventListener('mouseover', function(e) {  
    e.target.style.color = "red";
  });
// adding event listener - mouseout
logo.addEventListener('mouseout', function(e) {  
    e.target.style.color = "";
  });


  // Bus image style opacity
  const bImage = document.querySelector(".intro img");
  bImage.addEventListener("mouseover", function() {
    bImage.style.opacity = 0.3;
   
 });
 bImage.addEventListener("mouseout", function() {
    bImage.style.opacity = 1;
 
 });


//a tags change random colors mouse over
 const aTag = document.querySelectorAll('.nav-link'); 
 aTag.forEach(function(element) {
    element.addEventListener("mouseover", function(event) {
      event.target.style.color = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
    });
  });


//click on the home container to change it's color
 const home = document.querySelector('.home'); 

 home.addEventListener('click', function(event) {
    home.style.backgroundColor = 'rgb(127, 255, 246)';
  });

//Buttons clicks
let buttons = document.querySelectorAll(".btn"); //get all buttons
for(let i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener('click', function() {
        alert("You have clicked on me!");
    })
} 