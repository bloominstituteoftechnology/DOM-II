// Your code goes here

// Mouseover
const navA = document.querySelectorAll(".nav a");
navA.forEach(function(element){ 
    element.addEventListener('mouseover', function() {  
        element.style.color = 'red';
        element.style.opacity = '0.5'
     });
  })
navA.forEach(function(element){ 
element.addEventListener('mouseout', function() {  
    element.style.color = 'yellow';
    element.style.opacity = '1'
    });
})

// Click
const img = document.querySelectorAll("img");
img.forEach(function(element){
    element.addEventListener('click', function(){
        element.classList.toggle('dim')
    })
})

// Load
const logo = document.querySelector(".logo-heading");
const headerBar = document.querySelector(".main-navigation");

window.addEventListener("load", function(event) {
    logo.style.color = 'yellow';
    headerBar.style.backgroundColor = 'black';
    navA.forEach(function(element){ 
            element.style.color = 'yellow';
         });
    
    console.log("All resources finished loading!");
  });

// Double Click
const btn = document.querySelectorAll(".btn");
const form = document.querySelector("form")
btn.forEach(function(element){ 
    element.addEventListener('dblclick', function() {  
        form.classList.toggle('hide')
     });
  })
