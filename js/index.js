// Your code goes here

// -- "mouseover" -- 
const headerLogo = document.querySelector('.logo-heading');

headerLogo.addEventListener('mouseover', function(event){
    // console.log('MouseOver LOGO') // TEST
    event.target.style.color = "gold"
});

// -- "keydown" -- 
const newBod = document.querySelector("body");

newBod.addEventListener('keydown', function(event){
    // console.log("KEYDOWN") // TEST
    event.target.style.background = "gold"
});

// -- "load" -- 
const newNav = document.querySelectorAll("a");

newNav.addEventListener("load", function(event){
    event.target.style.color = "navy"
});





