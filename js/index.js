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
    event.key = 'j';
    event.target.style.background = "gold"
});

// -- 'mouseenter' -- 
const mouseNone = document.querySelector('.footer');

mouseNone.addEventListener('mouseenter', function(event){
    // console.log(mouseNone)
    event.target.style.cssText = "display:none";
});

// -- 'wheel' --

// -- 'drag / drop' // 

// -- "load" -- 
// const newNav = document.querySelectorAll("a");

// newNav.addEventListener("load", function(event){
//     event.target.style.color = "navy"
// })

// -- 'focus' // 

// -- 'resize' // 

// -- 'scroll' // 



// -- 'select' // 


// -- 'double-click' -- 
const logoDbl = document.querySelector('.home .intro h2');

logoDbl.addEventListener("dblclick", function(event){
    event.target.style.cssText = "font-size:5rem;color:dodgerblue"
})






